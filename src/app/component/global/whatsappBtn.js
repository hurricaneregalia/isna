import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsappBtn({ waText, waBtnText, waNumber, forWa, btnCenter, isInternalLink }) {
  const defaultWaText = "Kendala apa yang anda alami?";
  const waBtnTextFX = waBtnText || "Contact support";
  const forWaFx =
    forWa || "text-sm font-semibold border-amber-300 text-amber-300 bg-transparent hover:bg-green-500 hover:border-green-500 hover:text-green-50 ";
  const btnCenterFx = btnCenter ? btnCenter : "mx-auto";

  const encodedText = encodeURIComponent(waText ? waText : defaultWaText);

  const button = (
    <span aria-hidden="true" className="inline-flex items-center gap-2">
      <FaWhatsapp /> {waBtnTextFX}
    </span>
  );

  return isInternalLink ? (
    <Link href={waText} className={`btn rounded-full w-fit ${forWaFx} ${btnCenterFx}`}>
      {button}
    </Link>
  ) : (
    <a
      href={`https://wa.me/${waNumber}?text=${encodedText}`}
      className={`btn rounded-full w-fit ${forWaFx} ${btnCenterFx}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {button}
    </a>
  );
}
