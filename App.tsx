import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Camera, Mic, ChefHat, Smartphone, Download, UserCheck, ShieldCheck, ChevronDown, ChevronUp, Home, AlertCircle, Sparkles, CreditCard, CircleHelp, Moon, Sun, Building2, BatteryCharging, ArrowRight, TrendingUp, Dumbbell } from 'lucide-react';
import { LiveDemo } from './components/LiveDemo';
import { Button } from './components/Button';
import { B2BPage } from './components/B2BPage';
import { RechargePage } from './components/RechargePage';
import { Logo } from './components/Logo';

// Interface atualizada para receber navigateTo
interface HomeContentProps {
  scrollToSection: (id: string) => void;
  faqs: any[];
  openFaqIndex: number | null;
  toggleFaq: (i: number) => void;
  navigateTo: (page: 'home' | 'b2b' | 'recharge') => void;
}

// Componente Interno com o conteúdo da Landing Page Original
const HomeContent: React.FC<HomeContentProps> = ({ scrollToSection, faqs, openFaqIndex, toggleFaq, navigateTo }) => (
  <div className="animate-fade-in">
    {/* A) HERO SECTION - Acima da dobra */}
      <section id="top" className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 relative overflow-hidden bg-nutri-bg dark:bg-gray-900 transition-colors duration-300">
        {/* Background Blobs */}
        <div className="absolute top-20 -left-40 w-96 h-96 bg-green-200/30 dark:bg-green-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-pulse transition-colors duration-500"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-pulse delay-1000 transition-colors duration-500"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            {/* Headline forte */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-nutri-dark dark:text-white leading-tight mb-4 md:mb-6 transition-colors duration-300">
              <span className="text-nutri-accent">FitCoach.ai</span> — A inteligência artificial da sua academia
            </h1>
            
            {/* Subheadline */}
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed font-medium transition-colors duration-300 px-2">
              Automatize treinos, acompanhamento e motivação com IA multimodal. Texto, imagem e voz integrados para alunos e professores.
            </h2>

            {/* Chamada de experimentação */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-600 rounded-2xl p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-sm md:text-base text-blue-800 dark:text-blue-200 font-medium">
                ✨ Experimente a IA FitCoach na sua academia com <strong>3 interações gratuitas</strong> para alunos novos.
              </p>
            </div>

            {/* CTA primário */}
            <div className="mb-8">
              <Button className="shadow-green-900/20 py-5 px-8 text-lg font-bold" onClick={() => navigateTo('b2b')}>
                Quero ativar FitCoach.AI na minha academia
              </Button>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                Planos mensais e anuais com IA completa inclusa
              </p>
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

      {/* B) DIFERENCIAIS - IA Multimodal */}
      <section id="solution" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="font-serif text-3xl md:text-4xl text-nutri-dark dark:text-white font-bold mb-6 transition-colors duration-300">
              Por que escolher FitCoach.AI
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Dumbbell className="w-6 h-6" />, text: "IA multimodal (texto, imagem e voz) integrada" },
              { icon: <Camera className="w-6 h-6" />, text: "Sem custos adicionais por aluno" },
              { icon: <Mic className="w-6 h-6" />, text: "Recargas automáticas de voz com lucro para a academia" },
              { icon: <TrendingUp className="w-6 h-6" />, text: "Planos mensais e anuais com IA completa inclusa" },
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
            <Button className="shadow-green-900/20" onClick={() => navigateTo('b2b')}>
              Quero ativar FitCoach.AI na minha academia
            </Button>
          </div>
        </div>
      </section>

      {/* C) COMO FUNCIONA */}
      <section id="how-it-works" className="py-16 bg-nutri-bg dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="font-serif text-3xl md:text-4xl text-nutri-dark dark:text-white font-bold mb-4 transition-colors duration-300">
              Como funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                step: "1", 
                title: "Escolha seu plano", 
                text: "Selecione o plano ideal para sua academia baseado no número de alunos.",
                icon: <UserCheck size={24} />
              },
              { 
                step: "2", 
                title: "Ative a IA FitCoach", 
                text: "Receba acesso imediato com IA multimodal (texto, imagem e voz) integrada em todos os planos.",
                icon: <ShieldCheck size={24} />
              },
              { 
                step: "3", 
                title: "Alunos experimentam grátis", 
                text: "Novos alunos ganham 3 interações gratuitas para conhecer a IA antes de decidir sobre recargas de voz.",
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

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Usuários Individuais */}
            <div className="bg-nutri-bg dark:bg-gray-700 p-6 md:p-8 rounded-2xl border-2 border-green-200 dark:border-green-600 reveal delay-100">
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
                  <span>IA multimodal integrada — texto, imagem e voz</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <span className="text-green-500">✓</span>
                  <span>3 interações gratuitas para novos alunos</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <span className="text-green-500">✓</span>
                  <span>Recargas opcionais de voz</span>
                </li>
              </ul>
            </div>

            {/* Academias */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 md:p-8 rounded-2xl border-2 border-blue-300 dark:border-blue-600 reveal delay-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                  🏋️
                </div>
                <h3 className="font-serif text-2xl font-bold text-nutri-dark dark:text-white">
                  Para academias
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Ideal para gestores de academias que querem aumentar retenção de alunos.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <span className="text-blue-500">✓</span>
                  <span>IA multimodal integrada — texto, imagem e voz inclusos</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <span className="text-blue-500">✓</span>
                  <span>Alunos novos ganham 3 interações gratuitas</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <span className="text-blue-500">✓</span>
                  <span>Recargas de voz opcionais com lucro para a academia</span>
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
             <Button className="shadow-green-900/20 py-5 px-8 text-lg font-bold" onClick={() => navigateTo('b2b')}>
               Quero ativar FitCoach.AI na minha academia
             </Button>
             <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
               Planos mensais e anuais com IA completa inclusa
             </p>
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

  // Simple State-based Router: 'home' | 'b2b' | 'recharge'
  // Foco de vendas principal: Academias (B2B) como página inicial
  const [activePage, setActivePage] = useState<'home' | 'b2b' | 'recharge'>('b2b');

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

  const navigateTo = (page: 'home' | 'b2b' | 'recharge') => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToPlan = (planId: string) => {
    setIsMenuOpen(false);
    if (activePage !== 'b2b') {
      setActivePage('b2b');
      setTimeout(() => {
        const element = document.getElementById(planId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Se não encontrar o elemento, scrolla para o topo
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 200);
    } else {
      const element = document.getElementById(planId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleDirectPurchase = (url: string) => {
    setIsMenuOpen(false);
    window.location.href = url;
  };

  const faqs = [
    {
      question: "A IA está incluída em todos os planos?",
      answer: "Sim. Todos os planos incluem IA multimodal (texto, imagem e voz) integrada. Não há custos adicionais por aluno. Recargas de voz são opcionais e geram lucro para a academia."
    },
    {
      question: "Como funcionam as 3 interações gratuitas?",
      answer: "Novos alunos recebem automaticamente 3 interações gratuitas com a IA FitCoach para experimentar todas as funcionalidades (texto, imagem e voz). Após isso, podem optar por recargas de voz opcionais."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, você pode cancelar a qualquer momento. Não há fidelidade ou multa por cancelamento."
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
              {/* Links principais – foco em Academias */}
              <div className="flex items-center gap-1 mr-2">
                <button 
                  onClick={() => navigateTo('b2b')} 
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    activePage === 'b2b' 
                      ? 'text-nutri-dark dark:text-white bg-gray-100 dark:bg-gray-800 font-semibold' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-nutri-dark dark:hover:text-white'
                  }`}
                >
                  Para Academias
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
              </div>
            </div>

            {/* Mobile Theme Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-nutri-dark dark:text-yellow-300"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Bottom Nav – foco em Academias */}
      <div className={`fixed bottom-6 left-1/2 z-[100] w-max max-w-[95vw] pointer-events-none transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) ${
         showFloatingNav ? 'translate-y-0 -translate-x-1/2 opacity-100 scale-100' : 'translate-y-24 -translate-x-1/2 opacity-0 scale-95'
      }`}>
        <nav className="pointer-events-auto bg-nutri-dark/95 dark:bg-gray-800/95 backdrop-blur-xl text-white/80 p-2 pl-6 pr-2 rounded-full shadow-2xl border border-white/10 flex items-center gap-1 md:gap-2">
          {/* Início - sempre visível */}
          <button 
            onClick={() => navigateTo('b2b')}
            className={`p-2 md:px-4 md:py-2 hover:bg-white/10 rounded-full transition-colors group flex items-center gap-2 ${activePage === 'b2b' ? 'bg-white/10 text-white' : ''}`}
            title="Início"
          >
            <Home size={20} className="text-white group-hover:text-nutri-accent transition-colors" />
            <span className="text-sm font-medium text-white">Início</span>
          </button>

          {/* Separador - entre início e ícones de páginas */}
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
            onClick={() => navigateTo('recharge')}
            className={`p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center ${activePage === 'recharge' ? 'bg-white/10' : ''}`}
            title="Recarga"
          >
            <BatteryCharging size={20} className={`transition-colors ${activePage === 'recharge' ? 'text-green-300' : 'text-white hover:text-green-300'}`} />
          </button>

        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[45] bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Menu Content */}
          <div className="fixed inset-0 z-[50] bg-nutri-bg dark:bg-gray-900 pt-20 px-6 md:hidden overflow-y-auto pb-20">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-nutri-dark dark:text-white"
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-4 text-base font-serif text-nutri-dark dark:text-white">
            {/* Navegação Principal */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
              <button className="w-full text-left py-2 font-bold text-lg" onClick={() => { navigateTo('b2b'); }}>Início</button>
              <button className="w-full text-left py-2" onClick={() => { navigateTo('recharge'); }}>Recarga</button>
            </div>

            {/* Planos para Academias */}
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Planos para Academias</h3>
              <div className="flex flex-col gap-2 text-sm">
                <button 
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex justify-between items-center"
                  onClick={() => scrollToPlan('b2b-plans')}
                >
                  <span>Starter Mini - R$ 149,90/mês</span>
                  <ArrowRight size={16} className="text-gray-400" />
                </button>
                <button 
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex justify-between items-center"
                  onClick={() => scrollToPlan('b2b-plans')}
                >
                  <span>Starter - R$ 299,90/mês</span>
                  <ArrowRight size={16} className="text-gray-400" />
                </button>
                <button 
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex justify-between items-center"
                  onClick={() => scrollToPlan('b2b-plans')}
                >
                  <span>Growth - R$ 649,90/mês</span>
                  <span className="text-xs bg-nutri-accent text-nutri-dark px-2 py-0.5 rounded-full font-bold">MAIS VENDIDO</span>
                </button>
                <button 
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex justify-between items-center"
                  onClick={() => scrollToPlan('b2b-plans')}
                >
                  <span>Pro - R$ 1.199,90/mês</span>
                  <ArrowRight size={16} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Recargas */}
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Recargas de IA</h3>
              <div className="flex flex-col gap-2 text-sm">
                <button 
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => { navigateTo('recharge'); }}
                >
                  Sessão Turbo - R$ 5,00
                </button>
                <button 
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => { navigateTo('recharge'); }}
                >
                  Banco de Voz 100 - R$ 12,90
                </button>
                <button 
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => { navigateTo('recharge'); }}
                >
                  Passe Livre 30 Dias - R$ 19,90
                </button>
              </div>
            </div>
            </div>
          </div>
        </>
      )}

      {/* RENDER ACTIVE PAGE */}
      <main className="min-h-[60vh]">
          {activePage === 'home' && <HomeContent scrollToSection={scrollToSection} faqs={faqs} openFaqIndex={openFaqIndex} toggleFaq={toggleFaq} navigateTo={navigateTo} />}
          {activePage === 'b2b' && <B2BPage />}
          {activePage === 'recharge' && <RechargePage />}
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
               <button onClick={() => navigateTo('b2b')} className="hover:text-white transition-colors">Para Academias</button>
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