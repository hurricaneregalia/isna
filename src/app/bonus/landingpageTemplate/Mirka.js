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

const dataMirka = {
  hero: {
    heading: "TEKNIK FOTOGRAFI DIGITAL YANG BIKIN FOTO KAMU VIRAL DI MEDSOS",
    image: "https://images.pexels.com/photos/11904557/pexels-photo-11904557.jpeg",
  },

  problem: {
    title: "Susah Bikin Foto Kamu Jadi Keren?",
    description: "Banyak orang punya kamera bagus tapi hasil fotonya tidak sesuai harapan. Kamera yang canggih saja tidak cukup kalau kamu belum tahu teknik dan setting yang tepat.",
    image: "https://images.pexels.com/photos/417059/pexels-photo-417059.jpeg",
    title2: "Kendala Saat Melakukan Sesi Foto?",
    item2: [
      { description: "Sulit mengatur pencahayaan dan fokus." },
      { description: "Belum paham fungsi berbagai mode kamera." },
      { description: "Foto selalu blur atau kurang hidup." },
      { description: "Bingung cara menghasilkan foto menarik." },
    ],
    image2: "https://images.pexels.com/photos/4584411/pexels-photo-4584411.jpeg",
    image3: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
  },
  solution: {
    title: "Solusi yang membuat foto kamu makin bagus",
    description: "Kursus fotografi online bersama Frameium Square. Pelajari teknik memotret dari dasar hingga mahir, di mana saja dan kapan saja, langsung dari para profesional.",
    image: "https://images.pexels.com/photos/417059/pexels-photo-417059.jpeg",
  },
  benefit: {
    title: "alasan Kursus fotografi online ini Cocok untuk Kamu",
    item: [
      {
        image: "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2",
        title: "Praktik langsung yang mudah dipahami.",
      },
      {
        image: "https://images.pexels.com/photos/3771830/pexels-photo-3771830.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2",
        title: "Instruktur ahli dan ramah.",
      },
      {
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2",
        title: "Belajar fleksibel kapan saja.",
      },
      {
        image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2",
        title: "Komunitas seru untuk saling dukung.",
      },
      {
        image: "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2",
        title: "Bonus modul editing foto eksklusif.",
      },
    ],
  },

  portfolio: {
    title: "Karya Peserta Kursus Frameium Square",
    item: [
      {
        id: 1,
        imageUrl: "https://images.pexels.com/photos/3815584/pexels-photo-3815584.jpeg?auto=compress&cs=tinysrgb&w=800",
        artistName: "Milos Zrnic",
        className: "lg:col-span-1 sm:col-span-2 sm:row-span-2",
      },
      {
        id: 2,
        imageUrl: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
        artistName: "ELEVATE",
        className: "lg:col-span-2 sm:col-span-1",
      },
      {
        id: 3,
        imageUrl: "https://images.pexels.com/photos/418806/pexels-photo-418806.jpeg?auto=compress&cs=tinysrgb&w=800",
        artistName: "Ashwin Alok",
        className: "md:col-span-1",
      },
      {
        id: 4,
        imageUrl: "https://images.pexels.com/photos/6466289/pexels-photo-6466289.jpeg?auto=compress&cs=tinysrgb&w=800",
        artistName: "cottonbro studio",
        className: "md:col-span-1",
      },
      {
        id: 5,
        imageUrl: "https://images.pexels.com/photos/3755822/pexels-photo-3755822.jpeg?auto=compress&cs=tinysrgb&w=800",
        artistName: "Andrea Piacquadio",
        className: "lg:col-span-2 sm:col-span-1",
      },
    ],
  },

  pricing: {
    title: "Pilih Paket Kursus Kami",
    items: [
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
        src: "https://images.pexels.com/photos/5866877/pexels-photo-5866877.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Kursus Fotografi",
      },
      {
        id: "img-2",
        src: "https://images.pexels.com/photos/4254164/pexels-photo-4254164.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Workshop Fotografi",
      },
    ],
  },

  testimonials: {
    title: "Testimoni",
    items: [
      {
        id: 1,
        name: "Sarah Johnson",
        profession: "Owner, Cafe Lumière",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        quote: "Pelayanan mereka luar biasa! Proyek selesai tepat waktu dan hasilnya menakjubkan.",
        rating: 5,
        images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
      },
      {
        id: 2,
        name: "Dimas Setiawan",
        profession: "CEO, Ruang Interior",
        photo: "https://randomuser.me/api/portraits/men/36.jpg",
        quote: "Tim sangat profesional dan kreatif. Portofolio mereka berbicara banyak.",
        rating: 4,
        images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
      },
      {
        id: 3,
        name: "Amira Putri",
        profession: "Marketing Manager, UrbanStay",
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
        quote: "Kami mendapatkan lebih dari yang kami harapkan. Layout dan visualisasinya sangat kuat.",
        rating: 5,
        images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
      },
      {
        id: 4,
        name: "Yusuf Al-Fatih",
        profession: "Founder, DesainPro",
        photo: "https://randomuser.me/api/portraits/men/21.jpg",
        quote: "Detail dan kualitas sangat diperhatikan. Pekerjaan yang luar biasa.",
        rating: 4,
        images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
      },
      {
        id: 5,
        name: "Lia Paramita",
        profession: "Creative Director, Artline",
        photo: "https://randomuser.me/api/portraits/women/25.jpg",
        quote: "Visual brand kami meningkat drastis setelah bekerja sama.",
        rating: 5,
        images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
      },
      {
        id: 6,
        name: "Andrew Hartono",
        profession: "Managing Director, Kontainer",
        photo: "https://randomuser.me/api/portraits/men/11.jpg",
        quote: "Responsif dan mengerti kebutuhan bisnis kami dengan sangat baik.",
        rating: 4,
        images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
      },
      {
        id: 7,
        name: "Nadia Rizki",
        profession: "Pemilik, Homely Stay",
        photo: "https://randomuser.me/api/portraits/women/18.jpg",
        quote: "Sangat puas dengan hasil akhirnya! Stylish dan fungsional.",
        rating: 5,
        images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
      },
      {
        id: 8,
        name: "Teguh Mahendra",
        profession: "UI/UX Designer",
        photo: "https://randomuser.me/api/portraits/men/42.jpg",
        quote: "Mereka benar-benar mengerti estetika dan usability.",
        rating: 5,
        images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
      },
      {
        id: 9,
        name: "Siska Marlina",
        profession: "Owner, Warung Modern",
        photo: "https://randomuser.me/api/portraits/women/81.jpg",
        quote: "Tim sangat kooperatif dari awal hingga akhir proyek.",
        rating: 4,
        images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
      },
      {
        id: 10,
        name: "Farhan Aziz",
        profession: "Architect, Form & Function",
        photo: "https://randomuser.me/api/portraits/men/52.jpg",
        quote: "Konsep desainnya benar-benar kuat dan visioner.",
        rating: 5,
        images: "https://images.pexels.com/photos/9063615/pexels-photo-9063615.jpeg",
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
    subtitle: "Wujudkan impian fotografimu sekarang. Bergabunglah dengan kami dan mulai perjalanan kreatifmu hari ini!",
    buttonText: "Mulai Kursus Sekarang",
    badgeText: "⭐ Sudah 5.200+ siswa bergabung",
    imageUrl: "https://images.pexels.com/photos/11904557/pexels-photo-11904557.jpeg",
    imageAlt: "Fotografer sedang mengambil gambar",
  },
};

export default function Mirka({ siteData, siteName }) {
  return (
    <>
      <HeroSectionMirka data={dataMirka.hero} secId="hero" />
      <ProblemSectionMirka data={dataMirka.problem} secId="problem" />
      <SolutionSectionMirka data={dataMirka.solution} secId="solution" />
      <BenefitSectionMirka data={dataMirka.benefit} secId="benefit" />
      <PortfolioSectionMirka data={dataMirka.portfolio} secId="portfolio" />
      <PricingSectionMirka data={dataMirka.pricing} secId="daftar" waNumber={siteData.phone} />
      <TestimonialSectionImageMirka data={dataMirka.testimonials} secId="testimoni" />
      <FAQSectionMirka data={dataMirka.faqSection} secId="faq" />
      <CallToActionSectionMirka data={dataMirka.callToAction} secId="cta" siteName={siteName} />
    </>
  );
}
