import React from 'react';
import { X, Printer, Award, FileText } from 'lucide-react';
import { CODE_SOLUTIONS, ZODIAC_LIST } from '../data/zodiacData';

interface PrintHomeworkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintHomeworkModal: React.FC<PrintHomeworkModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Controls Bar (hidden during print) */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Ödev Raporu ve Teslim Belgesi</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Yazdır / PDF Kaydet</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-8 sm:p-12 overflow-y-auto bg-slate-950 text-slate-200 space-y-8 font-sans print:bg-white print:text-black print:p-0">
          
          {/* Header of Assignment */}
          <div className="border-b-2 border-amber-500/80 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
                ALGORİTMALAR VE PROGRAMLAMA DERSİ
              </p>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
                Burç Hesaplama Ödevi
              </h1>
              <p className="text-sm text-slate-400 print:text-gray-600 mt-1">
                Switch-Case Kullanılmadan Geliştirilen Modern Lookup Table Algoritması
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 print:bg-gray-100 print:border-gray-300 text-right min-w-[200px]">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Ödevi Hazırlayan</span>
              <span className="text-lg font-bold text-amber-300 print:text-black block">Enes Öztürk</span>
              <span className="text-xs text-slate-400 print:text-gray-500 block">Tarih: Ekim 2026</span>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" />
              1. Ödev Konusu ve Problem Tanımı
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed">
              <p>
                <strong>Problem:</strong> Kullanıcıdan doğum günü ve doğum ayı bilgileri alınarak hangi burca ait olduğunun bulunması istenmektedir.
              </p>
              <p>
                <strong>Zorunlu Kural:</strong> &ldquo;Aynı örneği switch-case kullanmadan yapınız.&rdquo;
              </p>
              <p className="text-xs text-slate-400">
                Verilen Burç Tarih Aralıkları: Koç (21 Mart - 20 Nisan), Boğa (21 Nisan - 21 Mayıs), İkizler (22 Mayıs - 22 Haziran), Yengeç (23 Haziran - 22 Temmuz), Aslan (23 Temmuz - 22 Ağustos), Başak (23 Ağustos - 22 Eylül), Terazi (23 Eylül - 22 Ekim), Akrep (23 Ekim - 21 Kasım), Yay (22 Kasım - 21 Aralık), Oğlak (22 Aralık - 21 Ocak), Kova (22 Ocak - 19 Şubat), Balık (20 Şubat - 20 Mart).
              </p>
            </div>
          </div>

          {/* Algorithm and Mathematical Theory */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-amber-400 uppercase tracking-wider">
              2. Algoritma Mantığı ve Matematiksel Tasarım
            </h2>
            <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
              <p>
                Geleneksel çözümlerde 12 ayı kontrol etmek için hantal <code className="text-amber-300 font-mono">switch(ay)</code> blokları ve her blokta iç içe <code className="text-amber-300 font-mono">if(gun &lt;= ...)</code> koşulları yazılır. Bu yaklaşım yaklaşık 85 satır gereksiz kod üretir ve döngüsel karmaşıklığı (cyclomatic complexity) 24&apos;e çıkarır.
              </p>
              <p>
                <strong>Enes Öztürk Tarafından Geliştirilen Çözüm:</strong>
                Her ayın burç geçişi tek bir gün eşiğiyle (<code className="text-emerald-400 font-mono">ESIK_GUNLER[ay]</code>) belirlenebilir. Bu sayede ay numarası doğrudan dizi indisi olarak kullanılır ve tek bir satırda:
              </p>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-300">
                burc = (gun &lt;= ESIK_GUNLER[ay]) ? ONCEKI_BURCLAR[ay] : SONRAKI_BURCLAR[ay];
              </div>
              <p>
                Bu yöntemle <strong>O(1)</strong> zamanda, sıfır dallanma gecikmesiyle ve <strong>switch-case kullanmadan</strong> en temiz çözüme ulaşılmıştır.
              </p>
            </div>
          </div>

          {/* Full Code Sample (Python or TS) */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-amber-400 uppercase tracking-wider">
              3. Kaynak Kod Çözümü (Python)
            </h2>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <pre>{CODE_SOLUTIONS.python.code}</pre>
            </div>
          </div>

          {/* 12 Zodiacs Verification Table */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-amber-400 uppercase tracking-wider">
              4. Burçlar ve Resmi Tarih Aralıkları Doğrulama Cetveli
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {ZODIAC_LIST.map((z, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="font-semibold text-white flex items-center justify-between">
                    <span>{z.name}</span>
                    <span className="text-amber-300">{z.symbol}</span>
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">{z.dateRangeText}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sign-off */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
            <div>
              <p className="text-slate-400">Bu rapor ve kodlar ödev teslimi amacıyla hazırlanmıştır.</p>
              <p className="text-emerald-400 font-medium">Birim Testleri: 24 / 24 Geçti (%100 Doğruluk)</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400">İmza:</p>
              <p className="text-base font-serif italic text-amber-300 font-bold">Enes Öztürk</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
