# Painel de Admin — Guia de Setup (Fase 2)

Este guia lista o que **tu** precisas de fazer nas tuas contas para ativar o painel.
O código do painel já está pronto no repositório. Depois de fazeres A–C, avisa-me que eu
faço o **passo final** (ligar o site público ao Supabase) e testamos tudo.

---

## A. Supabase (base de dados + login)

1. Cria um projeto em https://supabase.com (plano grátis).
2. **SQL Editor** → cola o conteúdo de [`supabase/schema.sql`](supabase/schema.sql) → **Run**.
   (cria a tabela `listings` e as regras de segurança)
3. **Project Settings → API** → copia:
   - **Project URL** (ex.: `https://xxxx.supabase.co`)
   - chave **anon public**
4. Cola as duas em [`config.js`](config.js) (`SUPABASE_URL` e `SUPABASE_ANON_KEY`).
5. **Authentication → Users → Add user**: cria o utilizador do cliente (email + password).
   ⚠️ Liga a opção **Auto Confirm User** (senão o login falha com "Email not confirmed").
6. Para a migração (passo B), copia também a chave **service_role** (secreta).
   *Usa-se só localmente; nunca a metas no frontend nem no git.*

## B. Migração dos alojamentos atuais (uma vez)

Na raiz do repositório (Node 18+):

```bash
SUPABASE_URL="https://xxxx.supabase.co" \
SUPABASE_SERVICE_ROLE_KEY="eyJ...service_role..." \
node scripts/migrate.mjs
```

- Insere os 9 alojamentos atuais no Supabase, apontando para as fotos que **já estão no R2**.
- Confirma em **Table Editor → listings** que aparecem 9 linhas.
- (Para testar sem escrever: `DRY_RUN=1 node scripts/migrate.mjs`.)

## C. Cloudflare Pages — ligar o R2 e variáveis à Function de upload

No painel da Cloudflare → **Pages → (o teu projeto) → Settings**:

1. **Functions → R2 bucket bindings → Add binding**
   - Variable name: `MEDIA`
   - R2 bucket: `letheslegacy-media`
2. **Environment variables** (Production **e** Preview):
   - `SUPABASE_URL` = a tua Project URL
   - `SUPABASE_ANON_KEY` = a chave anon
   - `R2_PUBLIC_BASE` = `https://pub-aa72ada04c444be4ba353768bbc5513b.r2.dev`
3. Faz um novo deploy (push ou "Retry deployment") para aplicar o binding.

---

## D. Passo final (eu trato)

Quando A–C estiverem feitos, eu:
- Ligo `alojamentos.html` / `alojamentos-data.js` para lerem do Supabase (em vez do array fixo),
  com suporte a **vídeos** na galeria e ao campo **preço**.
- Testamos ponta a ponta e fazemos o push — é aí que a mudança entra no site.

---

## Notas úteis

- **Onde fica o painel:** `/admin.html` (ex.: `teusite.com/admin.html`). Não tem link no site
  público — partilha o endereço só com o cliente.
- **Testar uploads localmente:** o upload usa a Function `/api/upload`, que só corre no ambiente
  Cloudflare. Para testar local usa `npx wrangler pages dev .` (em vez de `python -m http.server`).
  O login e a edição de textos funcionam em qualquer servidor local (falam direto com o Supabase);
  só o **upload de ficheiros novos** precisa do `wrangler` ou do site já publicado.
- **Segurança:** a chave anon é pública de propósito (só lê). Todas as escritas exigem login
  (RLS no Supabase) e o upload valida a sessão antes de gravar no R2.
