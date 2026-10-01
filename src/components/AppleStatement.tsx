import React from 'react';
import { X, Check } from 'lucide-react';

interface AppleStatementProps {
  theme?: 'light' | 'dark';
}

export const AppleStatement: React.FC<AppleStatementProps> = ({ theme = 'light' }) => {
  const isLight = theme === 'light';

  return (
    <section className={`py-20 md:py-28 relative overflow-hidden border-t ${
      isLight ? 'bg-[#F5F5F7] border-black/[0.06]' : 'bg-[#000000] border-white/[0.06]'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Apple Statement Headline */}
        <h2 className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${
          isLight ? 'text-[#1D1D1F]' : 'text-white'
        }`}>
          Testni shunchaki yodlash — yetarli emas.{' '}
          <span className={isLight ? 'text-[#6E6E73]' : 'text-[#86868B]'}>
            Chunki real yo‘lda tayyor variantlar bo‘lmaydi. Avtotest AI har bir qoida ortidagi sababni tushuntiradi.
          </span>
        </h2>

        {/* 2 Clean Comparison Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          {/* Old Method */}
          <div className={`p-6 sm:p-7 rounded-3xl space-y-3 ${
            isLight
              ? 'bg-[#FFFFFF] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
              : 'bg-[#090C14] border border-white/[0.06]'
          }`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isLight ? 'bg-rose-50 text-rose-500' : 'bg-rose-500/10 text-rose-400'
            }`}>
              <X className="w-4 h-4 stroke-[2.5]" />
            </div>
            <h3 className={`text-base font-semibold ${isLight ? 'text-[#1D1D1F]' : 'text-white'}`}>
              An’anaviy yodlash
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-[#6E6E73]' : 'text-[#86868B]'}`}>
              Javob kalitini ko‘r-ko‘rona yodlaysiz, ammo savol biroz boshqacha berilsa adashasiz. Qoidani real vaziyatga qo‘llash qiyin bo‘ladi.
            </p>
          </div>

          {/* Avtotest AI Method */}
          <div className={`p-6 sm:p-7 rounded-3xl space-y-3 ${
            isLight
              ? 'bg-[#FFFFFF] border-2 border-[#0071E3]/35 shadow-[0_8px_30px_rgba(0,113,227,0.08)]'
              : 'bg-[#090C14] border border-[#2997FF]/30 shadow-[0_0_30px_rgba(41,151,255,0.08)]'
          }`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isLight ? 'bg-blue-50 text-[#0071E3]' : 'bg-[#2997FF]/10 text-[#2997FF]'
            }`}>
              <Check className="w-4 h-4 stroke-[2.5]" />
            </div>
            <h3 className={`text-base font-semibold ${isLight ? 'text-[#1D1D1F]' : 'text-white'}`}>
              Avtotest AI tahlili
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-[#424245]' : 'text-[#A1A1A6]'}`}>
              AI nima uchun aynan shu javob to‘g‘riligini, boshqa mashinalar qachon o‘tishini va amaldagi YHQ moddasini aniq izohlab beradi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
