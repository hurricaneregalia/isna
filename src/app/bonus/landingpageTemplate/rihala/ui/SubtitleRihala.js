import React from "react";

export default function SubtitleRihala({ text, aos }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  return (
    <h3 className="text-xl md:text-2xl font-semibold leading-snug text-base-content mb-3 transition-all duration-300 ease-in-out" {...aosFX}>
      {text}
    </h3>
  );
}
