import React, { useState } from 'react';
import { Send, Phone, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';

export const OpenAIContact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', contact: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.contact.trim() || !form.message.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="aloqa" className="bg-[#000000] text-white py-16 md:py-24 px-6 lg:px-10 border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-xl mb-12 space-y-2">
          <span className="text-xs uppercase tracking-wider text-white/50 font-mono">
            Bog‘lanish
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            Aloqa va Yordam.
          </h2>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            Avtotest AI platformasi, testlar bazasi yoki o‘quv kursi bo‘yicha savollaringiz bo‘lsa, biz sizga yordam berishga tayyormiz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left contact channels (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-3xl bg-[#0c0c0e] border border-white/[0.08] hover:border-white/[0.2] transition-all flex items-start gap-4 group block"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/[0.08] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <Send className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Telegram Rasmiy Bot</h4>
                <p className="text-xs text-white/50 leading-relaxed">
                  24/7 savollarga javob olish va YHQ yangiliklaridan xabardor bo‘lish:
                </p>
                <span className="text-xs text-white font-mono block pt-1 group-hover:underline">
                  @avtotest_ai_bot
                </span>
              </div>
            </a>

            <div className="p-6 rounded-3xl bg-[#0c0c0e] border border-white/[0.08] flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.08] flex items-center justify-center text-white shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Qo‘llab-quvvatlash telefoni</h4>
                <p className="text-xs text-white/50 leading-relaxed">
                  Dushanba — Shanba, 09:00 dan 19:00 gacha:
                </p>
                <span className="text-xs text-white font-mono block pt-1">
                  +998 (71) 200-00-44
                </span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#0c0c0e] border border-white/[0.08] flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.08] flex items-center justify-center text-white shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Elektron pochta</h4>
                <p className="text-xs text-white/50 leading-relaxed">
                  Takliflar va hamkorlik uchun:
                </p>
                <span className="text-xs text-white font-mono block pt-1">
                  support@avtotest.ai
                </span>
              </div>
            </div>
          </div>

          {/* Right contact message box (Col 7) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0c0c0e] border border-white/[0.08] p-7 sm:p-9 space-y-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-white" />
                <h3 className="text-base font-semibold text-white">
                  Bizga to‘g‘ridan-to‘g‘ri xabar qoldiring
                </h3>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/60 mb-1.5">
                        Ismingiz
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ismingiz"
                        className="w-full px-4 py-3 rounded-2xl bg-[#18181b] border border-white/[0.08] text-white text-xs placeholder-white/30 focus:outline-none focus:border-white/20 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1.5">
                        Telefon raqam yoki Telegram
                      </label>
                      <input
                        type="text"
                        value={form.contact}
                        onChange={(e) => setForm({ ...form, contact: e.target.value })}
                        placeholder="+998 90 ... yoki @username"
                        className="w-full px-4 py-3 rounded-2xl bg-[#18181b] border border-white/[0.08] text-white text-xs placeholder-white/30 focus:outline-none focus:border-white/20 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/60 mb-1.5">
                      Xabaringiz yoki savolingiz
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Savolingiz yoki taklifingizni yozing..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-2xl bg-[#18181b] border border-white/[0.08] text-white text-xs placeholder-white/30 focus:outline-none focus:border-white/20 transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-medium text-black bg-white hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    Xabarni yuborish
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-semibold text-white">
                    Xabaringiz qabul qilindi!
                  </h4>
                  <p className="text-xs text-white/60 max-w-sm mx-auto">
                    Mutaxassislarimiz tez orada siz bilan bog‘lanishadi.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', contact: '', message: '' });
                    }}
                    className="text-xs text-white/50 hover:text-white underline cursor-pointer pt-2 inline-block"
                  >
                    Yana xabar yuborish
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
