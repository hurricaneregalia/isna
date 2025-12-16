import React from "react";
import HalvoraHeadline from "./ui/HalvoraHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";
import HalvoraPrimaryButton from "./ui/HalvoraPrimaryButton";
import { FaWhatsapp } from "react-icons/fa6";
import HalvoraSecondaryButton from "./ui/HalvoraSecondaryButton";
import HalvoraAccentButton from "./ui/HalvoraAccentButton";

export default function HalvoraCTA({ data, secId }) {
  const { title, subtitle, backgroundImage } = data.cta;

  return (
    <section
      id={secId}
      className="py-24 text-white text-center px-6 relative bg-cover bg-bottom-left"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#D48F8F]/90"></div>
      <div className="relative max-w-4xl mx-auto space-y-8 lg:w-8/12 w-full">
        <HalvoraHeadline text={title} className="text-white font-serif italic" />
        <HalvoraBodyText text={subtitle} className="text-white  text-xl font-light" />

        <HalvoraAccentButton className="btn-lg px-10">
          <FaWhatsapp className="text-2xl" />
          Pesan
        </HalvoraAccentButton>
      </div>
    </section>
  );
}
