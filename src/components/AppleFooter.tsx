import React from 'react';

interface AppleFooterProps {
  onNavigate?: (route: string) => void;
  theme?: 'light' | 'dark';
}

export const AppleFooter: React.FC<AppleFooterProps> = ({ onNavigate, theme = 'light' }) => {
  const isLight = theme === 'light';

  return (
    <footer className={`py-12 border-t text-xs transition-colors ${
      isLight ? 'bg-[#F5F5F7] border-black/[0.06] text-[#6E6E73]' : 'bg-[#000000] border-white/[0.08] text-[#86868B]'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className={`font-semibold ${isLight ? 'text-[#1D1D1F]' : 'text-white'}`}>Avtotest AI</span>
            <span>·</span>
            <span>O‘zbekiston haydovchilik imtihoni (YHQ) AI yordamchisi</span>
          </div>

          <div className={`flex items-center gap-5 ${isLight ? 'text-[#6E6E73]' : 'text-[#86868B]'}`}>
            <button
              onClick={() => onNavigate && onNavigate('/app')}
              className={`transition-colors cursor-pointer ${isLight ? 'hover:text-[#1D1D1F]' : 'hover:text-white'}`}
            >
              Ilova
            </button>
            <a href="#features" className={`transition-colors ${isLight ? 'hover:text-[#1D1D1F]' : 'hover:text-white'}`}>
              Imkoniyatlar
            </a>
            <a href="#how-it-works" className={`transition-colors ${isLight ? 'hover:text-[#1D1D1F]' : 'hover:text-white'}`}>
              Jarayon
            </a>
            <a href="#interactive" className={`transition-colors ${isLight ? 'hover:text-[#1D1D1F]' : 'hover:text-white'}`}>
              AI tahlil
            </a>
          </div>
        </div>

        <div className={`pt-4 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] ${
          isLight ? 'border-black/[0.06] text-[#86868B]' : 'border-white/[0.05] text-[#86868B]/80'
        }`}>
          <p>© 2026 Avtotest AI. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-4">
            <span>Maxfiylik siyosati</span>
            <span>·</span>
            <span>Foydalanish shartlari</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
