import React from "react";
import HeroSectionBaizan from "./baizan/HeroSectionBaizan";
import ProblemSolutionSectionBaizan from "./baizan/ProblemSolutionSectionBaizan";
import BenefitSectionBaizan from "./baizan/BenefitSectionBaizan";
import HowToUseSectionBaizan from "./baizan/HowToUseSectionBaizan";
import TestimonialSectionBaizan from "./baizan/TestimonialSectionBaizan";
import FooterLandingPageOnly from "../[slug]/FooterLandingPageOnly";
import HeaderSectionBaizan from "./baizan/HeaderSectionBaizan";
import ProductHighlightSectionBaizan from "./baizan/ProductHighlightSectionBaizan";
import DaftarProdukBaizan from "./baizan/DaftarProdukBaizan";
import BonusDanGaransiSection from "./baizan/BonusDanGaransiSection";
import CTASectionBaizan from "./baizan/CTASectionBaizan";
import CTASectionSecondaryBaizan from "./baizan/CTASectionSecondaryBaizan";
import FAQSectionBaizan from "./baizan/FAQSectionBaizan";
import { FaSadTear, FaClock, FaTimesCircle, FaLeaf, FaStar, FaCheckCircle } from "react-icons/fa";

export default function Baizan({ siteName, siteData }) {
  const widthSection = "max-w-6xl";

  const dataBaizan = {
    heroSection: {
      backgroundImageUrl: "/images/templateLandingPageBonus/Baizan/photo-1597143722151-6c041d7b2901.jpg",
      headline: "Dapatkan Kulit Sehat, Cantik Alami",
      subHeadline: "Perawatan kulit yang dirancang khusus untuk kamu.",
    },

    problemSection: {
      secId: "problem",
      title: "Kulit Kusam dan Noda Hitam pada Wajah",
      description: "Banyak wanita menghadapi masalah kulit yang mengganggu kepercayaan diri. Terpapar polusi, stress, dan sinar matahari setiap hari membuat kulit terlihat lelah dan kusam.",
      painPoints: [
        {
          icon: <FaSadTear className="text-error text-2xl" />,
          title: "Kulit Kusam & Tidak Bercahaya",
          description: "Kulit tampak gelap, tidak segar, dan tidak merata warnanya.",
        },
        {
          icon: <FaClock className="text-warning text-2xl" />,
          title: "Perawatan yang Butuh Waktu Lama",
          description: "Hasil tak terlihat meski sudah mencoba berbagai produk mahal.",
        },
        {
          icon: <FaTimesCircle className="text-accent text-2xl" />,
          title: "Bingung Pilih Produk yang Aman",
          description: "Takut salah pilih yang justru memperparah kondisi kulit.",
        },
      ],
      image: {
        src: "/images/templateLandingPageBonus/Baizan/pexels-photo-32387948.jpg",
        alt: "Wajah wanita terlihat kusam dan lelah",
        width: 600,
        height: 800,
      },
    },

    benefitSection: {
      secId: "manfaat",
      title: "Solusinya adalah MONARA?",
      description: "MONARA dirancang khusus untuk wanita Indonesia yang ingin tampil cerah alami, aman, dan percaya diri setiap hari.",
      benefitList: [
        {
          icon: <FaLeaf className="text-success text-2xl" />,
          text: "Bahan alami yang aman untuk semua jenis kulit",
        },
        {
          icon: <FaStar className="text-warning text-2xl" />,
          text: "Teruji klinis dengan hasil nyata dalam 7 hari",
        },
        {
          icon: <FaCheckCircle className="text-primary text-2xl" />,
          text: "Tidak lengket, mudah meresap, dan ringan dipakai",
        },
      ],
      image: {
        src: "/images/templateLandingPageBonus/Baizan/pexels-photo-32807764.jpg",
        alt: "Wanita bahagia dengan kulit cerah alami",
        width: 600,
        height: 800,
      },
    },

    productHighlightSection: {
      secId: "produk-unggulan",
      title: "Produk Unggulan MONARA",
      shortDescription: "Dipercaya oleh ribuan wanita Indonesia untuk merawat kulit agar tampak cerah alami dan bersinar setiap hari.",
      products: [
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-6635813.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-1029896.jpg",
          title: "MONARA Brightening Serum 30ml",
          price: 189000,
          rating: 4.5,
          discountValue: 15,
        },
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-3735649.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-6156587.jpg",
          title: "MONARA Night Glow Cream 50ml",
          price: 209000,
          rating: 4.7,
          discountValue: 10,
        },
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-4202325.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-7064230.jpg",
          title: "MONARA Day Radiance Lotion 50ml",
          price: 175000,
          rating: 4.3,
          discountValue: 20,
        },
      ],
    },

    productSection: {
      secId: "daftar-produk-baizan",
      title: "Produk Terbaik MONARA",
      shortDescription: "Pilihan terbaik untuk perawatan kulit cerah alami, diformulasikan khusus untuk wanita Indonesia.",
      products: [
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-6635813.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-1029896.jpg",
          title: "Brightening Serum 30ml",
          price: 189000,
          rating: 4.5,
          discountValue: 15,
        },
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-3735649.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-973405.jpg",
          title: "Night Glow Cream 50ml",
          price: 209000,
          rating: 4.7,
          discountValue: "",
        },
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-4202325.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-7064230.jpg",
          title: "Day Radiance Lotion 50ml",
          price: 175000,
          rating: 4.3,
          discountValue: 20,
        },
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-4051915.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-4148860.jpg",
          title: "Vitamin C Booster 20ml",
          price: 149000,
          rating: 4.6,
          discountValue: "",
        },
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-461428.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-374713.jpg",
          title: "Hydrating Toner 100ml",
          price: 99000,
          rating: 4.4,
          discountValue: 8,
        },
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-2720447.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-3148935.jpg",
          title: "Soothing Gel 50ml",
          price: 129000,
          rating: 4.2,
          discountValue: "",
        },
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-3321416.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-3775122.jpg",
          title: "Peeling Serum 30ml",
          price: 169000,
          rating: 4.5,
          discountValue: 14,
        },
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-530963.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-3775123.jpg",
          title: "Brightening Mask 25g",
          price: 79000,
          rating: 4.6,
          discountValue: "",
        },
      ],
    },

    testimonialSection: {
      title: "Apa Kata Mereka?",
      description: "Testimoni pelanggan kami yang puas dengan produk MONARA.",
      items: [
        {
          name: "Rina Andini",
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-415829.jpg",
          rating: 5,
          testimonial: "Benar-benar mengubah kulitku jadi lebih cerah alami.",
        },
        {
          name: "Putri Anjani",
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-733872.jpg",
          rating: 4,
          testimonial: "Aku suka teksturnya ringan dan cepat menyerap di kulit.",
        },
        {
          name: "Nadya Larasati",
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-1130626.jpg",
          rating: 5,
          testimonial: "Dalam seminggu kulitku terlihat jauh lebih glowing!",
        },
      ],
    },

    howToUseSection: {
      title: "Cara Menggunakan MONARA",
      description: "Ikuti langkah-langkah mudah berikut untuk hasil maksimal dalam merawat kulit Anda.",
      image: "/images/templateLandingPageBonus/Baizan/pexels-photo-415829.jpg",
      steps: [
        {
          title: "Bersihkan Wajah",
          description: "Gunakan pembersih wajah yang lembut sebelum aplikasi.",
        },
        {
          title: "Aplikasikan Serum",
          description: "Teteskan serum ke wajah dan pijat lembut.",
        },
        {
          title: "Gunakan Krim Malam",
          description: "Gunakan secara merata sebelum tidur.",
        },
      ],
    },
    bonusSection: [{ label: "E-Book Eksklusif" }, { label: "Konsultasi Skincare Gratis" }, { label: "Free Ongkir Seluruh Indonesia" }, { label: "Gift Box Menarik" }],

    CTASection: {
      title: "Kulit Cerah Alami Bukan Lagi Mimpi",
      subtitle: "Yuk mulai transformasi kulitmu sekarang juga dengan MONARA.",
      backgroundImage: "/images/templateLandingPageBonus/Baizan/pexels-photo-948873.jpg",
    },

    CTASectionSeconday: {
      title: "Saatnya Tampil Lebih Percaya Diri",
      subtitle: "Mulai perjalanan perawatan kulitmu hari ini bersama MONARA.",
      backgroundImage: "/images/templateLandingPageBonus/Baizan/pexels-photo-948873.jpg",
    },

    faqSection: {
      headline: "Pertanyaan Konsumen",
      subtitle: "Temukan jawaban atas pertanyaan Anda tentang Monara Serum",
      items: [
        {
          question: "Apakah Monara Serum aman untuk kulit sensitif?",
          answer:
            "Ya, produk kami diformulasikan khusus untuk semua jenis kulit termasuk sensitif. Kandungan 97% bahan alami dan bebas dari merkuri, hydroquinone, serta paraben membuatnya aman untuk penggunaan jangka panjang.",
        },
        {
          question: "Berapa lama hasil terlihat setelah pemakaian?",
          answer: "Kebanyakan pelanggan melaporkan perubahan positif dalam 14 hari pemakaian rutin. Untuk hasil optimal, kami rekomendasikan pemakaian selama 28 hari penuh.",
        },
        {
          question: "Bagaimana cara menyimpan serum ini?",
          answer: "Simpan di tempat sejuk dan kering, hindari paparan sinar matahari langsung. Setelah dibuka, sebaiknya digunakan dalam 6 bulan.",
        },
        {
          question: "Bisa digunakan bersama produk skincare lain?",
          answer: "Bisa! Monara Serum cocok dipadukan dengan rangkaian skincare Anda. Untuk hasil terbaik, aplikasikan setelah toner dan sebelum moisturizer.",
        },
        {
          question: "Metode pembayaran apa saja yang tersedia?",
          answer: "Kami menerima transfer bank (BCA, Mandiri, BRI), e-wallet (OVO, Dana, ShopeePay), dan COD (khusus Jabodetabek).",
        },
      ],
      contactInfo: "Masih ada pertanyaan? Hubungi kami di WhatsApp: 0812-3456-7890",
    },
  };

  return (
    <>
      <HeroSectionBaizan secId="hero" data={dataBaizan.heroSection}>
        <HeaderSectionBaizan siteName={siteName} bgColor="bg-transparent" widthNavbar={widthSection} />
      </HeroSectionBaizan>
      <ProblemSolutionSectionBaizan secId="problem" data={dataBaizan.problemSection} />
      <BenefitSectionBaizan secId="benefit" data={dataBaizan.benefitSection} />
      <ProductHighlightSectionBaizan secId="highlightProduk" data={dataBaizan.productHighlightSection} />
      <DaftarProdukBaizan secId="produk" data={dataBaizan.productSection} />
      <TestimonialSectionBaizan secId="testimoni" data={dataBaizan.testimonialSection} />
      <HowToUseSectionBaizan secId="howTo" data={dataBaizan.howToUseSection} />
      <BonusDanGaransiSection secId="bonus" data={dataBaizan.bonusSection} />
      <CTASectionSecondaryBaizan secId="ctaStart" data={dataBaizan.CTASection} />
      <FAQSectionBaizan secId="faq" data={dataBaizan.faqSection} />
      <CTASectionBaizan secId="etaEnd" widthSection="w-full" data={dataBaizan.CTASectionSeconday} />
      <FooterLandingPageOnly siteName={siteName} />
    </>
  );
}
