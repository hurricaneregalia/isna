// src/app/bonus/landingpageTemplate/mirka/ui/Heading.js
import React from "react";

export default function Heading({ children, disableAOS = false, h = 2, textColor }) {
  const Tag = `h${h}`;
  const textColorFx = textColor ? textColor : "text-warning";

  return (
    <Tag className={`text-4xl md:text-5xl font-extrabold mb-4 capitalize ${textColorFx}`} {...(!disableAOS && { "data-aos": "fade-up" })}>
      {children}
    </Tag>
  );
}
