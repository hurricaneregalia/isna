import React from "react";

export default function ExalviaBadge({ children, text, className = "" }) {
  return <span className={`text-xs md:text-sm font-bold text-primary tracking-[0.2em] mb-4 block uppercase font-montserrat ${className}`}>{children || text}</span>;
}
