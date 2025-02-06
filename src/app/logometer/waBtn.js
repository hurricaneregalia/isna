import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function WaBtn({ brandName, btnTxt, children }) {
  const openingText = "Saya ingin memperbaiki logo " + brandName + ". Berikut adalah penilaian terhadap berbagai aspek dari logo tersebut: ";
  const waNumber = "6282127902505";
  return (
    <a
      href={`https://wa.me/${waNumber}?text=${openingText} ${encodeURIComponent(children)}.`} // Ganti dengan nomor WhatsApp yang diinginkan
      className="btn btn-success gap-2 text-green-50 rounded-full"
    >
      <FaWhatsapp className="text-xl" />
      {btnTxt}
    </a>
  );
}
