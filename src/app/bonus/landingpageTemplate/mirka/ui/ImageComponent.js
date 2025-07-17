import React from "react";
import Image from "next/image";

export default function ImageComponent({ src, alt, css, aos, border }) {
  const aosFx = aos ? {} : { "data-aos": "flip-left" };
  const borderFx = border ? "" : "border-8 border-slate-100";

  return (
    <div className={`card relative w-full h-64 md:h-96 overflow-hidden shadow-lg ${borderFx} ${css}`} {...aosFx}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 700px" priority />
    </div>
  );
}
