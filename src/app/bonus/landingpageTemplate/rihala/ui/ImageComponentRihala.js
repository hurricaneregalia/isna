import Image from "next/image";
import React from "react";

export default function ImageComponentRihala({ src, alt, width, height, aos }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105" {...aosFX}>
      <Image src={src} alt={alt} width={width} height={height} className="object-cover w-full h-full" />
    </div>
  );
}
