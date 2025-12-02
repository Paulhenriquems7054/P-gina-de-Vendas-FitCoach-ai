import React from 'react';
import { Check, Building2, Ticket, Smartphone, Zap, ArrowRight, Star, ChevronDown } from 'lucide-react';
import { Button } from './Button';

export const B2BPage: React.FC = () => {
  const scrollToPlans = () => {
    document.getElementById('b2b-plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePurchase = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="animate-fade-in-up">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-blue-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
            <Building2 size={14} /> Soluções Corporativas
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-nutri-dark dark:text-white leading-tight mb-6">
            Retenha mais alunos com o <span className="text-blue-600 dark:text-blue-400">Fitcoach.ia</span> na sua Academia
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ofereça Nutricionista + Personal Trainer por Inteligência Artificial como benefício exclusivo. Você compra o pacote, recebe um Código Mestre e distribui para seus alunos.
          </p>
          <Button variant="primary" className="mx-auto" onClick={scrollToPlans}>
            Ver Planos Disponíveis <ChevronDown size={18} />
          </Button>
        </div>
      </section>

      {/* 2. Como Funciona */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all reveal delay-100">
            <div className="w-14 h-14 bg-nutri-dark text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-nutri-dark/20">1</div>
            <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3">Escolha o pacote</h3>
            <p className="text-gray-600 dark:text-gray-400">Defina o tamanho do pacote ideal para a quantidade de alunos ativos na sua unidade.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all reveal delay-300">
            <div className="w-14 h-14 bg-nutri-accent text-nutri-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-nutri-accent/20"><Ticket size={28}/></div>
            <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3">Receba o Código</h3>
            <p className="text-gray-600 dark:text-gray-400">Após a compra, você recebe por e-mail seu Código de Ativação único (ex: ACADEMIA-X).</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all reveal delay-500">
            <div className="w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20"><Smartphone size={28}/></div>
            <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3">Alunos Ativam</h3>
            <p className="text-gray-600 dark:text-gray-400">Seu aluno baixa o app, insere o código e ganha acesso Premium imediato enquanto estiver matriculado.</p>
          </div>
        </div>
      </section>

      {/* 3. Preços */}
      <section id="b2b-plans" className="py-10 px-6 max-w-7xl mx-auto mb-20">
        <div className="grid md:grid-cols-4 gap-6 items-start">
          
          {/* STARTER MINI - NOVO */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-lg border-2 border-green-500 dark:border-green-500 relative flex flex-col reveal delay-50">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
              NOVO
            </div>
            <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Starter Mini</div>
            <h3 className="font-serif text-2xl text-nutri-dark dark:text-white font-bold mb-4">Pack Starter Mini</h3>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-nutri-dark dark:text-white">R$ 149,90</span>
              <span className="text-gray-500 text-sm">/mês</span>
            </div>

            {/* Destaque Custo por Aluno Enfático */}
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-2 border-dashed border-green-300 dark:border-green-500/50 mb-6 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-bl-xl -mr-2 -mt-2"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-tr-xl -ml-2 -mb-2"></div>
              <p className="text-xs uppercase font-extrabold text-green-600 dark:text-green-400 mb-1 tracking-wider">Custo por aluno</p>
              <p className="text-2xl font-black text-green-600 dark:text-green-400">R$ 14,99</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Ideal para testar</p>
            </div>

            <Button
              variant="outline"
              fullWidth
              className="mb-8 dark:text-white dark:border-gray-600 border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20"
              onClick={() => handlePurchase('https://pay.cakto.com.br/3b2kpwc_671196')}
            >
              Comprar Starter Mini
            </Button>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> 10 Licenças Premium</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Análise de Pratos + Treinos</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Treinos Personalizados</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Voz 15min/dia</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Upgrade fácil para Starter</li>
            </ul>
          </div>

          {/* STARTER */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col reveal delay-100">
            <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Starter</div>
            <h3 className="font-serif text-2xl text-nutri-dark dark:text-white font-bold mb-4">Pack Starter</h3>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-nutri-dark dark:text-white">R$ 299,90</span>
              <span className="text-gray-500 text-sm">/mês</span>
            </div>

            {/* Destaque Custo por Aluno Enfático */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-xl border-2 border-dashed border-blue-300 dark:border-blue-500/50 mb-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-bl-xl -mr-2 -mt-2"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-tr-xl -ml-2 -mb-2"></div>
                <p className="text-xs uppercase font-extrabold text-gray-500 dark:text-gray-300 mb-1 tracking-wider">Custo por aluno</p>
                <p className="text-2xl font-black text-blue-600 dark:text-blue-400">R$ 14,99</p>
            </div>

            <Button
              variant="outline"
              fullWidth
              className="mb-8 dark:text-white dark:border-gray-600"
              onClick={() => handlePurchase('https://pay.cakto.com.br/cemyp2n_668537')}
            >
              Comprar Starter
            </Button>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> 20 Licenças Premium</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Análise de Pratos + Treinos</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Treinos Personalizados</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Voz 15min/dia</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Código Único</li>
            </ul>
          </div>

          {/* GROWTH */}
          <div className="bg-nutri-dark dark:bg-gray-900 p-8 rounded-[2rem] shadow-2xl border-2 border-nutri-accent relative transform md:-translate-y-6 flex flex-col reveal delay-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nutri-accent text-nutri-dark px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md whitespace-nowrap">
              <Star size={12} fill="currentColor"/> Mais Vendido
            </div>
            <div className="text-sm font-bold text-green-200 uppercase tracking-wider mb-2">Growth</div>
            <h3 className="font-serif text-2xl text-white font-bold mb-4">Pack Growth</h3>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">R$ 649,90</span>
              <span className="text-green-200/60 text-sm">/mês</span>
            </div>

             {/* Destaque Custo por Aluno Enfático */}
             <div className="bg-nutri-accent/10 p-4 rounded-xl border-2 border-dashed border-nutri-accent mb-6 text-center relative overflow-hidden">
                <p className="text-xs uppercase font-extrabold text-nutri-accent mb-1 tracking-wider">Custo por aluno</p>
                <p className="text-3xl font-black text-white">R$ 12,99</p>
            </div>

            <Button
              variant="secondary"
              fullWidth
              className="mb-8 font-bold shadow-lg shadow-nutri-accent/20"
              onClick={() => handlePurchase('https://pay.cakto.com.br/vi6djzq_668541')}
            >
              Comprar Growth
            </Button>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex items-center gap-2"><Check size={16} className="text-nutri-accent" /> 50 Licenças Premium</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-nutri-accent" /> Análise de Pratos + Treinos</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-nutri-accent" /> Treinos Personalizados</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-nutri-accent" /> Voz 15min/dia</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-nutri-accent" /> Suporte Prioritário</li>
            </ul>
          </div>

          {/* PRO */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col reveal delay-500">
            <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Pro</div>
            <h3 className="font-serif text-2xl text-nutri-dark dark:text-white font-bold mb-4">Pack Pro</h3>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-nutri-dark dark:text-white">R$ 1.199,90</span>
              <span className="text-gray-500 text-sm">/mês</span>
            </div>

             {/* Destaque Custo por Aluno Enfático */}
             <div className="bg-white dark:bg-gray-700 p-4 rounded-xl border-2 border-dashed border-blue-300 dark:border-blue-500/50 mb-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-bl-xl -mr-2 -mt-2"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-tr-xl -ml-2 -mb-2"></div>
                <p className="text-xs uppercase font-extrabold text-gray-500 dark:text-gray-300 mb-1 tracking-wider">Custo por aluno</p>
                <p className="text-2xl font-black text-blue-600 dark:text-blue-400">R$ 11,99</p>
            </div>

            <Button
              variant="outline"
              fullWidth
              className="mb-8 dark:text-white dark:border-gray-600"
              onClick={() => handlePurchase('https://pay.cakto.com.br/3dis6ds_668546')}
            >
              Comprar Pro
            </Button>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> 100 Licenças Premium</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Análise de Pratos + Treinos</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Treinos Personalizados</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Voz 15min/dia</li>
              <li className="flex items-center gap-2 font-bold text-nutri-dark dark:text-white"><Check size={16} className="text-green-500" /> Menor custo/aluno</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};