/* ============================================================
   Cloudflare Pages Function — POST /api/upload
   ------------------------------------------------------------
   Recebe um ficheiro de media, valida o login (JWT do Supabase)
   e grava-o no bucket R2. Devolve a URL pública.

   Necessário no projeto Cloudflare Pages (Settings):
     - Binding R2 chamado  MEDIA   -> bucket "letheslegacy-media"
     - Env vars / secrets:
         SUPABASE_URL        (ex.: https://xxxx.supabase.co)
         SUPABASE_ANON_KEY
         R2_PUBLIC_BASE      (ex.: https://pub-...r2.dev)
   ============================================================ */

const ALLOWED = {
  image: ['image/jpeg', 'image/png', 'image/webp', 'image/avif'],
  video: ['video/mp4', 'video/webm', 'video/quicktime']
};
const MAX_BYTES = 120 * 1024 * 1024; // 120 MB

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: cors() });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  // 1) Validar sessão (Supabase Auth) ----------------------------------------
  const token = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '').trim();
  if (!token) return json({ error: 'Sem sessão.' }, 401);

  const who = await fetch(`${env.SUPABASE_URL}/auth/v1/user`, {
    headers: { apikey: env.SUPABASE_ANON_KEY, authorization: `Bearer ${token}` }
  });
  if (!who.ok) return json({ error: 'Sessão inválida.' }, 401);

  // Defesa extra: se ADMIN_EMAILS estiver definido, só esses emails podem escrever.
  const user = await who.json().catch(() => ({}));
  const allowed = String(env.ADMIN_EMAILS || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
  if (allowed.length && !allowed.includes(String(user.email || '').toLowerCase())) {
    return json({ error: 'Sem permissão.' }, 403);
  }

  // 2) Ler o ficheiro ---------------------------------------------------------
  let form;
  try {
    form = await request.formData();
  } catch {
    return json({ error: 'Corpo inválido (esperado multipart/form-data).' }, 400);
  }

  const file = form.get('file');
  if (!file || typeof file.arrayBuffer !== 'function') {
    return json({ error: 'Campo "file" em falta.' }, 400);
  }

  const kind = String(form.get('kind') || 'image'); // 'image' | 'video'
  const slug = slugify(form.get('slug') || 'geral');
  const type = file.type || '';

  if (!(ALLOWED[kind] || []).includes(type)) {
    return json({ error: `Tipo de ficheiro não permitido (${type || 'desconhecido'}).` }, 415);
  }
  if (file.size > MAX_BYTES) {
    return json({ error: 'Ficheiro demasiado grande (máx. 120 MB).' }, 413);
  }

  // 3) Gravar no R2 -----------------------------------------------------------
  const ext = extFor(type);
  const key = `alojamentos-web/${slug}/${kind === 'video' ? 'videos/' : ''}${crypto.randomUUID()}.${ext}`;

  await env.MEDIA.put(key, file.stream(), {
    httpMetadata: { contentType: type, cacheControl: 'public, max-age=31536000, immutable' }
  });

  const base = String(env.R2_PUBLIC_BASE || '').replace(/\/+$/, '');
  return json({ url: `${base}/${key}`, key });
}

// Helpers ---------------------------------------------------------------------
// Nota: sem headers CORS — o admin chama esta API sempre same-origin.
function cors() {
  return {};
}
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' }
  });
}
function slugify(s) {
  return String(s)
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'geral';
}
function extFor(type) {
  return {
    'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/avif': 'avif',
    'video/mp4': 'mp4', 'video/webm': 'webm', 'video/quicktime': 'mov'
  }[type] || 'bin';
}
