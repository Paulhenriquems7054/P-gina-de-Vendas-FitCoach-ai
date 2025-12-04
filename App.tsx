import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Camera, Mic, ChefHat, Smartphone, Download, UserCheck, ShieldCheck, ChevronDown, ChevronUp, Home, AlertCircle, Sparkles, CreditCard, CircleHelp, Moon, Sun, Building2, BatteryCharging, ArrowRight, TrendingUp, Dumbbell } from 'lucide-react';
import { LiveDemo } from './components/LiveDemo';
import { Pricing } from './components/Pricing';
import { BusinessPricing } from './components/BusinessPricing';
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
    {/* 1. HERO SECTION */}
      <section id="top" className="pt-32 pb-16 px-6 relative overflow-hidden bg-nutri-bg dark:bg-gray-900 transition-colors duration-300">
        {/* Background Blobs */}
        <div className="absolute top-20 -left-40 w-96 h-96 bg-green-200/30 dark:bg-green-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-pulse transition-colors duration-500"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-pulse delay-1000 transition-colors duration-500"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm mb-6 text-sm text-nutri-dark dark:text-gray-200 font-medium border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Disponível todos os dias 24/7
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-nutri-dark dark:text-white leading-tight mb-6 transition-colors duration-300">
              Seu <span className="text-nutri-accent">Nutricionista</span> e <span className="text-nutri-accent">Personal Trainer</span> de Plantão <span className="text-nutri-accent">24h</span> no seu bolso.
            </h1>
            
            {/* Vídeo Logo Abaixo do Título */}
            <div className="mb-8 reveal delay-100">
              <div className="relative w-full max-w-3xl mx-auto lg:mx-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-black">
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
                
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-black/20 rounded-2xl md:rounded-3xl"></div>
              </div>
            </div>

            <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg font-medium transition-colors duration-300">
              A primeira Inteligência Artificial completa que vê o que você come, cria seus treinos personalizados e conversa com você em tempo real por voz. Nutrição + Treinos em um só lugar. Sem digitar, sem planilhas chatas, sem julgamentos.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="shadow-green-900/20 py-5 text-lg" onClick={() => navigateTo('b2b')}>
                QUERO O FITCOACH.IA NA MINHA ACADEMIA
              </Button>
            </div>
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 ml-2 transition-colors duration-300">
              Solução completa de IA para academias aumentarem resultado e retenção de alunos
            </p>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end scale-90 md:scale-100">
            <div className="relative">
                <LiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA E AGITAÇÃO */}
      <section id="problem" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="font-serif text-3xl md:text-4xl text-nutri-dark dark:text-white font-bold mb-8 reveal transition-colors duration-300">Por que é tão difícil ter resultados?</h2>
           
           <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-nutri-bg dark:bg-gray-700 p-8 rounded-3xl border border-gray-100 dark:border-gray-600 reveal delay-200 transition-colors duration-300">
                 <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mb-4 text-xl">😩</div>
                 <h3 className="font-bold text-xl text-nutri-dark dark:text-white mb-2 transition-colors duration-300">Apps Complicados</h3>
                 <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Você já tentou usar aqueles aplicativos onde você precisa digitar cada grama de arroz que come? É chato, demora e a gente sempre desiste na primeira semana.</p>
              </div>
              <div className="bg-nutri-bg dark:bg-gray-700 p-8 rounded-3xl border border-gray-100 dark:border-gray-600 reveal delay-400 transition-colors duration-300">
                 <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mb-4 text-xl">💸</div>
                 <h3 className="font-bold text-xl text-nutri-dark dark:text-white mb-2 transition-colors duration-300">Profissionais Caros</h3>
                 <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Nutricionista custa R$ 250,00 por consulta. Personal Trainer também. E eles não estão disponíveis 24h quando você precisa de ajuda urgente.</p>
              </div>
              <div className="bg-nutri-bg dark:bg-gray-700 p-8 rounded-3xl border border-gray-100 dark:border-gray-600 reveal delay-600 transition-colors duration-300">
                 <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mb-4 text-xl">🤷</div>
                 <h3 className="font-bold text-xl text-nutri-dark dark:text-white mb-2 transition-colors duration-300">Treinos Genéricos</h3>
                 <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Você treina, mas não sabe se está fazendo certo. Os treinos prontos não consideram seu objetivo, seu corpo ou suas limitações.</p>
              </div>
           </div>
           
           <div className="mt-12 p-6 bg-nutri-dark dark:bg-gray-900 rounded-2xl text-white inline-block shadow-lg reveal delay-700 border border-transparent dark:border-gray-700">
              <p className="font-serif text-xl italic">"O Fitcoach.ia muda isso."</p>
           </div>
        </div>
      </section>

      {/* 3. A SOLUÇÃO */}
      <section id="solution" className="py-20 bg-nutri-bg dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="font-serif text-4xl text-nutri-dark dark:text-white font-bold mb-4 transition-colors duration-300">Nutrição + Treinos. Tudo em um só lugar.</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto transition-colors duration-300">
              O Fitcoach.ia usa a tecnologia mais avançada do mundo (Gemini Live) para ser seu Nutricionista e Personal Trainer 24h. Converse por voz, tire fotos e receba treinos personalizados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic className="w-8 h-8 text-white" />,
                color: "bg-nutri-dark",
                title: "Modo Live",
                desc: "Ative o microfone e converse como se estivesse numa ligação. Tire dúvidas sobre nutrição, peça receitas, ajuste seu treino ou desabafe sobre a ansiedade. Ele te ouve, entende e responde na hora."
              },
              {
                icon: <Camera className="w-8 h-8 text-nutri-dark" />,
                color: "bg-nutri-accent",
                title: "Visão Inteligente",
                desc: "Vai almoçar? Tire uma foto do prato e a IA identifica os alimentos, calcula as calorias e te diz se está equilibrado. Mostre seu treino e receba feedback instantâneo."
              },
              {
                icon: <Dumbbell className="w-8 h-8 text-blue-600" />,
                color: "bg-blue-100",
                title: "Treinos Personalizados",
                desc: "Receba treinos criados especialmente para você, baseados no seu objetivo, nível e equipamentos disponíveis. Ajuste conforme evolui e mantenha a motivação sempre alta."
              }
            ].map((feature, i) => (
              <div key={i} className={`group p-8 rounded-[2rem] bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 reveal delay-${(i+1)*200} border border-transparent dark:border-gray-700`}>
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-md`}>
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-nutri-dark dark:text-white mb-3 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMO FUNCIONA */}
      <section id="how-it-works" className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="font-serif text-4xl text-nutri-dark dark:text-white font-bold mb-4 transition-colors duration-300">Veja como é fácil começar sua transformação</h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 dark:before:via-gray-600 before:to-transparent">
            {[
              { title: "Faça sua Assinatura", text: "Escolha o plano abaixo e garanta o preço promocional aqui no site.", icon: <ShieldCheck size={20} /> },
              { title: "Baixe o App", text: "Assim que o pagamento confirmar, você recebe o link do App e seu acesso por e-mail.", icon: <Download size={20} /> },
              { title: "Faça Login", text: "Use seu e-mail cadastrado para desbloquear a inteligência artificial.", icon: <UserCheck size={20} /> },
              { title: "Comece a Transformação", text: "Aponte a câmera para sua comida, converse sobre nutrição e treinos, e veja os resultados aparecerem.", icon: <Mic size={20} /> },
            ].map((step, index) => (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active reveal delay-${index * 200}`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-700 bg-nutri-dark group-[.is-active]:bg-nutri-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-500 hover:scale-125">
                  {step.icon}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-nutri-bg dark:bg-gray-700 p-6 rounded-3xl border border-gray-100 dark:border-gray-600 shadow-sm transition-all duration-500 hover:scale-[1.02]">
                  <div className="font-serif font-bold text-nutri-dark dark:text-gray-300 mb-1 transition-colors duration-300">Passo {index + 1}</div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. A OFERTA (Pricing B2C) */}
      <Pricing />

      {/* 5.1 NOVO TEASER PARA EMPRESAS (Substitui BusinessPricing completo) */}
      <section className="py-24 px-6 relative transition-colors duration-300 overflow-hidden bg-neutral-950">
         <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg mb-6 text-sm font-bold uppercase tracking-wide">
               <TrendingUp size={16} /> Para Donos de Negócio
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
               Você tem uma <span className="text-blue-400">Academia</span>?
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
               Sabemos a sua maior dor: <span className="font-bold text-red-400">o aluno desiste porque não vê resultado.</span> 
               <br className="hidden md:block" />
               E o resultado não vem só do treino, vem do que ele come em casa.
            </p>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 mb-10 max-w-3xl mx-auto shadow-2xl">
                <p className="font-medium text-white text-lg">
                  Imagine oferecer <strong className="text-blue-300">Nutricionista + Personal Trainer IA 24h</strong> como um benefício exclusivo da sua marca. 
                  Aumente o valor do seu ticket e blinde seus alunos contra a concorrência.
                </p>
            </div>

            <Button 
                variant="primary" 
                onClick={() => navigateTo('b2b')} 
                className="bg-blue-600 hover:bg-blue-700 border-none text-white text-lg px-10 py-5 h-auto transform hover:scale-105 mx-auto"
            >
               VER SOLUÇÃO CORPORATIVA <ArrowRight className="ml-2" />
            </Button>
            
            <p className="mt-6 text-sm text-gray-400">
               Planos especiais com alto retorno sobre investimento.
            </p>
         </div>
      </section>

      {/* 6. GARANTIA E FAQ */}
      <section id="faq" className="py-20 bg-nutri-bg dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6">
           
           {/* Segurança e Entrega */}
           <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-green-100 dark:border-gray-700 text-center mb-16 reveal transition-colors duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-400">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-nutri-dark dark:text-white mb-2 transition-colors duration-300">Compra 100% Segura e Entrega Imediata</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 max-w-2xl mx-auto">
                Seus dados são protegidos com criptografia de ponta a ponta. O acesso ao Fitcoach.ia (Nutricionista + Personal Trainer IA) é enviado automaticamente para o seu e-mail logo após a confirmação do pagamento.
              </p>
           </div>

           {/* FAQ */}
           <h2 className="font-serif text-3xl text-nutri-dark dark:text-white font-bold text-center mb-8 reveal transition-colors duration-300">Perguntas Frequentes</h2>
           <div className="space-y-4 reveal delay-100">
             {faqs.map((faq, index) => (
               <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                 <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
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

  const faqs = [
    {
      question: "É uma pessoa de verdade falando?",
      answer: "Não, é uma Inteligência Artificial super avançada (Gemini 2.5) treinada em nutrição e treinamento físico. Ela fala tão bem que parece humana, mas está disponível 24h para você, sem filas de espera."
    },
    {
      question: "O Fitcoach.ia realmente cria treinos personalizados?",
      answer: "Sim! A IA analisa seu objetivo (emagrecimento, ganho de massa, condicionamento), seu nível de experiência, equipamentos disponíveis e cria treinos personalizados que evoluem conforme você progride."
    },
    {
      question: "Por que comprar por aqui e não na loja de apps?",
      answer: "Comprando direto pelo site, conseguimos isentar taxas abusivas das lojas (que chegam a 30%) e repassar esse desconto integralmente para você, mantendo o preço acessível."
    },
    {
      question: "E se eu precisar falar mais que 15 minutos?",
      answer: "15 minutos focados rendem muito! Mas se você for um 'tagarela', pode adquirir pacotes extras de tempo direto no app por preços simbólicos (a partir de R$ 2,99)."
    },
    {
      question: "Funciona no meu celular?",
      answer: "Sim! Disponível para Android (versão iOS em breve). O app é leve e funciona na maioria dos smartphones modernos."
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
          <button 
            onClick={() => navigateTo('home')}
            className={`p-2 hover:bg-white/10 rounded-full transition-colors group flex items-center gap-2 ${activePage === 'home' ? 'bg-white/10 text-white' : ''}`}
            title="Início"
          >
            <Home size={20} className="text-white group-hover:text-nutri-accent transition-colors" />
            <span className="hidden md:inline text-sm font-medium text-white">Início</span>
          </button>

          <div className="w-px h-6 bg-white/20 mx-1"></div>

          {activePage === 'home' && (
              <>
                <button 
                    onClick={() => scrollToSection('problem')}
                    className="p-2 md:px-4 md:py-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2 group"
                >
                    <AlertCircle size={20} className="group-hover:text-red-300 transition-colors" />
                    <span className="hidden md:inline text-sm font-medium">Problema</span>
                </button>

                <button 
                    onClick={() => scrollToSection('solution')}
                    className="p-2 md:px-4 md:py-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2 group"
                >
                    <Sparkles size={20} className="group-hover:text-nutri-accent transition-colors" />
                    <span className="hidden md:inline text-sm font-medium">Solução</span>
                </button>

                <button 
                    onClick={() => navigateTo('b2b')}
                    className="p-2 md:px-4 md:py-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2 group"
                >
                    <CreditCard size={20} className="group-hover:text-green-300 transition-colors" />
                    <span className="hidden md:inline text-sm font-medium">Planos Academia</span>
                </button>
              </>
          )}

          <div className="w-px h-6 bg-white/20 mx-1"></div>

          {/* New Navigation Icons */}
          <button 
            onClick={() => navigateTo('b2b')}
            className={`p-2 hover:bg-white/10 rounded-full transition-colors group flex items-center gap-2 ${activePage === 'b2b' ? 'bg-white/10 text-white' : ''}`}
            title="Para Academias"
          >
            <Building2 size={20} className={`transition-colors ${activePage === 'b2b' ? 'text-nutri-accent' : 'text-white group-hover:text-nutri-accent'}`} />
          </button>

           <button 
            onClick={() => navigateTo('recharge')}
            className={`p-2 hover:bg-white/10 rounded-full transition-colors group flex items-center gap-2 ${activePage === 'recharge' ? 'bg-white/10 text-white' : ''}`}
            title="Recarga"
          >
            <BatteryCharging size={20} className={`transition-colors ${activePage === 'recharge' ? 'text-green-300' : 'text-white group-hover:text-green-300'}`} />
          </button>

        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && !showFloatingNav && (
        <div className="fixed inset-0 z-30 bg-nutri-bg dark:bg-gray-900 pt-24 px-6 md:hidden animate-fade-in transition-colors duration-300">
          <div className="flex flex-col gap-6 text-xl font-serif text-nutri-dark dark:text-white text-center">
            <button onClick={() => { navigateTo('home'); setIsMenuOpen(false); }}>Início</button>
            <button onClick={() => { navigateTo('b2b'); setIsMenuOpen(false); }}>Para Academias</button>
            <button onClick={() => { navigateTo('recharge'); setIsMenuOpen(false); }}>Recarga</button>
            <button onClick={() => { navigateTo('b2b'); setIsMenuOpen(false); }}>Planos para Academias</button>
            <button onClick={() => scrollToSection('faq')}>Dúvidas</button>
          </div>
        </div>
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
               <button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Home</button>
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