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
   - `R2_PUBLIC_BASE` = `https://media.letheslegacy.com` (ver secção F)
3. Faz um novo deploy (push ou "Retry deployment") para aplicar o binding.

---

## D. Passo final (eu trato)

Quando A–C estiverem feitos, eu:
- Ligo `alojamentos.html` / `alojamentos-data.js` para lerem do Supabase (em vez do array fixo),
  com suporte a **vídeos** na galeria e ao campo **preço**.
- Testamos ponta a ponta e fazemos o push — é aí que a mudança entra no site.

---

## E. Endurecimento de segurança (OBRIGATÓRIO — 3 passos)

Fecha a escrita a 3 camadas. Sem o passo 1, qualquer pessoa podia auto-registar-se e escrever.

1. **Desligar sign-ups públicos (CRÍTICO)** — Supabase → **Authentication → Sign In / Providers**
   (ou "Providers → Email") → desligar **"Allow new users to sign up"** → Save.
2. **Restringir escrita à lista de admins** — Supabase → **SQL Editor** → colar o conteúdo de
   [`supabase/hardening.sql`](supabase/hardening.sql) → **Run**. (Cria `private.admins`, semeada
   com os utilizadores existentes, e as políticas passam a exigir estar nessa lista.)
   O último SELECT mostra a lista — confirma que tem os emails certos.
3. **Functions só para emails de admin** — Cloudflare → Pages → Settings → **Environment
   variables** (Production) → adicionar `ADMIN_EMAILS` = emails autorizados separados por
   vírgula (ex.: `cliente@gmail.com,isacsa14@gmail.com`) → **Retry deployment**.

Verificação rápida de segurança (depois dos 3 passos):
- Tentar registar conta nova → deve falhar ("Signups not allowed").
- `/api/upload` sem login → 401; com login de email fora da lista → 403.
- Escrita anónima na tabela → 401 (row-level security).

---

## F. Domínio próprio para o media (OBRIGATÓRIO — corrige imagens partidas)

O endereço `pub-*.r2.dev` é um endpoint de **desenvolvimento** da Cloudflare: tem limite de
pedidos (em galerias grandes bloqueia e as imagens aparecem partidas) e não usa o CDN.
A solução é ligar um subdomínio próprio ao bucket:

1. **Ligar o domínio ao bucket** — Cloudflare → **R2 → letheslegacy-media → Settings →
   Public access → Custom Domains → Connect domain** → escrever `media.letheslegacy.com`
   → confirmar. (O DNS e o certificado ficam automáticos porque o domínio já está na conta.)
2. **Atualizar a variável** — Workers & Pages → **o projeto ligado a letheslegacy.com** →
   Settings → Environment variables → separador **Production** (não Preview!) →
   `R2_PUBLIC_BASE` = `https://media.letheslegacy.com` (valor exato, sem espaços — o valor
   original tinha um typo, `pubaa72…` sem hífen, que partia todos os uploads) → **Save** →
   Deployments → **Retry deployment** no mais recente. A env só entra em vigor num deploy novo.
   Nota: desde 2026-07 o admin constrói a URL das fotos a partir do `config.js` (no git),
   por isso um typo nesta env já não parte as thumbnails — mas deve ficar correta na mesma.
3. **Migrar os URLs guardados** — Supabase → SQL Editor → colar o conteúdo de
   [`supabase/media-domain.sql`](supabase/media-domain.sql) → **Run**.
   O SELECT final deve mostrar 0 em todas as colunas.
4. *(Opcional, depois de confirmar que o site está bem)* — R2 → bucket → Settings →
   Public access → **desativar o r2.dev** ("Public Development URL"), para garantir que
   nada volta a usar o endereço antigo.

Nota: o site e o admin já reescrevem URLs antigos `r2.dev` para o domínio novo em runtime,
por isso nada parte enquanto os passos não estiverem todos feitos — mas o passo 3 deve ser
feito na mesma para os dados ficarem certos.

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
