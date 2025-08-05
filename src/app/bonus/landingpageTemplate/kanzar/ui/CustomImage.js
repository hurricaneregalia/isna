// components/CustomImage.js
import React from "react";
import Image from "next/image";

export default function CustomImage({ src, alt }) {
  return (
    <div className="relative w-full h-full aspect-[3/2]">
      <Image src={src} alt={alt} fill className="rounded-xl object-cover shadow-md" />
    </div>
  );
}
