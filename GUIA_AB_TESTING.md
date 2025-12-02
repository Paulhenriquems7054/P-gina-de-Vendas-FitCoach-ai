# 🧪 Guia de A/B Testing - Fitcoach.ia

## 📋 Visão Geral

Este documento explica como usar o sistema de A/B testing implementado no Fitcoach.ia para testar diferentes preços e estratégias de conversão.

---

## 🚀 Como Funciona

O sistema de A/B testing usa `localStorage` para:
1. **Atribuir uma variante** aleatoriamente na primeira visita
2. **Persistir a variante** para manter consistência
3. **Rastrear conversões** para análise posterior

---

## 📊 Testes Implementados

### Teste 1: Preço Mensal (`monthly_price`)

**Objetivo:** Encontrar o preço ótimo que maximize receita.

**Variantes:**
- **A (Controle):** R$ 34,90/mês
- **B (Teste):** R$ 39,90/mês

**Como Funciona:**
- Na primeira visita, o usuário é atribuído aleatoriamente a A ou B
- A variante é salva no `localStorage` e mantida em visitas futuras
- Ao clicar no botão de compra, uma conversão é registrada

**Arquivo:** `components/Pricing.tsx`

---

## 🔧 Como Usar

### 1. Verificar Variante Atual

Abra o console do navegador e digite:
```javascript
localStorage.getItem('ab_test_monthly_price')
```

Isso retornará algo como:
```json
{"variant":"B","testName":"monthly_price","timestamp":1704067200000}
```

### 2. Limpar Testes (Desenvolvimento)

Para resetar todos os testes A/B:
```javascript
// No console do navegador
Object.keys(localStorage).forEach(key => {
  if (key.startsWith('ab_test_')) {
    localStorage.removeItem(key);
  }
});
```

Ou use a função helper:
```typescript
import { clearABTests } from './utils/abTesting';
clearABTests();
```

### 3. Criar Novo Teste

```typescript
import { getABTestVariant, trackABTestConversion } from '../utils/abTesting';

// No componente
const variant = getABTestVariant({
  testName: 'meu_teste',
  variants: ['A', 'B', 'C'],
  defaultVariant: 'A',
});

// Usar a variante
const price = variant === 'A' ? 34.90 : variant === 'B' ? 39.90 : 44.90;

// Rastrear conversão
const handlePurchase = () => {
  trackABTestConversion('meu_teste', 'purchase_click');
  // ... resto do código
};
```

---

## 📈 Rastreamento de Conversões

### Integração com Google Analytics

O sistema está preparado para enviar eventos ao Google Analytics (se configurado):

```html
<!-- No index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Eventos Enviados

1. **`ab_test_assigned`**: Quando uma variante é atribuída
   ```javascript
   {
     test_name: 'monthly_price',
     variant: 'B'
   }
   ```

2. **`conversion`**: Quando uma conversão é registrada
   ```javascript
   {
     test_name: 'monthly_price',
     variant: 'B'
   }
   ```

### Rastreamento Manual

Você também pode criar um endpoint próprio para rastrear:

```typescript
// Em utils/abTesting.ts, descomente:
fetch('/api/ab-test-conversion', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    testName: 'monthly_price',
    variant: 'B',
    timestamp: Date.now(),
  })
});
```

---

## 📊 Análise de Resultados

### Métricas Importantes

1. **Taxa de Conversão por Variante**
   - Variante A: X conversões / Y visitantes = Z%
   - Variante B: X conversões / Y visitantes = Z%

2. **Receita por Visitante (RPV)**
   - Variante A: (Conversões × Preço) / Visitantes
   - Variante B: (Conversões × Preço) / Visitantes

3. **Significância Estatística**
   - Use ferramentas como [AB Test Calculator](https://www.abtestguide.com/calc/)
   - Mínimo recomendado: 1.000 visitantes por variante

### Critérios de Sucesso

**Variante B vence se:**
- RPV for ≥ 10% maior que A
- OU conversão for ≥ 15% maior que A
- E diferença for estatisticamente significativa (p < 0.05)

**Se conversão cair > 20%, manter variante A**

---

## 🎯 Próximos Testes Sugeridos

### Teste 2: Preço Anual
- A: R$ 297,00/ano
- B: R$ 349,00/ano
- C: R$ 379,00/ano

### Teste 3: Apresentação de Preços
- A: Apenas preço
- B: Comparação com alternativas
- C: Valor diário ("R$ 1,16/dia")

### Teste 4: CTA Button
- A: "QUERO O PLANO MENSAL"
- B: "COMEÇAR AGORA"
- C: "TESTAR GRÁTIS POR 7 DIAS"

---

## ⚠️ Considerações Importantes

### 1. Consistência
- Uma vez atribuída, a variante é mantida para o usuário
- Isso garante experiência consistente

### 2. Privacidade
- Dados são armazenados apenas localmente (localStorage)
- Não há tracking de dados pessoais
- Conforme LGPD

### 3. Limitações
- Não funciona entre dispositivos (localStorage é por navegador)
- Requer JavaScript habilitado
- Não persiste após limpar cache

### 4. Melhorias Futuras
- Integração com backend para persistência cross-device
- Dashboard de análise de resultados
- Testes multivariados (MVT)

---

## 📝 Checklist de Implementação

- [x] Sistema de A/B testing básico
- [x] Teste 1: Preço Mensal
- [ ] Integração com Google Analytics
- [ ] Dashboard de resultados
- [ ] Teste 2: Preço Anual
- [ ] Teste 3: Apresentação de Preços
- [ ] Teste 4: CTA Button

---

## 🆘 Suporte

Para dúvidas ou problemas:
1. Verifique o console do navegador para erros
2. Confirme que `localStorage` está habilitado
3. Verifique se a variante está sendo atribuída corretamente
4. Entre em contato com a equipe de desenvolvimento

---

**Última Atualização:** Janeiro 2025  
**Versão:** 1.0

