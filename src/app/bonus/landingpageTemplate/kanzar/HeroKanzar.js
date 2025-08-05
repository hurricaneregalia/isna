import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { CTAButton } from "./ui/CTAButton";
import { HeroWrapper } from "./ui/HeroWrapper";
import Headline from "./ui/Headline";
import Subheadline from "./ui/Subheadline";

export default function HeroKanzar() {
  const dataHeroKanzar = {
    title: "Tiap Hari Naik Motor Bukan Alasan untuk Nggak Tampil Keren!",
    subtitle: "Helm bukan lagi sekadar alat pengaman sekarang, jadi bagian penting dari gaya dan kepercayaan dirimu.",
    ctaText: "Lihat Produk",
    imageUrl: "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Wanita urban stylish memakai helm",
  };

  return (
    <HeroWrapper src={dataHeroKanzar.imageUrl}>
      <div className="container mx-auto px-5 relative z-20">
        <div className="bg-base-100 rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text Content */}
            <div className="sm:p-10 p-5 order-2 md:order-1 space-y-8">
              <Headline text={dataHeroKanzar.title} className="text-3xl md:text-4xl font-bold" />
              <Subheadline text={dataHeroKanzar.subtitle} className="opacity-75" />
              <CTAButton>{dataHeroKanzar.ctaText}</CTAButton>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 relative min-h-64 md:min-h-full">
              <Image src={dataHeroKanzar.imageUrl} alt="Hero Image" fill priority className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
}
