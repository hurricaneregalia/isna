import React from "react";
import BtnLinkPrimary from "../global/btnLinkPrimary";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

export default function Hero({ title, description, btnTxt, bg }) {
  const btnFX = btnTxt ? <BtnLinkPrimary btnTxt={btnTxt} btnUrl="#layanan" iconRight={<FaArrowRight />} animate={true} /> : "";

  return (
    <div className="relative min-h-screen rounded-bl-3xl overflow-hidden">
      {/* ✅ Ganti background dengan <Image /> */}
      <Image src={bg} alt={title} fill priority={true} className="object-cover z-0" />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-slate-900/80 z-10"></div>

      {/* ✅ Konten */}
      <div className="relative z-20 flex items-center justify-center text-neutral-content text-center min-h-screen">
        <div className="max-w-3xl px-4">
          <h1 className="mb-5 sm:text-5xl text-3xl font-bold">{title}</h1>
          <p className="mb-20 text-lg">{description}</p>
          {btnFX}
        </div>
      </div>
    </div>
  );
}
