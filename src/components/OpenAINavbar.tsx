import React, { useState } from 'react';
import { Search, ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';

interface OpenAINavbarProps {
  onNavigate: (route: string) => void;
}

export const OpenAINavbar: React.FC<OpenAINavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { label: 'Imkoniyatlar', href: '#features' },
    { label: 'Kurs', href: '#kurs' },
    { label: 'Natijalarimiz', href: '#natijalar' },
    { label: 'Aloqa', href: '#aloqa' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000] border-b border-white/[0.08] transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        {/* Left: OpenAI style Logo & Main Nav */}
        <div className="flex items-center gap-8">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center tracking-tighter text-white font-bold text-lg hover:opacity-90 transition-opacity"
          >
            <span>Avtotest</span>
            <span className="font-extrabold tracking-normal ml-0.5">AI</span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[13px] text-white/80 font-normal">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white/70 hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Qidiruv"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </nav>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5">
          {/* Kirish dropdown pill */}
          <button
            onClick={() => onNavigate('/login')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-normal text-white/90 bg-[#18181b] hover:bg-[#27272a] border border-white/[0.12] transition-colors cursor-pointer"
          >
            <span>Kirish</span>
            <ChevronDown className="w-3 h-3 text-white/70" />
          </button>

          {/* Poprobovat ChatGPT style primary button - emphasizing COURSE */}
          <button
            onClick={() => {
              const el = document.getElementById('kurs');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-all cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
          >
            <span>Kursga yozilish</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 text-white/80 hover:text-white"
            aria-label="Menyu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Quick Search bar if opened */}
      {searchOpen && (
        <div className="border-t border-white/[0.08] bg-[#0c0c0e] px-6 py-2.5 flex items-center justify-between max-w-[1440px] mx-auto animate-in fade-in duration-150">
          <div className="flex items-center gap-2 flex-1 max-w-xl">
            <Search className="w-4 h-4 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="YHQ moddasi, chorraha yoki yo‘l belgisini qidiring..."
              className="bg-transparent text-xs text-white placeholder-white/40 focus:outline-none w-full"
              autoFocus
            />
          </div>
          <button
            onClick={() => setSearchOpen(false)}
            className="text-xs text-white/50 hover:text-white ml-4 cursor-pointer"
          >
            Yopish [Esc]
          </button>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#000000] border-b border-white/[0.1] px-6 py-4 space-y-3 animate-in fade-in duration-150">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-white/80 hover:text-white py-1"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/login');
              }}
              className="text-xs text-white/80 hover:text-white cursor-pointer"
            >
              Kirish
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/app');
              }}
              className="text-xs text-white font-medium hover:underline cursor-pointer"
            >
              Simulyatorni ochish →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
