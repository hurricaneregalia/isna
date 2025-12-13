import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa6";
import { MdLocalShipping, MdVerified, MdSupportAgent, MdCheckCircle } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

// Placeholder images from unsplash or similar for demo purposes
const heroBg = "https://images.unsplash.com/photo-1550614000-4b9519e0794e?q=80&w=2070&auto=format&fit=crop";
const aboutImg = "https://images.unsplash.com/photo-1574304724806-05df95a5f6e8?q=80&w=1974&auto=format&fit=crop";
const product1 = "https://images.unsplash.com/photo-1585409893976-574293c83660?q=80&w=1974&auto=format&fit=crop";
const product2 = "https://images.unsplash.com/photo-1582269225881-64d6dd2c1611?q=80&w=1974&auto=format&fit=crop";
const product3 = "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1974&auto=format&fit=crop";
const testimonial1 = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop";
const testimonial2 = "https://images.unsplash.com/photo-1619300026534-8e8a76941138?q=80&w=2070&auto=format&fit=crop";
const testimonial3 = "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=1972&auto=format&fit=crop";

export const HalvoraData = {
  brand: {
    name: "HALVORA",
    logoText: "Halvora",
  },
  navItems: [
    { label: "Beranda", href: "#home" },
    { label: "Koleksi", href: "#product" },
    { label: "Keunggulan", href: "#about" },
    { label: "Testimoni", href: "#testimonials" },
  ],
  hero: {
    title: "Anggun & Syar'i dalam Setiap Langkah",
    subtitle: "Temukan koleksi gamis dan hijab premium yang dirancang untuk kenyamanan dan keanggunan wanita muslimah modern.",
    ctaText: "Lihat Koleksi",
    backgroundImage: heroBg,
  },
  about: {
    title: "TENTANG KAMI",
    heading: "Kenyamanan Adalah Prioritas Kami",
    description: [
      "Halvora hadir untuk menjawab kebutuhan wanita muslimah yang menginginkan busana syar'i namun tetap stylish dan nyaman dipakai seharian.",
      "Kami menggunakan bahan-bahan premium pilihan yang adem, jatuh, dan tidak menerawang. Setiap jahitan dikerjakan oleh tangan-tangan ahli untuk memastikan kualitas terbaik sampai ke tangan Anda.",
    ],
    image: aboutImg,
    features: [
        { id: 1, text: "Bahan Premium Adem" },
        { id: 2, text: "Jahitan Butik Rapi" },
        { id: 3, text: "Desain Busui Friendly" },
        { id: 4, text: "Wudhu Friendly" },
    ]
  },
  products: {
    title: "KOLEKSI TERBARU",
    subtitle: "Pilihan favorit pelanggan kami musim ini",
    items: [
      {
        id: 1,
        name: "Aisyah Series",
        price: "Rp 249.000",
        originalPrice: "Rp 350.000",
        image: product1,
        description: "Gamis set dengan khimar syar'i, bahan wolfis premium yang lembut.",
        tag: "Best Seller"
      },
      {
        id: 2,
        name: "Fatimah Dress",
        price: "Rp 289.000",
        originalPrice: "Rp 399.000",
        image: product2,
        description: "Dress pesta muslimah dengan aksen renda mewah namun tetap simple.",
        tag: "New Arrival"
      },
      {
        id: 3,
        name: "Khadijah Tunik",
        price: "Rp 159.000",
        originalPrice: "Rp 199.000",
        image: product3,
        description: "Tunik panjang yang cocok untuk aktivitas harian maupun kantor.",
        tag: null
      },
    ]
  },
  trust: {
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
    ]
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
    ]
  },
  bonus: {
    title: "SPESIAL HARI INI",
    offerTitle: "Gratis Bros Cantik & Inner Hijab",
    description: "Khusus untuk pembelian minimal 2 pcs produk apa saja hari ini. Stok terbatas!",
    icon: <BiSolidOffer size={64} />,
    image: "https://images.unsplash.com/photo-1574621100236-d25a64a434c6?q=80&w=2669&auto=format&fit=crop", // Gift box image
    buttonText: "Klaim Bonus Sekarang",
    targetDate: "2025-12-31T23:59:59", // Example future date
  },
  cta: {
    title: "Siap Tampil Anggun?",
    subtitle: "Dapatkan koleksi terbaik Halvora sebelum kehabisan. Stok kami sangat cepat berputar.",
    buttonText: "Pesan Sekarang via WA"
  },
  footer: {
    description: "Halvora adalah brand fashion muslimah yang mengutamakan kualitas dan kenyamanan untuk menemani hijrahmu.",
    contacts: [
        { icon: <FaWhatsapp />, text: "0812-3456-7890" },
        { icon: <FaInstagram />, text: "@halvora.official" },
        { icon: <FaTiktok />, text: "@halvora.style" },
    ],
    copyright: "© 2024 Halvora. All rights reserved."
  }
};
