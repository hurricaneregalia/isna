import React from "react";

export default function ExalviaHeadline({ children, text, className = "" }) {
  return <h2 className={`font-instrument-serif text-5xl font-semibold leading-tight text-base-content ${className}`}>{children || text}</h2>;
}
