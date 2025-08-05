import React from "react";

export default function LinkBtnOutlineWhatsapp({ phoneNumber, message = "", linkText = "Kirim WhatsApp", icon, css, btnSm }) {
  const className = "btn btn-outline btn-warning rounded-full capitalize shadow-none flex gap-2";
  const btnSmFx = btnSm ? "" : " btn-lg ";
  // Encode pesan dan buat link WhatsApp
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a href={href} className={className + btnSmFx + css} rel="noopener noreferrer">
      {linkText} {icon}
    </a>
  );
}
