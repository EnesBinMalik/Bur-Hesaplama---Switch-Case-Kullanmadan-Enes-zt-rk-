import React, { useState } from 'react';
import { ZODIAC_LIST, ZodiacSign } from '../data/zodiacData';
import { Flame, Mountain, Wind, Droplets, Calendar, Sparkles } from 'lucide-react';

interface ZodiacListGridProps {
  onSelectSign: (sign: ZodiacSign) => void;
}

export const ZodiacListGrid: React.FC<ZodiacListGridProps> = ({ onSelectSign }) => {
  const [selectedElement, setSelectedElement] = useState<string>('all');

  const filteredSigns =
    selectedElement === 'all'
      ? ZODIAC_LIST
      : ZODIAC_LIST.filter((z) => z.element === selectedElement);

  return (
    <div className="space-y-6">
      {/* Header and Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            12 Burç ve Resmi Tarih Aralıkları Tablosu
          </h2>
          <p className="text-xs text-slate-300 mt-0.5">
            Ödev metninde verilen tüm burçlar ve tarih sınırları
          </p>
        </div>

        {/* Interactive Element Filter Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-xl overflow-x-auto">
          <button
            onClick={() => setSelectedElement('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedElement === 'all'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Tümü (12)
          </button>
          <button
            onClick={() => setSelectedElement('Ateş')}
            className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedElement === 'Ateş'
                ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                : 'text-slate-400 hover:text-orange-400'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>Ateş</span>
          </button>
          <button
            onClick={() => setSelectedElement('Toprak')}
            className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedElement === 'Toprak'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'text-slate-400 hover:text-emerald-400'
            }`}
          >
            <Mountain className="w-3.5 h-3.5 text-emerald-400" />
            <span>Toprak</span>
          </button>
          <button
            onClick={() => setSelectedElement('Hava')}
            className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedElement === 'Hava'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                : 'text-slate-400 hover:text-sky-400'
            }`}
          >
            <Wind className="w-3.5 h-3.5 text-sky-400" />
            <span>Hava</span>
          </button>
          <button
            onClick={() => setSelectedElement('Su')}
            className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedElement === 'Su'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-cyan-400'
            }`}
          >
            <Droplets className="w-3.5 h-3.5 text-cyan-400" />
            <span>Su</span>
          </button>
        </div>
      </div>

      {/* Grid of 12 Zodiac Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredSigns.map((zodiac) => {
          return (
            <div
              key={zodiac.id}
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:-translate-y-0.5 group flex flex-col justify-between"
            >
              <div>
                {/* Top line */}
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {zodiac.symbol}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {zodiac.latinName}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {zodiac.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mt-1 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{zodiac.dateRangeText}</span>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                  {zodiac.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {zodiac.traits.slice(0, 3).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions & Meta */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">
                  {zodiac.element} · {zodiac.planet}
                </span>

                <button
                  onClick={() => onSelectSign(zodiac)}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 text-xs font-medium transition-colors"
                >
                  Hesapla →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
