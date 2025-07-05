import React from "react";

export default function TitleRihala({ text, aos }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  return (
    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-4 text-base-content transition-colors duration-300 ease-in-out" {...aosFX}>
      {text}
    </h2>
  );
}
