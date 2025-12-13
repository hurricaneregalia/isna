import React from "react";

export default function HalvoraHeadline({ text, className = "", ...props }) {
  return (
    <h1
      className={`text-4xl md:text-5xl font-bold text-base-content ${className}`}
      {...props}
    >
      {text}
    </h1>
  );
}
