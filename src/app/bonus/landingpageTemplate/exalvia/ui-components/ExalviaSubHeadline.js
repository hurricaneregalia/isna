import React from "react";

export default function ExalviaSubHeadline({ children, className = "" }) {
  return <p className={`font-montserrat text-lg md:text-xl opacity-90 font-medium ${className}`}>{children}</p>;
}
