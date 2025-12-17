import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa6";
import { MdLocalShipping, MdVerified, MdSupportAgent, MdCheckCircle } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

// Placeholder images from unsplash or similar for demo purposes
const heroBg = "/images/templateLandingPageBonus/Halvora/section/sec-hero-a2.png";
const heroBg2 = "/images/templateLandingPageBonus/Halvora/section/sec-hero-a1.png";
const heroImg = "/images/templateLandingPageBonus/Halvora/section/sec-hero-model-2.png";
const aboutImg = "/images/templateLandingPageBonus/Halvora/section/sec-about.jpg";
const product1 = "/images/templateLandingPageBonus/Halvora/product/gamis-1.jpg";
const product2 = "/images/templateLandingPageBonus/Halvora/product/gamis-2.jpg";
const product3 = "/images/templateLandingPageBonus/Halvora/product/gamis-3.jpg";
const testimonial1 = "/images/templateLandingPageBonus/Halvora/section/sec-testimonials-avatar-1.jpg";
const testimonial2 = "/images/templateLandingPageBonus/Halvora/section/sec-testimonials-avatar-2.jpg";
const testimonial3 = "/images/templateLandingPageBonus/Halvora/section/sec-testimonials-avatar-3.jpg";
const ornament1 = "/images/templateLandingPageBonus/Halvora/section/flower-01.svg";
const ornament2 = "/images/templateLandingPageBonus/Halvora/ornament/lantern-2-01.svg";
const border1 = "/images/templateLandingPageBonus/Halvora/ornament/border-2-01.svg";
const pattern = "/images/templateLandingPageBonus/Halvora/ornament/border-3-01.svg";
const pattern2 = "/images/templateLandingPageBonus/Halvora/ornament/pattern-light-01.svg";

export const HalvoraData = {
  brand: {
    name: "HALVORA",
    logoText: "Halvora",
  },
  navItems: [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Cocok", href: "#best-for" },
    { label: "Produk", href: "#product" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Bonus", href: "#bonus" },
    { label: "Testimoni", href: "#testimonials" },
  ],
  hero: {
    title: "Anggun & Syar'i dalam Setiap Langkah",
    subtitle: "Temukan koleksi gamis dan hijab premium yang dirancang untuk kenyamanan dan keanggunan wanita muslimah modern.",
    ctaText: "Lihat Koleksi",
    backgroundImage: heroBg,
    image: heroImg,
  },
  about: {
    title: "TENTANG KAMI",
    heading: "Kenyamanan Adalah Prioritas Kami",
    description: [
      "Halvora hadir untuk menjawab kebutuhan wanita muslimah yang menginginkan busana syar'i namun tetap stylish dan nyaman dipakai seharian.",
      "Kami menggunakan bahan-bahan premium pilihan yang adem, jatuh, dan tidak menerawang. Setiap jahitan dikerjakan oleh tangan-tangan ahli untuk memastikan kualitas terbaik sampai ke tangan Anda.",
    ],
    image: aboutImg,
    ornament: ornament1,
    ornament2: ornament2,
    features: [
      { id: 1, text: "Bahan Premium Adem" },
      { id: 2, text: "Jahitan Butik Rapi" },
      { id: 3, text: "Desain Busui Friendly" },
      { id: 4, text: "Wudhu Friendly" },
    ],
  },
  products: {
    title: "KOLEKSI TERBARU",
    subtitle: "Pilihan favorit pelanggan kami musim ini",
    ornament: ornament1,
    items: [
      {
        id: 1,
        name: "Aisyah Series",
        price: "Rp 249.000",
        originalPrice: "Rp 350.000",
        image: product1,
        description: "Gamis set dengan khimar syar'i, bahan wolfis premium yang lembut.",
        tag: "Best Seller",
      },
      {
        id: 2,
        name: "Fatimah Dress",
        price: "Rp 289.000",
        originalPrice: "Rp 399.000",
        image: product2,
        description: "Dress pesta muslimah dengan aksen renda mewah namun tetap simple.",
        tag: "New Arrival",
      },
      {
        id: 3,
        name: "Khadijah Tunik",
        price: "Rp 159.000",
        originalPrice: "Rp 199.000",
        image: product3,
        description: "Tunik panjang yang cocok untuk aktivitas harian maupun kantor.",
        tag: null,
      },
    ],
  },
  trust: {
    border: border1,
    items: [
      {
        id: 1,
        title: "Garansi Kualitas",
        description: "Jika barang cacat, kami ganti baru 100% gratis ongkir.",
        icon: <MdVerified size={40} />,
      },
      {
        id: 2,
        title: "Pengiriman Cepat",
        description: "Pesanan dikirim di hari yang sama untuk transaksi sebelum jam 14.00.",
        icon: <MdLocalShipping size={40} />,
      },
      {
        id: 3,
        title: "CS Fast Respon",
        description: "Layanan pelanggan ramah siap membantu konsultasi ukuran.",
        icon: <MdSupportAgent size={40} />,
      },
    ],
  },
  testimonials: {
    title: "KATA MEREKA",
    subtitle: "Ribuan muslimah telah mempercayakan ootd harian mereka pada Halvora",
    items: [
      {
        id: 1,
        name: "Ukhti Rina",
        role: "Guru",
        quote: "MasyaAllah bahannya adem banget dipakai ngajar seharian. Nggak gampang kusut juga.",
        image: testimonial1,
      },
      {
        id: 2,
        name: "Bunda Siti",
        role: "Ibu Rumah Tangga",
        quote: "Suka banget sama potongannya, bikin kelihatan langsing tapi tetap syar'i menutup lekuk tubuh.",
        image: testimonial2,
      },
      {
        id: 3,
        name: "Kak Dina",
        role: "Mahasiswi",
        quote: "Warna-warnanya soft dan cantik. Udah koleksi 3 warna buat kuliah!",
        image: testimonial3,
      },
    ],
  },
  bonus: {
    title: "SPESIAL HARI INI",
    offerTitle: "Gratis Bros Cantik & Inner Hijab",
    description: "Khusus untuk pembelian minimal 2 pcs produk apa saja hari ini. Stok terbatas!",
    icon: <BiSolidOffer size={64} />,
    image: "/images/templateLandingPageBonus/Halvora/section/sec-bonus.png", // Gift box image
    buttonText: "Klaim Bonus Sekarang",
    targetDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    ornament: ornament2,
    pattern: pattern2,
  },
  cta: {
    title: "Siap Tampil Anggun?",
    subtitle: "Dapatkan koleksi terbaik Halvora sebelum kehabisan. Stok kami sangat cepat berputar.",
    buttonText: "Pesan Sekarang via WA",
    backgroundImage: heroBg2,
  },
  bestFor: {
    title: "Cocok Untuk Berbagai Momen",
    subtitle: "Tampil anggun dan percaya diri di setiap kesempatan istimewa Anda.",
    border: border1,
    items: [
      {
        id: 1,
        title: "Pesta & Kondangan",
        image: "/images/templateLandingPageBonus/Halvora/section/sec-best-1.jpg",
        description: "Desain mewah yang membuat Anda menjadi pusat perhatian.",
      },
      {
        id: 2,
        title: "Hari Raya Lebaran",
        image: "/images/templateLandingPageBonus/Halvora/section/sec-best-2.jpg",
        description: "Suasana fitri semakin terasa dengan balutan busana syar'i yang elegan.",
      },
      {
        id: 3,
        title: "Acara Formal & Kantor",
        image: "/images/templateLandingPageBonus/Halvora/section/sec-best-3.jpg",
        description: "Tetap profesional dan sopan tanpa kehilangan sentuhan modis.",
      },
      {
        id: 4,
        title: "Acara Hangout & Santai",
        image: "/images/templateLandingPageBonus/Halvora/section/sec-best-4.jpg",
        description: "Kenyamanan maksimal untuk menemani aktivitas harian Anda.",
      },
    ],
  },
  footer: {
    description: "Halvora adalah brand fashion muslimah yang mengutamakan kualitas dan kenyamanan untuk menemani hijrahmu.",
    pattern: pattern,
    contacts: [
      { icon: <FaWhatsapp />, text: "0812-3456-7890" },
      { icon: <FaInstagram />, text: "@halvora.official" },
      { icon: <FaTiktok />, text: "@halvora.style" },
    ],
    copyright: "© 2024 Halvora. All rights reserved.",
  },
};
