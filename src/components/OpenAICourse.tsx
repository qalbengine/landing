import React from 'react';
import { ArrowUpRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface OpenAICourseProps {
  onNavigate: (route: string) => void;
}

export const OpenAICourse: React.FC<OpenAICourseProps> = ({ onNavigate }) => {
  const modules = [
    {
      num: "01",
      title: "YHQ Nazariyasi va Qoidalar Mantig‘i",
      desc: "28 ta mavzu bo‘yicha rasmiy qoidalar. Qonun moddalarining mazmuni oddiy va tushunarli tilda tahlil qilinadi.",
      duration: "12 dars · 4 soat",
    },
    {
      num: "02",
      title: "Chorrahalar va Yo‘l Belgilari Vizual Kursi",
      desc: "Tartibga solingan va teng ahamiyatli chorrahalar, svetofor signallari va «o‘ng qo‘l qoidasi»ni grafik simulyatsiya orqali tushunish.",
      duration: "8 dars · 3 soat",
    },
    {
      num: "03",
      title: "1,000+ Savolli Rasmiy Imtihon Simulyatori",
      desc: "Davlat YHQ test markazi formati bo‘yicha 20 ta savolli haqiqiy imtihon sinovi va har bir xatoga AI bergan batafsil izoh.",
      duration: "Cheksiz mashg‘ulot",
    },
  ];

  return (
    <section id="kurs" className="bg-[#000000]/30 text-white py-16 md:py-28 px-6 lg:px-10 border-t border-white/[0.08] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.1em] text-white/50 font-mono animate-float">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Qabul ochiq · A, B, C, D, E barcha toifalar
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
              Imtihon natijasini <br />
              <span className="text-white/40 italic">100% kafolatlang.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-lg">
              YHQ testlarini shunchaki yechish kifoya emas. Avtotest AI o‘quv kursi sizga har bir vaziyatning tub mantiqini o‘rgatadi va barcha toifalar (A, B, C, D, E) bo‘yicha birinchi urinishdayoq 20/20 natija olishingizni ta’minlaydi.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => onNavigate('/app')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-black bg-white hover:bg-neutral-200 transition-all cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.15)] group"
            >
              <span>Kursga yozilish</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <p className="text-[11px] text-center text-white/30">
              * Birinchi dars mutlaqo bepul
            </p>
          </div>
        </div>

        {/* 3 Course Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {modules.map((m, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#0c0c0e] border border-white/[0.08] hover:border-white/[0.2] transition-all p-7 sm:p-8 flex flex-col justify-between space-y-6 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-bold text-white/30 group-hover:text-white transition-colors">
                    {m.num}
                  </span>
                  <span className="text-[11px] font-mono text-white/50 bg-white/[0.05] border border-white/[0.08] px-2.5 py-0.5 rounded-full">
                    {m.duration}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-white/40 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white/60" />
                  AI tahlil bilan
                </span>
                <button
                  onClick={() => onNavigate('/app')}
                  className="text-white hover:underline cursor-pointer"
                >
                  Ochish →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
