import React from "react";

export default function ExalviaCard({ children, className = "" }) {
  return <div className={` rounded-bl-4xl transition-all border-3 border-base-content duration-300 font-montserrat ${className}`}>{children}</div>;
}
