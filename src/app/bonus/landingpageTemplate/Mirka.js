import React from "react";
import HeroSectionMirka from "./mirka/HeroSectionMirka";
import ProblemSectionMirka from "./mirka/ProblemSectionMirka";
import BenefitSectionMirka from "./mirka/BenefitSectionMirka";
import PortfolioSectionMirka from "./mirka/PortfolioSectionMirka";
import PricingSectionMirka from "./mirka/PricingSectionMirka";
import TestimonialSectionImageMirka from "./mirka/TestimonialSectionImageMirka";
import FAQSectionMirka from "./mirka/FAQSectionMirka";
import CallToActionSectionMirka from "./mirka/CallToActionSectionMirka";
import SolutionSectionMirka from "./mirka/SolutionSectionMirka";
import ProblemSectionMirka2 from "./mirka/ProblemSectionMirka2";

const dataMirka = {
  hero: {
    heading: "TEKNIK FOTOGRAFI DIGITAL YANG BIKIN FOTO KAMU VIRAL DI MEDSOS",
    image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-11904557.jpg",
  },

  problem: {
    title: "Susah Bikin Foto Kamu Jadi Keren?",
    description: "Banyak orang punya kamera bagus tapi hasil fotonya tidak sesuai harapan. Kamera yang canggih saja tidak cukup kalau kamu belum tahu teknik dan setting yang tepat.",
    image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-3601097.jpg",
    title2: "Kendala Saat Melakukan Sesi Foto?",
    item2: [
      { description: "Sulit mengatur pencahayaan dan fokus." },
      { description: "Belum paham fungsi berbagai mode kamera." },
      { description: "Foto selalu blur atau kurang hidup." },
      { description: "Bingung cara menghasilkan foto menarik." },
    ],
    image2: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-4584411.jpg",
    image3: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-9063615.jpg",
  },

  solution: {
    title: "Solusi yang membuat foto kamu makin bagus",
    description: "Kursus fotografi online bersama Frameium Square. Pelajari teknik memotret dari dasar hingga mahir, di mana saja dan kapan saja, langsung dari para profesional.",
    image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-3762927.jpg",
  },

  benefit: {
    title: "alasan Kursus fotografi online ini Cocok untuk Kamu",
    item: [
      {
        image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-1082663.jpg",
        title: "Praktik langsung yang mudah dipahami.",
      },
      {
        image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-1264210.jpg",
        title: "Instruktur ahli dan ramah.",
      },
      {
        image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-935743.jpg",
        title: "Belajar fleksibel kapan saja.",
      },
      {
        image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-3280130.jpg",
        title: "Komunitas seru untuk saling dukung.",
      },
      {
        image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-2846814.jpg",
        title: "Bonus modul editing foto eksklusif.",
      },
    ],
  },

  portfolio: {
    title: "Karya Peserta Kursus Frameium Square",
    item: [
      {
        id: 1,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-2467287.jpg",
        artistName: "Milos Zrnic",
        className: "lg:col-span-1 sm:col-span-2 sm:row-span-2",
      },
      {
        id: 2,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-1132558.jpg",
        artistName: "ELEVATE",
        className: "lg:col-span-2 sm:col-span-1",
      },
      {
        id: 3,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-2187601.jpg",
        artistName: "Ashwin Alok",
        className: "md:col-span-1",
      },
      {
        id: 4,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-3679525.jpg",
        artistName: "cottonbro studio",
        className: "md:col-span-1",
      },
      {
        id: 5,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-247599.jpg",
        artistName: "Andrea Piacquadio",
        className: "lg:col-span-2 sm:col-span-1",
      },
      {
        id: 6,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-208745.jpg",
        artistName: "ELEVATE",
        className: "lg:col-span-2 sm:col-span-1",
      },
      {
        id: 7,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-774664.jpg",
        artistName: "Ashwin Alok",
        className: "md:col-span-1",
      },
      {
        id: 8,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-2787341.jpg",
        artistName: "Milos Zrnic",
        className: "lg:col-span-1 sm:col-span-2 sm:row-span-2",
      },
      {
        id: 9,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-10311435.jpg",
        artistName: "cottonbro studio",
        className: "md:col-span-1",
      },
      {
        id: 10,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-1519088.jpg",
        artistName: "Andrea Piacquadio",
        className: "lg:col-span-2 sm:col-span-1",
      },
    ],
  },

  pricing: {
    title: "Pilih Paket Kursus Kami",
    background: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-3680219.webp",
    item: [
      {
        id: 1,
        name: "Kursus Fotografi Online",
        price: 299000,
        features: ["Akses selamanya", "Materi video HD", "Sertifikat digital", "Bisa diakses dari HP/Laptop", "Bonus eBook teknik pencahayaan"],
        buttonLabel: "Daftar Sekarang",
      },
    ],
    imageCards: [
      {
        id: "img-1",
        src: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-2850286.jpg",
        alt: "Kursus Fotografi",
      },
      {
        id: "img-2",
        src: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-3680219.jpg",
        alt: "Workshop Fotografi",
      },
    ],
  },

  testimonials: {
    title: "Testimoni",
    item: [
      {
        id: 1,
        name: "Sarah Johnson",
        profession: "Owner, Cafe Lumière",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/44.jpg",
        quote: "Pelayanan mereka luar biasa! Proyek selesai tepat waktu dan hasilnya menakjubkan.",
        rating: 5,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 2,
        name: "Dimas Setiawan",
        profession: "CEO, Ruang Interior",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/36.jpg",
        quote: "Tim sangat profesional dan kreatif. Portofolio mereka berbicara banyak.",
        rating: 4,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 3,
        name: "Amira Putri",
        profession: "Marketing Manager, UrbanStay",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/68.jpg",
        quote: "Kami mendapatkan lebih dari yang kami harapkan. Layout dan visualisasinya sangat kuat.",
        rating: 5,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 4,
        name: "Yusuf Al-Fatih",
        profession: "Founder, DesainPro",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/21.jpg",
        quote: "Detail dan kualitas sangat diperhatikan. Pekerjaan yang luar biasa.",
        rating: 4,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 5,
        name: "Lia Paramita",
        profession: "Creative Director, Artline",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/25.jpg",
        quote: "Visual brand kami meningkat drastis setelah bekerja sama.",
        rating: 5,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 6,
        name: "Andrew Hartono",
        profession: "Managing Director, Kontainer",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/11.jpg",
        quote: "Responsif dan mengerti kebutuhan bisnis kami dengan sangat baik.",
        rating: 4,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 7,
        name: "Nadia Rizki",
        profession: "Pemilik, Homely Stay",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/18.jpg",
        quote: "Sangat puas dengan hasil akhirnya! Stylish dan fungsional.",
        rating: 5,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 8,
        name: "Teguh Mahendra",
        profession: "UI/UX Designer",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/42.jpg",
        quote: "Mereka benar-benar mengerti estetika dan usability.",
        rating: 5,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 9,
        name: "Siska Marlina",
        profession: "Owner, Warung Modern",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/81.jpg",
        quote: "Tim sangat kooperatif dari awal hingga akhir proyek.",
        rating: 4,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 10,
        name: "Farhan Aziz",
        profession: "Architect, Form & Function",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/52.jpg",
        quote: "Konsep desainnya benar-benar kuat dan visioner.",
        rating: 5,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
    ],
  },

  faqSection: {
    title: "FAQ, Pertanyaan yang Sering Muncul",
    subtitle: "Kami sudah jawab pertanyaan yang sering ditanyakan tentang kursus fotografi.",
    faqs: [
      {
        question: "Apakah kursus ini cocok untuk pemula?",
        answer: "Ya, kursus ini dirancang untuk pemula tanpa pengalaman fotografi sebelumnya.",
      },
      {
        question: "Apa yang akan saya pelajari?",
        answer: "Kamu akan belajar dasar-dasar fotografi, pengaturan kamera, pencahayaan, komposisi, dan editing.",
      },
      {
        question: "Apakah saya butuh kamera profesional?",
        answer: "Tidak harus. Kamera smartphone pun bisa digunakan selama kamu memahami teknik dasar yang diajarkan.",
      },
      {
        question: "Berapa lama durasi kursus?",
        answer: "Kursus ini berdurasi 4 minggu, dengan akses seumur hidup ke semua materi.",
      },
      {
        question: "Apakah ada sertifikat setelah menyelesaikan kursus?",
        answer: "Ya, kamu akan mendapatkan sertifikat digital setelah menyelesaikan seluruh modul dan kuis.",
      },
    ],
  },

  callToAction: {
    title: "Siap Menguasai Kamera dan Membuat Foto Kamu Jadi Menakjubkan?",
    subtitle: "Wujudkan impian fotografimu sekarang. Bergabunglah dengan Frameium Square dan mulai perjalanan kreatifmu hari ini!",
    buttonText: "Mulai Kursus Sekarang",
    badgeText: "⭐ Sudah 5.200+ siswa bergabung",
    imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-11904557.jpg",
    imageAlt: "Fotografer sedang mengambil gambar",
  },
  pattern: "/images/templateLandingPageBonus/Mirka/images/pattern/pattern-01.svg",
};

export default function Mirka({ siteData, siteName, activeTheme }) {
  return (
    <>
      <div className="card  bg-primary overflow-hidden space-y-32 sm:pb-20 pb-5 sm:border-16 border-8 border-white">
        <HeroSectionMirka data={dataMirka.hero} secId="hero" siteName={siteName} />
        <ProblemSectionMirka data={dataMirka.problem} secId="problem" />
        <ProblemSectionMirka2 data={dataMirka.problem} secId="problem2" />
      </div>
      <div
        className=" space-y-32 py-32"
        style={{
          backgroundImage: `url(${dataMirka.pattern})`,
          backgroundSize: "150px auto",
        }}
      >
        <SolutionSectionMirka data={dataMirka.solution} secId="solution" />
        <BenefitSectionMirka data={dataMirka.benefit} secId="benefit" />
        <PortfolioSectionMirka data={dataMirka.portfolio} secId="portfolio" />
      </div>
      <PricingSectionMirka data={dataMirka} secId="daftar" waNumber={siteData.phone} />
      <TestimonialSectionImageMirka data={dataMirka.testimonials} secId="testimoni" />
      <FAQSectionMirka data={dataMirka.faqSection} secId="faq" />
      <CallToActionSectionMirka data={dataMirka.callToAction} secId="cta" siteName={siteName} />
    </>
  );
}
