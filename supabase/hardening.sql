-- ============================================================
-- Lethes Legacy — Endurecimento de segurança (correr UMA VEZ)
-- Supabase -> SQL Editor -> colar -> Run.
--
-- O quê: restringe a ESCRITA na tabela listings a uma lista de
-- admins (private.admins), em vez de "qualquer utilizador
-- autenticado". Mesmo que os sign-ups públicos fossem ligados
-- por engano, contas novas NÃO conseguem escrever.
--
-- A lista é semeada automaticamente com os utilizadores que já
-- existem em auth.users (os que criaste à mão).
-- ============================================================

-- 1) Lista de admins (schema privado — não exposto pela API REST)
create schema if not exists private;

create table if not exists private.admins (
  email text primary key
);

insert into private.admins (email)
  select lower(email) from auth.users where email is not null
on conflict (email) do nothing;

-- 2) Função de verificação (security definer para poder ler private.admins)
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from private.admins a
    where a.email = lower(coalesce((select auth.jwt()) ->> 'email', ''))
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated, anon;

-- 3) Políticas de escrita passam a exigir is_admin()
drop policy if exists "listings_auth_insert" on public.listings;
drop policy if exists "listings_auth_update" on public.listings;
drop policy if exists "listings_auth_delete" on public.listings;

create policy "listings_admin_insert"
  on public.listings for insert
  to authenticated
  with check (public.is_admin());

create policy "listings_admin_update"
  on public.listings for update
  to authenticated
  using (public.is_admin()) with check (public.is_admin());

create policy "listings_admin_delete"
  on public.listings for delete
  to authenticated
  using (public.is_admin());

-- (a leitura pública "listings_public_read" fica como está)

-- 4) Conferir a lista de admins (deve mostrar o(s) email(s) certos):
select * from private.admins;
