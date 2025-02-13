import Image from "next/image";
import React from "react";

export default function ImageComponent({ imageUrl, imageAlt, width, height, priority }) {
  return <Image src={imageUrl} alt={imageAlt} width={width} height={height} priority={priority} quality={75} sizes="(max-width: 768px) 100vw, 50vw" className="rounded-lg w-full" />;
}
