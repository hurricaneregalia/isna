import React from "react";
import Image from "next/image";

export default function ImageComponent({ src, alt, css, aos }) {
  const aosFx = aos ? {} : { "data-aos": "flip-left" };

  return (
    <div className={`relative w-full h-64 md:h-96 overflow-hidden shadow-md ${css}`} {...aosFx}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 700px" priority />
    </div>
  );
}
