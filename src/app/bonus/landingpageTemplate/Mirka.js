"use client";
import React, { useState, useEffect } from "react";
import { FaMountain, FaBicycle, FaShieldAlt, FaTruck, FaClock, FaStar, FaChevronRight } from "react-icons/fa";
import { GiMountainRoad, GiSteeringWheel } from "react-icons/gi";
import { IoIosSpeedometer } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";

// Image URLs (placeholder images - replace with actual ones)
const IMAGES = {
  HERO: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  BIKE_MAIN: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  BIKE_DETAIL: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  TESTIMONIAL1: "https://randomuser.me/api/portraits/men/32.jpg",
  TESTIMONIAL2: "https://randomuser.me/api/portraits/men/44.jpg",
  TESTIMONIAL3: "https://randomuser.me/api/portraits/men/22.jpg",
  BADGE_TRUST: "https://via.placeholder.com/150",
};

// Copywriting content
const COPY = {
  HEADLINE: "Lelah Bingung Memilih Sepeda Gunung yang Tepat?",
  SUBHEADLINE: "MontBike Pro Series - Solusi Cerdas untuk Petualangan Tanpa Kompromi",
  INTRO:
    "Setiap akhir pekan, Anda merindukan sensasi menaklukkan medan terjal. Tapi sepeda lama sudah tak nyaman, dan pilihan di pasaran terlalu membingungkan. Kami mengerti.",

  PAIN_POINTS: [
    "Suspensi kaku yang membuat punggung pegal setelah 30 menit",
    "Rangka berat yang menyulitkan tanjakan",
    "Gear sering slip di medan berat",
    "Harga mahal tapi kualitas biasa saja",
  ],

  SOLUTION:
    "MontBike Pro Series dirancang khusus untuk pekerja kantoran yang ingin petualangan weekend tanpa rasa sakit. Dengan rangka alloy ultralight dan suspensi ganda, setiap perjalanan terasa seperti mengambang.",

  FEATURES: [
    {
      icon: <GiMountainRoad className="text-3xl" />,
      title: "Suspensi Ganda",
      desc: "Meredam guncangan hingga 80% lebih baik dari kompetitor",
    },
    {
      icon: <FaBicycle className="text-3xl" />,
      title: "Rangka Alloy Ultralight",
      desc: "Hanya 12,5kg - paling ringan di kelasnya",
    },
    {
      icon: <IoIosSpeedometer className="text-3xl" />,
      title: "24-Speed Shimano",
      desc: "Perpindahan gear super halus untuk segala medan",
    },
    {
      icon: <GiSteeringWheel className="text-3xl" />,
      title: "Grip Premium",
      desc: "Pegangan ergonomis anti-slip bahkan saat hujan",
    },
  ],

  BENEFITS: ["Tubuh lebih segar setelah touring seharian", "Mudah dibawa naik turun mobil", "Garansi 5 tahun untuk rangka", "Gratis servis pertama"],

  OFFER: {
    title: "Penawaran Spesial Akhir Pekan Ini",
    discount: "30%",
    oldPrice: "Rp 8.500.000",
    newPrice: "Rp 5.950.000",
    bonus: ["Paket servis gratis 1 tahun", "Botol minum premium", "Kunci anti maling"],
    deadline: "Penawaran berakhir dalam:",
  },

  TESTIMONIALS: [
    {
      name: "Andi Pratama",
      role: "Banker, Penggiat Bike to Work",
      avatar: IMAGES.TESTIMONIAL1,
      text: "Sejak pakai MontBike, commute 15km ke kantar tidak lagi melelahkan. Weekend trail pun jadi lebih menyenangkan!",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      role: "Goweser Weekend",
      avatar: IMAGES.TESTIMONIAL2,
      text: "Saya bandingkan dengan merek lain 2x lipat harganya, MontBike tetap lebih nyaman di medan berbatu.",
      rating: 4,
    },
    {
      name: "Rizal Fauzi",
      role: "Pegiat Lingkungan",
      avatar: IMAGES.TESTIMONIAL3,
      text: "Sepeda pertama saya yang tidak bikin bokong sakit setelah 3 jam bersepeda. Worth every penny!",
      rating: 5,
    },
  ],

  TRUST_BADGES: [
    { icon: <FaShieldAlt />, text: "Garansi 5 Tahun" },
    { icon: <FaTruck />, text: "Gratis Ongkir Jabodetabek" },
    { icon: <RiCustomerService2Fill />, text: "CS 24 Jam" },
  ],

  CTA: {
    main: "Dapatkan Diskon 30% Sekarang",
    secondary: "Saya Mau Konsultasi Dulu",
  },
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const seconds = prev.seconds - 1;
        const minutes = seconds < 0 ? prev.minutes - 1 : prev.minutes;
        const hours = minutes < 0 ? prev.hours - 1 : prev.hours;

        return {
          hours: hours < 0 ? 23 : hours,
          minutes: minutes < 0 ? 59 : minutes,
          seconds: seconds < 0 ? 59 : seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center">
      <div className="flex flex-col items-center">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": timeLeft.hours }}></span>
        </span>
        jam
      </div>
      <div className="flex flex-col items-center">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": timeLeft.minutes }}></span>
        </span>
        menit
      </div>
      <div className="flex flex-col items-center">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": timeLeft.seconds }}></span>
        </span>
        detik
      </div>
    </div>
  );
};

const RatingStars = ({ rating }) => {
  return (
    <div className="flex gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < rating ? "fill-current" : "text-gray-300"} />
      ))}
    </div>
  );
};

const MontBikeLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-base-100">
      {/* Floating CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-base-100 shadow-lg transition-all duration-300 ${
          isScrolled ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg">MontBike Pro Series</h3>
            <p className="text-sm">
              <span className="line-through opacity-70">{COPY.OFFER.oldPrice}</span>{" "}
              <span className="text-primary font-bold">{COPY.OFFER.newPrice}</span>
            </p>
          </div>
          <a href="#order" className="btn btn-primary animate-pulse">
            {COPY.CTA.main} <FaChevronRight />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero min-h-screen relative">
        <div className="hero-overlay opacity-60"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl md:text-6xl font-bold animate-fadeIn">{COPY.HEADLINE}</h1>
            <p className="mb-8 text-xl md:text-2xl">{COPY.SUBHEADLINE}</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#order" className="btn btn-primary btn-lg animate-bounce">
                {COPY.CTA.main}
              </a>
              <a href="#features" className="btn btn-outline btn-lg btn-accent">
                Lihat Fitur
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-base-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src={IMAGES.BIKE_MAIN}
                alt="MontBike Pro Series"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Weekend Anda Berharga, Jangan Sia-Siakan dengan Sepeda yang Salah</h2>
              <p className="text-lg mb-8">{COPY.INTRO}</p>
              <ul className="space-y-4 mb-8">
                {COPY.PAIN_POINTS.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-error mr-2">✖</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a href="#solution" className="btn btn-primary">
                Solusi Saya <FaChevronRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 px-4 bg-base-200">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="badge badge-primary badge-lg mb-4">SOLUSI</div>
            <h2 className="text-4xl font-bold mb-4">MontBike Pro Series</h2>
            <p className="text-xl max-w-3xl mx-auto">{COPY.SOLUTION}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-8">
              <h3 className="text-2xl font-bold">Apa yang Membuat MontBike Berbeda?</h3>
              <ul className="space-y-6">
                {COPY.BENEFITS.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-success text-2xl">✓</span>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-bold text-lg mb-2">Bonus Spesial Hari Ini:</h4>
                <ul className="list-disc pl-5">
                  {COPY.OFFER.bonus.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={IMAGES.BIKE_DETAIL}
                alt="MontBike Detail"
                className="rounded-lg shadow-2xl hover:rotate-1 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-base-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="badge badge-primary badge-lg mb-4">FITUR UNGGULAN</div>
            <h2 className="text-4xl font-bold mb-4">Teknologi Canggih untuk Performa Maksimal</h2>
            <p className="text-xl max-w-3xl mx-auto">Setiap komponen dirancang untuk memberikan pengalaman bersepeda terbaik</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COPY.FEATURES.map((feature, index) => (
              <div key={index} className="card bg-base-200 hover:bg-base-300 transition-colors duration-300 h-full">
                <div className="card-body items-center text-center">
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="card-title mb-2">{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="badge badge-primary badge-lg mb-4">TESTIMONI</div>
            <h2 className="text-4xl font-bold mb-4">Apa Kata Mereka?</h2>
            <p className="text-xl max-w-3xl mx-auto">Pengalaman nyata dari pelanggan MontBike</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {COPY.TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm opacity-70">{testimonial.role}</p>
                    </div>
                  </div>
                  <RatingStars rating={testimonial.rating} />
                  <p className="mt-4 italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="order" className="py-16 px-4 bg-primary text-primary-content">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="badge badge-accent badge-lg mb-4">PENAWARAN TERBATAS</div>
            <h2 className="text-4xl font-bold mb-4">{COPY.OFFER.title}</h2>
            <p className="text-xl max-w-3xl mx-auto">Hanya untuk 20 pembeli pertama hari ini</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="bg-base-100 text-base-content p-8 rounded-lg shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">MontBike Pro Series</h3>
                  <div className="badge badge-accent badge-lg">{COPY.OFFER.discount} OFF</div>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold">{COPY.OFFER.newPrice}</span>
                  <span className="ml-2 line-through opacity-70">{COPY.OFFER.oldPrice}</span>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-lg mb-2">Bonus Spesial:</h4>
                  <ul className="space-y-2">
                    {COPY.OFFER.bonus.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-lg mb-4">{COPY.OFFER.deadline}</h4>
                  <CountdownTimer />
                </div>

                <div className="space-y-4">
                  <a href="#" className="btn btn-accent btn-block btn-lg animate-pulse">
                    {COPY.CTA.main}
                  </a>
                  <a href="#" className="btn btn-outline btn-block btn-lg">
                    {COPY.CTA.secondary}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-primary/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Kenapa Harus Beli Sekarang?</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-3xl text-accent">1</div>
                    <div>
                      <h4 className="font-bold">Stok Terbatas</h4>
                      <p>Hanya tersedia 50 unit untuk diskon ini</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-3xl text-accent">2</div>
                    <div>
                      <h4 className="font-bold">Garansi Tambahan</h4>
                      <p>Pembelian hari ini dapat garansi tambahan 1 tahun</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-3xl text-accent">3</div>
                    <div>
                      <h4 className="font-bold">Pengiriman Cepat</h4>
                      <p>Pesanan sebelum jam 3 sore dikirim hari itu juga</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="font-bold text-lg mb-4">Jaminan Kepuasan:</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {COPY.TRUST_BADGES.map((badge, index) => (
                      <div key={index} className="flex flex-col items-center gap-2 text-center">
                        <span className="text-2xl">{badge.icon}</span>
                        <span className="text-sm">{badge.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-base-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Memulai Petualangan Baru Anda?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Jangan biarkan kebingungan memilih sepeda merusak kesenangan bersepeda Anda. MontBike Pro Series adalah solusi yang Anda cari.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#order" className="btn btn-primary btn-lg animate-bounce">
              {COPY.CTA.main} <FaChevronRight />
            </a>
            <a href="#features" className="btn btn-outline btn-lg">
              Lihat Fitur Detail
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="footer-title">MontBike</span>
              <p>Solusi sepeda gunung premium untuk petualang urban</p>
            </div>
            <div>
              <span className="footer-title">Produk</span>
              <a className="link link-hover">MontBike Pro</a>
              <a className="link link-hover">MontBike Trail</a>
              <a className="link link-hover">MontBike Urban</a>
            </div>
            <div>
              <span className="footer-title">Bantuan</span>
              <a className="link link-hover">Hubungi Kami</a>
              <a className="link link-hover">Garansi</a>
              <a className="link link-hover">FAQ</a>
            </div>
            <div>
              <span className="footer-title">Legal</span>
              <a className="link link-hover">Syarat & Ketentuan</a>
              <a className="link link-hover">Kebijakan Privasi</a>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-neutral/50 text-center">
            <p>© 2023 MontBike. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MontBikeLanding;
