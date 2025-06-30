"use client";
import React, { useState } from "react";
import { HiSparkles, HiLightningBolt, HiShieldCheck, HiUserCircle, HiPlus, HiMinus } from "react-icons/hi";

export default function SolutionSectionZemira({ children }) {
  // Portfolio Images dan keterangan
  const portfolioImages = [
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1571460.jpg",
      title: "Ruang Keluarga Mewah",
      subtitle: "Untuk Keluarga Dokter",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1457842.jpg",
      title: "Kamar Master Elegan",
      subtitle: "Untuk Eksekutif",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1643383.jpg",
      title: "Home Office Profesional",
      subtitle: "Untuk Pengacara",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-280232.jpg",
      title: "Dapur Modern",
      subtitle: "Untuk Pebisnis",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1866149.jpg",
      title: "Ruang Makan Minimalis",
      subtitle: "Untuk Keluarga Muda",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-271743.jpg",
      title: "Kamar Tidur Nyaman",
      subtitle: "Untuk Pasangan Baru",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-2082090.jpg",
      title: "Ruang Kerja Modern",
      subtitle: "Untuk Freelancer",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-374703.jpg",
      title: "Lobi Hotel Elegan",
      subtitle: "Untuk Pengusaha",
    },
  ];

  // Teks dan data benefit dimasukkan ke variabel const
  const text = {
    sectionTitle: "Transformasi Ruang Hidup",
    sectionSubtitle: "Anda Menuju Kemewahan Personal",
    sectionIntro:
      "Layanan desain interior eksklusif untuk profesional yang mengutamakan kenyamanan keluarga dan keunikan gaya hidup. Kami menghadirkan solusi yang bukan hanya indah, tetapi juga fungsional dan mencerminkan identitas Anda.",
    benefits: [
      {
        icon: <HiSparkles className="h-8 w-8" />,
        title: "Desain Eksklusif",
        description: "Solusi unik yang mencerminkan gaya hidup mewah dan kepribadian keluarga Anda",
        details: ["Konsultasi kebutuhan keluarga secara mendalam", "3D rendering sebelum eksekusi", "Material swatch untuk pemilihan langsung"],
      },
      {
        icon: <HiLightningBolt className="h-8 w-8" />,
        title: "Proses Tanpa Repot",
        description: "Dari konsep hingga eksekusi, kami tangani semuanya tanpa perlu Anda repot",
        details: ["Satu pintu dari desain hingga realisasi", "Update progres secara berkala", "Koordinasi penuh antar vendor"],
      },
      {
        icon: <HiShieldCheck className="h-8 w-8" />,
        title: "Material Premium",
        description: "Bahan berkualitas tinggi dengan jejak keberlanjutan dan garansi",
        details: ["Material ramah lingkungan & tahan lama", "Garansi material & pengerjaan", "Langsung dari supplier terpercaya"],
      },
      {
        icon: <HiUserCircle className="h-8 w-8" />,
        title: "Tim Desainer Elite",
        description: "Profesional berpengalaman khusus untuk klien high-profile",
        details: ["Pengalaman lebih dari 10 tahun", "Fokus pada desain personal & high-end", "Konsultasi eksklusif 1-on-1"],
      },
    ],
    portfolioSectionTitle: "Karya yang Menginspirasi",
    portfolioSectionDesc: "Jelajahi proyek-proyek eksklusif kami yang dirancang khusus untuk profesional seperti Anda",
    ctaTitle: "Siap Mengubah Rumah Anda Menjadi Karya Seni?",
    ctaDesc: "Jadwalkan konsultasi gratis dengan desainer elite kami dan dapatkan konsep awal dalam 48 jam",
    ctaButton: "Buat desain",
  };

  const [expandedBenefit, setExpandedBenefit] = useState(null);
  const toggleBenefit = (index) => {
    setExpandedBenefit(expandedBenefit === index ? null : index);
  };

  return (
    <section id="solusi" className="py-16 md:py-24 bg-gradient-to-b from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="w-fit px-4 bg-primary/10 text-primary btn cursor-text shadow-none border-none mb-3" data-aos="fade-up">
            Solusi Premium
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-6" data-aos="fade-up">
            <span className="text-primary">{text.sectionTitle}</span> {text.sectionSubtitle}
          </h2>
          <p className="text-lg opacity-75" data-aos="fade-up">
            {text.sectionIntro}
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {text.benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-base-100 overflow-hidden rounded-2xl p-6 border border-base-300/50 shadow-lg transition-all duration-300 ${
                expandedBenefit === index ? "border-primary/50 shadow-xl" : "hover:shadow-xl"
              }`}
              data-aos="fade-up"
            >
              <div className="flex justify-between items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mb-4">{benefit.icon}</div>
                <button
                  onClick={() => toggleBenefit(index)}
                  className="text-primary bg-base-200 rounded-full p-2 w-8 h-8 flex items-center justify-center text-3xl hover:bg-primary/10 transition-all"
                  aria-label="Toggle detail"
                >
                  {expandedBenefit === index ? <HiMinus /> : <HiPlus />}
                </button>
              </div>

              <h3 className="text-xl font-semibold text-base-content mb-3" data-aos="fade-left">
                {benefit.title}
              </h3>

              {expandedBenefit === index ? (
                <div className="mt-4 transition-all duration-300" data-aos="fade-left">
                  <p className="opacity-75 mb-4" data-aos="fade-left">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2 opacity-75">
                    {benefit.details.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="opacity-75 line-clamp-2" data-aos="fade-left">
                  {benefit.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Portfolio Showcase */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="w-fit px-4 bg-primary/10 text-primary btn cursor-text shadow-none border-none mb-3" data-aos="fade-up">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-6" data-aos="fade-up">
            {text.portfolioSectionTitle.split(" ").slice(0, -1).join(" ")} <span className="text-primary">{text.portfolioSectionTitle.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-lg opacity-75 max-w-2xl mx-auto" data-aos="fade-up">
            {text.portfolioSectionDesc}
          </p>
        </div>

        {children}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 " data-aos="zoom-out-down">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-base-100 mb-4">{text.ctaTitle}</h3>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-base-100/75">{text.ctaDesc}</p>
          <button className="w-fit btn btn-neutral text-white btn-lg px-10 mx-auto font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            {text.ctaButton}
            <HiSparkles className="ml-2 animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
}
