import React from "react";

export default function ExalviaHeadline({ children, className = "" }) {
  return <h2 className={`font-instrument-serif text-5xl font-semibold leading-tight text-base-content ${className}`}>{children}</h2>;
}
