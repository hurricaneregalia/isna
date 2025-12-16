import React from "react";

export default function HalvoraHeadline({ text, className = "", ...props }) {
  return (
    <h2 className={`text-4xl md:text-5xl font-bold text-[#6B4423] font-serif leading-tight ${className}`}>
      {text}
    </h2>
  );
}
