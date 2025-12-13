import React from "react";
import { Gift, Sparkles } from "lucide-react";
import Image from "next/image";
import KanzarCountDown from "./KanzarCountdown";

export default function KanzarBonus({ onOrder, secId = "bonus", data }) {
  const { title, subtitle, offer, description, buttonText, images, ornament } = data.bonus;

  return (
    <section id={secId} className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Hanging Lantern (Fanoos) Ornament */}
      <div className="absolute top-0 right-10 origin-top swing z-1">
        <Image src={ornament} alt="ornament" width={50} height={262.033} className="w-[25px] lg:w-[50px] h-auto" />
      </div>
      <div className="absolute top-0 left-10 origin-top swing z-1">
        <Image src={ornament} alt="ornament" width={50} height={262.033} className="w-[25px] lg:w-[50px] h-auto" />
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="space-y-10 bg-gradient-to-br from-white/5 to-white/0 border border-warning/20 card p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="w-full">
            {/* Menggunakan Grid untuk menampilkan semua gambar (Looping dengan .map) */}
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative w-full aspect-[16/9] card overflow-hidden group border border-white/10 shadow-lg" data-aos="fade-up" data-aos-delay={index * 150}>
                  <Image
                    src={image}
                    alt={`Bonus Image ${index + 1}`}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-all duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay gradient tipis agar terlihat lebih menyatu */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 sm:w-9/12 text-center lg:text-left" data-aos="fade-right">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Sparkles className="text-warning w-5 h-5 animate-pulse" />
                <span className="text-warning font-bold tracking-[0.2em] text-sm uppercase">{title}</span>
                <Sparkles className="text-warning w-5 h-5 animate-pulse" />
              </div>

              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">{offer}</span>
              </h2>
              <p className="text-slate-300 text-lg mb-2 italic">{subtitle}</p>
              <p className="text-slate-400 leading-relaxed">{description}</p>
            </div>

            {/* Right Content: Countdown & Action */}
            <div className="lg:w-1/2">
              <div className="w-fit flex flex-col lg:justify-between items-center gap-10 float-right">
                <div className="bg-slate-950/50 p-8 card border border-yellow-500/30 text-center w-full max-w-md" data-aos="fade-up">
                  <p className="text-slate-400 text-sm uppercase tracking-widest mb-6">Promo Berakhir Dalam</p>
                  <KanzarCountDown />
                </div>

                <button onClick={onOrder} className="btn card btn-lg btn-accent font-bold transition-all duration-300 shadow-lg shadow-accent/20 group">
                  <span className="items-center gap-3 flex justify-center">
                    <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    {buttonText}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
