import React from "react";

export default function HalvoraSubHeadline({ text, className = "", ...props }) {
  return (
    <h3
      className={`text-2xl md:text-3xl font-semibold text-[#8B5E3C] font-serif ${className}`}
      {...props}
    >
      {text}
    </h3>
  );
}
