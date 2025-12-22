import React from "react";
import ExalviaBadge from "../ui-components/ExalviaBadge";
import ExalviaHeadline from "../ui-components/ExalviaHeadline";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";
import ExalviaImage from "../ui-components/ExalviaImage";

export default function ExalviaSolution({ data, secId }) {
  if (!data) return null;

  return (
    <section id={secId} className="py-20 md:py-32 bg-neutral text-neutral-content rounded-bl-4xl relative overflow-hidden">
      {/* Decorative background accent for the entire section */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Kolom Kiri: Deskripsi Solusi */}
          <div className="flex flex-col gap-6">
            <ExalviaBadge text={data.label} className="text-warning" />
            <ExalviaHeadline text={data.title} className="text-white mb-2" />
            <ExalviaBodyText text={data.description} className="text-white/80 mb-4 font-montserrat" />

            {/* Added a small feature list for more depth in solution */}
            <div className="space-y-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-warning"></div>
                <span className="text-sm md:text-base font-montserrat text-white/90">Analisis Psikologi Audiens</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-warning"></div>
                <span className="text-sm md:text-base font-montserrat text-white/90">Struktur Persuasi Teruji</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-warning"></div>
                <span className="text-sm md:text-base font-montserrat text-white/90">Optimasi Konversi Digital</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Visual Representasi */}
          <div className="relative group">
            {/* Background Digital Pattern for Image */}
            <div className="absolute -inset-4 md:-inset-10 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-700">
              <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 8" />
                <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
              </svg>
            </div>

            {/* Framed Image Container */}
            <div className="relative p-2 md:p-3 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-none shadow-2xl">
              <div className="rounded-2xl overflow-hidden border border-white/20">
                <ExalviaImage src={data.image} alt={data.title} width={800} height={600} className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
