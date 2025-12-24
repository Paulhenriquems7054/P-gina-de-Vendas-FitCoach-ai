import React, { useState, useEffect } from 'react';
import { Check, Star, ShieldCheck, Tag } from 'lucide-react';
import { Button } from './Button';
import { getABTestVariant, trackABTestConversion } from '../utils/abTesting';
import { PriceComparison } from './PriceComparison';
import { SavingsCalculator } from './SavingsCalculator';

export const Pricing: React.FC = () => {
  const [monthlyPrice, setMonthlyPrice] = useState(34.90);
  const [abVariant, setAbVariant] = useState<'A' | 'B'>('A');
  const serviceFee = 0.99;

  useEffect(() => {
    // A/B Test: Preço Mensal
    const variant = getABTestVariant({
      testName: 'monthly_price',
      variants: ['A', 'B'],
      defaultVariant: 'A',
    });
    
    setAbVariant(variant);
    
    // Define preço baseado na variante
    if (variant === 'A') {
      setMonthlyPrice(34.90); // Controle
    } else {
      setMonthlyPrice(39.90); // Teste
    }
  }, []);

  const handlePurchase = (url: string) => {
    // Rastreia conversão do A/B test
    trackABTestConversion('monthly_price', 'purchase_click');
    window.location.href = url;
  };

  return (
    <div id="pricing" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 reveal">
        <h2 className="font-serif text-4xl text-nutri-dark dark:text-white font-bold mb-4 transition-colors duration-300">
          Planos Individuais de IA para Alunos
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg transition-colors duration-300">
          Estes planos são contratados diretamente pelo <strong>aluno</strong> dentro do app, depois que ele entra com o 
          convite da academia. A academia paga apenas a plataforma. O uso da IA é cobrado individualmente, de forma 
          transparente e independente.
        </p>
      </div>

      {/* Calculadora de Economia */}
      <div className="mb-16">
        <SavingsCalculator />
      </div>

      {/* Comparação Visual */}
      <div className="mb-16">
        <PriceComparison />
      </div>

      {/* Planos Individuais (Uso da IA) */}
      <div className="mb-16 text-center">
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg transition-colors duration-300">
          O aluno começa com um <strong>teste grátis</strong> ao entrar pelo convite da academia e, se quiser continuar
          usando a IA depois do período de trial, escolhe um destes planos individuais:
          <span className="font-semibold text-nutri-dark dark:text-white">
            {" "}mensal para testar com calma ou anual para economizar forte.
          </span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
        
        {/* Plano Mensal – Uso da IA pelo aluno */}
        <div className="order-2 md:order-1 bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative z-10 hover:scale-[1.02] transition-all duration-300 reveal delay-100">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">
              Para alunos que querem testar mês a mês
            </span>
            <h3 className="font-serif text-3xl text-nutri-dark dark:text-white font-bold mt-2 transition-colors duration-300">
              Plano Mensal
            </h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                R$ {monthlyPrice.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">/mês</span>
            </div>
            <div className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
              Valor total por cobrança no checkout:{" "}
              <span className="font-semibold">
                R$ {(monthlyPrice + serviceFee).toFixed(2).replace('.', ',')}
              </span>{" "}
              (inclui taxa fixa de R$ 0,99 da Cakto para Pix e cartão).
            </div>
            {abVariant === 'B' && (
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                <span className="line-through">R$ 34,90</span> - Ainda 56% mais barato que concorrência
              </div>
            )}
          </div>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                <div className="w-5 h-5 rounded-full bg-nutri-light dark:bg-gray-700 flex items-center justify-center text-nutri-dark dark:text-white shrink-0"><Check size={12} /></div>
                Análise fotos
            </li>
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                <div className="w-5 h-5 rounded-full bg-nutri-light dark:bg-gray-700 flex items-center justify-center text-nutri-dark dark:text-white shrink-0"><Check size={12} /></div>
                Treinos personalizados
            </li>
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                <div className="w-5 h-5 rounded-full bg-nutri-light dark:bg-gray-700 flex items-center justify-center text-nutri-dark dark:text-white shrink-0"><Check size={12} /></div>
                Chat ilimitado
            </li>
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                <div className="w-5 h-5 rounded-full bg-nutri-light dark:bg-gray-700 flex items-center justify-center text-nutri-dark dark:text-white shrink-0"><Check size={12} /></div>
                Voz 15min/dia
            </li>
             <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                <div className="w-5 h-5 rounded-full bg-nutri-light dark:bg-gray-700 flex items-center justify-center text-nutri-dark dark:text-white shrink-0"><Check size={12} /></div>
                Cobrança individual, o aluno cancela quando quiser
            </li>
          </ul>
          
          <Button variant="outline" fullWidth onClick={() => handlePurchase('https://pay.cakto.com.br/zeygxve_668421')} className="dark:text-white dark:border-gray-500 dark:hover:bg-gray-700">Assinar Agora</Button>
        </div>

        {/* Plano Anual – Uso da IA pelo aluno */}
        <div className="order-1 md:order-2 bg-nutri-dark dark:bg-gray-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative z-20 transform md:scale-105 ring-4 ring-nutri-accent/50 dark:ring-nutri-accent/30 reveal delay-200 border border-transparent dark:border-gray-700">
          <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-[2rem] flex items-center gap-1 animate-pulse">
            MAIS VANTAJOSO
          </div>
          
          <div className="mb-6">
            <h3 className="font-serif text-3xl text-white font-bold mt-2">
              Plano Anual VIP
            </h3>
            
            {/* Bloco de Preço VIP */}
            <div className="mt-5 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="text-green-200/60 text-sm decoration-slice line-through mb-1">
                    De R$ 418,80 por:
                </div>
                
                <div className="flex flex-col mb-3">
                  <div className="text-5xl font-bold text-nutri-accent tracking-tight">R$ 297,00</div>
                  <div className="text-white font-medium text-lg -mt-1">à vista</div>
                </div>

                <div className="text-[11px] text-green-100 mt-1">
                  Valor total no checkout:{" "}
                  <span className="font-semibold">R$ 297,99</span>{" "}
                  (inclui taxa fixa de R$ 0,99 da Cakto para Pix e cartão).
                </div>
                
                <div className="w-full h-px bg-white/10 my-3"></div>
                
                <div className="text-white text-sm flex flex-col sm:flex-row sm:items-center gap-1">
                    <span>Ou em até</span>
                    <span className="font-bold text-nutri-accent text-lg">12x de R$ 34,53</span>
                    <span>no cartão</span>
                </div>
            </div>

            {/* Destaque de Economia */}
            <div className="mt-4 flex items-center justify-center gap-2 text-green-300 bg-green-900/40 border border-green-500/30 p-3 rounded-xl shadow-inner">
                <Tag size={18} className="fill-green-300/20" />
                <span className="font-bold text-sm tracking-wide">VOCÊ ECONOMIZA R$ 200,00</span>
            </div>
          </div>
          
          <ul className="space-y-4 mb-8">
             <li className="flex items-center gap-3 text-white font-medium">
                <div className="w-5 h-5 rounded-full bg-nutri-accent flex items-center justify-center text-nutri-dark shrink-0"><Check size={12} /></div>
                Tudo do mensal
            </li>
            <li className="flex items-center gap-3 text-white font-medium">
                <div className="w-5 h-5 rounded-full bg-nutri-accent flex items-center justify-center text-nutri-dark shrink-0"><Check size={12} /></div>
                Economia R$ 200
            </li>
            <li className="flex items-center gap-3 text-white font-medium">
                <div className="w-5 h-5 rounded-full bg-nutri-accent flex items-center justify-center text-nutri-dark shrink-0"><Check size={12} /></div>
                Garantia satisfação
            </li>
            <li className="flex items-center gap-3 text-white font-medium">
                <div className="w-5 h-5 rounded-full bg-nutri-accent flex items-center justify-center text-nutri-dark shrink-0"><Check size={12} /></div>
                Acesso imediato
            </li>
          </ul>
          
          <Button variant="secondary" fullWidth className="font-bold text-lg h-14" onClick={() => handlePurchase('https://pay.cakto.com.br/wvbkepi_668441')}>Assinar Agora</Button>
        </div>

      </div>
    </div>
  );
};