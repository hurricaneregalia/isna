import { FiClock, FiDroplet, FiAward, FiShoppingCart, FiTruck, FiMessageCircle, FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

export default function dataNurbaz() {
  return [
    (dataNurbaz = {
      metadata: {
        siteName: "Nurbaz",
        description: "Jam tangan premium untuk profesional yang menghargai presisi dan gaya",
        keywords: ["jam tangan premium", "aksesori pria", "fashion profesional", "signature collection", "watch Indonesia"],
        ogImage: "/images/templateLandingPageBonus/Nurbaz/images/paul-cuoco-CO2vOhPqlrM-unsplash.jpg",
        socialLinks: [
          {
            platform: "instagram",
            url: "https://instagram.com/horizontime",
            platformUsername: "@horizontime",
          },
          {
            platform: "facebook",
            url: "https://facebook.com/horizontime",
          },
          {
            platform: "twitter",
            url: "https://twitter.com/horizontime",
            platformUsername: "@horizontime",
          },
        ],
      },
      hero: {
        title: "Elevate Your Professional Presence",
        subtitle: "Jam tangan yang menjadi statement kesuksesan pria modern",
        cta: "Dapatkan Penawaran Eksklusif",
        imageUrl: "/images/templateLandingPageBonus/Nurbaz/images/paul-cuoco-CO2vOhPqlrM-unsplash.jpg",
        overlayText: "Hanya 12 unit tersisa",
      },
      problem: {
        title: "Tampilan Biasa Tak Lagi Cukup di Dunia Kompetitif",
        points: ["Aksesori menentukan first impression meeting penting.", "Jam tangan premium menambah kesan profesional.", "Investasi penampilan = investasi karier."],
        imageUrl: "/images/templateLandingPageBonus/Nurbaz/images/photo-1622434641406-a158123450f9.jpg",
      },
      solution: {
        title: "Signature Collection",
        features: [
          {
            title: "Material Premium",
            description: "Titanium aerospace grade dengan finishing matte",
            icon: <FiAward size={24} />,
          },
          {
            title: "Tahan Air",
            description: "Waterproof 100m - siap segala cuaca",
            icon: <FiDroplet size={24} />,
          },
          {
            title: "Presisi Waktu",
            description: "Movement Swiss dengan akurasi milidetik",
            icon: <FiClock size={24} />,
          },
        ],
        gallery: [
          "/images/templateLandingPageBonus/Nurbaz/images/domino-studio-p2WUEFGrAdA-unsplash.jpg",
          "/images/templateLandingPageBonus/Nurbaz/images/bence-balla-schottner-Rm7Qbb1FyQM-unsplash.jpg",
          "/images/templateLandingPageBonus/Nurbaz/images/pat-taylor-12V36G17IbQ-unsplash.jpg",
        ],
      },
      offer: {
        title: "Penawaran Perdana Eksklusif",
        discount: "25%",
        badge: "HANYA UNTUK 50 PEMBELI PERTAMA",
        features: ["Jam tangan premium Signature Collection", "Leather watch premium case produksi itali", "Gratis konsultasi gaya personal"],
        countdownTarget: new Date().getTime() + 48 * 60 * 60 * 1000, // 48 hours from now
        cta: "Dapatkan Sekarang",
      },
      process: {
        title: "Cara Mudah Memiliki Jam Tangan Premium",
        steps: [
          {
            title: "Pesan Sekarang",
            description: "Isi formulir pemesanan sederhana",
            icon: <FiShoppingCart size={32} />,
          },
          {
            title: "Konsultasi Personal",
            description: "Tim ahli kami akan menghubungi Anda",
            icon: <FiMessageCircle size={32} />,
          },
          {
            title: "Pengiriman Ekspres",
            description: "Diterima dalam 24 jam (Jabodetabek)",
            icon: <FiTruck size={32} />,
          },
        ],
      },
      cta: {
        title: "Waktunya Mengubah Penampilan Profesional Anda",
        subtitle: "Diskon 25% + Bonus Eksklusif akan berakhir dalam:",
        mainButton: "Ambil Promo",
        secondaryButton: "Beli",
        whatsappNumber: "6282127902505",
        whatsappText: "Saya mau beli landing page ini",
        imageUrl: "/images/templateLandingPageBonus/Nurbaz/images/alvaro-bernal-RgIKRYhmG2k-unsplash.jpg",
      },
      faq: {
        title: "Pertanyaan Konsumen",
        items: [
          {
            question: "Metode pembayaran apa saja yang tersedia?",
            answer: "Kami menerima berbagai metode pembayaran termasuk transfer bank (BCA, Mandiri, BRI), kartu kredit (Visa, Mastercard), dan e-wallet (OVO, Gopay, Dana).",
          },
          {
            question: "Bagaimana cara pengembalian, jika ada produk yang cacat?",
            answer:
              "Anda dapat mengembalikan produk dalam 30 hari jika terdapat cacat produksi. Produk harus dalam kondisi baru dengan segel dan kemasan asli. Kami akan mengganti produk baru atau mengembalikan uang sepenuhnya.",
          },
          {
            question: "Berapa lama baterai bertahan?",
            answer: "Jam tangan kami menggunakan baterai premium dengan masa pakai hingga 5 tahun. Kami menyediakan layanan penggantian baterai gratis selama 2 tahun pertama.",
          },
          {
            question: "Apakah produk ini memiliki garansi?",
            answer: "Ya, semua produk dilengkapi dengan garansi resmi 3 tahun untuk mekanisme dan 1 tahun untuk komponen elektronik. Garansi mencakup perbaikan dan penggantian komponen.",
          },
        ],
      },
      footer: {
        logo: "HorizonTime",
        description: "Jam tangan premium untuk profesional yang menghargai presisi dan gaya",
        contact: [
          { icon: <FiPhone />, text: "+62 21 1234 5678" },
          { icon: <FiMail />, text: "info@horizontime.id" },
          { icon: <FiMapPin />, text: "Plaza Senayan Lt. 5, Jakarta" },
        ],
        social: [
          { icon: <FiInstagram />, url: "#" },
          { icon: <FiFacebook />, url: "#" },
          { icon: <FiTwitter />, url: "#" },
        ],
        links: [
          { title: "Produk", items: ["Signature", "Classic", "Sport", "Limited Edition"] },
          { title: "Perusahaan", items: ["Tentang Kami", "Blog", "Karir", "Boutique"] },
        ],
        copyright: "© 2025 HorizonTime. Hak Cipta Dilindungi.",
      },
      testimoni: {
        title: "Cerita Nyata Pengguna",
        reviews: [
          {
            name: "Budi K.",
            location: "Jakarta",
            quote: "Bukan cuma penunjuk waktu aja, tapi aksesories yang terlihat sangat keren. Kualitasnya sangat bagus! Recomended!",
            image: "/images/templateLandingPageBonus/Zaffra/images/photo-1535713875002-d1d0cf377fde.jpg",
            rating: 5,
            badge: "Favorit",
          },
          {
            name: "Siti M.",
            location: "Bandung",
            quote: "Detailnya luar biasa, mulai dari tali kulit sampai gerakan jarumnya. Benar-benar simbol kemewahan yang layak dimiliki.",
            image: "/images/templateLandingPageBonus/Zaffra/images/photo-1607746882042-944635dfe10e.jpg",
            rating: 5,
          },
          {
            name: "Rudi H.",
            location: "Surabaya",
            quote: "Begitu melihat jam ini langsung terpikat. Sekarang saya koleksi 3 model berbeda. Semuanya memuaskan!",
            image: "/images/templateLandingPageBonus/Zaffra/images/photo-1560250097-0b93528c311a.jpg",
            rating: 4,
          },
        ],
      },
    }),
  ];
}
