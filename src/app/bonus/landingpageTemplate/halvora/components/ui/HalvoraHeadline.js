import React from "react";

export default function HalvoraHeadline({ text, className = "" }) {
  return <h2 className={`text-4xl md:text-5xl font-bold font-serif leading-tight ${className}`}>{text}</h2>;
}
