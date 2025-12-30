import React, { useState } from 'react';
import { Check, Building2, Ticket, Smartphone, Zap, ArrowRight, Star, ChevronDown, BarChart3, Users, FileText, Shield, ChevronUp, BatteryCharging, Clock, Infinity } from 'lucide-react';
import { Button } from './Button';
import { Pricing } from './Pricing';

export const B2BPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const scrollToPlans = () => {
    document.getElementById('b2b-plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePurchase = (url: string) => {
    window.location.href = url;
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "A academia paga pelo uso da IA dos alunos?",
      answer: "Não. A academia paga apenas pela plataforma de gestão (valor fixo mensal). Cada aluno, após o trial de 3 dias, decide se quer continuar usando a IA e contrata o próprio plano individual direto no app. A academia nunca paga tokens, consumo de IA ou uso individual dos alunos."
    },
    {
      question: "Como funciona o trial para os alunos?",
      answer: "Quando um aluno entra com o convite da sua academia, ele recebe automaticamente 3 dias de trial gratuito da IA. Após esse período, se quiser continuar, ele contrata o próprio plano de ativação da IA diretamente no app. Você não precisa se preocupar com isso - é uma decisão individual de cada aluno."
    },
    {
      question: "O aluno é obrigado a contratar a IA após o trial?",
      answer: "Não. O trial é totalmente gratuito e sem compromisso. Após os 3 dias, o aluno decide livremente se quer continuar usando a IA ou não. Se não quiser ativar, ele simplesmente não paga nada. A academia não tem nenhuma responsabilidade ou custo relacionado a essa decisão."
    },
    {
      question: "Posso cancelar a plataforma a qualquer momento?",
      answer: "Sim. Não há fidelidade ou multa por cancelamento. Você pode cancelar a plataforma quando quiser. Os alunos que já estão usando a IA continuarão com seus planos individuais, independentemente da sua assinatura da plataforma."
    },
    {
      question: "O que acontece se eu não renovar a plataforma?",
      answer: "Se você não renovar, perderá o acesso aos painéis de gestão e não poderá criar novos convites. Os alunos que já ativaram a IA continuarão usando normalmente, pois pagam individualmente. Para voltar a criar convites e acompanhar novos alunos, basta renovar a assinatura da plataforma."
    },
    {
      question: "Quantos alunos posso convidar?",
      answer: "Cada plano tem um limite de alunos acompanhados na plataforma (Starter Mini: ~10, Starter: ~20, Growth: ~50, Pro: ~100). Você pode criar quantos convites quiser, mas o acompanhamento na plataforma é limitado ao plano escolhido. Alunos que não estão sendo acompanhados na plataforma ainda podem usar a IA normalmente."
    },
    {
      question: "Preciso cadastrar cartão de crédito para começar?",
      answer: "Sim, para assinar a plataforma é necessário realizar o pagamento. Mas os alunos não precisam cadastrar cartão para o trial de 3 dias - isso é totalmente gratuito e sem compromisso."
    }
  ];

  return (
    <div className="animate-fade-in-up">
      {/* 1. Hero Section – Problema do Gestor + Solução da Plataforma */}
      <section className="pt-32 pb-16 px-6 bg-blue-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="max-w-5xl mx-auto text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
            <Building2 size={14} /> Plataforma de Gestão Digital para Academias
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-nutri-dark dark:text-white leading-tight mb-6">
            Transforme sua academia em uma <span className="text-blue-600 dark:text-blue-400">plataforma inteligente</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
            Plataforma de gestão digital para academias. Seus alunos testam a IA. <strong>Só paga quem decide usar.</strong>
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-2xl p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-green-800 dark:text-green-200 font-semibold">
              ✅ <strong>A academia nunca paga pelo uso da IA</strong>
            </p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-2">
              Você contrata apenas a plataforma (valor fixo mensal). Cada aluno decide se quer ativar a IA após o trial.
            </p>
          </div>
          <Button variant="primary" className="mx-auto mb-8 text-lg py-4 px-8" onClick={scrollToPlans}>
            Ver Planos da Plataforma <ChevronDown size={20} />
          </Button>

          {/* Vídeo/Demo */}
          <div className="mt-12 reveal delay-100">
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-black">
              <div className="aspect-video w-full">
                <video
                  src="/FITCOACH.IA.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  Seu navegador não suporta a reprodução de vídeos.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Como Funciona em 3 Passos */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-white dark:bg-gray-900">
        <div className="text-center mb-12 reveal">
          <h2 className="font-serif text-3xl md:text-4xl text-nutri-dark dark:text-white font-bold mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Três passos simples para transformar sua academia em uma plataforma digital
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-blue-100 dark:border-gray-700 hover:shadow-md transition-all reveal delay-100">
            <div className="w-14 h-14 bg-nutri-dark text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-nutri-dark/20">1</div>
            <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3">Assine a Plataforma</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Escolha o plano de plataforma ideal para o porte da sua academia. 
              Você recebe acesso aos painéis de gestão e ferramentas de convite.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-blue-100 dark:border-gray-700 hover:shadow-md transition-all reveal delay-300">
            <div className="w-14 h-14 bg-nutri-accent text-nutri-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-nutri-accent/20"><Ticket size={28}/></div>
            <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3">Crie Convites</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Use os painéis para gerar convites por link ou QR Code. 
              Compartilhe com seus alunos e acompanhe quem está usando a plataforma.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-blue-100 dark:border-gray-700 hover:shadow-md transition-all transition-all reveal delay-500">
            <div className="w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20"><Smartphone size={28}/></div>
            <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3">Alunos Ativam a IA</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Os alunos entram via convite, testam a IA por 3 dias grátis e, 
              se quiserem continuar, ativam o próprio plano. <strong>Você não paga nada disso.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 3. Planos de Plataforma */}
      <section id="b2b-plans" className="py-10 px-6 max-w-7xl mx-auto mb-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="text-center mb-12 reveal">
          <h2 className="font-serif text-3xl md:text-4xl text-nutri-dark dark:text-white font-bold mb-4">
            Planos de Plataforma
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Escolha o plano ideal para o porte da sua academia. Valor fixo mensal, sem surpresas.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 items-start">
          
          {/* STARTER MINI */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-lg border-2 border-green-500 dark:border-green-500 relative flex flex-col reveal delay-50">
            <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Starter Mini</div>
            <h3 className="font-serif text-2xl text-nutri-dark dark:text-white font-bold mb-1">Plataforma para pequenas academias</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              Ideal para academias iniciando com acompanhamento digital de alunos.
            </p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-nutri-dark dark:text-white">R$ 149,90</span>
              <span className="text-gray-500 text-sm">/mês</span>
              <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                Valor total por cobrança no checkout: <span className="font-semibold">R$ 150,89</span> (inclui taxa fixa de R$ 0,99 da Cakto para Pix e cartão).
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-2 border-dashed border-green-300 dark:border-green-500/50 mb-6 text-left">
              <p className="text-xs uppercase font-extrabold text-green-600 dark:text-green-400 mb-1 tracking-wider">
                O que está incluso na plataforma
              </p>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1 mt-1">
                <li><Check size={14} className="inline text-green-600 mr-1" /> Painel do Administrador</li>
                <li><Check size={14} className="inline text-green-600 mr-1" /> Cadastro de unidades e profissionais</li>
                <li><Check size={14} className="inline text-green-600 mr-1" /> Convites por link/QR Code</li>
                <li><Check size={14} className="inline text-green-600 mr-1" /> Visão geral de alunos</li>
              </ul>
            </div>

            <Button
              variant="outline"
              fullWidth
              className="mb-8 dark:text-white dark:border-gray-600 border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20"
              onClick={() => handlePurchase('https://pay.cakto.com.br/3b2kpwc_671196')}
            >
              Assinar Plataforma
            </Button>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Até ~10 alunos acompanhados na plataforma</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Painel de acompanhamento</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Relatórios gerais de engajamento</li>
            </ul>
          </div>

          {/* STARTER */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col reveal delay-100">
            <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Starter</div>
            <h3 className="font-serif text-2xl text-nutri-dark dark:text-white font-bold mb-1">Plataforma Starter</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Para academias com base moderada de alunos ativos.</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-nutri-dark dark:text-white">R$ 299,90</span>
              <span className="text-gray-500 text-sm">/mês</span>
              <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                Valor total por cobrança no checkout: <span className="font-semibold">R$ 300,89</span> (inclui taxa fixa de R$ 0,99 da Cakto para Pix e cartão).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 rounded-xl border-2 border-dashed border-blue-300 dark:border-blue-500/50 mb-6 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-bl-xl -mr-2 -mt-2"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-tr-xl -ml-2 -mb-2"></div>
                <p className="text-xs uppercase font-extrabold text-gray-500 dark:text-gray-300 mb-1 tracking-wider">Plataforma para sua equipe</p>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1 mt-1">
                  <li><Check size={14} className="inline text-blue-600 mr-1" /> Dashboards para Administrador e Personais</li>
                  <li><Check size={14} className="inline text-blue-600 mr-1" /> Convites ilimitados</li>
                  <li><Check size={14} className="inline text-blue-600 mr-1" /> Acompanhamento de trials e alunos ativos</li>
                </ul>
            </div>

            <Button
              variant="outline"
              fullWidth
              className="mb-8 dark:text-white dark:border-gray-600"
              onClick={() => handlePurchase('https://pay.cakto.com.br/cemyp2n_668537')}
            >
              Assinar Plataforma
            </Button>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Até ~20 alunos acompanhados na plataforma</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Gestão centralizada</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Relatórios de uso da plataforma</li>
            </ul>
          </div>

          {/* GROWTH */}
          <div className="bg-nutri-dark dark:bg-gray-900 p-8 rounded-[2rem] shadow-2xl border-2 border-nutri-accent relative transform md:-translate-y-6 flex flex-col reveal delay-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nutri-accent text-nutri-dark px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md whitespace-nowrap animate-pulse">
              MAIS VENDIDO
            </div>
            <div className="text-sm font-bold text-green-200 uppercase tracking-wider mb-2">Growth</div>
            <h3 className="font-serif text-2xl text-white font-bold mb-1">Plataforma Growth</h3>
            <p className="text-xs text-green-100/80 mb-4">Para academias com grande base de alunos e múltiplos personais.</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">R$ 649,90</span>
              <span className="text-green-200/60 text-sm">/mês</span>
              <p className="mt-1 text-[11px] text-green-200/80">
                Valor total por cobrança no checkout: <span className="font-semibold">R$ 650,89</span> (inclui taxa fixa de R$ 0,99 da Cakto para Pix e cartão).
              </p>
            </div>

             <div className="bg-nutri-accent/10 p-4 rounded-xl border-2 border-dashed border-nutri-accent mb-6 text-left relative overflow-hidden">
                <p className="text-xs uppercase font-extrabold text-nutri-accent mb-1 tracking-wider">Plataforma completa</p>
                <ul className="text-sm text-white/90 space-y-1 mt-1">
                  <li><Check size={14} className="inline text-nutri-accent mr-1" /> Painel em tempo real por unidade</li>
                  <li><Check size={14} className="inline text-nutri-accent mr-1" /> Organização por turma e professor</li>
                  <li><Check size={14} className="inline text-nutri-accent mr-1" /> Exportação de relatórios (CSV/PDF)</li>
                </ul>
            </div>

            <Button
              variant="secondary"
              fullWidth
              className="mb-8 font-bold shadow-lg shadow-nutri-accent/20"
              onClick={() => handlePurchase('https://pay.cakto.com.br/vi6djzq_668541')}
            >
              Assinar Plataforma
            </Button>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex items-center gap-2"><Check size={16} className="text-nutri-accent" /> Até ~50 alunos acompanhados na plataforma</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-nutri-accent" /> Níveis de acesso (admin, coordenação, personal)</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-nutri-accent" /> Suporte prioritário</li>
            </ul>
          </div>

          {/* PRO */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col reveal delay-500">
            <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Pro</div>
            <h3 className="font-serif text-2xl text-nutri-dark dark:text-white font-bold mb-1">Plataforma Pro</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Para grandes academias e redes com alto volume de alunos.</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-nutri-dark dark:text-white">R$ 1.199,90</span>
              <span className="text-gray-500 text-sm">/mês</span>
              <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                Valor total por cobrança no checkout: <span className="font-semibold">R$ 1.200,89</span> (inclui taxa fixa de R$ 0,99 da Cakto para Pix e cartão).
              </p>
            </div>

             <div className="bg-white dark:bg-gray-700 p-4 rounded-xl border-2 border-dashed border-blue-300 dark:border-blue-500/50 mb-6 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-bl-xl -mr-2 -mt-2"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-tr-xl -ml-2 -mb-2"></div>
                <p className="text-xs uppercase font-extrabold text-gray-500 dark:text-gray-300 mb-1 tracking-wider">Plataforma para redes</p>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1 mt-1">
                  <li><Check size={14} className="inline text-blue-600 mr-1" /> Gestão multi-unidade</li>
                  <li><Check size={14} className="inline text-blue-600 mr-1" /> Comparativo entre unidades</li>
                  <li><Check size={14} className="inline text-blue-600 mr-1" /> Relatórios executivos</li>
                </ul>
            </div>

            <Button
              variant="outline"
              fullWidth
              className="mb-8 dark:text-white dark:border-gray-600"
              onClick={() => handlePurchase('https://pay.cakto.com.br/3dis6ds_668546')}
            >
              Assinar Plataforma
            </Button>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Até ~100 alunos acompanhados na plataforma</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Múltiplos gestores e coordenadores</li>
              <li className="flex items-center gap-2 font-bold text-nutri-dark dark:text-white"><Check size={16} className="text-green-500" /> Suporte próximo para implementação</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. Benefícios da Plataforma */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-white dark:bg-gray-900">
        <div className="text-center mb-12 reveal">
          <h2 className="font-serif text-3xl md:text-4xl text-nutri-dark dark:text-white font-bold mb-4">
            Benefícios da Plataforma
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ferramentas de gestão que transformam sua academia em uma plataforma digital
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-3xl shadow-lg border-b-4 border-blue-500 dark:border-blue-600 hover:-translate-y-1 transition-transform duration-300 reveal delay-100">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 size={28} />
            </div>
            <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3">Dashboards Inteligentes</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Acompanhe em tempo real quais alunos estão engajados, em trial ou ativos. 
              Visão clara do engajamento digital da sua base.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-gray-800 p-8 rounded-3xl shadow-lg border-b-4 border-green-500 dark:border-green-600 hover:-translate-y-1 transition-transform duration-300 reveal delay-300">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6">
              <Users size={28} />
            </div>
            <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3">Gestão de Alunos</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Organize seus alunos por unidade, turma, horário e professor. 
              Controle total sobre quem está usando a plataforma.
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-gray-800 p-8 rounded-3xl shadow-lg border-b-4 border-orange-500 dark:border-orange-600 hover:-translate-y-1 transition-transform duration-300 reveal delay-500">
            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6">
              <FileText size={28} />
            </div>
            <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3">Relatórios e Exportação</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Gere relatórios de engajamento, exporte dados em CSV ou PDF. 
              Informações estratégicas para tomar decisões baseadas em dados.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Garantia: Academia não paga IA */}
      <section className="py-20 px-6 max-w-5xl mx-auto bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-green-300 dark:border-green-700 text-center reveal">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield size={32} />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-nutri-dark dark:text-white font-bold mb-4">
            A academia nunca paga pelo uso da IA
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Você contrata apenas a <strong>plataforma de gestão</strong> (valor fixo mensal). 
            Cada aluno, após o trial de 3 dias, decide se quer continuar usando a IA e contrata o próprio plano individual.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl">
              <h3 className="font-semibold text-nutri-dark dark:text-white mb-3">✅ Para sua academia</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                  <span>Valor fixo mensal, sem surpresas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                  <span>Não paga tokens, consumo ou uso de IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                  <span>Plataforma como diferencial competitivo</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl">
              <h3 className="font-semibold text-nutri-dark dark:text-white mb-3">📱 Para os alunos</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-blue-600 mt-0.5 shrink-0" />
                  <span>3 dias de trial gratuito da IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-blue-600 mt-0.5 shrink-0" />
                  <span>Decisão individual de ativar ou não</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-blue-600 mt-0.5 shrink-0" />
                  <span>Cobrança transparente, direto no app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Anti-Objeção */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="font-serif text-3xl md:text-4xl text-nutri-dark dark:text-white font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Tire suas dúvidas sobre a plataforma e o modelo B2B2C
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-semibold text-nutri-dark dark:text-white pr-4">{faq.question}</span>
                {openFaqIndex === index ? (
                  <ChevronUp size={20} className="text-gray-400 shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400 shrink-0" />
                )}
              </button>
              {openFaqIndex === index && (
                <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 text-sm md:text-base border-t border-gray-200 dark:border-gray-700 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Planos Individuais de IA para Alunos */}
      <section id="student-plans" className="py-20 bg-nutri-bg dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center mb-12 reveal">
          <h2 className="font-serif text-3xl md:text-4xl text-nutri-dark dark:text-white font-bold mb-4">
            Planos Individuais de IA para Alunos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Após o trial de 3 dias, os alunos podem ativar a IA individualmente. A academia não paga por isso.
          </p>
        </div>
        <Pricing />
      </section>

      {/* 8. Recargas de Voz (Opcional) */}
      <section id="recharge-plans" className="py-20 px-6 max-w-7xl mx-auto bg-nutri-bg dark:bg-gray-900">
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            <BatteryCharging size={14} /> Recarga de Voz (Opcional)
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-nutri-dark dark:text-white font-bold mb-4">
            Precisa de mais tempo de conversa?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Seu limite diário de voz acabou, mas você pode continuar com nossos pacotes de recarga instantânea.
          </p>
          <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-2">
            ✨ Consumo opcional. Sem pegadinha.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Ajuda Rápida */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md border border-gray-100 dark:border-gray-700 hover:border-orange-300 transition-all group reveal delay-100 relative">
            <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
              URGÊNCIA
            </div>
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-nutri-dark dark:text-white mb-1">Ajuda Rápida</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-800 dark:text-white">R$ 5,00</span>
              <div className="text-xs text-gray-400">Pagamento Único</div>
              <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                Valor total no checkout: <span className="font-semibold">R$ 5,99</span> (inclui taxa fixa de R$ 0,99 da Cakto para Pix e cartão).
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl mb-6 text-sm">
              <p className="font-bold text-nutri-dark dark:text-white mb-1">+20 Minutos de Voz</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Válido por 24h. Ideal para terminar sua conversa agora.</p>
            </div>
            <Button 
              fullWidth 
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-orange-200" 
              onClick={() => handlePurchase('https://pay.cakto.com.br/ihfy8cz_668443')}
            >
              Comprar
            </Button>
          </div>

          {/* Minutos de Reserva */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl border-2 border-nutri-dark dark:border-green-500 relative transform md:-translate-y-2 reveal delay-300">
            <div className="absolute top-0 right-0 bg-nutri-dark dark:bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl flex items-center gap-1">
              MELHOR ESCOLHA
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-nutri-dark dark:text-white mb-1">Minutos de Reserva</h3>
            <p className="text-xs text-green-600 dark:text-green-400 font-bold uppercase mb-4">Custo-Benefício</p>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-800 dark:text-white">R$ 12,90</span>
              <div className="text-xs text-gray-400">Pagamento Único</div>
              <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                Valor total no checkout: <span className="font-semibold">R$ 13,89</span> (inclui taxa fixa de R$ 0,99 da Cakto para Pix e cartão).
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl mb-6 text-sm">
              <p className="font-bold text-nutri-dark dark:text-white mb-1">+100 Minutos de Voz</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Não expira. Fica na conta e usa quando o diário acabar.</p>
            </div>
            <Button 
              variant="primary" 
              fullWidth 
              onClick={() => handlePurchase('https://pay.cakto.com.br/hhxugxb_668446')}
            >
              Comprar
            </Button>
          </div>

          {/* Conversa Ilimitada */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md border border-gray-100 dark:border-gray-700 hover:border-purple-300 transition-all group reveal delay-500 relative">
            <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
              VIP
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
              <Infinity size={24} />
            </div>
            <h3 className="text-xl font-bold text-nutri-dark dark:text-white mb-1">Conversa Ilimitada</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-800 dark:text-white">R$ 19,90</span>
              <div className="text-xs text-gray-400">Pagamento Único</div>
              <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                Valor total no checkout: <span className="font-semibold">R$ 20,89</span> (inclui taxa fixa de R$ 0,99 da Cakto para Pix e cartão).
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl mb-6 text-sm">
              <p className="font-bold text-nutri-dark dark:text-white mb-1">Voz Ilimitada por 7 dias</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Use à vontade durante uma semana completa.</p>
            </div>
            <Button 
              fullWidth 
              className="bg-purple-500 hover:bg-purple-600 text-white shadow-purple-200" 
              onClick={() => handlePurchase('https://pay.cakto.com.br/7days_668449')}
            >
              Comprar
            </Button>
          </div>
        </div>
      </section>

      {/* 9. CTA Final */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-blue-600 to-nutri-dark dark:from-blue-700 dark:to-gray-900 rounded-3xl p-12 text-white reveal">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar sua academia?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Comece com a plataforma hoje e ofereça tecnologia de ponta aos seus alunos, 
            sem se preocupar com custos variáveis de IA.
          </p>
          <Button variant="secondary" className="text-lg py-4 px-8" onClick={scrollToPlans}>
            Ver Planos da Plataforma <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};
