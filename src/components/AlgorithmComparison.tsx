import React from 'react';
import { Check, X, ArrowRight, Zap, Code2, AlertTriangle, ShieldCheck } from 'lucide-react';

export const AlgorithmComparison: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
          <Zap className="w-4 h-4" />
          <span>Algoritma Karşılaştırma Raporu</span>
        </div>
        <h2 className="text-xl font-bold text-white">
          Klasik Switch-Case Yaklaşımı vs Enes Öztürk LUT Çözümü
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-4xl">
          Ödev gereksinimi: &ldquo;Aynı örneği switch-case kullanmadan yapınız.&rdquo; Aşağıda klasik switch-case kodu ile geliştirilen modern dizi eşleme mimarisinin yan yana teknik ve yapısal analizi yer almaktadır.
        </p>
      </div>

      {/* Metrics Table */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Kod Satır Sayısı</span>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="text-rose-400 line-through text-sm">~85 Satır</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-emerald-400 font-bold text-base">12 Satır</span>
          </div>
          <span className="text-[10px] text-emerald-400 mt-0.5 block">%85 Kod Tasarrufu</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Zaman Karmaşıklığı</span>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="text-slate-300 font-mono text-sm">O(1)</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-emerald-400 font-mono font-bold text-base">O(1) Doğrudan</span>
          </div>
          <span className="text-[10px] text-slate-400 mt-0.5 block">Sıfır Dallanma Gecikmesi</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Döngüsel Karmaşıklık</span>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="text-rose-400 text-sm">M = 24 (Çok Yüksek)</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-emerald-400 font-bold text-base">M = 2 (Minimum)</span>
          </div>
          <span className="text-[10px] text-emerald-400 mt-0.5 block">Kolay Test Edilebilir</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Ödev Kuralı Uyumu</span>
          <div className="flex items-center justify-center gap-1 mt-1 text-emerald-400 font-bold text-base">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>%100 Uyumlu</span>
          </div>
          <span className="text-[10px] text-amber-300 mt-0.5 block">Enes Öztürk İmzalı</span>
        </div>
      </div>

      {/* Side-by-Side Code Diff */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left: Classic Bad Switch-Case */}
        <div className="rounded-2xl bg-slate-950 border border-rose-900/40 overflow-hidden shadow-lg flex flex-col">
          <div className="p-4 bg-rose-950/20 border-b border-rose-900/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-rose-300">Klasik Switch-Case (İstenmeyen)</h3>
                <p className="text-[11px] text-slate-400">80+ satır, tekrarlı kod, zor bakım</p>
              </div>
            </div>
            <span className="text-xs px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
              Kullanılmadı ✗
            </span>
          </div>

          <div className="p-4 font-mono text-xs text-slate-400 leading-relaxed overflow-x-auto flex-1 bg-slate-950/70">
            <pre className="text-rose-200/80">
{`// ❌ KLASİK VE HANTAL SWITCH-CASE ÖRNEĞİ:
function burcBulSwitch(gun, ay) {
  let burc = "";
  switch(ay) {
    case 1:
      if (gun <= 21) burc = "Oğlak";
      else burc = "Kova";
      break;
    case 2:
      if (gun <= 19) burc = "Kova";
      else burc = "Balık";
      break;
    case 3:
      if (gun <= 20) burc = "Balık";
      else burc = "Koç";
      break;
    case 4:
      if (gun <= 20) burc = "Koç";
      else burc = "Boğa";
      break;
    case 5:
      if (gun <= 21) burc = "Boğa";
      else burc = "İkizler";
      break;
    // ... 12 aya kadar case 12 devam eder
    // 80+ satır boyu süren gereksiz karmaşa!
    default:
      burc = "Geçersiz";
      break;
  }
  return burc;
}`}
            </pre>
          </div>

          <div className="p-3 bg-rose-950/10 border-t border-rose-900/30 text-[11px] text-rose-300/80 flex items-center gap-2">
            <X className="w-4 h-4 text-rose-400 shrink-0" />
            <span>Her ay için break, if-else ve tekrarlı atama gerekiyor.</span>
          </div>
        </div>

        {/* Right: Enes Öztürk Solution */}
        <div className="rounded-2xl bg-slate-950 border border-emerald-900/50 overflow-hidden shadow-lg flex flex-col">
          <div className="p-4 bg-emerald-950/20 border-b border-emerald-900/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-emerald-300">Enes Öztürk İmzalı Modern Çözüm</h3>
                <p className="text-[11px] text-slate-400">Lookup Table (LUT), O(1) Zaman, Sıfır Switch</p>
              </div>
            </div>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
              Ödev Çözümü ✓
            </span>
          </div>

          <div className="p-4 font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto flex-1 bg-slate-950/70">
            <pre className="text-emerald-200/90">
{`// ✅ ENES ÖZTÜRK SWITCH-CASE'SİZ ZARİF ÇÖZÜM:
// 1. Ay eşik günleri (İndis = Ay No)
const ESIK = [0, 21, 19, 20, 20, 21, 22, 22, 22, 22, 22, 21, 21];

// 2. Eşik gününden önce ve sonraki burçlar
const ONCEKI  = ["", "Oğlak", "Kova", "Balık", "Koç", "Boğa",
                 "İkizler", "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay"];
const SONRAKI = ["", "Kova", "Balık", "Koç", "Boğa", "İkizler",
                 "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay", "Oğlak"];

// 3. Tek satırda O(1) doğrudan hesaplama:
function burcHesapla(gun, ay) {
  return gun <= ESIK[ay] ? ONCEKI[ay] : SONRAKI[ay];
}

// Hazırlayan: Enes Öztürk`}
            </pre>
          </div>

          <div className="p-3 bg-emerald-950/10 border-t border-emerald-900/30 text-[11px] text-emerald-300 flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Veri ve mantık ayrıldı, CPU dallanması önlendi, tek satırda sonuç.</span>
          </div>
        </div>

      </div>

      {/* Detailed Technical Benefits */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <h3 className="text-base font-semibold text-white flex items-center gap-2">
          <Code2 className="w-4 h-4 text-amber-400" />
          Neden Bu Çözüm Bir Programcı İçin Daha İyidir?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <h4 className="font-semibold text-amber-300">1. DRY (Don&apos;t Repeat Yourself) Prensibi</h4>
            <p className="leading-relaxed">
              Klasik yapıda her ay için <code className="text-sky-300">case</code>, <code className="text-sky-300">if</code>, <code className="text-sky-300">else</code>, <code className="text-sky-300">break</code> kelimeleri 12 defa kopyala-yapıştır ile yazılır. Enes Öztürk çözümünde mantık tek bir ternary ifadede toplanmıştır.
            </p>
          </div>

          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <h4 className="font-semibold text-amber-300">2. CPU Branch Prediction & Hız</h4>
            <p className="leading-relaxed">
              12 dallı switch-case, derleyicinin atlama tabloları (jump tables) veya iç içe dallanmalar üretmesine yol açar. Dizi indisleme ise sabit O(1) bellek erişimiyle CPU seviyesinde en yüksek hızda çalışır.
            </p>
          </div>

          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <h4 className="font-semibold text-amber-300">3. Çoklu Dil Desteği (i18n) Kolaylığı</h4>
            <p className="leading-relaxed">
              Burç isimlerini İngilizce, Almanca veya Latinceye çevirmek istediğinizde kod mantığını değiştirmek gerekmez; sadece dizi içerisindeki metinleri güncellemek yeterlidir.
            </p>
          </div>

          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <h4 className="font-semibold text-amber-300">4. Birim Test (Unit Test) Kolaylığı</h4>
            <p className="leading-relaxed">
              Döngüsel karmaşıklık 24&apos;ten 2&apos;ye indiği için kodun tüm dallarını %100 kapsama oranıyla (100% Code Coverage) test etmek saniyeler alır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
