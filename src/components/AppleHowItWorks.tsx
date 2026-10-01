import React from 'react';

interface AppleHowItWorksProps {
  theme?: 'light' | 'dark';
}

export const AppleHowItWorks: React.FC<AppleHowItWorksProps> = ({ theme = 'light' }) => {
  const isLight = theme === 'light';

  const steps = [
    {
      num: "01",
      title: "Savolni tanlang",
      desc: "Imtihon testini tanlang yoki istalgan chorraha va yo‘l belgisi haqida AI'dan so‘rang.",
    },
    {
      num: "02",
      title: "AI tahlilini ko‘ring",
      desc: "Sun’iy intellekt qoidani, avtomobillar navbatini va YHQ moddasini soniyalarda ko‘rsatadi.",
    },
    {
      num: "03",
      title: "Tushunib eslab qoling",
      desc: "Nima uchun aynan shu javob to‘g‘riligini mantiqan anglaysiz va imtihonda adashmaysiz.",
    },
  ];

  return (
    <section id="how-it-works" className={`py-20 md:py-28 relative overflow-hidden border-t ${
      isLight ? 'bg-[#FFFFFF] border-black/[0.06]' : 'bg-[#000000] border-white/[0.06]'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-left">
        <div className="max-w-xl mb-12">
          <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
            Ishlash jarayoni
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mt-2 ${
            isLight ? 'text-[#1D1D1F]' : 'text-white'
          }`}>
            3 oddiy qadam.
          </h2>
          <p className={`mt-2 text-sm ${isLight ? 'text-[#6E6E73]' : 'text-[#86868B]'}`}>
            Murakkab YHQ qoidalarini bir necha daqiqada o‘zlashtirish usuli.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl border space-y-4 transition-all duration-300 ${
                isLight
                  ? 'bg-[#F5F5F7] border-black/[0.06] hover:border-black/[0.12] hover:bg-[#F0F0F3] shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
                  : 'bg-[#090C14] border-white/[0.08] hover:border-white/[0.18]'
              }`}
            >
              <span className="text-3xl font-bold font-mono text-[#0071E3]">
                {step.num}
              </span>
              <h3 className={`text-lg font-semibold ${isLight ? 'text-[#1D1D1F]' : 'text-white'}`}>
                {step.title}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-[#6E6E73]' : 'text-[#86868B]'}`}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
