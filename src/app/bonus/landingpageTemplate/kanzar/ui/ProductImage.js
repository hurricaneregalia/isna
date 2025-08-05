// components/ProductImage.js
import React from "react";
import Image from "next/image";

export default function ProductImage({ src, alt }) {
  return (
    <div className="mb-4 relative w-full aspect-square overflow-hidden rounded-lg">
      <Image src={src} alt={alt} fill className="object-cover rounded-lg" data-aos="fade-up" />
    </div>
  );
}
