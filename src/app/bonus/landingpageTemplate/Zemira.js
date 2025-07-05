import React from "react";
import HeroSectionZemira from "./zemira/HeroSectionZemira";
import ProblemSectionZemira from "./zemira/ProblemSectionZemira";
import SolutionSectionZemira from "./zemira/SolutionSectionZemira";
import WorkProcessZemira from "./zemira/WorkProcessZemira";
import TestimonialsZemira from "./zemira/TestimonialsZemira";
import SpecialOfferZemira from "./zemira/SpecialOfferZemira";
import FAQSectionZemira from "./zemira/FAQSectionZemira";
import GallerySectionZemira from "./zemira/GallerySectionZemira";
import { FaYoutube, FaAmazon, FaApple, FaFacebook, FaGoogle, FaSpotify, FaWindows, FaWordpress } from "react-icons/fa6";

import {
  HiOutlineChat,
  HiOutlineLightBulb,
  HiOutlineCube,
  HiOutlineHome,
  HiClock,
  HiLightBulb,
  HiCurrencyDollar,
  HiUserGroup,
  HiSparkles,
  HiLightningBolt,
  HiShieldCheck,
  HiUserCircle,
  HiOutlineGift,
  HiOutlineClock,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import HeaderLandingGlobal from "../[slug]/HeaderLandingGlobal";
import FooterLandingPageOnly from "../[slug]/FooterLandingPageOnly";

const zemiraData = {
  heroData: {
    headline: "Banyak Orang Salah Saat Menata Rumahnya. Apakah Anda Salah Satunya?",
    subheadline: "Solusi desain interior premium, menciptakan tempat tinggal menjadi ruang hidup yang nyaman dan elegan",
    image: "/images/templateLandingPageBonus/Zemira/images/photo-1606744888344-493238951221.jpg",
    imageAlt: "Luxury Interior Design",
  },
  faq: {
    heading: "Pertanyaan yang Sering Diajukan oleh",
    subtitle: "Klien Profesional",
    description: "Temukan jawaban atas pertanyaan umum seputar layanan desain interior premium kami",
    ctaTitle: "Mau dapat diskon?",
    ctaSubTile: "Isi formulir untuk mendapatkan diskonya sekarang juga!",
    items: [
      {
        question: "Berapa kisaran biaya jasa desain interior profesional?",
        answer:
          "Biaya jasa desain interior kami dimulai dari Rp 300.000/m² untuk paket dasar hingga Rp 1.000.000/m² untuk paket premium lengkap. Biaya akhir disesuaikan dengan kompleksitas proyek, material yang digunakan, dan luas area. Kami memberikan estimasi biaya transparan setelah konsultasi awal tanpa biaya.",
      },
      {
        question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek desain?",
        answer:
          "Waktu pengerjaan bervariasi berdasarkan skala proyek:\n\n- Desain konsep: 3-7 hari kerja\n- Paket lengkap (desain + implementasi): 3-8 minggu\nUntuk proyek besar (luas >500m²): 8-12 minggu\n\nKami selalu mengutamakan kualitas dan ketepatan waktu untuk profesional seperti Anda.",
      },
      {
        question: "Apakah tim desainer bisa datang ke lokasi saya?",
        answer:
          "Tentu. Tim desainer elite kami akan melakukan kunjungan ke properti Anda untuk:\n1. Pengukuran akurat\n2. Analisis kondisi eksisting\n3. Diskusi kebutuhan spesifik keluarga\n\nKunjungan tersedia untuk area Jabodetabek, Bandung, Surabaya, dan Bali. Untuk wilayah lain, tersedia konsultasi virtual premium.",
      },
      {
        question: "Bagaimana proses pembayarannya?",
        answer:
          "Pembayaran dilakukan dalam 3 tahap:\n\n1. 30% saat penandatanganan kontrak\n2. 40% setelah persetujuan desain konsep\n3. 30% setelah implementasi selesai dan disetujui\n\nKami menerima transfer bank dan kartu kredit. Tidak ada biaya tersembunyi.",
      },
      {
        question: "Apakah saya bisa memilih material sendiri?",
        answer:
          "Anda memiliki fleksibilitas penuh:\n- Kami menyediakan katalog material premium dari supplier terpercaya\n- Anda dapat memilih material sendiri dengan panduan kami\n- Tim kami akan membantu menyesuaikan dengan budget dan gaya yang diinginkan\n\nKami juga menyediakan sample material untuk Anda evaluasi langsung.",
      },
      {
        question: "Bagaimana jika saya tidak puas dengan hasil desain?",
        answer:
          "Kepuasan Anda adalah prioritas utama. Kami menawarkan:\n- Revisi desain tanpa batas hingga Anda 100% puas\n- Garansi kepuasan 30 hari setelah implementasi\n- Dukungan purna jual selama 1 tahun\n\nHanya 0,5% proyek kami yang memerlukan revisi signifikan, menunjukkan kualitas kerja kami.",
      },
    ],
  },
  portfolioImages: [
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1571460.jpg",
      title: "Ruang Keluarga Mewah",
      subtitle: "Untuk Keluarga Dokter",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1457842.jpg",
      title: "Kamar Master Elegan",
      subtitle: "Untuk Eksekutif",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1643383.jpg",
      title: "Home Office Profesional",
      subtitle: "Untuk Pengacara",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-280232.jpg",
      title: "Dapur Modern",
      subtitle: "Untuk Pebisnis",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1866149.jpg",
      title: "Ruang Makan Minimalis",
      subtitle: "Untuk Keluarga Muda",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-271743.jpg",
      title: "Kamar Tidur Nyaman",
      subtitle: "Untuk Pasangan Baru",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-2082090.jpg",
      title: "Ruang Kerja Modern",
      subtitle: "Untuk Freelancer",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-374703.jpg",
      title: "Lobi Hotel Elegan",
      subtitle: "Untuk Pengusaha",
    },
  ],
  problem: {
    header: {
      tag: "Tantangan Profesional",
      title: "Hambatan Dalam Mewujudkan Rumah Ideal",
      highlight: "Untuk Profesional Modern",
      description: "Sebagai individu sukses, Anda layak mendapatkan tempat tinggal yang indah, nyaman dan berkelas. Namun beberapa kendala sering muncul:",
    },
    items: [
      {
        icon: <HiClock className="h-6 w-6" />,
        title: "Waktu Terbatas",
        description: "Kesibukan harian menyulitkan penyusunan konsep desain tempat tinggal yang matang",
      },
      {
        icon: <HiLightBulb className="h-6 w-6" />,
        title: "Desain Tidak Menarik",
        description: "Tidak bisa membuat desain yang bagus, karena tidak ada keahlian di bidang tersebut",
      },
      {
        icon: <HiCurrencyDollar className="h-6 w-6" />,
        title: "Biaya Tak Terduga",
        description: "Tidak memiliki pengetahuan anggaran pembuatan tempat tinggal yang berkualitas",
      },
      {
        icon: <HiUserGroup className="h-6 w-6" />,
        title: "Tidak Memiliki Informasi",
        description: "Sulit menemukan informasi tentang hal apa saja yang perlu dibuat dan dipersiapkan",
      },
    ],
    image: {
      url: "/images/templateLandingPageBonus/Zemira/images/photo-1522708323590-d24dbb6b0267.jpg",
      alt: "Profesional menghadapi tantangan desain interior",
    },
  },
  text: {
    sectionTitle: "Transformasi Tempat Tinggal Anda Menjadi",
    sectionSubtitle: "Lebih Indah, Nyaman dan Berkelas",
    sectionIntro: "Layanan desain interior eksklusif yang mengutamakan kenyamanan, fungsi, dan gaya hidup berkelas untuk hunian indah dan berkualitas.",
    benefits: [
      {
        icon: <HiSparkles className="h-8 w-8" />,
        title: "Desain Eksklusif",
        description: "Solusi unik yang mencerminkan gaya hidup berkualitas.",
        details: ["Konsultasi kebutuhan keluarga secara mendalam", "3D rendering sebelum eksekusi", "Material swatch untuk pemilihan langsung"],
      },
      {
        icon: <HiLightningBolt className="h-8 w-8" />,
        title: "Proses Tanpa Repot",
        description: "Dari konsep hingga eksekusi, kami tangani semuanya.",
        details: ["Satu pintu dari desain hingga realisasi", "Update progres secara berkala", "Koordinasi penuh antar vendor"],
      },
      {
        icon: <HiShieldCheck className="h-8 w-8" />,
        title: "Material Premium",
        description: "Bahan berkualitas tinggi yang didukung dengan garansi.",
        details: ["Material ramah lingkungan & tahan lama", "Garansi material & pengerjaan", "Langsung dari supplier terpercaya"],
      },
      {
        icon: <HiUserCircle className="h-8 w-8" />,
        title: "Tim Desainer Elite",
        description: "Profesional berpengalaman khusus untuk hunian high-profile.",
        details: ["Pengalaman lebih dari 10 tahun", "Fokus pada desain personal & high-end", "Konsultasi eksklusif 1-on-1"],
      },
    ],
    portfolioSectionTitle: "Karya yang Menginspirasi",
    portfolioSectionDesc: "Jelajahi proyek-proyek eksklusif kami yang dirancang khusus untuk profesional seperti Anda.",
    ctaTitle: "Siap Mengubah Rumah Anda Menjadi Lebih Indah, Nyaman dan Berkelas?",
    ctaDesc: "Jadwalkan konsultasi gratis dengan desainer elite kami dan dapatkan konsep awal dalam 48 jam.",
    ctaButton: "Konsultasi",
    ctaBackground: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-271743.jpg",
  },
  howTo: {
    section: {
      badge: "Tanpa Ribet",
      title: "Kualitas Premium & Terstruktur",
      highlight: "untuk Kenyamanan Anda",
      description: "Kami merancang pengalaman tanpa repot dari awal hingga akhir, memastikan setiap detail sesuai ekspektasi keluarga profesional seperti Anda",
    },
    steps: [
      {
        icon: <HiOutlineChat className="h-8 w-8" />,
        title: "Konsultasi Eksklusif",
        description: "Diskusi mendalam tentang kebutuhan, gaya hidup, dan preferensi keluarga Anda",
        duration: "1-2 Hari",
        color: "text-primary",
        bgColor: "bg-primary/10",
      },
      {
        icon: <HiOutlineLightBulb className="h-8 w-8" />,
        title: "Konsep & Desain",
        description: "Penyusunan mood board, 3D rendering, dan pemilihan material premium",
        duration: "3-5 Hari",
        color: "text-secondary",
        bgColor: "bg-secondary/10",
      },
      {
        icon: <HiOutlineCube className="h-8 w-8" />,
        title: "Produksi Material",
        description: "Pengadaan furnitur custom dan material eksklusif dari mitra pilihan",
        duration: "7-14 Hari",
        color: "text-success",
        bgColor: "bg-success/10",
      },
      {
        icon: <HiOutlineHome className="h-8 w-8" />,
        title: "Implementasi",
        description: "Instalasi profesional oleh tim ahli dengan pengawasan ketat",
        duration: "3-7 Hari",
        color: "text-info",
        bgColor: "bg-info/10",
      },
    ],
    guarantee: {
      badge: "Garansi",
      title: "Bangun Tempat Tinggal dengan",
      highlight: "Jaminan dan Kualitas",
      description: "Kami memberikan revisi desain tanpa batas hingga Anda 100% puas. Tidak ada pembayaran penuh sebelum implementasi selesai dan disetujui.",
      items: ["Premium", "Eksklusif", "Profesional", "Garansi"],
    },
  },
  testimonyAndClient: {
    meta: {
      badgeLabel: "Testimoni",
      title: "Kepercayaan dari ",
      highlight: "Klien Terkemuka",
      subtitle: "Mereka yang telah mempercayakan desain rumah impian pada tim ahli kami.",
      trustTitle: "Klien Kami yang Luar Biasa",
    },
    testimonials: [
      {
        name: "dr. Anindita Putri, Sp.KJ",
        profession: "Psikiater",
        company: "RS Premier Bintaro",
        quote: "Sebagai dokter yang sibuk, saya tidak punya waktu untuk desain rumah. Tim ini memahami kebutuhan keluarga saya dan menciptakan ruang penyembuhan di rumah yang sempurna.",
        rating: 5,
        photo: "/images/templateLandingPageBonus/Zemira/images/testimoni/pexels-photo-774909.jpg",
      },
      {
        name: "Bambang Sutrisno, S.H., M.H.",
        profession: "Pengacara",
        company: "Sutrisno & Partners Law Firm",
        quote: "Rumah saya sekarang menjadi tempat favorit untuk menjamu klien penting. Desainnya elegan namun tetap hangat untuk keluarga.",
        rating: 5,
        photo: "/images/templateLandingPageBonus/Zemira/images/testimoni/pexels-photo-2379004.jpg",
      },
      {
        name: "Dian Sastrowardoyo",
        profession: "CEO",
        company: "Surya Teknologi Group",
        quote: "Investasi terbaik untuk keluarga saya. Setiap sudut rumah bercerita tentang kepribadian kami. Tim profesional yang sangat memahami selera high-end.",
        rating: 5,
        photo: "/images/templateLandingPageBonus/Zemira/images/testimoni/pexels-photo-712521.jpg",
      },
      {
        name: "Prof. Dr. H. Ahmad Fauzi, M.Eng",
        profession: "Dosen & Konsultan",
        company: "Universitas Indonesia",
        quote: "Desain home office saya sekarang menjadi ruang produktivitas sekaligus inspirasi. Material premium yang digunakan benar-benar terasa kualitasnya.",
        rating: 5,
        photo: "/images/templateLandingPageBonus/Zemira/images/testimoni/pexels-photo-2182970.jpg",
      },
    ],
    trustLogos: [
      { icon: <FaGoogle className="w-8 h-8" />, label: "Google" },
      { icon: <FaWindows className="w-8 h-8" />, label: "Microsoft" },
      { icon: <FaWordpress className="w-8 h-8" />, label: "WordPress" },
      { icon: <FaYoutube className="w-8 h-8" />, label: "YouTube" },
      { icon: <FaApple className="w-8 h-8" />, label: "Apple" },
      { icon: <FaAmazon className="w-8 h-8" />, label: "Amazon" },
      { icon: <FaFacebook className="w-8 h-8" />, label: "Facebook" },
      { icon: <FaSpotify className="w-8 h-8" />, label: "Spotify" },
    ],
  },
  offerContent: {
    badgeLabel: "Promo Spesial",
    titleStart: "Konsultasi Gratis + ",
    highlight: "Diskon 15%",
    titleEnd: " Paket Lengkap",
    description: "Khusus untuk 20 pendaftar pertama bulan ini. Dapatkan penawaran eksklusif untuk transformasi rumah impian Anda!",

    // ✅ Ikon dan label fitur
    listFeatures: [
      {
        icon: <HiOutlineGift className="w-6 h-6 text-base-100" />,
        label: "Konsultasi Gratis dengan Desainer Elite",
      },
      {
        icon: <HiOutlineClock className="w-6 h-6 text-base-100" />,
        label: "Diskon 15% Paket Desain Lengkap",
      },
      {
        icon: <HiOutlineShieldCheck className="w-6 h-6 text-base-100" />,
        label: "Free 3D Rendering + Swatch Material Eksklusif",
      },
    ],

    quotaLabel: "Kuota Terbatas!",
    quotaInfo: "Hanya tersisa 8 slot dari 20 kuota penawaran spesial",
    privacyTitle: "Privasi Terjamin",
    privacySubtitle: "Data Anda aman dan hanya digunakan untuk layanan premium",
    successTitle: "Pendaftaran Anda sedang di proses!",
    successMessage: "Kami akan segera menghubungi Anda melalu pesan Whatsapp.",
    submitButton: "Kirim",
    submitAnother: "Kirim Pesan Lain",
    formTitle: "Dapatkan Diskon 15%",
    formDescription: "Isi formulir berikut untuk mengklaim penawaran spesial dan konsultasi gratis",
    legalNote: "Dengan mengisi formulir, Anda menyetujui kebijakan privasi kami",
  },
};

export default function Zemira({ siteData, siteName }) {
  const widthSection = "max-w-6xl";
  return (
    <div className="relative">
      <HeaderLandingGlobal siteName={siteName} widthNavbar={widthSection} />
      <HeroSectionZemira secId="hero" data={zemiraData.heroData} secIdTarget="#tantangan-profesi" />
      <ProblemSectionZemira secId="tantangan-profesi" data={zemiraData.problem} />
      <SolutionSectionZemira secId="solusi-tepat" data={zemiraData.text} secIdTarget="#formPendaftaran">
        <GallerySectionZemira secId="portfolio" data={zemiraData.portfolioImages} />
      </SolutionSectionZemira>
      <WorkProcessZemira secId="praktis" data={zemiraData.howTo} />
      <TestimonialsZemira secId="testimoni" data={zemiraData.testimonyAndClient} />
      <SpecialOfferZemira secId="formPendaftaran" data={zemiraData.offerContent} waNumber={siteData.phone} />
      <FAQSectionZemira secId="informasi-penting" data={zemiraData.faq} secIdTarget="#formPendaftaran" />
      <FooterLandingPageOnly siteName={siteName} />
    </div>
  );
}
