import React from "react";

export default function ExalviaHeadlineH1({ children, text, className = "" }) {
  return <h1 className={`font-instrument-serif font-semibold leading-tight text-base-content ${className}`}>{children || text}</h1>;
}
