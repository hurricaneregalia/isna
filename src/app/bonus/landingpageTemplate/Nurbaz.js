// src/app/template/landingpageTemplate/Nurbaz.js

import Image from "next/image";
import { Montserrat, Playfair_Display_SC } from "next/font/google";
import React from "react";
import { FiCheck, FiClock, FiDroplet, FiAward, FiGift, FiShoppingCart, FiTruck, FiMessageCircle, FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import NurbazCountdownTimer from "./NurbazCountdownTimer";
import LandingPageWaLink from "./LandingPageWaLink";
import Link from "next/link";
import HeaderLandingGlobal from "../[slug]/HeaderLandingGlobal";
import FooterLandingPageOnly from "../[slug]/FooterLandingPageOnly";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Data constant for content management
const LANDING_DATA = {
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
    title: "Signature Collection: Desain Tanpa Kompromi",
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
};

export default async function Nurbaz({ siteData, siteName }) {
  const widthSection = "max-w-6xl";
  return (
    <>
      <HeaderLandingGlobal siteName={siteName} widthNavbar={widthSection} />
      <div className={`${montserrat.className} text-gray-800 overflow-hidden`}>
        {/* ===== HERO SECTION ===== */}
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0">
            <Image
              src={LANDING_DATA.hero.imageUrl}
              alt="Professional man wearing premium watch"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          </div>

          <div className="container mx-auto max-w-6xl px-4 relative text-white">
            <div className="max-w-2xl">
              <div className="mb-6">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">PREMIUM EDITION</span>
              </div>
              <h1 className={`${playfair.className} text-5xl md:text-7xl font-bold leading-tight mb-4`}>{LANDING_DATA.hero.title}</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-lg">{LANDING_DATA.hero.subtitle}</p>
            </div>
          </div>

          {/* Scrolling indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#tampilanBiasa">
              <div className="w-8 h-14 rounded-3xl border-2 border-gray-300 flex justify-center cursor-pointer">
                <div className="w-2 h-2 bg-gray-300 rounded-full mt-2"></div>
              </div>
            </Link>
          </div>
        </section>

        {/* ===== PROBLEM SECTION ===== */}
        <section className="py-20 bg-base-100 text-base-content" id="tampilanBiasa">
          <div className={`container mx-auto px-4 ${widthSection}`}>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Gambar dan testimoni */}
              <div className="lg:w-1/2 relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl" data-aos="flip-left">
                  <Image
                    src={LANDING_DATA.problem.imageUrl}
                    alt="Business meeting setting"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition duration-500"
                    width={900}
                    height={900}
                  />
                </div>
                <div className="bg-base-200 absolute -bottom-6 -right-6 text-base-content p-6 rounded-xl shadow-lg max-w-xs border border-base-300" data-aos="fade-left">
                  <div className="flex items-center">
                    <div className=" rounded-xl w-16 h-16 overflow-hidden">
                      <Image
                        src={LANDING_DATA.testimoni.reviews[0].image}
                        alt={LANDING_DATA.testimoni.reviews[0].name}
                        width={60}
                        height={60}
                        className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-dashed border-primary p-1"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="font-bold">{LANDING_DATA.testimoni.reviews[0].name}</p>
                      <p className="text-sm opacity-75">{LANDING_DATA.testimoni.reviews[0].location}</p>
                    </div>
                  </div>
                  <p className="mt-3 italic opacity-75">{LANDING_DATA.testimoni.reviews[0].quote}</p>
                </div>
              </div>

              {/* Teks dan poin-poin masalah */}
              <div className="lg:w-1/2">
                <h2 className={`${playfair.className} text-4xl font-bold mb-8`} data-aos="fade-up">
                  {LANDING_DATA.problem.title}
                </h2>
                <div className="space-y-6">
                  {LANDING_DATA.problem.points.map((point, index) => (
                    <div key={index} className="flex items-start" data-aos="fade-up">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                          <FiCheck />
                        </div>
                      </div>
                      <p className="ml-2 text-lg opacity-75">{point}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-6 rounded-xl border-1 border-neutral" data-aos="fade-up">
                  <p className="font-medium">
                    <span className="text-warning font-bold">Faktanya:</span> 78% eksekutif menganggap jam tangan sebagai indikator keseriusan profesional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SOLUTION SECTION ===== */}
        <section className="py-20 bg-base-200 text-base-content">
          <div className={`container mx-auto px-4 ${widthSection}`}>
            <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-zoom-in">
              <h2 className={`${playfair.className} text-4xl font-bold mb-4`}>{LANDING_DATA.solution.title}</h2>
              <p className="text-lg opacity-75">Desain minimalis dengan presisi tinggi untuk pria yang menghargai detail</p>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {LANDING_DATA.solution.features.map((feature, index) => (
                <div key={index} className="bg-base-100 text-base-content p-8 rounded-xl transition-all hover:shadow-lg hover:border-yellow-400/20 border border-base-300" data-aos="fade-left">
                  <div className="mb-5 text-yellow-400">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="opacity-75">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LANDING_DATA.solution.gallery.map((img, index) => (
                <div key={index} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:-translate-y-2" data-aos="flip-left">
                  <Image
                    src={img}
                    alt={`Premium watch detail ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className={`container mx-auto px-4 ${widthSection}`}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-block opacity-75 px-4 py-1 rounded-full text-sm font-bold mb-6">{LANDING_DATA.offer.badge}</span>
              <h2 className={`${playfair.className} text-4xl font-bold mb-6 `}>{LANDING_DATA.offer.title}</h2>

              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
                <div className="relative">
                  <div className="text-8xl font-bold text-yellow-500 relative" data-aos="fade-zoom-in">
                    {LANDING_DATA.offer.discount}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-10 font-bold">OFF</div>
                  </div>
                </div>

                <div className="text-left">
                  <div className="flex items-start mb-4">
                    <FiGift className="text-yellow-500 mr-3" size={24} />
                    <h3 className="text-xl font-bold">Bonus Spesial</h3>
                  </div>
                  <ul className="space-y-2">
                    {LANDING_DATA.offer.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheck className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                        <span className=" opacity-75">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <LandingPageWaLink
                whatsappNumber={siteData.phone}
                whatsappText={LANDING_DATA.cta.whatsappText}
                linkText={LANDING_DATA.offer.cta}
                id="mainButton"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 shadow-yellow-lg"
                dataAos="fade-up"
              />
            </div>
          </div>
        </section>
        <section id="testimoni" className="py-20 bg-base-200">
          <div className={`container mx-auto px-4 ${widthSection}`}>
            <h2 className={`${playfair.className} text-4xl font-bold mb-6 text-center text-base-content`}>Testimoni</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {LANDING_DATA.testimoni.reviews.map((item, index) => (
                <div key={index} className="bg-base-100 px-5 py-10 flex flex-col items-center text-base-content rounded-xl shadow-md h-full border border-base-300" data-aos="fade-up">
                  <Image src={item.image} width={50} height={50} alt={item.name} className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-dashed border-primary p-1" />
                  <p className="text-sm font-semibold text-center">{item.name}</p>
                  <p className="text-xs text-center italic mt-1 opacity-75">{item.quote}</p>
                  <div className="flex text-warning gap-1 my-5">
                    {[...Array(item.rating)].map((_, starIndex) => (
                      <FaStar key={starIndex} className="w-4 h-4" />
                    ))}
                  </div>
                  {item.badge && <span className="mt-2 text-xs border border-neutral text-neutral px-2 py-1 rounded-full">{item.badge}</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS SECTION ===== */}
        <section className="py-20 bg-base-200 text-base-content transition-colors duration-300">
          <div className={`container mx-auto px-4 ${widthSection}`}>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className={`${playfair.className} text-4xl font-bold mb-6`}>{LANDING_DATA.process.title}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {LANDING_DATA.process.steps.map((step, index) => (
                <div key={index} className="relative" data-aos="fade-up">
                  {/* Icon bubble absolute: tetap diposisikan terhadap elemen ini */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-white z-10">
                    {step.icon}
                  </div>

                  {/* Kontainer utama: jangan pakai `relative` di sini */}
                  <div className="bg-base-100 text-base-content p-8 pt-16 rounded-xl shadow-md h-full flex flex-col border border-base-300">
                    <div className="text-3xl font-bold text-base-content opacity-10 mb-2 absolute top-8 right-8 select-none">0{index + 1}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-base-content/70 flex-grow">{step.description}</p>

                    {index < LANDING_DATA.process.steps.length - 1 && (
                      <div className="hidden md:block absolute top-24 -right-8">
                        <svg className="w-16 h-auto text-base-content/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BIG CTA SECTION ===== */}
        <section className="relative py-32 bg-[url(/images/templateLandingPageBonus/Nurbaz/images/alvaro-bernal-RgIKRYhmG2k-unsplash.jpg)] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
          </div>
          <div className="container mx-auto px-4 relative text-white">
            <div className="max-w-3xl mx-auto text-center">
              <div data-aos="fade-zoom-in">
                <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>{LANDING_DATA.cta.title}</h2>
                <p className="text-xl mb-10 opacity-75">{LANDING_DATA.cta.subtitle}</p>
              </div>

              <div className="mb-12" data-aos="fade-up">
                <NurbazCountdownTimer targetTime={LANDING_DATA.offer.countdownTarget} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center relative" data-aos="fade-up">
                <div className="relative bg-yellow-500 rounded-full w-fit mx-auto text-yellow-500 animate-ping font-bold py-4 px-5 transition-all transform hover:scale-105 shadow-yellow-lg">
                  {LANDING_DATA.cta.mainButton}
                </div>
                <LandingPageWaLink
                  whatsappNumber={siteData.phone}
                  whatsappText={LANDING_DATA.cta.whatsappText}
                  linkText={LANDING_DATA.cta.mainButton}
                  id="mainButton2"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ring-0 bg-yellow-500 hover:bg-yellow-600 w-fit text-black font-bold py-4 px-5 rounded-full text-lg transition-all transform hover:scale-105 shadow-yellow-lg"
                />
              </div>

              <div className="inline-block mt-20" data-aos="fade-up">
                <div className="flex items-center">
                  <div className="ml-4 text-center">
                    <p className="font-bold">Garansi Kepuasan 100%</p>
                    <p className="text-sm text-gray-300">Uang kembali jika produk rusak dalam 30 hari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-base-100 text-base-content transition-colors duration-300">
          <div className={`container mx-auto px-4 ${widthSection}`}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className={`${playfair.className} text-4xl font-bold mb-6`}>{LANDING_DATA.faq.title}</h2>
              <p className="text-base-content/70 max-w-2xl mx-auto">Temukan jawaban untuk pertanyaan seputar produk, pembelian, dan garansi.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="join join-vertical">
                {LANDING_DATA.faq.items.map((item, index) => (
                  <div className="collapse collapse-arrow join-item border bg-base-100 border-base-300" key={index} data-aos="fade-up">
                    <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
                    <div className="collapse-title font-semibold">{item.question}</div>
                    <div className="collapse-content text-sm opacity-75">{item.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterLandingPageOnly siteName={siteName} />
    </>
  );
}
