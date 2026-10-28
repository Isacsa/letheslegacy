# Admin — operação do serviço existente

Atualizado em 28/10/2026. O painel já está publicado em https://letheslegacy.com/admin.html e o catálogo público já lê o Supabase.

**Mudar de computador não exige recriar o Supabase, correr SQL de setup ou voltar a migrar os alojamentos.** O guia anterior descrevia a instalação inicial e já não correspondia ao estado atual.

## Acessos separados

- **Admin do site:** email/password em Supabase Auth, para gerir alojamentos e media.
- **Dashboard Supabase:** conta de gestão do projeto/organização, para utilizadores, SQL e definições.
- **Cloudflare:** permissões no Pages/R2, para bindings, variáveis, ficheiros e deploys.
- **GitHub:** acesso ao código, para publicação pelo circuito GitHub → Pages.

Um login não substitui os outros. O email público da empresa não prova qual é a conta do admin. As passwords não estão no repositório.

## Usar o painel

1. Entrar em `/admin.html` com a conta autorizada.
2. Criar ou editar o alojamento e carregar fotografias/vídeos.
3. Esperar pelo fim dos uploads, guardar e confirmar em `/alojamentos.html`.

Guardar altera imediatamente produção. Layout e textos da landing alteram-se no código e precisam de deploy.

Eliminar um alojamento também tenta remover as suas fotografias/vídeos do R2. Remover media e guardar pode eliminar os objetos antigos. Um rollback do código não recupera esses dados/ficheiros.

## Adicionar um admin ao serviço atual

O gestor atual deve:

1. Criar/confirmar o utilizador em Supabase → Authentication → Users.
2. Confirmar que as políticas de escrita atuais usam `public.is_admin()` e `private.admins`.
3. Acrescentar apenas o email autorizado à lista existente:

```sql
insert into private.admins (email)
values (lower('SUBSTITUIR_PELO_EMAIL_AUTORIZADO'))
on conflict (email) do nothing;
```

4. Acrescentar o mesmo email a `ADMIN_EMAILS` no Pages, separado por vírgulas, preservando os restantes admins.
5. Fazer novo deploy para aplicar a variável nas Functions.
6. O titular define/recebe a password por um canal privado. Confirmar o login e uma operação de conteúdo planeada.

Manter signups públicos desligados. `disable_signup: true` foi confirmado pela API pública; as políticas/listas privadas ainda precisam de confirmação no dashboard.

Não voltar a executar `hardening.sql` para adicionar um admin: o script inicial semeia a lista com todos os utilizadores existentes e não foi escrito para execução repetida. Não executar `schema.sql` sobre o projeto atual: pode acrescentar novamente políticas de escrita mais permissivas.

## Configuração esperada no Pages

| Item | Valor |
| --- | --- |
| Projeto | `letheslegacy` |
| Binding R2 | `MEDIA` → `letheslegacy-media` |
| `SUPABASE_URL` | `https://sdodixuwfsevnoidkldv.supabase.co` |
| `SUPABASE_ANON_KEY` | Chave pública existente em `config.js` |
| `R2_PUBLIC_BASE` | `https://media.letheslegacy.com` |
| `ADMIN_EMAILS` | Emails autorizados, separados por vírgula |

As Functions validam o JWT no Supabase. A lista de emails é uma restrição adicional; se estiver vazia, qualquer sessão válida passa essa camada. RLS controla as alterações na tabela, mas as Functions R2 não consultam `private.admins` diretamente.

A sessão Cloudflare deste Mac expirou: esta tabela é o contrato do código, não uma confirmação de todos os valores guardados no dashboard. Aplicar as definições no ambiente correto e fazer novo deploy depois de alterar bindings/variáveis. [Bindings oficiais do Pages](https://developers.cloudflare.com/pages/functions/bindings/).

## Desenvolvimento local

```powershell
npx --yes wrangler@4.154.0 pages dev . --ip 127.0.0.1
```

A leitura do site usa a configuração pública atual. O login e o CRUD do admin comunicam com o Supabase real, mesmo em localhost.

Uploads precisam ainda de variáveis e do binding `MEDIA`. Há um modelo `.dev.vars.example`. A opção `--r2=MEDIA` cria armazenamento **local simulado**; não publica ficheiros em `media.letheslegacy.com`. Com a configuração pública atual, o admin apontaria o novo ficheiro para o R2 real, onde o objeto local não existe. Portanto, esse comando sozinho não valida uploads completos. Usar um ambiente de teste coerente ou uma operação real planeada no admin publicado.

## Diagnóstico

- Login falha: confirmar o utilizador no Supabase Auth; não procurar passwords no código.
- Login funciona, mas guardar falha: confirmar `private.admins` e RLS.
- Texto guarda, mas upload falha: confirmar binding `MEDIA`, variáveis, `ADMIN_EMAILS` e novo deploy.
- Fotos partidas: verificar existência do objeto e domínio. O catálogo/admin normalizam URLs antigos; a landing ainda usa URLs `r2.dev` diretos.
- Novo admin sem upload: confirmar o email em ambas as listas (`private.admins` e `ADMIN_EMAILS`).

Os SQL em `supabase/` ficam como referência da implementação inicial. `scripts/migrate.mjs` lê atualmente um array vazio e não copia o catálogo atual. Para backup público, usar `scripts/export-content.mjs`.
