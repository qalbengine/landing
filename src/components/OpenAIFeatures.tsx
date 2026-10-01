import React from 'react';
import { ArrowUpRight, Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface OpenAIFeaturesProps {
  onNavigate: (route: string) => void;
}

export const OpenAIFeatures: React.FC<OpenAIFeaturesProps> = ({ onNavigate }) => {
  return (
    <section id="features" className="bg-[#000000] text-white py-12 md:py-20 px-6 lg:px-10 border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section title (minimalist like OpenAI) */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs uppercase tracking-wider text-white/50 font-mono">
            Platforma imkoniyatlari
          </span>
          <button
            onClick={() => onNavigate('/app')}
            className="text-xs text-white/70 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Barcha modullarni ko‘rish</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* OpenAI style widescreen visual cards (matches the bottom cards in user screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Cosmic/Atmospheric visual card */}
          <div
            onClick={() => onNavigate('/app')}
            className="group relative rounded-3xl overflow-hidden bg-[#0c0d12] border border-white/[0.1] hover:border-white/[0.25] transition-all cursor-pointer min-h-[380px] flex flex-col justify-end p-8"
          >
            {/* Background night sky & cosmic visual */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1020] via-[#050811] to-[#000000] opacity-90" />
            
            {/* Star particles simulation */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-12 right-12 w-48 h-48 bg-[#0071E3]/20 rounded-full blur-[70px] pointer-events-none group-hover:scale-110 transition-transform duration-700" />

            {/* Subtle intersection wireframe diagram in background */}
            <div className="absolute top-8 left-8 right-8 h-44 rounded-2xl border border-white/[0.06] bg-black/40 p-4 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">Chorrahalar AI Tahlili</span>
                  <span className="text-[11px] text-white/50">Ustuvorlik, svetofor signallari va manevrlar</span>
                </div>
              </div>
            </div>

            {/* Content overlay */}
            <div className="relative z-10 space-y-2 mt-auto">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                Vizual Tahlil
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-white transition-colors">
                Chorrahalar va yo‘l belgilarining chuqur tahlili
              </h3>
              <p className="text-xs sm:text-sm text-white/60 max-w-md leading-relaxed">
                Shunchaki variant tanlamang. Nima uchun aynan shu transport birinchi o‘tishini, xavf nuqtalarini AI bilan tushuning.
              </p>
              <div className="pt-2 flex items-center gap-1 text-xs text-white font-medium group-hover:underline">
                <span>Sinab ko‘rish</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Card 2: Luminous orb / Solar graphic (matches right card in user screenshot) */}
          <div
            onClick={() => onNavigate('/app')}
            className="group relative rounded-3xl overflow-hidden bg-[#0c0d12] border border-white/[0.1] hover:border-white/[0.25] transition-all cursor-pointer min-h-[380px] flex flex-col justify-end p-8"
          >
            {/* Luminous yellow/white sun sphere in top corner like user screenshot */}
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-br from-amber-100 via-amber-300 to-amber-500 opacity-90 blur-[2px] shadow-[0_0_120px_rgba(251,191,36,0.6)] group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#05060a]/80 to-transparent" />

            {/* Content overlay */}
            <div className="relative z-10 space-y-2 mt-auto">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300/80">
                Rasmiy Baza · 2026
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-white transition-colors">
                O‘zbekiston YHQ rasmiy imtihon savollari
              </h3>
              <p className="text-xs sm:text-sm text-white/60 max-w-md leading-relaxed">
                Haqiqiy YHQ imtihonida tushadigan barcha 1000+ savollar, yangilangan jarimalar va qoidalar bazasi.
              </p>
              <div className="pt-2 flex items-center gap-1 text-xs text-white font-medium group-hover:underline">
                <span>Testlarni boshlash</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Third Banner: Minimalist statement below */}
        <div className="mt-8 rounded-3xl border border-white/[0.08] bg-[#0c0c0e] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Shaxsiy O‘rganish Modeli
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Har bir xatoni tahlil qiling va zaif mavzularni bartaraf eting.
            </h4>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Avtotest AI siz qaysi mavzularda adashayotganingizni aniqlaydi va sizga moslashtirilgan mashqlar rejasini taqdim etadi.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/app')}
            className="px-5 py-2.5 rounded-full text-xs font-medium text-black bg-white hover:bg-neutral-200 transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Bepul ro‘yxatdan o‘tish
          </button>
        </div>
      </div>
    </section>
  );
};
