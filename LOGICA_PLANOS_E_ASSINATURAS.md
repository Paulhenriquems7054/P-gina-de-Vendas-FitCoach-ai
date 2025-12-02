# 📱 Lógica de Planos e Assinaturas - Fitcoach.ai App

## 📑 Índice
1. [Visão Geral](#visão-geral)
2. [Tipos de Planos e Assinaturas](#tipos-de-planos-e-assinaturas)
3. [Recursos e Limitações por Plano](#recursos-e-limitações-por-plano)
4. [Sistema de Verificação de Assinaturas](#sistema-de-verificação-de-assinaturas)
5. [Controle de Acesso e Features](#controle-de-acesso-e-features)
6. [Sistema de Recargas](#sistema-de-recargas)
7. [Códigos de Ativação (B2B e Personais)](#códigos-de-ativação-b2b-e-personais)
8. [Fluxos de Renovação e Cancelamento](#fluxos-de-renovação-e-cancelamento)
9. [Validações e Regras de Negócio](#validações-e-regras-de-negócio)
10. [Exemplos de Implementação](#exemplos-de-implementação)

---

## 🎯 Visão Geral

O app Fitcoach.ai deve implementar um sistema robusto de controle de acesso baseado nos planos e assinaturas vendidos na página de vendas. Cada usuário pode ter diferentes níveis de acesso dependendo do tipo de plano contratado.

### Princípios Fundamentais

1. **Verificação em Tempo Real**: O app deve verificar o status da assinatura antes de permitir acesso a recursos premium
2. **Fallback Graceful**: Se a verificação falhar, o app deve permitir acesso limitado (modo trial/demo)
3. **Cache Inteligente**: Cachear status de assinatura localmente, mas sempre validar com o backend
4. **UX Transparente**: Informar claramente ao usuário sobre limitações e opções de upgrade

---

## 📦 Tipos de Planos e Assinaturas

### 1. Planos B2C (Consumidor Final)

#### 1.1. Plano Mensal
- **ID do Produto Cakto**: `zeygxve_668421`
- **Preço**: R$ 34,90/mês (ou R$ 39,90/mês - A/B test)
- **Tipo**: Assinatura Recorrente Mensal
- **Renovação**: Automática mensalmente
- **Cancelamento**: A qualquer momento

#### 1.2. Plano Anual (VIP)
- **ID do Produto Cakto**: `wvbkepi_668441`
- **Preço**: R$ 297,00 à vista (ou 12x de R$ 34,53)
- **Tipo**: Assinatura Recorrente Anual
- **Renovação**: Automática anualmente
- **Cancelamento**: A qualquer momento (com reembolso proporcional)

### 2. Planos B2B (Academias)

#### 2.1. Starter Mini
- **ID do Produto Cakto**: `3b2kpwc_671196`
- **Preço**: R$ 149,90/mês
- **Licenças**: 10 licenças premium
- **Custo por Aluno**: R$ 14,99
- **Tipo**: Assinatura Recorrente Mensal
- **Código Mestre**: Único por academia

#### 2.2. Starter
- **ID do Produto Cakto**: `cemyp2n_668537`
- **Preço**: R$ 299,90/mês
- **Licenças**: 20 licenças premium
- **Custo por Aluno**: R$ 14,99
- **Tipo**: Assinatura Recorrente Mensal
- **Código Mestre**: Único por academia

#### 2.3. Growth (Mais Vendido)
- **ID do Produto Cakto**: `vi6djzq_668541`
- **Preço**: R$ 649,90/mês
- **Licenças**: 50 licenças premium
- **Custo por Aluno**: R$ 12,99
- **Tipo**: Assinatura Recorrente Mensal
- **Código Mestre**: Único por academia
- **Recursos Extras**: Suporte Prioritário

#### 2.4. Pro
- **ID do Produto Cakto**: `3dis6ds_668546`
- **Preço**: R$ 1.199,90/mês
- **Licenças**: 100 licenças premium
- **Custo por Aluno**: R$ 11,99
- **Tipo**: Assinatura Recorrente Mensal
- **Código Mestre**: Único por academia
- **Recursos Extras**: Menor custo/aluno

### 3. Planos para Personal Trainers

#### 3.1. Team 5
- **ID do Produto Cakto**: `3dgheuc_666289`
- **Preço**: R$ 99,90/mês
- **Licenças**: 5 licenças premium
- **Custo por Aluno**: R$ 19,98
- **Tipo**: Assinatura Recorrente Mensal
- **Código de Equipe**: Único por personal

#### 3.2. Team 15 (Mais Vantajoso)
- **ID do Produto Cakto**: `3etp85e_666303`
- **Preço**: R$ 249,90/mês
- **Licenças**: 15 licenças premium
- **Custo por Aluno**: R$ 16,66
- **Tipo**: Assinatura Recorrente Mensal
- **Código de Equipe**: Único por personal
- **Recursos Extras**: Suporte Prioritário

### 4. Recargas e Upgrades (One-Time)

#### 4.1. Sessão Turbo
- **ID do Produto Cakto**: `ihfy8cz_668443`
- **Preço**: R$ 5,00 (ou R$ 3,99 primeira compra)
- **Tipo**: Pagamento Único (One-Time)
- **Benefício**: +30 minutos de voz
- **Validade**: 24 horas
- **Uso**: Ideal para terminar conversa urgente

#### 4.2. Banco de Voz 100
- **ID do Produto Cakto**: `hhxugxb_668446`
- **Preço**: R$ 12,90 (ou R$ 9,90 primeira compra)
- **Tipo**: Pagamento Único (One-Time)
- **Benefício**: +100 minutos de voz
- **Validade**: Não expira (permanece na conta)
- **Uso**: Quando o limite diário acabar

#### 4.3. Passe Livre 30 Dias
- **ID do Produto Cakto**: `trszqtv_668453`
- **Preço**: R$ 19,90 (ou R$ 14,90 primeira compra)
- **Tipo**: Pagamento Único (One-Time)
- **Benefício**: Remove limite de 15 min/dia por 30 dias
- **Validade**: 30 dias corridos
- **Uso**: Acesso ilimitado de voz por 1 mês

---

## 🎁 Recursos e Limitações por Plano

### Recursos Base (Todos os Planos Premium)

| Recurso | Descrição | Limitação |
|---------|-----------|-----------|
| **Análise de Fotos (Comida)** | IA analisa foto do prato e calcula macros | ✅ Ilimitado |
| **Análise de Fotos (Treinos)** | IA analisa execução de exercícios | ✅ Ilimitado |
| **Treinos Personalizados** | IA cria treinos baseados em objetivos | ✅ Ilimitado |
| **Chat de Texto** | Conversa por texto com a IA | ✅ Ilimitado |
| **Consultoria de Voz** | Conversa por voz em tempo real | ⚠️ 15 min/dia (padrão) |

### Limitações Específicas

#### Plano Mensal e Anual (B2C)
- ✅ Todos os recursos base ilimitados
- ⚠️ Voz: 15 minutos/dia (reset diário às 00:00)
- ✅ Pode comprar recargas para aumentar limite de voz
- ✅ Cancelamento a qualquer momento

#### Planos B2B (Academias)
- ✅ Todos os recursos base ilimitados
- ⚠️ Voz: 15 minutos/dia por licença
- ⚠️ Licenças limitadas (10, 20, 50 ou 100)
- ✅ Código mestre para distribuir aos alunos
- ✅ Upgrade/downgrade de plano disponível

#### Planos Personais
- ✅ Todos os recursos base ilimitados
- ⚠️ Voz: 15 minutos/dia por licença
- ⚠️ Licenças limitadas (5 ou 15)
- ✅ Código de equipe para distribuir aos alunos
- ✅ Relatórios de uso (Team 15)

### Recargas e Upgrades

| Tipo de Recarga | Efeito | Validade |
|-----------------|--------|----------|
| **Sessão Turbo** | +30 min de voz | 24 horas |
| **Banco de Voz 100** | +100 min de voz | Não expira |
| **Passe Livre 30 Dias** | Remove limite diário | 30 dias |

---

## 🔐 Sistema de Verificação de Assinaturas

### 1. Estrutura de Dados da Assinatura

```typescript
interface Subscription {
  id: string;
  userId: string;
  planType: 'monthly' | 'annual' | 'b2b_starter_mini' | 'b2b_starter' | 'b2b_growth' | 'b2b_pro' | 'personal_team5' | 'personal_team15';
  status: 'active' | 'canceled' | 'expired' | 'trial' | 'suspended';
  startDate: Date;
  endDate: Date | null; // null para assinaturas recorrentes ativas
  nextBillingDate: Date | null;
  caktoSubscriptionId: string;
  caktoProductId: string;
  isRecurring: boolean;
  licenses?: number; // Para planos B2B e Personais
  activationCode?: string; // Para planos B2B e Personais
  companyId?: string; // Para planos B2B
  personalTrainerId?: string; // Para planos Personais
}

interface UserAccess {
  userId: string;
  subscriptionId: string | null;
  isPremium: boolean;
  planType: Subscription['planType'] | null;
  features: {
    photoAnalysis: boolean;
    workoutAnalysis: boolean;
    customWorkouts: boolean;
    textChat: boolean;
    voiceChat: boolean;
    voiceMinutesDaily: number; // Minutos disponíveis hoje
    voiceMinutesTotal: number; // Total acumulado (Banco de Voz)
    voiceUnlimitedUntil?: Date; // Se tem Passe Livre ativo
  };
  licensesUsed?: number; // Para planos B2B/Personais
  licensesTotal?: number; // Para planos B2B/Personais
}
```

### 2. Fluxo de Verificação

```
┌─────────────────┐
│  App Inicia     │
└────────┬────────┘
         │
         ▼
┌─────────────────────────┐
│ Verifica Cache Local    │
│ (Última verificação)    │
└────────┬────────────────┘
         │
         ▼
┌─────────────────────────┐
│ Cache válido?           │
│ (< 5 minutos)           │
└───┬───────────────┬─────┘
    │ SIM            │ NÃO
    ▼                ▼
┌─────────┐    ┌──────────────────┐
│ Usa     │    │ Chama API        │
│ Cache   │    │ Supabase/Backend │
└─────────┘    └────────┬─────────┘
                        │
                        ▼
                ┌──────────────────┐
                │ Valida Assinatura│
                │ no Backend       │
                └────────┬─────────┘
                        │
                        ▼
                ┌──────────────────┐
                │ Atualiza Cache    │
                │ Local             │
                └────────┬─────────┘
                        │
                        ▼
                ┌──────────────────┐
                │ Retorna Status   │
                │ de Acesso        │
                └──────────────────┘
```

### 3. Função de Verificação (Exemplo TypeScript)

```typescript
// services/subscriptionService.ts

import { supabase } from './supabaseClient';

export interface SubscriptionStatus {
  isActive: boolean;
  planType: string | null;
  features: UserAccess['features'];
  expiresAt: Date | null;
  canUpgrade: boolean;
}

export async function checkSubscriptionStatus(
  userId: string
): Promise<SubscriptionStatus> {
  try {
    // 1. Buscar assinatura ativa no Supabase
    const { data: subscription, error } = await supabase
      .from('subscriptions')
      .select(`
        *,
        user_voice_usage (
          daily_minutes_used,
          total_minutes_available,
          unlimited_until
        )
      `)
      .eq('user_id', userId)
      .eq('status', 'active')
      .single();

    if (error || !subscription) {
      return {
        isActive: false,
        planType: null,
        features: getFreeTierFeatures(),
        expiresAt: null,
        canUpgrade: true,
      };
    }

    // 2. Verificar se assinatura não expirou
    const now = new Date();
    const endDate = subscription.end_date 
      ? new Date(subscription.end_date) 
      : null;

    if (endDate && endDate < now) {
      // Assinatura expirada - atualizar status
      await supabase
        .from('subscriptions')
        .update({ status: 'expired' })
        .eq('id', subscription.id);

      return {
        isActive: false,
        planType: null,
        features: getFreeTierFeatures(),
        expiresAt: endDate,
        canUpgrade: true,
      };
    }

    // 3. Calcular recursos disponíveis
    const voiceUsage = subscription.user_voice_usage?.[0] || {};
    const dailyReset = getDailyResetTime();
    const minutesUsedToday = 
      voiceUsage.last_reset_date === dailyReset.toISOString().split('T')[0]
        ? voiceUsage.daily_minutes_used || 0
        : 0;

    const planLimits = getPlanLimits(subscription.plan_type);
    const voiceMinutesDaily = Math.max(
      0,
      planLimits.voiceMinutesDaily - minutesUsedToday
    );

    // Verificar Passe Livre
    const unlimitedUntil = voiceUsage.unlimited_until
      ? new Date(voiceUsage.unlimited_until)
      : null;
    const hasUnlimitedVoice = unlimitedUntil && unlimitedUntil > now;

    // 4. Retornar status
    return {
      isActive: true,
      planType: subscription.plan_type,
      features: {
        photoAnalysis: true,
        workoutAnalysis: true,
        customWorkouts: true,
        textChat: true,
        voiceChat: true,
        voiceMinutesDaily: hasUnlimitedVoice ? Infinity : voiceMinutesDaily,
        voiceMinutesTotal: voiceUsage.total_minutes_available || 0,
        voiceUnlimitedUntil: unlimitedUntil || undefined,
      },
      expiresAt: endDate,
      canUpgrade: false,
    };
  } catch (error) {
    console.error('Erro ao verificar assinatura:', error);
    // Fallback: permitir acesso limitado
    return {
      isActive: false,
      planType: null,
      features: getFreeTierFeatures(),
      expiresAt: null,
      canUpgrade: true,
    };
  }
}

function getPlanLimits(planType: string) {
  const limits: Record<string, { voiceMinutesDaily: number }> = {
    monthly: { voiceMinutesDaily: 15 },
    annual: { voiceMinutesDaily: 15 },
    b2b_starter_mini: { voiceMinutesDaily: 15 },
    b2b_starter: { voiceMinutesDaily: 15 },
    b2b_growth: { voiceMinutesDaily: 15 },
    b2b_pro: { voiceMinutesDaily: 15 },
    personal_team5: { voiceMinutesDaily: 15 },
    personal_team15: { voiceMinutesDaily: 15 },
  };
  return limits[planType] || { voiceMinutesDaily: 0 };
}

function getFreeTierFeatures(): UserAccess['features'] {
  return {
    photoAnalysis: false, // Apenas preview
    workoutAnalysis: false, // Apenas preview
    customWorkouts: false,
    textChat: false, // Apenas mensagens limitadas
    voiceChat: false,
    voiceMinutesDaily: 0,
    voiceMinutesTotal: 0,
  };
}

function getDailyResetTime(): Date {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now;
}
```

---

## 🚪 Controle de Acesso e Features

### 1. Middleware de Verificação

```typescript
// hooks/useSubscription.ts

import { useState, useEffect } from 'react';
import { checkSubscriptionStatus, SubscriptionStatus } from '../services/subscriptionService';
import { useAuth } from './useAuth';

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

export function useSubscription() {
  const { user } = useAuth();
  const [status, setStatus] = useState<SubscriptionStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastCheck, setLastCheck] = useState<number>(0);

  useEffect(() => {
    if (!user) {
      setStatus(null);
      setLoading(false);
      return;
    }

    const now = Date.now();
    const cacheValid = (now - lastCheck) < CACHE_DURATION;

    if (cacheValid && status) {
      return; // Usar cache
    }

    loadSubscription();
  }, [user]);

  async function loadSubscription() {
    if (!user) return;

    setLoading(true);
    try {
      const subscriptionStatus = await checkSubscriptionStatus(user.id);
      setStatus(subscriptionStatus);
      setLastCheck(Date.now());
    } catch (error) {
      console.error('Erro ao carregar assinatura:', error);
    } finally {
      setLoading(false);
    }
  }

  function canAccessFeature(feature: keyof SubscriptionStatus['features']): boolean {
    if (!status || !status.isActive) return false;
    return status.features[feature] === true;
  }

  function hasVoiceMinutesAvailable(): boolean {
    if (!status || !status.isActive) return false;
    return status.features.voiceMinutesDaily > 0 || 
           status.features.voiceUnlimitedUntil !== undefined;
  }

  function getRemainingVoiceMinutes(): number {
    if (!status || !status.isActive) return 0;
    if (status.features.voiceUnlimitedUntil) return Infinity;
    return status.features.voiceMinutesDaily;
  }

  return {
    status,
    loading,
    isPremium: status?.isActive || false,
    canAccessFeature,
    hasVoiceMinutesAvailable,
    getRemainingVoiceMinutes,
    refresh: loadSubscription,
  };
}
```

### 2. Componente de Proteção de Feature

```typescript
// components/ProtectedFeature.tsx

import React from 'react';
import { useSubscription } from '../hooks/useSubscription';
import { Button } from './Button';

interface ProtectedFeatureProps {
  feature: 'photoAnalysis' | 'workoutAnalysis' | 'customWorkouts' | 'textChat' | 'voiceChat';
  children: React.ReactNode;
  fallback?: React.ReactNode;
  showUpgradePrompt?: boolean;
}

export function ProtectedFeature({
  feature,
  children,
  fallback,
  showUpgradePrompt = true,
}: ProtectedFeatureProps) {
  const { canAccessFeature, isPremium } = useSubscription();

  if (canAccessFeature(feature)) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return (
    <div className="premium-locked">
      {showUpgradePrompt && (
        <div className="upgrade-prompt">
          <p>Esta funcionalidade requer assinatura Premium</p>
          <Button onClick={() => window.open('/#pricing', '_blank')}>
            Ver Planos
          </Button>
        </div>
      )}
    </div>
  );
}
```

### 3. Uso no App

```typescript
// Exemplo: Tela de Análise de Foto

import { ProtectedFeature } from '../components/ProtectedFeature';
import { useSubscription } from '../hooks/useSubscription';

function PhotoAnalysisScreen() {
  const { isPremium, getRemainingVoiceMinutes } = useSubscription();

  return (
    <div>
      <ProtectedFeature feature="photoAnalysis">
        <CameraComponent />
        <AnalysisResults />
      </ProtectedFeature>

      <ProtectedFeature 
        feature="voiceChat"
        fallback={
          <div>
            <p>Você não tem minutos de voz disponíveis</p>
            <Button onClick={() => window.open('/#recharge', '_blank')}>
              Recarregar
            </Button>
          </div>
        }
      >
        <VoiceChatComponent 
          remainingMinutes={getRemainingVoiceMinutes()}
        />
      </ProtectedFeature>
    </div>
  );
}
```

---

## 🔋 Sistema de Recargas

### 1. Tipos de Recarga e Aplicação

```typescript
// services/rechargeService.ts

export interface Recharge {
  id: string;
  userId: string;
  type: 'turbo' | 'bank_100' | 'unlimited_30';
  caktoProductId: string;
  purchasedAt: Date;
  appliedAt?: Date;
  expiresAt?: Date;
  status: 'pending' | 'applied' | 'expired';
}

export async function applyRecharge(
  userId: string,
  rechargeType: Recharge['type']
): Promise<void> {
  const { data: recharge, error } = await supabase
    .from('recharges')
    .select('*')
    .eq('user_id', userId)
    .eq('type', rechargeType)
    .eq('status', 'pending')
    .order('purchased_at', { ascending: false })
    .limit(1)
    .single();

  if (error || !recharge) {
    throw new Error('Recarga não encontrada');
  }

  const now = new Date();

  switch (rechargeType) {
    case 'turbo':
      // Adiciona 30 minutos ao banco de voz
      await supabase
        .from('user_voice_usage')
        .upsert({
          user_id: userId,
          total_minutes_available: 
            (await getCurrentVoiceBank(userId)) + 30,
        });
      
      // Marca recarga como aplicada e expira em 24h
      await supabase
        .from('recharges')
        .update({
          status: 'applied',
          applied_at: now.toISOString(),
          expires_at: new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString(),
        })
        .eq('id', recharge.id);
      break;

    case 'bank_100':
      // Adiciona 100 minutos ao banco de voz (não expira)
      await supabase
        .from('user_voice_usage')
        .upsert({
          user_id: userId,
          total_minutes_available: 
            (await getCurrentVoiceBank(userId)) + 100,
        });
      
      await supabase
        .from('recharges')
        .update({
          status: 'applied',
          applied_at: now.toISOString(),
        })
        .eq('id', recharge.id);
      break;

    case 'unlimited_30':
      // Remove limite diário por 30 dias
      const expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
      
      await supabase
        .from('user_voice_usage')
        .upsert({
          user_id: userId,
          unlimited_until: expiresAt.toISOString(),
        });
      
      await supabase
        .from('recharges')
        .update({
          status: 'applied',
          applied_at: now.toISOString(),
          expires_at: expiresAt.toISOString(),
        })
        .eq('id', recharge.id);
      break;
  }
}

async function getCurrentVoiceBank(userId: string): Promise<number> {
  const { data } = await supabase
    .from('user_voice_usage')
    .select('total_minutes_available')
    .eq('user_id', userId)
    .single();

  return data?.total_minutes_available || 0;
}
```

### 2. Lógica de Uso de Minutos de Voz

```typescript
// services/voiceUsageService.ts

export async function useVoiceMinutes(
  userId: string,
  minutesUsed: number
): Promise<{ success: boolean; remaining: number }> {
  const { data: usage, error } = await supabase
    .from('user_voice_usage')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) {
    throw new Error('Erro ao buscar uso de voz');
  }

  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const lastReset = usage.last_reset_date || today;

  // Reset diário se necessário
  if (lastReset !== today) {
    await supabase
      .from('user_voice_usage')
      .update({
        daily_minutes_used: 0,
        last_reset_date: today,
      })
      .eq('user_id', userId);
  }

  // Verificar Passe Livre
  if (usage.unlimited_until) {
    const unlimitedUntil = new Date(usage.unlimited_until);
    if (unlimitedUntil > now) {
      // Ilimitado - não precisa verificar limite
      return { success: true, remaining: Infinity };
    }
  }

  // Verificar limite diário (15 min)
  const dailyLimit = 15;
  const dailyUsed = usage.daily_minutes_used || 0;
  const dailyRemaining = dailyLimit - dailyUsed;

  if (dailyRemaining >= minutesUsed) {
    // Usa do limite diário
    await supabase
      .from('user_voice_usage')
      .update({
        daily_minutes_used: dailyUsed + minutesUsed,
      })
      .eq('user_id', userId);

    return { 
      success: true, 
      remaining: dailyRemaining - minutesUsed 
    };
  }

  // Tentar usar do banco de voz
  const bankAvailable = usage.total_minutes_available || 0;
  const neededFromBank = minutesUsed - dailyRemaining;

  if (bankAvailable >= neededFromBank) {
    // Usa do banco
    await supabase
      .from('user_voice_usage')
      .update({
        daily_minutes_used: dailyLimit, // Esgota limite diário
        total_minutes_available: bankAvailable - neededFromBank,
      })
      .eq('user_id', userId);

    return { 
      success: true, 
      remaining: bankAvailable - neededFromBank 
    };
  }

  // Não tem minutos suficientes
  return { 
    success: false, 
    remaining: dailyRemaining + bankAvailable 
  };
}
```

---

## 🎫 Códigos de Ativação (B2B e Personais)

### 1. Sistema de Códigos

```typescript
// services/activationCodeService.ts

export interface ActivationCode {
  id: string;
  code: string; // Ex: "ACADEMIA-X", "PERSONAL-Y"
  type: 'b2b' | 'personal';
  companyId?: string;
  personalTrainerId?: string;
  planType: string;
  licensesTotal: number;
  licensesUsed: number;
  createdAt: Date;
  expiresAt?: Date;
  isActive: boolean;
}

export async function validateActivationCode(
  code: string
): Promise<{ valid: boolean; code?: ActivationCode; error?: string }> {
  const { data, error } = await supabase
    .from('activation_codes')
    .select('*')
    .eq('code', code.toUpperCase())
    .eq('is_active', true)
    .single();

  if (error || !data) {
    return { valid: false, error: 'Código inválido ou expirado' };
  }

  const now = new Date();
  if (data.expires_at && new Date(data.expires_at) < now) {
    return { valid: false, error: 'Código expirado' };
  }

  if (data.licenses_used >= data.licenses_total) {
    return { valid: false, error: 'Código esgotado (todas as licenças foram usadas)' };
  }

  return { valid: true, code: data };
}

export async function activateUserWithCode(
  userId: string,
  code: string
): Promise<{ success: boolean; error?: string }> {
  const validation = await validateActivationCode(code);

  if (!validation.valid || !validation.code) {
    return { success: false, error: validation.error };
  }

  // Verificar se usuário já tem assinatura ativa
  const { data: existingSubscription } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'active')
    .single();

  if (existingSubscription) {
    return { success: false, error: 'Usuário já possui assinatura ativa' };
  }

  // Criar assinatura vinculada ao código
  const { error: subError } = await supabase
    .from('subscriptions')
    .insert({
      user_id: userId,
      plan_type: validation.code.plan_type,
      status: 'active',
      activation_code_id: validation.code.id,
      company_id: validation.code.company_id,
      personal_trainer_id: validation.code.personal_trainer_id,
      is_recurring: false, // Assinatura via código não é recorrente
    });

  if (subError) {
    return { success: false, error: 'Erro ao criar assinatura' };
  }

  // Incrementar licenças usadas
  await supabase
    .from('activation_codes')
    .update({
      licenses_used: validation.code.licenses_used + 1,
    })
    .eq('id', validation.code.id);

  return { success: true };
}
```

### 2. Tela de Ativação no App

```typescript
// screens/ActivationScreen.tsx

import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { activateUserWithCode } from '../services/activationCodeService';

export function ActivationScreen() {
  const { user } = useAuth();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleActivate() {
    if (!code.trim() || !user) return;

    setLoading(true);
    setError(null);

    try {
      const result = await activateUserWithCode(user.id, code);
      
      if (result.success) {
        setSuccess(true);
        // Redirecionar para home após 2 segundos
        setTimeout(() => {
          window.location.href = '/home';
        }, 2000);
      } else {
        setError(result.error || 'Erro ao ativar código');
      }
    } catch (err) {
      setError('Erro inesperado. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="activation-screen">
      <h1>Ativar Código Premium</h1>
      <p>Digite o código fornecido pela sua academia ou personal trainer</p>
      
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value.toUpperCase())}
        placeholder="Ex: ACADEMIA-X"
        maxLength={20}
      />

      {error && <div className="error">{error}</div>}
      {success && (
        <div className="success">
          Código ativado com sucesso! Redirecionando...
        </div>
      )}

      <button 
        onClick={handleActivate} 
        disabled={loading || !code.trim()}
      >
        {loading ? 'Ativando...' : 'Ativar Código'}
      </button>
    </div>
  );
}
```

---

## 🔄 Fluxos de Renovação e Cancelamento

### 1. Renovação Automática

```typescript
// services/renewalService.ts

export async function checkAndRenewSubscriptions(): Promise<void> {
  // Buscar assinaturas que precisam ser renovadas
  const { data: subscriptions, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('status', 'active')
    .eq('is_recurring', true)
    .lte('next_billing_date', new Date().toISOString());

  if (error) {
    console.error('Erro ao buscar assinaturas para renovação:', error);
    return;
  }

  for (const subscription of subscriptions || []) {
    try {
      // Verificar pagamento na Cakto
      const paymentStatus = await checkCaktoPayment(subscription.cakto_subscription_id);

      if (paymentStatus === 'paid') {
        // Renovar assinatura
        const newEndDate = calculateNextBillingDate(
          subscription.plan_type,
          new Date()
        );

        await supabase
          .from('subscriptions')
          .update({
            start_date: new Date().toISOString(),
            end_date: newEndDate.toISOString(),
            next_billing_date: newEndDate.toISOString(),
            status: 'active',
          })
          .eq('id', subscription.id);

        // Enviar email de confirmação
        await sendRenewalConfirmationEmail(subscription.user_id);
      } else {
        // Pagamento falhou - suspender assinatura
        await supabase
          .from('subscriptions')
          .update({ status: 'suspended' })
          .eq('id', subscription.id);

        // Enviar email de notificação
        await sendPaymentFailedEmail(subscription.user_id);
      }
    } catch (error) {
      console.error(`Erro ao renovar assinatura ${subscription.id}:`, error);
    }
  }
}

function calculateNextBillingDate(
  planType: string,
  currentDate: Date
): Date {
  const nextDate = new Date(currentDate);

  if (planType.includes('monthly') || planType.includes('b2b') || planType.includes('personal')) {
    nextDate.setMonth(nextDate.getMonth() + 1);
  } else if (planType === 'annual') {
    nextDate.setFullYear(nextDate.getFullYear() + 1);
  }

  return nextDate;
}
```

### 2. Cancelamento

```typescript
// services/cancellationService.ts

export async function cancelSubscription(
  userId: string,
  reason?: string
): Promise<{ success: boolean; error?: string }> {
  const { data: subscription, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'active')
    .single();

  if (error || !subscription) {
    return { success: false, error: 'Assinatura não encontrada' };
  }

  // Cancelar na Cakto
  const caktoResult = await cancelCaktoSubscription(
    subscription.cakto_subscription_id
  );

  if (!caktoResult.success) {
    return { success: false, error: 'Erro ao cancelar na plataforma de pagamento' };
  }

  // Atualizar status no banco
  const { error: updateError } = await supabase
    .from('subscriptions')
    .update({
      status: 'canceled',
      canceled_at: new Date().toISOString(),
      cancellation_reason: reason,
    })
    .eq('id', subscription.id);

  if (updateError) {
    return { success: false, error: 'Erro ao atualizar assinatura' };
  }

  // Se for plano anual, calcular reembolso proporcional
  if (subscription.plan_type === 'annual') {
    await calculateProportionalRefund(subscription);
  }

  // Enviar email de confirmação
  await sendCancellationConfirmationEmail(userId, subscription.plan_type);

  return { success: true };
}
```

---

## ✅ Validações e Regras de Negócio

### 1. Regras de Acesso

| Situação | Comportamento |
|----------|---------------|
| **Assinatura Ativa** | Acesso completo a todos os recursos do plano |
| **Assinatura Expirada** | Acesso bloqueado, mostrar prompt de renovação |
| **Assinatura Cancelada** | Acesso bloqueado, mostrar opções de reativação |
| **Assinatura Suspensa** | Acesso bloqueado, mostrar problema de pagamento |
| **Sem Assinatura** | Modo trial/demo com recursos limitados |

### 2. Validações de Recursos

```typescript
// utils/featureValidation.ts

export function validateFeatureAccess(
  feature: string,
  subscriptionStatus: SubscriptionStatus
): { allowed: boolean; reason?: string } {
  if (!subscriptionStatus.isActive) {
    return { 
      allowed: false, 
      reason: 'Assinatura inativa. Renove ou assine um plano.' 
    };
  }

  switch (feature) {
    case 'photoAnalysis':
    case 'workoutAnalysis':
    case 'customWorkouts':
    case 'textChat':
      // Todos os planos premium têm acesso
      return { allowed: true };

    case 'voiceChat':
      if (!subscriptionStatus.features.voiceChat) {
        return { 
          allowed: false, 
          reason: 'Chat de voz não disponível no seu plano.' 
        };
      }

      const remaining = subscriptionStatus.features.voiceMinutesDaily;
      if (remaining <= 0 && !subscriptionStatus.features.voiceUnlimitedUntil) {
        return { 
          allowed: false, 
          reason: 'Limite diário de voz atingido. Compre uma recarga para continuar.' 
        };
      }

      return { allowed: true };

    default:
      return { allowed: false, reason: 'Recurso desconhecido' };
  }
}
```

### 3. Limites e Quotas

```typescript
// utils/quotas.ts

export interface QuotaLimits {
  photoAnalysisPerDay: number;
  workoutAnalysisPerDay: number;
  customWorkoutsPerMonth: number;
  textMessagesPerDay: number;
  voiceMinutesPerDay: number;
}

export function getQuotaLimits(planType: string): QuotaLimits {
  const limits: Record<string, QuotaLimits> = {
    monthly: {
      photoAnalysisPerDay: Infinity,
      workoutAnalysisPerDay: Infinity,
      customWorkoutsPerMonth: Infinity,
      textMessagesPerDay: Infinity,
      voiceMinutesPerDay: 15,
    },
    annual: {
      photoAnalysisPerDay: Infinity,
      workoutAnalysisPerDay: Infinity,
      customWorkoutsPerMonth: Infinity,
      textMessagesPerDay: Infinity,
      voiceMinutesPerDay: 15,
    },
    // ... outros planos
  };

  return limits[planType] || {
    photoAnalysisPerDay: 3, // Trial
    workoutAnalysisPerDay: 3,
    customWorkoutsPerMonth: 1,
    textMessagesPerDay: 10,
    voiceMinutesPerDay: 0,
  };
}
```

---

## 💻 Exemplos de Implementação

### 1. Hook Completo de Assinatura

```typescript
// hooks/useSubscription.ts (Versão Completa)

import { useState, useEffect, useCallback } from 'react';
import { checkSubscriptionStatus, SubscriptionStatus } from '../services/subscriptionService';
import { useAuth } from './useAuth';

export function useSubscription() {
  const { user } = useAuth();
  const [status, setStatus] = useState<SubscriptionStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!user) {
      setStatus(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const subscriptionStatus = await checkSubscriptionStatus(user.id);
      setStatus(subscriptionStatus);
    } catch (err) {
      setError('Erro ao carregar assinatura');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    refresh();

    // Atualizar a cada 5 minutos
    const interval = setInterval(refresh, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [refresh]);

  const canAccess = useCallback((feature: string): boolean => {
    if (!status || !status.isActive) return false;
    return status.features[feature as keyof typeof status.features] === true;
  }, [status]);

  const getRemainingMinutes = useCallback((): number => {
    if (!status || !status.isActive) return 0;
    if (status.features.voiceUnlimitedUntil) return Infinity;
    return status.features.voiceMinutesDaily;
  }, [status]);

  return {
    status,
    loading,
    error,
    isPremium: status?.isActive || false,
    planType: status?.planType || null,
    canAccess,
    getRemainingMinutes,
    refresh,
  };
}
```

### 2. Tela de Status de Assinatura

```typescript
// screens/SubscriptionStatusScreen.tsx

import { useSubscription } from '../hooks/useSubscription';
import { Button } from '../components/Button';

export function SubscriptionStatusScreen() {
  const { status, loading, isPremium, planType, refresh } = useSubscription();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!isPremium) {
    return (
      <div className="subscription-status">
        <h2>Você não possui assinatura ativa</h2>
        <p>Assine um plano para ter acesso completo a todos os recursos.</p>
        <Button onClick={() => window.open('/#pricing', '_blank')}>
          Ver Planos
        </Button>
      </div>
    );
  }

  return (
    <div className="subscription-status">
      <h2>Assinatura Ativa</h2>
      <p>Plano: {planType}</p>
      
      {status?.features.voiceUnlimitedUntil && (
        <div className="unlimited-badge">
          Passe Livre Ativo até {new Date(status.features.voiceUnlimitedUntil).toLocaleDateString()}
        </div>
      )}

      <div className="voice-status">
        <h3>Minutos de Voz</h3>
        {status?.features.voiceUnlimitedUntil ? (
          <p>Ilimitado</p>
        ) : (
          <>
            <p>Diário: {status?.features.voiceMinutesDaily || 0} min restantes</p>
            <p>Banco: {status?.features.voiceMinutesTotal || 0} min disponíveis</p>
          </>
        )}
      </div>

      <Button onClick={() => window.open('/#recharge', '_blank')}>
        Recarregar Minutos
      </Button>

      <Button variant="outline" onClick={refresh}>
        Atualizar Status
      </Button>
    </div>
  );
}
```

---

## 📝 Checklist de Implementação

### Backend (Supabase)
- [ ] Criar tabela `subscriptions` com todos os campos necessários
- [ ] Criar tabela `user_voice_usage` para controle de minutos
- [ ] Criar tabela `recharges` para recargas one-time
- [ ] Criar tabela `activation_codes` para códigos B2B/Personais
- [ ] Configurar webhooks da Cakto para atualizar assinaturas
- [ ] Implementar Edge Function para processar webhooks
- [ ] Configurar RLS (Row Level Security) nas tabelas
- [ ] Criar índices para performance (user_id, status, etc.)

### Frontend (App)
- [ ] Implementar hook `useSubscription`
- [ ] Criar componente `ProtectedFeature`
- [ ] Implementar verificação de assinatura em todas as telas premium
- [ ] Criar tela de ativação de código
- [ ] Implementar contador de minutos de voz em tempo real
- [ ] Adicionar notificações quando limite estiver próximo
- [ ] Criar tela de status de assinatura
- [ ] Implementar fluxo de upgrade/downgrade
- [ ] Adicionar deep links para página de vendas

### Testes
- [ ] Testar verificação de assinatura ativa
- [ ] Testar bloqueio de acesso quando expirada
- [ ] Testar aplicação de recargas
- [ ] Testar ativação de códigos B2B/Personais
- [ ] Testar renovação automática
- [ ] Testar cancelamento
- [ ] Testar limites de quotas
- [ ] Testar reset diário de minutos

---

## 🔗 Referências

- **Página de Vendas**: `/components/Pricing.tsx`, `/components/B2BPage.tsx`, `/components/RechargePage.tsx`
- **Documentação Supabase**: `DOCUMENTACAO_INTEGRACAO_SUPABASE.md`
- **IDs de Produtos Cakto**: Ver seção [Tipos de Planos e Assinaturas](#tipos-de-planos-e-assinaturas)

---

**Última Atualização**: Dezembro 2024
**Versão**: 1.0.0
```

O documento está pronto. Ele cobre:

1. **Todos os tipos de planos** (B2C, B2B, Personais, Recargas)
2. **Recursos e limitações** de cada plano
3. **Sistema de verificação** de assinaturas
4. **Controle de acesso** e proteção de features
5. **Sistema de recargas** e aplicação
6. **Códigos de ativação** para B2B e Personais
7. **Fluxos de renovação e cancelamento**
8. **Validações e regras de negócio**
9. **Exemplos de código** TypeScript/React
10. **Checklist de implementação**

O documento serve como guia para implementar a lógica de planos e assinaturas no app Fitcoach.ai.
