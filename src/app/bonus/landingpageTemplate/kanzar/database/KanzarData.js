import { BadgeCheck, Mail, MapPin, Phone, ShieldCheck, Truck } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { Crown, Leaf, Gift } from "lucide-react";

const bgGlobal = "/images/templateLandingPageBonus/Kanzar/images/bg/islamic-polygon.svg";
const ornamenturl = "/images/templateLandingPageBonus/Kanzar/images/lantern-01.svg";
const borderurl = "/images/templateLandingPageBonus/Kanzar/images/border-01.svg";
export const db = {
  brand: {
    name: "ROYAL DATES",
  },
  navItems: [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Produk", href: "#product" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "Promo", href: "#bonus" },
  ],
  hero: {
    // AIDA: Attention
    title: "Kemewahan Rasa dari Tanah Suci",
    subtitle: "Nikmati keaslian Sunnah dengan Royal Dates. Kurma premium pilihan terbaik untuk momen Ibadah dan kesehatan keluarga Anda.",
    ctaText: "Pesan Sekarang",
    backgroundImage: "/images/templateLandingPageBonus/Kanzar/images/bg/bg-10.png", // Dark market stall vibe
    border: borderurl,
  },
  about: {
    // AIDA: Interest
    title: "MENGAPA ROYAL DATES?",
    heading: "Tradisi & Keberkahan dalam Setiap Butir",
    description: [
      "Dipanen langsung dari perkebunan pilihan di Madinah Al-Munawwarah, Royal Dates menghadirkan kurma Ajwa dan Sukari dengan kualitas Grade A+.",
      "Sesuai anjuran Sunnah, kami memastikan setiap butir melalui proses sortir yang ketat, halal, dan higienis. Kami tidak hanya menjual kurma, kami mempersembahkan warisan rasa yang penuh berkah.",
    ],
    image: "/images/templateLandingPageBonus/Kanzar/images/sukari-5.png", // Hands holding dates
    features: [
      {
        id: 1,
        title: "Terjamin Halal & Toyyib",
        description: "100% Organik, bebas pengawet, dan diproses secara Islami.",
        icon: <Crown size={32} />,
      },
      {
        id: 2,
        title: "Tekstur Sempurna",
        description: "Daging tebal dengan kelembutan yang lumer di mulut, sesuai selera para Raja.",
        icon: <Leaf size={32} />,
      },
      {
        id: 3,
        title: "Kemasan Mewah",
        description: "Dikemas elegan dengan motif islami, sempurna untuk hadiah atau hantaran.",
        icon: <Gift size={32} />,
      },
    ],
  },
  product: {
    // AIDA: Desire (Product visualization)
    title: "KOLEKSI SUNNAH",
    subtitle: "Pilihan terbaik untuk menemani ibadah puasa dan menjaga kesehatan keluarga.",
    border: borderurl,
    products: [
      {
        id: 1,
        name: "Royal Ajwa",
        description: "Kurma Nabi (Aliyah) dengan tekstur hitam pekat. 'Barangsiapa mengonsumsi 7 butir Ajwa...' (HR. Bukhari).",
        image: "/images/templateLandingPageBonus/Kanzar/images/product/ajwa.png",
        tag: "Best Seller",
        variants: [
          { id: "250gr", label: "Kemasan Kecil", weightLabel: "250gr", priceRegular: 125000, priceSale: 95000 },
          { id: "500gr", label: "Kemasan Sedang", weightLabel: "500gr", priceRegular: 210000, priceSale: 180000 },
          { id: "1kg", label: "Kemasan Keluarga", weightLabel: "1kg", priceRegular: 400000, priceSale: 350000 },
        ],
      },
      {
        id: 2,
        name: "Golden Sukari",
        description: "Ratu Kurma dari Qassim. Warna keemasan dengan tekstur basah yang sangat lembut dan manis alami.",
        image: "/images/templateLandingPageBonus/Kanzar/images/product/sukari.png",
        variants: [
          { id: "250gr", label: "Kemasan Kecil", weightLabel: "250gr", priceRegular: 75000, priceSale: 50000 },
          { id: "500gr", label: "Kemasan Sedang", weightLabel: "500gr", priceRegular: 125000, priceSale: 95000 },
          { id: "1kg", label: "Kemasan Keluarga", weightLabel: "1kg", priceRegular: 220000, priceSale: 180000 },
        ],
      },
      {
        id: 3,
        name: "Majdool VIP",
        description: "Raja Kurma dari Palestina/Jordan. Ukuran jumbo dengan daging tebal yang memanjakan lidah.",
        image: "/images/templateLandingPageBonus/Kanzar/images/product/medjol.png",
        tag: "Limited",
        variants: [
          { id: "250gr", label: "Kemasan Kecil", weightLabel: "250gr", priceRegular: 110000, priceSale: 80000 },
          { id: "500gr", label: "Kemasan Sedang", weightLabel: "500gr", priceRegular: 190000, priceSale: 150000 },
          { id: "1kg", label: "Kemasan Keluarga", weightLabel: "1kg", priceRegular: 350000, priceSale: 290000 },
        ],
      },
    ],
  },
  bonus: {
    title: "PENUH BERKAH",
    subtitle: "Khusus pemesanan hari ini sebelum pukul 24:00",
    offer: "GRATIS GIFT BOX ISLAMI",
    description: "Dapatkan kemasan Gift Box Eksklusif dengan ornamen Kaligrafi senilai Rp 50.000 + Tasbih Digital.",
    buttonText: "Ambil Berkahnya",
    images: [
      "/images/templateLandingPageBonus/Kanzar/images/bonus/bonus-1.png",
      "/images/templateLandingPageBonus/Kanzar/images/bonus/bonus-2.png",
      "/images/templateLandingPageBonus/Kanzar/images/bonus/bonus-3.png",
      "/images/templateLandingPageBonus/Kanzar/images/bonus/bonus-4.png",
    ],
    ornament: ornamenturl,
  },
  trust: {
    items: [
      {
        id: 1,
        title: "Pengiriman Aman",
        description: "Garansi paket sampai tujuan dengan kondisi yang baik.",
        icon: <Truck size={32} />,
      },
      {
        id: 2,
        title: "Garansi 100%",
        description: "Garansi uang kembali jika paket rusak saat pengiriman.",
        icon: <ShieldCheck size={32} />,
      },
      {
        id: 3,
        title: "Halal",
        description: "Diproses secara higienis dan sesuai syariat Islam.",
        icon: <BadgeCheck size={32} />,
      },
    ],
  },
  testimonials: {
    // AIDA: Desire (Social Proof)
    title: "TESTIMONI SAHABAT",
    subtitle: "Ribuan keluarga muslim telah merasakan kenikmatan Royal Dates.",
    ornament: ornamenturl,
    reviews: [
      {
        id: 1,
        name: "Hj. Dewi Sartika",
        role: "Pengusaha Muslimah",
        quote: "Alhamdulillah, Royal Ajwa-nya asli. Saya pakai untuk tahnik cucu dan konsumsi harian. Kemasannya sangat premium.",
        avatar: "/images/templateLandingPageBonus/Kanzar/images/testimonials/user-1.png",
      },
      {
        id: 2,
        name: "Ustadz Hendra",
        role: "Pemuka Agama",
        quote: "Insya Allah berkah. Kualitas Sukari-nya konsisten, basah dan manisnya pas. Sangat cocok untuk berbuka puasa.",
        avatar: "/images/templateLandingPageBonus/Kanzar/images/testimonials/user-2.png",
      },
      {
        id: 3,
        name: "Sarah Amalia",
        role: "Ibu Rumah Tangga",
        quote: "Anak-anak jadi suka makan kurma karena teksturnya lembut. Pengiriman amanah sampai rumah.",
        avatar: "/images/templateLandingPageBonus/Kanzar/images/testimonials/user-3.png",
      },
    ],
  },
  cta: {
    // AIDA: Action
    title: "Siap Menjalankan Sunnah?",
    subtitle: "Stok sangat terbatas. Amankan kurma terbaik untuk keluarga tercinta sekarang juga.",
    buttonText: "Pesan Sekarang",
    backgroundImage: "/images/templateLandingPageBonus/Kanzar/images/sukari-6.png", // Gold Texture
  },
  footer: {
    brandName: "ROYAL DATES",
    description: "Penyedia kurma premium terpercaya. Mengutamakan kehalalan, kualitas, dan kepuasan pelanggan sesuai syariat.",
    bgImage: bgGlobal,
    quickLinks: [
      { label: "Beranda", href: "#home" },
      { label: "Tentang Kami", href: "#about" },
      { label: "Produk", href: "#product" },
      { label: "Testimoni", href: "#testimonials" },
      { label: "Promo", href: "#bonus" },
    ],
    contact: [
      { icon: <MapPin />, text: "Jl. Sultan Agung No. 88, Jakarta Selatan" },
      { icon: <Phone />, text: "+6282127902505" },
      { icon: <Mail />, text: "salam@royaldates.com" },
    ],
    socials: [{ icon: <FaInstagram />, href: "#" }],
  },
};
