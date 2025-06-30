//src/app/bonus/landingpageTemplate/zemira/HeroSectionZemira.js
import React from "react";
import Image from "next/image";
import { HiOutlineChevronDown } from "react-icons/hi"; // Import ikon dari react-icons
import Link from "next/link";

export default function HeroSectionZemira({ secId, data, secIdTarget }) {
  return (
    <section className="overflow-hidden bg-base-100" id={secId}>
      <div className="relative min-h-screen">
        {/* Background dengan efek paralaks */}
        <div className="absolute inset-0 z-0 transform transition-transform duration-1000 ease-out">
          <Image src={data.image} alt={data.imageAlt} fill style={{ objectFit: "cover" }} priority />
          <div className="absolute inset-0 bg-neutral/70"></div>
        </div>

        {/* Konten Utama */}
        <div className="container mx-auto px-4 max-w-6xl relative z-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="px-4 btn py-2 mb-6 bg-base-100/30 border-none shadow-none cursor-text">
                <span className="text-primary text-lg">✨ Premium Design Service</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">{data.headline}</h1>

              <p className="mt-8 text-xl text-white opacity-75 max-w-2xl">{data.subheadline}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center">
          <Link href={secIdTarget} className="flex items-center justify-center gap-2 px-3 py-3 rounded-full text-primary border-2 border-primary shadow-md transition duration-300 animate-bounce">
            <HiOutlineChevronDown className="text-2xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}
