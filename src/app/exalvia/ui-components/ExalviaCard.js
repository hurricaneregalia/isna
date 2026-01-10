import React from "react";

export default function ExalviaCard({ children, className = "", rounded = "rounded-full", bg = "bg-base-200" }) {
  return <div className={`${rounded} rounded-tr-none transition-all ${bg} duration-300 font-montserrat ${className}`}>{children}</div>;
}
