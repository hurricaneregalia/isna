import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import BtnLinkPrim from "./btnLinkPrim";

export default function HeroIma({
  title = "Bangun Bisnis Online Anda Lebih Cepat",
  description = "Landing page profesional yang siap meningkatkan penjualan Anda.",
  btnTxt = "Read More",
  bg = "/images/uploads/products/qolilan-copy/main.jpg",
}) {
  const btnFX = btnTxt ? <BtnLinkPrim btnTxt={btnTxt} btnUrl="#layanan" iconRight={<FaArrowRight />} animate={true} /> : "";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image src={bg} alt={title} fill priority={true} sizes="100vw" className="object-cover z-0" />
      <div className="absolute inset-0 bg-slate-900/80"></div>
      <div className="relative flex items-center justify-center text-neutral-content text-center min-h-screen">
        <div className="max-w-3xl px-4">
          <h1 className="mb-5 sm:text-5xl text-3xl font-bold">{title}</h1>
          <p className="mb-20 text-lg opacity-75">{description}</p>
          {btnFX}
        </div>
      </div>
    </div>
  );
}
