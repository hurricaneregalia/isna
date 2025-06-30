//src/app/bonus/landingpageTemplate/zemira/HeroSectionZemira.js
import React from "react";
import Image from "next/image";
import { HiOutlineChevronDown } from "react-icons/hi"; // Import ikon dari react-icons
import Link from "next/link";

const heroData = {
  headline: "Dipercaya Elite Jakarta dalam Menciptakan Interior Bernilai Investasi",
  subheadline: "Solusi lengkap desain interior premium sejak 2009 - transformasi ruang hidup menjadi karya seni bertaraf dunia",
  ctaText: "Jadwalkan Konsultasi Privat",
  secondaryCta: "Lihat Proyek Eksklusif",
  image: "/images/templateLandingPageBonus/Zemira/images/photo-1606744888344-493238951221.jpg",
  awards: ["Best Luxury Design 2023", "Top 10 Interior Asia", "Platinum Partner IIDA"],
};

export default function HeroSectionZemira() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-base-100">
      {/* Background dengan efek paralaks */}
      <div className="absolute inset-0 z-0 transform transition-transform duration-1000 ease-out">
        <Image src={heroData.image} alt="Luxury Interior Design" fill style={{ objectFit: "cover" }} priority />
        <div className="absolute inset-0 bg-neutral/70"></div>
      </div>

      {/* Konten Utama */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="px-4 btn py-2 mb-6 bg-base-100/30 backdrop-blur-sm border-none shadow-none cursor-text">
              <span className="text-primary text-lg">✨ Premium Design Service</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">{heroData.headline}</h1>

            <p className="mt-8 text-xl text-white opacity-75 max-w-2xl">{heroData.subheadline}</p>
          </div>
        </div>
      </div>

      {/* Ikon Scroll ke #solution */}
      <div className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/50 animate-bounce btn cursor-text px-3 border-none shadow-none w-fit">
        <Link href="#solution">
          <HiOutlineChevronDown className="text-2xl text-primary" />
        </Link>
      </div>
    </section>
  );
}
