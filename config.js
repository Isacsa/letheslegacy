/* ============================================================
   Lethes Legacy — Configuração pública (segura no browser)
   ------------------------------------------------------------
   A anon key do Supabase é pública por design: só permite LER
   (as escritas estão bloqueadas por RLS e exigem login). Por
   isso pode viver aqui no frontend sem problema.

   >>> PREENCHER depois de criar o projeto Supabase:
       SUPABASE_URL  e  SUPABASE_ANON_KEY
   (Supabase -> Project Settings -> API)
   ============================================================ */
window.LL_CONFIG = {
  SUPABASE_URL: 'https://sdodixuwfsevnoidkldv.supabase.co',  // <-- preencher
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkb2RpeHV3ZnNldm5vaWRrbGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwODMyMjEsImV4cCI6MjA5ODY1OTIyMX0.N9sS_kOgOiSFJhzLbYmA7yA61rCLaN7qwACnge2YNzI',                // <-- preencher

  // R2 (já configurado na Fase 1 — não mexer)
  R2_PUBLIC_BASE: 'https://pub-aa72ada04c444be4ba353768bbc5513b.r2.dev'
};
