import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, BookOpen, AlertTriangle } from 'lucide-react';
import { IntersectionSvg } from './TrafficIllustration';

interface AppleHeroProps {
  onNavigate: (route: string) => void;
  theme?: 'light' | 'dark';
}

export const AppleHero: React.FC<AppleHeroProps> = ({ onNavigate, theme = 'light' }) => {
  const [activeScenario, setActiveScenario] = useState<'priority' | 'unregulated'>('priority');
  const isLight = theme === 'light';

  const scenarios = {
    priority: {
      question: "Bu chorrahada qaysi avtomobil birinchi o‘tadi?",
      svgType: 'priority' as const,
      correctText: "Moviy avtomobil (B)",
      reason: "Moviy avtomobil (B) 2.1 «Asosiy yo‘l» belgisi bo‘ylab to‘g‘ri harakatlanmoqda. Qizil avtomobil (A) ham asosiy yo‘lda bo‘lsa-da, chapga burilishda ro‘paradan to‘g‘ri kelayotgan (B) avtomobilga yo‘l berishi shart.",
      rule: "YHQ 13-bob, 98-band",
    },
    unregulated: {
      question: "Teng ahamiyatli chorrahada navbat qanday?",
      svgType: 'unregulated' as const,
      correctText: "Yashil avtomobil (C)",
      reason: "Belgilar bo‘lmaganda «o‘ng qo‘l qoidasi» amal qiladi: haydovchi o‘ng tomondan yaqinlashayotgan transportga yo‘l beradi. Moviy avtomobil o‘ngida Yashil avtomobil bor.",
      rule: "YHQ 13-bob, 102-band",
    },
  };

  const current = scenarios[activeScenario];

  return (
    <section id="hero" className={`relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden ${
      isLight ? 'bg-gradient-to-b from-[#FFFFFF] via-[#FBFBFD] to-[#FFFFFF]' : 'bg-[#000000]'
    }`}>
      {/* Subtle atmospheric ambient glow */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none ${
        isLight ? 'bg-[#0071E3]/8' : 'bg-[#2997FF]/10'
      }`} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Subtle pill badge */}
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-normal mb-6 ${
          isLight
            ? 'bg-black/[0.04] border border-black/[0.06] text-[#6E6E73]'
            : 'bg-white/[0.05] border border-white/[0.08] text-[#86868B]'
        }`}>
          <span className="text-[#0071E3] font-medium">Avtotest AI</span>
          <span>·</span>
          <span>Sun’iy intellekt bilan tayyorlaning</span>
        </div>

        {/* Cinematic Apple Typography */}
        <h1 className={`text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] max-w-4xl mx-auto ${
          isLight ? 'text-[#1D1D1F]' : 'text-white'
        }`}>
          Yodlamang.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071E3] to-[#00A3FF]">
            Tushunib o‘rganing.
          </span>
        </h1>

        {/* Crisp Subheading */}
        <p className={`mt-5 text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed ${
          isLight ? 'text-[#6E6E73]' : 'text-[#86868B]'
        }`}>
          Avtotest AI sizga test savollarini yechish, yo‘l belgilarini tushunish va murakkab chorrahalarni AI yordamida tahlil qilishda yordam beradi.
        </p>

        {/* CTA Pills */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={() => onNavigate('/app')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] transition-all cursor-pointer shadow-[0_4px_16px_rgba(0,113,227,0.25)]"
          >
            <span>AI bilan boshlash</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#how-it-works"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full text-sm font-normal transition-colors ${
              isLight
                ? 'text-[#1D1D1F] bg-black/[0.04] hover:bg-black/[0.08] border border-black/[0.08]'
                : 'text-[#86868B] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08]'
            }`}
          >
            Qanday ishlaydi
          </a>
        </div>

        <p className={`mt-3 text-xs ${isLight ? 'text-[#86868B]' : 'text-[#86868B]/80'}`}>
          Ro‘yxatdan o‘tish bepul · Karta talab qilinmaydi
        </p>

        {/* PRODUCT STAGE (Apple-grade clean viewport) */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className={`rounded-3xl border overflow-hidden ${
            isLight
              ? 'bg-[#FFFFFF] border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
              : 'bg-[#090C14] border-white/[0.1] shadow-[0_20px_60px_rgba(0,0,0,0.8)]'
          }`}>
            {/* Stage Bar */}
            <div className={`px-5 py-3.5 border-b flex items-center justify-between ${
              isLight ? 'bg-[#F5F5F7] border-black/[0.06]' : 'bg-white/[0.02] border-white/[0.06]'
            }`}>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0071E3]" />
                <span className={`text-xs font-medium ${isLight ? 'text-[#1D1D1F]' : 'text-white/90'}`}>
                  Avtotest AI Tahlil
                </span>
              </div>

              {/* Scenario Toggle */}
              <div className={`flex items-center p-0.5 rounded-lg border ${
                isLight ? 'bg-black/[0.05] border-black/[0.06]' : 'bg-white/[0.05] border-white/[0.08]'
              }`}>
                <button
                  onClick={() => setActiveScenario('priority')}
                  className={`px-3 py-1 rounded-md text-xs font-normal transition-all cursor-pointer ${
                    activeScenario === 'priority'
                      ? isLight
                        ? 'bg-white text-[#1D1D1F] shadow-sm font-medium'
                        : 'bg-white/10 text-white shadow-sm'
                      : isLight
                      ? 'text-[#6E6E73] hover:text-[#1D1D1F]'
                      : 'text-[#86868B] hover:text-white'
                  }`}
                >
                  Asosiy yo‘l
                </button>
                <button
                  onClick={() => setActiveScenario('unregulated')}
                  className={`px-3 py-1 rounded-md text-xs font-normal transition-all cursor-pointer ${
                    activeScenario === 'unregulated'
                      ? isLight
                        ? 'bg-white text-[#1D1D1F] shadow-sm font-medium'
                        : 'bg-white/10 text-white shadow-sm'
                      : isLight
                      ? 'text-[#6E6E73] hover:text-[#1D1D1F]'
                      : 'text-[#86868B] hover:text-white'
                  }`}
                >
                  Teng chorraha
                </button>
              </div>
            </div>

            {/* Stage Body */}
            <div className="p-5 sm:p-7 space-y-6 text-left">
              {/* Question */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#0071E3]">Imtihon savoli:</span>
                <h3 className={`text-base sm:text-lg font-medium ${isLight ? 'text-[#1D1D1F]' : 'text-white'}`}>
                  {current.question}
                </h3>
              </div>

              {/* Clean Vector SVG Intersection Graphic */}
              <div className={`rounded-2xl overflow-hidden border ${
                isLight ? 'border-black/[0.06] shadow-sm' : 'border-white/[0.06]'
              }`}>
                <IntersectionSvg scenario={current.svgType} theme={theme} className="max-h-[220px]" />
              </div>

              {/* Apple-style AI Insight Card */}
              <div className={`p-4 sm:p-5 rounded-2xl border space-y-3 ${
                isLight ? 'bg-[#F5F5F7] border-black/[0.06]' : 'bg-white/[0.03] border-white/[0.06]'
              }`}>
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-md w-fit">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>To‘g‘ri javob: {current.correctText}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-medium text-[#0071E3] flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Nima uchun?
                  </span>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isLight ? 'text-[#424245]' : 'text-[#A1A1A6]'
                  }`}>
                    {current.reason}
                  </p>
                </div>

                <div className={`pt-2 border-t flex items-center justify-between text-[11px] ${
                  isLight ? 'border-black/[0.06] text-[#6E6E73]' : 'border-white/[0.05] text-[#86868B]'
                }`}>
                  <span className="flex items-center gap-1 text-amber-800 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded font-mono">
                    <AlertTriangle className="w-3 h-3 text-amber-600" />
                    {current.rule}
                  </span>
                  <button
                    onClick={() => onNavigate('/app')}
                    className="text-[#0071E3] hover:underline cursor-pointer font-medium"
                  >
                    Barcha savollarni ko‘rish →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
