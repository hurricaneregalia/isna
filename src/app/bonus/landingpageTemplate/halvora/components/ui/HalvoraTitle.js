import React from "react";

export default function HalvoraTitle({ text, className = "", ...props }) {
  return (
    <h4 className={`text-sm md:text-base font-bold uppercase tracking-widest text-primary mb-2 ${className}`} {...props}>
      {text}
    </h4>
  );
}
