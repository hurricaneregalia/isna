import React from "react";
import HalvoraHeadline from "./ui/HalvoraHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";
import { FaWhatsapp } from "react-icons/fa6";
import HalvoraAccentLinkButton from "./ui/HalvoraAccentLinkButton";

export default function HalvoraCTA({ data, secId, target }) {
  const { title, subtitle, backgroundImage } = data.cta;

  return (
    <section
      id={secId}
      className="py-24 text-white text-center px-6 relative bg-cover bg-left-bottom"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-primary/90"></div>
      <div className="relative max-w-4xl mx-auto space-y-8 lg:w-8/12 w-full">
        <HalvoraHeadline text={title} className="text-primary-content font-serif italic" />
        <HalvoraBodyText text={subtitle} className="text-primary-content  text-xl font-light" />
        <HalvoraAccentLinkButton href={target} className="btn-lg px-10">
          <FaWhatsapp className="text-2xl" />
          Pesan
        </HalvoraAccentLinkButton>
      </div>
    </section>
  );
}
