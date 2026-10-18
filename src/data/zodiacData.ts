/**
 * Burç Bilgileri ve Algoritma Çözümleri
 * Ödev: Switch-case kullanmadan Burç Hesaplama
 * Hazırlayan: Enes Öztürk
 */

export interface ZodiacSign {
  id: string;
  name: string;
  latinName: string;
  symbol: string;
  dateRangeText: string;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  element: 'Ateş' | 'Toprak' | 'Hava' | 'Su';
  planet: string;
  quality: 'Öncü' | 'Sabit' | 'Değişken';
  traits: string[];
  motto: string;
  luckyNumber: number;
  color: string;
  colorHex: string;
  description: string;
}

export const MONTH_NAMES = [
  '',
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
];

export const DAYS_IN_MONTH = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const ZODIAC_LIST: ZodiacSign[] = [
  {
    id: 'koc',
    name: 'Koç Burcu',
    latinName: 'Aries',
    symbol: '♈',
    dateRangeText: '21 Mart - 20 Nisan',
    startMonth: 3,
    startDay: 21,
    endMonth: 4,
    endDay: 20,
    element: 'Ateş',
    planet: 'Mars',
    quality: 'Öncü',
    traits: ['Cesur', 'Girişimci', 'Enerjik', 'Lider Ruhlu', 'Sabırsız'],
    motto: 'Ben varım ve harekete geçerim.',
    luckyNumber: 9,
    color: 'Kırmızı',
    colorHex: '#ef4444',
    description:
      'Zodyak döngüsünün ilk burcudur. Baharın başlangıcını simgeler. Yenilikçi, coşkulu, doğrudan ve mücadeleci bir mizaca sahiptir.',
  },
  {
    id: 'boga',
    name: 'Boğa Burcu',
    latinName: 'Taurus',
    symbol: '♉',
    dateRangeText: '21 Nisan - 21 Mayıs',
    startMonth: 4,
    startDay: 21,
    endMonth: 5,
    endDay: 21,
    element: 'Toprak',
    planet: 'Venüs',
    quality: 'Sabit',
    traits: ['Güvenilir', 'Sabırlı', 'Estetik', 'Sadık', 'Kararlı'],
    motto: 'Sahip oluyorum ve değer üretiyorum.',
    luckyNumber: 6,
    color: 'Yeşil / Toprak',
    colorHex: '#10b981',
    description:
      'Sağlam adımlar atan, güven arayışı yüksek, duyusal zevklere ve sanata düşkün, dayanıklı ve üretken bir burçtur.',
  },
  {
    id: 'ikizler',
    name: 'İkizler Burcu',
    latinName: 'Gemini',
    symbol: '♊',
    dateRangeText: '22 Mayıs - 22 Haziran',
    startMonth: 5,
    startDay: 22,
    endMonth: 6,
    endDay: 22,
    element: 'Hava',
    planet: 'Merkür',
    quality: 'Değişken',
    traits: ['Zeki', 'İletişimci', 'Meraklı', 'Uyumlu', 'Çok Yönlü'],
    motto: 'Düşünüyorum ve paylaşıyorum.',
    luckyNumber: 5,
    color: 'Sarı / Açık Mavi',
    colorHex: '#f59e0b',
    description:
      'Hızlı kavrama yeteneği, akıcı iletişim becerisi ve sonsuz öğrenme tutkusuyla öne çıkar. Sosyal ve zihinsel olarak son derece hareketlidir.',
  },
  {
    id: 'yengec',
    name: 'Yengeç Burcu',
    latinName: 'Cancer',
    symbol: '♋',
    dateRangeText: '23 Haziran - 22 Temmuz',
    startMonth: 6,
    startDay: 23,
    endMonth: 7,
    endDay: 22,
    element: 'Su',
    planet: 'Ay',
    quality: 'Öncü',
    traits: ['Şefkatli', 'Sezgisel', 'Korumacı', 'Duygusal', 'Bağlı'],
    motto: 'Hissediyorum ve koruyorum.',
    luckyNumber: 2,
    color: 'Gümüş / Beyaz',
    colorHex: '#06b6d4',
    description:
      'Yüksek empati gücü, aileye ve sevdiklerine derin bağlılığı ile bilinir. Güçlü sezgileri ve koruyucu yapısı en belirgin niteliklerindendir.',
  },
  {
    id: 'aslan',
    name: 'Aslan Burcu',
    latinName: 'Leo',
    symbol: '♌',
    dateRangeText: '23 Temmuz - 22 Ağustos',
    startMonth: 7,
    startDay: 23,
    endMonth: 8,
    endDay: 22,
    element: 'Ateş',
    planet: 'Güneş',
    quality: 'Sabit',
    traits: ['Cömert', 'Yaratıcı', 'Karizmatik', 'Özgüvenli', 'Sıcakkanlı'],
    motto: 'Işıldıyorum ve yönetiyorum.',
    luckyNumber: 1,
    color: 'Altın / Turuncu',
    colorHex: '#f97316',
    description:
      'Güneşin sıcaklığını ve parlaklığını yansıtır. Yüksek yaşam enerjisi, doğal liderlik aurası ve cömert kalbiyle çevresine ilham verir.',
  },
  {
    id: 'basak',
    name: 'Başak Burcu',
    latinName: 'Virgo',
    symbol: '♍',
    dateRangeText: '23 Ağustos - 22 Eylül',
    startMonth: 8,
    startDay: 23,
    endMonth: 9,
    endDay: 22,
    element: 'Toprak',
    planet: 'Merkür',
    quality: 'Değişken',
    traits: ['Analitik', 'Titiz', 'Çalışkan', 'Düzenli', 'Yardımsever'],
    motto: 'İnceliyorum ve kusursuzlaştırıyorum.',
    luckyNumber: 5,
    color: 'Lacivert / Bej',
    colorHex: '#84cc16',
    description:
      'Detaylara hakimiyeti, çözüm odaklı yaklaşımı ve pratik zekasıyla tanınır. Mükemmeliyetçi yapısıyla her işi en yüksek verimle tamamlar.',
  },
  {
    id: 'terazi',
    name: 'Terazi Burcu',
    latinName: 'Libra',
    symbol: '♎',
    dateRangeText: '23 Eylül - 22 Ekim',
    startMonth: 9,
    startDay: 23,
    endMonth: 10,
    endDay: 22,
    element: 'Hava',
    planet: 'Venüs',
    quality: 'Öncü',
    traits: ['Adil', 'Diplomatik', 'Zarif', 'Uyumlu', 'Sanatçı Ruhlu'],
    motto: 'Dengeliyorum ve uzlaştırıyorum.',
    luckyNumber: 7,
    color: 'Pastel Pembe / Mavi',
    colorHex: '#38bdf8',
    description:
      'Adalet duygusu, nezaket ve harmoni arayışı belirleyicidir. Çatışmaları diplomasiyle çözer ve estetik dengeleri mükemmel biçimde kurar.',
  },
  {
    id: 'akrep',
    name: 'Akrep Burcu',
    latinName: 'Scorpio',
    symbol: '♏',
    dateRangeText: '23 Ekim - 21 Kasım',
    startMonth: 10,
    startDay: 23,
    endMonth: 11,
    endDay: 21,
    element: 'Su',
    planet: 'Plüton & Mars',
    quality: 'Sabit',
    traits: ['Tutkulu', 'Derin', 'Dirençli', 'Gizemli', 'Stratejik'],
    motto: 'Dönüştürüyorum ve keşfediyorum.',
    luckyNumber: 8,
    color: 'Bordo / Siyah',
    colorHex: '#a855f7',
    description:
      'Güçlü sezgileri, yoğun duygusal derinliği ve olağanüstü dayanıklılığıyla bilinir. Zorluklardan küllerinden yeniden doğarak çıkar.',
  },
  {
    id: 'yay',
    name: 'Yay Burcu',
    latinName: 'Sagittarius',
    symbol: '♐',
    dateRangeText: '22 Kasım - 21 Aralık',
    startMonth: 11,
    startDay: 22,
    endMonth: 12,
    endDay: 21,
    element: 'Ateş',
    planet: 'Jüpiter',
    quality: 'Değişken',
    traits: ['İyimser', 'Özgürlükçü', 'Felsefi', 'Maceracı', 'Açık Sözlü'],
    motto: 'Görüyorum ve ufkumu genişletiyorum.',
    luckyNumber: 3,
    color: 'Mor / Gece Mavisi',
    colorHex: '#8b5cf6',
    description:
      'Ufku geniş, bilgi ve yeni deneyimler peşinde koşan neşeli bir burçtur. Felsefi merakı ve bağımsızlık tutkusuyla daima ileri bakar.',
  },
  {
    id: 'oglak',
    name: 'Oğlak Burcu',
    latinName: 'Capricorn',
    symbol: '♑',
    dateRangeText: '22 Aralık - 21 Ocak',
    startMonth: 12,
    startDay: 22,
    endMonth: 1,
    endDay: 21,
    element: 'Toprak',
    planet: 'Satürn',
    quality: 'Öncü',
    traits: ['Disiplinli', 'Sorumluluk Sahibi', 'Sabırlı', 'Hedef Odaklı', 'Gerçekçi'],
    motto: 'İnşa ediyorum ve başarıyorum.',
    luckyNumber: 4,
    color: 'Koyu Kahverengi / Kömür Grisi',
    colorHex: '#64748b',
    description:
      'Uzun vadeli hedeflere azimle tırmanan, yüksek sorumluluk bilincine ve stratejik sabra sahip, sağlam temelli bir burçtur.',
  },
  {
    id: 'kova',
    name: 'Kova Burcu',
    latinName: 'Aquarius',
    symbol: '♒',
    dateRangeText: '22 Ocak - 19 Şubat',
    startMonth: 1,
    startDay: 22,
    endMonth: 2,
    endDay: 19,
    element: 'Hava',
    planet: 'Uranüs & Satürn',
    quality: 'Sabit',
    traits: ['Özgün', 'Vizyoner', 'Hümanist', 'Bağımsız', 'Yenilikçi'],
    motto: 'Biliyorum ve geleceği şekillendiriyorum.',
    luckyNumber: 11,
    color: 'Turkuaz / Elektrik Mavisi',
    colorHex: '#0ea5e9',
    description:
      'Geleneksel kalıpların ötesinde düşünen, toplumsal faydaya ve özgürlüklere değer veren, yenilikçi ve sıra dışı bir zekaya sahiptir.',
  },
  {
    id: 'balik',
    name: 'Balık Burcu',
    latinName: 'Pisces',
    symbol: '♓',
    dateRangeText: '20 Şubat - 20 Mart',
    startMonth: 2,
    startDay: 20,
    endMonth: 3,
    endDay: 20,
    element: 'Su',
    planet: 'Neptün & Jüpiter',
    quality: 'Değişken',
    traits: ['Duyarlı', 'Hayalperest', 'Şefkatli', 'Mistik', 'Sanatsal'],
    motto: 'İnanıyorum ve evrenle bir oluyorum.',
    luckyNumber: 7,
    color: 'Deniz Yeşili / Lavanta',
    colorHex: '#14b8a6',
    description:
      'Zodyak çemberinin son burcudur. Sınırsız hayal gücü, derin empati ve ruhsal derinlikle donatılmıştır. Sanatsal yetenekleri yüksektir.',
  },
];

/**
 * ------------------------------------------------------------------
 * ALGORİTMA 1: Eşik Günü Dizisi Yöntemi (Threshold Indexing) - O(1)
 * SWITCH-CASE KULLANMADAN!
 * ------------------------------------------------------------------
 * Her ayın (1-12) kritik eşik günü ve o günden önce/sonraki burç id'si
 * doğrudan dizi indisleri ile eşlenir.
 */
export const MONTH_CUTOFF_DAYS = [
  0,  // 0 boş
  21, // 1: Ocak (<=21 Oğlak, >21 Kova)
  19, // 2: Şubat (<=19 Kova, >19 Balık)
  20, // 3: Mart (<=20 Balık, >20 Koç)
  20, // 4: Nisan (<=20 Koç, >20 Boğa)
  21, // 5: Mayıs (<=21 Boğa, >21 İkizler)
  22, // 6: Haziran (<=22 İkizler, >22 Yengeç)
  22, // 7: Temmuz (<=22 Yengeç, >22 Aslan)
  22, // 8: Ağustos (<=22 Aslan, >22 Başak)
  22, // 9: Eylül (<=22 Başak, >22 Terazi)
  22, // 10: Ekim (<=22 Terazi, >22 Akrep)
  21, // 11: Kasım (<=21 Akrep, >21 Yay)
  21, // 12: Aralık (<=21 Yay, >21 Oğlak)
];

// Ay bazında eşik gününden ÖNCEKİ burç id'si
export const SIGNS_BEFORE_CUTOFF = [
  '',
  'oglak',   // Ocak <= 21
  'kova',    // Şubat <= 19
  'balik',   // Mart <= 20
  'koc',     // Nisan <= 20
  'boga',    // Mayıs <= 21
  'ikizler', // Haziran <= 22
  'yengec',  // Temmuz <= 22
  'aslan',   // Ağustos <= 22
  'basak',   // Eylül <= 22
  'terazi',  // Ekim <= 22
  'akrep',   // Kasım <= 21
  'yay',     // Aralık <= 21
];

// Ay bazında eşik gününden SONRAKİ burç id'si
export const SIGNS_AFTER_CUTOFF = [
  '',
  'kova',    // Ocak > 21
  'balik',   // Şubat > 19
  'koc',     // Mart > 20
  'boga',    // Nisan > 20
  'ikizler', // Mayıs > 21
  'yengec',  // Haziran > 22
  'aslan',   // Temmuz > 22
  'basak',   // Ağustos > 22
  'terazi',  // Eylül > 22
  'akrep',   // Ekim > 22
  'yay',     // Kasım > 21
  'oglak',   // Aralık > 21
];

// Switch-case kullanmadan 1 satırda hesaplama:
export function findZodiacByThreshold(day: number, month: number): ZodiacSign {
  const safeMonth = Math.min(Math.max(month, 1), 12);
  const cutoff = MONTH_CUTOFF_DAYS[safeMonth];
  const signId = day <= cutoff ? SIGNS_BEFORE_CUTOFF[safeMonth] : SIGNS_AFTER_CUTOFF[safeMonth];
  return ZODIAC_LIST.find((z) => z.id === signId) || ZODIAC_LIST[0];
}

/**
 * ------------------------------------------------------------------
 * ALGORİTMA 2: Dizi .find() Fonksiyonu ve Aralık Kontrolü (Functional)
 * SWITCH-CASE KULLANMADAN!
 * ------------------------------------------------------------------
 */
export function findZodiacByRange(day: number, month: number): ZodiacSign {
  const result = ZODIAC_LIST.find((sign) => {
    // Oğlak yılı bağladığı için özel durum (Aralık 22 - Ocak 21)
    if (sign.id === 'oglak') {
      return (month === 12 && day >= 22) || (month === 1 && day <= 21);
    }
    // Diğer tüm burçlar aynı yıl içinde iki ay arasındadır
    return (
      (month === sign.startMonth && day >= sign.startDay) ||
      (month === sign.endMonth && day <= sign.endDay)
    );
  });

  return result || ZODIAC_LIST[0];
}

/**
 * ------------------------------------------------------------------
 * ALGORİTMA 3: Sayısal Kodlama Yöntemi (Sayısal Karşılaştırma) - O(1)
 * Kod: ay * 100 + gün
 * Örnek: 21 Mart -> 321, 20 Nisan -> 420
 * SWITCH-CASE KULLANMADAN!
 * ------------------------------------------------------------------
 */
export function findZodiacByNumericCode(day: number, month: number): ZodiacSign {
  const code = month * 100 + day;

  if (code >= 321 && code <= 420) return ZODIAC_LIST.find((z) => z.id === 'koc')!;
  if (code >= 421 && code <= 521) return ZODIAC_LIST.find((z) => z.id === 'boga')!;
  if (code >= 522 && code <= 622) return ZODIAC_LIST.find((z) => z.id === 'ikizler')!;
  if (code >= 623 && code <= 722) return ZODIAC_LIST.find((z) => z.id === 'yengec')!;
  if (code >= 723 && code <= 822) return ZODIAC_LIST.find((z) => z.id === 'aslan')!;
  if (code >= 823 && code <= 922) return ZODIAC_LIST.find((z) => z.id === 'basak')!;
  if (code >= 923 && code <= 1022) return ZODIAC_LIST.find((z) => z.id === 'terazi')!;
  if (code >= 1023 && code <= 1121) return ZODIAC_LIST.find((z) => z.id === 'akrep')!;
  if (code >= 1122 && code <= 1221) return ZODIAC_LIST.find((z) => z.id === 'yay')!;
  if (code >= 1222 || code <= 121) return ZODIAC_LIST.find((z) => z.id === 'oglak')!;
  if (code >= 122 && code <= 219) return ZODIAC_LIST.find((z) => z.id === 'kova')!;
  if (code >= 220 && code <= 320) return ZODIAC_LIST.find((z) => z.id === 'balik')!;

  return ZODIAC_LIST[0];
}

/**
 * Ödev Test Senaryoları (12 Burç + Sınır Günleri)
 */
export interface TestCase {
  day: number;
  month: number;
  expectedName: string;
  category: 'Tam Aralık' | 'Sınır Günü (İlk Gün)' | 'Sınır Günü (Son Gün)';
  description: string;
}

export const HOMEWORK_TEST_CASES: TestCase[] = [
  { day: 21, month: 3, expectedName: 'Koç Burcu', category: 'Sınır Günü (İlk Gün)', description: '21 Mart: Koç başlangıç günü' },
  { day: 20, month: 4, expectedName: 'Koç Burcu', category: 'Sınır Günü (Son Gün)', description: '20 Nisan: Koç bitiş günü' },
  { day: 21, month: 4, expectedName: 'Boğa Burcu', category: 'Sınır Günü (İlk Gün)', description: '21 Nisan: Boğa başlangıç günü' },
  { day: 21, month: 5, expectedName: 'Boğa Burcu', category: 'Sınır Günü (Son Gün)', description: '21 Mayıs: Boğa bitiş günü' },
  { day: 22, month: 5, expectedName: 'İkizler Burcu', category: 'Sınır Günü (İlk Gün)', description: '22 Mayıs: İkizler başlangıç günü' },
  { day: 22, month: 6, expectedName: 'İkizler Burcu', category: 'Sınır Günü (Son Gün)', description: '22 Haziran: İkizler bitiş günü' },
  { day: 23, month: 6, expectedName: 'Yengeç Burcu', category: 'Sınır Günü (İlk Gün)', description: '23 Haziran: Yengeç başlangıç günü' },
  { day: 22, month: 7, expectedName: 'Yengeç Burcu', category: 'Sınır Günü (Son Gün)', description: '22 Temmuz: Yengeç bitiş günü' },
  { day: 23, month: 7, expectedName: 'Aslan Burcu', category: 'Sınır Günü (İlk Gün)', description: '23 Temmuz: Aslan başlangıç günü' },
  { day: 22, month: 8, expectedName: 'Aslan Burcu', category: 'Sınır Günü (Son Gün)', description: '22 Ağustos: Aslan bitiş günü' },
  { day: 23, month: 8, expectedName: 'Başak Burcu', category: 'Sınır Günü (İlk Gün)', description: '23 Ağustos: Başak başlangıç günü' },
  { day: 22, month: 9, expectedName: 'Başak Burcu', category: 'Sınır Günü (Son Gün)', description: '22 Eylül: Başak bitiş günü' },
  { day: 23, month: 9, expectedName: 'Terazi Burcu', category: 'Sınır Günü (İlk Gün)', description: '23 Eylül: Terazi başlangıç günü' },
  { day: 22, month: 10, expectedName: 'Terazi Burcu', category: 'Sınır Günü (Son Gün)', description: '22 Ekim: Terazi bitiş günü' },
  { day: 23, month: 10, expectedName: 'Akrep Burcu', category: 'Sınır Günü (İlk Gün)', description: '23 Ekim: Akrep başlangıç günü' },
  { day: 21, month: 11, expectedName: 'Akrep Burcu', category: 'Sınır Günü (Son Gün)', description: '21 Kasım: Akrep bitiş günü' },
  { day: 22, month: 11, expectedName: 'Yay Burcu', category: 'Sınır Günü (İlk Gün)', description: '22 Kasım: Yay başlangıç günü' },
  { day: 21, month: 12, expectedName: 'Yay Burcu', category: 'Sınır Günü (Son Gün)', description: '21 Aralık: Yay bitiş günü' },
  { day: 22, month: 12, expectedName: 'Oğlak Burcu', category: 'Sınır Günü (İlk Gün)', description: '22 Aralık: Oğlak başlangıç günü' },
  { day: 21, month: 1, expectedName: 'Oğlak Burcu', category: 'Sınır Günü (Son Gün)', description: '21 Ocak: Oğlak bitiş günü' },
  { day: 22, month: 1, expectedName: 'Kova Burcu', category: 'Sınır Günü (İlk Gün)', description: '22 Ocak: Kova başlangıç günü' },
  { day: 19, month: 2, expectedName: 'Kova Burcu', category: 'Sınır Günü (Son Gün)', description: '19 Şubat: Kova bitiş günü' },
  { day: 20, month: 2, expectedName: 'Balık Burcu', category: 'Sınır Günü (İlk Gün)', description: '20 Şubat: Balık başlangıç günü' },
  { day: 20, month: 3, expectedName: 'Balık Burcu', category: 'Sınır Günü (Son Gün)', description: '20 Mart: Balık bitiş günü' },
];

/**
 * Çoklu Dilde Ödev Çözüm Kodları (Enes Öztürk İmzalı)
 */
export const CODE_SOLUTIONS = {
  python: {
    language: 'Python',
    filename: 'burc_hesaplayici.py',
    description: 'Python Dizi İndeksleme ve Eşik Günü Yöntemi (Switch-Case Kullanılmamıştır)',
    code: `"""
============================================================
Ödev: Doğum Tarihine Göre Burç Hesaplama (Switch-Case Kullanmadan)
Hazırlayan: Enes Öztürk
Dil: Python 3
============================================================
"""

# Her ayın kırılma günü (Ocak=1 .. Aralık=12)
ESIK_GUNLER = [0, 21, 19, 20, 20, 21, 22, 22, 22, 22, 22, 21, 21]

# Eşik gününden önce (gün <= EŞİK) gelen burçlar
ONCEKI_BURCLAR = [
    "", "Oğlak", "Kova", "Balık", "Koç", "Boğa",
    "İkizler", "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay"
]

# Eşik gününden sonra (gün > EŞİK) gelen burçlar
SONRAKI_BURCLAR = [
    "", "Kova", "Balık", "Koç", "Boğa", "İkizler",
    "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay", "Oğlak"
]

def burc_bul(gun: int, ay: int) -> str:
    """
    Switch-case KULLANMADAN O(1) zaman karmaşıklığı ile
    dizi indisleme üzerinden burcu bulur.
    Hazırlayan: Enes Öztürk
    """
    if not (1 <= ay <= 12) or not (1 <= gun <= 31):
        return "Geçersiz Gün veya Ay!"
    
    # Tek satırlık karar mantığı (switch-case yok!)
    return ONCEKI_BURCLAR[ay] if gun <= ESIK_GUNLER[ay] else SONRAKI_BURCLAR[ay]

# Örnek Test Kullanımı
if __name__ == "__main__":
    print("--- Enes Öztürk Burç Hesaplayıcı ---")
    gun = int(input("Doğduğunuz Günü Giriniz (1-31): "))
    ay = int(input("Doğduğunuz Ayı Giriniz (1-12): "))
    
    sonuc = burc_bul(gun, ay)
    print(f"\\nTarih: {gun}/{ay} -> Burcunuz: {sonuc} Burcu")
`,
  },
  javascript: {
    language: 'JavaScript / TypeScript',
    filename: 'burcHesapla.ts',
    description: 'Modern TypeScript / ES6+ Nesne ve Fonksiyonel Dizi Yöntemi',
    code: `/**
 * ============================================================
 * Ödev: Doğum Tarihine Göre Burç Hesaplama (Switch-Case Kullanmadan)
 * Hazırlayan: Enes Öztürk
 * Dil: TypeScript / JavaScript (Node.js & Tarayıcı)
 * ============================================================
 */

// 1. Her ayın kritik geçiş günü (1=Ocak, 12=Aralık)
const ESIK_GUNLER = [0, 21, 19, 20, 20, 21, 22, 22, 22, 22, 22, 21, 21];

// 2. Ayın eşik günü ve öncesindeki burçlar
const ONCEKI_BURCLAR = [
  "", "Oğlak", "Kova", "Balık", "Koç", "Boğa",
  "İkizler", "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay"
];

// 3. Ayın eşik gününden sonraki burçlar
const SONRAKI_BURCLAR = [
  "", "Kova", "Balık", "Koç", "Boğa", "İkizler",
  "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay", "Oğlak"
];

/**
 * Switch-case kullanmadan O(1) indeksleme ile burç bulma fonksiyonu.
 * Hazırlayan: Enes Öztürk
 */
function burcHesapla(gun: number, ay: number): string {
  if (ay < 1 || ay > 12 || gun < 1 || gun > 31) {
    throw new Error("Geçersiz gün veya ay değeri!");
  }

  // Switch-case yerine dizi indisi ve ternary koşul operatörü
  return gun <= ESIK_GUNLER[ay] ? ONCEKI_BURCLAR[ay] : SONRAKI_BURCLAR[ay];
}

// Konsol Testi
console.log("21 Mart ->", burcHesapla(21, 3)); // Koç
console.log("15 Temmuz ->", burcHesapla(15, 7)); // Yengeç
console.log("24 Aralık ->", burcHesapla(24, 12)); // Oğlak
// İmza: Enes Öztürk
`,
  },
  csharp: {
    language: 'C#',
    filename: 'Program.cs',
    description: 'C# .NET Dizi Eşleme Yaklaşımı (Switch-Case Kullanılmamıştır)',
    code: `/*
============================================================
Ödev: Doğum Tarihine Göre Burç Hesaplama (Switch-Case Kullanmadan)
Hazırlayan: Enes Öztürk
Dil: C# (.NET)
============================================================
*/

using System;

class Program
{
    // Her ayın eşik günleri (İndis 1 = Ocak .. İndis 12 = Aralık)
    static readonly int[] EsikGunler = { 0, 21, 19, 20, 20, 21, 22, 22, 22, 22, 22, 21, 21 };

    static readonly string[] OncekiBurclar = {
        "", "Oğlak", "Kova", "Balık", "Koç", "Boğa",
        "İkizler", "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay"
    };

    static readonly string[] SonrakiBurclar = {
        "", "Kova", "Balık", "Koç", "Boğa", "İkizler",
        "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay", "Oğlak"
    };

    public static string BurcBul(int gun, int ay)
    {
        // Switch-case kullanılmadan O(1) lookup
        if (ay < 1 || ay > 12 || gun < 1 || gun > 31)
            return "Geçersiz Tarih!";

        return gun <= EsikGunler[ay] ? OncekiBurclar[ay] : SonrakiBurclar[ay];
    }

    static void Main()
    {
        Console.WriteLine("=== Enes Öztürk - Burç Hesaplama (Switch-Case'siz) ===");
        Console.Write("Doğum Gününüzü Giriniz: ");
        int gun = Convert.ToInt32(Console.ReadLine());

        Console.Write("Doğum Ayınızı Giriniz (1-12): ");
        int ay = Convert.ToInt32(Console.ReadLine());

        string burc = BurcBul(gun, ay);
        Console.WriteLine($"\\nSonuç: {burc} Burcu");
        Console.WriteLine("Hazırlayan: Enes Öztürk");
    }
}
`,
  },
  java: {
    language: 'Java',
    filename: 'BurcHesaplayici.java',
    description: 'Java Nesne Tabanlı Dizi ve Aralık Kontrolü (Switch-Case Yok)',
    code: `/*
============================================================
Ödev: Doğum Tarihine Göre Burç Hesaplama (Switch-Case Kullanmadan)
Hazırlayan: Enes Öztürk
Dil: Java
============================================================
*/

import java.util.Scanner;

public class BurcHesaplayici {
    // Kritik ay eşik günleri
    private static final int[] ESIK_GUNLER = {0, 21, 19, 20, 20, 21, 22, 22, 22, 22, 22, 21, 21};

    private static final String[] ONCEKI_BURCLAR = {
        "", "Oğlak", "Kova", "Balık", "Koç", "Boğa",
        "İkizler", "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay"
    };

    private static final String[] SONRAKI_BURCLAR = {
        "", "Kova", "Balık", "Koç", "Boğa", "İkizler",
        "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay", "Oğlak"
    };

    /**
     * Switch-case kullanmadan O(1) hızında burcu tespit eder.
     * Hazırlayan: Enes Öztürk
     */
    public static String burcBul(int gun, int ay) {
        if (ay < 1 || ay > 12 || gun < 1 || gun > 31) {
            return "Geçersiz Tarih";
        }
        return gun <= ESIK_GUNLER[ay] ? ONCEKI_BURCLAR[ay] : SONRAKI_BURCLAR[ay];
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ödev: Burç Hesaplama (Switch-Case Kullanmadan)");
        System.out.println("Hazırlayan: Enes Öztürk");
        
        System.out.print("Doğum Gününüz: ");
        int gun = scanner.nextInt();
        
        System.out.print("Doğum Ayınız (1-12): ");
        int ay = scanner.nextInt();
        
        String burc = burcBul(gun, ay);
        System.out.println("Burcunuz: " + burc + " Burcu");
        scanner.close();
    }
}
`,
  },
  cpp: {
    language: 'C++',
    filename: 'burc_hesapla.cpp',
    description: 'C++ Modern STL ve Dizi Eşleme Çözümü',
    code: `/*
============================================================
Ödev: Doğum Tarihine Göre Burç Hesaplama (Switch-Case Kullanmadan)
Hazırlayan: Enes Öztürk
Dil: C++ (Modern C++17)
============================================================
*/

#include <iostream>
#include <string>
#include <vector>

const int ESIK_GUNLER[13] = {0, 21, 19, 20, 20, 21, 22, 22, 22, 22, 22, 21, 21};

const std::string ONCEKI[13] = {
    "", "Oğlak", "Kova", "Balık", "Koç", "Boğa",
    "İkizler", "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay"
};

const std::string SONRAKI[13] = {
    "", "Kova", "Balık", "Koç", "Boğa", "İkizler",
    "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay", "Oğlak"
};

// Switch-case kullanmadan 1 satırda hesaplama
std::string burcBul(int gun, int ay) {
    if (ay < 1 || ay > 12 || gun < 1 || gun > 31) return "Geçersiz";
    return (gun <= ESIK_GUNLER[ay]) ? ONCEKI[ay] : SONRAKI[ay];
}

int main() {
    std::cout << "--- Hazırlayan: Enes Öztürk ---" << std::endl;
    int gun, ay;
    std::cout << "Doğum Günü: ";
    std::cin >> gun;
    std::cout << "Doğum Ayı (1-12): ";
    std::cin >> ay;

    std::cout << "Burcunuz: " << burcBul(gun, ay) << " Burcu" << std::endl;
    return 0;
}
`,
  },
};
