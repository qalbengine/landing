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
    <section id="kurs" className="bg-[#000000] text-white py-16 md:py-24 px-6 lg:px-10 border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-wider text-white/50 font-mono">
              O‘quv dasturi
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
              Imtihondan 1-urinishda o‘tish kursi.
            </h2>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Yodlashga vaqt sarflamang. Avtotest AI o‘quv kursi har bir qoidani hayotiy misollar va mantiq bilan tushuntiradi.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/app')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-medium text-black bg-white hover:bg-neutral-200 transition-colors cursor-pointer w-fit"
          >
            <span>Kursni bepul boshlash</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Course Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
