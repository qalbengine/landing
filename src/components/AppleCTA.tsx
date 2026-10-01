import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AppleCTAProps {
  onNavigate: (route: string) => void;
  theme?: 'light' | 'dark';
}

export const AppleCTA: React.FC<AppleCTAProps> = ({ onNavigate, theme = 'light' }) => {
  const isLight = theme === 'light';

  return (
    <section className={`py-24 md:py-32 relative overflow-hidden text-center border-t transition-colors ${
      isLight
        ? 'bg-gradient-to-b from-[#FFFFFF] via-[#F5F5F7] to-[#F5F5F7] border-black/[0.06]'
        : 'bg-[#000000] border-white/[0.06]'
    }`}>
      {/* Ambient center glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[140px] pointer-events-none ${
        isLight ? 'bg-[#0071E3]/10' : 'bg-[#0071E3]/20'
      }`} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        <h2 className={`text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight ${
          isLight ? 'text-[#1D1D1F]' : 'text-white'
        }`}>
          Imtihonga tayyorlanishni <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071E3] to-[#00A3FF]">
            bugunoq boshlang.
          </span>
        </h2>

        <p className={`text-base sm:text-lg max-w-xl mx-auto font-normal ${
          isLight ? 'text-[#6E6E73]' : 'text-[#86868B]'
        }`}>
          Savollarni yodlashdan ko‘ra, ularni tushunish osonroq va samaraliroq.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('/app')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] transition-all cursor-pointer shadow-[0_4px_24px_rgba(0,113,227,0.3)] hover:shadow-[0_6px_30px_rgba(0,113,227,0.4)]"
          >
            <span>AI bilan bepul boshlash</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className={`text-xs ${isLight ? 'text-[#86868B]' : 'text-[#86868B]'}`}>
          Ro‘yxatdan o‘tish bepul · Hech qanday to‘lov talab qilinmaydi
        </p>
      </div>
    </section>
  );
};
