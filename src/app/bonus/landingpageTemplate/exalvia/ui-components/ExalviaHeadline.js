import React from "react";

export default function ExalviaHeadline({ children, text, className = "" }) {
  return <h2 className={`font-instrument-serif sm:text-5xl font-semibold leading-tight ${className}`}>{children || text}</h2>;
}
