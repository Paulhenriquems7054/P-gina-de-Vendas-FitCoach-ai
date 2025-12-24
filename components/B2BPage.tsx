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
      {/* 1. Hero Section – foco em plataforma para academias */}
      <section className="pt-32 pb-16 px-6 bg-blue-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
            <Building2 size={14} /> Plataforma para Academias
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-nutri-dark dark:text-white leading-tight mb-6">
            Transforme sua academia em uma <span className="text-blue-600 dark:text-blue-400">plataforma inteligente</span> para alunos
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Você contrata apenas a <strong>plataforma</strong> (painéis, convites, gestão de alunos). 
            Cada aluno, se quiser continuar usando a IA depois do trial, contrata o próprio plano individual direto no app.
          </p>
          <Button variant="primary" className="mx-auto mb-8" onClick={scrollToPlans}>
            Ver Planos Disponíveis <ChevronDown size={18} />
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

      {/* 2. Como Funciona para Academias */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all reveal delay-100">
            <div className="w-14 h-14 bg-nutri-dark text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-nutri-dark/20">1</div>
            <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3">Escolha o plano de plataforma</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Defina o plano de plataforma ideal de acordo com o porte da sua academia
              e o número médio de alunos que pretende acompanhar.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all reveal delay-300">
            <div className="w-14 h-14 bg-nutri-accent text-nutri-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-nutri-accent/20"><Ticket size={28}/></div>
            <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3">Configure a academia</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Após a compra, você recebe um <strong>Código Mestre</strong> e acesso aos painéis do Administrador e dos Personais
              para criar convites por link ou QR Code.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all reveal delay-500">
            <div className="w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20"><Smartphone size={28}/></div>
            <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3">Alunos ativam e escolhem o plano</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Os alunos entram via convite, fazem o <strong>trial gratuito</strong> e, se quiserem continuar usando a IA,
              contratam o próprio plano individual direto no aplicativo. A academia nunca paga pelo consumo de IA.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Planos para Academias (Plataforma) */}
      <section id="b2b-plans" className="py-10 px-6 max-w-7xl mx-auto mb-20">
        <div className="grid md:grid-cols-4 gap-6 items-start">
          
          {/* STARTER MINI - NOVO (Plataforma) */}
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

            {/* Destaque Plataforma */}
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-2 border-dashed border-green-300 dark:border-green-500/50 mb-6 text-left">
              <p className="text-xs uppercase font-extrabold text-green-600 dark:text-green-400 mb-1 tracking-wider">
                O que está incluso na plataforma
              </p>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1 mt-1">
                <li><Check size={14} className="inline text-green-600 mr-1" /> Painel do Administrador da academia</li>
                <li><Check size={14} className="inline text-green-600 mr-1" /> Cadastro de unidades e profissionais</li>
                <li><Check size={14} className="inline text-green-600 mr-1" /> Convites por link/QR Code para até 10 alunos em paralelo</li>
                <li><Check size={14} className="inline text-green-600 mr-1" /> Visão geral de quem está em trial, ativo ou inativo</li>
              </ul>
            </div>

            <Button
              variant="outline"
              fullWidth
              className="mb-8 dark:text-white dark:border-gray-600 border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20"
              onClick={() => handlePurchase('https://pay.cakto.com.br/3b2kpwc_671196')}
            >
              Assinar Agora
            </Button>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Até ~10 alunos acompanhados na plataforma</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Painel simples de acompanhamento de presença digital</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Relatórios gerais de engajamento (sem ver conversas da IA)</li>
            </ul>
          </div>

          {/* STARTER – Plataforma para academias em crescimento */}
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

            {/* Destaque Plataforma */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-xl border-2 border-dashed border-blue-300 dark:border-blue-500/50 mb-6 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-bl-xl -mr-2 -mt-2"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-tr-xl -ml-2 -mb-2"></div>
                <p className="text-xs uppercase font-extrabold text-gray-500 dark:text-gray-300 mb-1 tracking-wider">Plataforma para sua equipe</p>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1 mt-1">
                  <li><Check size={14} className="inline text-blue-600 mr-1" /> Dashboards para Administrador e Personais</li>
                  <li><Check size={14} className="inline text-blue-600 mr-1" /> Convites por link/QR para dezenas de alunos</li>
                  <li><Check size={14} className="inline text-blue-600 mr-1" /> Acompanhamento de trials, alunos ativos e inativos</li>
                </ul>
            </div>

            <Button
              variant="outline"
              fullWidth
              className="mb-8 dark:text-white dark:border-gray-600"
              onClick={() => handlePurchase('https://pay.cakto.com.br/cemyp2n_668537')}
            >
              Assinar Agora
            </Button>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Até ~20 alunos acompanhados na plataforma</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Gestão centralizada da base de alunos digitais</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Relatórios gerais de uso da plataforma</li>
            </ul>
          </div>

          {/* GROWTH – Plataforma para academias médias/grandes */}
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

             {/* Destaque Plataforma */}
             <div className="bg-nutri-accent/10 p-4 rounded-xl border-2 border-dashed border-nutri-accent mb-6 text-left relative overflow-hidden">
                <p className="text-xs uppercase font-extrabold text-nutri-accent mb-1 tracking-wider">Plataforma completa</p>
                <ul className="text-sm text-white/90 space-y-1 mt-1">
                  <li><Check size={14} className="inline text-nutri-accent mr-1" /> Painel em tempo real de engajamento por unidade</li>
                  <li><Check size={14} className="inline text-nutri-accent mr-1" /> Organização de alunos por turma, horário e professor</li>
                  <li><Check size={14} className="inline text-nutri-accent mr-1" /> Exportação de relatórios ( CSV / PDF ) para diretoria</li>
                </ul>
            </div>

            <Button
              variant="secondary"
              fullWidth
              className="mb-8 font-bold shadow-lg shadow-nutri-accent/20"
              onClick={() => handlePurchase('https://pay.cakto.com.br/vi6djzq_668541')}
            >
              Assinar Agora
            </Button>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex items-center gap-2"><Check size={16} className="text-nutri-accent" /> Até ~50 alunos acompanhados na plataforma</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-nutri-accent" /> Diferentes níveis de acesso (admin, coordenação, personal)</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-nutri-accent" /> Suporte prioritário para equipe da academia</li>
            </ul>
          </div>

          {/* PRO – Plataforma para grandes redes */}
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

             {/* Destaque Plataforma */}
             <div className="bg-white dark:bg-gray-700 p-4 rounded-xl border-2 border-dashed border-blue-300 dark:border-blue-500/50 mb-6 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-bl-xl -mr-2 -mt-2"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-tr-xl -ml-2 -mb-2"></div>
                <p className="text-xs uppercase font-extrabold text-gray-500 dark:text-gray-300 mb-1 tracking-wider">Plataforma para redes</p>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1 mt-1">
                  <li><Check size={14} className="inline text-blue-600 mr-1" /> Até ~100 alunos acompanhados na plataforma</li>
                  <li><Check size={14} className="inline text-blue-600 mr-1" /> Comparativo de engajamento entre unidades</li>
                  <li><Check size={14} className="inline text-blue-600 mr-1" /> Relatórios executivos para diretoria</li>
                </ul>
            </div>

            <Button
              variant="outline"
              fullWidth
              className="mb-8 dark:text-white dark:border-gray-600"
              onClick={() => handlePurchase('https://pay.cakto.com.br/3dis6ds_668546')}
            >
              Assinar Agora
            </Button>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Gestão de grandes volumes de alunos na plataforma</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Contas para múltiplos gestores e coordenadores</li>
              <li className="flex items-center gap-2 font-bold text-nutri-dark dark:text-white"><Check size={16} className="text-green-500" /> Suporte próximo para implementação</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. Planos Individuais de IA para Alunos */}
      <section id="student-plans" className="py-20 px-6 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900/50">
        <div className="text-center mb-12 reveal">
          <h2 className="font-serif text-3xl md:text-4xl text-nutri-dark dark:text-white font-bold mb-4">
            Planos Individuais de IA para Alunos
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Os alunos entram via convite, fazem o <strong>trial gratuito</strong> e, se quiserem continuar usando a IA,
            contratam o próprio plano individual direto no aplicativo. <strong>A academia nunca paga pelo consumo de IA.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          
          {/* Plano Mensal – Uso da IA pelo aluno */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative z-10 hover:scale-[1.02] transition-all duration-300 reveal delay-100">
            <div className="mb-6">
              <span className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">
                Para alunos que querem testar mês a mês
              </span>
              <h3 className="font-serif text-3xl text-nutri-dark dark:text-white font-bold mt-2 transition-colors duration-300">
                Plano Mensal (Uso da IA)
              </h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                  R$ 34,90
                </span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">/mês</span>
              </div>
              <div className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                Valor total por cobrança no checkout:{" "}
                <span className="font-semibold">R$ 35,89</span>{" "}
                (inclui taxa fixa de R$ 0,99 da Cakto para Pix e cartão).
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <div className="w-5 h-5 rounded-full bg-nutri-light dark:bg-gray-700 flex items-center justify-center text-nutri-dark dark:text-white shrink-0"><Check size={12} /></div>
                  Análise de fotos e treinos com IA
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <div className="w-5 h-5 rounded-full bg-nutri-light dark:bg-gray-700 flex items-center justify-center text-nutri-dark dark:text-white shrink-0"><Check size={12} /></div>
                  Chat de texto ilimitado com IA
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <div className="w-5 h-5 rounded-full bg-nutri-light dark:bg-gray-700 flex items-center justify-center text-nutri-dark dark:text-white shrink-0"><Check size={12} /></div>
                  Consultoria de voz (15 min/dia)
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <div className="w-5 h-5 rounded-full bg-nutri-light dark:bg-gray-700 flex items-center justify-center text-nutri-dark dark:text-white shrink-0"><Check size={12} /></div>
                  Cobrança individual, o aluno cancela quando quiser
              </li>
            </ul>
            
            <Button variant="outline" fullWidth onClick={() => handlePurchase('https://pay.cakto.com.br/zeygxve_668421')} className="dark:text-white dark:border-gray-500 dark:hover:bg-gray-700">Assinar Agora</Button>
          </div>

          {/* Plano Anual – Uso da IA pelo aluno */}
          <div className="bg-nutri-dark dark:bg-gray-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative z-20 transform md:scale-105 ring-4 ring-nutri-accent/50 dark:ring-nutri-accent/30 reveal delay-200 border border-transparent dark:border-gray-700">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-[2rem] flex items-center gap-1">
              MAIS VANTAJOSO
            </div>
            
            <div className="mb-6">
              <h3 className="font-serif text-3xl text-white font-bold mt-2">
                Plano Anual VIP (Uso da IA)
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
                  <span className="font-bold text-sm tracking-wide">VOCÊ ECONOMIZA R$ 200,00</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
               <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-5 h-5 rounded-full bg-nutri-accent flex items-center justify-center text-nutri-dark shrink-0"><Check size={12} /></div>
                  Tudo do plano mensal
              </li>
              <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-5 h-5 rounded-full bg-nutri-accent flex items-center justify-center text-nutri-dark shrink-0"><Check size={12} /></div>
                  Economia de R$ 200,00
              </li>
              <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-5 h-5 rounded-full bg-nutri-accent flex items-center justify-center text-nutri-dark shrink-0"><Check size={12} /></div>
                  Garantia de satisfação
              </li>
              <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-5 h-5 rounded-full bg-nutri-accent flex items-center justify-center text-nutri-dark shrink-0"><Check size={12} /></div>
                  Acesso imediato
              </li>
            </ul>
            
            <Button variant="secondary" fullWidth className="font-bold text-lg h-14" onClick={() => handlePurchase('https://pay.cakto.com.br/wvbkepi_668441')}>Assinar Agora</Button>
          </div>

        </div>
      </section>

      {/* 5. Modelo Justo – IA paga pelo aluno, não pela academia */}
      <section className="pb-20 px-6 max-w-5xl mx-auto">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-3xl p-8 text-left reveal">
          <h3 className="font-serif text-2xl font-bold text-nutri-dark dark:text-white mb-4">
            Modelo justo: a academia paga a plataforma, o aluno paga a IA
          </h3>
          <p className="text-gray-700 dark:text-gray-200 mb-4 text-sm md:text-base">
            A sua academia <strong>não assume o custo variável da Inteligência Artificial</strong>. 
            Você contrata apenas a plataforma de gestão e acompanhamento. Cada aluno, após o período de teste,
            decide se quer continuar usando a IA e contrata o próprio plano individual direto no app.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-4 text-sm">
            <div>
              <h4 className="font-semibold text-nutri-dark dark:text-white mb-2">Para sua academia</h4>
              <ul className="text-gray-700 dark:text-gray-200 space-y-1">
                <li><Check size={14} className="inline text-green-600 mr-1" /> Sem surpresas de custo com tokens ou uso da IA</li>
                <li><Check size={14} className="inline text-green-600 mr-1" /> Plataforma como diferencial competitivo e de retenção</li>
                <li><Check size={14} className="inline text-green-600 mr-1" /> Visão clara de quais alunos estão engajados</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-nutri-dark dark:text-white mb-2">Para o aluno</h4>
              <ul className="text-gray-700 dark:text-gray-200 space-y-1">
                <li><Check size={14} className="inline text-green-600 mr-1" /> Trial gratuito da IA ao entrar com o convite da academia</li>
                <li><Check size={14} className="inline text-green-600 mr-1" /> Depois do trial, ele escolhe e paga o próprio plano de IA</li>
                <li><Check size={14} className="inline text-green-600 mr-1" /> Cobrança transparente e individual, direto no app</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};