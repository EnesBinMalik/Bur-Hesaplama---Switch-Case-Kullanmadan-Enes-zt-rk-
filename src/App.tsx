/**
 * Burç Hesaplama Uygulaması ve Ödev Çözümü
 * Switch-case KULLANILMADAN geliştirilmiştir.
 * Hazırlayan: Enes Öztürk
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { ZodiacCalculator } from './components/ZodiacCalculator';
import { CodeShowcase } from './components/CodeShowcase';
import { AlgorithmComparison } from './components/AlgorithmComparison';
import { ZodiacListGrid } from './components/ZodiacListGrid';
import { UnitTestsRunner } from './components/UnitTestsRunner';
import { PrintHomeworkModal } from './components/PrintHomeworkModal';
import { ZodiacSign } from './data/zodiacData';
import { ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('calculator');
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);

  const handleSelectSign = (sign: ZodiacSign) => {
    setActiveTab('calculator');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Top Navigation & Homework Identity Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenReport={() => setIsReportOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'calculator' && (
          <ZodiacCalculator
            onSelectSign={handleSelectSign}
            onViewCode={() => setActiveTab('codes')}
          />
        )}

        {activeTab === 'codes' && <CodeShowcase />}

        {activeTab === 'comparison' && <AlgorithmComparison />}

        {activeTab === 'grid' && (
          <ZodiacListGrid onSelectSign={handleSelectSign} />
        )}

        {activeTab === 'tests' && <UnitTestsRunner />}
      </main>

      {/* Footer with Enes Öztürk Signature and Homework Details */}
      <footer className="border-t border-slate-800/80 bg-slate-950 mt-12 py-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Algoritmalar ve Programlama Dersi Ödevi</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-400 font-medium">Switch-Case Kullanılmamıştır</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Hazırlayan: <strong className="text-amber-300 font-semibold">Enes Öztürk</strong></span>
            </div>
            <button
              onClick={() => setIsReportOpen(true)}
              className="text-amber-400 hover:text-amber-300 underline font-medium"
            >
              Raporu Gör
            </button>
          </div>
        </div>
      </footer>

      {/* Printable Homework Modal */}
      <PrintHomeworkModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />

    </div>
  );
}
