// src/app/landingpage/TemplateOne.js
import React from "react";
import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["700", "800", "900"],
});

const data = {
  hero: {
    title: "Transformasi Digital untuk Masa Depan Bisnis Anda",
    subtitle: "Solusi Inovatif yang Mengubah Cara Anda Bekerja",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200",
    cta: "Pelajari Lebih Lanjut",
  },
  features: [
    {
      title: "Efisiensi Tanpa Batas",
      description: "Optimalkan proses bisnis Anda dengan teknologi terkini yang mengurangi waktu kerja hingga 70%",
      image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=800",
    },
    {
      title: "Kolaborasi Real-time",
      description: "Tim Anda dapat bekerja bersama secara mulus dari mana saja di seluruh dunia",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800",
    },
    {
      title: "Keamanan Terjamin",
      description: "Sistem enkripsi tingkat militer melindungi data berharga bisnis Anda",
      image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&w=800",
    },
  ],
  testimonials: [
    {
      quote: "Setelah menggunakan solusi ini, produktivitas tim kami meningkat drastis dalam waktu 2 minggu",
      author: "Budi Santoso, CEO TechInnovate",
    },
    {
      quote: "Transformasi digital yang kami alami benar-benar mengubah cara kami melayani pelanggan",
      author: "Siti Rahayu, Direktur FinCorp",
    },
  ],
  offer: {
    title: "Mulai Perjalanan Transformasi Anda Hari Ini",
    description: "Dapatkan konsultasi gratis dan demo produk eksklusif untuk 100 pendaftar pertama",
    benefits: ["Analisis kebutuhan bisnis gratis", "Demo produk 1-on-1 dengan ahli", "Paket diskon 30% untuk implementasi"],
  },
  form: {
    title: "Ambil Langkah Pertama Anda Sekarang",
    subtitle: "Isi formulir untuk akses prioritas dan penawaran eksklusif",
  },
};

const TemplateOne = () => {
  return (
    <div className={`${inter.variable} ${montserrat.variable} font-sans bg-white`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={data.hero.image} alt="Background Hero" layout="fill" objectFit="cover" quality={100} priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className={`${montserrat.className} text-5xl md:text-7xl font-black mb-6 tracking-tight`}>{data.hero.title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">{data.hero.subtitle}</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            {data.hero.cta}
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {data.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="h-64 relative">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`${montserrat.className} text-2xl font-bold mb-3 text-gray-900`}>{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${montserrat.className} text-4xl font-bold mb-16`}>Apa Kata Mereka yang Sudah Mencoba</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {data.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                <p className="font-bold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className={`${montserrat.className} text-4xl font-bold text-gray-900 mb-6`}>{data.offer.title}</h2>
            <p className="text-xl text-gray-600 mb-10">{data.offer.description}</p>

            <div className="flex flex-wrap justify-center gap-6">
              {data.offer.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
                <h3 className={`${montserrat.className} text-3xl font-bold mb-4`}>{data.form.title}</h3>
                <p className="text-lg opacity-90">{data.form.subtitle}</p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white/20 p-2 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="ml-4">Panduan implementasi khusus untuk kebutuhan bisnis Anda</p>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white/20 p-2 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="ml-4">Akses ke tim ahli selama periode demo</p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Perusahaan
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="email@perusahaan.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0812-XXXX-XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Perusahaan
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Perusahaan Anda"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Dapatkan Akses Prioritas Sekarang
                  </button>

                  <p className="text-xs text-gray-500 mt-4">
                    Dengan mengisi formulir, Anda menyetujui syarat dan ketentuan serta kebijakan privasi kami.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-gray-400 text-center">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Nama Perusahaan. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
};

export default TemplateOne;
