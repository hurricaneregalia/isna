import React from "react";

export default function ExalviaSubHeadline({ children, text, className = "" }) {
  return <h3 className={`font-montserrat text-xl md:text-2xl font-semibold text-base-content ${className}`}>{children || text}</h3>;
}
