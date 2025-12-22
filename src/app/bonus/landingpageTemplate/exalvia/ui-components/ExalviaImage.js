import React from "react";
import Image from "next/image";

export default function ExalviaImage({ src, alt, className = "", containerClassName = "", followWrapper = false }) {
  return (
    <div className={followWrapper ? `relative overflow-hidden ${containerClassName}` : `relative w-full aspect-video md:aspect-square overflow-hidden rounded-lg shadow-sm ${containerClassName}`}>
      <Image src={src} alt={alt} fill className={`object-cover ${className}`} sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
  );
}
