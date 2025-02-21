import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsappBtn({ waText, waBtnText, waNumber }) {
  const defaultWaText = "Kendala apa yang anda alami?";
  return (
    <Link href={`https://wa.me/${waNumber}?text=${waText ? waText : defaultWaText}`} className="text-sm font-semibold btn btn-outline btn-primary">
      <FaWhatsapp /> Contact support
      <span aria-hidden="true"></span>
    </Link>
  );
}
