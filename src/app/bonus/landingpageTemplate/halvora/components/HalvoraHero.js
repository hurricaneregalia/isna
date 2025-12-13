import React from "react";
import HalvoraHeadline from "./ui/HalvoraHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";
import HalvoraPrimaryButton from "./ui/HalvoraPrimaryButton";

export default function HalvoraHero({ data }) {
  const { title, subtitle, ctaText, backgroundImage } = data.hero;

  return (
    <div 
      id="home" 
      className="relative min-h-[85vh] flex items-center justify-center text-center px-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay: Deep Stone/Green */}
      <div className="absolute inset-0 bg-stone-900/40 z-0"></div>

      <div className="relative z-10 max-w-3xl space-y-6 text-white p-10 rounded-3xl backdrop-blur-md bg-stone-900/30 border border-white/20 shadow-2xl animate-in fade-in zoom-in duration-700">
        <HalvoraHeadline text={title} className="text-white drop-shadow-lg leading-tight font-serif italic" />
        <HalvoraBodyText text={subtitle} className="text-stone-100 text-lg md:text-xl font-light tracking-wide" />
        <div className="pt-6">
            <HalvoraPrimaryButton className="btn-lg px-10 bg-emerald-800 hover:bg-emerald-900 border-none text-white shadow-xl hover:shadow-emerald-900/30 hover:-translate-y-1">
                {ctaText}
            </HalvoraPrimaryButton>
        </div>
      </div>
    </div>
  );
}
