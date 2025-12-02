# 🔌 Guia: Como Verificar Conexão e Funcionamento da Página de Vendas

## 📋 Índice
1. [Estado Atual da Página](#estado-atual)
2. [Como Verificar se Está Conectado](#verificar-conexao)
3. [Como Funciona o Fluxo Completo](#fluxo-completo)
4. [Como Testar a Integração](#como-testar)
5. [Troubleshooting](#troubleshooting)

---

## 🎯 Estado Atual da Página

### ❌ **ATUALMENTE: NÃO ESTÁ CONECTADA**

A página de vendas **atualmente funciona assim:**

```
Usuário clica no botão → Redireciona para Cakto → Paga → FIM
```

**O que NÃO acontece:**
- ❌ Não salva dados no Supabase
- ❌ Não cria assinaturas automaticamente
- ❌ Não envia e-mails
- ❌ Não gera códigos mestre/equipe
- ❌ Não rastreia compras

**O que acontece:**
- ✅ Usuário é redirecionado para checkout Cakto
- ✅ Cakto processa o pagamento
- ✅ Cakto pode enviar webhook (se configurado)

---

## 🔍 Como Verificar se Está Conectado

### Método 1: Verificar Código da Página

Abra o arquivo `components/Pricing.tsx` e procure por:

```typescript
const handlePurchase = (url: string) => {
  window.location.href = url; // ← Isso significa NÃO conectado
};
```

**Se encontrar isso, NÃO está conectado.**

**Se estiver conectado, você veria algo como:**
```typescript
const handlePurchase = async (url: string, planType: string) => {
  // 1. Salvar dados no Supabase ANTES de redirecionar
  const { data, error } = await supabase
    .from('purchase_intents')
    .insert({ plan_type: planType, checkout_url: url });
  
  // 2. Redirecionar
  window.location.href = url;
};
```

### Método 2: Verificar Console do Navegador

1. Abra a página de vendas no navegador
2. Pressione `F12` (DevTools)
3. Vá na aba **Console**
4. Clique em um botão de compra
5. **Se NÃO aparecer nada no console** → Não está conectado
6. **Se aparecer logs/erros** → Pode estar tentando conectar

### Método 3: Verificar Network (Rede)

1. Abra DevTools (`F12`)
2. Vá na aba **Network** (Rede)
3. Clique em um botão de compra
4. **Se NÃO aparecer requisições para `supabase.co`** → Não está conectado
5. **Se aparecer requisições** → Está tentando conectar

### Método 4: Verificar Supabase Dashboard

1. Acesse seu projeto no Supabase
2. Vá em **Table Editor**
3. Verifique se existem as tabelas:
   - `users`
   - `subscriptions`
   - `companies`
   - `cakto_webhooks`
4. **Se as tabelas NÃO existem** → Não está configurado
5. **Se existem mas estão vazias** → Pode estar conectado mas sem dados

---

## 🔄 Como Funciona o Fluxo Completo (Quando Conectado)

### Fluxo Atual (NÃO Conectado)

```
┌─────────────┐
│   Usuário   │
│  clica no   │
│   botão     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Redireciona │
│  para Cakto │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Usuário   │
│    paga     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│     FIM     │ ❌ Nada é salvo
└─────────────┘
```

### Fluxo Ideal (Conectado ao Supabase)

```
┌─────────────┐
│   Usuário   │
│  clica no   │
│   botão     │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│  Página salva dados  │
│  no Supabase (opcional)│
│  (intenção de compra)│
└──────┬──────────────┘
       │
       ▼
┌─────────────┐
│ Redireciona │
│  para Cakto │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Usuário   │
│    paga     │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│  Cakto envia Webhook│
│  para Supabase      │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│  Edge Function      │
│  processa webhook   │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│  Supabase cria:     │
│  - Usuário          │
│  - Assinatura       │
│  - Código (se B2B)  │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│  Envia E-mail        │
│  com acesso/código   │
└──────┬──────────────┘
       │
       ▼
┌─────────────┐
│   Usuário   │
│ recebe email│
│ e acessa app│
└─────────────┘
```

---

## 🧪 Como Testar a Integração

### Teste 1: Verificar se Supabase Está Configurado

**Passo a passo:**

1. **Criar projeto no Supabase:**
   ```bash
   # Acesse: https://supabase.com
   # Crie um novo projeto
   # Anote: URL e anon key
   ```

2. **Executar scripts SQL:**
   - Abra SQL Editor no Supabase
   - Execute os scripts do arquivo `DOCUMENTACAO_INTEGRACAO_SUPABASE.md`
   - Verifique se as tabelas foram criadas

3. **Verificar tabelas:**
   ```sql
   SELECT table_name 
   FROM information_schema.tables 
   WHERE table_schema = 'public';
   ```
   
   **Deve retornar:**
   - users
   - subscriptions
   - companies
   - company_licenses
   - personal_trainers
   - personal_licenses
   - recharges
   - cakto_webhooks
   - user_voice_usage

### Teste 2: Verificar se Página Conecta ao Supabase

**Opção A: Adicionar código de teste na página**

1. **Instalar cliente Supabase:**
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Criar arquivo de configuração:**
   ```typescript
   // lib/supabase.ts
   import { createClient } from '@supabase/supabase-js'
   
   const supabaseUrl = 'https://seu-projeto.supabase.co'
   const supabaseAnonKey = 'sua-chave-anon'
   
   export const supabase = createClient(supabaseUrl, supabaseAnonKey)
   ```

3. **Adicionar teste no componente:**
   ```typescript
   // components/Pricing.tsx
   import { supabase } from '../lib/supabase'
   
   export const Pricing: React.FC = () => {
     const handlePurchase = async (url: string) => {
       // TESTE: Tentar conectar
       try {
         const { data, error } = await supabase
           .from('users')
           .select('count')
         
         if (error) {
           console.error('❌ Erro ao conectar:', error)
           alert('Erro ao conectar com banco de dados')
         } else {
           console.log('✅ Conectado com sucesso!', data)
         }
       } catch (err) {
         console.error('❌ Erro:', err)
       }
       
       // Redirecionar normalmente
       window.location.href = url
     }
     
     // ... resto do código
   }
   ```

4. **Testar:**
   - Abra a página
   - Abra Console (F12)
   - Clique em um botão de compra
   - **Se aparecer "✅ Conectado"** → Funcionando!
   - **Se aparecer erro** → Verifique configuração

### Teste 3: Verificar Webhook da Cakto

**Passo a passo:**

1. **Criar Edge Function no Supabase:**
   ```bash
   # Instalar CLI
   npm install -g supabase
   
   # Login
   supabase login
   
   # Inicializar (se ainda não fez)
   supabase init
   
   # Criar function
   supabase functions new cakto-webhook
   
   # Deploy
   supabase functions deploy cakto-webhook
   ```

2. **Obter URL da function:**
   ```
   https://seu-projeto.supabase.co/functions/v1/cakto-webhook
   ```

3. **Configurar na Cakto:**
   - Acesse painel da Cakto
   - Vá em Configurações → Webhooks
   - Adicione a URL da function
   - Selecione eventos: `payment.completed`

4. **Testar webhook:**
   - Faça uma compra de teste
   - Verifique no Supabase:
     ```sql
     SELECT * FROM cakto_webhooks 
     ORDER BY created_at DESC 
     LIMIT 5;
     ```
   - **Se aparecer registro** → Webhook funcionando!
   - **Se não aparecer** → Verifique configuração

### Teste 4: Teste Completo End-to-End

**Cenário: Compra de Plano Mensal**

1. **Usuário clica em "QUERO O PLANO MENSAL"**
   - ✅ Deve redirecionar para Cakto
   - ✅ (Opcional) Salvar intenção no Supabase

2. **Usuário paga no Cakto**
   - ✅ Cakto processa pagamento
   - ✅ Cakto envia webhook para Supabase

3. **Supabase recebe webhook**
   - ✅ Edge Function processa
   - ✅ Cria registro em `users` (se não existe)
   - ✅ Cria registro em `subscriptions`
   - ✅ Atualiza `cakto_webhooks` como processado

4. **Verificar no Supabase:**
   ```sql
   -- Ver usuário criado
   SELECT * FROM users ORDER BY created_at DESC LIMIT 1;
   
   -- Ver assinatura criada
   SELECT * FROM subscriptions ORDER BY created_at DESC LIMIT 1;
   
   -- Ver webhook processado
   SELECT * FROM cakto_webhooks 
   WHERE processed = true 
   ORDER BY created_at DESC LIMIT 1;
   ```

5. **Verificar e-mail:**
   - ✅ Usuário deve receber e-mail com acesso
   - ✅ (Se não receber, verificar serviço de e-mail)

---

## 🔧 Como Conectar a Página ao Supabase

### Passo 1: Instalar Dependências

```bash
npm install @supabase/supabase-js
```

### Passo 2: Criar Arquivo de Configuração

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://seu-projeto.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sua-chave-anon'

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Variáveis do Supabase não configuradas!')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### Passo 3: Criar Arquivo .env

```bash
# .env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

### Passo 4: Atualizar Componente de Preços

```typescript
// components/Pricing.tsx
import { supabase } from '../lib/supabase'

export const Pricing: React.FC = () => {
  const handlePurchase = async (url: string, planType: 'monthly' | 'annual') => {
    try {
      // Opcional: Salvar intenção de compra antes de redirecionar
      const { error } = await supabase
        .from('purchase_intents') // Criar esta tabela se quiser rastrear
        .insert({
          plan_type: planType,
          checkout_url: url,
          created_at: new Date().toISOString()
        })
      
      if (error) {
        console.error('Erro ao salvar intenção:', error)
        // Continua mesmo com erro (não bloqueia compra)
      }
    } catch (err) {
      console.error('Erro:', err)
    }
    
    // Redirecionar para checkout
    window.location.href = url
  }

  return (
    // ... JSX com botões chamando handlePurchase
  )
}
```

**⚠️ IMPORTANTE:** A página de vendas **não precisa** salvar dados antes do pagamento. O fluxo correto é:

1. Usuário clica → Redireciona para Cakto
2. Cakto processa pagamento
3. Cakto envia webhook → Supabase cria tudo

A página só precisa redirecionar. O Supabase recebe os dados via webhook.

---

## 🐛 Troubleshooting

### Problema: "Não consigo verificar se está conectado"

**Solução:**
1. Verifique se instalou `@supabase/supabase-js`
2. Verifique se criou arquivo `lib/supabase.ts`
3. Verifique variáveis de ambiente no `.env`
4. Reinicie o servidor de desenvolvimento

### Problema: "Erro ao conectar com Supabase"

**Possíveis causas:**
1. **URL ou chave incorretas**
   - Verifique no Dashboard do Supabase
   - Copie exatamente (sem espaços)

2. **CORS bloqueado**
   - Supabase permite CORS por padrão
   - Verifique se a URL está correta

3. **Tabelas não existem**
   - Execute os scripts SQL primeiro
   - Verifique no Table Editor

### Problema: "Webhook não está chegando"

**Verificações:**
1. **URL do webhook está correta?**
   ```
   https://seu-projeto.supabase.co/functions/v1/cakto-webhook
   ```

2. **Function foi deployada?**
   ```bash
   supabase functions list
   ```

3. **Cakto está configurado?**
   - Verifique no painel da Cakto
   - Teste enviando webhook manualmente

4. **Ver logs:**
   ```bash
   supabase functions logs cakto-webhook
   ```

### Problema: "Dados não estão sendo criados"

**Verificações:**
1. **Webhook está sendo recebido?**
   ```sql
   SELECT * FROM cakto_webhooks ORDER BY created_at DESC LIMIT 1;
   ```

2. **Webhook está sendo processado?**
   ```sql
   SELECT * FROM cakto_webhooks WHERE processed = false;
   ```

3. **Há erros na function?**
   - Verifique logs da Edge Function
   - Verifique console do Supabase

---

## ✅ Checklist de Verificação

Use este checklist para verificar se tudo está funcionando:

### Configuração Básica
- [ ] Projeto criado no Supabase
- [ ] Tabelas criadas (9 tabelas)
- [ ] Edge Function criada e deployada
- [ ] Variáveis de ambiente configuradas

### Integração Cakto
- [ ] Webhook configurado na Cakto
- [ ] URL do webhook está correta
- [ ] Eventos selecionados (`payment.completed`)

### Testes
- [ ] Teste de conexão passa (console mostra "✅")
- [ ] Webhook é recebido (tabela `cakto_webhooks` tem registros)
- [ ] Webhook é processado (`processed = true`)
- [ ] Dados são criados (usuário, assinatura, etc.)
- [ ] E-mail é enviado (verificar caixa de entrada)

### Página de Vendas
- [ ] Botões redirecionam corretamente
- [ ] Links de checkout estão corretos
- [ ] Não há erros no console

---

## 📊 Como Monitorar o Funcionamento

### Dashboard no Supabase

Crie uma view para monitorar:

```sql
CREATE VIEW dashboard_stats AS
SELECT 
  (SELECT COUNT(*) FROM subscriptions WHERE status = 'active') as active_subscriptions,
  (SELECT COUNT(*) FROM companies WHERE status = 'active') as active_companies,
  (SELECT COUNT(*) FROM personal_trainers WHERE status = 'active') as active_personals,
  (SELECT COUNT(*) FROM cakto_webhooks WHERE processed = false) as pending_webhooks,
  (SELECT SUM(amount_paid) FROM subscriptions WHERE payment_status = 'paid') as total_revenue;
```

### Queries Úteis para Monitoramento

```sql
-- Últimas compras
SELECT 
  u.email,
  s.plan_name,
  s.amount_paid,
  s.created_at
FROM subscriptions s
JOIN users u ON u.id = s.user_id
ORDER BY s.created_at DESC
LIMIT 10;

-- Webhooks não processados
SELECT 
  event_type,
  cakto_transaction_id,
  error_message,
  created_at
FROM cakto_webhooks
WHERE processed = false
ORDER BY created_at DESC;

-- Receita por tipo de plano
SELECT 
  plan_type,
  COUNT(*) as total,
  SUM(amount_paid) as revenue
FROM subscriptions
WHERE payment_status = 'paid'
GROUP BY plan_type;
```

---

## 🎯 Resumo: Como Saber se Está Funcionando

### ✅ **ESTÁ FUNCIONANDO SE:**

1. **Webhooks estão chegando:**
   ```sql
   SELECT COUNT(*) FROM cakto_webhooks; -- Deve ter registros
   ```

2. **Webhooks estão sendo processados:**
   ```sql
   SELECT COUNT(*) FROM cakto_webhooks WHERE processed = true; -- Deve aumentar
   ```

3. **Dados estão sendo criados:**
   ```sql
   SELECT COUNT(*) FROM subscriptions; -- Deve ter assinaturas
   SELECT COUNT(*) FROM users; -- Deve ter usuários
   ```

4. **Não há erros:**
   - Console do navegador limpo
   - Logs da Edge Function sem erros
   - Tabela `cakto_webhooks` sem `error_message`

### ❌ **NÃO ESTÁ FUNCIONANDO SE:**

1. Tabela `cakto_webhooks` está vazia
2. Webhooks não são processados (`processed = false`)
3. Erros aparecem nos logs
4. Dados não são criados após compra

---

## 📞 Próximos Passos

1. **Siga o guia de implementação** no arquivo `DOCUMENTACAO_INTEGRACAO_SUPABASE.md`
2. **Configure o Supabase** (tabelas, functions, webhooks)
3. **Teste com compra real** (use modo sandbox da Cakto)
4. **Monitore os logs** regularmente
5. **Configure alertas** para erros críticos

---

**Última atualização:** Janeiro 2025


