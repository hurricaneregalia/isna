// src/app/landingpage/jam-tangan/page.js
"use client";
import Image from "next/image";
import { Montserrat, Playfair_Display_SC } from "next/font/google";
import React, { useState, useEffect } from "react";
import {
  FiCheck,
  FiClock,
  FiDroplet,
  FiAward,
  FiGift,
  FiShoppingCart,
  FiTruck,
  FiMessageCircle,
  FiChevronDown,
  FiChevronUp,
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

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
  hero: {
    title: "Elevate Your Professional Presence",
    subtitle: "Jam tangan yang menjadi statement kesuksesan pria modern",
    cta: "Dapatkan Penawaran Eksklusif",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    overlayText: "Hanya 12 unit tersisa",
  },
  problem: {
    title: "Tampilan Biasa Tak Lagi Cukup di Dunia Kompetitif",
    points: [
      "Aksesori menentukan first impression meeting penting",
      "Jam tangan murah mengurangi kesan profesional",
      "Investasi penampilan = investasi karier",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1304&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  solution: {
    title: "Signature Collection: Desain Tanpa Kompromi",
    features: [
      {
        title: "Material Premium",
        description: "Titanium aerospace grade dengan finishing matte",
        icon: <FiAward className="text-gold-500" size={24} />,
      },
      {
        title: "Tahan Air",
        description: "Waterproof 100m - siap segala cuaca",
        icon: <FiDroplet className="text-blue-500" size={24} />,
      },
      {
        title: "Presisi Waktu",
        description: "Movement Swiss dengan akurasi milidetik",
        icon: <FiClock className="text-gray-800" size={24} />,
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=800&q=80",
    ],
  },
  offer: {
    title: "Penawaran Perdana Eksklusif",
    discount: "25%",
    badge: "HANYA UNTUK 50 PEMBELI PERTAMA",
    features: ["Jam tangan premium Signature Collection", "Leather watch case senilai Rp 1.2 juta", "Gratis konsultasi gaya personal"],
    countdownTarget: new Date().getTime() + 48 * 60 * 60 * 1000, // 48 hours from now
    cta: "Dapatkan Sekarang",
  },
  process: {
    title: "Mudah Memiliki Jam Tangan Premium",
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
    mainButton: "Ambil Promo Sekarang",
    secondaryButton: "Konsultasi Gratis via WhatsApp",
    imageUrl: "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?auto=format&fit=crop&w=1200&q=80",
  },
  faq: {
    title: "Pertanyaan yang Sering Diajukan",
    items: [
      {
        question: "Bagaimana metode pembayaran yang tersedia?",
        answer:
          "Kami menerima berbagai metode pembayaran termasuk transfer bank (BCA, Mandiri, BRI), kartu kredit (Visa, Mastercard), dan e-wallet (OVO, Gopay, Dana).",
      },
      {
        question: "Apa kebijakan pengembalian produk?",
        answer:
          "Anda dapat mengembalikan produk dalam 30 hari jika terdapat cacat produksi. Produk harus dalam kondisi baru dengan segel dan kemasan asli. Kami akan mengganti produk baru atau mengembalikan uang sepenuhnya.",
      },
      {
        question: "Berapa lama baterai bertahan?",
        answer:
          "Jam tangan kami menggunakan baterai premium dengan masa pakai hingga 5 tahun. Kami menyediakan layanan penggantian baterai gratis selama 2 tahun pertama.",
      },
      {
        question: "Apakah produk ini memiliki garansi?",
        answer:
          "Ya, semua produk dilengkapi dengan garansi resmi 3 tahun untuk mekanisme dan 1 tahun untuk komponen elektronik. Garansi mencakup perbaikan dan penggantian komponen.",
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
};

const CountdownTimer = ({ targetTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);
  return (
    <div className="flex justify-center gap-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="w-20 h-20 bg-gray-800 text-white rounded-lg flex items-center justify-center text-2xl font-bold">
            {value.toString().padStart(2, "0")}
          </div>
          <span className="mt-2 text-sm uppercase text-gray-600">{unit}</span>
        </div>
      ))}
    </div>
  );
};
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button className="flex justify-between items-center w-full text-left group" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-gold-600 transition-colors">{question}</h3>
        <span className="ml-4 text-gold-500">{isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}</span>
      </button>

      {isOpen && (
        <div className="mt-4 pr-8">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function JamTanganLanding() {
  return (
    <div className={`${montserrat.className} text-gray-800`}>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={LANDING_DATA.hero.imageUrl}
            alt="Professional man wearing premium watch"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="bg-gold-500 text-black px-4 py-1 rounded-full text-sm font-medium">PREMIUM EDITION</span>
            </div>
            <h1 className={`${playfair.className} text-5xl md:text-7xl font-bold leading-tight mb-4`}>{LANDING_DATA.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-lg">{LANDING_DATA.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                {LANDING_DATA.hero.cta}
              </button>
              <div className="flex items-center bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-600">
                <FiClock className="mr-2 text-gold-500" />
                <span>{LANDING_DATA.hero.overlayText}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 rounded-3xl border-2 border-gray-300 flex justify-center">
            <div className="w-2 h-2 bg-gray-300 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image src={LANDING_DATA.problem.imageUrl} alt="Business meeting setting" layout="fill" objectFit="cover" quality={90} />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <p className="font-bold">Andi Wibowo</p>
                    <p className="text-sm text-gray-500">Direktur Fintech</p>
                  </div>
                </div>
                <p className="mt-3 italic">"Penampilan detail menentukan kredibilitas di meeting eksekutif"</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className={`${playfair.className} text-4xl font-bold mb-8`}>{LANDING_DATA.problem.title}</h2>

              <div className="space-y-6">
                {LANDING_DATA.problem.points.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center">
                        <FiCheck className="text-gold-600" />
                      </div>
                    </div>
                    <p className="ml-4 text-lg">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-white rounded-xl shadow-sm border-l-4 border-gold-500">
                <p className="font-medium">
                  <span className="text-gold-600 font-bold">Faktanya:</span> 78% eksekutif menganggap jam tangan sebagai indikator keseriusan
                  profesional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOLUTION SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className={`${playfair.className} text-4xl font-bold mb-4`}>{LANDING_DATA.solution.title}</h2>
            <p className="text-gray-600 text-lg">Desain minimalis dengan presisi tinggi untuk pria yang menghargai detail</p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {LANDING_DATA.solution.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl transition-all hover:shadow-lg hover:border-gold-500/20 border border-transparent"
              >
                <div className="mb-5 text-gold-500">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LANDING_DATA.solution.gallery.map((img, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg transform transition hover:-translate-y-2">
                <Image
                  src={img}
                  alt={`Premium watch detail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  quality={90}
                  className="hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block bg-gold-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-6">{LANDING_DATA.offer.badge}</span>
            <h2 className={`${playfair.className} text-4xl font-bold mb-6`}>{LANDING_DATA.offer.title}</h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <div className="relative">
                <div className="text-8xl font-bold text-gold-500 relative z-10">{LANDING_DATA.offer.discount}</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-10 font-bold">OFF</div>
                </div>
              </div>

              <div className="text-left">
                <div className="flex items-center mb-4">
                  <FiGift className="text-gold-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold">Bonus Spesial Pembeli Pertama</h3>
                </div>
                <ul className="space-y-2">
                  {LANDING_DATA.offer.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FiCheck className="text-gold-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl mb-4">Promo Berakhir Dalam:</h3>
              <CountdownTimer targetTime={LANDING_DATA.offer.countdownTarget} />
            </div>

            <button className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 shadow-gold-lg">
              {LANDING_DATA.offer.cta}
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-3" />
                <p className="text-sm text-center">Customer {item}</p>
                <div className="flex text-gold-500 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={`${playfair.className} text-4xl font-bold mb-6`}>{LANDING_DATA.process.title}</h2>
            <div className="h-1 w-24 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {LANDING_DATA.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-14 h-14 bg-gold-500 rounded-full flex items-center justify-center text-white">
                  {step.icon}
                </div>
                <div className="bg-white p-8 pt-16 rounded-xl shadow-md h-full flex flex-col">
                  <div className="text-3xl font-bold text-gray-200 mb-2 absolute top-8 right-8">0{index + 1}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 flex-grow">{step.description}</p>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-24 -right-8">
                      <svg className="w-16 h-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <Image src={LANDING_DATA.cta.imageUrl} alt="Professional man wearing watch" layout="fill" objectFit="cover" quality={100} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>{LANDING_DATA.cta.title}</h2>
            <p className="text-xl mb-10">{LANDING_DATA.cta.subtitle}</p>

            <div className="mb-12">
              <CountdownTimer targetTime={LANDING_DATA.offer.countdownTarget} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 shadow-gold-lg">
                {LANDING_DATA.cta.mainButton}
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-12 rounded-full text-lg transition-all">
                {LANDING_DATA.cta.secondaryButton}
              </button>
            </div>

            <div className="mt-10 p-6 bg-black/30 backdrop-blur-sm rounded-xl inline-block">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-dashed" />
                </div>
                <div className="ml-4 text-left">
                  <p className="font-bold">Garansi Kepuasan 100%</p>
                  <p className="text-sm text-gray-300">Uang kembali jika tidak puas dalam 30 hari</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className={`${playfair.className} text-4xl font-bold mb-6`}>{LANDING_DATA.faq.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Temukan jawaban untuk pertanyaan umum seputar produk, pembelian, dan garansi kami</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {LANDING_DATA.faq.items.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}

            <div className="mt-12 text-center">
              <p className="mb-6">Masih ada pertanyaan?</p>
              <button className="inline-flex items-center text-gold-600 font-bold group">
                <FiMessageCircle className="mr-2 transition-transform group-hover:scale-110" />
                <span className="border-b border-gold-600 pb-1">Hubungi Tim Dukungan Pelanggan</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER SECTION ===== */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {/* Brand Info */}
            <div>
              <h3 className={`${playfair.className} text-2xl font-bold mb-4`}>{LANDING_DATA.footer.logo}</h3>
              <p className="text-gray-400 mb-6 max-w-xs">{LANDING_DATA.footer.description}</p>
              <div className="flex space-x-4">
                {LANDING_DATA.footer.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-5">Hubungi Kami</h4>
              <ul className="space-y-4">
                {LANDING_DATA.footer.contact.map((contact, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold-500 mt-1 mr-3">{contact.icon}</span>
                    <span className="text-gray-400">{contact.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            {LANDING_DATA.footer.links.map((linkGroup, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold mb-5">{linkGroup.title}</h4>
                <ul className="space-y-3">
                  {linkGroup.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-10 border-t border-gray-800">
            <p className="text-center text-gray-500 text-sm">{LANDING_DATA.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
