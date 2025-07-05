import React from "react";

export default function BodyTextRihala({ text, aos }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  return (
    <p className="text-base md:text-lg text-base-content/80 leading-relaxed mb-4 transition-all duration-300 ease-in-out" {...aosFX}>
      {text}
    </p>
  );
}
