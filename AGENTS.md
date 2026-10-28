# Contexto para o Codex

Este repositório é o site Lethes Legacy, já publicado em `https://letheslegacy.com`. Comunicar em português de Portugal.

## Ler primeiro

1. `README.md`
2. `docs/ARQUITETURA.md`
3. `docs/TRANSFERENCIA-WINDOWS.md` para instalação, acessos ou publicação.
4. `docs/ESTADO-2026-10-28.md` para distinguir factos verificados de configurações pendentes.

## Arquitetura e decisões

- HTML/CSS/JavaScript sem framework, sem `package.json` e sem build da aplicação.
- Cloudflare Pages, projeto `letheslegacy`, ligado ao GitHub privado `Isacsa/letheslegacy`.
- Supabase `sdodixuwfsevnoidkldv`: tabela pública `listings` e autenticação do admin.
- Cloudflare R2: bucket esperado `letheslegacy-media`, binding `MEDIA`, domínio `https://media.letheslegacy.com`.
- O admin está em `/admin.html`. Faz CRUD no Supabase e chama `/api/upload` e `/api/delete` para o R2.
- Alojamentos vêm do Supabase. O array vazio em `alojamentos-data.js` não é um catálogo para preencher.
- A passagem acordada é para **Windows, mantendo os serviços atuais**. Não transferir a propriedade das contas como parte da instalação.
- A conta GitHub do destinatário é `letheslegacy-lgtm`; usar o clone de `Isacsa/letheslegacy` como pasta de trabalho no Windows. O convite de escrita foi enviado em 28/10/2026; confirmar se já foi aceite quando for necessário publicar.
- Preservar o design, contactos e faixa institucional PRR, salvo pedido de alteração.

## Cuidados concretos

- `config.js` usa o Supabase de produção, também em localhost e em previews. Guardar no admin altera conteúdos reais. Não fazer testes de escrita nesse projeto sem autorização para esses dados.
- Não executar `scripts/migrate.mjs` para instalar noutro computador: é histórico e atualmente lê zero alojamentos. Não voltar a correr `schema.sql` ou `hardening.sql` sobre o serviço atual como passo de instalação.
- `alojamentos/`, `alojamentos-web/` e `uploads/` são cópias locais ignoradas pelo Git; não representam todo o R2 atual.
- A landing ainda usa vários URLs `pub-*.r2.dev` diretamente. Não desligar esse endpoint antes de os substituir e verificar. O catálogo/admin já normalizam URLs antigos para o domínio de media.
- Nunca guardar tokens Cloudflare, passwords, `service_role`, `.dev.vars`, sessões ou backups no Git ou no diretório publicado.
- Não copiar autenticação do computador anterior. Cada pessoa usa as suas contas e permissões.

## Desenvolvimento e validação

- Preview local: `npx --yes wrangler@4.154.0 pages dev . --ip 127.0.0.1`.
- Validar apenas os ficheiros alterados: `node --check nome.js`; para as Functions ESM usar `node --input-type=module --check < functions/api/upload.js` num terminal compatível, ou validar pela compilação do Wrangler.
- Para UI, verificar desktop e móvel, navegação, filtros e abertura/fecho das galerias conforme o âmbito da alteração. Não criar testes que apenas repitam a implementação.
- Antes de publicar, rever o diff e `git diff --check`; confirmar a branch de produção e o ambiente efetivo dos serviços.
- Trabalhar em branches `codex/...` quando for necessário criar uma branch. O push/merge para a branch de produção pode publicar automaticamente.
- Atualizar os documentos de contexto quando mudar a arquitetura ou o processo de publicação.
