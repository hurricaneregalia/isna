import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsappBtn({ waText, waBtnText, waNumber, forWa, btnCenter }) {
  const defaultWaText = "Kendala apa yang anda alami?";
  const waBtnTextFX = waBtnText ? waBtnText : "Contact support";
  const forWaFx = forWa
    ? forWa
    : "text-sm font-semibold border-amber-300 text-amber-300 bg-transparent hover:bg-green-500 hover:border-green-500 hover:text-green-50 ";
  const btnCenterFx = btnCenter ? btnCenter : "mx-auto";
  return (
    <Link
      href={`https://wa.me/${waNumber}?text=${waText ? waText : defaultWaText}`}
      className={`btn rounded-full w-fit ${forWaFx} ${btnCenterFx}`} // <--- tambahin w-fit di sini
    >
      <span aria-hidden="true" className="inline-flex items-center gap-2">
        <FaWhatsapp /> {waBtnTextFX}
      </span>
    </Link>
  );
}
