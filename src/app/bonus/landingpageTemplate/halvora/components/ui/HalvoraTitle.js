import React from "react";

export default function HalvoraTitle({ text, className = "", ...props }) {
  return (
    <h3
      className={`text-xl font-bold uppercase tracking-wide text-primary ${className}`}
      {...props}
    >
      {text}
    </h3>
  );
}
