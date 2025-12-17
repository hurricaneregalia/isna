import React from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const KanzarHero = ({ data }) => {
  const { title, subtitle, ctaText, backgroundImage } = data.hero;

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed bg-scroll transform scale-105" style={{ backgroundImage: `url(${backgroundImage})` }} />
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 bg-black/60 " />
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black/90" />

      {/* Content */}
      <div className="relative container mx-auto lg:w-6/12 w-full px-6 text-center text-white">
        <div data-aos="fade-up" data-aos-duration="1000">
          {/* Basmalah Calligraphy */}
          <div className="font-arabic text-3xl md:text-5xl text-warning mb-8 drop-shadow-lg opacity-90" data-aos="fade-down" data-aos-delay="200">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>

          <h2 className="text-warning font-serif italic text-lg md:text-2xl mb-4 tracking-wider uppercase">Premium & Halal Selection</h2>
          <h1 className="font-serif sm:text-7xl text-4xl font-bold mb-6 leading-tight text-shadow">{title}</h1>
          <p className="font-sans text-lg md:text-xl text-stone-200/70 mb-10 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>

          <Link
            href="#product"
            className="btn card w-fit mx-auto btn-accent btn-lg font-bold tracking-widest transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/30 border border-primary/30"
          >
            {ctaText}
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="animate-bounce text-white/70 absolute bottom-16 md:bottom-24">
        <ChevronDown size={32} />
      </div>

      {/* Islamic Arch Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg className="relative block w-full h-12 md:h-20 text-base-100" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,110 C250,110 0,0 0,0 V120 H1200 V0 C1200,0 950,110 600,110 Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default KanzarHero;
