import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Mic, User, PhoneOff, MicOff, Activity, X, Phone, MessageCircle } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export const LiveDemo: React.FC = () => {
  // State for the animation cycle: 'chat' -> 'vibrating' -> 'call' -> 'vibrating' -> 'chat'
  const [demoMode, setDemoMode] = useState<'chat' | 'vibrating' | 'call'>('chat');
  const [showLiveResponse, setShowLiveResponse] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: 'Olá! Sou a Fitcoach.ia. O que você comeu hoje?' },
    { id: '2', role: 'user', text: 'Comi uma pizza ontem à noite 🍕' },
    { id: '3', role: 'model', text: '✅ Registrado! 3 fatias: ~900 kcal.' },
    { id: '4', role: 'model', text: 'Para equilibrar hoje, que tal uma saladinha no jantar? Senão a conta não fecha! 🥗😅' }
  ]);
  const [inputValue, setInputValue] = useState('');
  
  // Use ref for the container to scroll internally, preventing page jump
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-cycle animation logic
  useEffect(() => {
    // Precise timing using timeouts and async/await loop
    let active = true;
    const runSequence = async () => {
        if (!active) return;
        setDemoMode('chat');
        await new Promise(r => setTimeout(r, 6000));
        
        if (!active) return;
        setDemoMode('vibrating');
        await new Promise(r => setTimeout(r, 2000));
        
        if (!active) return;
        setDemoMode('call');
        // Wait a bit after answering before showing the bubble
        await new Promise(r => setTimeout(r, 1500));
        if (active) setShowLiveResponse(true);
        
        // Show bubble for a few seconds
        await new Promise(r => setTimeout(r, 3500));
        if (active) setShowLiveResponse(false);

        if (active) runSequence(); // Recursion for loop
    };
    
    runSequence();

    return () => { active = false; };
  }, []);


  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (demoMode === 'chat') {
      // Small delay to ensure content is rendered before scrolling
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, demoMode]);

  const isVibrating = demoMode === 'vibrating';
  const isCallMode = demoMode === 'call';

  return (
    <div className="relative w-[320px] mx-auto">
      <div className={`relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-full shadow-2xl flex flex-col overflow-hidden ring-8 ring-gray-900/20 transition-transform duration-100 ${isVibrating ? 'animate-vibrate' : ''}`}>
        
        {/* ---------------- CHAT INTERFACE ---------------- */}
        {!isCallMode && (
          <div className="flex-1 bg-nutri-bg w-full h-full relative flex flex-col font-sans">
              {/* Status Bar */}
              <div className="h-8 w-full bg-transparent flex justify-between items-center px-6 pt-2 text-xs font-bold text-gray-800 z-10">
              <span>15:11</span>
              <div className="flex gap-1">
                  <span className="w-4 h-4 bg-gray-800 rounded-full opacity-20"></span>
                  <span className="w-4 h-4 bg-gray-800 rounded-full opacity-20"></span>
              </div>
              </div>

              {/* Header */}
              <div className="px-6 pt-4 pb-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-nutri-dark flex items-center justify-center text-white">
                  <Sparkles size={18} />
                  </div>
                  <div>
                  <h3 className="font-serif text-nutri-dark font-bold text-lg">Fitcoach.ia</h3>
                  <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-xs text-gray-500">Online</span>
                  </div>
                  </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-nutri-dark">
                  <User size={18} />
              </div>
              </div>

              {/* Chat Area */}
              <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide pb-32">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-600">
                  Analisar o que você comeu hoje
              </div>

              {messages.map((msg) => (
                  <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                  >
                  <div
                      className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm ${
                      msg.role === 'user'
                          ? 'bg-nutri-dark text-white rounded-tr-none'
                          : 'bg-white text-gray-700 rounded-tl-none'
                      }`}
                  >
                      {msg.text}
                  </div>
                  </div>
              ))}
              
              {/* Typing indicator simulation */}
              {demoMode === 'chat' && (
                <div className="flex justify-start opacity-0 animate-[fadeIn_0.5s_ease-in-out_2s_forwards]">
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                    </div>
                </div>
              )}
              </div>

              {/* Input Area */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-nutri-bg/95 backdrop-blur-sm z-20">
              <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
                  <button className="whitespace-nowrap px-4 py-2 bg-white rounded-full text-xs font-medium shadow-sm text-gray-600 border border-gray-100">
                  🍕 +900 kcal
                  </button>
                  <button className="whitespace-nowrap px-4 py-2 bg-white rounded-full text-xs font-medium shadow-sm text-gray-600 border border-gray-100">
                  💧 +250ml
                  </button>
              </div>
              <div className="flex items-center gap-2 bg-white p-2 rounded-full shadow-lg border border-gray-100">
                  <button className="p-2 text-gray-400 hover:text-nutri-dark transition-colors">
                  <Mic size={20} />
                  </button>
                  <input 
                  type="text" 
                  value={inputValue}
                  readOnly
                  placeholder="Digite algo..."
                  className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                  />
                  <button className="w-8 h-8 bg-nutri-dark rounded-full flex items-center justify-center text-white">
                  <Send size={14} />
                  </button>
              </div>
              </div>

              {/* Calling Overlay when vibrating */}
              {isVibrating && (
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-50 flex flex-col items-center justify-center pt-20">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center animate-ping text-white mb-4">
                          <Phone size={32} fill="currentColor" />
                      </div>
                      <p className="font-bold text-nutri-dark text-lg bg-white/90 px-6 py-2 rounded-full shadow-lg">Chamando Fitcoach.ia...</p>
                  </div>
              )}
          </div>
        )}

        {/* ---------------- LIVE CALL INTERFACE ---------------- */}
        {isCallMode && (
            <div className="flex-1 bg-nutri-dark w-full h-full relative flex flex-col items-center font-sans animate-fade-in-up">
              
              {/* Header / Status */}
              <div className="w-full flex justify-between items-center p-6 pt-8 text-white/90">
                  <div className="flex items-center gap-2">
                      <Activity size={20} className="animate-pulse text-green-300" />
                      <span className="font-serif text-lg tracking-wide">Conectado</span>
                  </div>
                  <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                      <X size={20} />
                  </button>
              </div>

              {/* Avatar Central */}
              <div className="flex-1 flex flex-col items-center justify-center -mt-10 relative">
                  
                  {/* Floating Result Bubble in Call */}
                  {showLiveResponse && (
                    <div className="absolute -top-2 bg-white text-nutri-dark p-4 rounded-2xl rounded-b-none shadow-xl z-30 animate-fade-in-up max-w-[240px] text-center border-2 border-green-400">
                        <p className="font-bold text-sm">✅ Registrado!</p>
                        <p className="text-xs text-gray-600">Salada na janta 🥗</p>
                        <p className="text-xs font-bold text-green-600">+200 kcal</p>
                        {/* Little triangle arrow pointing down */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r-2 border-b-2 border-green-400"></div>
                    </div>
                  )}

                  <div className="relative mb-6">
                      {/* Pulsing Rings */}
                      <div className="absolute inset-0 rounded-full border border-green-300/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                      <div className="absolute -inset-4 rounded-full border border-green-300/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                      
                      {/* Image Container */}
                      <div className="w-48 h-48 rounded-full border-4 border-white/90 shadow-2xl overflow-hidden relative z-10">
                          {/* Chef Image Placeholder - Using a generic realistic person or illustration */}
                          <img 
                              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                              alt="Chef IA"
                              className="w-full h-full object-cover"
                          />
                      </div>
                  </div>

                  <div className="text-center space-y-1">
                      <h2 className="font-serif text-3xl font-bold text-white tracking-wide">Fitcoach.ia</h2>
                      <p className="text-green-100/80 font-medium">Assistente Pessoal</p>
                  </div>
              </div>

              {/* Controls Bottom */}
              <div className="w-full p-8 pb-12 flex justify-center gap-8 items-center">
                  <button className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all transform hover:scale-110">
                      <Mic size={28} />
                  </button>
                  
                  <button className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 shadow-lg shadow-red-900/30 flex items-center justify-center text-white transition-all transform hover:scale-105 animate-pulse">
                      <PhoneOff size={32} fill="currentColor" />
                  </button>

                  <button className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white/50 transition-all transform hover:scale-110">
                      <MicOff size={28} />
                  </button>
              </div>

              {/* Sound Wave Simulation */}
              <div className="absolute bottom-32 left-0 right-0 flex justify-center items-end gap-1 h-8 opacity-50">
                  {[...Array(10)].map((_, i) => (
                      <div key={i} className="w-1 bg-white rounded-full animate-[bounce_1s_infinite]" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}></div>
                  ))}
              </div>

            </div>
        )}

        {/* Camera Notch Simulation */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-32 bg-gray-800 rounded-b-2xl z-50"></div>
      </div>

      {/* Visual Flair Notification - Now positioned between Hero Text and Phone on desktop */}
      {demoMode === 'chat' && (
        <div className="hidden md:flex absolute top-48 -left-32 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg z-20 items-center gap-3 animate-fade-in-up transition-colors duration-300">
            <div className="bg-nutri-dark p-2 rounded-full text-white"><MessageCircle size={18}/></div>
            <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Bate papo</p>
                <p className="font-bold text-nutri-dark dark:text-white">Ativo</p>
            </div>
            {/* Arrow pointing to the phone */}
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-white dark:bg-gray-800 rotate-45 shadow-sm transition-colors duration-300"></div>
        </div>
      )}
    </div>
  );
};