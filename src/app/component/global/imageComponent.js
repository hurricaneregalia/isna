import Image from "next/image";
import React from "react";

export default function ImageComponent({ src, alt, width, height, priority }) {
  return <Image src={src} alt={alt} width={width} height={height} priority={priority} className="rounded-lg w-full" />;
}
