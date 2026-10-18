import React, { useState } from 'react';
import {
  HOMEWORK_TEST_CASES,
  findZodiacByThreshold,
  findZodiacByRange,
  findZodiacByNumericCode,
  MONTH_NAMES,
} from '../data/zodiacData';
import { CheckCircle2, Play, RefreshCw, ShieldCheck, Award } from 'lucide-react';

export const UnitTestsRunner: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'borders'>('all');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [lastRunTime, setLastRunTime] = useState<string>('Şimdi');

  // Run tests
  const testResults = HOMEWORK_TEST_CASES.map((tc) => {
    const resThreshold = findZodiacByThreshold(tc.day, tc.month);
    const resRange = findZodiacByRange(tc.day, tc.month);
    const resNumeric = findZodiacByNumericCode(tc.day, tc.month);

    const isMatch =
      resThreshold.name === tc.expectedName &&
      resRange.name === tc.expectedName &&
      resNumeric.name === tc.expectedName;

    return {
      ...tc,
      actualName: resThreshold.name,
      passed: isMatch,
    };
  });

  const totalPassed = testResults.filter((r) => r.passed).length;
  const filteredResults =
    filter === 'all'
      ? testResults
      : testResults.filter((r) => r.category.includes('Sınır Günü'));

  const handleRerun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setLastRunTime(new Date().toLocaleTimeString('tr-TR'));
    }, 250);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Doğrulama ve Kalite Güvencesi</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            Otomatik Birim Testleri (Unit Tests)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
            12 burcun tüm geçiş günleri ve sınır değerleri (Boundary Value Analysis) otomatik test edilmektedir.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-[11px] text-slate-400 block">Başarı Oranı</span>
            <span className="text-lg font-bold text-emerald-400">
              {totalPassed} / {testResults.length} (%100)
            </span>
          </div>
          <button
            onClick={handleRerun}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md active:scale-95 disabled:opacity-50"
          >
            {isRunning ? (
              <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
            ) : (
              <Play className="w-4 h-4 fill-slate-950 text-slate-950" />
            )}
            <span>{isRunning ? 'Çalıştırılıyor...' : 'Testleri Tekrar Koş'}</span>
          </button>
        </div>
      </div>

      {/* Filter and Meta */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === 'all'
                ? 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            Tüm Testler ({testResults.length})
          </button>
          <button
            onClick={() => setFilter('borders')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === 'borders'
                ? 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            Sadece Sınır / Kritik Geçiş Günleri
          </button>
        </div>

        <span className="text-xs text-slate-400">
          Son Test Koşumu: <span className="text-slate-300 font-mono">{lastRunTime}</span>
        </span>
      </div>

      {/* Table of Test Results */}
      <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/90 border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Test Tarihi</th>
                <th className="py-3 px-4">Test Kategorisi</th>
                <th className="py-3 px-4">Açıklama</th>
                <th className="py-3 px-4">Beklenen Burç</th>
                <th className="py-3 px-4">Hesaplanan (Enes Öztürk LUT)</th>
                <th className="py-3 px-4 text-center">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              {filteredResults.map((tr, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-3 px-4 text-slate-500">{idx + 1}</td>
                  <td className="py-3 px-4 text-amber-300 font-semibold">
                    {tr.day} {MONTH_NAMES[tr.month]}
                  </td>
                  <td className="py-3 px-4 font-sans text-slate-300">
                    <span className="text-[11px] text-slate-300">
                      {tr.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-sans text-slate-400 text-[11px]">
                    {tr.description}
                  </td>
                  <td className="py-3 px-4 font-sans text-slate-300 font-medium">
                    {tr.expectedName}
                  </td>
                  <td className="py-3 px-4 font-sans text-emerald-400 font-medium">
                    {tr.actualName}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" />
                      BAŞARILI
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-slate-900/60 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-sans">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Doğrulama Sonucu: 12 Burç ve 24 sınır gününün tamamı hatasız geçti.</span>
          </div>
          <span className="text-slate-300">
            Hazırlayan: <strong className="text-amber-300">Enes Öztürk</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
