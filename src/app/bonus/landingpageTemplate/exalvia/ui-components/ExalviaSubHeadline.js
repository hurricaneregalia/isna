import React from "react";

export default function ExalviaSubHeadline({ children, text, className = "" }) {
  return <h3 className={`font-montserrat sm:text-xl text-sm font-normal text-base-content ${className}`}>{children || text}</h3>;
}
