import React from 'react';
import { Check, Building2, Ticket, Smartphone, Zap, HelpCircle } from 'lucide-react';
import { Button } from './Button';

export const BusinessPricing: React.FC = () => {
  const checkoutLinks = {
    starter: 'https://pay.cakto.com.br/cemyp2n_668537', // Pack Starter - R$ 299,90/mês
    growth: 'https://pay.cakto.com.br/vi6djzq_668541',  // Pack Growth  - R$ 649,90/mês
    pro: 'https://pay.cakto.com.br/3dis6ds_668546'      // Pack Pro     - R$ 1.199,90/mês
  };

  const handlePurchase = (link: string) => {
    // Em produção, descomente a linha abaixo
    // window.location.href = link;
    alert("Redirecionando para o checkout B2B... (Configure os links reais no código)");
  };

  return (
    <section className="py-20 px-6 relative border-t-4 border-nutri-dark/10 dark:border-gray-700 bg-blue-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header da Seção */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            <Building2 size={14} /> Para Empresas e Academias
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-nutri-dark dark:text-white font-bold mb-4 transition-colors duration-300">
            Aumente a Retenção da sua Academia com Nutrição IA
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg transition-colors duration-300">
            Entregue um Nutricionista de Bolso 24h para seus alunos e pare de perder matrículas por falta de resultado.
          </p>
        </div>

        {/* Como Funciona (Ícones) */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto text-center reveal delay-100">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-nutri-dark text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="font-bold text-nutri-dark dark:text-white mb-2">Você escolhe o pacote</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Defina quantos alunos quer beneficiar e selecione o plano ideal.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-nutri-dark text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold"><Ticket size={24}/></div>
            <h3 className="font-bold text-nutri-dark dark:text-white mb-2">Receba o Código Mestre</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Envio automático por e-mail após a compra com seu cupom exclusivo.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-nutri-dark text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-bold"><Smartphone size={24}/></div>
            <h3 className="font-bold text-nutri-dark dark:text-white mb-2">Seus alunos ativam</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Eles baixam o app, inserem seu código e ganham acesso Premium imediato.</p>
          </div>
        </div>

        {/* Cards de Preço B2B */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start mb-20">
          
          {/* CARD 1: STARTER */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 reveal delay-200 hover:border-blue-400 transition-all duration-300">
            <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Starter</div>
            <h3 className="font-serif text-2xl text-nutri-dark dark:text-white font-bold">20 Licenças</h3>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-6">Ideal para Personal Trainers e Studios</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-nutri-dark dark:text-white">R$ 299,90</span>
              <span className="text-gray-500 text-sm">/mês</span>
              <div className="text-xs text-gray-400 mt-1">Equivale a R$ 14,99 por aluno</div>
              <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                Valor total por cobrança no checkout: <span className="font-semibold">R$ 300,89</span> (inclui taxa fixa de R$ 0,99 da Cakto para Pix e cartão).
              </p>
            </div>

            <Button variant="outline" fullWidth onClick={() => handlePurchase(checkoutLinks.starter)} className="mb-6 border-gray-300 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">
              COMPRAR PACOTE 20
            </Button>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> 20 Licenças Premium</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Análise de Pratos Ilimitada</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Nutri por Voz (15 min/dia)</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Código de Ativação Único</li>
            </ul>
          </div>

          {/* CARD 2: GROWTH (Destaque) */}
          <div className="bg-nutri-dark dark:bg-gray-900 p-8 rounded-3xl shadow-2xl border-2 border-nutri-accent relative transform md:-translate-y-4 reveal delay-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nutri-accent text-nutri-dark px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md whitespace-nowrap">
              <Zap size={12} fill="currentColor"/> Mais Escolhido por Academias
            </div>

            <div className="text-sm font-bold text-green-200 uppercase tracking-wider mb-2">Growth</div>
            <h3 className="font-serif text-2xl text-white font-bold">50 Licenças</h3>
            <p className="text-xs text-green-100/80 font-medium mb-6">Melhor Custo-Benefício</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">R$ 649,90</span>
              <span className="text-green-200/60 text-sm">/mês</span>
              <div className="text-xs text-green-200/80 mt-1">Equivale a R$ 12,99 por aluno</div>
              <p className="mt-1 text-[11px] text-green-100">
                Valor total por cobrança no checkout: <span className="font-semibold">R$ 650,89</span> (inclui taxa fixa de R$ 0,99 da Cakto para Pix e cartão).
              </p>
            </div>

            <Button variant="secondary" fullWidth onClick={() => handlePurchase(checkoutLinks.growth)} className="mb-6 font-bold shadow-lg shadow-nutri-accent/20">
              COMPRAR PACOTE 50
            </Button>

            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex items-center gap-2"><div className="bg-nutri-accent/20 p-1 rounded-full"><Check size={12} className="text-nutri-accent" /></div> 50 Licenças Premium</li>
              <li className="flex items-center gap-2"><div className="bg-nutri-accent/20 p-1 rounded-full"><Check size={12} className="text-nutri-accent" /></div> Análise de Pratos Ilimitada</li>
              <li className="flex items-center gap-2"><div className="bg-nutri-accent/20 p-1 rounded-full"><Check size={12} className="text-nutri-accent" /></div> Nutri por Voz (15 min/dia)</li>
              <li className="flex items-center gap-2"><div className="bg-nutri-accent/20 p-1 rounded-full"><Check size={12} className="text-nutri-accent" /></div> Código de Ativação Único</li>
              <li className="flex items-center gap-2 font-bold text-nutri-accent"><div className="bg-nutri-accent p-1 rounded-full"><Check size={12} className="text-nutri-dark" /></div> Suporte Prioritário B2B</li>
            </ul>
          </div>

          {/* CARD 3: PRO */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 reveal delay-400 hover:border-blue-400 transition-all duration-300">
            <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Pro</div>
            <h3 className="font-serif text-2xl text-nutri-dark dark:text-white font-bold">100 Licenças</h3>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-6">Para Grandes Redes</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-nutri-dark dark:text-white">R$ 1.199,90</span>
              <span className="text-gray-500 text-sm">/mês</span>
              <div className="text-xs text-gray-400 mt-1">Equivale a R$ 11,99 por aluno</div>
              <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                Valor total por cobrança no checkout: <span className="font-semibold">R$ 1.200,89</span> (inclui taxa fixa de R$ 0,99 da Cakto para Pix e cartão).
              </p>
            </div>

            <Button variant="outline" fullWidth onClick={() => handlePurchase(checkoutLinks.pro)} className="mb-6 border-gray-300 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">
              COMPRAR PACOTE 100
            </Button>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> 100 Licenças Premium</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Tudo do plano Growth</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Análise de Pratos Ilimitada</li>
              <li className="flex items-center gap-2 font-semibold text-nutri-dark dark:text-white"><Check size={16} className="text-green-500" /> Menor custo por aluno</li>
            </ul>
          </div>
        </div>

        {/* FAQ Rápido B2B */}
        <div className="max-w-3xl mx-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-gray-700 reveal delay-500">
           <div className="flex items-center gap-3 mb-6">
             <HelpCircle className="text-blue-600 dark:text-blue-400" />
             <h3 className="font-bold text-lg text-nutri-dark dark:text-white">Dúvidas Frequentes sobre Planos Empresariais</h3>
           </div>
           
           <div className="space-y-6">
             <div>
               <h4 className="font-bold text-sm text-nutri-dark dark:text-white mb-1">Preciso cadastrar os alunos manualmente?</h4>
               <p className="text-sm text-gray-600 dark:text-gray-300">Não! Você recebe um código (ex: ACADEMIA-VIP) e apenas entrega para o aluno. O sistema faz o resto.</p>
             </div>
             <div>
               <h4 className="font-bold text-sm text-nutri-dark dark:text-white mb-1">E se eu precisar de mais vagas?</h4>
               <p className="text-sm text-gray-600 dark:text-gray-300">Basta fazer um upgrade de plano ou comprar pacotes adicionais a qualquer momento.</p>
             </div>
             <div>
               <h4 className="font-bold text-sm text-nutri-dark dark:text-white mb-1">O aluno paga alguma coisa?</h4>
               <p className="text-sm text-gray-600 dark:text-gray-300">Não. Enquanto sua assinatura estiver ativa, o acesso do aluno é 100% gratuito.</p>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};
