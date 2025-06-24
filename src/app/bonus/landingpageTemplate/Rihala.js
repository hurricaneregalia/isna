// src/app/component/landingpage/TheWatchMen.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaClock, FaCrown, FaShieldAlt, FaHeart, FaChevronDown, FaChevronUp, FaQuoteLeft, FaStar } from "react-icons/fa";

// Data terstruktur untuk kemudahan maintain
const data = {
  attention: {
    backgroundImage: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    headline: "Ketepatan Waktu Adalah Bentuk Keanggunan",
    ctaText: "Jelajahi Koleksi",
  },
  interest: {
    title: "Mengapa Jam Tangan Lebih Dari Sekadar Aksesori?",
    points: [
      {
        icon: <FaClock className="text-amber-600" size={24} />,
        title: "Ekspresi Gaya Pribadi",
        description: "Setiap jam tangan mencerminkan kepribadian dan selera pemakainya",
      },
      {
        icon: <FaCrown className="text-amber-600" size={24} />,
        title: "Simbol Prestasi",
        description: "Penanda pencapaian penting dalam hidup",
      },
      {
        icon: <FaShieldAlt className="text-amber-600" size={24} />,
        title: "Investasi Bernilai",
        description: "Nilai yang terjaga bahkan meningkat seiring waktu",
      },
      {
        icon: <FaHeart className="text-amber-600" size={24} />,
        title: "Warisan Abadi",
        description: "Dapat diwariskan lintas generasi sebagai kenangan berharga",
      },
    ],
  },
  about: {
    title: "Kisah Di Balik Setiap Detik",
    story:
      "Sejak 1920, kami menciptakan jam tangan yang bukan hanya menunjukkan waktu, tapi juga bercerita tentang perjalanan hidup. Setiap komponen dipilih dengan teliti, dirakit dengan penuh dedikasi oleh para master horologi berpengalaman.",
    usp: [
      "Mekanisme Swiss dengan akurasi ±2 detik/hari",
      "Material titanium aerospace grade",
      "Kaca safir anti gores 5x lebih kuat",
      "Garansi internasional 5 tahun",
    ],
    image: "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg",
  },
  products: [
    {
      name: "Heritage Classic",
      type: "Automatic",
      price: "Rp 8.999.000",
      image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    },
    {
      name: "Chronograph Pro",
      type: "Sport",
      price: "Rp 12.500.000",
      image: "https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg",
    },
    {
      name: "Elegance Series",
      type: "Minimalist",
      price: "Rp 6.750.000",
      image: "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg",
    },
    {
      name: "Diver's Master",
      type: "Professional",
      price: "Rp 15.250.000",
      image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg",
    },
  ],
  testimonials: [
    {
      name: "Budi Santoso",
      city: "Jakarta",
      quote: "Presisinya luar biasa, desainnya timeless. Sudah 2 tahun dipakai sehari-hari masih seperti baru.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      featured: true,
    },
    {
      name: "Ani Wijaya",
      city: "Bandung",
      quote: "Pelayanannya eksklusif! Pengiriman cepat dengan kemasan premium. Worth every penny.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      name: "Rudi Hermawan",
      city: "Surabaya",
      quote: "Investasi terbaik untuk gaya dan fungsi. Akurasi waktu sempurna untuk profesional seperti saya.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
    },
  ],
  orderSteps: [
    { step: "Konsultasi", description: "Diskusi kebutuhan dengan ahli jam" },
    { step: "Booking", description: "Pemesanan model yang diinginkan" },
    { step: "DP 30%", description: "Pembayaran awal untuk proses produksi" },
    { step: "Pengiriman", description: "Jam tangan dikirim setelah QC ketat" },
  ],
  faq: [
    {
      question: "Berapa lama garansi yang diberikan?",
      answer: "Kami memberikan garansi internasional 5 tahun untuk mekanisme dan 2 tahun untuk baterai.",
    },
    { question: "Apakah bisa custom engrave?", answer: "Tentu, kami menyediakan jasa engrave gratis dengan pembelian di atas Rp 10 juta." },
    {
      question: "Bagaimana perawatan harian jam tangan?",
      answer: "Gunakan kain lembut kering untuk membersihkan. Hindari kontak dengan bahan kimia dan medan magnet kuat.",
    },
    {
      question: "Apakah tahan air untuk berenang?",
      answer: "Semua koleksi kami memiliki ketahanan air minimal 100m, cocok untuk renang dan snorkeling.",
    },
    {
      question: "Berapa lama pengiriman setelah pemesanan?",
      answer: "Stok ready: 1-3 hari. Pre-order: maksimal 21 hari kerja dengan update progress reguler.",
    },
  ],
  closing: {
    title: "Waktunya Menemukan Bagian Dari Sejarah Anda",
    description: "Setiap jam tangan kami adalah karya seni yang bercerita. Dengan garansi kepuasan 30 hari, Anda dapat yakin dengan pilihan Anda.",
    ctaText: "Pesan Sekarang",
    guarantee: "Garansi 30 Hari Kepuasan",
  },
};

const TheWatchMen = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ATTENTION: Hero Section */}
      <section className="relative h-screen flex items-end justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image src={data.attention.backgroundImage} alt="Luxury Watch" fill className="object-cover" priority />
        <div className="relative z-20 text-center pb-24 px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">{data.attention.headline}</h1>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
            {data.attention.ctaText}
          </button>
        </div>
      </section>

      {/* INTEREST: Edukasi Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">{data.interest.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.interest.points.map((point, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIRE: About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-amber-800">{data.about.title}</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{data.about.story}</p>
            <ul className="space-y-3">
              {data.about.usp.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">•</span>
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image src={data.about.image} alt="Watch Craftsmanship" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* DESIRE: Product Gallery */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">Koleksi Signature</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Setiap model diciptakan dengan dedikasi untuk menghadirkan keanggunan abadi
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-64">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{product.name}</h3>
                      <p className="text-gray-600 text-sm">{product.type}</p>
                    </div>
                    <span className="font-bold text-amber-700">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIRE: Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">Apa Kata Pelanggan Kami</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 shadow-md ${testimonial.featured ? "border-2 border-amber-500 relative" : ""}`}>
                {testimonial.featured && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white px-4 py-1 rounded-full flex items-center">
                    <FaStar className="mr-1" /> <span>Favorit</span>
                  </div>
                )}
                <FaQuoteLeft className="text-amber-600 text-2xl mb-4 opacity-30" />
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTION: Order Steps */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-amber-100 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">Proses Pemesanan Mudah</h2>
          <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto">Hanya 4 langkah sederhana untuk memiliki jam tangan impian Anda</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {data.orderSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-amber-600 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.step}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </section>

      {/* ACTION: FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">Pertanyaan Umum</h2>

          <div className="space-y-4">
            {data.faq.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button className="flex justify-between items-center w-full py-4 text-left font-medium text-lg" onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  {openFaqIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaqIndex === index && <div className="pb-4 text-gray-600 animate-fadeIn">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTION: Closing CTA */}
      <section className="relative py-28 px-4 text-center">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <Image src="https://images.pexels.com/photos/1693653/pexels-photo-1693653.jpeg" alt="Closing Background" fill className="object-cover" />
        <div className="relative z-20 max-w-3xl mx-auto">
          <div className="inline-block bg-amber-500 text-white px-4 py-1 rounded-full mb-6">{data.closing.guarantee}</div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">{data.closing.title}</h2>
          <p className="text-xl text-amber-100 mb-10">{data.closing.description}</p>
          <button className="bg-white text-amber-700 hover:bg-amber-50 font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105">
            {data.closing.ctaText}
          </button>
        </div>
      </section>
    </div>
  );
};

export default TheWatchMen;
