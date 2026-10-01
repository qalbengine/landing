import React from 'react';

interface OpenAIFooterProps {
  onNavigate: (route: string) => void;
}

export const OpenAIFooter: React.FC<OpenAIFooterProps> = ({ onNavigate }) => {
  return (
    <footer id="about" className="bg-[#000000] text-white/60 text-xs py-16 px-6 lg:px-10 border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h5 className="text-white text-xs font-semibold">Tadqiqotlar</h5>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">YHQ modeli</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Vizual idrok tahlili</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Chorrahalar logikasi</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-white text-xs font-semibold">Mahsulotlar</h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('/app')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Avtotest AI Ilovasi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/app')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Imtihon Simulyatori
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/login')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Shaxsiy Kabinet
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-white text-xs font-semibold">Xavfsizlik</h5>
            <ul className="space-y-2">
              <li><span className="hover:text-white transition-colors cursor-pointer">YHQ 2026 qoidalari</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Avtomatlashtirilgan tekshiruv</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Davlat standartlari</span></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-white text-xs font-semibold">Kompaniya</h5>
            <ul className="space-y-2">
              <li><span className="hover:text-white transition-colors cursor-pointer">Biz haqimizda</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Yangiliklar</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Aloqa</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-white/40">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white/80">Avtotest AI</span>
            <span>© 2026</span>
            <span>·</span>
            <span>O‘zbekiston haydovchilik imtihoni sun’iy intellekt platformasi</span>
          </div>

          <div className="flex items-center gap-5">
            <span className="hover:text-white/80 transition-colors cursor-pointer">Maxfiylik siyosati</span>
            <span className="hover:text-white/80 transition-colors cursor-pointer">Foydalanish shartlari</span>
            <span className="hover:text-white/80 transition-colors cursor-pointer">Xavfsizlik</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
