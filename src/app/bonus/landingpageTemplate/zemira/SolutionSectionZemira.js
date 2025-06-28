"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HiSparkles, HiLightningBolt, HiShieldCheck, HiUserCircle, HiPlus, HiMinus } from "react-icons/hi";

export default function SolutionSectionZemira() {
  const portfolioImages = [
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg",
  ];

  const benefits = [
    {
      icon: <HiSparkles className="h-8 w-8" />,
      title: "Desain Eksklusif",
      description: "Solusi unik yang mencerminkan gaya hidup mewah dan kepribadian keluarga Anda",
    },
    {
      icon: <HiLightningBolt className="h-8 w-8" />,
      title: "Proses Tanpa Repot",
      description: "Dari konsep hingga eksekusi, kami tangani semuanya tanpa perlu Anda repot",
    },
    {
      icon: <HiShieldCheck className="h-8 w-8" />,
      title: "Material Premium",
      description: "Bahan berkualitas tinggi dengan jejak keberlanjutan dan garansi",
    },
    {
      icon: <HiUserCircle className="h-8 w-8" />,
      title: "Tim Desainer Elite",
      description: "Profesional berpengalaman khusus untuk klien high-profile",
    },
  ];

  const [expandedBenefit, setExpandedBenefit] = useState(null);

  const toggleBenefit = (index) => {
    setExpandedBenefit(expandedBenefit === index ? null : index);
  };

  return (
    <section id="solusi" className="py-16 md:py-24 bg-gradient-to-b from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full mb-4">Solusi Premium</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-6">
            <span className="text-primary">Transformasi Ruang Hidup</span> Anda Menuju Kemewahan Personal
          </h2>
          <p className="text-lg text-base-content/80">
            Layanan desain interior eksklusif untuk profesional yang mengutamakan kenyamanan keluarga dan keunikan gaya hidup. Kami menghadirkan
            solusi yang bukan hanya indah, tetapi juga fungsional dan mencerminkan identitas Anda.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-base-100 rounded-2xl p-6 border border-base-300/50 shadow-lg transition-all duration-300 ${
                expandedBenefit === index ? "border-primary/50 shadow-xl" : "hover:shadow-xl"
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mb-4">{benefit.icon}</div>
                <button onClick={() => toggleBenefit(index)} className="btn btn-ghost btn-circle btn-sm">
                  {expandedBenefit === index ? <HiMinus /> : <HiPlus />}
                </button>
              </div>

              <h3 className="text-xl font-semibold text-base-content mb-3">{benefit.title}</h3>

              {expandedBenefit === index ? (
                <div className="mt-4">
                  <p className="text-base-content mb-4">{benefit.description}</p>
                  <ul className="space-y-2 text-base-content/90">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Konsultasi kebutuhan keluarga secara mendalam</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>3D rendering sebelum eksekusi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Material swatch untuk pemilihan langsung</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <p className="text-base-content/80 line-clamp-2">{benefit.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Portfolio Showcase */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-base-content mb-4">
            Karya yang <span className="text-primary">Menginspirasi</span>
          </h3>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Jelajahi proyek-proyek eksklusif kami yang dirancang khusus untuk profesional seperti Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioImages.map((img, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-square">
                <Image
                  src={img}
                  alt={`Proyek desain interior ${index + 1}`}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-xl font-semibold text-base-100 mb-1">
                    {["Ruang Keluarga Mewah", "Kamar Master Elegan", "Home Office Profesional", "Dapur Modern"][index]}
                  </h4>
                  <p className="text-base-100/80">{["Untuk Keluarga Dokter", "Untuk Eksekutif", "Untuk Pengacara", "Untuk Pebisnis"][index]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-base-100 mb-4">Siap Mengubah Rumah Anda Menjadi Karya Seni?</h3>
          <p className="text-lg  max-w-2xl mx-auto mb-8 text-base-100/75">
            Jadwalkan konsultasi gratis dengan desainer elite kami dan dapatkan konsep awal dalam 48 jam
          </p>
          <button className="btn btn-info rounded-full px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-xl font-bold duration-300">
            Buat desain
            <HiSparkles className="ml-2 animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
}
