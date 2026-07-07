-- ============================================================
-- Migração: media do r2.dev -> https://media.letheslegacy.com
-- ------------------------------------------------------------
-- Porquê: o endpoint público pub-*.r2.dev é só para desenvolvimento
-- (tem rate limiting e não passa pelo CDN) — em galerias grandes o
-- Cloudflare bloqueava pedidos e as imagens apareciam partidas.
--
-- Correr UMA vez no Supabase (SQL Editor), DEPOIS de ligar o domínio
-- próprio ao bucket R2 (R2 -> bucket -> Settings -> Custom Domains).
-- ============================================================

begin;

update public.listings set
  cover = replace(
    cover,
    'https://pub-aa72ada04c444be4ba353768bbc5513b.r2.dev',
    'https://media.letheslegacy.com'
  ),
  gallery = case when gallery is null then null else array(
    select replace(u, 'https://pub-aa72ada04c444be4ba353768bbc5513b.r2.dev', 'https://media.letheslegacy.com')
    from unnest(gallery) with ordinality as t(u, ord)
    order by ord
  ) end,
  preview = case when preview is null then null else array(
    select replace(u, 'https://pub-aa72ada04c444be4ba353768bbc5513b.r2.dev', 'https://media.letheslegacy.com')
    from unnest(preview) with ordinality as t(u, ord)
    order by ord
  ) end,
  videos = case when videos is null then null else array(
    select replace(u, 'https://pub-aa72ada04c444be4ba353768bbc5513b.r2.dev', 'https://media.letheslegacy.com')
    from unnest(videos) with ordinality as t(u, ord)
    order by ord
  ) end;

commit;

-- Controlo: as 4 colunas devem devolver 0.
select
  count(*) filter (where cover like '%r2.dev%')                            as cover_r2dev,
  count(*) filter (where array_to_string(gallery, ' ') like '%r2.dev%')    as gallery_r2dev,
  count(*) filter (where array_to_string(preview, ' ') like '%r2.dev%')    as preview_r2dev,
  count(*) filter (where array_to_string(videos, ' ') like '%r2.dev%')     as videos_r2dev
from public.listings;
