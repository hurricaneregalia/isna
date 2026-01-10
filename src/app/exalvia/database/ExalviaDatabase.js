// Import semua icon yang digunakan dalam loop
import { BiSolidMessageCheck, BiTargetLock } from "react-icons/bi";
import { FaSearch, FaPenNib, FaMoon, FaRocket, FaShieldAlt, FaInstagram, FaLinkedin, FaTwitter, FaBox, FaBullseye, FaTag, FaBullhorn, FaPalette } from "react-icons/fa";
import { FaRegEye, FaRegFaceTired, FaToggleOn } from "react-icons/fa6";
import { GiCrackedGlass, GiSwordBreak } from "react-icons/gi";
import { HiChat, HiLightBulb, HiOutlineDocumentDuplicate, HiShieldCheck, HiTrendingUp, HiUserGroup } from "react-icons/hi";
import { IoDocumentText, IoSparkles } from "react-icons/io5";
import { MdOutlineMonetizationOn, MdOutlineMoneyOffCsred } from "react-icons/md";
import { HiCheckBadge } from "react-icons/hi2";
import { RiSwordFill } from "react-icons/ri";
import { TfiTarget } from "react-icons/tfi";
import { FiFileText, FiGlobe } from "react-icons/fi";
import { LuBadgeCheck } from "react-icons/lu";

const ipad1 = "/images/templateLandingPageBonus/Exalvia/sections/ipad-happy.webp";
const ipad2 = "/images/templateLandingPageBonus/Exalvia/sections/ipad-bingung-2.webp";
const ipadHero = "/images/templateLandingPageBonus/Exalvia/sections/ipad-hero.webp";
const ipadBonus = "/images/templateLandingPageBonus/Exalvia/sections/ipad-bonus.webp";
const heroResult = "/images/templateLandingPageBonus/Exalvia/sections/hero-result.webp";

const heroBg1 = "/images/templateLandingPageBonus/Exalvia/sections/hero-bg-1.webp";
const heroBg2 = "/images/templateLandingPageBonus/Exalvia/sections/hero-bg-2.webp";

// Brand checker red flags based on category thresholds
const brandCheckerFlags = {
  // Specific question-based flags
  "8-1": "Hanya mengandalkan harga murah berisiko terjebak perang harga yang tidak sehat.",
  "15-1": "Langsung menawarkan produk tanpa membangun rapport bisa menurunkan potensi konversi.",
  "16-2": "Menurunkan harga saat penjualan turun berisiko merusak persepsi nilai brand.",
  "16-3": "Pasif saat penjualan turun bisa membuat brand tertinggal jauh dari kompetitor.",
  "22-2": "Terlalu banyak variasi logo - perlu konsistensi visual agar brand mudah diingat.",
  "23-1": "Kualitas identitas visual sangat rendah, perlu identitas visual yang lebih kuat.",
  "23-3": "Identitas visual yang belum terencana dengan baik memerlukan perhatian khusus.",

  // Category-based flags (triggered when score is below threshold)
  "PI-LOW": "Informasi Produk belum jelas sehingga calon pembeli sulit memahami apa yang Anda tawarkan.",
  "TA-LOW": "Target pasar belum spesifik sehingga pesan marketing berpotensi tidak tepat sasaran.",
  "HA-LOW": "Strategi harga belum selaras dengan value yang dirasakan pasar.",
  "CM-LOW": "Cara menjual belum terstruktur sehingga potensi konversi belum maksimal.",
  "RE-LOW": "Refleksi dan kepercayaan diri terhadap brand masih lemah.",
  "IV-LOW": "Identitas visual belum konsisten sehingga brand sulit diingat.",
};

// Threshold for category scores (below this = flag triggered)
const categoryThresholds = {
  PI: 50, // Informasi Produk
  TA: 50, // Target
  HA: 50, // Harga
  CM: 50, // Cara Menjual
  RE: 50, // Reflektif
  IV: 50, // Identitas Visual
};
const priceCore = 1900000;
const priceDecoy1 = 890000;
const priceDecoy2 = priceDecoy1 + 600000;
const siteName = "Kalamana Copy";
const tagline = "tagline";
const description =
  "membantu brand muslim merumuskan pesan penjualan yang tepat, dengan memahami kondisi brand dan mengarahkannya menjadi daya tarik yang khas di mata pembeli, agar produk bernilai tinggi tidak terjebak perang harga.";
const keywords =
  "strategi branding muslim, pesan penjualan brand muslim, positioning brand muslim, diferensiasi brand muslim, nilai jual produk muslim, branding produk halal, komunikasi pemasaran muslim, strategi harga premium muslim, branding tanpa perang harga, daya tarik brand muslim, branding bisnis muslim, strategi pemasaran syariah, brand muslim bernilai tinggi, value based marketing, value base muslim brand, vbmb";
const logoFullLight = "/images/templateLandingPageBonus/Exalvia/site-Identity/kalamana-copy_logo-full-light.svg";
const logoGramLight = "/images/templateLandingPageBonus/Exalvia/site-Identity/kalamana-copy_logo-gram-light.svg";
const logoFullDark = "/images/templateLandingPageBonus/Exalvia/site-Identity/kalamana-copy_logo-full.svg";
const logoGramDark = "/images/templateLandingPageBonus/Exalvia/site-Identity/kalamana-copy_logo-gram.svg";
const ogImage = "/images/templateLandingPageBonus/Exalvia/site-Identity/ogImage.webp";
const faviconUrl = "/favicon.ico";
const email = "kalamanacopy@gmail.com";
const phone = "6282127902505";
const address = "Banjar, Jawa Barat";

const ExalviaDatabase = {
  siteidentity: {
    siteName: siteName,
    tagline: tagline,
    description: description,
    keywords: keywords,
    logoUrl: logoGramLight,
    ogImage: ogImage,
    faviconUrl: faviconUrl,
    email: email,
    phone: phone,
    address: address,
  },
  navbar: {
    logoFullLight: logoFullLight,
    logoFullDark: logoFullDark,
    logoGramLight: logoGramLight,
    logoGramDark: logoGramDark,
    brandName: "Kalamana Copy",
    menu: [
      { label: "Masalah", link: "masalah" },
      { label: "Solusi", link: "solusi" },
      { label: "Scan", link: "scan" },
      { label: "Keuntungan", link: "keuntungan" },
    ],
  },
  hero: {
    headline: "Cara cerdas menjual produk branded secara online di atas kompetitor.",
    subheadline: "Spesial produk Ramadhan!.",
    buttonLabel: "Konsultasi",
    backgroundImage: heroBg1,
    image: ipadHero,
  },
  clientLogo: {
    title: "Telah Dipercaya Oleh Brand Terkemuka",
    logos: [
      { name: "Brand 1", src: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png" },
      { name: "Brand 2", src: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png" },
      { name: "Brand 3", src: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png" },
      { name: "Brand 4", src: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png" },
      { name: "Brand 5", src: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png" },
      { name: "Brand 6", src: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png" },
      { name: "Brand 7", src: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png" },
      { name: "Brand 8", src: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png" },
    ],
  },
  fact: {
    label: "Masalah",
    title: "Banyak pemilik produk branded muslim mengalami pola yang sama.",
    description: "Produk yang dibuat sudah berkualitas, sudah menggunakan iklan berbayar untuk promosi, sudah ikut tren marketplace, namun ini yang terjadi:",
    image: ipad2,
    items: [
      { title: "Harga ideal sulit untuk dipertahankan.", icon: <MdOutlineMoneyOffCsred /> },
      { title: "Mudah terjerumus ke dalam perang harga.", icon: <RiSwordFill /> },
      { title: "Produk tidak dianggap lebih baik.", icon: <HiOutlineDocumentDuplicate /> },
      { title: "Promosi berjalan tapi tanpa perubahan.", icon: <FaRegFaceTired /> },
    ],
  },
  fenomenon: {
    label: "Solusi",
    title: "Berikan calon pembeli alsan yang tepat.",
    description: "Mereka tidak menolak, calon pembeli hanya belum melihat alasan yang cukup kuat untuk membayar lebih. Buat mereka mendapatkan alasan itu dengan:",
    image: ipad1,
    additionalText: "Orang suka dengan pesan penjualan yang menarik.",
    items: [
      { title: "Sampaikan nilai produk dengan baik.", icon: <IoSparkles /> },
      { title: "Bentuk kepercayaan brand yang kuat.", icon: <HiCheckBadge /> },
      { title: "Jual produk atau jasa yang berbeda.", icon: <FaToggleOn /> },
      { title: "Buat pesan promosi yang menarik.", icon: <BiSolidMessageCheck /> },
    ],
  },
  solution: {
    label: "Penting",
    title: "Sebenarnya calon pembeli tidak menolak produk Anda.",
    description: "Calong pembeli hanya belum melihat alasan yang cukup kuat untuk membayar lebih. Dan hal ini sering terjadi karena:",
    image: ipad2,
    items: [
      { title: "Nilai produk tidak tersampaikan.", icon: <HiUserGroup /> },
      { title: "Kepercayaan brand belum terbentuk", icon: <HiLightBulb /> },
      { title: "Brand terlihat mirip kompetitor murah", icon: <HiChat /> },
      { title: "Pesan promosi tidak dipahami pembeli", icon: <HiChat /> },
    ],
  },
  hadist: {
    arabic: "إِنَّ اللهَ طَيِّبٌ يُحِبُّ الطَّيِّبَ، نَظِيفٌ يُحِبُّ النَّظَافَةَ",
    translation: "Sesungguhnya Allah itu Maha Baik dan mencintai kebaikan, Maha Bersih dan mencintai kebersihan.",
    source: "HR. At-Tirmidzi",
    context: "Kebersihan dan profesionalitas dalam bisnis adalah cerminan iman.",
    image: "/images/templateLandingPageBonus/Exalvia/sections/ipad-1.webp",
  },
  howItWork: {
    label: "Alur Kerja",
    title: "Bagaimana Exalvia Bekerja",
    subtitle: "Proses terstruktur untuk memastikan copy yang akurat, persuasif, dan sesuai nilai brand Anda.",
    steps: [
      {
        title: "Discovery & Brief",
        description: "Menggali positioning, target audiens, dan tujuan bisnis secara mendalam.",
        icon: <FaSearch />,
      },
      {
        title: "Copy Strategy",
        description: "Menyusun big idea, angle, dan struktur persuasi yang relevan untuk pasar Anda.",
        icon: <FaPenNib />,
      },
      {
        title: "Draft & Review",
        description: "Menyusun draf copy, iterasi bersama klien, lalu finalisasi dengan QA linguistik.",
        icon: <FaShieldAlt />,
      },
    ],
    image: ipad2,
    patternImage: "https://www.transparenttextures.com/patterns/arabesque.png",
  },
  benefits: {
    label: "Keuntungan",
    title: "6 Keuntungan dari SCAN BRAND",
    subtitle: "Scan brand dapat mengidentifikasi kelebihan dan kekurangan brand Anda saat ini terkait hal-hal berikut:",
    callToAction: "Manfaatkan semua informasi potensial di atas untuk menguatkan brand Anda sekarang juga!",
    items: [
      {
        title: "Informasi Produk",
        description: "Menilai apakah informasi produk sudah jelas, ringkas, dan mudah dipahami.",
        icon: <FiFileText />,
      },
      {
        title: "Target Pasar",
        description: "Menilai apakah target pasar sudah tepat atau justru salah sasaran.",
        icon: <BiTargetLock />,
      },
      {
        title: "Strategi Harga",
        description: "Menilai kesesuaian harga dengan brand serta target pasar yang dituju.",
        icon: <MdOutlineMonetizationOn />,
      },
      {
        title: "Strategi Promosi Online",
        description: "Menilai jangkauan promosi serta tingkat interaksi dari pelanggan.",
        icon: <FiGlobe />,
      },
      {
        title: "Identitas Visual",
        description: "Menilai kualitas dan konsistensi identitas visual yang digunakan.",
        icon: <FaRegEye />,
      },
      {
        title: "Rekomendasi",
        description: "Memberikan arahan strategis untuk pengembangan brand ke depan.",
        icon: <LuBadgeCheck />,
      },
    ],
  },
  service: {
    label: "Paket Layanan",
    title: "Pilih Skema yang Sesuai",
    subtitle: "Mulai dari audit copy hingga paket lengkap landing page premium.",
    plans: [
      {
        name: "Audit Copy",
        price: "1.5 jt",
        period: "per proyek",
        info: "Review lengkap + rekomendasi perbaikan",
        rating: 4,
        highlight: false,
        ctaLabel: "Pilih Paket",
        features: [
          { text: "Audit headline & CTA", included: true },
          { text: "Checklist UX copy", included: true },
          { text: "Implementasi penuh", included: false },
        ],
        turnaround: "2-3 hari kerja",
      },
      {
        name: "Landing Page Pro",
        price: "4.5 jt",
        period: "per page",
        info: "Copy lengkap + struktur persuasi + riset",
        rating: 5,
        highlight: true,
        ctaLabel: "Pilih Paket",
        features: [
          { text: "Riset audiens & kompetitor", included: true },
          { text: "Copy hero hingga CTA", included: true },
          { text: "2x revisi mayor", included: true },
          { text: "Visual design", included: false },
        ],
        turnaround: "6-7 hari kerja",
      },
      {
        name: "Scale Up Bundle",
        price: "8 jt",
        period: "per kampanye",
        info: "Untuk brand yang butuh multi-page + angle testing",
        rating: 5,
        highlight: false,
        ctaLabel: "Pilih Paket",
        features: [
          { text: "2 Landing page varian", included: true },
          { text: "A/B copy headline", included: true },
          { text: "Copy email follow-up", included: true },
          { text: "Desain UI", included: false },
        ],
        turnaround: "10-12 hari kerja",
      },
    ],
  },
  flow: {
    label: "Alur Project",
    title: "Flow Kerja yang Transparan",
    subtitle: "Setiap tahap memiliki deliverable jelas agar Anda selalu tahu progres.",
    items: [
      {
        title: "Kickoff & Goal Setting",
        description: "Menetapkan tujuan konversi, ICP, dan prioritas pesan.",
        image: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Drafting & Review",
        description: "Menyusun copy awal, lalu review bersama untuk penyelarasan tone.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "QA & Handover",
        description: "Proofreading, konsistensi gaya, dan serah-terima siap produksi.",
        image: "https://images.unsplash.com/photo-1521790945508-bf2a36314e85?q=80&w=2072&auto=format&fit=crop",
      },
    ],
  },
  cta1: {
    label: "Scan",
    title: "Temukan elemen-elemen penting! Bantu tingkatkan penjualan brand lebih optimal!",
    description: "Klik “SCAN BRAND” pahami kondisi brand Anda saat ini, tumbuhlah lebih sehat hindari jebakan perang harga.",
    primaryLabel: "Mulai Konsultasi",
    primaryHref: "https://wa.me/6281234567890",
    whatsappLabel: "Chat WhatsApp",
    whatsappHref: "https://wa.me/6281234567890",
  },
  bonus: {
    label: "Bonus Eksklusif",
    title: "Bonus Spesial!",
    image: ipadBonus,
    urgencyTitle: "Countdown bonus berakhir dalam:",
    countdownTarget: "2026-01-25T23:59:59Z",
  },
  testimonials: {
    label: "Testimoni Klien",
    title: "Dipercaya Founder & Brand Manager",
    subtitle: "Cerita nyata dari klien yang merasakan dampak copy Exalvia.",
    items: [
      {
        name: "Aisyah Rahma",
        role: "CMO, HijabLux",
        avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop",
        text: "Copy Exalvia bikin landing kami terasa elegan tapi tetap menjual. Conversion naik 38% dalam 2 minggu.",
        platform: "instagram",
      },
      {
        name: "Fikri Pratama",
        role: "Founder, HalalTech",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
        text: "Risetnya dalam, tone-nya pas untuk audiens muslim profesional. Revisi sangat minim.",
        platform: "linkedin",
      },
      {
        name: "Sarah Nabila",
        role: "Growth Lead, EduSunnah",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop",
        text: "Mereka bantu framing value yang jelas, CTA jadi lebih kuat. Retainer langsung kami perpanjang.",
        platform: "x",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Pertanyaan yang Sering Diajukan",
    subtitle: "Jawaban singkat agar Anda yakin sebelum mulai.",
    contact: { text: "Butuh jawaban cepat? WhatsApp kami", href: "https://wa.me/6281234567890" },
    items: [
      {
        question: "Berapa lama proses penulisan satu landing page?",
        answer: "Rata-rata 6-7 hari kerja termasuk 1-2 kali review bersama.",
      },
      {
        question: "Apakah termasuk desain visual?",
        answer: "Fokus kami pada copy. Namun kami berikan arahan visual dan sectioning untuk designer Anda.",
      },
      {
        question: "Apakah tersedia revisi?",
        answer: "Ya, paket utama mencakup 2x revisi mayor. Revisi minor tidak dibatasi selama masih dalam scope awal.",
      },
      {
        question: "Apakah bisa retainer bulanan?",
        answer: "Bisa, untuk kebutuhan multi-landing atau konten funneling. Hubungi kami untuk paket khusus.",
      },
    ],
  },
  footer: {
    copyright: "Kalamana Copy",
    socials: [
      { label: "Instagram", href: "https://instagram.com/exalvia", icon: <FaInstagram /> },
      { label: "LinkedIn", href: "https://linkedin.com/company/exalvia", icon: <FaLinkedin /> },
      { label: "X", href: "https://x.com/exalvia", icon: <FaTwitter /> },
    ],
  },
  features: {
    label: "Fitur Unggulan",
    title: "Fondasi Komunikasi Bisnis",
    subtitle: "Sistem yang dirancang khusus untuk memperkuat pengaruh brand Anda di pasar.",
    items: [
      {
        title: "Riset Kompetitor",
        description: "Kami memastikan copywriting Anda lebih unggul dari pesaing.",
        icon: <FaSearch />,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      },
      {
        title: "Bahasa Persuasif",
        description: "Teknik penulisan yang mendorong tindakan instan.",
        icon: <FaPenNib />,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      },
      {
        title: "Visual Islami",
        description: "Sentuhan estetika yang sesuai dengan nilai-nilai syariah.",
        icon: <FaMoon />,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Alur Konversi",
        description: "Memastikan pembaca melakukan tindakan nyata.",
        icon: <FaMoon />,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Optimasi Kata Kunci",
        description: "Menggunakan diksi yang relevan bagi pelanggan.",
        icon: <FaMoon />,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      },
      {
        title: "Audit Struktur Penawaran",
        description: "Menemukan celah kebocoran penjualan.",
        icon: <FaMoon />,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
  brandChecker: {
    questions: [
      {
        id: 1,
        question: "Apa yang saat ini Anda jual?",
        category: "Informasi Produk",
        options: [
          { text: "Produk", score: 4 },
          { text: "Jasa", score: 4 },
          { text: "Produk dan jasa", score: 2 },
          { text: "Belum punya produk atau jasa", score: 1 },
        ],
      },
      {
        id: 2,
        question: "Seberapa paham Anda dengan manfaat utama produk atau jasa Anda?",
        category: "Informasi Produk",
        options: [
          { text: "Sangat paham dan jelas", score: 4 },
          { text: "Cukup paham", score: 3 },
          { text: "Masih ragu-ragu", score: 2 },
          { text: "Tidak paham", score: 1 },
        ],
      },
      {
        id: 3,
        question: "Apakah Anda memiliki kompetitor dengan produk atau jasa yang mirip?",
        category: "Informasi Produk",
        options: [
          { text: "Ya, ada", score: 4 },
          { text: "Tidak ada", score: 2 },
          { text: "Ada, tapi tidak terlalu peduli", score: 1 },
          { text: "Tidak tahu", score: 1 },
        ],
      },
      {
        id: 4,
        question: "Apakah produk atau jasa Anda memiliki perbedaan dibandingkan kompetitor?",
        category: "Informasi Produk",
        options: [
          { text: "Ada perbedaan yang jelas", score: 4 },
          { text: "Tidak ada perbedaan", score: 1 },
          { text: "Belum yakin", score: 1 },
          { text: "Tidak tahu", score: 1 },
        ],
      },
      {
        id: 5,
        question: "Apakah Anda tahu siapa target utama pengguna produk atau jasa Anda?",
        category: "Target",
        options: [
          { text: "Tahu dengan jelas", score: 4 },
          { text: "Tahu secara umum", score: 3 },
          { text: "Masih ragu", score: 2 },
          { text: "Tidak tahu", score: 1 },
        ],
      },
      {
        id: 6,
        question: "Berapa jumlah target pasar utama untuk satu brand Anda?",
        category: "Target",
        options: [
          { text: "Satu target pasar saja", score: 4 },
          { text: "Dua target pasar yang mirip", score: 2 },
          { text: "Dua target pasar dengan kriteria berbeda", score: 1 },
          { text: "Banyak dan beragam", score: 1 },
        ],
      },
      {
        id: 7,
        question: "Channel online mana yang paling banyak menghasilkan penjualan saat ini?",
        category: "Target",
        options: [
          { text: "Landing page / website", score: 4 },
          { text: "Marketplace (Tokopedia, Shopee, Lazada)", score: 4 },
          { text: "Media sosial (Instagram, Facebook, TikTok, WhatsApp)", score: 4 },
          { text: "Belum pernah dicek", score: 1 },
        ],
      },
      {
        id: 8,
        question: "Menurut Anda, apa alasan utama orang membeli produk Anda?",
        category: "Target",
        options: [
          { text: "Karena kualitasnya bagus", score: 4 },
          { text: "Karena harganya murah", score: 2 },
          { text: "Karena promo atau diskon", score: 2 },
          { text: "Tidak tahu", score: 1 },
        ],
      },
      {
        id: 9,
        question: "Bagaimana posisi harga produk Anda dibandingkan kompetitor?",
        category: "Harga",
        options: [
          { text: "Lebih murah", score: 4 },
          { text: "Lebih mahal", score: 4 },
          { text: "Sama saja", score: 4 },
          { text: "Tidak tahu harga kompetitor", score: 1 },
        ],
      },
      {
        id: 10,
        question: "Apa yang biasanya Anda lakukan jika kompetitor menjual lebih murah?",
        category: "Harga",
        options: [
          { text: "Mempertahankan harga dan mengedukasi kualitas", score: 4 },
          { text: "Menurunkan harga", score: 2 },
          { text: "Mengganti produk", score: 2 },
          { text: "Tidak melakukan apa-apa", score: 1 },
        ],
      },
      {
        id: 11,
        question: "Apa yang Anda lakukan jika harga kompetitor lebih mahal dari produk Anda?",
        category: "Harga",
        options: [
          { text: "Mempertahankan harga dan promosi", score: 4 },
          { text: "Mempertahankan harga", score: 3 },
          { text: "Ikut menaikkan harga supaya lebih untung", score: 2 },
          { text: "Tidak melakukan apa-apa", score: 1 },
        ],
      },
      {
        id: 12,
        question: "Apa pertimbangan utama Anda dalam menentukan harga produk?",
        category: "Harga",
        options: [
          { text: "Agar menarik banyak pembeli dengan harga terjangkau", score: 4 },
          { text: "Agar produk dianggap berkualitas bagus dengan harga mahal", score: 4 },
          { text: "Agar kompetitif dengan harga kompetitor", score: 3 },
          { text: "Yang penting dapat untung", score: 1 },
        ],
      },
      {
        id: 13,
        question: "Seberapa sering calon pembeli baru menanyakan hal yang sama seperti pembeli sebelumnya?",
        category: "Cara Menjual",
        options: [
          { text: "Jarang bertanya dan terjadi penjualan", score: 4 },
          { text: "Sering bertanya dan terjadi penjualan", score: 3 },
          { text: "Jarang bertanya tapi tidak ada penjualan", score: 2 },
          { text: "Sering bertanya tapi tidak ada penjualan", score: 1 },
        ],
      },
      {
        id: 14,
        question: "Apakah Anda sudah memiliki alur penjualan?",
        category: "Cara Menjual",
        options: [
          { text: "Sudah punya", score: 4 },
          { text: "Ingin membuat", score: 2 },
          { text: "Belum punya", score: 1 },
          { text: "Tidak tahu", score: 1 },
        ],
      },
      {
        id: 15,
        question: "Apa yang biasanya Anda lakukan saat pertama kali bertemu calon pembeli?",
        category: "Cara Menjual",
        options: [
          { text: "Mencari tahu atau menanyakan kebutuhan calon pembeli", score: 4 },
          { text: "Langsung menawarkan produk", score: 2 },
          { text: "Menawarkan promo atau diskon", score: 2 },
          { text: "Bingung harus melakukan apa", score: 1 },
        ],
      },
      {
        id: 16,
        question: "Apa yang biasanya Anda lakukan ketika penjualan menurun?",
        category: "Cara Menjual",
        options: [
          { text: "Mengevaluasi cara menjual", score: 4 },
          { text: "Mengevaluasi produk", score: 4 },
          { text: "Menurunkan harga", score: 2 },
          { text: "Menunggu saja", score: 1 },
        ],
      },
      {
        id: 17,
        question: "Bagaimana perasaan Anda saat melihat laporan penjualan 3 bulan terakhir?",
        category: "Reflektif",
        options: [
          { text: "Senang", score: 4 },
          { text: "Biasa saja", score: 3 },
          { text: "Cemas", score: 2 },
          { text: "Tidak pernah melihat laporan", score: 1 },
        ],
      },
      {
        id: 18,
        question: "Apa tantangan terbesar dalam penjualan Anda saat ini?",
        category: "Reflektif",
        options: [
          { text: "Tidak ada", score: 4 },
          { text: "Produk belum dikenal dengan baik", score: 3 },
          { text: "Harga terasa lebih mahal", score: 3 },
          { text: "Belum tahu target pembeli yang tepat", score: 3 },
        ],
      },
      {
        id: 19,
        question: "Menurut Anda, apakah produk Anda sudah bagus?",
        category: "Reflektif",
        options: [
          { text: "Ya, sudah bagus", score: 4 },
          { text: "Belum bagus", score: 2 },
          { text: "Masih ragu", score: 2 },
          { text: "Tidak tahu standar penilaiannya", score: 1 },
        ],
      },
      {
        id: 20,
        question: "Apakah brand Anda sudah memiliki logo?",
        category: "Identitas Visual",
        options: [
          { text: "Sudah", score: 4 },
          { text: "Baru berencana membuat", score: 3 },
          { text: "Belum", score: 2 },
          { text: "Tidak merasa butuh logo", score: 1 },
        ],
      },
      {
        id: 21,
        question: "Bagaimana karakter tampilan logo brand Anda?",
        category: "Identitas Visual",
        options: [
          { text: "Sederhana", score: 4 },
          { text: "Berwarna-warni", score: 3 },
          { text: "Banyak detail / terlihat ramai", score: 2 },
          { text: "Belum punya logo", score: 1 },
        ],
      },
      {
        id: 22,
        question: "Apakah brand Anda memiliki banyak logo?",
        category: "Identitas Visual",
        options: [
          { text: "Hanya satu", score: 4 },
          { text: "Ada beberapa", score: 2 },
          { text: "Ya, banyak", score: 1 },
          { text: "Belum punya logo", score: 1 },
        ],
      },
      {
        id: 23,
        question: "Apakah brand Anda memiliki warna khas?",
        category: "Identitas Visual",
        options: [
          { text: "Ada satu warna khas", score: 4 },
          { text: "Tidak ada warna khas", score: 1 },
          { text: "Menggunakan banyak warna bergantian", score: 1 },
          { text: "Belum pernah memikirkan warna brand", score: 1 },
        ],
      },
      {
        id: 24,
        question: "Apakah warna brand selalu digunakan dalam konten promosi?",
        category: "Identitas Visual",
        options: [
          { text: "Selalu digunakan", score: 4 },
          { text: "Kadang-kadang", score: 3 },
          { text: "Tidak pernah", score: 2 },
          { text: "Tidak punya warna khusus", score: 1 },
        ],
      },
    ],

    categories: ["Informasi Produk", "Target", "Harga", "Cara Menjual", "Reflektif", "Identitas Visual"],
    resultClassification: {
      "0-70": {
        level: "Basic",
        description: "Brand Anda masih berada pada tahap awal. Pesan penjualan belum jelas dan arah brand masih mudah berubah.",
        recommendedPackage: "Qolilan Service Pack",
        condition: "Pesan penjualan belum terbentuk",
      },

      "71-80": {
        level: "Brand Siap Scale",
        description:
          "Brand Anda sudah memiliki pesan penjualan yang kuat dan relatif jelas. Tantangan utama Anda bukan lagi perumusan pesan, melainkan bagaimana mengeksekusinya secara sistematis agar penjualan bisa berjalan lebih stabil dan terukur.",
        recommendedPackage: "Mumtazan Service Pack",
        condition: "Pesan penjualan kuat dan siap dieksekusi",
      },

      "81-98": {
        level: "Brand Matang",
        description:
          "Brand Anda sudah berada di level yang sangat baik. Pesan penjualan jelas, positioning kuat, dan sistem brand berjalan dengan rapi. Pada tahap ini Anda tidak membutuhkan paket layanan utama, melainkan evaluasi ringan atau optimasi kecil.",
        recommendedPackage: "Kamilan Service Pack",
        condition: "Brand sudah sangat solid",
      },

      "99-100": {
        level: "Brand Sempurna",
        description:
          "Brand Anda sudah berada pada kondisi optimal. Pesan penjualan, positioning, dan sistem eksekusi sudah berjalan sangat baik. Tidak ada paket layanan yang direkomendasikan saat ini.",
        recommendedPackage: null,
        condition: "Brand sangat matang dan stabil",
      },
    },
  },
  brandCheckerPackages: {
    image: ipad2,
    backgroundImage: heroBg1,
    recommended: [
      {
        name: "Qolilan",
        price: priceCore,
        features: ["Brand Strategy", "Logo Design", "Basic Guidelines"],
        description: "merumuskan pesan penjualan.",
        backgroundImage: heroBg1,
        output: "Dokumen PDF",
        included: [
          { title: "Analisa brand (PDF)", status: true },
          { title: "Rumusan unik selling point", status: true },
          { title: "Rumusan pesan penjualan", status: true },
          { title: "Brand guideline", status: false },
          { title: "Landing page", status: false },
          { title: "Facebook Ads friendly", status: false },
          { title: "Fitur pembayaran otomatis", status: false },
        ],
        minScore: 0,
        maxScore: 25,
        rating: 5,
        turnaround: "1-2 hari kerja",
      },
      {
        name: "Mumtazan",
        price: priceCore + priceDecoy1,
        features: ["Advanced Strategy", "Visual Identity", "Content Guidelines", "Market Analysis"],
        description: "merumuskan pesan penjualan + landing page",
        backgroundImage: heroBg1,
        output: "Dokumen PDF + Landing Page",
        included: [
          { title: "Analisa brand (PDF)", status: true },
          { title: "Rumusan unik selling point", status: true },
          { title: "Rumusan pesan penjualan", status: true },
          { title: "Brand guideline", status: true },
          { title: "Landing page", status: true },
          { title: "Facebook Ads friendly", status: false },
          { title: "Fitur pembayaran otomatis", status: false },
        ],
        minScore: 26,
        maxScore: 50,
        rating: 5,
        turnaround: "2-4 hari kerja",
      },
      {
        name: "Kamilan",
        price: priceCore + priceDecoy2,
        features: ["Scale Strategy", "Complete Brand System", "Campaign Assets", "Performance Tracking"],
        description: "merumuskan pesan penjualan + landing page + fitur pembayaran otomatis",
        backgroundImage: heroBg1,
        output: "Dokumen PDF + Landing Page FB Ads",
        included: [
          { title: "Analisa brand (PDF)", status: true },
          { title: "Rumusan unik selling point", status: true },
          { title: "Rumusan pesan penjualan", status: true },
          { title: "Brand guideline", status: true },
          { title: "Landing page", status: true },
          { title: "Facebook Ads friendly", status: true },
          { title: "Fitur pembayaran otomatis", status: true },
        ],
        minScore: 51,
        maxScore: 100,
        rating: 4,
        turnaround: "6-7 hari kerja",
      },
    ],
    alternatives: [
      {
        name: "paket 1 Brand Foundation Package",
        price: priceCore,
        features: ["Brand Strategy", "Logo Design", "Basic Guidelines"],
        description: "Paket premium untuk brand market leader",
        suitable: "Score 0-25",
        score: 12.5,
        turnaround: "2-3 hari kerja",
      },
      {
        name: "paket 2 Brand Growth Package",
        price: priceCore + priceDecoy1,
        features: ["Advanced Strategy", "Visual Identity", "Content Guidelines", "Market Analysis"],
        description: "Paket premium untuk brand market leader",
        suitable: "Score 26-50",
        score: 37.5,
        turnaround: "2-3 hari kerja",
      },
      {
        name: "paket 3 Brand Scale Package",
        price: priceCore + priceDecoy2,
        features: ["Scale Strategy", "Complete Brand System", "Campaign Assets", "Performance Tracking"],
        description: "Paket premium untuk brand market leader",
        suitable: "Score 51-75",
        value: 62.5,
        turnaround: "2-3 hari kerja",
      },
    ],
  },

  pagesResult: {
    name: "result page",
    heroImage: heroResult,
  },

  // Brand checker utilities
  getBrandCheckerFlag: (flagId) => brandCheckerFlags[flagId] || "",
  getCategoryThreshold: (categoryId) => categoryThresholds[categoryId] || 40,
  getCategoryFlags: (categoryScores) => {
    const flags = [];
    Object.keys(categoryScores).forEach((category) => {
      const score = categoryScores[category];
      const threshold = categoryThresholds[category] || 40;
      if (score < threshold) {
        flags.push(`${category}-LOW`);
      }
    });
    return flags;
  },

  // Data untuk section lainnya akan ditambahkan secara bertahap
};

export default ExalviaDatabase;
