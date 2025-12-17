import React from "react";

export default function HalvoraSubHeadline({ text, className = "", ...props }) {
  return (
    <h3 className={`text-2xl md:text-3xl font-semibold font-serif ${className}`} {...props}>
      {text}
    </h3>
  );
}
