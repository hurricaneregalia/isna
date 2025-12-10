import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function KanzarCTA({ onOrder, secId = "calltoaction", data }) {
  const { title, subtitle, buttonText, backgroundImage } = data.cta;

  return (
    <section id={secId} className="relative py-32 flex items-center justify-center min-h-[600px]">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className="absolute inset-0 bg-slate-800/90" />

      <div className="container mx-auto px-6 sm:w-8/12 w-full relative text-center">
        <div data-aos="zoom-in">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">{title}</h2>
          <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto">{subtitle}</p>

          <button onClick={onOrder} className="btn btn-lg btn-warning group font-bold tracking-widest transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto">
            <FaWhatsapp className="w-6 h-6" />
            <span>{buttonText}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
