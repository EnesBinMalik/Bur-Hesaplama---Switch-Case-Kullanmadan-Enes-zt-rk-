import React, { useState } from 'react';
import {
  MONTH_NAMES,
  DAYS_IN_MONTH,
  MONTH_CUTOFF_DAYS,
  SIGNS_BEFORE_CUTOFF,
  SIGNS_AFTER_CUTOFF,
  findZodiacByThreshold,
  findZodiacByRange,
  findZodiacByNumericCode,
  ZodiacSign,
  ZODIAC_LIST,
} from '../data/zodiacData';
import {
  Calendar,
  Sparkles,
  Cpu,
  ArrowRight,
  Flame,
  Mountain,
  Wind,
  Droplets,
  Check,
  Zap,
} from 'lucide-react';

interface ZodiacCalculatorProps {
  onSelectSign: (sign: ZodiacSign) => void;
  onViewCode: () => void;
}

export const ZodiacCalculator: React.FC<ZodiacCalculatorProps> = ({ onViewCode }) => {
  const [day, setDay] = useState<number>(21);
  const [month, setMonth] = useState<number>(3); // Mart (Koç başlangıcı)
  const [algoMode, setAlgoMode] = useState<'threshold' | 'range' | 'numeric'>('threshold');

  // Max days in the selected month
  const maxDays = DAYS_IN_MONTH[month] || 31;
  const validDay = Math.min(day, maxDays);

  // Compute with selected algorithm (all zero switch-case!)
  let currentSign: ZodiacSign;
  if (algoMode === 'threshold') {
    currentSign = findZodiacByThreshold(validDay, month);
  } else if (algoMode === 'range') {
    currentSign = findZodiacByRange(validDay, month);
  } else {
    currentSign = findZodiacByNumericCode(validDay, month);
  }

  // Element Icon & Styling
  const getElementBadge = (element: string) => {
    switch (element) {
      case 'Ateş':
        return {
          icon: <Flame className="w-4 h-4 text-orange-400" />,
          color: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
          gradient: 'from-orange-500/15 via-red-500/10 to-transparent',
        };
      case 'Toprak':
        return {
          icon: <Mountain className="w-4 h-4 text-emerald-400" />,
          color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
          gradient: 'from-emerald-500/15 via-teal-500/10 to-transparent',
        };
      case 'Hava':
        return {
          icon: <Wind className="w-4 h-4 text-sky-400" />,
          color: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
          gradient: 'from-sky-500/15 via-indigo-500/10 to-transparent',
        };
      case 'Su':
      default:
        return {
          icon: <Droplets className="w-4 h-4 text-cyan-400" />,
          color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
          gradient: 'from-cyan-500/15 via-blue-500/10 to-transparent',
        };
    }
  };

  const elementStyle = getElementBadge(currentSign.element);
  const cutoffForCurrentMonth = MONTH_CUTOFF_DAYS[month];

  // Quick preset dates
  const presetDates = [
    { label: 'Koç (21 Mart)', d: 21, m: 3 },
    { label: 'Aslan (23 Temmuz)', d: 23, m: 7 },
    { label: 'Akrep (23 Ekim)', d: 23, m: 10 },
    { label: 'Oğlak (22 Aralık)', d: 22, m: 12 },
    { label: 'Kova (22 Ocak)', d: 22, m: 1 },
    { label: 'Balık (20 Mart)', d: 20, m: 3 },
  ];

  return (
    <div className="space-y-6">
      {/* Homework Concept Banner */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
              <Zap className="w-3.5 h-3.5" />
              Ödev Problemi ve Çözüm Yaklaşımı
            </div>
            <p className="text-sm text-slate-300">
              Geleneksel 12 dallı hantal <code className="text-rose-400 bg-slate-950 px-1.5 py-0.5 rounded font-mono text-xs">switch-case</code> blokları yerine;{' '}
              <strong className="text-white">Dizi İndeksleme (Threshold Array)</strong> ve{' '}
              <strong className="text-white">O(1) Matematiksel Haritalama</strong> ile sıfır kod tekrarı sağlanmıştır.
            </p>
          </div>
          <div className="text-xs text-slate-400 sm:text-right shrink-0">
            <span className="block text-slate-200 font-medium">Algoritma Karmaşıklığı:</span>
            <span className="text-emerald-400 font-mono font-semibold">Zaman: O(1) · Alan: O(1)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Date Inputs & Algorithm Controls */}
        <div className="lg:col-span-5 space-y-5">
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-5 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-base font-semibold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                Doğum Tarihi Seçimi
              </h2>
              <span className="text-xs text-slate-400">Gün ve Ay</span>
            </div>

            {/* Ay Seçimi */}
            <div className="space-y-2">
              <label htmlFor="month-select" className="text-xs font-medium text-slate-300 flex items-center justify-between">
                <span>1. Doğduğunuz Ay:</span>
                <span className="text-amber-400 font-semibold">{MONTH_NAMES[month]} ({month}. Ay)</span>
              </label>
              <select
                id="month-select"
                aria-label="Doğduğunuz Ay"
                value={month}
                onChange={(e) => {
                  const newM = Number(e.target.value);
                  setMonth(newM);
                  if (day > DAYS_IN_MONTH[newM]) {
                    setDay(DAYS_IN_MONTH[newM]);
                  }
                }}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all cursor-pointer"
              >
                {MONTH_NAMES.slice(1).map((mName, idx) => (
                  <option key={idx + 1} value={idx + 1}>
                    {idx + 1}. Ay - {mName} ({DAYS_IN_MONTH[idx + 1]} Gün)
                  </option>
                ))}
              </select>
            </div>

            {/* Gün Seçimi */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-medium text-slate-300">
                <label htmlFor="day-input">2. Doğduğunuz Gün:</label>
                <div className="flex items-center gap-2">
                  <input
                    id="day-input"
                    type="number"
                    min={1}
                    max={maxDays}
                    value={validDay}
                    onChange={(e) => {
                      const v = Math.min(Math.max(Number(e.target.value) || 1, 1), maxDays);
                      setDay(v);
                    }}
                    className="w-16 bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-center font-mono text-sm font-semibold text-amber-300 focus:outline-none focus:border-amber-500"
                  />
                  <span className="text-slate-400">/ {maxDays}</span>
                </div>
              </div>

              <input
                type="range"
                min={1}
                max={maxDays}
                value={validDay}
                onChange={(e) => setDay(Number(e.target.value))}
                aria-label="Gün Kaydırıcı"
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-950 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>1 {MONTH_NAMES[month]}</span>
                <span className="text-amber-400 font-semibold">{validDay} {MONTH_NAMES[month]}</span>
                <span>{maxDays} {MONTH_NAMES[month]}</span>
              </div>
            </div>

            {/* Hızlı Örnek Tarih Butonları */}
            <div className="pt-2 border-t border-slate-800">
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-2">
                Hızlı Test Tarihleri
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {presetDates.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setMonth(p.m);
                      setDay(p.d);
                    }}
                    className="px-2 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-colors text-left truncate"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Algoritma Seçici */}
            <div className="pt-2 border-t border-slate-800">
              <label className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-2">
                Kullanılan Algoritma Yöntemi
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                <button
                  onClick={() => setAlgoMode('threshold')}
                  className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-left transition-all ${
                    algoMode === 'threshold'
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-200'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <Cpu className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold flex items-center gap-1.5">
                      <span>Eşik Dizisi İndeksleme (O(1))</span>
                      {algoMode === 'threshold' && <Check className="w-3.5 h-3.5 text-amber-400" />}
                    </div>
                    <p className="text-[11px] opacity-80 mt-0.5">
                      Her ay için tek eşik günü kontrolü ile 1 satırda anında sonuç.
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setAlgoMode('range')}
                  className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-left transition-all ${
                    algoMode === 'range'
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-200'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <Sparkles className="w-4 h-4 mt-0.5 text-sky-400 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold flex items-center gap-1.5">
                      <span>Dizi .find() Fonksiyonel Arama</span>
                      {algoMode === 'range' && <Check className="w-3.5 h-3.5 text-amber-400" />}
                    </div>
                    <p className="text-[11px] opacity-80 mt-0.5">
                      12 burç nesnesi içinden tarih aralığı filtreleme.
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setAlgoMode('numeric')}
                  className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-left transition-all ${
                    algoMode === 'numeric'
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-200'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="font-mono text-xs font-bold text-emerald-400 shrink-0 mt-0.5">#</span>
                  <div>
                    <div className="text-xs font-semibold flex items-center gap-1.5">
                      <span>Sayısal Kodlama (ay * 100 + gün)</span>
                      {algoMode === 'numeric' && <Check className="w-3.5 h-3.5 text-amber-400" />}
                    </div>
                    <p className="text-[11px] opacity-80 mt-0.5">
                      Tarihi tekil tamsayıya çevirip aralık kontrolü yapma.
                    </p>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Computed Result Card & Interactive Trace */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Main Zodiac Showcase Card */}
          <div className={`p-6 sm:p-7 rounded-2xl bg-gradient-to-br ${elementStyle.gradient} bg-slate-900 border border-slate-700/80 shadow-2xl relative overflow-hidden transition-all duration-300`}>
            
            {/* Ambient Background Glyph */}
            <div className="absolute -right-6 -bottom-8 text-9xl font-serif text-slate-800/40 select-none pointer-events-none">
              {currentSign.symbol}
            </div>

            <div className="relative z-10 space-y-6">
              
              {/* Top Meta Line */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-12 h-12 rounded-xl bg-slate-950/90 border border-slate-700 flex items-center justify-center text-3xl shadow-inner">
                    {currentSign.symbol}
                  </span>
                  <div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Hesaplanan Burç
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {currentSign.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium ${elementStyle.color}`}>
                    {elementStyle.icon}
                    <span>{currentSign.element} Elementi</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-medium text-slate-300">
                    {currentSign.latinName}
                  </div>
                </div>
              </div>

              {/* Exact Dates & Key Attributes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Resmi Tarih Aralığı</span>
                  <span className="text-amber-300 font-semibold text-xs mt-0.5 block">
                    {currentSign.dateRangeText}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Yönetici Gezegen</span>
                  <span className="text-white font-semibold text-xs mt-0.5 block">
                    {currentSign.planet}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Nitelik</span>
                  <span className="text-white font-semibold text-xs mt-0.5 block">
                    {currentSign.quality}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Uğurlu Sayı</span>
                  <span className="text-white font-semibold text-xs mt-0.5 block">
                    {currentSign.luckyNumber} · {currentSign.color}
                  </span>
                </div>
              </div>

              {/* Description & Traits */}
              <div className="space-y-2">
                <p className="text-sm text-slate-200 leading-relaxed">
                  {currentSign.description}
                </p>
                <p className="text-xs italic text-amber-200/90 font-serif">
                  &ldquo;{currentSign.motto}&rdquo;
                </p>
              </div>

              {/* Trait badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {currentSign.traits.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-950/70 border border-slate-800 text-xs text-slate-300"
                  >
                    #{t}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* Real-Time Algorithmic Execution Trace */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/80 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-white font-medium">Algoritma Adım Takibi (Trace)</span>
              </div>
              <span className="text-[11px] text-amber-400">Switch-Case: Yok (0 satır)</span>
            </div>

            <div className="space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Girdi Değerleri:</span>
                <span className="text-amber-300">Gün = {validDay}</span>
                <span className="text-slate-400">·</span>
                <span className="text-amber-300">Ay = {month} ({MONTH_NAMES[month]})</span>
              </div>

              {algoMode === 'threshold' && (
                <>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Ayın Eşik Günü:</span>
                    <span className="text-sky-300">ESIK_GUNLER[{month}] = {cutoffForCurrentMonth}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Mantıksal Karar:</span>
                    <span className="text-emerald-400">
                      {validDay} &lt;= {cutoffForCurrentMonth} ? ONCEKI[{month}] : SONRAKI[{month}]
                    </span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-200">
                    Karar: <span className="text-amber-300 font-semibold">{validDay} {validDay <= cutoffForCurrentMonth ? '<=' : '>'} {cutoffForCurrentMonth}</span>
                    {' => '}
                    Sonuç: <strong className="text-emerald-400">{currentSign.name}</strong>
                  </div>
                </>
              )}

              {algoMode === 'range' && (
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-200">
                  <p className="text-slate-400 mb-1">Dizi Filtreleme (.find):</p>
                  <code>
                    ZODIAC_LIST.find(z =&gt; (ay==={month} && gun&gt;={validDay})) =&gt;{' '}
                    <strong className="text-emerald-400">{currentSign.name}</strong>
                  </code>
                </div>
              )}

              {algoMode === 'numeric' && (
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-200">
                  <p className="text-slate-400 mb-1">Sayısal Kod Hesabı: ay * 100 + gün</p>
                  <code>
                    {month} * 100 + {validDay} = <span className="text-amber-300">{month * 100 + validDay}</span>
                    {' => '}
                    Aralık Eşleşmesi: <strong className="text-emerald-400">{currentSign.name}</strong>
                  </code>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">İmza: Enes Öztürk</span>
              <button
                onClick={onViewCode}
                className="flex items-center gap-1 text-amber-400 hover:text-amber-300 underline font-sans"
              >
                <span>Ödev Kaynak Kodlarını İncele</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
