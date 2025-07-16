// src/app/bonus/landingpageTemplate/mirka/ui/Heading.js
import React from "react";

export default function Heading({ children, disableAOS = false, h = 2 }) {
  const Tag = `h${h}`;

  return (
    <Tag className="text-4xl md:text-5xl font-extrabold mb-4 capitalize" {...(!disableAOS && { "data-aos": "fade-up" })}>
      {children}
    </Tag>
  );
}
