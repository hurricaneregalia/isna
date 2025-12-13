import React from "react";

export default function HalvoraSubHeadline({ text, className = "", ...props }) {
  return (
    <h2
      className={`text-2xl md:text-3xl font-semibold text-base-content/90 ${className}`}
      {...props}
    >
      {text}
    </h2>
  );
}
