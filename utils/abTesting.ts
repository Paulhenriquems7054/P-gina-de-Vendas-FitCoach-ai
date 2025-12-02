/**
 * Sistema simples de A/B Testing usando localStorage
 * 
 * Este sistema permite testar diferentes variantes de preços
 * e rastrear conversões para análise posterior.
 */

export type Variant = 'A' | 'B' | 'C';

export interface ABTestConfig {
  testName: string;
  variants: Variant[];
  defaultVariant?: Variant;
  storageKey?: string;
}

export interface ABTestResult {
  variant: Variant;
  testName: string;
  timestamp: number;
}

/**
 * Obtém ou atribui uma variante para um teste A/B
 */
export function getABTestVariant(config: ABTestConfig): Variant {
  const storageKey = config.storageKey || `ab_test_${config.testName}`;
  
  // Verifica se já existe uma variante atribuída
  const stored = localStorage.getItem(storageKey);
  if (stored) {
    try {
      const result: ABTestResult = JSON.parse(stored);
      // Verifica se a variante ainda é válida
      if (config.variants.includes(result.variant)) {
        return result.variant;
      }
    } catch (e) {
      console.warn('Erro ao ler variante do localStorage:', e);
    }
  }
  
  // Atribui uma nova variante aleatoriamente
  const defaultVariant = config.defaultVariant || config.variants[0];
  const randomIndex = Math.floor(Math.random() * config.variants.length);
  const selectedVariant = config.variants[randomIndex] || defaultVariant;
  
  // Salva no localStorage
  const result: ABTestResult = {
    variant: selectedVariant,
    testName: config.testName,
    timestamp: Date.now(),
  };
  
  localStorage.setItem(storageKey, JSON.stringify(result));
  
  // Envia evento para analytics (se disponível)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'ab_test_assigned', {
      test_name: config.testName,
      variant: selectedVariant,
    });
  }
  
  return selectedVariant;
}

/**
 * Registra uma conversão para o teste A/B atual
 */
export function trackABTestConversion(testName: string, eventName: string = 'conversion') {
  const storageKey = `ab_test_${testName}`;
  const stored = localStorage.getItem(storageKey);
  
  if (stored) {
    try {
      const result: ABTestResult = JSON.parse(stored);
      
      // Envia evento para analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, {
          test_name: testName,
          variant: result.variant,
        });
      }
      
      // Também pode enviar para um endpoint próprio
      // fetch('/api/ab-test-conversion', { method: 'POST', body: JSON.stringify(result) });
    } catch (e) {
      console.warn('Erro ao rastrear conversão:', e);
    }
  }
}

/**
 * Limpa todos os testes A/B (útil para desenvolvimento)
 */
export function clearABTests() {
  const keys = Object.keys(localStorage);
  keys.forEach(key => {
    if (key.startsWith('ab_test_')) {
      localStorage.removeItem(key);
    }
  });
}

