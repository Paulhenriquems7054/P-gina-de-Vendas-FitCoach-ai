import React from 'react';
import { Dumbbell, Target, ShieldCheck, Brain, Camera, ChevronDown, Check, Trophy, Users } from 'lucide-react';
import { Button } from './Button';

export const PersonalTrainerPage: React.FC = () => {
  const scrollToPlans = () => {
    document.getElementById('plans-personal')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePurchase = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="animate-fade-in-up">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-orange-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
            <Dumbbell size={14} /> Especial para Personais
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-nutri-dark dark:text-white leading-tight mb-6">
            O seu treino é excelente. <br className="hidden md:block"/> Mas e a dieta do seu aluno?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pare de perder alunos por falta de resultado. Entregue Nutricionista + Personal Trainer IA junto com sua consultoria e garanta a transformação completa do seu cliente.
          </p>
          <Button variant="primary" className="mx-auto bg-orange-600 hover:bg-orange-700 shadow-orange-500/20" onClick={scrollToPlans}>
            VER PLANOS PARA PERSONAIS <ChevronDown size={18} />
          </Button>
        </div>
      </section>

      {/* 2. A Dica de Ouro (Argumento) */}
      <section className="py-20 px-6 bg-nutri-dark dark:bg-black text-white relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

         <div className="max-w-4xl mx-auto relative z-10 text-center md:text-left md:flex items-center gap-12 reveal">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-orange-500/30">
                    <Trophy size={64} className="text-orange-400" />
                </div>
            </div>
            <div className="md:w-2/3">
                <h2 className="font-serif text-3xl font-bold mb-4 text-orange-100">Por que os maiores Treinadores usam?</h2>
                <div className="w-20 h-1 bg-orange-500 mb-6 mx-auto md:mx-0"></div>
                <p className="text-lg text-gray-200 leading-relaxed">
                    "A conta é simples: O aluno que treina mas come errado, não vê mudança no espelho. E quem ele culpa? <span className="text-orange-400 font-bold">O treino.</span> Ao oferecer o Fitcoach.ia, você fecha o ciclo completo: Treinos personalizados + Alimentação inteligente. O aluno tem resultado rápido, sua autoridade aumenta e um aluno com resultado renova o contrato por anos. O custo do app é irrelevante perto do valor de um aluno fidelizado."
                </p>
            </div>
         </div>
      </section>

      {/* 3. Benefícios */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border-b-4 border-orange-500 dark:border-orange-600 hover:-translate-y-1 transition-transform duration-300 reveal delay-100">
            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
            </div>
            <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3">Blindagem de Alunos</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Diferencie-se dos personais que só mandam planilha de treino. Entregue uma experiência 360º que justifica o valor da sua hora/aula.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border-b-4 border-nutri-dark dark:border-green-600 hover:-translate-y-1 transition-transform duration-300 reveal delay-300">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-nutri-dark dark:text-green-400 rounded-2xl flex items-center justify-center mb-6">
                <Camera size={28} />
            </div>
            <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3">Visão Computacional</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Seu aluno fotografa o prato e a IA calcula os macros. Você sabe se ele está batendo a proteína sem precisar ficar perguntando todo dia.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border-b-4 border-blue-500 dark:border-blue-600 hover:-translate-y-1 transition-transform duration-300 reveal delay-500">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <Brain size={28} />
            </div>
            <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3">Autonomia Total</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                A IA tira as dúvidas chatas sobre alimentação ("posso comer pão?"), deixando você livre para focar 100% na periodização do treino.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Planos e Preços – Plataforma para Personal Trainers */}
      <section id="plans-personal" className="py-10 px-6 max-w-5xl mx-auto mb-20">
        <div className="text-center mb-12 reveal">
            <h2 className="font-serif text-3xl font-bold text-nutri-dark dark:text-white">Planos de Plataforma para Personal Trainers</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Você contrata a plataforma para organizar seus alunos. Cada aluno, se quiser continuar usando a IA após o trial,
              contrata o próprio plano individual direto no app.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* CARD 1: TEAM 5 – Plataforma para até ~5 alunos ativos */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative hover:border-orange-300 transition-colors reveal delay-200">
            <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Iniciante</div>
            <h3 className="font-serif text-3xl text-nutri-dark dark:text-white font-bold mb-2">Team 5</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
              Para quem está começando na consultoria online e quer estruturar o acompanhamento de até ~5 alunos.
            </p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-nutri-dark dark:text-white">R$ 99,90</span>
              <span className="text-gray-500 text-sm">/mês</span>
              <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                Valor total por cobrança no checkout: <span className="font-semibold">R$ 100,89</span> (inclui taxa fixa de R$ 0,99 da Cakto para Pix e cartão).
              </p>
            </div>

            {/* Destaque Plataforma */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 mb-6 text-left">
                <p className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 mb-1 tracking-wider">
                  O que está na plataforma
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1 mt-1">
                  <li><Check size={12} className="inline text-green-600 mr-1" /> Painel para organizar até ~5 alunos ativos</li>
                  <li><Check size={12} className="inline text-green-600 mr-1" /> Histórico de treinos e acompanhamento básico</li>
                  <li><Check size={12} className="inline text-green-600 mr-1" /> Convites por link/QR Code enviados pelo WhatsApp</li>
                </ul>
            </div>

            <Button variant="outline" fullWidth className="mb-8 dark:text-white dark:border-gray-600" onClick={() => handlePurchase('https://pay.cakto.com.br/3dgheuc_666289')}>
              Assinar Agora
            </Button>

            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-3"><div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full"><Check size={12} className="text-green-600" /></div> Até ~5 alunos acompanhados na plataforma</li>
              <li className="flex items-center gap-3"><div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full"><Check size={12} className="text-green-600" /></div> Relatórios básicos de engajamento</li>
            </ul>
          </div>

          {/* CARD 2: TEAM 15 – Plataforma para até ~15 alunos ativos */}
          <div className="bg-nutri-dark dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-2xl border-2 border-orange-500 relative transform md:scale-105 reveal delay-400">
             <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-xs font-bold shadow-md animate-pulse">
              MAIS VANTAJOSO
            </div>

            <div className="text-sm font-bold text-orange-200 uppercase tracking-wider mb-2">Elite</div>
            <h3 className="font-serif text-3xl text-white font-bold mb-2">Team 15</h3>
            <p className="text-xs text-orange-100/80 mb-6">
              Para personal trainers com carteira cheia que precisam organizar até ~15 alunos online.
            </p>
            
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">R$ 249,90</span>
              <span className="text-orange-200/60 text-sm">/mês</span>
              <p className="mt-1 text-[11px] text-orange-100/80">
                Valor total por cobrança no checkout: <span className="font-semibold">R$ 250,89</span> (inclui taxa fixa de R$ 0,99 da Cakto para Pix e cartão).
              </p>
            </div>

            {/* Destaque Plataforma */}
            <div className="bg-orange-500/10 p-3 rounded-xl border-2 border-dashed border-orange-500 mb-6 text-left">
                <p className="text-[10px] uppercase font-bold text-orange-400 mb-1 tracking-wider">O que está na plataforma</p>
                <ul className="text-sm text-white space-y-1 mt-1">
                  <li><Check size={12} className="inline text-white mr-1" /> Organização de até ~15 alunos ativos na plataforma</li>
                  <li><Check size={12} className="inline text-white mr-1" /> Visão clara de quem está em trial, ativo ou parado</li>
                  <li><Check size={12} className="inline text-white mr-1" /> Ferramentas para renovar planos e aumentar retenção</li>
                </ul>
            </div>

            <Button variant="secondary" fullWidth className="mb-8 font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-900/20 border-none" onClick={() => handlePurchase('https://pay.cakto.com.br/3etp85e_666303')}>
              Assinar Agora
            </Button>

            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-center gap-3"><div className="bg-orange-500 p-1 rounded-full"><Check size={12} className="text-white" /></div> Até ~15 alunos acompanhados na plataforma</li>
              <li className="flex items-center gap-3"><div className="bg-orange-500 p-1 rounded-full"><Check size={12} className="text-white" /></div> Relatórios para mostrar resultados na renovação</li>
              <li className="flex items-center gap-3 font-bold text-orange-300"><div className="bg-orange-500 p-1 rounded-full"><Users size={12} className="text-white" /></div> Foco em aumentar ticket e retenção</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-20 px-6 max-w-3xl mx-auto border-t border-gray-100 dark:border-gray-800">
         <h2 className="font-serif text-2xl font-bold text-center text-nutri-dark dark:text-white mb-12 reveal">Perguntas Frequentes</h2>
         
         <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm reveal delay-100">
               <h3 className="font-bold text-lg text-nutri-dark dark:text-white mb-2">Eu preciso ser nutricionista para usar?</h3>
               <p className="text-gray-600 dark:text-gray-300">Não! O Fitcoach.ia é uma ferramenta educativa independente. Você pode usar para complementar seu trabalho: a IA cria treinos personalizados e cuida da orientação alimentar do aluno, ajudando ele a fazer melhores escolhas diárias e manter a consistência nos treinos.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm reveal delay-200">
               <h3 className="font-bold text-lg text-nutri-dark dark:text-white mb-2">Como meu aluno acessa?</h3>
               <p className="text-gray-600 dark:text-gray-300">Após assinar, você recebe um "Código de Equipe". Basta enviar esse código no WhatsApp do aluno e ele ativa o Premium na hora, sem precisar pagar nada extra.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm reveal delay-300">
               <h3 className="font-bold text-lg text-nutri-dark dark:text-white mb-2">Posso cobrar mais caro na minha consultoria por isso?</h3>
               <p className="text-gray-600 dark:text-gray-300">Com certeza. Você está entregando um serviço Premium de tecnologia e acompanhamento 24h. Seus alunos valorizarão esse diferencial e você pode justificar um ticket mais alto.</p>
            </div>
         </div>
      </section>
    </div>
  );
};