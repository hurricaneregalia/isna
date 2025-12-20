import React from "react";
import Link from "next/link";

export default function ExalviaLinkButton({ text, icon: Icon, href = "#", className = "", variant = "primary", onClick }) {
  const variantClass = variant === "primary" ? "btn-warning border-none shadow-none" : "btn-outline";

  return (
    <Link href={href} onClick={onClick} className={`btn rounded-sm transition-all duration-300 font-montserrat btn-md md:btn-lg ${variantClass} ${className}`}>
      {text}
      {Icon && <Icon className="text-xl" />}
    </Link>
  );
}
