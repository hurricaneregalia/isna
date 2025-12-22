// Import semua icon yang digunakan dalam loop
import { FaSearch, FaPenNib, FaMoon, FaRocket, FaShieldAlt, FaCheckCircle, FaTimesCircle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { HiShieldCheck, HiTrendingUp } from "react-icons/hi";

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
    headline: "Transformasi Produk Anda",
    subheadline: "Jasa penulisan landing page profesional yang dirancang khusus untuk membangun kepercayaan.",
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
    label: "Fakta Industri",
    title: "Mengapa Copywriting Itu Penting?",
    description: "90% keputusan pembelian dipengaruhi oleh emosi dan persuasi kata-kata. Tanpa bumbu copywriting yang tepat, produk branded Anda hanya akan menjadi pajangan digital.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2067&auto=format&fit=crop",
    patternImage: "https://www.transparenttextures.com/patterns/arabesque.png",
    items: [
      { title: "Meningkatkan Trust", icon: <HiShieldCheck /> },
      { title: "Melejitkan Konversi", icon: <HiTrendingUp /> },
    ],
  },
  fenomenon: {
    label: "Masalah Umum",
    title: "Sulit Menembus Kepercayaan Pengusaha Muslim?",
    description: "Banyak brand gagal karena tidak memahami psikologi audiens muslim. Kami hadir untuk menjembatani kesenjangan tersebut dengan bahasa yang etis namun sangat persuasif.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    patternImage: "https://www.transparenttextures.com/patterns/arabesque.png",
    signature: "Amir Al-Farabi",
    designerRole: "Head of Copy at Exalvia",
  },
  solution: {
    label: "Solusi Kami",
    title: "Copywriting yang Menyentuh Hati & Logika",
    description: "Exalvia bukan sekadar menulis, kami meriset audiens Anda, memahami value produk branded Anda, dan menyajikannya dalam narasi yang elegan dan profesional.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  hadist: {
    arabic: "إِنَّ اللهَ طَيِّبٌ يُحِبُّ الطَّيِّبَ، نَظِيفٌ يُحِبُّ النَّظَافَةَ",
    translation: "Sesungguhnya Allah itu Maha Baik dan mencintai kebaikan, Maha Bersih dan mencintai kebersihan.",
    source: "HR. At-Tirmidzi",
    context: "Kebersihan dan profesionalitas dalam bisnis adalah cerminan iman.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2067&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
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
    label: "Keinginan",
    title: "Siap percepat closing dengan copy premium?",
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
    title: "Fitur Unggulan Exalvia",
    subtitle: "Solusi lengkap untuk kebutuhan copywriting profesional Anda",
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
    ],
  },
  // Data untuk section lainnya akan ditambahkan secara bertahap
};

export default ExalviaDatabase;
