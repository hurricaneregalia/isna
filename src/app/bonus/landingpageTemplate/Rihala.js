import React from "react";
import HeroSectionRihala from "./rihala/HeroSectionRihala";
import ProblemSectionRihala from "./rihala/ProblemSectionRihala";
import ProductSectionRihala from "./rihala/ProductSectionRihala";
import BenefitSectionRihala from "./rihala/BenefitSectionRihala";
import CTAsectionOneRihala from "./rihala/CTAsectionOneRihala";
import HeaderLandingGlobal from "../[slug]/HeaderLandingGlobal";
import TestimoniSectionRihala from "./rihala/TestimoniSectionRihala";
import FooterLandingPageOnly from "../[slug]/FooterLandingPageOnly";
import TripSectionRihala from "./rihala/TripSectionRihala";
import { FaExclamationTriangle } from "react-icons/fa";
import DocumentationSectionRihala from "./rihala/DocumentationSectionRihala";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import FAQSectionRihala from "./rihala/FAQSectionRihala";

const dataRihala = {
  hero: {
    title: "Jelajahi Alam Dengan Penuh Semangat",
    subtitle: "Panduan pendakian dan perkemahan yang aman, mudah, serta penuh petualangan.",
    aboveTitle: "Telusuri gunung Indonesia yang indah.",
    backgroundImageUrl: "/images/templateLandingPageBonus/Rihala/images/photo-1464822759023-fed622ff2c3b.webp",
  },
  problem: {
    title: "Pernah Punya Niat Naik Gunung Tapi Batal?",
    subtitle: "Kami tahu persis ketakutan dan keraguanmu. Itulah kenapa kami menciptakan panduan pendakian ini. Masalah yang biasa ditemui:",
    image: "/images/templateLandingPageBonus/Rihala/images/photo-1495558685573-aba7573d9c01.jpg",
    painPoints: [
      {
        icon: <FaExclamationTriangle className="text-error text-2xl" />,
        title: "Takut nyasar.",
        text: "Tenang, kamu akan ditemani guide berpengalaman di tiap jalur.",
      },
      {
        icon: <FaExclamationTriangle className="text-error text-2xl" />,
        title: "Tidak punya perlengkapan.",
        text: "Kami sediakan semua kebutuhan, kamu cukup bawa semangatmu.",
      },
      {
        icon: <FaExclamationTriangle className="text-error text-2xl" />,
        title: "Belum punya pengalaman.",
        text: "Semua dirancang dengan panduan yang mudah diikuti siapa pun.",
      },
    ],
  },
  benefit: {
    title: "Layanan Pemandu Pendakian Terbaik.",
    subtitle: "Kami bukan sekadar pemandu gunung. Kami adalah mitra pendakianmu. Berikut alasan kenapa banyak pendaki memilih layanan kami:",
    image: "/images/templateLandingPageBonus/Rihala/images/pexels-photo-708392.jpg",
    benefits: [
      {
        icon: <IoMdCheckmarkCircleOutline className="text-primary text-2xl" />,
        title: "Keamanan Terjamin",
        text: "Dipandu oleh tim profesional bersertifikat dengan pengalaman lapangan bertahun-tahun.",
      },
      {
        icon: <IoMdCheckmarkCircleOutline className="text-primary text-2xl" />,
        title: "Rute Ikonik & Eksklusif",
        text: "Nikmati rute terbaik dengan pemandangan spektakuler yang hanya diketahui oleh guide lokal.",
      },
      {
        icon: <IoMdCheckmarkCircleOutline className="text-primary text-2xl" />,
        title: "Pendampingan Total",
        text: "Dari persiapan hingga turun gunung, kamu akan didampingi penuh tanpa perlu repot.",
      },
    ],
  },
  product: {
    sectionTitle: "Paket Pendakian Gunung",
    sectionSubtitle: "Paket terbaik untuk petualanganmu.",
    sectionDescription: "Kami menyediakan berbagai pilihan paket jasa pemandu naik gunung, dari pendaki pemula hingga ekspedisi profesional.",
    products: [
      {
        name: "Basic",
        id: "tier-basic",
        href: "#",
        price: "Rp 500.000",
        quota: "Hingga 5 orang",
        description: "Paket hemat untuk pendaki pemula yang ingin menjajal pengalaman naik gunung.",
        features: ["Pendakian 1 hari", "Pemandu berpengalaman", "Peralatan dasar (tenda, matras)", "Asuransi dasar"],
        featured: false,
      },
      {
        name: "Standard",
        id: "tier-standard",
        href: "#",
        price: "Rp 1.200.000",
        quota: "Hingga 10 orang",
        description: "Paket lengkap dengan fasilitas tambahan untuk kenyamanan selama pendakian.",
        features: ["Pendakian 2 hari 1 malam", "Pemandu + asisten", "Peralatan lengkap + sleeping bag", "Makan 3x sehari", "Asuransi standar"],
        featured: false,
      },
      {
        name: "Premium",
        id: "tier-premium",
        href: "#",
        price: "Rp 2.500.000",
        quota: "Hingga 20 orang",
        description: "Paket eksklusif untuk ekspedisi dengan pelayanan premium dan keamanan maksimal.",
        features: [
          "Pendakian 3 hari 2 malam",
          "Tim pemandu lengkap",
          "Peralatan premium + jaket gunung",
          "Dokumentasi profesional",
          "Asuransi lengkap + evakuasi darurat",
          "Transportasi PP dari kota terdekat",
        ],
        featured: true,
      },
    ],
  },
  documentation: {
    title: "Dokumentasi penuh keceriaan",
    photos: [
      {
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1506744038136-46273834b3fb.jpg",
        alt: "Pendaki di puncak gunung dengan latar belakang langit",
        caption: "Summit Achievement",
        className: "row-span-2",
      },
      {
        src: "/images/templateLandingPageBonus/Rihala/images/pexels-photo-2309266.jpg",
        alt: "Jalur pendakian lembah",
        caption: "Mountain Trail View",
        className: "",
      },
      {
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1504384308090-c894fdcc538d.jpg",
        alt: "Tenda di ketinggian gunung",
        caption: "High Altitude Camp",
        className: "col-span-2",
      },
      {
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1500534623283-312aade485b7.jpg",
        alt: "Pendaki menyeberangi batu besar",
        caption: "Rock Crossing",
        className: "",
      },
      {
        src: "/images/templateLandingPageBonus/Rihala/images/premium_photo-1661883853185-165f5869e6d3.jpg",
        alt: "Pendaki di tepi tebing",
        caption: "Edge of the Cliff",
        className: "",
      },
      {
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1469474968028-56623f02e42e.jpg",
        alt: "Ridgeline saat matahari terbit",
        caption: "Ridge Sunrise",
        className: "",
      },
    ],
  },
  trip: {
    title: "Destinasi Gunung di Indonesia",
    description: "Jelajahi keindahan alam Indonesia melalui rute pendakian epik!",
    photos: [
      {
        title: "Rinjani",
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1506744038136-46273834b3fb.jpg",
        alt: "Puncak Gunung Rinjani dengan danau kawah",
        jarakRute: "26 km",
        waktuTempuh: "3 Hari",
        className: "row-span-2",
      },
      {
        title: "Batur",
        src: "/images/templateLandingPageBonus/Rihala/images/pexels-photo-2082949.jpg",
        alt: "Jalur pendakian Gunung Batur",
        jarakRute: "4 km",
        waktuTempuh: "1/2 Hari",
        className: "",
      },
      {
        title: "Prau",
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1435732960391-11053ee5e6b6.jpg",
        alt: "Pendaki di Gunung Prau Dieng",
        jarakRute: "6 km",
        waktuTempuh: "1 Hari",
        className: "col-span-2",
      },
      {
        title: "Pangrango",
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1500534623283-312aade485b7.jpg",
        alt: "Taman Nasional Gede Pangrango",
        jarakRute: "18 km",
        waktuTempuh: "2 Hari",
        className: "",
      },
      {
        title: "Ijen",
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1615729947596-a598e5de0ab3.jpg",
        alt: "Kawah Ijen di malam hari",
        jarakRute: "6 km",
        waktuTempuh: "1 Hari",
        className: "",
      },
      {
        title: "Dieng",
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1490682143684-14369e18dce8.jpg",
        alt: "Jalur pegunungan di Dataran Tinggi Dieng",
        jarakRute: "2 km",
        waktuTempuh: "1/2 Hari",
        className: "",
      },
    ],
  },
  testimoni: {
    title: "Testimoni Pendaki",
    description: "Cerita pengalaman nyata bersama pemandu pendakian kami.",
    testimoniItems: [
      {
        id: 1,
        title: "Pendakian tak terlupakan di Semeru!",
        date: "20 Juni 2025",
        datetime: "2025-06-20",
        category: { title: "Semeru", href: "#" },
        image: "/images/templateLandingPageBonus/Rihala/testimoni/testimoni.png",
        author: {
          name: "Ayu Lestari",
          role: "Pendaki Pemula",
          href: "#",
          imageUrl: "/images/templateLandingPageBonus/Rihala/testimoni/45.jpg",
        },
      },
      {
        id: 2,
        title: "Ke Rinjani bareng tim terbaik!",
        date: "12 Mei 2025",
        datetime: "2025-05-12",
        category: { title: "Rinjani", href: "#" },
        image: "/images/templateLandingPageBonus/Rihala/testimoni/testimoni.png",
        author: {
          name: "Rizky Aditya",
          role: "Traveler Enthusiast",
          href: "#",
          imageUrl: "/images/templateLandingPageBonus/Rihala/testimoni/32.jpg",
        },
      },
      {
        id: 3,
        title: "Merbabu: nyaman dan seru",
        date: "8 April 2025",
        datetime: "2025-04-08",
        category: { title: "Merbabu", href: "#" },
        image: "/images/templateLandingPageBonus/Rihala/testimoni/testimoni.png",
        author: {
          name: "Dewi Wulandari",
          role: "Solo Hiker",
          href: "#",
          imageUrl: "/images/templateLandingPageBonus/Rihala/testimoni/33.jpg",
        },
      },
    ],
  },
  cta1: {
    title: "Siap Mendaki Gunung Bersama Teman Anda?",
    description: "Dapatkan panduan lengkap untuk persiapan dan rute aman.",
    backgroundImageUrl: "/images/templateLandingPageBonus/Rihala/images/premium_photo-1672115680958-54438df0ab82.jpg",
    whatsappText: "Saya ingin beli template ini.",
    whatsappTextKonsultasi: "Saya ingin konsultasi.",
    ctaNumber: 1,
  },
  cta2: {
    title: "Bonus bekal makanan",
    description: "Dapatkan bonus bekal makanan untuk 1 hari pertama.",
    backgroundImageUrl: "/images/templateLandingPageBonus/Rihala/images/premium_photo-1672115680958-54438df0ab82.jpg",
    whatsappText: "Saya ingin beli template ini.",
    whatsappTextKonsultasi: "Saya ingin konsultasi.",
    ctaNumber: 2,
  },
  faq: {
    title: "Pertanyaan Pelanggan",
    description: "Temukan jawaban dari pertanyaan yang paling sering ditanyakan.",
    faqItems: [
      {
        question: "Apa saja yang termasuk dalam paket pendakian?",
        answer: "Paket pendakian mencakup guide profesional, porter, tenda, makan 3x sehari, tiket masuk, dan dokumentasi.",
      },
      {
        question: "Apakah pemula bisa ikut pendakian?",
        answer: "Tentu! Kami menyediakan jalur dan pendampingan khusus untuk pemula yang belum pernah mendaki sebelumnya.",
      },
      {
        question: "Bagaimana jika cuaca buruk saat hari pendakian?",
        answer: "Jika cuaca ekstrem, pendakian akan dijadwalkan ulang atau dibatalkan dengan pengembalian biaya sesuai ketentuan.",
      },
      {
        question: "Apakah perlengkapan mendaki disediakan?",
        answer: "Kami menyediakan perlengkapan dasar seperti tenda dan sleeping bag. Peralatan pribadi seperti sepatu dan jaket wajib dibawa sendiri.",
      },
      {
        question: "Bagaimana cara melakukan pembayaran dan booking?",
        answer: "Anda dapat booking melalui website kami dan melakukan pembayaran via transfer bank atau dompet digital.",
      },
    ],
  },
};

export default function Rihala({ siteData, siteName }) {
  return (
    <>
      <HeaderLandingGlobal siteName={siteName} />
      <HeroSectionRihala data={dataRihala.hero} />
      <ProblemSectionRihala secId="problem" data={dataRihala.problem} />
      <DocumentationSectionRihala secId="Petualangan" data={dataRihala.documentation} />
      <ProductSectionRihala secId="layanan" data={dataRihala.product} />
      <BenefitSectionRihala secId="keuntungan" data={dataRihala.benefit} />
      <TripSectionRihala secId="trip" data={dataRihala.trip} />
      <CTAsectionOneRihala secId="cta" whatsappNumber={siteData.phone} data={dataRihala.cta1} />
      <TestimoniSectionRihala secId="testimoni" data={dataRihala.testimoni} />
      <CTAsectionOneRihala secId="bonus" data={dataRihala.cta2} whatsappNumber={siteData.phone} />
      <FAQSectionRihala secId="hadiah" data={dataRihala.faq} />
      {/*
       */}
      <FooterLandingPageOnly siteName={siteName} textColor="text-base-100" />
    </>
  );
}
