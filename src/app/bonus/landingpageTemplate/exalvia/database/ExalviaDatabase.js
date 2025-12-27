// Import semua icon yang digunakan dalam loop
import { BiSolidMessageCheck } from "react-icons/bi";
import { FaSearch, FaPenNib, FaMoon, FaRocket, FaShieldAlt, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaRegFaceTired, FaToggleOn } from "react-icons/fa6";
import { GiCrackedGlass, GiSwordBreak } from "react-icons/gi";
import { HiChat, HiLightBulb, HiOutlineDocumentDuplicate, HiShieldCheck, HiTrendingUp, HiUserGroup } from "react-icons/hi";
import { IoSparkles } from "react-icons/io5";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { HiCheckBadge } from "react-icons/hi2";
import { RiSwordFill } from "react-icons/ri";

const ipad2 = "/images/templateLandingPageBonus/Exalvia/sections/ipad-2.webp";

const ExalviaDatabase = {
  navbar: {
    logo: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png",
    brandName: "Exalvia",
    menu: [
      { label: "Masalah", link: "fenomenon" },
      { label: "Fitur", link: "features" },
      { label: "Layanan", link: "service" },
      { label: "Alur Kerja", link: "flow" },
      { label: "FAQ", link: "faq" },
    ],
  },
  hero: {
    headline: "Sistem cerdas untuk menjual produk branded di atas kompetitor. Spesial produk Ramadhan!",
    subheadline: "Kami bantu Anda menyampaikan pesan yang tepat, membuat pelanggan merasa dipahami dan tertarik membeli.",
    buttonLabel: "Konsultasi Sekarang",
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    patternImage: "https://www.transparenttextures.com/patterns/arabesque.png",
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
      { title: "Harga ideal sulit dipertahankan.", icon: <MdOutlineMoneyOffCsred /> },
      { title: "Terjerumus dalam perang harga.", icon: <RiSwordFill /> },
      { title: "Produk di anggap sama saja.", icon: <HiOutlineDocumentDuplicate /> },
      { title: "Promosi hanya membuang uang saja.", icon: <FaRegFaceTired /> },
    ],
  },
  fenomenon: {
    label: "Solusi",
    title: "Sebenarnya calon pembeli tidak menolak produk Anda.",
    description: "Calong pembeli hanya belum melihat alasan yang cukup kuat untuk membayar lebih. Buat mereka mendapatkan alasan itu dengan:",
    image: ipad2,
    patternImage: "https://www.transparenttextures.com/patterns/arabesque.png",
    signature: "Amir Al-Farabi",
    designerRole: "Head of Copy at Exalvia",
    items: [
      { title: "Sampaikan nilai produk dengan baik.", icon: <IoSparkles /> },
      { title: "Bentuk kepercayaan brand yang kuat.", icon: <HiCheckBadge /> },
      { title: "Jual produk atau jasa yang berbeda.", icon: <FaToggleOn /> },
      { title: "Buat pesan promosi yang jelas.", icon: <BiSolidMessageCheck /> },
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
    image: "/images/templateLandingPageBonus/Exalvia/sections/iphone-2.webp",
    patternImage: "https://www.transparenttextures.com/patterns/arabesque.png",
  },
  benefits: {
    label: "Keunggulan",
    title: "Manfaat Bekerja dengan Exalvia",
    subtitle: "Setiap proyek dihandle dengan standar premium dan etika komunikasi yang elegan.",
    items: [
      { title: "Riset Mendalam", description: "Riset kompetitor + psikografi audiens sebelum menulis.", icon: <FaSearch /> },
      { title: "Copy Etis", description: "Bahasa persuasif tanpa gimmick murahan, menjaga kredibilitas.", icon: <FaPenNib /> },
      { title: "Visual Selaras", description: "Copy diselaraskan dengan visual Islami modern.", icon: <FaMoon /> },
      { title: "Optimasi Konversi", description: "Struktur CTA dan narasi diarahkan untuk action nyata.", icon: <FaRocket /> },
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
    label: "Faktor lain",
    title: "Ada hal lain yang spesifik membuat produk branded Anda sulit dijual.",
    description: "Klik tombol “Cek Kualitas Brand” di bawah untuk memahami kondisi brand Anda saat ini, supaya brand Anda bisa tumbuh dengan sehat tanpa terjebak perang harga.",
    primaryLabel: "Mulai Konsultasi",
    primaryHref: "https://wa.me/6281234567890",
    whatsappLabel: "Chat WhatsApp",
    whatsappHref: "https://wa.me/6281234567890",
  },
  bonus: {
    label: "Bonus Eksklusif",
    title: "Hadiah Tambahan untuk Keputusan Cepat",
    items: [
      {
        title: "Template Email Follow-Up",
        description: "3 urutan email untuk nurturing setelah pengunjung mengisi form.",
        image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=2070&auto=format&fit=crop",
        value: "Rp1.000.000",
      },
      {
        title: "Checklist UX Landing",
        description: "Checklist siap pakai untuk memastikan halaman ramah konversi.",
        image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=2070&auto=format&fit=crop",
        value: "Rp750.000",
      },
      {
        title: "Script Video 60 detik",
        description: "Naskah video singkat untuk iklan atau hero background.",
        image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=2070&auto=format&fit=crop",
        value: "Rp1.250.000",
      },
    ],
    urgencyTitle: "Countdown bonus berakhir dalam:",
    countdownTarget: "2025-12-31T23:59:59Z",
    ctaLabel: "Amankan Bonus",
    ctaLink: "https://wa.me/6281234567890",
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
    copyright: "© 2025 Exalvia Copywriting. All rights reserved.",
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
        question: "Apa yang Anda jual?",
        category: "Product Info",
        options: [
          { text: "Produk", value: 4 },
          { text: "Jasa", value: 4 },
          { text: "Produk + jasa", value: 2 },
          { text: "Lainnya", value: 1 },
        ],
      },
      {
        id: 2,
        question: "Apakah Anda tahu manfaat utama produk Anda?",
        category: "Product Info",
        options: [
          { text: "Tahu dengan jelas", value: 4 },
          { text: "Tahu sebagian", value: 3 },
          { text: "Ragu-ragu", value: 2 },
          { text: "Tidak tahu", value: 1 },
        ],
      },
      {
        id: 3,
        question: "Apakah Anda punya kompetitor atau pesaing produk yang hampir mirip?",
        category: "Product Info",
        options: [
          { text: "Punya", value: 4 },
          { text: "Tidak punya", value: 2 },
          { text: "Tidak peduli kompetitor", value: 1 },
          { text: "Tidak tahu", value: 1 },
        ],
      },
      {
        id: 4,
        question: "Apakah Anda tahu siapa orang yang cocok menggunakan produk Anda?",
        category: "Target",
        options: [
          { text: "Tahu", value: 4 },
          { text: "Tahu sedikit", value: 3 },
          { text: "Ragu-ragu", value: 2 },
          { text: "Tidak tahu", value: 1 },
        ],
      },
      {
        id: 5,
        question: "Channel online apa yang paling banyak menjual produk Anda saat ini?",
        category: "Target",
        options: [
          { text: "Landing page", value: 4 },
          { text: "Marketplace (Tokopedia, Shopee, Lazada)", value: 4 },
          { text: "Media sosial (Instagram, Facebook, TikTok, WhatsApp)", value: 4 },
          { text: "Tidak pernah dicek", value: 1 },
        ],
      },
      {
        id: 6,
        question: "Bagaimana perbandingan harga produk Anda dibandingkan kompetitor?",
        category: "Harga",
        options: [
          { text: "Lebih murah", value: 4 },
          { text: "Lebih mahal", value: 4 },
          { text: "Sama saja", value: 4 },
          { text: "Tidak tahu harga kompetitor", value: 1 },
        ],
      },
      {
        id: 7,
        question: "Apa yang Anda lakukan jika produk kompetitor lebih murah?",
        category: "Harga",
        options: [
          { text: "Turunkan harga", value: 2 },
          { text: "Pertahankan harga & edukasi kualitas", value: 4 },
          { text: "Ganti produk lain", value: 2 },
          { text: "Tidak melakukan apa-apa", value: 1 },
        ],
      },
      {
        id: 8,
        question: "Dari sekian banyak calon pembeli, seberapa sering mereka merasa bingung dan bertanya hal yang sama?",
        category: "Cara Menjual",
        options: [
          { text: "Tidak pernah bertanya & banyak penjualan", value: 4 },
          { text: "Tidak pernah bertanya & minim penjualan", value: 2 },
          { text: "Sering bertanya & banyak penjualan", value: 3 },
          { text: "Sering bertanya & minim penjualan", value: 1 },
        ],
      },
      {
        id: 9,
        question: "Apa yang Anda lakukan ketika penjualan menurun?",
        category: "Cara Menjual",
        options: [
          { text: "Evaluasi cara menjual", value: 4 },
          { text: "Evaluasi produk", value: 4 },
          { text: "Turunkan harga", value: 2 },
          { text: "Menunggu", value: 1 },
        ],
      },
      {
        id: 10,
        question: "Apa yang Anda rasakan melihat laporan penjualan 3 bulan terakhir?",
        category: "Reflektif",
        options: [
          { text: "Senang", value: 4 },
          { text: "Cemas", value: 3 },
          { text: "Biasa saja", value: 2 },
          { text: "Tidak pernah lihat laporan", value: 1 },
        ],
      },
      {
        id: 11,
        question: "Apa masalah terbesar penjualan Anda saat ini?",
        category: "Reflektif",
        options: [
          { text: "Produk tidak dikenal", value: 3 },
          { text: "Harga lebih mahal", value: 3 },
          { text: "Tidak tahu harus dijual ke siapa", value: 3 },
          { text: "Semua saling terkait", value: 4 },
        ],
      },
      {
        id: 12,
        question: "Apakah Anda merasa produk Anda bagus?",
        category: "Reflektif",
        options: [
          { text: "Ya", value: 4 },
          { text: "Tidak", value: 2 },
          { text: "Ragu-ragu", value: 2 },
          { text: "Tidak tahu kriterianya", value: 1 },
        ],
      },
      {
        id: 13,
        question: "Apakah brand Anda sudah punya logo?",
        category: "Identitas Visual",
        options: [
          { text: "Sudah", value: 4 },
          { text: "Belum", value: 2 },
          { text: "Baru ingin buat", value: 3 },
          { text: "Tidak butuh logo", value: 1 },
        ],
      },
      {
        id: 14,
        question: "Seperti apa tampilan logo brand Anda?",
        category: "Identitas Visual",
        options: [
          { text: "Sederhana", value: 4 },
          { text: "Warna-warni", value: 3 },
          { text: "Detail/ramai", value: 2 },
          { text: "Tidak punya logo", value: 1 },
        ],
      },
      {
        id: 15,
        question: "Apakah brand Anda punya banyak logo berbeda bentuk?",
        category: "Identitas Visual",
        options: [
          { text: "Ya banyak", value: 1 },
          { text: "Tidak terlalu banyak", value: 2 },
          { text: "Hanya satu saja", value: 4 },
          { text: "Tidak punya logo", value: 1 },
        ],
      },
      {
        id: 16,
        question: "Apakah ada 1 warna khusus yang digunakan sebagai ciri khas brand Anda?",
        category: "Identitas Visual",
        options: [
          { text: "Ada", value: 4 },
          { text: "Tidak ada", value: 1 },
          { text: "Ada banyak warna digunakan bergantian", value: 2 },
          { text: "Tidak pernah memikirkan warna", value: 1 },
        ],
      },
      {
        id: 17,
        question: "Apakah warna brand selalu digunakan di konten promosi?",
        category: "Identitas Visual",
        options: [
          { text: "Ya", value: 4 },
          { text: "Kadang-kadang", value: 3 },
          { text: "Tidak pernah", value: 2 },
          { text: "Tidak ada warna khusus", value: 1 },
        ],
      },
    ],
    categories: ["Product Info", "Target", "Harga", "Cara Menjual", "Reflektif", "Identitas Visual"],
    resultClassification: {
      "0-25": {
        level: "Positioning Kacau",
        description: "Pesan brand tidak fokus, sulit dipahami, dan berisiko membingungkan pasar.",
      },
      "26-50": {
        level: "Positioning Lemah",
        description: "Arah brand mulai terlihat, tetapi masih tidak konsisten dan sulit dijual secara stabil.",
      },
      "51-75": {
        level: "Positioning Cukup Kuat",
        description: "Brand memiliki arah yang jelas, namun masih perlu perbaikan di beberapa area.",
      },
      "76-100": {
        level: "Positioning Kuat",
        description: "Brand memiliki positioning yang solid dan siap bersaing di pasar.",
      },
    },
  },
  // Data untuk section lainnya akan ditambahkan secara bertahap
};

export default ExalviaDatabase;
