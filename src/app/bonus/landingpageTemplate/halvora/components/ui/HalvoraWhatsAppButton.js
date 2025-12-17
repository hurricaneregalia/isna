import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import HalvoraAccentButton from "./HalvoraAccentButton";

export default function HalvoraWhatsAppButton({ phoneNumber, message, children, onValidate, className, ...props }) {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();

    if (onValidate) {
      const isValid = onValidate();
      if (!isValid) return;
    }

    const cleanPhone = phoneNumber.replace(/\D/g, ""); // Remove non-digits
    // Ensure ID formatting (62) if starts with 0
    const formattedPhone = cleanPhone.startsWith("0") ? "62" + cleanPhone.slice(1) : cleanPhone;
    
    const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <HalvoraAccentButton onClick={handleWhatsAppClick} className={className} {...props}>
      {children || (
        <>
          <FaWhatsapp className="text-xl" />
          Pesan Sekarang
        </>
      )}
    </HalvoraAccentButton>
  );
}
