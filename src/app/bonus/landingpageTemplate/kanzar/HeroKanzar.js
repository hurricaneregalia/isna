import React from "react";
import Image from "next/image";
import { CTAButton } from "./ui/CTAButton";
import { HeroWrapper } from "./ui/HeroWrapper";
import Headline from "./ui/Headline";
import Subheadline from "./ui/Subheadline";

export default function HeroKanzar() {
  const dataHeroKanzar = {
    title: "Kurma Premium untuk Keluarga Anda",
    subtitle: "Manis alami, kaya nutrisi, dipilih dari kebun terbaik.",
    ctaText: "Pesan Sekarang",
    imageUrl: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Kurma premium berkualitas tinggi",
  };

  return (
    <HeroWrapper src={dataHeroKanzar.imageUrl}>
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Text Content - Left Side */}
            <div className="space-y-10 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-block px-5 py-2 bg-amber-500/10 rounded-full">
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">
                    ✨ Premium Quality
                  </span>
                </div>
                
                <Headline 
                  text={dataHeroKanzar.title} 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-base-content"
                />
                
                <Subheadline 
                  text={dataHeroKanzar.subtitle} 
                  className="text-xl md:text-2xl text-base-content/60 leading-relaxed max-w-xl mx-auto lg:mx-0"
                />
              </div>

              <div className="pt-4">
                <CTAButton>{dataHeroKanzar.ctaText}</CTAButton>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="relative order-first lg:order-last">
              <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src={dataHeroKanzar.imageUrl} 
                  alt={dataHeroKanzar.imageAlt} 
                  fill 
                  priority 
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Decorative Badge */}
                <div className="absolute top-6 right-6 bg-amber-500 text-white px-5 py-3 rounded-full shadow-lg">
                  <span className="font-bold text-sm">100% Halal</span>
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-amber-500/10 rounded-3xl"></div>
            </div>

          </div>
        </div>
      </div>
    </HeroWrapper>
  );
}
