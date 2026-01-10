import React from "react";
import ExalviaBadge from "../ui-components/ExalviaBadge";
import ExalviaHeadline from "../ui-components/ExalviaHeadline";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";
import ExalviaImage from "../ui-components/ExalviaImage";
import ExalviaCard from "../ui-components/ExalviaCard";
import ExalviaIconBox from "../ui-components/ExalviaIconBox";

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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.items?.map((item, index) => {
                return (
                  <ExalviaCard key={index} className="flex items-center gap-2 p-4">
                    {item.icon && <ExalviaIconBox icon={item.icon} className="shrink-0" />}
                    <span className="font-montserrat text-sm md:text-base text-base-content">{item.title}</span>
                  </ExalviaCard>
                );
              })}
            </div>
          </div>

          {/* Kolom Kanan: Visual Representasi */}
          <div className="relative group">
            {/* Background Digital Pattern for Image */}
            <div className="absolute -inset-4 md:-inset-10 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-700"></div>

            {/* Framed Image Container */}
            <div className="relative">
              <ExalviaImage src={data.image} alt={data.title} width={800} height={600} className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
