import Image from "next/image";
import React from "react";

const KanzarAbout = ({ secId = "about", data }) => {
  const { title, heading, description, features, image } = data.about;
  return (
    <section id={secId} className="py-24 bg-base-100 overflow-hidden transition-colors duration-300 relative">
      <div className="container mx-auto px-6 relative pt-10">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-16">
          {/* Text Content */}
          <div className="" data-aos="fade-right">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">{title}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-base-content mb-8 leading-tight">{heading}</h2>
            <div className="space-y-6 text-base-content/80 text-lg leading-relaxed mb-10">
              {description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={feature.id}
                  className="flex items-start gap-4 p-4 border border-base-300 card hover:border-warning/20 transition-colors bg-base-100/50"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="p-3 bg-warning/10 rounded-tr-xl rounded-bl-xl shrink-0 border border-warning/20 text-warning">{feature.icon}</div>
                  <div>
                    <h4 className="font-serif font-bold text-base-content text-lg mb-1">{feature.title}</h4>
                    <p className="text-base-content/60">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-8/12 w-full mx-auto" data-aos="flip-left">
            <div className="relative rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl border-4 border-warning/10 aspect-[2/3] group bg-slate-200">
              <Image
                src={image}
                alt="Premium Dates"
                fill
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay Border Decoration */}
              <div className="absolute inset-0 border-[12px] border-white/10 rounded-t-full rounded-b-2xl pointer-events-none"></div>

              {/* Islamic Corner Flourish (Top Right) */}
              <div className="absolute top-4 right-4 w-16 h-16 pointer-events-none opacity-80 text-warning/40">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M100,0 L100,60 Q100,90 70,90 Q40,90 40,60 M100,0 L40,0 Q10,0 10,30 Q10,60 40,60" />
                  <circle cx="25" cy="25" r="5" fill="currentColor" />
                </svg>
              </div>
              {/* Islamic Corner Flourish (Bottom Left) */}
              <div className="absolute bottom-4 left-4 w-16 h-16 pointer-events-none opacity-80 text-warning/40 rotate-180">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M100,0 L100,60 Q100,90 70,90 Q40,90 40,60 M100,0 L40,0 Q10,0 10,30 Q10,60 40,60" />
                  <circle cx="25" cy="25" r="5" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KanzarAbout;
