import React from "react";
import Image from "next/image";

export default function ExalviaImage({ src, alt, className = "", containerClassName = "", followWrapper = false, aspectRatio = "aspect-3/4" }) {
  return (
    <div
      className={
        followWrapper
          ? `relative overflow-visible bg-red-500 group hover:scale-105 transition-transform duration-300 ${containerClassName}`
          : `relative w-full ${aspectRatio} overflow-visible group hover:scale-105 transition-transform duration-300 ${containerClassName}`
      }
    >
      <Image src={src} alt={alt} fill className={`object-contain transition-transform duration-300 group-hover:scale-105 ${className}`} sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
  );
}
