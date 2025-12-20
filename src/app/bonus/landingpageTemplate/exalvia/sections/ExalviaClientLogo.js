import React from "react";
import Image from "next/image";

export default function ExalviaClientLogo({ data, secId }) {
  if (!data || !data.logos) return null;

  // Duplicate logos for smooth infinite loop
  const duplicatedLogos = [...data.logos, ...data.logos, ...data.logos];

  return (
    <section id={secId} className="py-12 bg-base-100 overflow-hidden">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6">
        {data.title && (
          <div className="text-center mb-10">
            <span className="text-[10px] md:text-xs font-bold text-primary tracking-[0.3em] uppercase font-montserrat opacity-60">{data.title}</span>
          </div>
        )}

        <div className="relative group">
          {/* Marquee Container */}
          <div className="flex w-full overflow-hidden">
            <div className="flex animate-marquee group-hover:pause gap-6">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-none w-40 md:w-56 h-28 md:h-32 bg-base-100 border border-base-300 rounded-xl flex items-center justify-center p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-sm"
                >
                  <div className="relative w-full h-full grayscale opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                    <Image src={logo.src} alt={logo.name} fill className="object-contain" sizes="(max-width: 768px) 160px, 224px" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Gradients (Fade effects) */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-base-100 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-base-100 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Embedded CSS for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .group-hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
