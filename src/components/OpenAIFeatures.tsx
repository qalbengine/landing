import React from 'react';
import { ArrowUpRight, Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface OpenAIFeaturesProps {
  onNavigate: (route: string) => void;
}

export const OpenAIFeatures: React.FC<OpenAIFeaturesProps> = ({ onNavigate }) => {
  return (
    <section id="features" className="bg-[#000000]/50 text-white py-12 md:py-28 px-6 lg:px-10 border-t border-white/[0.08] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
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

        {/* OpenAI style grid for 4 features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: AI o‘qituvchi */}
          <div
            onClick={() => onNavigate('/app')}
            className="group relative rounded-3xl overflow-hidden bg-[#0c0d12] border border-white/[0.1] hover:border-white/[0.25] transition-all cursor-pointer min-h-[300px] flex flex-col justify-end p-7"
          >
            <div className="absolute top-6 left-6 w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="relative z-10 space-y-2">
              <h3 className="text-lg font-semibold text-white">AI o‘qituvchi</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                YHQ bo‘yicha savollarga istalgan vaqtda aniq javob oling. Murakkab qoidalarni oddiy tilda tushuntirib beradi.
              </p>
              <div className="pt-2 flex items-center gap-1 text-[11px] text-white/40 font-medium group-hover:text-white transition-colors">
                <span>Savol berish</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Card 2: Rasmli tahlil */}
          <div
            onClick={() => onNavigate('/app')}
            className="group relative rounded-3xl overflow-hidden bg-[#0c0d12] border border-white/[0.1] hover:border-white/[0.25] transition-all cursor-pointer min-h-[300px] flex flex-col justify-end p-7"
          >
            <div className="absolute top-6 left-6 w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-600/10 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="relative z-10 space-y-2">
              <h3 className="text-lg font-semibold text-white">Rasmli tahlil</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Chorraha va yo‘l vaziyatlarini vizual grafiklar orqali tahlil qiling. Ustuvorlikni AI yordamida aniqlang.
              </p>
              <div className="pt-2 flex items-center gap-1 text-[11px] text-white/40 font-medium group-hover:text-white transition-colors">
                <span>Vaziyatlarni ko‘rish</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Card 3: Testlar */}
          <div
            onClick={() => onNavigate('/app')}
            className="group relative rounded-3xl overflow-hidden bg-[#0c0d12] border border-white/[0.1] hover:border-white/[0.25] transition-all cursor-pointer min-h-[300px] flex flex-col justify-end p-7"
          >
            <div className="absolute top-6 left-6 w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-600/10 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="relative z-10 space-y-2">
              <h3 className="text-lg font-semibold text-white">Testlar</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Mavzular va rasmiy biletlar bo‘yicha bilimingizni tekshiring. 1000 dan ortiq real imtihon savollari bazasi.
              </p>
              <div className="pt-2 flex items-center gap-1 text-[11px] text-white/40 font-medium group-hover:text-white transition-colors">
                <span>Testni boshlash</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Card 4: Xatolar tahlili */}
          <div
            onClick={() => onNavigate('/app')}
            className="group relative rounded-3xl overflow-hidden bg-[#0c0d12] border border-white/[0.1] hover:border-white/[0.25] transition-all cursor-pointer min-h-[300px] flex flex-col justify-end p-7"
          >
            <div className="absolute top-6 left-6 w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-600/10 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="relative z-10 space-y-2">
              <h3 className="text-lg font-semibold text-white">Xatolar tahlili</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Noto‘g‘ri javoblaringizni AI tahlil qilib, zaif nuqtalaringizni ko‘rsatadi va ularni tuzatishga yordam beradi.
              </p>
              <div className="pt-2 flex items-center gap-1 text-[11px] text-white/40 font-medium group-hover:text-white transition-colors">
                <span>Xatolarni ko‘rish</span>
                <ArrowUpRight className="w-3 h-3" />
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
