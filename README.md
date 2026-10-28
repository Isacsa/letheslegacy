# Lethes Legacy

Site de alojamentos locais com catálogo público e painel de administração.

**Site:** https://letheslegacy.com · **Admin:** https://letheslegacy.com/admin.html

O projeto já está publicado. A passagem para outro computador mantém o GitHub, Cloudflare Pages, R2 e Supabase atuais; não exige criar um site novo.

## Começar

- [Passagem para Windows e publicação](docs/TRANSFERENCIA-WINDOWS.md)
- [Arquitetura, ficheiros e conteúdos](docs/ARQUITETURA.md)
- [Estado verificado em 28/10/2026 e pontos por confirmar](docs/ESTADO-2026-10-28.md)
- [Mensagem para iniciar o Codex no novo computador](docs/ARRANQUE-CODEX.md)
- [Operação do painel de administração](ADMIN-SETUP.md)

O Codex encontra as instruções do projeto em [AGENTS.md](AGENTS.md). Não precisa de receber o histórico deste chat.

Para a passagem pelo GitHub, o destinatário usa a conta `letheslegacy-lgtm`: aceitar o convite do repositório privado, clonar no Windows e abrir o clone no Codex. O guia acima contém os passos e a mensagem de arranque; não é necessário transportar os arquivos grandes de media para começar.

## Executar localmente

Instalar Node.js LTS e abrir um terminal na pasta do projeto:

```powershell
npx --yes wrangler@4.154.0 pages dev . --ip 127.0.0.1
```

Abrir http://127.0.0.1:8788. O Wrangler serve o site e compila as Pages Functions. Não existe `package.json`, passo de build ou `npm install` da aplicação. A versão do Wrangler acima foi validada nesta passagem.

**O `config.js` aponta para a base de dados real.** Ver o site local apenas lê os alojamentos; guardar ou eliminar no admin local altera os dados reais. O comando acima não configura uploads: estes precisam das variáveis e do binding R2 descritos no guia do admin. Um bucket R2 local não publica ficheiros no domínio de media real.

## Onde se altera cada coisa

| Alteração | Local |
| --- | --- |
| Textos, vídeo de apresentação e secções da página inicial | `index.html` |
| Estrutura da página de alojamentos e filtros | `alojamentos.html` |
| Layout, cores, fontes e versão móvel | `style.css` |
| Cartões, galeria, vídeos e links de cada alojamento | `alojamentos-data.js` |
| Títulos, preços, descrições, fotos e vídeos dos alojamentos | Painel `/admin.html`, guardado no Supabase/R2 |
| Comportamento do painel | `admin.html`, `admin.js`, `admin.css` |
| Upload e remoção de ficheiros | `functions/api/upload.js`, `functions/api/delete.js` |
| Endereços públicos dos serviços | `config.js` |

## Cópia dos conteúdos publicados

```powershell
node scripts/export-content.mjs --output backups/copia-atual --download-media
```

O comando faz apenas leituras: exporta a tabela pública `listings`, cria um manifesto e descarrega os ficheiros R2 referidos no catálogo e nos HTML/CSS. Não exporta contas, passwords, sessões, políticas SQL nem objetos antigos sem referências. O destino deve ser uma pasta nova. A pasta `backups/` está excluída do Git.

## Publicar alterações

O repositório privado é https://github.com/Isacsa/letheslegacy. O caminho recomendado é trabalhar numa branch `codex/...`, rever a alteração e integrá-la em `main`, depois de confirmar no Cloudflare que esta continua a ser a branch de produção. A integração GitHub → Cloudflare Pages já existe; não é necessário configurar GitHub Actions.

Alterações guardadas no admin entram diretamente nos conteúdos, sem commit ou deploy. Alterações de código entram no site através de um novo deploy.
