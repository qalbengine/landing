import React, { useState } from 'react';
import { ArrowLeft, Sparkles, CheckCircle2, XCircle, BookOpen, AlertCircle, RefreshCw, Send, ChevronRight, HelpCircle } from 'lucide-react';
import { IntersectionSvg } from './TrafficIllustration';

interface AppViewProps {
  onBack: () => void;
}

export const AppView: React.FC<AppViewProps> = ({ onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [chatQuestion, setChatQuestion] = useState('');
  const [chatLog, setChatLog] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: 'Salom! Men sizning shaxsiy Avtotest AI tyutoringizman. Ushbu savol bo‘yicha tushunmagan joyingizni so‘rang.',
    },
  ]);

  const questions = [
    {
      id: 1,
      topic: "Chorrahada harakatlanish (13-bob)",
      text: "Tartibga solinmagan chorrahada qaysi avtomobil birinchi bo‘lib o‘tish huquqiga ega?",
      hasSvg: true,
      svgType: 'priority' as const,
      options: [
        { key: 'A', text: "Qizil avtomobil (chapga burilmoqda)" },
        { key: 'B', text: "Moviy avtomobil (to‘g‘ri harakatlanmoqda)" },
        { key: 'C', text: "Yashil avtomobil (ikkinchi darajali yo‘lda)" },
      ],
      correctKey: 'B',
      explanation: "Moviy avtomobil 2.1 «Asosiy yo‘l» belgisi bo‘ylab to‘g‘ri ketmoqda. Qizil avtomobil ham asosiy yo‘lda bo‘lsa-da, qarama-qarshi kelayotgan to‘g‘ri harakatlanuvchi transportga chapga burilishda yo‘l berishi shart.",
      yhqArticle: "YHQ 98-band: «Asosiy yo‘lda chapga yoki qayrilib olishga burilayotgan haydovchi qarama-qarshi tomondan to‘g‘ri yoki o‘ngga harakatlanayotgan transportga yo‘l berishi shart».",
    },
    {
      id: 2,
      topic: "Teng ahamiyatli chorrahalar (13-bob)",
      text: "Teng ahamiyatli yo‘llar kesishuvida burilayotgan haydovchi kimlarga yo‘l berishi shart?",
      hasSvg: false,
      options: [
        { key: 'A', text: "Faqat orqadan kelayotgan transportga" },
        { key: 'B', text: "O‘ng tomondan yaqinlashayotgan har qanday transport vositasiga («O‘ng qo‘l qoidasi»)" },
        { key: 'C', text: "Faqat yuk avtomobillariga" },
      ],
      correctKey: 'B',
      explanation: "Teng ahamiyatli yo‘llar chorrahasida haydovchi o‘ng tomondan yaqinlashayotgan transport vositalariga yo‘l berishi shart.",
      yhqArticle: "YHQ 102-band: «Teng ahamiyatli yo‘llar chorrahasida tramvaysiz transport haydovchisi o‘ngdan yaqinlashayotgan transportga yo‘l berishi shart».",
    },
    {
      id: 3,
      topic: "Tezlik me’yorlari (10-bob)",
      text: "Aholi punktlarida yengil avtomobillarning ruxsat etilgan maksimal tezligi necha km/soat?",
      hasSvg: false,
      options: [
        { key: 'A', text: "70 km/soat" },
        { key: 'B', text: "60 km/soat (tegishli hududlarda 50 km/soat)" },
        { key: 'C', text: "80 km/soat" },
      ],
      correctKey: 'B',
      explanation: "Amaldagi qoidalarga ko‘ra, O‘zbekiston aholi punktlarida ruxsat etilgan maksimal tezlik 60 km/soat etib belgilangan.",
      yhqArticle: "YHQ 70-band: «Aholi punktlarida transport vositalarining harakat tezligi soatiga 60 kilometrdan oshmasligi kerak».",
    },
  ];

  const currentQ = questions[currentQuestionIndex];

  const handleSelectOption = (key: string) => {
    if (submitted) return;
    setSelectedOption(key);
  };

  const handleSubmit = () => {
    if (!selectedOption || submitted) return;
    setSubmitted(true);
    const isCorrect = selectedOption === currentQ.correctKey;
    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const handleNext = () => {
    setSelectedOption(null);
    setSubmitted(false);
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  const handleAskTutor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatQuestion.trim()) return;

    const userText = chatQuestion.trim();
    setChatLog((prev) => [...prev, { sender: 'user', text: userText }]);
    setChatQuestion('');

    setTimeout(() => {
      let reply = `Ushbu ${currentQ.topic} doirasida eslab qolish kerak: ${currentQ.explanation}`;
      if (userText.toLowerCase().includes('nega') || userText.toLowerCase().includes('nima uchun')) {
        reply = `Chunki ${currentQ.explanation} Bu talab bevosita ${currentQ.yhqArticle}`;
      }
      setChatLog((prev) => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#050912] text-white flex flex-col">
      {/* Top Bar in App Mode */}
      <header className="h-16 border-b border-[#162A45] bg-[#08111F]/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-semibold text-[#AAB7C8] hover:text-white bg-[#0C1625] hover:bg-[#101C2D] border border-[#162A45] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Bosh sahifaga qaytish</span>
          </button>
          <div className="h-4 w-[1px] bg-[#162A45] hidden sm:block" />
          <span className="text-sm font-bold text-white hidden sm:flex items-center gap-1.5">
            Avtotest <span className="text-[#00B7FF]">AI</span>
            <span className="text-[10px] text-[#AAB7C8] bg-[#101C2D] px-2 py-0.5 rounded border border-[#162A45]">
              Simulyator
            </span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs text-[#AAB7C8] flex items-center gap-2">
            <span>Natija:</span>
            <span className="font-mono font-bold text-emerald-400">
              {score.correct} / {score.total}
            </span>
          </div>

          <button
            onClick={() => setAiChatOpen(!aiChatOpen)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              aiChatOpen
                ? 'bg-[#00B7FF] text-[#050912]'
                : 'bg-[#1677FF] text-white shadow-sm hover:bg-[#00B7FF]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Tyutor Chat</span>
          </button>
        </div>
      </header>

      {/* Main App Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Exam Question & Simulator (Col 8) */}
        <div className={`${aiChatOpen ? 'lg:col-span-7' : 'lg:col-span-8'} space-y-6`}>
          {/* Question Card */}
          <div className="rounded-2xl bg-[#08111F] border border-[#162A45] p-6 sm:p-8 space-y-6 shadow-xl">
            {/* Header / Category */}
            <div className="flex items-center justify-between pb-3 border-b border-[#162A45]">
              <span className="text-xs font-semibold text-[#00B7FF]">
                {currentQ.topic}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Savol {currentQuestionIndex + 1} / {questions.length}
              </span>
            </div>

            {/* Question Text */}
            <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              {currentQ.text}
            </h2>

            {/* Optional SVG Graphic */}
            {currentQ.hasSvg && (
              <div className="max-w-md mx-auto">
                <IntersectionSvg scenario={currentQ.svgType} />
              </div>
            )}

            {/* Answer Options */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOption === opt.key;
                const isCorrect = opt.key === currentQ.correctKey;

                let btnStyle = 'bg-[#0C1625] border-[#162A45] text-slate-200 hover:border-[#00B7FF]/40';
                if (submitted) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-950/40 border-emerald-500/80 text-emerald-300';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-rose-950/40 border-rose-500/80 text-rose-300';
                  }
                } else if (isSelected) {
                  btnStyle = 'bg-[#101C2D] border-[#00B7FF] text-white shadow-[0_0_15px_rgba(0,183,255,0.2)]';
                }

                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSelectOption(opt.key)}
                    disabled={submitted}
                    className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#050912] border border-[#162A45] flex items-center justify-center text-xs font-bold font-mono">
                        {opt.key}
                      </span>
                      <span>{opt.text}</span>
                    </div>

                    {submitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    {submitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#162A45] flex items-center justify-between gap-4">
              {!submitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={!selectedOption}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#00B7FF] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-md cursor-pointer hover:opacity-95"
                >
                  Javobni tasdiqlash
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-[#101C2D] hover:bg-[#162A45] border border-[#00B7FF]/40 text-white font-semibold text-sm flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Keyingi savol</span>
                  <ChevronRight className="w-4 h-4 text-[#00B7FF]" />
                </button>
              )}

              <span className="text-xs text-slate-400">
                {!submitted ? 'To‘g‘ri javobni tanlang' : 'AI tahlili quyida berildi'}
              </span>
            </div>

            {/* AI Explanation Accordion / Reveal (After Submit) */}
            {submitted && (
              <div className="rounded-xl bg-[#0C1625] border border-[#00B7FF]/30 p-5 space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00B7FF]">
                  <Sparkles className="w-4 h-4" />
                  <span>Avtotest AI Batafsil Tushuntirish</span>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed">
                  {currentQ.explanation}
                </p>

                <div className="p-3 rounded-lg bg-[#050912] border border-[#162A45] text-xs text-amber-300 font-mono">
                  {currentQ.yhqArticle}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: AI Tutor Side Panel */}
        <div className={`${aiChatOpen ? 'lg:col-span-5' : 'lg:col-span-4'} space-y-6`}>
          <div className="rounded-2xl bg-[#08111F] border border-[#162A45] p-5 flex flex-col h-[580px] shadow-xl">
            {/* Panel Title */}
            <div className="pb-3 border-b border-[#162A45] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#1677FF] flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white">AI Tyutor</h3>
                  <p className="text-[10px] text-emerald-400">Onlayn maslahatchi</p>
                </div>
              </div>
              <button
                onClick={() => setChatLog([chatLog[0]])}
                className="text-[11px] text-slate-400 hover:text-white"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto py-3 space-y-3 pr-1 text-xs">
              {chatLog.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#1677FF] text-white ml-6 rounded-tr-sm'
                      : 'bg-[#0C1625] text-slate-200 border border-[#162A45] mr-4 rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Quick Prompts */}
            <div className="pt-2 border-t border-[#162A45] flex flex-wrap gap-1.5">
              <button
                onClick={() => setChatQuestion("Bu qoidani hayotiy misol bilan tushuntir")}
                className="text-[10px] text-[#AAB7C8] hover:text-white bg-[#0C1625] px-2 py-1 rounded border border-[#162A45]"
              >
                Hayotiy misol keltir
              </button>
              <button
                onClick={() => setChatQuestion("Boshqa variantlar nega xato?")}
                className="text-[10px] text-[#AAB7C8] hover:text-white bg-[#0C1625] px-2 py-1 rounded border border-[#162A45]"
              >
                Nega boshqalari xato?
              </button>
            </div>

            {/* Input Form */}
            <form onSubmit={handleAskTutor} className="pt-2 flex items-center gap-2">
              <input
                type="text"
                value={chatQuestion}
                onChange={(e) => setChatQuestion(e.target.value)}
                placeholder="Savol bering..."
                className="flex-1 bg-[#050912] border border-[#162A45] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00B7FF]"
              />
              <button
                type="submit"
                className="p-2 bg-[#1677FF] hover:bg-[#00B7FF] text-white rounded-xl cursor-pointer transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
