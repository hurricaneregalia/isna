import Image from "next/image";
import React from "react";

export default function ImageComponent({ imageUrl, imageAlt, width, height, priority, rounded }) {
  const roundedFX = rounded ? "" : "rounded-lg w-full";
  return <Image src={imageUrl} alt={imageAlt} width={width} height={height} priority={priority} quality={75} sizes="(max-width: 100%) 100vw, 50vw" className={roundedFX} />;
}
