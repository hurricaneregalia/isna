import React from "react";
import HalvoraHeadline from "./ui/HalvoraHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";
import HalvoraPrimaryButton from "./ui/HalvoraPrimaryButton";
import { FaWhatsapp } from "react-icons/fa6";

export default function HalvoraCTA({ data }) {
  const { title, subtitle, buttonText } = data.cta;

  return (
    <section className="py-24 bg-neutral-900 text-white text-center px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <HalvoraHeadline text={title} className="text-white" />
        <HalvoraBodyText text={subtitle} className="text-gray-300 text-xl" />
        
        <HalvoraPrimaryButton className="btn-lg gap-3 bg-[#25D366] hover:bg-[#128C7E] border-none text-white shadow-lg hover:scale-105 transform transition-all">
            <FaWhatsapp className="text-2xl" />
            {buttonText}
        </HalvoraPrimaryButton>
        
        <p className="text-xs text-gray-500 mt-6">
            *Promo berlaku selama persediaan masih ada.
        </p>
      </div>
    </section>
  );
}
