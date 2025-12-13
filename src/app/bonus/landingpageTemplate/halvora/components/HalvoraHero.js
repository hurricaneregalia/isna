import React from "react";
import HalvoraHeadline from "./ui/HalvoraHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";
import HalvoraPrimaryButton from "./ui/HalvoraPrimaryButton";

export default function HalvoraHero({ data }) {
  const { title, subtitle, ctaText, backgroundImage } = data.hero;

  return (
    <div 
      id="home" 
      className="relative min-h-[80vh] flex items-center justify-center text-center px-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 max-w-3xl space-y-6 text-white p-8 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 shadow-2xl">
        <HalvoraHeadline text={title} className="text-white drop-shadow-md leading-tight" />
        <HalvoraBodyText text={subtitle} className="text-gray-100 text-lg md:text-xl" />
        <div className="pt-4">
            <HalvoraPrimaryButton className="btn-lg px-8 border-none bg-primary hover:bg-primary/90 text-primary-content shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1">
                {ctaText}
            </HalvoraPrimaryButton>
        </div>
      </div>
    </div>
  );
}
