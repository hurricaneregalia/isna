import React from "react";

export default function ExalviaBodyText({ children, text, className = "" }) {
  return <p className={`font-montserrat text-base-content/80 md:text-lg leading-relaxed ${className}`}>{children || text}</p>;
}
