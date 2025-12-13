import React from "react";

export default function HalvoraBodyText({ text, className = "", ...props }) {
  return (
    <p
      className={`text-base text-base-content/80 leading-relaxed ${className}`}
      {...props}
    >
      {text}
    </p>
  );
}
