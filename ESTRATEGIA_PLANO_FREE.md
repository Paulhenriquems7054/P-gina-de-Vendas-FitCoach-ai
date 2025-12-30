# 🎯 Estratégia Completa: Plano Free / Trial Premium

## 📋 Índice
1. [Visão Geral da Estratégia](#visão-geral)
2. [Por que Trial de 7 Dias?](#por-que-7-dias)
3. [Como Controlar no App](#controle-no-app)
4. [Estratégias de Conversão](#estratégias-de-conversão)
5. [Limites e Restrições](#limites-e-restrições)
6. [Plano Free Permanente (Alternativa)](#plano-free-permanente)
7. [Implementação Técnica](#implementação-técnica)

---

## 🎯 Visão Geral da Estratégia

### Modelo Escolhido: **Trial Premium de 7 Dias**

**Como funciona:**
1. Usuário se cadastra → Ganha **7 dias de acesso Premium completo**
2. Durante 7 dias → Usa todas as funcionalidades sem limites
3. Após 7 dias → Duas opções:
   - **Opção A:** Volta para Plano Free (com limites)
   - **Opção B:** Continua Premium (R$ 34,90/mês)

**Vantagens:**
- ✅ **Alta taxa de conversão** (20-40% típico)
- ✅ Usuário experimenta o valor completo
- ✅ Cria hábito de uso (7 dias é suficiente)
- ✅ Sem barreira de entrada (sem cartão)
- ✅ Urgência natural (contador de dias)

---

## ⏰ Por que 7 Dias?

### Análise de Timing

| Duração | Taxa Conversão | Vantagens | Desvantagens |
|---------|----------------|-----------|--------------|
| **3 dias** | 10-15% | Menos custo de infra | Pouco tempo para criar hábito |
| **7 dias** | **20-40%** | ✅ Tempo ideal | ✅ Custo controlado |
| **14 dias** | 25-35% | Mais tempo | Maior custo, menos urgência |
| **30 dias** | 15-25% | Muito tempo | Custo alto, baixa urgência |

### Por que 7 dias é o ideal:

1. **Tempo suficiente para:**
   - Testar todas as funcionalidades
   - Ver resultados iniciais
   - Criar hábito de uso diário
   - Sentir o valor do produto

2. **Urgência sem pressão:**
   - Contador cria senso de urgência
   - Mas não é tão curto que frustre
   - Usuário tem tempo de explorar

3. **Custo-benefício:**
   - Custo de infra controlado (7 dias)
   - Taxa de conversão alta
   - ROI positivo

---

## 🎮 Como Controlar no App

### 1. Estrutura de Dados no Supabase

```sql
-- Adicionar campo trial_expires_at na tabela users
ALTER TABLE users 
ADD COLUMN trial_expires_at TIMESTAMPTZ,
ADD COLUMN trial_started_at TIMESTAMPTZ,
ADD COLUMN is_trial_active BOOLEAN DEFAULT FALSE;

-- Criar índice para performance
CREATE INDEX idx_users_trial_expires ON users(trial_expires_at) 
WHERE is_trial_active = TRUE;
```

### 2. Lógica de Verificação no App

```typescript
// services/trialService.ts

export interface TrialStatus {
  isActive: boolean;
  daysRemaining: number;
  expiresAt: Date | null;
  canUpgrade: boolean;
}

export async function checkTrialStatus(userId: string): Promise<TrialStatus> {
  const { data: user } = await supabase
    .from('users')
    .select('trial_expires_at, trial_started_at, is_trial_active')
    .eq('id', userId)
    .single();

  if (!user || !user.is_trial_active) {
    return {
      isActive: false,
      daysRemaining: 0,
      expiresAt: null,
      canUpgrade: true,
    };
  }

  const now = new Date();
  const expiresAt = new Date(user.trial_expires_at);
  const daysRemaining = Math.ceil(
    (expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Trial expirado
  if (expiresAt < now) {
    // Atualizar status
    await supabase
      .from('users')
      .update({ is_trial_active: false })
      .eq('id', userId);

    return {
      isActive: false,
      daysRemaining: 0,
      expiresAt: expiresAt,
      canUpgrade: true,
    };
  }

  return {
    isActive: true,
    daysRemaining: Math.max(0, daysRemaining),
    expiresAt: expiresAt,
    canUpgrade: true,
  };
}

// Ao criar novo usuário
export async function startTrial(userId: string): Promise<void> {
  const now = new Date();
  const expiresAt = new Date(now);
  expiresAt.setDate(expiresAt.getDate() + 7); // 7 dias

  await supabase
    .from('users')
    .update({
      is_trial_active: true,
      trial_started_at: now.toISOString(),
      trial_expires_at: expiresAt.toISOString(),
    })
    .eq('id', userId);
}
```

### 3. Verificação de Acesso Premium

```typescript
// services/subscriptionService.ts

export async function hasPremiumAccess(userId: string): Promise<boolean> {
  // 1. Verificar se tem assinatura ativa
  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('status, expires_at')
    .eq('user_id', userId)
    .eq('status', 'active')
    .single();

  if (subscription) {
    return true;
  }

  // 2. Verificar se está em trial ativo
  const trialStatus = await checkTrialStatus(userId);
  return trialStatus.isActive;
}
```

---

## 🎯 Estratégias de Conversão

### 1. **Contador de Dias Restantes** (Urgência)

```typescript
// components/TrialCountdown.tsx

export function TrialCountdown() {
  const { trialStatus } = useTrial();
  
  if (!trialStatus.isActive) return null;

  return (
    <div className="trial-banner bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl mb-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">⏰ Trial Premium</p>
          <p className="text-sm">
            {trialStatus.daysRemaining} {trialStatus.daysRemaining === 1 ? 'dia' : 'dias'} restantes
          </p>
        </div>
        <Button onClick={() => window.open('/#pricing', '_blank')}>
          Continuar Premium
        </Button>
      </div>
    </div>
  );
}
```

### 2. **Notificações Estratégicas**

**Dia 1-3:** Foco em explorar funcionalidades
- "Explore todas as funcionalidades Premium!"
- "Você tem acesso completo por mais X dias"

**Dia 4-5:** Começar a mencionar upgrade
- "Aproveite seu trial! Restam X dias"
- "Continue Premium e não perca seus dados"

**Dia 6:** Urgência moderada
- "Último dia de trial! Continue Premium por apenas R$ 34,90/mês"
- "Não perca seus treinos e análises"

**Dia 7:** Urgência máxima
- "Trial termina hoje! Assine agora e mantenha tudo"
- "Últimas horas - não perca o acesso Premium"

**Após expirar:**
- "Seu trial expirou. Assine Premium para continuar"
- Mostrar o que foi perdido (treinos salvos, histórico, etc.)

### 3. **Upsell Contextual no App**

#### A) Ao tentar usar funcionalidade premium após trial:
```typescript
// Exemplo: Tentar usar voz após trial expirado
if (!hasPremiumAccess && userTriesVoice) {
  showModal({
    title: "Voz disponível apenas no Premium",
    message: "Assine Premium por R$ 34,90/mês e tenha 15 min/dia de voz",
    cta: "Assinar Premium",
    link: "/#pricing"
  });
}
```

#### B) Ao atingir limite (se tiver plano free permanente):
```typescript
// Exemplo: Usou 3 análises de fotos no dia
if (dailyPhotoAnalysisCount >= 3 && !hasPremiumAccess) {
  showUpgradePrompt({
    message: "Você usou suas 3 análises diárias. Upgrade para Premium e tenha análises ilimitadas!",
    cta: "Ver Planos Premium"
  });
}
```

### 4. **Comparação Visual Free vs Premium**

Criar uma tela no app mostrando:

| Recurso | Free (Após Trial) | Premium |
|---------|-------------------|---------|
| Análises de Fotos | 3/dia | ✅ Ilimitado |
| Treinos | 1/mês | ✅ Ilimitado |
| Chat | 10/dia | ✅ Ilimitado |
| Voz | ❌ Não | ✅ 15 min/dia |
| Preço | Grátis | R$ 34,90/mês |

### 5. **Gamificação e Conquistas**

- "Você analisou 10 fotos no trial! Continue Premium para análises ilimitadas"
- "Criou 3 treinos personalizados! Upgrade para criar quantos quiser"
- "Usou 5 dias seguidos! Assine Premium e não perca o hábito"

---

## 📊 Limites e Restrições

### Durante o Trial (7 dias)
- ✅ **Acesso Premium completo**
- ✅ Análises ilimitadas
- ✅ Treinos ilimitados
- ✅ Chat ilimitado
- ✅ 15 min/dia de voz
- ✅ Todas as funcionalidades

### Após Trial (Plano Free Permanente)
- ⚠️ **3 análises de fotos por dia**
- ⚠️ **1 treino personalizado por mês**
- ⚠️ **10 mensagens de chat por dia**
- ❌ **Sem voz** (apenas no Premium)
- ✅ Acesso básico mantido

---

## 🔄 Plano Free Permanente (Alternativa)

Se preferir não usar trial, pode oferecer plano free permanente:

### Limites Sugeridos:
- **3 análises de fotos/dia** (suficiente para testar, mas cria desejo)
- **1 treino/mês** (mostra valor, mas limita uso)
- **10 mensagens/dia** (permite testar, mas não satisfaz)
- **Sem voz** (diferencial claro do Premium)

### Vantagens:
- ✅ Sem custo de infra para trial
- ✅ Usuário pode usar indefinidamente
- ✅ Menos pressão = menos churn

### Desvantagens:
- ❌ Taxa de conversão menor (2-5%)
- ❌ Usuário pode ficar "confortável" no free
- ❌ Menos urgência para upgrade

---

## 💻 Implementação Técnica

### 1. Fluxo de Cadastro

```typescript
// Ao criar novo usuário
async function createUser(email: string, password: string) {
  // 1. Criar usuário no Supabase Auth
  const { data: authUser, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) throw authError;

  // 2. Criar registro na tabela users
  const { data: user, error: userError } = await supabase
    .from('users')
    .insert({
      id: authUser.user.id,
      email: authUser.user.email,
      is_trial_active: true,
      trial_started_at: new Date().toISOString(),
      trial_expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    })
    .select()
    .single();

  // 3. Enviar email de boas-vindas com trial
  await sendWelcomeEmail(user.email, {
    trialDays: 7,
    trialExpiresAt: user.trial_expires_at,
  });

  return user;
}
```

### 2. Verificação de Acesso em Cada Feature

```typescript
// hooks/usePremiumAccess.ts

export function usePremiumAccess() {
  const { user } = useAuth();
  const [hasAccess, setHasAccess] = useState(false);
  const [trialStatus, setTrialStatus] = useState<TrialStatus | null>(null);

  useEffect(() => {
    if (!user) return;

    checkAccess();
    // Verificar a cada minuto (para atualizar contador)
    const interval = setInterval(checkAccess, 60000);
    return () => clearInterval(interval);
  }, [user]);

  async function checkAccess() {
    if (!user) return;

    // Verificar trial
    const trial = await checkTrialStatus(user.id);
    setTrialStatus(trial);

    // Verificar assinatura
    const subscription = await checkSubscriptionStatus(user.id);

    setHasAccess(trial.isActive || subscription.isActive);
  }

  return { hasAccess, trialStatus, refresh: checkAccess };
}
```

### 3. Componente de Proteção de Feature

```typescript
// components/ProtectedFeature.tsx

export function ProtectedFeature({ feature, children }) {
  const { hasAccess, trialStatus } = usePremiumAccess();

  if (hasAccess) {
    return <>{children}</>;
  }

  // Mostrar prompt de upgrade
  return (
    <UpgradePrompt
      feature={feature}
      trialStatus={trialStatus}
      message="Esta funcionalidade requer Premium"
    />
  );
}
```

---

## 📈 Métricas para Acompanhar

### KPIs Importantes:

1. **Taxa de Conversão do Trial:**
   ```
   (Usuários que assinaram após trial / Total de trials) × 100
   Meta: 20-40%
   ```

2. **Dias Médios até Conversão:**
   ```
   Média de dias que usuário leva para converter
   Meta: 3-5 dias
   ```

3. **Taxa de Engajamento no Trial:**
   ```
   (Usuários ativos durante trial / Total de trials) × 100
   Meta: 60-80%
   ```

4. **Churn Após Trial:**
   ```
   (Usuários que não converteram / Total de trials) × 100
   Meta: < 60%
   ```

---

## 🎨 Como Tornar Atrativo na Página de Vendas

### Elementos Visuais:
- ✅ Badge "Trial Premium 7 Dias" em destaque
- ✅ Contador visual de dias restantes
- ✅ Comparação clara: Trial vs Free vs Premium
- ✅ Testemunhos de usuários que converteram
- ✅ Destaque: "Sem cartão de crédito"

### Copywriting:
- ✅ "Experimente Premium completo por 7 dias"
- ✅ "Sem compromisso - cancele quando quiser"
- ✅ "Veja resultados reais antes de pagar"
- ✅ "Mais de 80% dos usuários continuam Premium após o trial"

---

## 🚀 Próximos Passos

1. **Implementar no App:**
   - [ ] Criar campo `trial_expires_at` no banco
   - [ ] Implementar lógica de verificação
   - [ ] Criar componente de contador
   - [ ] Adicionar notificações estratégicas

2. **Otimizar Conversão:**
   - [ ] A/B testar duração do trial (7 vs 14 dias)
   - [ ] Testar diferentes mensagens de upsell
   - [ ] Analisar em qual dia usuários mais convertem

3. **Monitorar:**
   - [ ] Taxa de conversão
   - [ ] Engajamento durante trial
   - [ ] Churn após trial

---

## 📝 Resumo Executivo

**Estratégia Recomendada: Trial Premium de 7 Dias**

- ✅ **Duração:** 7 dias (tempo ideal)
- ✅ **Acesso:** Premium completo durante trial
- ✅ **Após trial:** Volta para free ou converte para Premium
- ✅ **Taxa de conversão esperada:** 20-40%
- ✅ **Sem barreira:** Sem cartão de crédito necessário
- ✅ **Urgência natural:** Contador cria senso de urgência

**Por que funciona:**
1. Usuário experimenta valor completo
2. Tempo suficiente para criar hábito
3. Urgência sem pressão excessiva
4. Custo controlado (7 dias)
5. Alta taxa de conversão

---

**Última atualização:** Dezembro 2024
**Versão:** 1.0


