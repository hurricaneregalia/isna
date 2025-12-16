import React from "react";
import HalvoraHeadline from "./ui/HalvoraHeadline";
import HalvoraCountdown from "./ui/HalvoraCountdown";
import HalvoraAccentButton from "./ui/HalvoraAccentButton";
import HalvoraImage from "./ui/HalvoraImage";

export default function HalvoraBonus({ data, secId }) {
  const { title, offerTitle, description, icon, image, buttonText, targetDate } = data.bonus;

  return (
    <section id={secId} className="py-20 bg-gradient-to-r from-[#D48F8F] to-[#d69e9e] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative lg:w-8/12 w-full">
        <div className="flex flex-col sm:flex-row sm:py-25 py-10 items-center justify-between gap-12 bg-[#6B4423]/5 p-10 rounded-[2.5rem] border border-white/30 shadow-2xl ring-1 ring-white/20">
          {/* Left Side: Content & Countdown */}
          <div className="w-full space-y-8">
            <div className=" grid sm:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white text-[#D48F8F] rounded-full shadow-lg">{icon}</div>
                  <span className="bg-[#6B4423]/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#FFF5EA] inline-block border border-white/20">{title}</span>
                </div>

                <div>
                  <HalvoraHeadline text={offerTitle} className="text-white text-4xl md:text-5xl leading-tight font-serif drop-shadow-sm" />
                  <p className="text-[#FFF0F0] text-xl mt-4 leading-relaxed font-light opacity-90">{description}</p>
                </div>
              </div>
              {/* Right Side: Bonus Image */}
              <div className="w-full flex justify-center">
                <div className="relative group mt-10 sm:mt-0">
                  <div className="absolute inset-0 bg-white/20 rounded-3xl transform rotate-6 transition-transform group-hover:rotate-12 duration-500"></div>
                  <HalvoraImage
                    src={image}
                    alt="Bonus Gift"
                    className="relative rounded-3xl shadow-2xl border-4 border-white/30 w-full max-w-sm object-cover aspect-square hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="pt-6 grid lg:grid-cols-2 grid-cols-1 justify-between items-end">
              <div className=" lg:w-6/12 w-full">
                <p className="text-[#FFE4E1] text-sm mb-4 lg:text-start text-center  font-semibold uppercase tracking-widest">Promo Berakhir Dalam:</p>
                <HalvoraCountdown targetDate={targetDate} className="text-[#6B4423] lg:justify-start justify-center" />
              </div>
              <div className="w-full items-center flex justify-center lg:mt-0 mt-10">
                <HalvoraAccentButton className="btn-lg w-full md:w-auto px-12 font-bold">Klaim Bonus</HalvoraAccentButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
