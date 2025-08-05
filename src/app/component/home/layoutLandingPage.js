import React from "react";
import { FaBullhorn, FaClipboardList, FaHandshake, FaStar } from "react-icons/fa6";
import { BiTargetLock } from "react-icons/bi";
import { FaAd } from "react-icons/fa";
import HeroKalamana from "./HeroKalamana";
import FaktaKalamana from "./FaktaKalamana";
import FenomenaKalamana from "./FenomenaKalamana";
import SolusiKalamana from "./SolusiKalamana";
import HadistKalamana from "./HadistKalamana";
import SeriusKalamana from "./SeriusKalamana";
import ManfaatKalamana from "./ManfaatKalamana";
import PentingKalamana from "./PentingKalamana";
import LayananKalamana from "./LayananKalamana";
import AlurKalamana from "./AlurKalamana";
import KeinginanKalamana from "./KeinginanKalamana";
import BonusKalamana from "./BonusKalamana";
import ClaimBonusKalamana from "./ClaimBonusKalamana";

const dataKalamana = {
  hero: {
    title: "Inilah alasan mengapa 7 dari 10 pebisnis online gagal menjual produk branded. Apakah kamu juga?",
    description: "Banyak orang mengira bisnis online itu mudah, cukup posting foto dan omzet langsung mengalir. Benarkah demikian?",
    background: "/images/landingPage/hero/bgHero2.webp",
  },
  fakta: {
    title: "Yang Sebenarnya Terjadi",
    description:
      "Banyak pebisnis online gagal menjual produk branded meskipun sudah beriklan. Mereka tidak menyadari, bahwa masalahnya bukan pada produk atau harga, tapi cara berkomunikasi yang salah dengan calon pelanggan.",
    image: "/images/uploads/pages/section-1.webp",
  },
  fenomena: {
    title: "Kesalahan Umum",
    description: "Inilah kesalahan yang sering dilakukan oleh pebisnis muslim yang baru memulai bisnis online:",
    image: "/images/uploads/pages/section-2.webp",
    item: [
      { title: "Pesan", description: "Pesan promosi yang tidak menarik" },
      { title: "Target", description: "Tidak tahu target pasar yang tepat" },
      { title: "Kebutuhan", description: "Tidak tahu kebutuhan target pasar" },
      { title: "Keunggulan", description: "Tidak tahu keunggulan produk" },
      { title: "Perang", description: "Terjebak dalam perang harga" },
      { title: "Iklan", description: "Beriklan tanpa strategi yang jelas" },
    ],
  },
  solusi: {
    title: "Persuasive Copywriting",
    description: "Persuasive copywriting adalah strategi komunikasi yang mampu menawarkan produk branded secara lebih efektif kepada target pasar.",
    background: "/images/landingPage/bgShine.webp",
    image: "/images/uploads/pages/section-3.webp",
  },
  hadist: {
    title: "Strategi yang Disukai Allah dan berdampak pada bisnis online",
    description: "Sesungguhnya Allah mencintai seorang hamba yang jika bekerja, ia bersungguh-sungguh dalam pekerjaannya.",
    sanad: "HR. Thabrani, No. 901",
  },
  serius: {
    title: "Bersungguh-sungguh dengan Persuasive copywriting ",
    description: "Persuasive copywriting dapat membantu bisnis online Anda untuk:",
    background: "/images/landingPage/bgShine.webp",
    image: "/images/uploads/pages/section-5.webp",
    item: [
      {
        title: "Membuat pesan promosi",
        description: "Mendapatkan pesan promosi yang dapat menggugah minat pembelian",
        icon: <FaBullhorn />,
      },
      {
        title: "Menentukan target pasar",
        description: "Mendapatkan informasi target pasar yang bermanfaat",
        icon: <BiTargetLock />,
      },
      {
        title: "Mengidentifikasi kebutuhan",
        description: "Mendapatkan informasi hal-hal yang dibutuhkan target pasar",
        icon: <FaClipboardList />,
      },
      {
        title: "Mengidentifikasi keunggulan",
        description: "Mendapatkan informasi tentang keunggulan-keunggulan produk",
        icon: <FaStar />,
      },
      {
        title: "Menghindari perang harga",
        description: "Membuat bisnis jadi lebih menguntungkan",
        icon: <FaHandshake />,
      },
      {
        title: "Membuat iklan",
        description: "Membuat performa iklan jadi lebih efektif",
        icon: <FaAd />,
      },
    ],
  },
  manfaat: {
    title: "yang Dirasakan dari Persuasive Copywriting",
    description:
      "Banyak brand produk Muslim yang awalnya sepi pelanggan, tapi setelah menerapkan teknik persuasive copywriting yang tepat, penjualan mereka meningkat, bahkan tanpa harus banting harga.",
    image: "/images/uploads/pages/section-6.webp",
  },
  penting: {
    title: "Komponen yang dibutuhkan produk branded",
    description: "Inilah yang akan menunjang bisnis online muslim dengan baik:",
    image: "/images/uploads/pages/section-7.webp",
    item: [
      {
        title: "Analisa Target Pasar",
        description: "Untuk menentukan orang yang benar-benar membutuhkan produk Anda.",
      },
      {
        title: "Analisa Produk",
        description: "Untuk menemukan keunggulan produk agar lebih menonjol.",
      },
      {
        title: "Consumer Insight",
        description: "Untuk mengetahui hal apa saja yang diminati target pasar.",
      },
      {
        title: "Persuasive Copywriting",
        description: "Pesan promosi yang dirancang sesuai dengan produk dan target pasar.",
      },
      {
        title: "Branding",
        description: "Untuk membangun citra bisnis yang lebih profesional.",
      },
    ],
  },
  layanan: {
    title: "Persuasive Copywriting",
    description: "Klik tombol di bawah sebelum waktu Anda berakhir.",
    background: "/images/landingPage/bgShine.webp",
  },
  alur: {
    title: "Persuasive Copywriting Mendapatkan Penjualan",
    description: "Proses ini dapat ditiru bisnis online pengusaha muslim untuk mendatangkan banyak penjualan.",
    image: "/images/uploads/pages/section-7.webp",
    item: [
      {
        title: "Membuat Copywriting",
        description: "Persuasive copywriting ini akan mempengaruhi target pasar sehingga mereka akan terdorong untuk membeli produk.",
        image: "/images/uploads/pages/alur-1.png",
      },
      {
        title: "Menarik Perhatian",
        description: "Menarik perhatian target audience menggunakan konten sosial media atau iklan yang dilengkapi persuasive copywriting.",
        image: "/images/uploads/pages/alur-2.png",
      },
      {
        title: "Landing Page",
        description: "Target pasar membuka landing page produk yang Anda jual, yang telah dilengkapi persuasive copywriting.",
        image: "/images/uploads/pages/alur-3.png",
      },
      {
        title: "Pembelian Produk",
        description: "Produk anda terjual tanpa harus melakukan banting harga, sehingga akan lebih menguntungkan.",
        image: "/images/uploads/pages/alur-4.png",
      },
    ],
  },
  keinginan: {
    title: "Ingin bertahan tanpa penjualan? Atau ingin dapat keuntungan dengan menjual banyak produk?",
    background: "/images/landingPage/bgShine.webp",
    pesanWa: "saya ingin konsultasi",
  },
  bonus: {
    title: "Bonus Eksklusif",
    description: "Dapatkan bonus ini untuk setiap pembelian persuasive copywriting.",
    image: "/images/uploads/pages/section-7.webp",
    item: [
      {
        title: "Landing Page Profesional",
        price: 315000,
        description: "Halaman penjualan khusus untuk meningkatkan konversi.",
        image: "/images/uploads/pages/bonus-1.jpg",
      },
      {
        title: "Subdomain",
        price: 100000,
        description: "Agar bisnis lebih kredibel, profesional, dan mudah diakses.",
        image: "/images/uploads/pages/bonus-2.jpg",
      },
      {
        title: "Review Logo Bisnis",
        price: 550000,
        description: "Evaluasi kelebihan dan kekurangan desain logo untuk branding yang lebih kuat.",
        image: "/images/uploads/pages/bonus-3.jpg",
      },
      {
        title: "Technical Support",
        price: 200000,
        description: "Dukungan untuk mengisi data landing page, integrasi sosial media, iklan dan lain-lain.",
        image: "/images/uploads/pages/bonus-4.jpg",
      },
    ],
  },
  claimBonus: {
    title: "Dapatkan bonus eksklusif sekarang!",
    description: "Klik tombol di bawah sebelum waktu Anda berakhir.",
    background: "/images/landingPage/bgShine.webp",
    image: "/images/uploads/pages/section-5.webp",
    pesanWa: "saya ingin konsultasi",
  },
};

export default function layoutLandingPage({ waNo }) {
  return (
    <>
      <HeroKalamana btnTxt="Solusi" data={dataKalamana.hero} />
      <FaktaKalamana secId="fakta" data={dataKalamana.fakta} />
      <FenomenaKalamana secId="fenomena" data={dataKalamana.fenomena} />
      <SolusiKalamana secId="solusi" data={dataKalamana.solusi} />
      <HadistKalamana secId="hadist" data={dataKalamana.hadist} />
      <SeriusKalamana secId="serius" data={dataKalamana.serius} />
      <ManfaatKalamana secId="manfaat" data={dataKalamana.manfaat} />
      <PentingKalamana secId="penting" data={dataKalamana.penting} />
      <LayananKalamana secId="layanan" data={dataKalamana.layanan} />
      <AlurKalamana secId="alur" data={dataKalamana.alur} />
      <KeinginanKalamana secId="keinginan" linkTarget1="#layanan" linkTarget2="#" waNumber={waNo} data={dataKalamana.keinginan} />
      <BonusKalamana secId="bonus" data={dataKalamana.bonus} />
      <ClaimBonusKalamana secId=" claim bonus" linkTarget1="#layanan" data={dataKalamana.claimBonus} />
    </>
  );
}
