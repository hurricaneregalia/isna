// src/app/component/landingpage/SepatuSnicker.js
"use client";

import Image from "next/image";
import { FaArrowRight, FaCheck, FaChevronDown, FaQuoteLeft, FaStar } from "react-icons/fa";
import { useState } from "react";

// Data untuk semua bagian komponen
const data = {
  // ATTENTION SECTION
  hero: {
    backgroundImage: "/images/templateLandingPageBonus/Zaffra/images/photo-1600269452121-4f2416e55c28.jpg",
    headline: "Kesempurnaan Setiap Langkah",
    subheadline: "Sepatu kasual yang menyatukan kenyamanan, gaya, dan performa",
    cta: {
      text: "Jelajahi Koleksi",
      link: "#galeri",
    },
  },

  // INTEREST SECTION
  edukasi: {
    title: "Mengapa Sepatu Kasual Penting?",
    points: [
      {
        icon: <FaCheck className="text-green-500" />,
        title: "Kenyamanan Seharian",
        description: "Sol ergonomis yang dirancang khusus untuk aktivitas sehari-hari tanpa lelah",
      },
      {
        icon: <FaCheck className="text-green-500" />,
        title: "Gaya Fleksibel",
        description: "Cocok untuk berbagai kesempatan dari santai hingga semi-formal",
      },
      {
        icon: <FaCheck className="text-green-500" />,
        title: "Investasi Kesehatan",
        description: "Dukungan optimal untuk postur tubuh dan kesehatan kaki jangka panjang",
      },
      {
        icon: <FaCheck className="text-green-500" />,
        title: "Ramah Lingkungan",
        description: "Bahan daur ulang berkualitas tinggi yang tahan lama dan minim limbah",
      },
    ],
  },

  // DESIRE SECTION
  tentang: {
    title: "Crafting Comfort, Defining Style",
    story:
      "Setiap pasang SepatuSnicker lahir dari dedikasi para pengrajin sepatu berpengalaman. Kami memadukan teknologi modern dengan sentuhan tradisional untuk menciptakan sepatu kasual yang tak hanya tampil sempurna, tetapi juga terasa seperti bagian dari kakimu.",
    usp: [
      "Material premium bernapas & anti-bakteri",
      "Sol karet fleksibel tahan slip",
      "Bantalan EVA untuk kenyamanan maksimal",
      "Garansi 1 tahun kualitas jahitan",
    ],
    image: "/images/templateLandingPageBonus/Zaffra/images/photo-1542291026-7eec264c27ff.jpg",
  },

  galeri: {
    title: "Koleksi Signature Kami",
    products: [
      {
        name: "Urban Explorer",
        price: "Rp 499.000",
        image: "/images/templateLandingPageBonus/Zaffra/images/photo-1525966222134-fcfa99b8ae77.jpg",
        badge: "Best Seller",
      },
      {
        name: "Cloud Walker",
        price: "Rp 549.000",
        image: "/images/templateLandingPageBonus/Zaffra/images/photo-1606107557195-0e29a4b5b4aa.jpg",
        badge: "New",
      },
      {
        name: "Heritage Classic",
        price: "Rp 599.000",
        image: "/images/templateLandingPageBonus/Zaffra/images/photo-1549289524-06cf883b6e3a.jpg",
        badge: "Limited",
      },
      {
        name: "Eco Runner",
        price: "Rp 529.000",
        image: "/images/templateLandingPageBonus/Zaffra/images/photo-1600185365926-3a2ce3cdb9eb.jpg",
      },
    ],
  },

  testimoni: {
    title: "Cerita Nyata Pengguna",
    reviews: [
      {
        name: "Budi K.",
        location: "Jakarta",
        quote: "Setelah pakai SepatuSnicker, sepatu lain jadi terasa kurang nyaman. Worth every penny!",
        image: "/images/templateLandingPageBonus/Zaffra/images/photo-1535713875002-d1d0cf377fde.jpg",
        rating: 5,
        badge: "Favorit",
      },
      {
        name: "Siti M.",
        location: "Bandung",
        quote: "Desainnya stylish tapi tetap nyaman dipakai jalan seharian. Bahannya juga awet!",
        image: "/images/templateLandingPageBonus/Zaffra/images/photo-1607746882042-944635dfe10e.jpg",
        rating: 5,
      },
      {
        name: "Rudi H.",
        location: "Surabaya",
        quote: "Pertama pakai langsung jatuh cinta. Sekarang punya 3 warna berbeda untuk berbagai gaya.",
        image: "/images/templateLandingPageBonus/Zaffra/images/photo-1560250097-0b93528c311a.jpg",
        rating: 4,
      },
    ],
  },

  // ACTION SECTION
  pemesanan: {
    title: "Proses Pemesanan Mudah",
    steps: [
      {
        step: "1",
        title: "Konsultasi",
        description: "Diskusikan kebutuhan Anda via WhatsApp",
      },
      {
        step: "2",
        title: "Pilih Produk",
        description: "Tentukan model & ukuran",
      },
      {
        step: "3",
        title: "Pembayaran",
        description: "Transfer DP 50% atau lunas",
      },
      {
        step: "4",
        title: "Pengiriman",
        description: "Barang dikirim hari sama jika transfer sebelum jam 12 WIB",
      },
    ],
  },

  faq: {
    title: "Pertanyaan Umum",
    items: [
      {
        question: "Bagaimana cara mengetahui ukuran sepatu saya?",
        answer: "Kami menyediakan panduan ukuran detail di setiap produk. Anda juga bisa konsultasi via WhatsApp untuk panduan personal",
      },
      {
        question: "Apakah produk ready stock?",
        answer: "Semua produk di website kami ready stock dan siap kirim dalam 24 jam",
      },
      {
        question: "Apa metode pengembalian produk?",
        answer: "Kami menerima pengembalian dalam 7 hari jika terdapat cacat produksi dengan proses gratis",
      },
      {
        question: "Apakah ada garansi?",
        answer: "Semua produk memiliki garansi 6 bulan untuk jahitan dan material",
      },
      {
        question: "Berapa lama waktu pengiriman?",
        answer: "1-3 hari kerja untuk Jabodetabek, 2-5 hari kerja untuk luar kota",
      },
    ],
  },

  penutup: {
    title: "Siap Memulai Petualangan Nyaman Anda?",
    highlights: ["Free ongkir Jabodetabek", "Garansi kepuasan 30 hari", "Konsultasi gaya gratis", "Bahan premium berkelanjutan"],
    cta: "Pesan Sekarang",
    image: "/images/templateLandingPageBonus/Zaffra/images/photo-1491553895911-0055eca6402d.jpg",
  },
};

export default function SepatuSnicker() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="font-sans">
      {/* ===== ATTENTION: Hero Section ===== */}
      <section className="relative h-screen flex items-end justify-center">
        <div className="absolute inset-0">
          <Image src={data.hero.backgroundImage} alt="Sepatu kasual premium" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative text-center px-4 pb-32 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{data.hero.headline}</h1>
          <p className="text-xl text-white mb-8 opacity-75">{data.hero.subheadline}</p>
          <a
            href={data.hero.cta.link}
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            {data.hero.cta.text} <FaArrowRight className="inline ml-2" />
          </a>
        </div>
      </section>

      {/* ===== INTEREST: Edukasi Section ===== */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{data.edukasi.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.edukasi.points.map((point, index) => (
              <div key={index} className="bg-base-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow" data-aos="fade-up">
                <div className="text-2xl mb-4" data-aos="flip-up">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                <p className="opacity-75">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESIRE: Tentang Section ===== */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2" data-aos="flip-left">
              <Image src={data.tentang.image} alt="Proses pembuatan sepatu" width={600} height={400} className="rounded-xl shadow-lg" />
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                {data.tentang.title}
              </h2>
              <p className="mb-8 leading-relaxed opacity-75" data-aos="fade-up">
                {data.tentang.story}
              </p>

              <ul className="space-y-3">
                {data.tentang.usp.map((item, index) => (
                  <li key={index} className="flex items-start" data-aos="fade-up">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className=" opacity-75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DESIRE: Galeri Section ===== */}
      <section id="galeri" className="py-20 bg-base-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{data.galeri.title}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.galeri.products.map((product, index) => (
              <div
                key={index}
                className="group bg-base-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                data-aos="flip-left"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-amber-500 px-3 py-1 rounded-full text-sm font-medium">{product.badge}</div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                  <p className="text-amber-600 font-medium">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESIRE: Testimoni Section ===== */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{data.testimoni.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.testimoni.reviews.map((review, index) => (
              <div
                key={index}
                className={`bg-base-200 p-8 rounded-xl shadow-sm border ${review.badge ? "border-amber-300 relative" : "border-base-content/15"}`}
                data-aos="fade-up"
              >
                {review.badge && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 px-4 py-1 rounded-full text-sm font-medium">
                    {review.badge}
                  </div>
                )}

                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image src={review.image} alt={review.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className=" opacity-75 text-sm">{review.location}</p>
                  </div>
                </div>

                <div className="mb-4 text-amber-500 flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < review.rating ? "fill-current" : "fill-base-content opacity-50"} />
                  ))}
                </div>

                <div className="relative">
                  <FaQuoteLeft className="absolute -top-2 -left-2 text-4xl opacity-25" />
                  <p className="relative opacity-75 z-10 pl-6">{review.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACTION: Pemesanan Section ===== */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{data.pemesanan.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {data.pemesanan.steps.map((step, index) => (
              <div key={index} className="text-center bg-base-200 p-5 rounded-xl" data-aos="fade-up">
                <div className="w-20 h-20 rounded-full bg-amber-500 text-white text-3xl font-bold flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className=" opacity-75">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACTION: FAQ Section ===== */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{data.faq.title}</h2>

          <div className="space-y-2">
            {data.faq.items.map((item, index) => (
              <div key={index} className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-xl" data-aos="fade-up">
                {/* name harus sama agar berfungsi sebagai radio group */}
                <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
                <div className="collapse-title font-semibold">{item.question}</div>
                <div className="collapse-content text-sm">
                  <p className="opacity-75">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACTION: Penutup Section ===== */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <Image src={data.penutup.image} alt="Sepatu kasual gaya hidup" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{data.penutup.title}</h2>

          <ul className="flex flex-wrap justify-center gap-6 mb-12">
            {data.penutup.highlights.map((item, index) => (
              <li key={index} className="bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-full flex justify-start" data-aos="flip-left">
                <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="animate-bounce inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            {data.penutup.cta}
          </a>

          <p className="mt-8 text-white/80">Garansi kepuasan 30 hari • Gratis pengembalian</p>
        </div>
      </section>
    </div>
  );
}
