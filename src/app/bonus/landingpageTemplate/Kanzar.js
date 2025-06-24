"use client";

import React, { useState, useEffect } from "react";
import { BiCycling } from "react-icons/bi";
import { FaBiking, FaSmile, FaStar, FaArrowRight, FaCheck, FaShoppingCart } from "react-icons/fa";
import { GiHelmet } from "react-icons/gi";
import { MdOutlineLocalOffer, MdOutlineSecurity } from "react-icons/md";
import { TbDiscount, TbTruckDelivery } from "react-icons/tb";

// Konten utama
const content = {
  hero: {
    headline: "Kepala Pusing Pakai Helm Biasa?",
    subheadline: "Ketemu Solusinya! Helm Kanzar - Nyaman Seharian Kayak Lagi Nggak Pake Helm!",
    cta: "Dapatkan Diskon Eksklusif",
    offer: "Diskon 45% + Free Kaca Anti Kabut",
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  problem: {
    title: "Masalah Yang Sering Kamu Hadapi:",
    points: [
      "Kepala serasa dikepruk setelah pakai helm >30 menit",
      "Berkeringat & gatal-gatal tidak karuan",
      "Desain ketinggalan jaman, bikin minder di depan temen sepeda",
      "Susah cari ukuran pas, kebesaran atau kekecilan",
    ],
  },
  solution: {
    title: "Solusi Helm Kanzar:",
    features: [
      {
        icon: <FaSmile />,
        title: "Busa Mutakhir",
        desc: "Dengan teknologi CoolMax® membuat kepala tetap sejuk meski bersepeda 3 jam",
      },
      {
        icon: <GiHelmet />,
        title: "Desain Aerodinamis",
        desc: "Ringan cuma 290g tapi lulus uji keamanan internasional",
      },
      {
        icon: <MdOutlineSecurity />,
        title: "Sistem Penguncian",
        desc: "Dial-Fit System bisa disesuaikan milimeter demi milimeter",
      },
    ],
  },
  testimonials: [
    {
      name: "Budi - Penggemar MTB",
      text: "Awalnya nggak percaya sama iklan, tapi setelah coba beneran beda! Helm lain udah nggak kepake lagi.",
      rating: 5,
    },
    {
      name: "Agus - Komuter Harian",
      text: "Dari Bogor ke Jakarta nggak pernah sakit kepala lagi. Worth every penny!",
      rating: 5,
    },
    {
      name: "Rudi - Bike to Work",
      text: "Yang paling keren itu pas hujan, kaca anti kabutnya beneran bekerja! Nggak perlu berhenti terus.",
      rating: 4,
    },
  ],
  offer: {
    title: "Penawaran Spesial Hari Ini:",
    benefits: ["DISKON 45% untuk 100 pembeli pertama", "GRATIS Kaca Anti Kabut senilai Rp 150.000", "GRATIS Tas Helm eksklusif", "Garansi 2 tahun"],
    cta: "Dapatkan Sekarang!",
    footnote: "Harga normal Rp 850.000, hari ini cukup Rp 467.500",
  },
  stats: {
    customers: "12.345+",
    rating: "4.9/5.0",
    sold: "15.000+",
  },
};

const Kanzar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 font-sans">
      {/* Navbar */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <BiCycling className="text-3xl text-orange-500 mr-2" />
            <span className="text-xl font-bold text-orange-600">Kanzar</span>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all flex items-center">
            <FaShoppingCart className="mr-2" />
            <span>Beli Sekarang</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">{content.hero.headline}</h1>
            <p className="text-xl text-gray-600 mb-8">{content.hero.subheadline}</p>

            <div className="bg-yellow-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-8 rounded-lg">
              <div className="flex items-center">
                <TbDiscount className="text-2xl mr-2" />
                <span className="font-bold">{content.hero.offer}</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all flex items-center group">
              <span>{content.hero.cta}</span>
              <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-200 rounded-full transform rotate-6 animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img src={content.hero.image} alt="Helm Kanzar" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{content.problem.title}</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {content.problem.points.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-400">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <span className="text-red-500 font-bold">!</span>
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">{content.solution.title}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Helm Kanzar dirancang khusus oleh ahli ergonomi dengan teknologi terbaru untuk kenyamanan maksimal
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {content.solution.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-4xl text-orange-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Kata Mereka Yang Sudah Pakai</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-3 text-center">
              <div>
                <p className="text-4xl font-bold text-orange-500">{content.stats.customers}</p>
                <p className="text-gray-600">Pengguna Aktif</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-500">{content.stats.rating}</p>
                <p className="text-gray-600">Rating</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-500">{content.stats.sold}</p>
                <p className="text-gray-600">Terjual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">{content.offer.title}</h2>

                <ul className="space-y-4 mb-8">
                  {content.offer.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-white bg-green-500 rounded-full p-1 mt-1 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xl font-bold mb-8">{content.offer.footnote}</p>

                <button className="bg-white text-orange-500 font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all flex items-center group">
                  <span>{content.offer.cta}</span>
                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              <div className="md:w-1/3 bg-orange-400 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="bg-white text-orange-500 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold">45%</span>
                  </div>
                  <div className="text-white">
                    <p className="text-xl font-bold">Hanya Hari Ini!</p>
                    <p className="mt-2">Penawaran terbatas untuk 100 pembeli pertama</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Pertanyaan Yang Sering Ditanyakan</h2>

          <div className="space-y-6">
            {[
              {
                q: "Apakah helm ini cocok untuk kepala besar?",
                a: "Sangat cocok! Dengan Dial-Fit System, helm bisa disesuaikan dengan berbagai ukuran kepala.",
              },
              {
                q: "Berapa lama pengiriman biasanya?",
                a: "Pengiriman reguler 2-4 hari kerja. Untuk Jabodetabek bisa 1-2 hari kerja saja.",
              },
              {
                q: "Apakah ada garansi?",
                a: "Kami memberikan garansi 2 tahun untuk material dan kerusakan akibat manufaktur.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-gray-800 text-lg mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Masih Ragu? Coba Dulu Baru Bayar!</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Kami berani kasih garansi 30 hari uang kembali jika helm tidak sesuai ekspektasi</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-orange-500 font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all">
              Pesan Sekarang
            </button>
            <button className="bg-transparent border-2 border-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all">
              Chat Kami
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {[
              { icon: <TbTruckDelivery size={24} />, text: "Gratis Ongkir" },
              { icon: <MdOutlineLocalOffer size={24} />, text: "Garansi 2 Tahun" },
              { icon: <FaCheck size={20} />, text: "30 Hari Pengembalian" },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="mr-2">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <BiCycling className="text-3xl text-orange-500 mr-2" />
            <span className="text-xl font-bold">Kanzar</span>
          </div>
          <p className="text-gray-400 mb-6">© {new Date().getFullYear()} Helm Kanzar. All rights reserved.</p>
          <div className="text-gray-500 text-sm">
            <p>Designed with ❤️ for cyclists</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Kanzar;
