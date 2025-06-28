// src/app/bonus/landingpageTemplate/zemira/HeroSectionZemira.js
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const heroData = {
  headline: "Dipercaya Elite Jakarta dalam Menciptakan Interior Bernilai Investasi",
  subheadline: "Solusi lengkap desain interior premium sejak 2009 - transformasi ruang hidup menjadi karya seni bertaraf dunia",
  ctaText: "Jadwalkan Konsultasi Privat",
  secondaryCta: "Lihat Proyek Eksklusif",
  image:
    "https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  awards: ["Best Luxury Design 2023", "Top 10 Interior Asia", "Platinum Partner IIDA"],
};

export default function HeroSectionZemira() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-base-100">
      {/* Background dengan efek paralaks */}
      <div className="absolute inset-0 z-0 transform transition-transform duration-1000 ease-out">
        <Image
          src={heroData.image}
          alt="Luxury Interior Design"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-90 scale-110"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Konten Utama */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className=" px-4 btn py-2 mb-6 bg-base-100/30 backdrop-blur-sm border-none shadow-none cursor-text">
              <span className="text-base-100 text-lg">✨ Premium Design Service</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">{heroData.headline}</h1>

            <p className="mt-8 text-xl text-white opacity-75 max-w-2xl">{heroData.subheadline}</p>
          </div>
        </div>
      </div>

      {/* Dekorasi Elemen */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-base-content/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
