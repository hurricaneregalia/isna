import { FaInstagram, FaFacebook, FaPinterest, FaYoutube, FaCcVisa, FaCcMastercard, FaPaypal, FaUniversity } from "react-icons/fa";

export const savheeraData = {
  hero: {
    label: "Koleksi untuk Momen Spesial",
    title: "Perhiasan yang Membuat Momen Anda Bersinar",
    subtitle: "Savheera menghadirkan detail berkelas untuk wedding, gala, dan hari istimewa Anda.",
    ctaPrimary: {
      label: "Jelajahi Koleksi",
      href: "#collection",
    },
    ctaSecondary: {
      label: "Lihat Inspirasi",
      href: "#lookbook",
    },
    image: {
      src: "https://images.pexels.com/photos/761293/pexels-photo-761293.jpeg",
      alt: "Model memakai perhiasan Savheera di acara formal",
    },
    trustNote: "Dipilih untuk momen tak terlupakan.",
  },

  problem: {
    label: "Sering Terjadi Sebelum Hari Istimewa",
    title: "Memilih yang Tepat Kadang Lebih Sulit dari yang Terlihat",
    subtitle: "Wajar jika Anda ingin perhiasan yang menyatu dengan tema acara—tanpa terasa berlebihan.",
    items: [
      {
        title: "Takut tidak cocok dengan tema acara",
        desc: "Antara terlalu ramai atau terlalu sederhana—sulit menemukan titik elegannya.",
      },
      {
        title: "Kurang inspirasi untuk memadukan look",
        desc: "Memilih perhiasan yang menyatu dengan outfit sering memakan waktu dan energi.",
      },
      {
        title: "Ingin tampil berkesan tanpa terlihat berlebihan",
        desc: "Detail yang halus dan finishing yang tepat membuat perbedaan besar.",
      },
      {
        title: "Khawatir kualitas di momen penting",
        desc: "Momen tak terlupakan butuh rasa percaya diri dari kualitas yang terjamin.",
      },
    ],
    image: {
      src: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg",
      alt: "Momen memilih perhiasan untuk acara formal",
    },
  },

  solution: {
    label: "Solusi untuk Hari Istimewa",
    title: "Saat Momen Penting, Pilih yang Terasa Tepat",
    subtitle: "Savheera menghadirkan koleksi yang dirancang untuk melengkapi momen spesial—dengan kilau yang halus, namun berkesan.",
    points: [
      {
        title: "Selaras dengan tema acara",
        desc: "Mudah dipadukan untuk wedding, gala, hingga perayaan elegan.",
      },
      {
        title: "Detail halus, finishing berkelas",
        desc: "Kilau dan detail yang terasa premium di setiap sudut.",
      },
      {
        title: "Membantu tampil percaya diri",
        desc: "Pilihan yang tepat membuat Anda fokus pada momen, bukan keraguan.",
      },
    ],
    cta: {
      label: "Jelajahi Koleksi",
      href: "#collection",
    },
    image: {
      src: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg",
      alt: "Perhiasan Savheera dengan detail berkelas",
    },
  },

  features: {
    badge: "Keunggulan Kami",
    headline: "Mengapa Perhiasan Savheera Spesial",
    subtitle: "Setiap piece diciptakan dengan passion dan dedikasi untuk keindahan abadi",
    items: [
      {
        id: 1,
        title: "Material Premium",
        description: "Hanya menggunakan material berkualitas tinggi dengan sertifikat keaslian",
      },
      {
        id: 2,
        title: "Desain Eksklusif",
        description: "Koleksi terbatas yang dirancang oleh artisan berpengalaman",
      },
      {
        id: 3,
        title: "Garansi Seumur Hidup",
        description: "Jaminan kualitas dan layanan purna jual yang memuaskan",
      },
      {
        id: 4,
        title: "Layanan Personal",
        description: "Konsultasi one-on-one untuk menemukan perhiasan sempurna",
      },
    ],
    cta: {
      text: "Pelajari Lebih Lanjut",
      href: "#about",
    },
  },

  proof: {
    badge: "Testimonial Pelanggan",
    headline: "Kata Mereka Tentang Savheera",
    subtitle: "Kebahagiaan pelanggan adalah kebanggaan kami",
    stats: {
      customersCount: "2,500+",
      satisfactionRate: "98%",
      countriesServed: "15",
    },
    items: [
      {
        id: 1,
        customer: {
          name: "Sarah Wijaya",
          location: "Jakarta, Indonesia",
          photo: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
          product: "Diamond Necklace",
        },
        rating: 5,
        quote: "Perhiasan Savheera melengkapi momen spesial saya dengan sempurna. Kualitasnya luar biasa!",
        date: "2024-01-15",
      },
      {
        id: 2,
        customer: {
          name: "Amanda Chen",
          location: "Singapore",
          photo: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
          product: "Gold Earrings",
        },
        rating: 5,
        quote: "Desainnya elegan dan sesuai ekspektasi. Pelayanan yang sangat memuaskan.",
        date: "2024-02-20",
      },
      {
        id: 3,
        customer: {
          name: "Maya Putri",
          location: "Bali, Indonesia",
          photo: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg",
          product: "Wedding Ring",
        },
        rating: 5,
        quote: "Perfect choice untuk wedding saya! Detailnya sangat halus dan berkelas.",
        date: "2024-03-10",
      },
    ],
    cta: {
      text: "Lihat Semua Testimonial",
      href: "/testimonials",
    },
  },

  pricing: {
    badge: "Pilihan Koleksi",
    headline: "Investasi dalam Keindahan Abadi",
    subtitle: "Nilai yang sebanding dengan keindahan dan keartisan yang tiada tara",
    tiers: [
      {
        id: 1,
        name: "Classic Collection",
        price: "Mulai dari Rp 2.500.000",
        priceNote: "Perfect untuk daily elegance",
        description: "Koleksi timeless yang sempurna untuk setiap kesempatan",
        featured: false,
        features: ["Material 18K Gold Certified", "Design klasik yang elegan", "Free basic cleaning service", "Standard warranty 1 tahun", "Packaging premium"],
        cta: {
          text: "Pilih Classic",
          href: "#contact",
        },
      },
      {
        id: 2,
        name: "Premium Selection",
        price: "Mulai dari Rp 5.000.000",
        priceNote: "Most popular choice",
        description: "Balance antara sophistication dan accessibility",
        featured: true,
        featuredBadge: "Paling Populer",
        features: ["Material 18K Gold Premium", "Design eksklusif limited edition", "Free premium cleaning service", "Extended warranty 3 tahun", "Personal styling session", "Gift wrapping premium"],
        cta: {
          text: "Jelajahi Premium",
          href: "#contact",
        },
      },
      {
        id: 3,
        name: "Luxury Exclusive",
        price: "Custom Quote",
        priceNote: "Bespoke experience",
        description: "Masterpiece yang dirancang khusus untuk Anda",
        featured: false,
        features: ["Material premium berkualitas tinggi", "Custom design consultation", "Lifetime warranty", "VIP concierge service", "Private viewing appointment", "International certification"],
        cta: {
          text: "Konsultasi Luxury",
          href: "#contact",
        },
      },
    ],
    additionalInfo: {
      title: "Tidak Yakin Mana yang Tepat?",
      description: "Konsultasi gratis dengan jewelry expert kami untuk menemukan perhiasan yang sempurna untuk momen istimewa Anda.",
      cta: {
        text: "Mulai Konsultasi Gratis",
        href: "#contact",
      },
    },
  },

  bonus: {
    badge: "Limited Offer",
    headline: "Special Gift untuk Momen Spesial Anda",
    subtitle: "Claim exclusive bonus yang hanya tersedia untuk periode terbatas",
    countdown: {
      badge: "Flash Sale",
      message: "Penawaran berakhir dalam:",
      targetDate: "2024-12-31T23:59:59",
    },
    items: [
      {
        id: 1,
        name: "Diamond Cleaning Kit",
        description: "Professional grade cleaning kit untuk merawat perhiasan Anda",
        image: {
          src: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg",
          alt: "Diamond cleaning kit",
        },
        value: {
          normal: "Rp 500.000",
          bonus: "GRATIS",
        },
        stock: "Tersedia 20 set",
      },
      {
        id: 2,
        name: "Exclusive Jewelry Box",
        description: "Luxury storage box dengan velvet interior dan security lock",
        image: {
          src: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg",
          alt: "Luxury jewelry box",
        },
        value: {
          normal: "Rp 750.000",
          bonus: "GRATIS",
        },
        stock: "Tersedia 15 unit",
      },
      {
        id: 3,
        name: "Personal Styling Session",
        description: "One-on-one consultation dengan jewelry expert kami (1 jam)",
        image: {
          src: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg",
          alt: "Personal styling consultation",
        },
        value: {
          normal: "Rp 1.000.000",
          bonus: "GRATIS",
        },
        stock: "Tersedia 10 session",
      },
    ],
    cta: {
      text: "Claim My Bonus Now",
      href: "#contact",
    },
    terms: "Berlaku untuk pembelian minimum Rp 5.000.000. Selama stock tersedia. Tidak dapat digabung dengan promo lain.",
  },

  cta: {
    badge: "Ready to Shine?",
    headline: "Temukan Keindahan yang Menanti Anda",
    subtitle: "Konsultasi gratis dengan jewelry expert kami dan jelajahi koleksi eksklusif yang dibuat khusus untuk Anda",
    trustIndicators: ["Free consultation", "100% authentic materials", "Satisfaction guaranteed"],
    primaryCta: {
      text: "Jelajahi Koleksi Sekarang",
      href: "#collection",
    },
    secondaryCta: {
      text: "Lihat Katalog Lengkap",
      href: "#catalog",
    },
    socialProof: {
      count: "2,500+ Happy Customers",
      message: "Telah mempercayai Savheera untuk momen berharga mereka",
    },
    contact: {
      prefix: "Butuh bantuan? Hubungi kami di",
      phone: "+62 812-3456-7890",
      suffix: "untuk konsultasi personal",
    },
  },

  faq: {
    badge: "Bantuan",
    headline: "Pertanyaan yang Sering Diajukan",
    subtitle: "Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami",
    items: [
      {
        id: 1,
        question: "Bagaimana cara memilih ukuran cincin yang tepat?",
        answer: "Kami menyediakan size guide dan alat pengukur digital. Anda juga dapat mengunjungi store kami untuk fitting gratis. Expert kami akan membantu menemukan ukuran sempurna untuk Anda.",
      },
      {
        id: 2,
        question: "Apakah perhiasan Savheera tersertifikasi?",
        answer: "Ya, semua perhiasan kami dilengkapi sertifikat keaslian dari lembaga terkemuka. Material gold bersertifikat SNI, dan diamond memiliki grading report dari GIA atau IGI.",
      },
      {
        id: 3,
        question: "Berapa lama proses pengiriman?",
        answer: "Ready stock: 1-3 hari kerja. Custom design: 2-4 minggu tergantung complexity. Kami menyediakan tracking real-time dan insurance untuk semua pengiriman.",
      },
      {
        id: 4,
        question: "Bagaimana cara merawat perhiasan saya?",
        answer: "Simpan di tempat kering, hindari contact dengan chemical, dan bersihkan secara regular dengan cloth lembut. Kami menyediakan cleaning kit dan layanan professional cleaning gratis.",
      },
      {
        id: 5,
        question: "Apakah ada garansi untuk produk Savheera?",
        answer: "Semua produk mendapatkan garansi 1-3 tahun tergantung koleksi. Garansi mencakup manufacturing defects dan free maintenance. Extended warranty tersedia untuk Luxury Collection.",
      },
      {
        id: 6,
        question: "Bisakah saya custom design perhiasan?",
        answer: "Tentu! Luxury Collection menawarkan bespoke design service. Schedule consultation dengan designer kami untuk mewujudkan vision Anda.",
      },
    ],
    contact: {
      title: "Masih Ada Pertanyaan?",
      description: "Tim customer service kami siap membantu. Hubungi kami melalui live chat, WhatsApp, atau kunjungi store kami.",
      primaryCta: {
        text: "Chat dengan Expert Kami",
        href: "#contact",
      },
      secondaryCta: {
        text: "Kunjungi Store",
        href: "#locations",
      },
    },
  },

  productList: {
    title: "Koleksi Pilihan untuk Momen Spesial",
    subtitle: "Temukan perhiasan sempurna yang melengkapi keindahan momen berharga Anda",
    collections: [
      {
        id: "sav-001",
        collectionName: "Eternal Grace Necklace",
        description: "Untuk momen berkesan Anda",
        image: "https://images.pexels.com/photos/761293/pexels-photo-761293.jpeg",
        regularPrice: 4500000,
        salePrice: 3800000,
        material: "18K White Gold with Diamond",
        occasion: ["Pernikahan", "Gala", "Ulang Tahun"],
        isLimited: true,
        isNewArrival: false,
        inStock: true,
        story: "Dirancang untuk wanita yang ingin tampil memukau di momen spesial dengan sentuhan keanggunan timeless.",
      },
      {
        id: "sav-002",
        collectionName: "Royal Bloom Earrings",
        description: "Keanggunan yang tak lekang oleh waktu",
        image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg",
        regularPrice: 3200000,
        material: "18K Yellow Gold with Pearl",
        occasion: ["Gala", "Ulang Tahun", "Formal Dinner"],
        isLimited: false,
        isNewArrival: true,
        inStock: true,
        story: "Inspirasi dari keindahan bunga yang mekar sempurna, melambangkan kecantikan yang abadi.",
      },
      {
        id: "sav-003",
        collectionName: "Midnight Star Bracelet",
        description: "Kilau bintang di pergelangan Anda",
        image: "https://images.pexels.com/photos/761293/pexels-photo-761293.jpeg",
        regularPrice: 2800000,
        salePrice: 2300000,
        material: "18K Rose Gold with Sapphire",
        occasion: ["Gala", "Formal Dinner", "Anniversary"],
        isLimited: true,
        isNewArrival: false,
        inStock: true,
        story: "Menangkap keindahan langit malam dengan sentuhan kemewahan yang halus namun berkesan.",
      },
      {
        id: "sav-004",
        collectionName: "Classic Heritage Ring",
        description: "Warisan keanggunan untuk generasi",
        image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg",
        regularPrice: 5500000,
        material: "18K Yellow Gold with Emerald",
        occasion: ["Pernikahan", "Anniversary", "Engagement"],
        isLimited: false,
        isNewArrival: false,
        inStock: false,
        story: "Klasik yang never goes out of style, sempurna untuk komitmen seumur hidup.",
      },
      {
        id: "sav-005",
        collectionName: "Celestial Dreams Pendant",
        description: "Mimpi yang menjadi nyata",
        image: "https://images.pexels.com/photos/761293/pexels-photo-761293.jpeg",
        regularPrice: 3900000,
        material: "18K White Gold with Diamond & Blue Topaz",
        occasion: ["Ulang Tahun", "Graduation", "Achievement"],
        isLimited: true,
        isNewArrival: true,
        inStock: true,
        story: "Mewakili mimpi dan aspirasi yang tinggi, sempurna untuk merayakan pencapaian luar biasa.",
      },
      {
        id: "sav-006",
        collectionName: "Vintage Romance Brooch",
        description: "Sentuhan romantis klasik",
        image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg",
        regularPrice: 2100000,
        material: "18K Rose Gold with Ruby",
        occasion: ["Gala", "Formal Dinner", "Anniversary"],
        isLimited: false,
        isNewArrival: false,
        inStock: true,
        story: "Desain vintage yang membawa nuansa romantis ke era modern dengan sentuhan elegan.",
      },
    ],
    ctaExploreCollection: "Jelajahi Koleksi",
    ctaViewDetails: "Lihat Detail",
    filters: {
      occasions: ["Semua", "Pernikahan", "Gala", "Ulang Tahun", "Formal Dinner", "Anniversary", "Engagement", "Graduation", "Achievement"],
      materials: ["Semua", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Diamond", "Pearl", "Sapphire", "Emerald", "Ruby", "Blue Topaz"],
      sortBy: ["Rekomendasi", "Harga Terendah", "Harga Tertinggi", "Terbaru", "Limited Edition"],
    },
  },

  footer: {
    brand: {
      name: "Savheera",
      tagline: "Elegance in Every Moment",
      description: "Crafting timeless jewelry for life's most precious moments since 2020.",
    },
    social: [
      { name: "Instagram", href: "#", icon: <FaInstagram /> },
      { name: "Facebook", href: "#", icon: <FaFacebook /> },
      { name: "Pinterest", href: "#", icon: <FaPinterest /> },
      { name: "YouTube", href: "#", icon: <FaYoutube /> },
    ],
    quickLinks: {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "About Us", href: "#about" },
        { label: "Collections", href: "#collection" },
        { label: "Contact", href: "#contact" },
      ],
    },
    categories: {
      title: "Categories",
      links: [
        { label: "Rings", href: "#rings" },
        { label: "Necklaces", href: "#necklaces" },
        { label: "Earrings", href: "#earrings" },
        { label: "Bracelets", href: "#bracelets" },
      ],
    },
    customerService: {
      title: "Customer Service",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Shipping Info", href: "#shipping" },
        { label: "Returns", href: "#returns" },
        { label: "Size Guide", href: "#size-guide" },
      ],
    },
    newsletter: {
      title: "Join Savheera Inner Circle",
      description: "Dapatkan exclusive offers, new collection previews, dan beauty inspiration langsung di inbox Anda.",
      placeholder: "Enter your email address",
      buttonText: "Subscribe",
    },
    copyright: " 2024 Savheera. All rights reserved. Crafting elegance, one moment at a time.",
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
    ],
    paymentMethods: [
      { name: "Visa", icon: <FaCcVisa /> },
      { name: "Mastercard", icon: <FaCcMastercard /> },
      { name: "PayPal", icon: <FaPaypal /> },
      { name: "Transfer Bank", icon: <FaUniversity /> },
    ],
  },
};
