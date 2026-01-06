import React from "react";
import Image from "next/image";

export default function ExalviaImage({ src, alt, className = "", containerClassName = "", followWrapper = false, priority = false }) {
  return (
    <div className={`relative w-full overflow-visible group hover:scale-105 transition-transform duration-300 ${containerClassName}`}>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        priority={priority}
        style={{ width: "100%", height: "auto" }}
        className={`transition-transform duration-300 group-hover:scale-105 ${className}`}
      />
    </div>
  );
}
