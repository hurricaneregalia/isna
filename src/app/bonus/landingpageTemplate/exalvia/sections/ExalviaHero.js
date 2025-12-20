import React from "react";
import Image from "next/image";
import ExalviaHeadline from "../ui-components/ExalviaHeadline";
import ExalviaSubHeadline from "../ui-components/ExalviaSubHeadline";
import ExalviaLinkButton from "../ui-components/ExalviaLinkButton";
import { FaArrowRight } from "react-icons/fa";

export default function ExalviaHero({ data, secId }) {
  return (
    <section id={secId} className="w-full bg-base-100 flex flex-col items-center">
      {/* 
         Main Container based on Spec:
         - Width: sm:w-10/12 w-full
      */}
      <div className="relative w-full overflow-hidden rounded-bl-4xl bg-neutral shadow-2xl">
        <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto">
          {/* 1. Background Layer (NO BLUR) */}
          <div className="absolute inset-0">
            <Image src={data?.backgroundImage} alt="Exalvia Hero Brand Visual" fill priority className="object-cover" sizes="(max-width: 1536px) 100vw, 85vw" />
            {/* 
              Deep Graduate Overlay: 
              - Darker on the left for text readability
              - Transparent on the right to show the background subject
          */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* 2. Content Layer (Left Aligned Spec) */}
          <div className="relative w-full flex items-center px-6 md:px-16 lg:px-24 py-32">
            <div className="max-w-3xl flex flex-col items-start space-y-8 md:space-y-10">
              {/* Minimalist Badge */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-warning"></span>
                <span className="text-warning font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase font-montserrat">Premium Copywriting Studio</span>
              </div>

              {/* Headline (Instrument Serif) */}
              <ExalviaHeadline className="text-white">{data?.headline}</ExalviaHeadline>

              {/* Subheadline (Montserrat) */}
              <ExalviaSubHeadline className="text-white/80 max-w-xl font-normal leading-relaxed ">{data?.subheadline}</ExalviaSubHeadline>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <ExalviaLinkButton text="Konsultasi" href="#service" icon={FaArrowRight} className="hover:scale-105 transition-transform" />
                <ExalviaLinkButton text="Layanan" href="#service" variant="secondary" className="text-white border-white/40 hover:border-white hover:bg-white/10" />
              </div>

              {/* Trust Badges Bar */}
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4 pt-10 border-t border-white/10 w-full mt-10">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold font-instrument-serif text-warning">500+</span>
                  <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold">Klien Puas</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold font-instrument-serif text-warning">99%</span>
                  <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold">Tingkat Trust</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold font-instrument-serif text-warning">Awarded</span>
                  <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold">Design Studio</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Decorative Patterns (NO BLUR) */}
          <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: `url('${data?.patternImage}')` }} />
          </div>

          {/* Subtle Bottom Glow Shadow (Solid color approach) */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
