import React from "react";
import BtnLinkPrimary from "../global/btnLinkPrimary";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero({ title, description, btnTxt, bg }) {
  const btnFX = btnTxt ? <BtnLinkPrimary btnTxt={btnTxt} href="#layanan" iconRight={<FaArrowRight />} animate={true} /> : "";
  return (
    <div className={`${bg} hero min-h-screen rounded-bl-3xl overflow-hidden`}>
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-20">{description}</p>
          {btnFX}
        </div>
      </div>
    </div>
  );
}
