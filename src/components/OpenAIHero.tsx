import React, { useState } from 'react';
import { ArrowUp, Sparkles, CheckCircle2, BookOpen, AlertTriangle, RefreshCw } from 'lucide-react';
import { IntersectionSvg } from './TrafficIllustration';

interface OpenAIHeroProps {
  onNavigate: (route: string) => void;
}

export const OpenAIHero: React.FC<OpenAIHeroProps> = ({ onNavigate }) => {
  const [prompt, setPrompt] = useState('');
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [isAnswering, setIsAnswering] = useState(false);
  const [aiResponse, setAiResponse] = useState<{
    query: string;
    answer: string;
    rule: string;
    svgScenario?: 'priority' | 'unregulated';
  } | null>(null);

  const presets = [
    {
      id: 'chat',
      label: 'Avtotest AI bilan suhbat',
      query: 'Chorrahada qaysi avtomobil birinchi o‘tadi?',
      answer: 'Asosiy yo‘l (2.1 belgisi) bo‘ylab to‘g‘ri harakatlanayotgan Moviy avtomobil (B) birinchi o‘tadi. Qizil avtomobil (A) chapga burilayotgani sababli ro‘paradagi to‘g‘ri ketayotgan transportga yo‘l berishi shart.',
      rule: 'YHQ 13-bob, 98-band',
      svgScenario: 'priority' as const,
    },
    {
      id: 'priority',
      label: 'Chorrahada ustuvorlik',
      query: 'Teng ahamiyatli chorrahada harakatlanish navbati qanday?',
      answer: 'Belgilar va svetofor bo‘lmaganda «o‘ng qo‘l qoidasi» qo‘llaniladi: haydovchi o‘ng tomondan yaqinlashayotgan har qanday transportga yo‘l berishi shart.',
      rule: 'YHQ 13-bob, 102-band',
      svgScenario: 'unregulated' as const,
    },
    {
      id: 'signs',
      label: 'Yo‘l belgilari tahlili',
      query: '2.5 «STOP» belgisi oldida har doim to‘xtash kerakmi?',
      answer: 'Ha, 2.5 «To‘xtamasdan harakatlanish taqiqlangan» belgisi talabiga ko‘ra, chorraha mutlaqo bo‘sh bo‘lsa ham to‘xtash chizig‘i oldida avtomobil to‘liq to‘xtashi (0 km/soat) shart.',
      rule: 'YHQ 2.5 belgisi talabi',
    },
    {
      id: 'yhq2026',
      label: '2026 Yangi YHQ',
      query: 'Aholi punktlarida ruxsat etilgan maksimal tezlik qancha?',
      answer: 'Amaldagi Yo‘l harakati qoidalariga binoan barcha aholi punktlarida ruxsat etilgan eng yuqori tezlik soatiga 60 kilometr qilib belgilangan.',
      rule: 'YHQ 10-bob, 70-band',
    },
    {
      id: 'more',
      label: 'Batafsil',
      query: 'Piyodalar o‘tish joyida quvib o‘tish taqiqlanadimi?',
      answer: 'Piyodalar o‘tish joylarida — piyodalar bor yoki yo‘qligidan qat’i nazar, transport vositalarini quvib o‘tish qat’iyan man etiladi.',
      rule: 'YHQ 11-bob, 77-band',
    },
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || prompt;
    if (!text.trim()) return;

    setIsAnswering(true);
    const matched = presets.find(
      (p) => p.query.toLowerCase().includes(text.toLowerCase()) || text.toLowerCase().includes(p.label.toLowerCase())
    ) || presets[0];

    setTimeout(() => {
      setAiResponse({
        query: text,
        answer: matched.answer,
        rule: matched.rule,
        svgScenario: matched.svgScenario,
      });
      setIsAnswering(false);
    }, 450);
  };

  const handleSelectPreset = (preset: typeof presets[0]) => {
    setActivePreset(preset.id);
    setPrompt(preset.query);
    handleSend(preset.query);
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 sm:px-6 bg-[#000000] text-white flex flex-col items-center justify-center min-h-[82vh]">
      <div className="w-full max-w-[720px] mx-auto text-center space-y-7">
        {/* OpenAI Heading: "Sizga nima bilan yordam bera olaman?" */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
          Sizga nima bilan yordam bera olaman?
        </h1>

        {/* OpenAI Prompt Box (Centered Wide Box with circular Up Arrow) */}
        <div className="w-full text-left">
          <div className="relative rounded-[24px] bg-[#212124] border border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.8)] focus-within:border-white/[0.22] transition-all p-4 sm:p-5 flex flex-col justify-between min-h-[120px]">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Chorrahada kim birinchi o‘tadi? Yo‘l belgisini tahlil qiling..."
              className="w-full bg-transparent text-white placeholder-white/40 text-sm sm:text-base resize-none focus:outline-none leading-relaxed"
              rows={2}
            />

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-white/35 font-mono hidden sm:inline">
                Enter ↵ orqali so‘rang
              </span>
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => handleSend()}
                  disabled={!prompt.trim() && !isAnswering}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    prompt.trim()
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-white/10 text-white/40 cursor-not-allowed'
                  }`}
                  aria-label="Yuborish"
                >
                  <ArrowUp className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestion Chips (Exact replica of OpenAI pill rows) */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {presets.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelectPreset(item)}
              className={`px-4 py-2 rounded-full text-xs font-normal transition-all cursor-pointer border ${
                activePreset === item.id
                  ? 'bg-white/15 border-white/30 text-white'
                  : 'bg-black/40 border-white/[0.12] text-white/80 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.2]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Live OpenAI Response Container (when user interacts) */}
        {aiResponse && (
          <div className="w-full rounded-2xl bg-[#18181b] border border-white/[0.1] p-6 text-left space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-medium text-white">Avtotest AI Tahlili</span>
              </div>
              <button
                onClick={() => setAiResponse(null)}
                className="text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
              >
                Tozalash
              </button>
            </div>

            {/* User query echo */}
            <p className="text-xs text-white/50">
              Savol: “<span className="text-white/80">{aiResponse.query}</span>”
            </p>

            {/* Optional SVG Graphic */}
            {aiResponse.svgScenario && (
              <div className="rounded-xl overflow-hidden border border-white/[0.08] max-w-md mx-auto">
                <IntersectionSvg scenario={aiResponse.svgScenario} theme="dark" className="max-h-[190px]" />
              </div>
            )}

            {/* Answer */}
            <p className="text-sm leading-relaxed text-white/90">
              {aiResponse.answer}
            </p>

            <div className="pt-2 flex items-center justify-between text-xs text-white/60">
              <span className="font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                📌 {aiResponse.rule}
              </span>
              <button
                onClick={() => onNavigate('/app')}
                className="text-white hover:underline font-medium cursor-pointer"
              >
                To‘liq imtihon simulyatorini ochish →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
