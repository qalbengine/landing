import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface OpenAICategoryBannerProps {
  onNavigate: (route: string) => void;
}

export const OpenAICategoryBanner: React.FC<OpenAICategoryBannerProps> = ({ onNavigate }) => {
  return (
    <section className="px-6 lg:px-10 py-12 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Banner Container - Styled like the user screenshot */}
        <div className="relative w-full rounded-[40px] bg-gradient-to-r from-[#1E50CE] to-[#2B66FF] overflow-hidden min-h-[320px] md:min-h-[380px] flex items-center shadow-2xl">
          
          {/* Decorative Background Shapes */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[140%] bg-white/20 blur-[80px] rounded-full rotate-12" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[120%] bg-blue-400/20 blur-[60px] rounded-full -rotate-12" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 w-full h-full items-center px-8 sm:px-16 py-12 gap-8">
            
            {/* Left Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                  A, B, C, D, E <br />
                  <span className="text-white/90">barcha toifalar</span>
                </h2>
                <p className="text-sm sm:text-base text-white/70 max-w-md leading-relaxed">
                  Barcha turdagi transport vositalari uchun mukammal tayyorgarlik va 100% imtihon kafolati.
                </p>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById('kurs');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FFD700] hover:bg-[#FFC800] text-black font-bold rounded-2xl transition-all shadow-xl active:scale-95 group"
              >
                <span>Toifalarni ko‘rish</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Side - Car Image & Floating Card */}
            <div className="relative flex justify-center lg:justify-end items-center h-full">
              {/* Car Image - Using a high-quality dark car image that matches the aesthetic */}
              <div className="relative w-full max-w-[500px] lg:max-w-none lg:w-[120%] lg:-mr-[10%] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform lg:translate-x-10">
                <img 
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Luxury Car"
                  className="w-full h-auto object-contain pointer-events-none"
                />
              </div>

              {/* Floating Glass Card - Just like the user screenshot */}
              <div className="absolute bottom-[10%] left-[-5%] sm:left-[10%] lg:left-0 bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-3xl flex items-center gap-4 shadow-2xl animate-float max-w-[240px] sm:max-w-[280px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-[#1E50CE] shrink-0">
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-semibold text-white leading-snug">
                    Imtihon natijasi 100% kafolatlangan o‘quv kursi
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
