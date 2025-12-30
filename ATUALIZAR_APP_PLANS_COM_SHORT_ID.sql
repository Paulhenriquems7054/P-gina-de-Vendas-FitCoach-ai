-- =========================================================
-- ATUALIZAR app_plans.cakto_checkout_id COM product.short_id DA CAKTO
-- =========================================================
-- 
-- IMPORTANTE: Este script atualiza a coluna cakto_checkout_id
-- para usar o product.short_id que vem no webhook da Cakto.
--
-- ANTES DE EXECUTAR:
-- 1. Vá no painel da Cakto e pegue o short_id de cada produto real
-- 2. Substitua os valores abaixo pelos short_id reais dos seus produtos
-- 3. Execute este script no SQL Editor do Supabase
-- =========================================================

-- ===========================
-- B2C - Plano Mensal
-- ===========================
-- Exemplo: se o produto "Plano Mensal" na Cakto tem short_id "zeygxve_668421"
UPDATE app_plans
SET cakto_checkout_id = 'zeygxve_668421'  -- ⚠️ SUBSTITUA pelo short_id real do produto na Cakto
WHERE slug = 'b2c_mensal';

-- ===========================
-- B2C - Plano Anual (VIP)
-- ===========================
UPDATE app_plans
SET cakto_checkout_id = 'wvbkepi_668441'  -- ⚠️ SUBSTITUA pelo short_id real do produto na Cakto
WHERE slug = 'b2c_anual_vip';

-- ===========================
-- RECARGAS
-- ===========================

-- Sessão Turbo
UPDATE app_plans
SET cakto_checkout_id = 'ihfy8cz_668443'  -- ⚠️ SUBSTITUA pelo short_id real do produto na Cakto
WHERE slug = 'recarga_turbo';

-- Banco de Voz 100
UPDATE app_plans
SET cakto_checkout_id = 'hhxugxb_668446'  -- ⚠️ SUBSTITUA pelo short_id real do produto na Cakto
WHERE slug = 'recarga_banco_voz_100';

-- Passe Livre 30 Dias
UPDATE app_plans
SET cakto_checkout_id = 'PREENCHER_SHORT_ID_PASSE_LIVRE'  -- ⚠️ SUBSTITUA pelo short_id real do produto na Cakto
WHERE slug = 'recarga_passe_livre_30d';

-- ===========================
-- B2B - ACADEMIAS
-- ===========================

-- Starter Mini
UPDATE app_plans
SET cakto_checkout_id = '3b2kpwc_671196'  -- ⚠️ SUBSTITUA pelo short_id real do produto na Cakto
WHERE slug = 'b2b_academia_starter_mini';

-- Starter
UPDATE app_plans
SET cakto_checkout_id = 'cemyp2n_668537'  -- ⚠️ SUBSTITUA pelo short_id real do produto na Cakto
WHERE slug = 'b2b_academia_starter';

-- Growth
UPDATE app_plans
SET cakto_checkout_id = 'vi6djzq_668541'  -- ⚠️ SUBSTITUA pelo short_id real do produto na Cakto
WHERE slug = 'b2b_academia_growth';

-- Pro
UPDATE app_plans
SET cakto_checkout_id = '3dis6ds_668546'  -- ⚠️ SUBSTITUA pelo short_id real do produto na Cakto
WHERE slug = 'b2b_academia_pro';

-- ===========================
-- PERSONAL TRAINER
-- ===========================

-- Team 5
UPDATE app_plans
SET cakto_checkout_id = 'PREENCHER_SHORT_ID_TEAM5'  -- ⚠️ SUBSTITUA pelo short_id real do produto na Cakto
WHERE slug = 'personal_team_5';

-- Team 15
UPDATE app_plans
SET cakto_checkout_id = 'PREENCHER_SHORT_ID_TEAM15'  -- ⚠️ SUBSTITUA pelo short_id real do produto na Cakto
WHERE slug = 'personal_team_15';

-- =========================================================
-- CONSULTA PARA CONFERIR OS VALORES ATUALIZADOS
-- =========================================================
SELECT
  slug,
  name,
  plan_group,
  cakto_checkout_id,
  price
FROM app_plans
ORDER BY plan_group, price;

-- =========================================================
-- COMO ENCONTRAR O product.short_id NA CAKTO:
-- =========================================================
-- 1. Vá no painel da Cakto → Produtos
-- 2. Clique em cada produto que você criou
-- 3. Procure pelo campo "Short ID" ou "ID Curto" (ex.: "zeygxve_668421")
-- 4. Esse é o valor que você deve colocar em cakto_checkout_id
-- 
-- OU
--
-- 1. Faça uma compra teste de cada produto
-- 2. Veja o webhook que a Cakto envia
-- 3. No JSON, procure por: "product": { "short_id": "..." }
-- 4. Use esse valor no UPDATE acima
-- =========================================================

