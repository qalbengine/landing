import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Lock, Phone, Send, ArrowRight, ShieldCheck } from 'lucide-react';

interface LoginViewProps {
  onBack: () => void;
  onLoginSuccess: () => void;
  theme?: 'light' | 'dark';
}

export const LoginView: React.FC<LoginViewProps> = ({ onBack, onLoginSuccess, theme = 'light' }) => {
  const [authMethod, setAuthMethod] = useState<'phone' | 'telegram'>('phone');
  const [phone, setPhone] = useState('+998 ');
  const isLight = theme === 'light';

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden transition-colors ${
      isLight ? 'bg-[#F5F5F7] text-[#1D1D1F]' : 'bg-[#050912] text-white'
    }`}>
      {/* Background ambient light */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none ${
        isLight ? 'bg-[#0071E3]/8' : 'bg-gradient-to-r from-[#1677FF]/20 to-[#00B7FF]/15'
      }`} />

      {/* Back button */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 text-xs font-medium border px-3.5 py-2 rounded-full transition-colors cursor-pointer ${
            isLight
              ? 'bg-white border-black/[0.08] text-[#6E6E73] hover:text-[#1D1D1F] shadow-sm'
              : 'bg-[#0C1625] border-[#162A45] text-[#AAB7C8] hover:text-white'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Bosh sahifaga qaytish</span>
        </button>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        {/* Brand Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0071E3] to-[#2997FF] p-[1px] flex items-center justify-center shadow-[0_4px_16px_rgba(0,113,227,0.3)]">
            <div className={`w-full h-full rounded-[15px] flex items-center justify-center relative ${
              isLight ? 'bg-white' : 'bg-[#08111F]'
            }`}>
              <svg className="w-6 h-6 text-[#0071E3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
              <Sparkles className="w-3 h-3 text-[#0071E3] absolute top-1.5 right-1.5" />
            </div>
          </div>
        </div>

        <h2 className={`text-center text-2xl sm:text-3xl font-bold tracking-tight ${
          isLight ? 'text-[#1D1D1F]' : 'text-white'
        }`}>
          Avtotest AI tizimiga kirish
        </h2>
        <p className={`mt-2 text-center text-xs sm:text-sm ${
          isLight ? 'text-[#6E6E73]' : 'text-[#AAB7C8]'
        }`}>
          YHQ testlarini AI yordamida o‘rganishni davom ettiring
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        <div className={`py-8 px-6 sm:px-8 rounded-3xl border space-y-6 shadow-xl ${
          isLight
            ? 'bg-white border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.06)]'
            : 'bg-[#08111F] border-[#162A45]'
        }`}>
          {/* Method selector */}
          <div className={`grid grid-cols-2 gap-2 p-1 rounded-xl border ${
            isLight ? 'bg-[#F5F5F7] border-black/[0.06]' : 'bg-[#050912] border-[#162A45]'
          }`}>
            <button
              onClick={() => setAuthMethod('phone')}
              className={`py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                authMethod === 'phone'
                  ? 'bg-[#0071E3] text-white shadow-sm'
                  : isLight
                  ? 'text-[#6E6E73] hover:text-[#1D1D1F]'
                  : 'text-[#AAB7C8] hover:text-white'
              }`}
            >
              Telefon orqali
            </button>
            <button
              onClick={() => setAuthMethod('telegram')}
              className={`py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                authMethod === 'telegram'
                  ? 'bg-[#0071E3] text-white shadow-sm'
                  : isLight
                  ? 'text-[#6E6E73] hover:text-[#1D1D1F]'
                  : 'text-[#AAB7C8] hover:text-white'
              }`}
            >
              Telegram orqali
            </button>
          </div>

          {authMethod === 'phone' ? (
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${
                  isLight ? 'text-[#1D1D1F]' : 'text-slate-300'
                }`}>
                  Telefon raqamingiz
                </label>
                <div className="relative">
                  <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none ${
                    isLight ? 'text-[#86868B]' : 'text-slate-400'
                  }`}>
                    <Phone className="w-4 h-4 text-[#0071E3]" />
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+998 90 123 45 67"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none transition-colors ${
                      isLight
                        ? 'bg-[#F5F5F7] border-black/[0.08] text-[#1D1D1F] focus:border-[#0071E3]'
                        : 'bg-[#050912] border-[#162A45] text-white focus:border-[#00B7FF]'
                    }`}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl text-sm font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] shadow-[0_4px_16px_rgba(0,113,227,0.25)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>SMS kod olish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="space-y-4 text-center">
              <p className={`text-xs ${isLight ? 'text-[#6E6E73]' : 'text-[#AAB7C8]'}`}>
                Telegram botimiz orqali birgina chertish bilan xavfsiz kiring:
              </p>
              <button
                onClick={onLoginSuccess}
                className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-[#0088cc] hover:bg-[#0077b3] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Telegram orqali kirish</span>
              </button>
            </div>
          )}

          {/* Quick Demo Access */}
          <div className={`pt-4 border-t ${isLight ? 'border-black/[0.06]' : 'border-[#162A45]/80'}`}>
            <button
              onClick={onLoginSuccess}
              className={`w-full py-2.5 px-3 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                isLight
                  ? 'bg-black/[0.04] hover:bg-black/[0.08] text-[#0071E3] border border-black/[0.06]'
                  : 'text-[#00B7FF] bg-[#101C2D] hover:bg-[#162A45] border border-[#162A45]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tezkor demo hisob bilan kirish →</span>
            </button>
          </div>

          <div className={`flex items-center justify-center gap-1.5 text-[11px] ${
            isLight ? 'text-[#86868B]' : 'text-slate-400'
          }`}>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ma’lumotlaringiz shifrlangan va himoyalangan</span>
          </div>
        </div>
      </div>
    </div>
  );
};
