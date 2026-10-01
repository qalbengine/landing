import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface AppleInteractiveProps {
  onNavigate: (route: string) => void;
  theme?: 'light' | 'dark';
}

export const AppleInteractive: React.FC<AppleInteractiveProps> = ({ onNavigate, theme = 'light' }) => {
  const [activeItem, setActiveItem] = useState(0);
  const isLight = theme === 'light';

  const topics = [
    {
      title: "Chorrahada ustuvorlik",
      badge: "13-bob",
      question: "Qaysi transport vositasi birinchi o‘tish huquqiga ega?",
      answer: "Asosiy yo‘lda to‘g‘ri harakatlanayotgan transport ustunlikka ega. Chapga burilayotgan transport esa ro‘paradan kelayotganga yo‘l berishi shart.",
      citation: "YHQ 98-band",
    },
    {
      title: "STOP 2.5 belgisi",
      badge: "Imtiyoz",
      question: "Chorrahada hech kim bo‘lmasa ham to‘xtash shartmi?",
      answer: "Ha, qatnov qismi mutlaqo bo‘sh bo‘lsa ham, transport g‘ildiraklari stop-chizig‘i oldida to‘liq (0 km/soat) to‘xtashi shart.",
      citation: "YHQ 2.5 belgisi talabi",
    },
    {
      title: "Quvib o‘tish cheklovi",
      badge: "Xavfsizlik",
      question: "Piyodalar o‘tish joyida quvib o‘tish mumkinmi?",
      answer: "Piyodalar o‘tish joylarida piyodalar bor yoki yo‘qligidan qat’i nazar, quvib o‘tish qat’iyan man etiladi.",
      citation: "YHQ 77-band",
    },
    {
      title: "Aholi punktida tezlik",
      badge: "10-bob",
      question: "Maksimal ruxsat etilgan tezlik necha km/soat?",
      answer: "Aholi punktlarida 60 km/soat (tegishli zonalarda 50 km/soat), shahar tashqarisida 100 km/soat, avtomagistralda 110 km/soat.",
      citation: "YHQ 70-band",
    },
  ];

  const current = topics[activeItem];

  return (
    <section id="interactive" className={`py-20 md:py-28 relative overflow-hidden border-t ${
      isLight ? 'bg-[#F5F5F7] border-black/[0.06]' : 'bg-[#000000] border-white/[0.06]'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
            AI Tahlil Tajribasi
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${
            isLight ? 'text-[#1D1D1F]' : 'text-white'
          }`}>
            Savol berish va tushunish.
          </h2>
          <p className={`text-xs sm:text-sm ${isLight ? 'text-[#6E6E73]' : 'text-[#86868B]'}`}>
            Mavzuni tanlang va Avtotest AI tahlili qanday ishlashini ko‘ring.
          </p>
        </div>

        {/* Minimal Topic Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {topics.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setActiveItem(idx)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeItem === idx
                  ? 'bg-[#0071E3] text-white shadow-sm'
                  : isLight
                  ? 'bg-white text-[#6E6E73] hover:text-[#1D1D1F] border border-black/[0.06] shadow-sm'
                  : 'bg-white/[0.05] text-[#86868B] hover:text-white border border-white/[0.08]'
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>

        {/* Apple Clean Answer Box */}
        <div className={`p-7 sm:p-9 rounded-3xl border space-y-6 ${
          isLight
            ? 'bg-[#FFFFFF] border-black/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.05)]'
            : 'bg-[#090C14] border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
        }`}>
          <div className={`flex items-center justify-between pb-4 border-b ${
            isLight ? 'border-black/[0.06]' : 'border-white/[0.06]'
          }`}>
            <span className="text-xs font-mono text-[#0071E3] bg-[#0071E3]/10 px-2.5 py-0.5 rounded-full border border-[#0071E3]/20">
              {current.badge}
            </span>
            <span className={`text-[11px] ${isLight ? 'text-[#6E6E73]' : 'text-[#86868B]'}`}>
              Avtotest AI Engine
            </span>
          </div>

          <div className="space-y-2">
            <span className={`text-xs ${isLight ? 'text-[#86868B]' : 'text-[#86868B]'}`}>Savol:</span>
            <h3 className={`text-lg sm:text-xl font-medium ${isLight ? 'text-[#1D1D1F]' : 'text-white'}`}>
              “{current.question}”
            </h3>
          </div>

          <div className={`p-5 rounded-2xl border space-y-3 ${
            isLight ? 'bg-[#F5F5F7] border-black/[0.04]' : 'bg-white/[0.03] border-white/[0.06]'
          }`}>
            <div className="flex items-center gap-2 text-xs font-medium text-[#0071E3]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Tahlili & Xulosa:</span>
            </div>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-[#424245]' : 'text-[#A1A1A6]'}`}>
              {current.answer}
            </p>
            <p className="text-xs font-mono text-amber-800 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded w-fit pt-1">
              📌 {current.citation}
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs">
            <span className={isLight ? 'text-[#6E6E73]' : 'text-[#86868B]'}>
              Barcha 1,000+ imtihon savollari ilovada
            </span>
            <button
              onClick={() => onNavigate('/app')}
              className="text-[#0071E3] hover:underline flex items-center gap-1 font-medium cursor-pointer"
            >
              <span>Ilovani ochish</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
