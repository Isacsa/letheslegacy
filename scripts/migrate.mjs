/* ============================================================
   Lethes Legacy — Migração única dos alojamentos -> Supabase
   ------------------------------------------------------------
   As fotos JÁ ESTÃO no R2 (Fase 1). Este script só:
     1) lê o array `listings` de alojamentos-data.js
     2) converte os caminhos relativos em URLs R2 completos
     3) faz INSERT das linhas na tabela `listings` do Supabase

   Correr UMA vez (Node 18+), a partir da raiz do repo:

     SUPABASE_URL="https://xxxx.supabase.co" \
     SUPABASE_SERVICE_ROLE_KEY="eyJ...service_role..." \
     node scripts/migrate.mjs

   Opções:
     DRY_RUN=1   -> só mostra o que seria inserido (não escreve)
     FORCE=1     -> insere mesmo que a tabela já tenha linhas
   ============================================================ */

import { readFile } from 'node:fs/promises';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const R2_BASE = (process.env.R2_PUBLIC_BASE || 'https://pub-aa72ada04c444be4ba353768bbc5513b.r2.dev').replace(/\/+$/, '');
const DRY = process.env.DRY_RUN === '1';
const FORCE = process.env.FORCE === '1';

if (!DRY && (!SUPABASE_URL || !SERVICE)) {
  console.error('Faltam variáveis: SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY (ou usa DRY_RUN=1).');
  process.exit(1);
}

const src = await readFile(new URL('../alojamentos-data.js', import.meta.url), 'utf8');
const listings = extractListings(src);
console.log(`Lidos ${listings.length} alojamentos de alojamentos-data.js`);

const rows = listings.map((l, i) => ({
  position: i,
  type: l.type,
  badge: l.badge || '',
  title: l.title,
  meta: l.meta || '',
  feature: l.feature || '',
  capacity: l.capacity || '',
  address: l.address || '',
  description: l.description || '',
  price: l.price || '',
  cover: toUrl(l.cover),
  preview: (l.preview || []).map(toUrl),
  gallery: (l.gallery || []).map(toUrl),
  videos: (l.videos || []).map(toUrl),
  units: l.units || []
}));

if (DRY) {
  console.log(JSON.stringify(rows, null, 2));
  console.log(`\n[DRY_RUN] ${rows.length} linhas prontas (nada foi escrito).`);
  process.exit(0);
}

// Evitar duplicados se já houver dados
const existing = await api('GET', '/rest/v1/listings?select=id&limit=1');
if (existing.length && !FORCE) {
  console.error('A tabela `listings` já tem dados. Usa FORCE=1 para inserir mesmo assim.');
  process.exit(1);
}

const res = await fetch(`${SUPABASE_URL}/rest/v1/listings`, {
  method: 'POST',
  headers: { ...authHeaders(), 'content-type': 'application/json', prefer: 'return=minimal' },
  body: JSON.stringify(rows)
});
if (!res.ok) {
  console.error(`Erro ${res.status}: ${await res.text()}`);
  process.exit(1);
}
console.log(`✅ Migrados ${rows.length} alojamentos para o Supabase.`);

// ── helpers ──────────────────────────────────────────────────
function toUrl(p) {
  if (!p) return p;
  if (/^https?:\/\//.test(p)) return p;
  return `${R2_BASE}/${String(p).replace(/^\/+/, '')}`;
}
function authHeaders() { return { apikey: SERVICE, authorization: `Bearer ${SERVICE}` }; }
async function api(method, path) {
  const r = await fetch(`${SUPABASE_URL}${path}`, { method, headers: authHeaders() });
  if (!r.ok) { console.error(`Erro ${r.status}: ${await r.text()}`); process.exit(1); }
  return r.json();
}
function extractListings(text) {
  const start = text.indexOf('[', text.indexOf('var listings'));
  if (start < 0) throw new Error('Não encontrei "var listings" em alojamentos-data.js');
  let depth = 0, i = start, inStr = false, q = '', esc = false;
  for (; i < text.length; i++) {
    const ch = text[i];
    if (inStr) {
      if (esc) esc = false;
      else if (ch === '\\') esc = true;
      else if (ch === q) inStr = false;
      continue;
    }
    if (ch === '"' || ch === "'") { inStr = true; q = ch; continue; }
    if (ch === '[') depth++;
    else if (ch === ']') { depth--; if (depth === 0) { i++; break; } }
  }
  const arr = text.slice(start, i);
  try { return JSON.parse(arr); }
  catch { return new Function('return (' + arr + ')')(); }
}
