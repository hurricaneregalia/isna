import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsappBtn({ waText, waBtnText, waNumber }) {
  const defaultWaText = "Kendala apa yang anda alami?";
  return (
    <Link
      href={`https://wa.me/${waNumber}?text=${waText ? waText : defaultWaText}`}
      className="text-sm font-semibold btn border-amber-300 text-amber-300 bg-transparent hover:bg-green-500 hover:border-green-500 hover:text-green-50 rounded-full"
    >
      <FaWhatsapp /> Contact support
      <span aria-hidden="true"></span>
    </Link>
  );
}
