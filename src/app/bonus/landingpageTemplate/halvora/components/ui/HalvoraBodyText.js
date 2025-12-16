import React from "react";

export default function HalvoraBodyText({ text, className = "", ...props }) {
  return (
    <p
      className={`text-base text-[#8B5E3C] leading-relaxed ${className}`}
      {...props}
    >
      {text}
    </p>
  );
}
