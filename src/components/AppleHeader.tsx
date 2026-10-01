import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Sun, Moon } from 'lucide-react';

interface AppleHeaderProps {
  onNavigate: (route: string) => void;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

export const AppleHeader: React.FC<AppleHeaderProps> = ({
  onNavigate,
  theme = 'light',
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Bosh sahifa', href: '#hero' },
    { label: 'Imkoniyatlar', href: '#features' },
    { label: 'Qanday ishlaydi', href: '#how-it-works' },
    { label: 'AI tahlil', href: '#interactive' },
  ];

  const isLight = theme === 'light';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isLight
            ? 'bg-white/85 backdrop-blur-2xl border-b border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
            : 'bg-[#000000]/80 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#0071E3] to-[#2997FF] flex items-center justify-center text-white shadow-[0_2px_10px_rgba(0,113,227,0.3)]">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className={`text-sm font-semibold tracking-tight ${isLight ? 'text-[#1D1D1F]' : 'text-white'}`}>
            Avtotest <span className="text-[#0071E3]">AI</span>
          </span>
        </a>

        {/* Minimal Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs font-normal transition-colors ${
                isLight ? 'text-[#6E6E73] hover:text-[#1D1D1F]' : 'text-[#86868B] hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              title={isLight ? "Tungi rejimga o'tish" : "Kunduzgi rejimga o'tish"}
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                isLight
                  ? 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-black/[0.05]'
                  : 'text-[#86868B] hover:text-white hover:bg-white/[0.1]'
              }`}
            >
              {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-300" />}
            </button>
          )}

          <button
            onClick={() => onNavigate('/login')}
            className={`text-xs font-normal transition-colors px-2 py-1 cursor-pointer ${
              isLight ? 'text-[#6E6E73] hover:text-[#1D1D1F]' : 'text-[#86868B] hover:text-white'
            }`}
          >
            Kirish
          </button>

          <button
            onClick={() => onNavigate('/app')}
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] transition-all cursor-pointer shadow-[0_2px_10px_rgba(0,113,227,0.25)]"
          >
            Boshlash
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className={`p-1.5 rounded-full ${
                isLight ? 'text-[#6E6E73] hover:bg-black/[0.05]' : 'text-[#86868B] hover:bg-white/[0.1]'
              }`}
            >
              {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-300" />}
            </button>
          )}

          <button
            onClick={() => onNavigate('/app')}
            className="px-3 py-1 text-xs font-medium text-white bg-[#0071E3] rounded-full"
          >
            Boshlash
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 ${isLight ? 'text-[#6E6E73] hover:text-[#1D1D1F]' : 'text-[#86868B] hover:text-white'}`}
            aria-label="Menyu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-5 space-y-3 ${
            isLight
              ? 'bg-white/95 backdrop-blur-2xl border-b border-black/[0.08]'
              : 'bg-[#000000]/95 backdrop-blur-2xl border-b border-white/[0.08]'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm py-1 ${
                isLight ? 'text-[#6E6E73] hover:text-[#1D1D1F]' : 'text-[#86868B] hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className={`pt-3 border-t flex items-center justify-between ${
            isLight ? 'border-black/[0.06]' : 'border-white/[0.08]'
          }`}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/login');
              }}
              className={`text-xs ${isLight ? 'text-[#6E6E73]' : 'text-[#86868B]'}`}
            >
              Kirish
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/app');
              }}
              className="text-xs text-[#0071E3] font-medium"
            >
              Bepul boshlash →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
