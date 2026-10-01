import React from 'react';
import { CheckCircle2, TrendingUp, Award, Clock, ArrowUpRight } from 'lucide-react';

interface OpenAIResultsProps {
  onNavigate: (route: string) => void;
}

export const OpenAIResults: React.FC<OpenAIResultsProps> = ({ onNavigate }) => {
  const stats = [
    {
      value: "98.4%",
      label: "1-urinishda muvaffaqiyat",
      desc: "Avtotest AI bilan tayyorlangan o‘quvchilarning rasmiy YHQ imtihonidan birinchi marta o‘tish ko‘rsatkichi.",
      icon: TrendingUp,
    },
    {
      value: "15 daqiqa",
      label: "O‘rtacha kunlik mashg‘ulot",
      desc: "Kuniga bor-yo‘g‘i 15 daqiqa muntazam mashq qilish orqali butun YHQ qoidalarini to‘liq o‘zlashtirish.",
      icon: Clock,
    },
    {
      value: "1,000+",
      label: "Rasmiy test savollari",
      desc: "Davlat YHQ bazasidagi barcha savollar AI izohlari va qoidalar mantig‘i bilan to‘liq tahlil qilingan.",
      icon: Award,
    },
    {
      value: "3x",
      label: "Tezroq eslab qolish",
      desc: "Ko‘r-ko‘rona yodlashga qaraganda mantiqiy tushunish orqali qoidalar 3 barobar tezroq xotirada qoladi.",
      icon: CheckCircle2,
    },
  ];

  const recentResults = [
    {
      name: "Sardorbek M.",
      city: "Toshkent shahri",
      score: "20 / 20",
      status: "1-urinishda muvaffaqiyatli",
      date: "Kecha, 14:20",
      comment: "Chorrahalarda doim adashar edim. AI qoidaning tub mohiyatini ko‘rsatib bergani sababli 10 daqiqada 20/20 yechdim.",
    },
    {
      name: "Malika K.",
      city: "Samarqand viloyati",
      score: "20 / 20",
      status: "1-urinishda muvaffaqiyatli",
      date: "2 kun oldin",
      comment: "Avval boshqa dasturlarda javoblarni yodlardim, testda esa savol o‘zgarib qolsa adashardim. Avtotest AI tushunishga o‘rgatdi.",
    },
    {
      name: "Jasurbek B.",
      city: "Farg‘ona",
      score: "19 / 20",
      status: "1-urinishda muvaffaqiyatli",
      date: "3 kun oldin",
      comment: "STOP belgilari va quvib o‘tish qoidalarini AI bilan 2 kunda to‘liq tushunib oldim. Tavsiya qilaman!",
    },
  ];

  return (
    <section id="natijalar" className="bg-[#000000] text-white py-16 md:py-24 px-6 lg:px-10 border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-wider text-white/50 font-mono">
              Natijalarimiz
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
              Raqamlar gapirsin.
            </h2>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Bizning asosiy maqsadimiz — shunchaki test yechtirish emas, sizni birinchi urinishdayoq haydovchilik guvohnomasiga ega bo‘lishingizni ta’minlash.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/app')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-medium text-black bg-white hover:bg-neutral-200 transition-colors cursor-pointer w-fit"
          >
            <span>O‘z natijangizni sinab ko‘ring</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Big Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#0c0c0e] border border-white/[0.08] hover:border-white/[0.2] transition-all p-7 sm:p-8 flex flex-col justify-between space-y-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
                    {s.value}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white/[0.06] flex items-center justify-center text-white/70">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-sm font-semibold text-white">
                    {s.label}
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Real Passing Verification Cards */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-white/40 font-mono">
              O‘quvchilarimiz natijalari
            </span>
            <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Real imtihon sinovlari
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentResults.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#0c0c0e] border border-white/[0.08] hover:border-white/[0.2] transition-all p-7 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {item.name}
                      </h4>
                      <span className="text-[11px] text-white/40">
                        {item.city}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-base font-bold font-mono text-emerald-400 block">
                        {item.score}
                      </span>
                      <span className="text-[10px] text-emerald-400/80 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full inline-block">
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed italic">
                    “{item.comment}”
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-white/40">
                  <span>{item.date}</span>
                  <span className="text-white/60">YHQ 2026 Testi</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Box: Old Memorization vs Avtotest AI */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#0c0c0e] p-8 sm:p-10">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">
            An’anaviy yodlash va Avtotest AI tahlili farqi:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400">
                An’anaviy yodlash usuli
              </span>
              <ul className="text-xs text-white/60 space-y-2 leading-relaxed">
                <li>• Faqat to‘g‘ri javob harfini yodlashga asoslanadi</li>
                <li>• Savol biroz o‘zgartirilsa imtihonda xato qilish ehtimoli 40%+</li>
                <li>• Real chorrahada qoida esdan chiqib qoladi</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.04] border border-emerald-500/30 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Avtotest AI tushunish usuli
              </span>
              <ul className="text-xs text-white/80 space-y-2 leading-relaxed">
                <li>• Har bir javobning «nima uchun» ekanligini mantiqan o‘rganish</li>
                <li>• Qayta topshirishsiz 1-urinishdayoq 98.4% natija</li>
                <li>• Real hayotda xavfsiz va ishonchli haydash ko‘nikmasi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
