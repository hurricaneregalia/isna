import React from "react";

export default function HalvoraBodyText({ text, className = "", ...props }) {
  return (
    <p
      className={`text-base text-stone-600 leading-relaxed ${className}`}
      {...props}
    >
      {text}
    </p>
  );
}
