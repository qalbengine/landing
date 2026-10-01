import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, Sparkles, CheckCircle2, BookOpen, AlertTriangle, RefreshCw, MessageSquare } from 'lucide-react';
import { IntersectionSvg } from './TrafficIllustration';

interface OpenAIHeroProps {
  onNavigate: (route: string) => void;
}

export const OpenAIHero: React.FC<OpenAIHeroProps> = ({ onNavigate }) => {
  const [prompt, setPrompt] = useState('');
  const [isAnswering, setIsAnswering] = useState(false);
  const [aiResponse, setAiResponse] = useState<{
    query: string;
    answer: string;
    rule: string;
    svgScenario?: 'priority' | 'unregulated';
  } | null>(null);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const presets = [
    {
      id: 'chat',
      label: 'Chorrahalar tahlili',
      query: 'Chorrahada qaysi avtomobil birinchi o‘tadi?',
      answer: 'Asosiy yo‘l (2.1 belgisi) bo‘ylab to‘g‘ri harakatlanayotgan Moviy avtomobil (B) birinchi o‘tadi. Qizil avtomobil (A) chapga burilayotgani sababli ro‘paradagi to‘g‘ri ketayotgan transportga yo‘l berishi shart.',
      rule: 'YHQ 13-bob, 98-band',
      svgScenario: 'priority' as const,
    },
    {
      id: 'signs',
      label: 'Yo‘l belgilari',
      query: '2.5 «STOP» belgisi oldida har doim to‘xtash kerakmi?',
      answer: 'Ha, 2.5 «To‘xtamasdan harakatlanish taqiqlangan» belgisi talabiga ko‘ra, chorraha mutlaqo bo‘sh bo‘lsa ham to‘xtash chizig‘i oldida avtomobil to‘liq to‘xtashi (0 km/soat) shart.',
      rule: 'YHQ 2.5 belgisi talabi',
    },
    {
      id: 'yhq2026',
      label: '2026 Yangi Qoidalar',
      query: 'Aholi punktlarida ruxsat etilgan maksimal tezlik qancha?',
      answer: 'Amaldagi Yo‘l harakati qoidalariga binoan barcha aholi punktlarida ruxsat etilgan eng yuqori tezlik soatiga 60 kilometr qilib belgilangan.',
      rule: 'YHQ 10-bob, 70-band',
    },
  ];

  // Auto-play demo effect on mount - looping through questions
  useEffect(() => {
    let isMounted = true;
    
    const runDemo = async () => {
      let currentIdx = 0;
      
      while (isMounted) {
        // 1. Wait before starting
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (!isMounted) break;

        // 2. Type the query
        const text = presets[currentIdx].query;
        for (let i = 0; i <= text.length; i++) {
          if (!isMounted) break;
          setPrompt(text.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        
        // 3. Pause at the end of typing
        await new Promise(resolve => setTimeout(resolve, 2500));
        if (!isMounted) break;

        // 4. Erase the query
        for (let i = text.length; i >= 0; i--) {
          if (!isMounted) break;
          setPrompt(text.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 25));
        }

        // 5. Short pause before next question
        await new Promise(resolve => setTimeout(resolve, 500));
        currentIdx = (currentIdx + 1) % presets.length;
      }
    };

    runDemo();
    
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || prompt;
    if (!text.trim()) return;

    setIsAnswering(true);
    setAiResponse(null);
    setTypedAnswer('');
    
    const matched = presets.find(
      (p) => p.query.toLowerCase().includes(text.toLowerCase())
    ) || presets[0];

    setTimeout(() => {
      setIsAnswering(false);
      setAiResponse({
        query: text,
        answer: matched.answer,
        rule: matched.rule,
        svgScenario: matched.svgScenario,
      });
      
      // Start typing animation for the answer
      setIsTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        setTypedAnswer(matched.answer.slice(0, i));
        i++;
        if (i > matched.answer.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 15);
    }, 1000);
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-4 sm:px-6 bg-transparent text-white flex flex-col items-center justify-center min-h-[100vh] overflow-hidden">
      {/* Decorative background elements specific to Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-blue-500/40 animate-pulse" />
        <div className="absolute top-[60%] right-[15%] w-3 h-3 rounded-full bg-indigo-500/30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="w-full max-w-[800px] mx-auto text-center space-y-10 relative z-10">
        {/* OpenAI Badge style callout */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-medium text-white/50 animate-in fade-in slide-in-from-top-4 duration-1000">
          <Sparkles className="w-3 h-3 text-emerald-400" />
          <span className="text-emerald-400/90 font-semibold">100% kafolatlangan</span>
          <span className="w-[1px] h-3 bg-white/10 mx-1" />
          <span>YHQ Imtihon natijasi uchun yangi o‘quv kursi</span>
        </div>

        {/* OpenAI Heading: "Prava imtihoniga AI bilan tayyorlaning" */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05] animate-in fade-in duration-1000">
            Prava imtihoniga <br /> AI bilan tayyorlaning
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-in fade-in duration-1000 delay-200">
            YHQ savollarini yeching, murakkab vaziyatlarni tahlil qiling va tushunmagan qoidalaringizni AI yordamida o‘rganing.
          </p>
        </div>

        {/* OpenAI Prompt Box - Live Demo Visual */}
        <div className="w-full text-left max-w-[720px] mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <div className="relative rounded-[24px] bg-[#212124] border border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.8)] transition-all p-4 sm:p-5 flex flex-col justify-between min-h-[120px]">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                <MessageSquare className="w-3.5 h-3.5 text-white/70" />
              </div>
              <div className="flex-1 text-white text-sm sm:text-base leading-relaxed">
                {prompt || <span className="text-white/40">Chorrahada kim birinchi o‘tadi? Yo‘l belgisini tahlil qiling...</span>}
                {!aiResponse && !isAnswering && prompt && <span className="inline-block w-1 h-4 bg-blue-500 ml-1 animate-pulse" />}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <span className="text-[11px] text-white/20 font-mono hidden sm:inline">
                AI platformasi imkoniyatlarini ko‘rib chiqing
              </span>
              <div className="ml-auto flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isAnswering ? 'bg-blue-500 animate-pulse' : 'bg-white/10 text-white/40'}`}>
                  <ArrowUp className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestion Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {presets.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setPrompt(item.query);
                handleSend(item.query);
              }}
              className="px-4 py-2 rounded-full text-xs font-normal border bg-black/40 border-white/[0.12] text-white/80 hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
