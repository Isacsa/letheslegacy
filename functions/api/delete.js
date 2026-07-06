/* ============================================================
   Cloudflare Pages Function — POST /api/delete
   ------------------------------------------------------------
   Apaga media órfã do R2 (fotos/vídeos que deixaram de ser usados).
   Valida o login (JWT do Supabase). Só apaga chaves sob
   "alojamentos-web/" — nunca toca nos assets da landing.

   Body JSON: { "urls": ["https://pub-....r2.dev/alojamentos-web/..."] }
   Bindings/secrets: iguais ao /api/upload (MEDIA, SUPABASE_URL, SUPABASE_ANON_KEY, R2_PUBLIC_BASE)
   ============================================================ */

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: cors() });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const token = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '').trim();
  if (!token) return json({ error: 'Sem sessão.' }, 401);

  const who = await fetch(`${env.SUPABASE_URL}/auth/v1/user`, {
    headers: { apikey: env.SUPABASE_ANON_KEY, authorization: `Bearer ${token}` }
  });
  if (!who.ok) return json({ error: 'Sessão inválida.' }, 401);

  let body;
  try { body = await request.json(); } catch { return json({ error: 'JSON inválido.' }, 400); }

  const urls = Array.isArray(body && body.urls) ? body.urls : [];
  const base = String(env.R2_PUBLIC_BASE || '').replace(/\/+$/, '');

  const keys = urls
    .map((u) => keyFromUrl(u, base))
    .filter((k) => k && k.indexOf('alojamentos-web/') === 0); // guardrail: só media de alojamentos

  await Promise.all(keys.map((k) => env.MEDIA.delete(k)));
  return json({ deleted: keys.length });
}

// Helpers ---------------------------------------------------------------------
function keyFromUrl(u, base) {
  if (!u) return null;
  if (base && String(u).indexOf(base + '/') === 0) return String(u).slice(base.length + 1);
  try { return new URL(u).pathname.replace(/^\/+/, ''); } catch (e) { return null; }
}
function cors() {
  return {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'authorization, content-type'
  };
}
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json', ...cors() }
  });
}
