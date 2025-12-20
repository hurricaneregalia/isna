import React from "react";

export default function ExalviaBodyText({ children, className = "" }) {
  return <p className={`font-montserrat text-base md:text-lg leading-relaxed opacity-80 ${className}`}>{children}</p>;
}
