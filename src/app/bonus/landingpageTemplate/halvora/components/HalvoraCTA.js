import React from "react";
import HalvoraHeadline from "./ui/HalvoraHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";
import HalvoraPrimaryButton from "./ui/HalvoraPrimaryButton";
import { FaWhatsapp } from "react-icons/fa6";

export default function HalvoraCTA({ data }) {
  const { title, subtitle, buttonText } = data.cta;

  return (
    <section className="py-24 bg-[#1a1c1a] text-white text-center px-6 border-b border-stone-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <HalvoraHeadline text={title} className="text-white font-serif italic" />
        <HalvoraBodyText text={subtitle} className="text-stone-400 text-xl font-light" />
        
        <HalvoraPrimaryButton className="btn-lg gap-3 bg-emerald-600 hover:bg-emerald-500 border-none text-white shadow-xl hover:shadow-emerald-500/20 hover:scale-105 transform transition-all rounded-full px-12">
            <FaWhatsapp className="text-2xl" />
            {buttonText}
        </HalvoraPrimaryButton>
        
        <p className="text-xs text-stone-600 mt-8 tracking-wider uppercase">
            *Promo berlaku selama persediaan masih ada
        </p>
      </div>
    </section>
  );
}
