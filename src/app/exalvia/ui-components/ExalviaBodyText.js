import React from "react";

export default function ExalviaBodyText({ children, text, className = "", textColor = "text-base-content/80" }) {
  return <p className={`font-montserrat ${textColor} md:text-lg leading-relaxed ${className}`}>{children || text}</p>;
}
