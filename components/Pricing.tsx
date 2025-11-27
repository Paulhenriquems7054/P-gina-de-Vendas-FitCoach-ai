import React from 'react';
import { Check, Star, ShieldCheck, Tag } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  const handlePurchase = (url: string) => {
    window.location.href = url;
  };

  return (
    <div id="pricing" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 reveal">
        <h2 className="font-serif text-4xl text-nutri-dark dark:text-white font-bold mb-4 transition-colors duration-300">Quanto custa ter Nutricionista + Personal Trainer disponível todo dia?</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg transition-colors duration-300">
          Um Nutricionista cobra R$ 250,00 por consulta. Um Personal Trainer, R$ 150,00 por sessão. Outros apps cobram R$ 90,00 por mês e nem falam com você.
          <br/><span className="font-semibold text-nutri-dark dark:text-white">No Fitcoach.ia, você tem Nutrição + Treinos personalizados com visão computacional e voz em tempo real por um preço ridículo.</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
        
        {/* Monthly Plan */}
        <div className="order-2 md:order-1 bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative z-10 hover:scale-[1.02] transition-all duration-300 reveal delay-100">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">Para quem quer testar</span>
            <h3 className="font-serif text-3xl text-nutri-dark dark:text-white font-bold mt-2 transition-colors duration-300">Plano Mensal</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-gray-800 dark:text-white transition-colors duration-300">R$ 34,90</span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">/mês</span>
            </div>
          </div>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                <div className="w-5 h-5 rounded-full bg-nutri-light dark:bg-gray-700 flex items-center justify-center text-nutri-dark dark:text-white shrink-0"><Check size={12} /></div>
                Análise de Fotos Ilimitada (Comida + Treinos)
            </li>
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                <div className="w-5 h-5 rounded-full bg-nutri-light dark:bg-gray-700 flex items-center justify-center text-nutri-dark dark:text-white shrink-0"><Check size={12} /></div>
                Treinos Personalizados Ilimitados
            </li>
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                <div className="w-5 h-5 rounded-full bg-nutri-light dark:bg-gray-700 flex items-center justify-center text-nutri-dark dark:text-white shrink-0"><Check size={12} /></div>
                Chat de Texto Ilimitado
            </li>
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                <div className="w-5 h-5 rounded-full bg-nutri-light dark:bg-gray-700 flex items-center justify-center text-nutri-dark dark:text-white shrink-0"><Check size={12} /></div>
                15 min/dia de Consultoria de Voz (Live)
            </li>
             <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                <div className="w-5 h-5 rounded-full bg-nutri-light dark:bg-gray-700 flex items-center justify-center text-nutri-dark dark:text-white shrink-0"><Check size={12} /></div>
                Cancele quando quiser
            </li>
          </ul>
          
          <Button variant="outline" fullWidth onClick={() => handlePurchase('https://pay.cakto.com.br/owys3oe')} className="dark:text-white dark:border-gray-500 dark:hover:bg-gray-700">QUERO O PLANO MENSAL</Button>
        </div>

        {/* Annual Plan (Featured) */}
        <div className="order-1 md:order-2 bg-nutri-dark dark:bg-gray-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative z-20 transform md:scale-105 ring-4 ring-nutri-accent/50 dark:ring-nutri-accent/30 reveal delay-200 border border-transparent dark:border-gray-700">
          <div className="absolute top-0 right-0 bg-nutri-accent text-nutri-dark text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-[2rem] flex items-center gap-1">
            <Star size={12} fill="currentColor" /> OFERTA VIP
          </div>
          
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-green-200 font-semibold flex items-center gap-2">
               Recomendado
            </span>
            <h3 className="font-serif text-3xl text-white font-bold mt-2">Plano Anual (VIP)</h3>
            
            {/* Bloco de Preço VIP */}
            <div className="mt-5 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="text-green-200/60 text-sm decoration-slice line-through mb-1">
                    De R$ 497,00 por:
                </div>
                
                <div className="flex flex-col mb-3">
                  <div className="text-5xl font-bold text-nutri-accent tracking-tight">R$ 297,00</div>
                  <div className="text-white font-medium text-lg -mt-1">à vista</div>
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
                Análise de Fotos Ilimitada (Comida + Treinos)
            </li>
            <li className="flex items-center gap-3 text-white font-medium">
                <div className="w-5 h-5 rounded-full bg-nutri-accent flex items-center justify-center text-nutri-dark shrink-0"><Check size={12} /></div>
                Treinos Personalizados Ilimitados
            </li>
            <li className="flex items-center gap-3 text-white font-medium">
                <div className="w-5 h-5 rounded-full bg-nutri-accent flex items-center justify-center text-nutri-dark shrink-0"><Check size={12} /></div>
                Chat de Texto Ilimitado
            </li>
            <li className="flex items-center gap-3 text-white font-medium">
                <div className="w-5 h-5 rounded-full bg-nutri-accent flex items-center justify-center text-nutri-dark shrink-0"><Check size={12} /></div>
                15 min/dia de Consultoria de Voz (Live)
            </li>
            <li className="flex items-center gap-3 text-white font-medium">
                <div className="w-5 h-5 rounded-full bg-nutri-accent flex items-center justify-center text-nutri-dark shrink-0"><Check size={12} /></div>
                Acesso Imediato
            </li>
             <li className="flex items-center gap-3 text-green-200 text-sm italic">
                <ShieldCheck size={16} />
                Garantia de Satisfação
            </li>
          </ul>
          
          <Button variant="secondary" fullWidth className="font-bold text-lg h-14" onClick={() => handlePurchase('https://pay.cakto.com.br/owys3oe')}>QUERO O PLANO ANUAL</Button>
        </div>

      </div>
    </div>
  );
};