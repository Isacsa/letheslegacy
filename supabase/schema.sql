-- ============================================================
-- Lethes Legacy — Esquema da base de dados (Supabase / Postgres)
-- Correr UMA VEZ na consola Supabase: SQL Editor -> colar -> Run.
-- ============================================================

-- Tabela de alojamentos -------------------------------------------------------
create table if not exists public.listings (
  id          uuid        primary key default gen_random_uuid(),
  position    int         not null default 0,            -- ordem na grelha
  type        text        not null check (type in ('casas','apartamentos','quartos')),
  badge       text        not null default '',
  title       text        not null,
  meta        text        not null default '',
  feature     text        not null default '',
  capacity    text        default '',
  address     text        default '',
  description text        default '',
  price       text        default '',                    -- vazio => "Sob consulta"
  cover       text        default '',                    -- URL R2 da capa
  preview     text[]      not null default '{}',          -- URLs R2 (thumbnails do cartão)
  gallery     text[]      not null default '{}',          -- URLs R2 (galeria completa)
  videos      text[]      not null default '{}',          -- URLs R2 (vídeos curtos)
  units       jsonb       not null default '[]'::jsonb,    -- [{ name, details }]
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists listings_position_idx on public.listings (position, created_at);

-- updated_at automático -------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists listings_set_updated_at on public.listings;
create trigger listings_set_updated_at
  before update on public.listings
  for each row execute function public.set_updated_at();

-- Segurança (RLS) -------------------------------------------------------------
-- Leitura pública (site); escrita só para utilizadores autenticados (admin).
alter table public.listings enable row level security;

drop policy if exists "listings_public_read"   on public.listings;
drop policy if exists "listings_auth_insert"    on public.listings;
drop policy if exists "listings_auth_update"    on public.listings;
drop policy if exists "listings_auth_delete"    on public.listings;

create policy "listings_public_read"
  on public.listings for select
  to anon, authenticated
  using (true);

create policy "listings_auth_insert"
  on public.listings for insert
  to authenticated
  with check (true);

create policy "listings_auth_update"
  on public.listings for update
  to authenticated
  using (true) with check (true);

create policy "listings_auth_delete"
  on public.listings for delete
  to authenticated
  using (true);
