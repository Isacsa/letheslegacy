#!/usr/bin/env node
// Backup por leitura pública: nunca escreve no Supabase ou R2.
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const args = process.argv.slice(2);
const options = { download: false, output: null };
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--download-media') options.download = true;
  else if (args[i] === '--output' && args[i + 1] && !args[i + 1].startsWith('--')) options.output = args[++i];
  else if (args[i] === '--help') {
    console.log('node scripts/export-content.mjs [--output PASTA_NOVA] [--download-media]');
    process.exit(0);
  } else throw new Error(`Argumento inválido: ${args[i]}`);
}

const timestamp = new Date().toISOString();
const output = resolve(options.output || join(projectRoot, 'backups', timestamp.replace(/[:.]/g, '-')));
const configSource = await readFile(join(projectRoot, 'config.js'), 'utf8');
function setting(name) {
  const match = configSource.match(new RegExp(`\\b${name}\\s*:\\s*['"]([^'"]+)['"]`));
  if (!match) throw new Error(`Configuração pública em falta: ${name}`);
  return match[1];
}
const supabase = setting('SUPABASE_URL').replace(/\/+$/, '');
const anon = setting('SUPABASE_ANON_KEY');
const mediaBase = new URL(setting('R2_PUBLIC_BASE').replace(/\/+$/, '') + '/');
const response = await fetch(`${supabase}/rest/v1/listings?select=*&order=position,created_at`, {
  headers: { apikey: anon, authorization: `Bearer ${anon}`, prefer: 'count=exact' },
  signal: AbortSignal.timeout(30000)
});
if (!response.ok) throw new Error(`Leitura Supabase falhou: HTTP ${response.status}`);
const listings = await response.json();
if (!Array.isArray(listings)) throw new Error('Resposta inesperada: listings não é um array.');
const total = response.headers.get('content-range')?.split('/')[1];
if (total && total !== '*' && Number(total) !== listings.length) {
  throw new Error(`Resposta paginada (${listings.length}/${total}). Adaptar o exportador antes de criar um backup parcial.`);
}

const files = new Map();
const windowsPaths = new Map();
const externalImages = new Set();
function include(raw, source) {
  if (!raw) return;
  const url = new URL(raw, mediaBase);
  if (/^[a-z0-9-]+\.r2\.dev$/.test(url.hostname)) {
    url.protocol = mediaBase.protocol;
    url.host = mediaBase.host;
  }
  if (url.origin !== mediaBase.origin) {
    if (url.hostname === 'images.unsplash.com') externalImages.add(url.href);
    return;
  }
  if (url.search) throw new Error(`URL R2 com query não suportada: ${url.pathname}`);
  const segments = url.pathname.split('/').filter(Boolean).map(decodeURIComponent);
  const invalid = (s) => s === '.' || s === '..' || /[<>:"|?*\/\\\x00-\x1f]/.test(s) || /[. ]$/.test(s) || /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\.|$)/i.test(s);
  if (!segments.length || segments.some(invalid)) throw new Error(`Caminho incompatível com Windows: ${url.pathname}`);
  const relative = ['media', ...segments].join('/');
  const windowsPath = relative.toLowerCase();
  if (windowsPaths.has(windowsPath) && windowsPaths.get(windowsPath) !== url.href) {
    throw new Error(`Colisão de caminhos no Windows: ${relative}`);
  }
  windowsPaths.set(windowsPath, url.href);
  const existing = files.get(url.href);
  if (existing) {
    if (!existing.sources.includes(source)) existing.sources.push(source);
  } else files.set(url.href, { url: url.href, path: relative, sources: [source] });
}
for (const listing of listings) {
  for (const field of ['cover', 'preview', 'gallery', 'videos']) {
    const values = Array.isArray(listing[field]) ? listing[field] : [listing[field]];
    for (const url of values) include(url, `listings:${listing.id}:${field}`);
  }
}
for (const filename of ['index.html', 'alojamentos.html', 'style.css']) {
  const source = await readFile(join(projectRoot, filename), 'utf8');
  for (const match of source.matchAll(/https?:\/\/[^\s"'<>`\\)]+/g)) include(match[0], filename);
}

// Não substituir uma cópia anterior. O marcador também impede execuções concorrentes.
await mkdir(output, { recursive: true });
await writeFile(join(output, 'EXPORT-IN-PROGRESS'), timestamp + '\n', { flag: 'wx' });
try {
  await writeFile(join(output, 'listings.json'), JSON.stringify(listings, null, 2) + '\n', { flag: 'wx' });
} catch (error) {
  throw new Error(`O destino deve ser novo; não foi substituído nenhum backup: ${error.message}`);
}
const manifest = {
  generated_at: timestamp,
  supabase_url: supabase,
  media_base: mediaBase.href,
  listing_count: listings.length,
  media_count: files.size,
  scope: 'Public listings and referenced R2 media only; excludes Auth, policies, service settings and unreferenced objects.',
  external_images_not_downloaded: [...externalImages].sort(),
  downloaded: options.download,
  files: [...files.values()].sort((a, b) => a.path.localeCompare(b.path))
};
let completed = 0;
let cursor = 0;
let failures = 0;
async function download(file) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(file.url, { signal: AbortSignal.timeout(45000), redirect: 'error' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const contentType = res.headers.get('content-type') || '';
      if (!/^(image\/|video\/|application\/octet-stream)/i.test(contentType)) throw new Error(`Tipo inesperado: ${contentType}`);
      const bytes = Buffer.from(await res.arrayBuffer());
      if (!bytes.length) throw new Error('Ficheiro vazio');
      const target = join(output, ...file.path.split('/'));
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, bytes, { flag: 'wx' });
      file.bytes = bytes.length;
      file.content_type = contentType;
      file.sha256 = createHash('sha256').update(bytes).digest('hex');
      file.status = 'ok';
      return;
    } catch (error) {
      if (attempt === 3) {
        file.status = 'failed';
        file.error = error.message;
        failures++;
      } else await new Promise((r) => setTimeout(r, attempt * 500));
    }
  }
}
if (options.download) {
  await Promise.all(Array.from({ length: Math.min(4, manifest.files.length) }, async () => {
    while (cursor < manifest.files.length) {
      const file = manifest.files[cursor++];
      await download(file);
      completed++;
      if (completed % 50 === 0 || completed === manifest.files.length) console.log(`Media: ${completed}/${manifest.files.length}; falhas: ${failures}`);
    }
  }));
}
manifest.failed_downloads = failures;
manifest.completed_at = new Date().toISOString();
await writeFile(join(output, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n', { flag: 'wx' });
const { unlink } = await import('node:fs/promises');
await unlink(join(output, 'EXPORT-IN-PROGRESS'));
console.log(`Exportados ${listings.length} alojamentos e ${files.size} referências únicas de media para ${output}`);
if (failures) {
  console.error(`Backup incompleto: ${failures} ficheiros falharam. Consultar manifest.json.`);
  process.exitCode = 1;
}
