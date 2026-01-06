import React from "react";

export default function ExalviaCard({ children, className = "", rounded = "rounded-full" }) {
  return <div className={`${rounded} rounded-tr-none transition-all border-3 border-base-content duration-300 font-montserrat ${className}`}>{children}</div>;
}
