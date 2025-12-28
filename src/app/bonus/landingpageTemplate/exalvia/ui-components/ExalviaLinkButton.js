import React from "react";
import Link from "next/link";

export default function ExalviaLinkButton({ text, icon: Icon, href = "#", className = "btn-warning", onClick }) {
  return (
    <Link href={href} onClick={onClick} className={`btn transition-all duration-300 shadow-none ${className}`}>
      {text}
      {Icon && <Icon className="text-xl" />}
    </Link>
  );
}
