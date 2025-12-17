import React from "react";

export default function HalvoraBodyText({ text, className = "", ...props }) {
  return (
    <p className={`leading-relaxed ${className}`} {...props}>
      {text}
    </p>
  );
}
