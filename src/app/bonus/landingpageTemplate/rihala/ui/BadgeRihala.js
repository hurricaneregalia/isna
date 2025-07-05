import React from "react";

export default function BadgeRihala({ text, color = "primary", aos }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-${color}-light text-${color}-dark`} {...aosFX}>
      {text}
    </span>
  );
}
