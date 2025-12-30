-- ============================================================================
-- ATUALIZAR_AI_LIMITES_ACADEMIAS.sql
-- 
-- Objetivo:
--   Definir a estrutura de dados no Supabase para:
--     - Planos de academias (faixas de alunos + cota mensal de IA)
--     - Academias vinculadas a um plano
--     - Alunos por academia
--     - Controle de uso mensal da IA (quotas)
--
-- IMPORTANTE:
--   - Execute este script no SQL Editor do Supabase do projeto do APP
--   - Este arquivo é apenas referência/versionamento dentro do repositório
-- ============================================================================

-- 1) TABELA DE PLANOS (B2B – Academias)
create table if not exists plans (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique,
  max_students int not null,
  monthly_ai_quota int not null, -- quantidade total de interações de IA/mês por academia
  created_at timestamptz default now()
);

comment on table plans is 'Planos comerciais B2B (academias), vinculados ao limite de alunos e quota mensal de IA.';

-- 2) TABELA DE ACADEMIAS
create table if not exists academies (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null references auth.users(id),
  plan_id uuid not null references plans(id),
  name text not null,
  created_at timestamptz default now()
);

comment on table academies is 'Academias clientes do FitCoach.ai, atreladas a um plano B2B e a um usuário dono.';

-- 3) TABELA DE ALUNOS
create table if not exists students (
  id uuid primary key default gen_random_uuid(),
  academy_id uuid not null references academies(id) on delete cascade,
  name text,
  email text,
  created_at timestamptz default now()
);

comment on table students is 'Alunos vinculados a uma academia.';

-- 4) TABELA DE USO DE IA (COTA MENSAL)
create table if not exists ai_usage (
  id bigserial primary key,
  academy_id uuid not null references academies(id) on delete cascade,
  student_id uuid references students(id) on delete set null,
  year int not null,
  month int not null,
  prompt_count int not null default 0,
  created_at timestamptz default now(),
  unique (academy_id, student_id, year, month)
);

comment on table ai_usage is 'Controle de uso mensal da IA por academia e por aluno.';

create index if not exists idx_ai_usage_academy_month
  on ai_usage (academy_id, year, month);

-- 5) SEED INICIAL DE PLANOS
insert into plans (name, slug, max_students, monthly_ai_quota)
values
  ('Starter', 'starter_10', 10, 1000),
  ('Growth',  'growth_50',  50, 5000),
  ('Pro',     'pro_100',   100, 12000)
on conflict (slug) do nothing;

-- Fim do script


