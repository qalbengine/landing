import React from 'react';
import { Sparkles, Camera, BookOpen, Target, ArrowRight } from 'lucide-react';

interface AppleBentoProps {
  onNavigate: (route: string) => void;
  theme?: 'light' | 'dark';
}

export const AppleBento: React.FC<AppleBentoProps> = ({ onNavigate, theme = 'light' }) => {
  const isLight = theme === 'light';

  const features = [
    {
      icon: Sparkles,
      tag: "AI Tyutor",
      title: "Savolingizni oddiy tilda tushuntiradi.",
      desc: "Tushunmagan joyingizni qayta izohlaydi, istalgan savolga 24/7 sabr bilan javob beradi.",
    },
    {
      icon: Camera,
      tag: "Vizual tahlil",
      title: "Chorraha va yo‘l belgilari tahlili.",
      desc: "Murakkab yo‘l vaziyatlarini, ustuvorlik belgilarini va svetofor signallarini bosqichma-bosqich ko‘rsatadi.",
    },
    {
      icon: BookOpen,
      tag: "YHQ 2026",
      title: "Qoidalarni mantiqan o‘rganing.",
      desc: "O‘zbekiston Respublikasi rasmiy yo‘l harakati qoidalarining to‘liq va yangilangan bazasi.",
    },
    {
      icon: Target,
      tag: "Individual",
      title: "Xatolaringiz ustida aniq ishlang.",
      desc: "Qaysi mavzularda ko‘proq adashayotganingizni aniqlab, faqat kerakli savollarni mashq qildiradi.",
    },
  ];

  return (
    <section id="features" className={`py-20 md:py-28 relative overflow-hidden ${
      isLight ? 'bg-[#FFFFFF]' : 'bg-[#000000]'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
            Imkoniyatlar
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mt-2 ${
            isLight ? 'text-[#1D1D1F]' : 'text-white'
          }`}>
            Bitta platformada — to‘liq bilim.
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${isLight ? 'text-[#6E6E73]' : 'text-[#86868B]'}`}>
            Imtihondan birinchi urinishda o‘tish uchun zarur bo‘lgan barcha imkoniyatlar bir joyda.
          </p>
        </div>

        {/* 4 Bento Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className={`group p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isLight
                    ? 'bg-[#F5F5F7] border-black/[0.06] hover:border-black/[0.12] hover:bg-[#F0F0F3] shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
                    : 'bg-[#090C14] border-white/[0.08] hover:border-white/[0.18]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-[#0071E3] group-hover:scale-105 transition-transform ${
                      isLight ? 'bg-white border border-black/[0.06] shadow-sm' : 'bg-white/[0.04] border border-white/[0.08]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-xs font-medium ${isLight ? 'text-[#6E6E73]' : 'text-[#86868B]'}`}>
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className={`text-xl font-semibold mb-2 leading-snug ${isLight ? 'text-[#1D1D1F]' : 'text-white'}`}>
                    {feat.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-[#6E6E73]' : 'text-[#86868B]'}`}>
                    {feat.desc}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t flex items-center justify-between ${
                  isLight ? 'border-black/[0.06]' : 'border-white/[0.04]'
                }`}>
                  <span className={`text-[11px] font-mono ${isLight ? 'text-[#86868B]' : 'text-[#86868B]'}`}>
                    0{idx + 1}
                  </span>
                  <button
                    onClick={() => onNavigate('/app')}
                    className="text-xs font-medium text-[#0071E3] flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>Sinab ko‘rish</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
