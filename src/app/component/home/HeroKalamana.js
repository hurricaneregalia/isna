import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import LinkBtnPrimary from "./ui/LinkBtnPrimary";

export default function HeroKalamana({ btnTxt, data }) {
  const btnFX = btnTxt ? <LinkBtnPrimary linkText={btnTxt} css="w-fit mx-auto" href="#layanan" icon={<FaArrowRight />} /> : "";

  return (
    <div className="relative min-h-screen rounded-bl-3xl overflow-hidden">
      <Image src={data.background} alt={data.title} fill priority={true} sizes="100vw" className="object-cover z-0" />
      <div className="absolute inset-0 bg-slate-900/80"></div>
      <div className="relative flex items-center justify-center text-neutral-content text-center min-h-screen">
        <div className="max-w-3xl px-4">
          <h1 className="mb-5 sm:text-5xl text-3xl font-bold">{data.title}</h1>
          <p className="mb-20 text-lg opacity-75">{data.description}</p>
          {btnFX}
        </div>
      </div>
    </div>
  );
}
