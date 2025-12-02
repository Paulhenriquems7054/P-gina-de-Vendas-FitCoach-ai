import React, { useState, useEffect } from 'react';
import { Zap, Clock, BatteryCharging, Infinity, CheckCircle2, Tag, Sparkles } from 'lucide-react';
import { Button } from './Button';

export const RechargePage: React.FC = () => {
  const [isFirstPurchase, setIsFirstPurchase] = useState(false);

  useEffect(() => {
    // Verifica se é a primeira compra de recarga
    const hasPurchasedBefore = localStorage.getItem('recharge_purchased');
    setIsFirstPurchase(!hasPurchasedBefore);
  }, []);

  const handlePurchase = (url: string, isFirst: boolean = false) => {
    if (isFirst) {
      // Marca que já comprou uma recarga
      localStorage.setItem('recharge_purchased', 'true');
    }
    window.location.href = url;
  };

  return (
    <div className="animate-fade-in-up">
      {/* Header */}
      <section className="pt-32 pb-12 px-6 bg-nutri-bg dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-3xl mx-auto text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
            <BatteryCharging size={14} /> Recarga Instantânea
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-nutri-dark dark:text-white mb-4">
            Precisa de mais tempo de conversa?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Seu plano diário acabou, mas você pode continuar com nossos pacotes de recarga instantânea.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="pb-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Opção 1: Turbo */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md border border-gray-100 dark:border-gray-700 hover:border-orange-300 transition-all group reveal delay-100 relative">
            {isFirstPurchase && (
              <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg z-10">
                <Tag size={12} /> 20% OFF
              </div>
            )}
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-nutri-dark dark:text-white mb-1">Ajuda Rápida</h3>
            <p className="text-xs text-orange-600 dark:text-orange-400 font-bold uppercase mb-4">Urgência</p>
            
            <div className="mb-4">
              {isFirstPurchase ? (
                <>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg line-through text-gray-400">R$ 5,00</span>
                    <span className="text-3xl font-bold text-green-600 dark:text-green-400">R$ 3,99</span>
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400 font-semibold">Primeira recarga com desconto!</div>
                </>
              ) : (
                <>
                  <span className="text-3xl font-bold text-gray-800 dark:text-white">R$ 5,00</span>
                  <div className="text-xs text-gray-400">Pagamento Único</div>
                </>
              )}
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl mb-6 text-sm">
              <p className="font-bold text-nutri-dark dark:text-white mb-1">+20 Minutos de Voz</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Válido por 24h. Ideal para terminar sua conversa agora.</p>
            </div>

            <Button 
              fullWidth 
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-orange-200" 
              onClick={() => handlePurchase('https://pay.cakto.com.br/ihfy8cz_668443', isFirstPurchase)}
            >
              {isFirstPurchase ? 'Recarregar com Desconto' : 'Recarregar Agora'}
            </Button>
          </div>

          {/* Opção 2: Banco 100 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl border-2 border-nutri-dark dark:border-green-500 relative transform md:-translate-y-2 reveal delay-300">
            <div className="absolute top-0 right-0 bg-nutri-dark dark:bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl flex items-center gap-1">
              <Sparkles size={12} /> MELHOR ESCOLHA
            </div>
            {isFirstPurchase && (
              <div className="absolute -top-3 left-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg z-10">
                <Tag size={12} /> 23% OFF
              </div>
            )}
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-nutri-dark dark:text-white mb-1">Minutos de Reserva</h3>
            <p className="text-xs text-green-600 dark:text-green-400 font-bold uppercase mb-4">Custo-Benefício</p>
            
            <div className="mb-4">
              {isFirstPurchase ? (
                <>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg line-through text-gray-400">R$ 12,90</span>
                    <span className="text-3xl font-bold text-green-600 dark:text-green-400">R$ 9,90</span>
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400 font-semibold">Primeira recarga com desconto!</div>
                </>
              ) : (
                <>
                  <span className="text-3xl font-bold text-gray-800 dark:text-white">R$ 12,90</span>
                  <div className="text-xs text-gray-400">Pagamento Único</div>
                </>
              )}
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl mb-6 text-sm">
              <p className="font-bold text-nutri-dark dark:text-white mb-1">+100 Minutos de Voz</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Não expira. Fica na conta e usa quando o diário acabar.</p>
            </div>

            <Button 
              variant="primary" 
              fullWidth 
              onClick={() => handlePurchase('https://pay.cakto.com.br/hhxugxb_668446', isFirstPurchase)}
            >
              {isFirstPurchase ? 'Comprar com Desconto' : 'Comprar Banco de Voz'}
            </Button>
          </div>

          {/* Opção 3: Passe Livre */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md border border-gray-100 dark:border-gray-700 hover:border-purple-300 transition-all group reveal delay-500 relative">
            {isFirstPurchase && (
              <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg z-10">
                <Tag size={12} /> 25% OFF
              </div>
            )}
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
              <Infinity size={24} />
            </div>
            <h3 className="text-xl font-bold text-nutri-dark dark:text-white mb-1">Conversa Ilimitada</h3>
            <p className="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase mb-4">VIP</p>
            
            <div className="mb-4">
              {isFirstPurchase ? (
                <>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg line-through text-gray-400">R$ 19,90</span>
                    <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">R$ 14,90</span>
                  </div>
                  <div className="text-xs text-purple-600 dark:text-purple-400 font-semibold">Primeira recarga com desconto!</div>
                </>
              ) : (
                <>
                  <span className="text-3xl font-bold text-gray-800 dark:text-white">R$ 19,90</span>
                  <div className="text-xs text-gray-400">Pagamento Único</div>
                </>
              )}
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl mb-6 text-sm">
              <p className="font-bold text-nutri-dark dark:text-white mb-1">Ilimitado por 30 dias</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Remova o limite de 15 minutos diários pelo próximo mês.</p>
            </div>

            <Button 
              fullWidth 
              className="bg-purple-600 hover:bg-purple-700 text-white shadow-purple-200" 
              onClick={() => handlePurchase('https://pay.cakto.com.br/trszqtv_668453', isFirstPurchase)}
            >
              {isFirstPurchase ? 'Liberar com Desconto' : 'Liberar Acesso Total'}
            </Button>
          </div>

        </div>

        {/* Promoção Primeira Recarga */}
        {isFirstPurchase && (
          <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-2xl border-2 border-green-500 dark:border-green-600 text-center reveal delay-600">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles size={20} className="text-green-600 dark:text-green-400" />
              <h4 className="font-bold text-lg text-green-800 dark:text-green-200">Oferta Especial: Primeira Recarga!</h4>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Ganhe desconto na sua primeira recarga! Use este desconto exclusivo agora.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Válido apenas para primeira compra. Não acumula com outras promoções.
            </p>
          </div>
        )}

        {/* Nota de Rodapé */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 py-3 rounded-full inline-flex px-6 mx-auto w-full md:w-auto reveal delay-700">
          <CheckCircle2 size={16} className="text-green-500" />
          Após o pagamento, o saldo é liberado automaticamente no seu aplicativo em até 2 minutos.
        </div>
      </section>
    </div>
  );
};