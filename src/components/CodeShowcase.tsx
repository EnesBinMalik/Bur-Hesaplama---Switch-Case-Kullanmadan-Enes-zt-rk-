import React, { useState } from 'react';
import { CODE_SOLUTIONS } from '../data/zodiacData';
import { Copy, Check, Download, FileCode, CheckCircle2, Award } from 'lucide-react';

export const CodeShowcase: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<keyof typeof CODE_SOLUTIONS>('python');
  const [copied, setCopied] = useState<boolean>(false);

  const solution = CODE_SOLUTIONS[selectedLang];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(solution.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleDownload = () => {
    const blob = new Blob([solution.code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = solution.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
              <Award className="w-4 h-4" />
              <span>Ödev Teslim Formatı · Enes Öztürk</span>
            </div>
            <h2 className="text-xl font-bold text-white">
              Switch-Case Kullanmadan Burç Hesaplama Çözümleri
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
              Geleneksel ödevlerde istenen 12 dallı hantal <code className="text-amber-400 font-mono">switch(ay)</code> ve iç içe <code className="text-amber-400 font-mono">if-else</code> yapıları yerine; bilgisayar bilimlerinde tercih edilen <strong>Lookup Table (Dizi İndeksleme)</strong> mimarisi uygulanmıştır.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>{solution.filename} İndir</span>
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-xs font-bold text-slate-950 transition-all shadow-md active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4 text-slate-950" />}
              <span>{copied ? 'Kopyalandı!' : 'Kodu Kopyala'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Language Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {(Object.keys(CODE_SOLUTIONS) as Array<keyof typeof CODE_SOLUTIONS>).map((key) => {
          const item = CODE_SOLUTIONS[key];
          const isSelected = selectedLang === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedLang(key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border transition-all whitespace-nowrap ${
                isSelected
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-sm'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <FileCode className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
              <span>{item.language}</span>
              <span className="text-[10px] opacity-60">({item.filename})</span>
            </button>
          );
        })}
      </div>

      {/* Code Viewer Box */}
      <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
        {/* Code Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <span className="font-mono text-slate-300 ml-2 font-semibold">{solution.filename}</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-400">{solution.description}</span>
          </div>

          <span className="text-[11px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            İmza: Enes Öztürk
          </span>
        </div>

        {/* Code Lines with line numbers */}
        <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed bg-slate-950/90 max-h-[580px] overflow-y-auto">
          <pre className="text-slate-200">
            {solution.code.split('\n').map((line, idx) => (
              <div key={idx} className="table-row hover:bg-slate-900/50">
                <span className="table-cell pr-4 select-none text-right text-slate-400 opacity-60 text-[11px] w-8">
                  {idx + 1}
                </span>
                <span className="table-cell whitespace-pre">
                  {highlightSyntax(line)}
                </span>
              </div>
            ))}
          </pre>
        </div>

        {/* Code Footer Analysis */}
        <div className="p-4 bg-slate-900/60 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              Switch-Case sayısı: 0
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-300">Zaman Karmaşıklığı: <strong className="text-white">O(1)</strong></span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-300">Alan Karmaşıklığı: <strong className="text-white">O(1) Sabit</strong></span>
          </div>
          <span className="text-slate-400">
            Öğretmen / Değerlendirici Notu: Dizi indisi doğrudan ay değişkeni ile eşlenmiştir.
          </span>
        </div>
      </div>

      {/* Algorithmic Theory Explanation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            1. Neden Switch-Case Kullanılmadı?
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            12 ay için <code className="text-rose-400 font-mono">case 1: ... case 12:</code> yazmak yaklaşık 80 satır gereksiz kod ve yüksek dallanma (branch prediction penalty) yaratır.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            2. Enes Öztürk Çözüm Mantığı
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Her ayın yalnızca tek bir kritik eşik günü vardır. Ay numarası doğrudan dizi indisi olarak kullanılır ve <code className="text-emerald-400 font-mono">gun &lt;= ESIK[ay]</code> kontrolü ile tek satırda sonuç döner.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            3. Bakım ve Genişletilebilirlik
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Veri (burç isimleri ve günler) ile mantık birbirinden ayrılmıştır. İleride burç tarihleri veya yeni özellikler eklendiğinde kod bloklarına dokunmaya gerek kalmaz.
          </p>
        </div>
      </div>
    </div>
  );
};

// Simple syntax color helper for clean UI presentation
function highlightSyntax(line: string) {
  // Comments
  if (line.trim().startsWith('#') || line.trim().startsWith('//') || line.trim().startsWith('/*') || line.trim().startsWith('*')) {
    return <span className="text-slate-400 italic">{line}</span>;
  }
  // Docstrings / strings
  if (line.includes('"""') || line.includes('"') || line.includes("'")) {
    return <span className="text-emerald-300">{line}</span>;
  }
  // Keywords
  if (line.includes('def ') || line.includes('function ') || line.includes('return ') || line.includes('class ') || line.includes('const ') || line.includes('public static')) {
    return <span className="text-sky-300">{line}</span>;
  }
  return line;
}
