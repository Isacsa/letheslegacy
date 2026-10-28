# Passagem para Windows

Decisão de 28/10/2026: manter os serviços atuais e dar acesso ao responsável da empresa. Não transferir contas nem criar uma infraestrutura nova.

## Precisa de GitHub?

| Uso | GitHub | Outros acessos |
| --- | --- | --- |
| Abrir o pacote no Codex e alterar ficheiros | Não | Codex e Node.js no Windows |
| Ver o site local e o catálogo atual | Não | Internet |
| Gerir alojamentos pelo admin | Não | Conta autorizada no admin |
| Publicar código pelo circuito atual | Sim, no caminho recomendado | Conta própria com convite aceite para o repositório privado |
| Gerir deploys, bindings, R2 e DNS | Não concede este acesso | Conta/permissões próprias no Cloudflare atual |
| Gerir utilizadores, SQL e permissões da BD | Não concede este acesso | Conta/permissões próprias no Supabase atual |

GitHub não é uma dependência do site em execução. É onde está o código e de onde o Cloudflare recebe as alterações. Uma conta gratuita de colaborador permite manter este fluxo. [Instruções oficiais de convite](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository).

Sem GitHub pode editar e entregar os ficheiros a Isac para publicar. Publicar diretamente com Wrangler exigiria acesso ao Cloudflare e deixaria de seguir o circuito habitual do código.

## 1. Aceitar o convite e clonar no Windows

A conta do destinatário é **`letheslegacy-lgtm`**, confirmada em 28/10/2026. Foi enviado um convite com permissão de escrita; o estado registado nessa data era pendente de aceitação.

1. Entrar no GitHub como `letheslegacy-lgtm` e aceitar o [convite do repositório](https://github.com/Isacsa/letheslegacy/invitations).
2. Instalar [Git para Windows](https://git-scm.com/downloads/win) e [Node.js LTS](https://nodejs.org/en/download), se ainda não estiverem instalados.
3. Abrir um terminal e clonar o repositório, autenticando com a conta do destinatário quando for pedido:

```powershell
New-Item -ItemType Directory -Force C:\Projetos | Out-Null
cd C:\Projetos
git clone --depth 1 https://github.com/Isacsa/letheslegacy.git
cd letheslegacy
git switch -c codex/primeiras-alteracoes
```

O histórico contém media antigo e ocupa centenas de MB; `--depth 1` evita descarregá-lo todo para começar. Não são necessárias credenciais de Isac. Antes do primeiro commit, configurar no Git o nome/email de autoria próprios.

## 2. Abrir no Codex e iniciar o site

1. No Codex do Windows, abrir **`C:\Projetos\letheslegacy`**, a pasta que contém `AGENTS.md`, `index.html` e `config.js`.
2. Colar no chat a mensagem de [ARRANQUE-CODEX.md](ARRANQUE-CODEX.md). O contexto e os guias estão no próprio repositório; não é necessário importar este chat ou o ZIP.
3. No terminal dessa pasta, executar:

```powershell
node --version
npx --yes wrangler@4.154.0 pages dev . --ip 127.0.0.1
```

Abrir http://127.0.0.1:8788. Se o PowerShell bloquear `npx.ps1`, usar `npx.cmd` no mesmo comando; não é necessário alterar a política global do Windows.

As imagens/vídeos continuam a vir do R2 atual. O clone contém os assets versionados e a configuração pública dos serviços; não precisa de descarregar os arquivos grandes para trabalhar normalmente.

### Pacote ZIP como alternativa/cópia

O pacote preparado anteriormente continua disponível como cópia independente: abrir a subpasta `projeto` no Codex. O ZIP não contém `.git` e não permite fazer push por si só; o `PACOTE.json` identifica o commit de base. Se já tiverem sido feitas alterações nessa cópia, pedir ao Codex para as comparar e incorporar no clone, preservando alterações mais recentes do repositório. Não criar um histórico novo sobre o ZIP para o forçar para `main`.

`backup-publico` contém uma cópia dos conteúdos e ficheiros referidos, não uma pasta para publicar no site. O ZIP de originais é um arquivo separado; ambos podem ficar guardados com Isac.

## 3. Acesso ao admin

O login em https://letheslegacy.com/admin.html é separado do GitHub. Confirmar se o titular já tem uma conta autorizada. Para uma conta nova, o gestor atual deve criar/confirmar o utilizador no Supabase Auth, acrescentar o email a `private.admins` e a `ADMIN_EMAILS` no Pages e fazer novo deploy para aplicar a variável.

Seguir [ADMIN-SETUP.md](../ADMIN-SETUP.md), sem repetir os SQL de instalação. Ter acesso ao dashboard Supabase não concede automaticamente login no admin, nem o contrário. As passwords são definidas/partilhadas por um canal privado, fora do Git.

## 4. Confirmar antes de publicar

A sessão Cloudflare deste Mac expirou. É necessário confirmar no painel:

- Projeto Pages `letheslegacy`, repositório `Isacsa/letheslegacy`.
- Branch de produção: confirmar `main` (é a principal do Git e tem check de deploy bem-sucedido).
- Build/output: manter os valores existentes. O código é estático, com o site na raiz, sem build da aplicação no repositório; o valor efetivo do painel ainda não foi lido.
- Binding R2 esperado: `MEDIA` → `letheslegacy-media`.
- Variáveis no ambiente Production e nos Preview utilizados:

| Variável | Valor/fonte |
| --- | --- |
| `SUPABASE_URL` | `https://sdodixuwfsevnoidkldv.supabase.co` |
| `SUPABASE_ANON_KEY` | Chave pública de `config.js` |
| `R2_PUBLIC_BASE` | `https://media.letheslegacy.com` |
| `ADMIN_EMAILS` | Lista atual de admins, separados por vírgula |

Não é necessária a chave `service_role` para o site, Functions ou backup público. [Bindings do Pages](https://developers.cloudflare.com/pages/functions/bindings/).

**Localhost e previews usam o Supabase de produção com o `config.js` atual.** Ver o site apenas lê; guardar/eliminar no admin altera conteúdos reais. Preview de código não isola a base de dados. Preparar serviços/dados de teste separados se forem necessários testes de escrita isolados.

## 5. Alterar e publicar

1. Fazer as alterações numa branch de trabalho.
2. Validar as páginas afetadas em desktop e móvel; verificar filtros/galerias quando aplicável.
3. Rever o diff e executar `git diff --check`.
4. Guardar um commit e enviar a branch. Usar a preview Pages se estiver habilitada, sem assumir isolamento dos dados.
5. Quando estiver pronta para publicação, rever/integrar a alteração em `main`, conforme o processo combinado com Isac.
6. Confirmar o check `Cloudflare Pages`, o deploy Production e o resultado em `letheslegacy.com`.

A [integração GitHub → Pages](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/) já existe; confirmar os controlos de deploy automático no painel. Não é necessário configurar GitHub Actions. Guardar conteúdos no admin não precisa de commit/deploy.

Para recuar o código, usar rollback Pages ou reverter o commit e publicar. Isto não recupera linhas Supabase nem objetos R2 eliminados; precisam de backup próprio.

## Pendentes da passagem

- [x] Conta GitHub confirmada: `letheslegacy-lgtm`.
- [x] Convite enviado com permissão de escrita.
- [ ] Destinatário aceitar o convite do repositório privado.
- [ ] Confirmar a conta do admin e as suas permissões.
- [ ] Confirmar Pages/R2 com sessão Cloudflare válida.
- [ ] Clonar/abrir no Windows e validar o primeiro arranque.
- [ ] Fazer/validar o primeiro deploy quando houver alterações para publicar.
