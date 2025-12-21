import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Camera, Mic, ChefHat, Smartphone, Download, UserCheck, ShieldCheck, ChevronDown, ChevronUp, Home, AlertCircle, Sparkles, CreditCard, CircleHelp, Moon, Sun, Building2, BatteryCharging, ArrowRight, TrendingUp, Dumbbell } from 'lucide-react';
import { LiveDemo } from './components/LiveDemo';
import { Button } from './components/Button';
import { B2BPage } from './components/B2BPage';
import { RechargePage } from './components/RechargePage';
import { PersonalTrainerPage } from './components/PersonalTrainerPage';
import { Logo } from './components/Logo';
import { Pricing } from './components/Pricing';

// Interface atualizada para receber navigateTo
interface HomeContentProps {
  scrollToSection: (id: string) => void;
  faqs: any[];
  openFaqIndex: number | null;
  toggleFaq: (i: number) => void;
  navigateTo: (page: 'home' | 'b2b' | 'recharge' | 'personal') => void;
}

// Componente Interno com o conteúdo da Landing Page Original
const HomeContent: React.FC<HomeContentProps> = ({ scrollToSection, faqs, openFaqIndex, toggleFaq, navigateTo }) => (
  <div className="animate-fade-in">
    {/* A) HERO SECTION - Acima da dobra */}
      <section id="top" className="pt-32 pb-20 px-6 relative overflow-hidden bg-nutri-bg dark:bg-gray-900 transition-colors duration-300">
        {/* Background Blobs */}
        <div className="absolute top-20 -left-40 w-96 h-96 bg-green-200/30 dark:bg-green-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-pulse transition-colors duration-500"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-pulse delay-1000 transition-colors duration-500"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            {/* Headline forte */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-nutri-dark dark:text-white leading-tight mb-6 transition-colors duration-300">
              Teste o <span className="text-nutri-accent">FitCoach.ai</span> por <span className="text-nutri-accent">7 dias grátis</span>
            </h1>
            
            {/* Subheadline */}
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-medium transition-colors duration-300">
              Acesso Premium completo. Sem cartão de crédito.
            </h2>

            {/* Aviso visível sobre bloqueio */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-400 dark:border-yellow-600 rounded-2xl p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-sm md:text-base text-yellow-800 dark:text-yellow-200 font-medium">
                ⚠️ <strong>Importante:</strong> Após o período de teste, é necessário assinar um plano para continuar usando. Sem assinatura ativa, o acesso é bloqueado.
              </p>
            </div>

            {/* CTA primário */}
            <div className="mb-8">
              <Button className="shadow-green-900/20 py-5 px-8 text-lg font-bold" onClick={() => window.location.href = 'https://fit-coach-ia.vercel.app/'}>
                Começar teste grátis agora
              </Button>
            </div>

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
        </div>
      </section>

      {/* B) PROVA DE VALOR - Curta e direta */}
      <section id="solution" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="font-serif text-3xl md:text-4xl text-nutri-dark dark:text-white font-bold mb-6 transition-colors duration-300">
              O que você ganha no teste Premium
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Dumbbell className="w-6 h-6" />, text: "Treinos personalizados com IA" },
              { icon: <Camera className="w-6 h-6" />, text: "Análise inteligente de alimentação" },
              { icon: <Mic className="w-6 h-6" />, text: "Conversa por voz com IA" },
              { icon: <TrendingUp className="w-6 h-6" />, text: "Acompanhamento real de progresso" },
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-nutri-bg dark:bg-gray-700 rounded-xl reveal delay-100">
                <div className="w-12 h-12 bg-nutri-accent rounded-full flex items-center justify-center text-nutri-dark shrink-0">
                  {benefit.icon}
                </div>
                <p className="text-lg font-medium text-nutri-dark dark:text-white">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="shadow-green-900/20" onClick={() => window.location.href = 'https://fit-coach-ia.vercel.app/'}>
              Começar teste grátis
            </Button>
          </div>
        </div>
      </section>

      {/* C) COMO FUNCIONA O TESTE */}
      <section id="how-it-works" className="py-16 bg-nutri-bg dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="font-serif text-3xl md:text-4xl text-nutri-dark dark:text-white font-bold mb-4 transition-colors duration-300">
              Como funciona o teste
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                step: "1", 
                title: "Crie sua conta", 
                text: "Cadastre-se em segundos. Não pedimos cartão de crédito.",
                icon: <UserCheck size={24} />
              },
              { 
                step: "2", 
                title: "Use tudo por 7 dias", 
                text: "Acesso Premium completo durante o período de teste.",
                icon: <ShieldCheck size={24} />
              },
              { 
                step: "3", 
                title: "Escolha um plano para continuar", 
                text: "Após o trial, é necessário assinar um plano. Sem assinatura ativa, o acesso é bloqueado.",
                icon: <CreditCard size={24} />
              },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center reveal delay-200">
                <div className="w-16 h-16 bg-nutri-dark rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-nutri-accent mb-2">PASSO {item.step}</div>
                <h3 className="font-bold text-xl text-nutri-dark dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-600 rounded-xl p-4 text-center">
            <p className="text-sm font-medium text-red-800 dark:text-red-200">
              ⚠️ <strong>Lembrete:</strong> Sem assinatura ativa, o acesso é bloqueado após o trial.
            </p>
          </div>
        </div>
      </section>

      {/* D) PARA QUEM É - Segmentação clara */}
      <section id="for-who" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="font-serif text-3xl md:text-4xl text-nutri-dark dark:text-white font-bold mb-4 transition-colors duration-300">
              Para quem é o FitCoach.ai
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Usuários Individuais */}
            <div className="bg-nutri-bg dark:bg-gray-700 p-8 rounded-2xl border-2 border-green-200 dark:border-green-600 reveal delay-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">
                  👤
                </div>
                <h3 className="font-serif text-2xl font-bold text-nutri-dark dark:text-white">
                  Para usuários individuais
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Ideal para quem treina sozinho e quer resultados reais.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <span className="text-green-500">✓</span>
                  <span>Trial: <strong>7 dias</strong> de acesso Premium completo</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <span className="text-green-500">✓</span>
                  <span>Sem cartão de crédito no teste</span>
                </li>
                <li className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <span>⚠️</span>
                  <span><strong>Após o trial:</strong> Acesso bloqueado sem plano ativo</span>
                </li>
              </ul>
              <Button className="w-full" onClick={() => scrollToSection('pricing')}>
                Ver planos individuais
              </Button>
            </div>

            {/* Academias */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border-2 border-blue-300 dark:border-blue-600 reveal delay-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                  🏋️
                </div>
                <h3 className="font-serif text-2xl font-bold text-nutri-dark dark:text-white">
                  Para academias
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Ideal para gestores e personal trainers que querem aumentar retenção.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <span className="text-blue-500">✓</span>
                  <span>Trial: <strong>14 dias</strong> de acesso Premium completo</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <span className="text-blue-500">✓</span>
                  <span>Limite de alunos durante o trial</span>
                </li>
                <li className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <span>⚠️</span>
                  <span><strong>Após o trial:</strong> Alunos perdem acesso. Gestor só acessa painel e pagamento</span>
                </li>
              </ul>
              <Button 
                variant="primary" 
                className="w-full bg-blue-600 hover:bg-blue-700" 
                onClick={() => navigateTo('b2b')}
              >
                Ver planos para academias
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* E) PLANOS E PREÇOS */}
      <section id="pricing" className="py-20 bg-nutri-bg dark:bg-gray-900 transition-colors duration-300">
        <Pricing />
      </section>

      {/* F) OBJEÇÕES - FAQ Curto */}
      <section id="faq" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6">
           <h2 className="font-serif text-3xl text-nutri-dark dark:text-white font-bold text-center mb-8 reveal transition-colors duration-300">
             Dúvidas Frequentes
           </h2>
           <div className="space-y-4 reveal delay-100">
             {faqs.map((faq, index) => (
               <div key={index} className="bg-nutri-bg dark:bg-gray-700 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-600 transition-colors duration-300">
                 <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-white/5 dark:hover:bg-gray-600/50 transition-colors"
                  onClick={() => toggleFaq(index)}
                 >
                   <span className="font-medium text-nutri-dark dark:text-white transition-colors duration-300">{faq.question}</span>
                   {openFaqIndex === index ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                 </button>
                 {openFaqIndex === index && (
                   <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 text-sm animate-fade-in transition-colors duration-300">
                     {faq.answer}
                   </div>
                 )}
               </div>
             ))}
           </div>

           {/* CTA Final */}
           <div className="text-center mt-12">
             <Button className="shadow-green-900/20 py-5 px-8 text-lg font-bold" onClick={() => window.location.href = 'https://fit-coach-ia.vercel.app/'}>
               Começar teste grátis agora
             </Button>
           </div>
        </div>
      </section>
  </div>
);

// Main APP Component with Router Logic
const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // States for Logo Reveal Animation
  const [isLogoAnimating, setIsLogoAnimating] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const hasAnimatedOnLoad = useRef(false);

  // Simple State-based Router: 'home' | 'b2b' | 'recharge' | 'personal'
  // Foco de vendas principal: Home como página inicial para mostrar todos os botões
  const [activePage, setActivePage] = useState<'home' | 'b2b' | 'recharge' | 'personal'>('home');

  // Function to trigger the magic logo reveal
  const triggerLogoAnimation = () => {
    if (isLogoAnimating) return;
    
    setIsLogoAnimating(true);
    
    // Reveal text after icon settles (0.6s)
    setTimeout(() => {
      setIsTextVisible(true);
    }, 600);

    // End animation sequence
    setTimeout(() => {
      setIsTextVisible(false); // Hide text first or fade all
      setIsLogoAnimating(false);
    }, 3000);
    
    // Reset text state just after closing to be ready for next time
    setTimeout(() => {
        setIsTextVisible(false);
    }, 3500);
  };

  // Initial Route Check and Animation Trigger
  useEffect(() => {
    // Route Check (Simulation)
    const path = window.location.pathname;
    if (path === '/empresas') setActivePage('b2b');
    else if (path === '/recarga') setActivePage('recharge');
    else if (path === '/personal') setActivePage('personal');

    // Trigger Animation ONLY ONCE on mount
    if (!hasAnimatedOnLoad.current) {
        // Delay slightly to ensure render
        setTimeout(() => {
            triggerLogoAnimation();
        }, 100);
        hasAnimatedOnLoad.current = true;
    }
  }, []);

  // Handle Scroll for Navigation Transition & Scroll Animations
  useEffect(() => {
    const handleScroll = () => {
      // Show floating nav after scrolling 100px
      setShowFloatingNav(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for Reveal Animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Increased threshold so elements don't pop up immediately at the edge
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, observerOptions);

    // Observe elements on active page change
    setTimeout(() => {
        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));
    }, 200); // Increased delay slightly to ensure DOM is ready

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [activePage]);

  // Handle Dark Mode Toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    
    // Se não estiver na home e tentar navegar para uma seção da home, volte para home primeiro
    if (activePage !== 'home' && ['problem', 'solution', 'how-it-works', 'pricing', 'faq'].includes(id)) {
        setActivePage('home');
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
    }

    if (activePage !== 'home' && id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    // Se já estiver na home
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateTo = (page: 'home' | 'b2b' | 'recharge' | 'personal') => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const faqs = [
    {
      question: "Preciso cadastrar cartão no teste?",
      answer: "Não. O teste de 7 dias é totalmente gratuito e não pedimos cartão de crédito. Você só precisa assinar um plano se quiser continuar usando após o período de teste."
    },
    {
      question: "Posso cancelar?",
      answer: "Sim, você pode cancelar a qualquer momento. Não há fidelidade ou multa por cancelamento."
    },
    {
      question: "O que acontece após o trial?",
      answer: "Após os 7 dias de teste, o acesso ao app é bloqueado até você contratar um plano. Apenas a tela de pagamento permanece acessível. Nenhuma funcionalidade principal pode ser usada sem plano ativo."
    }
  ];

  return (
    <div className="min-h-screen bg-nutri-bg dark:bg-gray-900 font-sans overflow-x-hidden pb-32 md:pb-0 transition-colors duration-300">
      
      {/* ----------------- LOGO REVEAL OVERLAY ----------------- */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-white/30 dark:bg-black/40 backdrop-blur-md transition-opacity duration-500 ease-in-out ${isLogoAnimating ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex items-center relative">
              {/* Icon Container */}
              <div className={`z-20 transform transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${isLogoAnimating ? 'scale-125 md:scale-150 rotate-0 translate-x-0' : 'scale-0 -rotate-90 translate-x-10'} w-24 h-24 md:w-32 md:h-32 flex items-center justify-center overflow-hidden`}>
                  <Logo size={64} className="text-white" useImage={true} imageSrc="/ic_launcher.png" />
              </div>
              
              {/* Text Reveal Container (Clean - No Box) */}
              <div className={`z-10 overflow-hidden h-32 flex items-center -ml-6 transition-all duration-1000 ease-out ${isTextVisible ? 'w-64 md:w-80 pl-12 opacity-100 translate-x-0' : 'w-0 pl-0 opacity-0 -translate-x-10'}`}>
                   <span className="font-serif text-4xl md:text-5xl font-bold text-nutri-dark dark:text-white whitespace-nowrap drop-shadow-lg">Fitcoach.ia</span>
              </div>
          </div>
      </div>
      {/* -------------------------------------------------------- */}

      {/* Header */}
      <nav 
        className={`fixed w-full z-40 bg-nutri-bg/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800 transition-transform duration-500 ease-in-out ${
          showFloatingNav ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={triggerLogoAnimation}>
            <div className="group-hover:scale-105 transition-transform duration-300 w-10 h-10 flex items-center justify-center overflow-hidden">
              <Logo size={24} className="text-white" useImage={true} imageSrc="/ic_launcher.png" />
            </div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-nutri-dark dark:text-white">Fitcoach.ia</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Links da Home */}
              <div className="flex items-center gap-1 mr-2">
                <button 
                  onClick={() => { navigateTo('home'); setTimeout(() => scrollToSection('problem'), 100); }} 
                  className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-nutri-dark dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  O Problema
                </button>
                <button 
                  onClick={() => { navigateTo('home'); setTimeout(() => scrollToSection('solution'), 100); }} 
                  className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-nutri-dark dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  A Solução
                </button>
              </div>

              {/* Separador */}
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2"></div>

              {/* Links de Páginas */}
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => navigateTo('b2b')} 
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    activePage === 'b2b' 
                      ? 'text-nutri-dark dark:text-white bg-gray-100 dark:bg-gray-800 font-semibold' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-nutri-dark dark:hover:text-white'
                  }`}
                >
                  Academias
                </button>
                <button 
                  onClick={() => navigateTo('recharge')} 
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    activePage === 'recharge' 
                      ? 'text-nutri-dark dark:text-white bg-gray-100 dark:bg-gray-800 font-semibold' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-nutri-dark dark:hover:text-white'
                  }`}
                >
                  Recarga
                </button>
                <button 
                  onClick={() => navigateTo('personal')} 
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    activePage === 'personal' 
                      ? 'text-nutri-dark dark:text-white bg-gray-100 dark:bg-gray-800 font-semibold' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-nutri-dark dark:hover:text-white'
                  }`}
                >
                  Personal Trainers
                </button>
              </div>

              {/* Separador */}
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2"></div>

              {/* Ações */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={toggleTheme} 
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-nutri-dark dark:text-yellow-300"
                  title="Alternar tema"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <Button 
                  variant="primary" 
                  className="py-2 px-4 text-sm font-semibold" 
                  onClick={() => navigateTo('b2b')}
                >
                  Planos para Academias
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-nutri-dark dark:text-yellow-300"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                className="text-nutri-dark dark:text-white p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Bottom Nav */}
      <div className={`fixed bottom-6 left-1/2 z-[100] w-max max-w-[95vw] pointer-events-none transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) ${
         showFloatingNav ? 'translate-y-0 -translate-x-1/2 opacity-100 scale-100' : 'translate-y-24 -translate-x-1/2 opacity-0 scale-95'
      }`}>
        <nav className="pointer-events-auto bg-nutri-dark/95 dark:bg-gray-800/95 backdrop-blur-xl text-white/80 p-2 pl-6 pr-2 rounded-full shadow-2xl border border-white/10 flex items-center gap-1 md:gap-2">
          {/* Início - sempre visível */}
          <button 
            onClick={() => navigateTo('home')}
            className={`p-2 md:px-4 md:py-2 hover:bg-white/10 rounded-full transition-colors group flex items-center gap-2 ${activePage === 'home' ? 'bg-white/10 text-white' : ''}`}
            title="Início"
          >
            <Home size={20} className="text-white group-hover:text-nutri-accent transition-colors" />
            <span className="text-sm font-medium text-white">Início</span>
          </button>

          {/* Seções da Home - apenas quando estiver na home */}
          {activePage === 'home' && (
              <>
                <div className="w-px h-6 bg-white/20 mx-1"></div>
                
                <button 
                    onClick={() => scrollToSection('problem')}
                    className="p-2 md:px-4 md:py-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2 group"
                    title="Problema"
                >
                    <AlertCircle size={20} className="text-white group-hover:text-red-300 transition-colors" />
                    <span className="text-sm font-medium text-white">Problema</span>
                </button>

                <button 
                    onClick={() => scrollToSection('solution')}
                    className="p-2 md:px-4 md:py-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2 group"
                    title="Solução"
                >
                    <Sparkles size={20} className="text-white group-hover:text-nutri-accent transition-colors" />
                    <span className="text-sm font-medium text-white">Solução</span>
                </button>

                <button 
                    onClick={() => scrollToSection('pricing')}
                    className="p-2 md:px-4 md:py-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2 group"
                    title="Preços"
                >
                    <CreditCard size={20} className="text-white group-hover:text-green-300 transition-colors" />
                    <span className="text-sm font-medium text-white">Preços</span>
                </button>
              </>
          )}

          {/* Separador - sempre visível entre seções e páginas */}
          <div className="w-px h-6 bg-white/20 mx-1"></div>

          {/* Navegação de Páginas - sempre visível, apenas ícones */}
          <button 
            onClick={() => navigateTo('b2b')}
            className={`p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center ${activePage === 'b2b' ? 'bg-white/10' : ''}`}
            title="Para Academias"
          >
            <Building2 size={20} className={`transition-colors ${activePage === 'b2b' ? 'text-nutri-accent' : 'text-white hover:text-nutri-accent'}`} />
          </button>

          <button 
            onClick={() => navigateTo('personal')}
            className={`p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center ${activePage === 'personal' ? 'bg-white/10' : ''}`}
            title="Para Personais"
          >
            <Dumbbell size={20} className={`transition-colors ${activePage === 'personal' ? 'text-orange-400' : 'text-white hover:text-orange-400'}`} />
          </button>

          <button 
            onClick={() => navigateTo('recharge')}
            className={`p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center ${activePage === 'recharge' ? 'bg-white/10' : ''}`}
            title="Recarga"
          >
            <BatteryCharging size={20} className={`transition-colors ${activePage === 'recharge' ? 'text-green-300' : 'text-white hover:text-green-300'}`} />
          </button>

        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && !showFloatingNav && (
        <div className="fixed inset-0 z-30 bg-nutri-bg dark:bg-gray-900 pt-24 px-6 md:hidden animate-fade-in transition-colors duration-300">
          <div className="flex flex-col gap-6 text-xl font-serif text-nutri-dark dark:text-white text-center">
            <button onClick={() => { navigateTo('home'); setIsMenuOpen(false); }}>Início</button>
            <button onClick={() => { navigateTo('b2b'); setIsMenuOpen(false); }}>Para Academias</button>
            <button onClick={() => { navigateTo('personal'); setIsMenuOpen(false); }}>Personal Trainers</button>
            <button onClick={() => { navigateTo('recharge'); setIsMenuOpen(false); }}>Recarga</button>
            <button onClick={() => scrollToSection('faq')}>Dúvidas</button>
          </div>
        </div>
      )}

      {/* RENDER ACTIVE PAGE */}
      <main className="min-h-[60vh]">
          {activePage === 'home' && <HomeContent scrollToSection={scrollToSection} faqs={faqs} openFaqIndex={openFaqIndex} toggleFaq={toggleFaq} navigateTo={navigateTo} />}
          {activePage === 'b2b' && <B2BPage />}
          {activePage === 'recharge' && <RechargePage />}
          {activePage === 'personal' && <PersonalTrainerPage />}
      </main>

      {/* Footer */}
      <footer className="bg-nutri-dark dark:bg-black text-white py-12 rounded-t-[3rem] mt-10 reveal transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={triggerLogoAnimation}>
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                  <Logo size={24} className="text-white" useImage={true} imageSrc="/ic_launcher.png" />
                </div>
                <span className="font-serif text-2xl font-bold">Fitcoach.ia</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-green-100/60 mb-8 text-sm">
               <button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Home</button>
               <button onClick={() => navigateTo('b2b')} className="hover:text-white transition-colors">Para Academias</button>
               <button onClick={() => navigateTo('personal')} className="hover:text-white transition-colors">Personal Trainers</button>
               <button onClick={() => navigateTo('recharge')} className="hover:text-white transition-colors">Recarregar Créditos</button>
               <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
               <a href="#" className="hover:text-white transition-colors">Contato: suporte@fitcoach.ia</a>
            </div>
        </div>
      </footer>

    </div>
  );
}

export default App;