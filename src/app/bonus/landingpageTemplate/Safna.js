// src/app/landingpage/TemplateOne.js
"use client";
import { Inter, Montserrat } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { FaChalkboardTeacher, FaToolbox, FaUserFriends, FaCertificate, FaShieldAlt, FaAward, FaLock } from "react-icons/fa";
import { FaBuilding, FaChartLine, FaClock, FaEnvelope, FaInstagram, FaLinkedin, FaPhone, FaRocket, FaYoutube } from "react-icons/fa6";

// Konfigurasi font
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
});

// Data copywriting dan gambar
const data = {
  hero: {
    headline: "Kuasai AI, Kuasai Masa Depan Karirmu",
    subheadline:
      "Pelajari strategi kerja cerdas berbasis AI yang terbukti meningkatkan produktivitas hingga 300% — tanpa kehilangan sisi manusiawimu.",
    cta: "Mulai Perubahan Hari Ini",
    imageUrl: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  valueProps: [
    {
      title: "Efisiensi Tanpa Batas",
      description: "Teknik otomatisasi cerdas yang menghemat 20+ jam kerja per minggu",
      icon: <FaClock className="text-blue-600 text-4xl" />,
    },
    {
      title: "Keputusan Lebih Akurat",
      description: "Analisis data prediktif dengan akurasi 95% untuk pengambilan keputusan",
      icon: <FaChartLine className="text-blue-600 text-4xl" />,
    },
    {
      title: "Kompetensi Masa Depan",
      description: "Keahlian yang dibutuhkan perusahaan top di era transformasi digital",
      icon: <FaRocket className="text-blue-600 text-4xl" />,
    },
  ],
  storytelling: {
    title: "Teknologi Tak Lagi Jadi Ancaman — Ini Saatnya Jadi Kekuatanmu",
    content:
      "65% profesional merasa tertinggal karena skill digital yang terus berubah. Salah satunya adalah Maya, seorang HR Manager yang awalnya canggung dengan AI. Lewat pendekatan hybrid kami yang menggabungkan AI dan sentuhan manusia, dalam 6 minggu Maya tidak hanya paham — tapi jadi pionir transformasi digital di kantornya. Kami merancang metode ini dari riset bersama 500+ praktisi untuk mengubah kecemasan teknologi jadi kepercayaan diri dan keunggulan strategis.",
    imageUrl: "https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  aboutCourse: {
    title: "Apa yang Benar-Benar Anda Dapatkan?",
    features: [
      {
        title: "Masterclass Interaktif",
        description: "12 sesi intensif dengan mentor praktisi industri",
        icon: <FaChalkboardTeacher className="text-blue-600" />,
      },
      {
        title: "Toolkit Revolusioner",
        description: "15+ template siap pakai untuk otomatisasi pekerjaan",
        icon: <FaToolbox className="text-blue-600" />,
      },
      {
        title: "Komunitas Eksklusif",
        description: "Akses ke jaringan profesional digital se-Asia Tenggara",
        icon: <FaUserFriends className="text-blue-600" />,
      },
      {
        title: "Sertifikasi Premium",
        description: "Sertifikat kompetensi yang diakui perusahaan multinasional",
        icon: <FaCertificate className="text-blue-600" />,
      },
    ],
    imageUrl: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  testimonials: {
    title: "Dari Mereka yang Sudah Mengalami Transformasi",
    reviews: [
      {
        name: "Budi Santoso",
        role: "Manajer Operasional",
        content:
          "Metodenya benar-benar mengubah cara tim saya bekerja. Efisiensi meningkat drastis tanpa kehilangan kualitas human touch yang penting bagi bisnis kami.",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Dewi Anggraeni",
        role: "Head of Digital Marketing",
        content: "Investasi terbaik karir saya! Dalam 3 bulan, saya bisa mengimplementasikan sistem yang menghemat 30 jam kerja tim setiap minggu.",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Rudi Hartono",
        role: "CEO Startup Fintech",
        content:
          "Pendekatan hybrid-nya memberi solusi sempurna untuk tantangan transformasi digital kami. Tidak hanya teknis tapi juga aspek budaya organisasi.",
        avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  specialOffer: {
    title: "Gabung Sekarang & Nikmati Keuntungan Total Lebih dari Rp 5 Juta!",
    deadline: "Penawaran hanya berlaku hingga 15 Juli 2025",
    bonuses: [
      "Sesi 1-on-1 bersama Lead Mentor (Senilai Rp 2.500.000)",
      "Akses Seumur Hidup ke Materi & Update Program",
      "Undangan ke Event Networking Eksekutif",
      "Template Workflow AI Eksklusif (digunakan di perusahaan Fortune 500)",
    ],
    normalPrice: "Rp 4.999.000",
    discountPrice: "Hanya Rp 2.999.000",
  },
  leadForm: {
    title: "Ambil Langkah Pertama Menuju Penguasaan Teknologi",
    subtitle: "Isi formulir di bawah untuk mendapatkan konsultasi gratis dan informasi lengkap program",
    formFields: [
      { name: "name", label: "Nama Lengkap", type: "text", placeholder: "Masukkan nama lengkap Anda" },
      { name: "email", label: "Email", type: "email", placeholder: "alamat@email.com" },
      { name: "phone", label: "Nomor WhatsApp", type: "tel", placeholder: "0812-3456-7890" },
      { name: "profession", label: "Profesi", type: "text", placeholder: "Misal: Manajer, Pengusaha, dll" },
    ],
    submitText: "Dapatkan Konsultasi Gratis",
    privacyText: "Dengan mengisi formulir, Anda menyetujui kebijakan privasi kami. Data Anda aman dan tidak akan disalahgunakan.",
  },
  faq: {
    title: "Pertanyaan yang Sering Diajukan",
    items: [
      {
        question: "Apakah program ini cocok untuk pemula tanpa latar belakang IT?",
        answer:
          "Sangat cocok! Program dirancang untuk semua level. 65% peserta kami adalah non-teknis dari berbagai bidang seperti marketing, HR, dan operasional. Materi disampaikan dengan pendekatan praktis tanpa jargon teknis berlebihan.",
      },
      {
        question: "Berapa waktu yang diperlukan untuk menyelesaikan program?",
        answer:
          "Program intensif berjalan selama 6 minggu dengan komitmen 8-10 jam per minggu. Fleksibilitas penuh - Anda bisa belajar kapan saja melalui platform online kami yang tersedia 24/7.",
      },
      {
        question: "Apakah ada garansi hasil?",
        answer:
          "Ya! Kami menawarkan garansi kepuasan 30 hari. Jika setelah sesi pertama Anda merasa tidak cocok, kami akan mengembalikan 100% investasi Anda tanpa pertanyaan.",
      },
      {
        question: "Bagaimana metode pembayarannya?",
        answer:
          "Kami menyediakan berbagai opsi: transfer bank, kartu kredit, atau cicilan melalui partner finansial kami. Pembayaran cicilan tersedia tanpa bunga hingga 12 bulan.",
      },
    ],
    trustBadges: [
      {
        title: "Aman & Terpercaya",
        description: "Proses pembayaran melalui gateway terenkripsi SSL",
        icon: <FaLock className="text-blue-600" />,
      },
      {
        title: "Dukungan 24/7",
        description: "Tim pendamping siap membantu kapan saja",
        icon: <FaShieldAlt className="text-blue-600" />,
      },
      {
        title: "Sertifikasi Resmi",
        description: "Diakui oleh asosiasi industri digital",
        icon: <FaAward className="text-blue-600" />,
      },
    ],
  },
  footer: {
    companyName: "Digital Mastery Academy",
    tagline: "Transformasi Kompetensi Digital Profesional Indonesia",
    links: [
      { title: "Tentang Kami", url: "#" },
      { title: "Program Lain", url: "#" },
      { title: "Blog & Artikel", url: "#" },
      { title: "Kebijakan Privasi", url: "#" },
      { title: "Syarat & Ketentuan", url: "#" },
    ],
    contact: {
      phone: "+62 21 1234 5678",
      email: "info@digitalmastery.id",
      address: "Gedung Innovation Hub, Jl. Sudirman Kav. 52-53, Jakarta Selatan",
    },
    socialMedia: [
      { name: "Instagram", icon: <FaInstagram />, url: "#" },
      { name: "LinkedIn", icon: <FaLinkedin />, url: "#" },
      { name: "YouTube", icon: <FaYoutube />, url: "#" },
    ],
    copyright: "© 2025 Digital Mastery Academy. Hak Cipta Dilindungi.",
  },
};

export default function TemplateOne() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <div className={`${inter.variable} ${montserrat.variable} font-sans`}>
      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={data.hero.imageUrl}
            alt="Profesional menggunakan teknologi modern"
            fill
            priority
            className="object-cover"
            quality={100}
            sizes="(max-width: 768px) 100vw, 75vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-2xl">
            <h1 className="font-montserrat font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">{data.hero.headline}</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-xl">{data.hero.subheadline}</p>
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 duration-300">
              {data.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* --- Value Proposition --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Mengapa Ini <span className="text-blue-600">Revolusi</span> Cara Anda Bekerja
            </h2>
            <p className="text-gray-600 text-lg">Solusi yang dirancang untuk profesional ambisius yang ingin memimpin di era disrupsi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {data.valueProps.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Storytelling Section --- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative">
                <Image
                  src={data.storytelling.imageUrl}
                  alt="Tim kolaborasi modern"
                  fill
                  className="object-cover"
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-6">{data.storytelling.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{data.storytelling.content}</p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Studi Kasus Nyata:</span> Implementasi pada perusahaan fintech yang meningkatkan efisiensi
                    operasional 40% dalam 3 bulan
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Pendekatan Unik:</span> Metode "Human-Centered AI" yang menjaga nilai-nilai insani dalam proses
                    digitalisasi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-linear-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-4">{data.aboutCourse.title}</h2>
            <p className="text-gray-600 text-lg">Program komprehensif yang dirancang untuk transformasi nyata - bukan sekadar teori</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-4/3 relative">
                <Image
                  src={data.aboutCourse.imageUrl}
                  alt="Sesi pembelajaran interaktif"
                  fill
                  className="object-cover"
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.aboutCourse.features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-xl mb-3 text-blue-800">Metode Pembelajaran Unik</h3>
                <p className="text-gray-700 mb-4">
                  Menggunakan pendekatan <span className="font-semibold">"Learn-Do-Implement"</span> dimana Anda langsung menerapkan pengetahuan pada
                  proyek aktual perusahaan Anda, didampingi mentor berpengalaman.
                </p>
                <div className="flex items-center">
                  <div className="mr-3 bg-white p-2 rounded-full">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Dukungan implementasi 3 bulan pasca pelatihan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Testimonials & Social Proof --- */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">{data.testimonials.title}</h2>
            <p className="text-gray-300">Mereka telah melangkah lebih dulu dan mendapatkan hasil luar biasa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.testimonials.reviews.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-blue-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-200 italic">"{testimonial.content}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400">500+</div>
                <div className="text-gray-400">Profesional Terlatih</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400">97%</div>
                <div className="text-gray-400">Tingkat Kepuasan</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400">40+</div>
                <div className="text-gray-400">Perusahaan Mitra</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400">300%</div>
                <div className="text-gray-400">ROI Minimum</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Special Offer / Limited-Time Bonus --- */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-indigo-700 opacity-5 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-linear-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-12">
                <div className="inline-block bg-yellow-400 text-blue-900 font-bold px-4 py-1 rounded-full mb-4">PENAWARAN TERBATAS</div>
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">{data.specialOffer.title}</h2>

                <p className="text-blue-100 mb-6">
                  Daftar sebelum <span className="font-bold underline">{data.specialOffer.deadline}</span> dan dapatkan:
                </p>

                <ul className="space-y-3 mb-8">
                  {data.specialOffer.bonuses.map((bonus, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-white">{bonus}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="text-3xl font-bold text-white">{data.specialOffer.discountPrice}</div>
                  <div className="text-xl text-blue-200 line-through">{data.specialOffer.normalPrice}</div>
                  <div className="bg-red-500 text-white font-bold px-3 py-1 rounded-full">Hemat 40%</div>
                </div>
              </div>

              <div className="md:w-1/3 bg-blue-800 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="mb-4">
                    <div className="text-white text-sm mb-2">Penawaran Berakhir Dalam:</div>
                    <div className="flex justify-center gap-2">
                      <div className="bg-white text-blue-900 rounded-lg w-16 h-16 flex flex-col items-center justify-center">
                        <div className="font-bold text-xl">02</div>
                        <div className="text-xs">Hari</div>
                      </div>
                      <div className="bg-white text-blue-900 rounded-lg w-16 h-16 flex flex-col items-center justify-center">
                        <div className="font-bold text-xl">18</div>
                        <div className="text-xs">Jam</div>
                      </div>
                      <div className="bg-white text-blue-900 rounded-lg w-16 h-16 flex flex-col items-center justify-center">
                        <div className="font-bold text-xl">45</div>
                        <div className="text-xs">Menit</div>
                      </div>
                    </div>
                  </div>
                  <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 duration-300 shadow-lg">
                    Klaim Penawaran Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-4">{data.leadForm.title}</h2>
              <p className="text-gray-600 text-xl">{data.leadForm.subtitle}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-blue-600 p-8 text-white">
                  <h3 className="font-bold text-xl mb-4">Apa yang Anda Dapat?</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span>Analisis kebutuhan spesifik karir/bisnis Anda</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span>Rekomendasi program yang paling sesuai</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span>Panduan roadmap pengembangan kompetensi</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span>Informasi penawaran khusus pendaftaran awal</span>
                    </li>
                  </ul>

                  <div className="mt-8 p-4 bg-blue-700 rounded-lg">
                    <div className="flex items-start">
                      <div className="mr-3 text-xl">⏱️</div>
                      <p className="text-sm">Konsultasi hanya membutuhkan 15-20 menit dan tidak ada tekanan untuk mendaftar</p>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 p-8">
                  <form className="space-y-6">
                    {data.leadForm.formFields.map((field, index) => (
                      <div key={index}>
                        <label htmlFor={field.name} className="block text-gray-700 font-medium mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    ))}

                    <button
                      type="submit"
                      className="w-full bg-linear-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-[1.02] duration-300 shadow-lg"
                    >
                      {data.leadForm.submitText}
                    </button>

                    <p className="text-gray-500 text-sm text-center mt-4">{data.leadForm.privacyText}</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ & Trust Section (Redesigned) --- */}
      <section className="py-20 bg-linear-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-4">{data.faq.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Temukan jawaban atas pertanyaan umum dan ketahui mengapa ribuan profesional mempercayai program kami
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* --- FAQ Section --- */}
            <div className="lg:w-1/2">
              <div className="space-y-4">
                {data.faq.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    <button
                      className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={openAccordion === index}
                    >
                      <h3 className="font-bold text-lg md:text-xl text-gray-900 pr-4">{item.question}</h3>
                      <svg
                        className={`w-6 h-6 text-blue-600 shrink-0 transition-transform duration-300 ${
                          openAccordion === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openAccordion === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* --- Stats Bar --- */}
              <div className="mt-10 bg-linear-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Komitmen Kami Terhadap Hasil</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-700/50 p-4 rounded-xl">
                    <div className="text-3xl font-bold mb-1">97%</div>
                    <div className="text-sm opacity-90">Tingkat Kepuasan Peserta</div>
                  </div>
                  <div className="bg-blue-700/50 p-4 rounded-xl">
                    <div className="text-3xl font-bold mb-1">40+</div>
                    <div className="text-sm opacity-90">Perusahaan Mitra</div>
                  </div>
                  <div className="bg-blue-700/50 p-4 rounded-xl">
                    <div className="text-3xl font-bold mb-1">500+</div>
                    <div className="text-sm opacity-90">Profesional Terlatih</div>
                  </div>
                  <div className="bg-blue-700/50 p-4 rounded-xl">
                    <div className="text-3xl font-bold mb-1">300%</div>
                    <div className="text-sm opacity-90">ROI Minimum</div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Trust Section --- */}
            <div className="lg:w-1/2">
              <div className="sticky top-24">
                {/* --- Trust Badges --- */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
                  <div className="bg-linear-to-r from-blue-600 to-indigo-700 p-6 text-white">
                    <h3 className="font-bold text-xl flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Mengapa Memilih Program Kami?
                    </h3>
                  </div>

                  <div className="p-6">
                    <div className="space-y-6">
                      {data.faq.trustBadges.map((badge, index) => (
                        <div key={index} className="flex items-start p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                          <div className="bg-blue-100 text-blue-600 rounded-xl w-12 h-12 flex items-center justify-center text-xl mr-4 shrink-0">
                            {badge.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1 text-gray-900">{badge.title}</h4>
                            <p className="text-gray-600">{badge.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* --- Credibility Section --- */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="font-bold text-xl text-gray-900 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Dipercaya oleh Perusahaan Terkemuka
                    </h3>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center h-24">
                        <div className="text-center">
                          <div className="font-bold text-gray-800 text-lg">Forbes</div>
                          <div className="text-xs text-gray-500 mt-1">Featured</div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center h-24">
                        <div className="text-center">
                          <div className="font-bold text-gray-800 text-lg">Kompas</div>
                          <div className="text-xs text-gray-500 mt-1">Media Partner</div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center h-24">
                        <div className="text-center">
                          <div className="font-bold text-gray-800 text-lg">Google</div>
                          <div className="text-xs text-gray-500 mt-1">Tech Partner</div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center h-24">
                        <div className="text-center">
                          <div className="font-bold text-gray-800 text-lg">AWS</div>
                          <div className="text-xs text-gray-500 mt-1">Cloud Partner</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100 flex">
                      <div className="mr-4 text-blue-600">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Garansi 100% Uang Kembali</span> dalam 30 hari jika tidak puas dengan program kami
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-montserrat font-bold text-xl mb-4">{data.footer.companyName}</h3>
              <p className="text-gray-400 mb-6">{data.footer.tagline}</p>
              <div className="flex space-x-4">
                {data.footer.socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Tautan</h4>
              <ul className="space-y-3">
                {data.footer.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Kontak Kami</h4>
              <ul className="space-y-4">
                <li className="flex items-center bg-gray-800 p-3 rounded-lg">
                  <span className="mr-3 text-blue-400 bg-blue-900/30 p-2 rounded-full">
                    <FaPhone />
                  </span>
                  <span className="text-gray-300">{data.footer.contact.phone}</span>
                </li>
                <li className="flex items-center bg-gray-800 p-3 rounded-lg">
                  <span className="mr-3 text-blue-400 bg-blue-900/30 p-2 rounded-full">
                    <FaEnvelope />
                  </span>
                  <a href={`mailto:${data.footer.contact.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {data.footer.contact.email}
                  </a>
                </li>
                <li className="flex items-center bg-gray-800 p-3 rounded-lg">
                  <span className="mr-3 text-blue-400 bg-blue-900/30 p-2 rounded-full">
                    <FaBuilding />
                  </span>
                  <span className="text-gray-300">{data.footer.contact.address}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Berlangganan</h4>
              <p className="text-gray-400 mb-4">Dapatkan tips eksklusif dan penawaran spesial langsung ke inbox Anda</p>
              <div className="flex">
                <input type="email" placeholder="Email Anda" className="px-4 py-2 rounded-l-lg w-full text-gray-900" />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg whitespace-nowrap">Daftar</button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>{data.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
