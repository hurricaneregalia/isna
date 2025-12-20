import React from "react";

export default function ExalviaCard({ children, className = "" }) {
  return <div className={`bg-base-100 p-6 md:p-8 rounded-xl border border-base-300 transition-all duration-300 hover:border-primary/30 shadow-none font-montserrat ${className}`}>{children}</div>;
}
