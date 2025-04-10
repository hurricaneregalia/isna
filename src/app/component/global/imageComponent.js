import Image from "next/image";
import React from "react";

export default function ImageComponent({ imageUrl, imageAlt, width, height, priority, rounded, cssStyle }) {
  const roundedFX = rounded ? "" : "rounded-lg w-full";
  const widthFx = width === null ? "auto" : width;
  const heightFx = height === null ? "auto" : height;

  return (
    <Image
      src={imageUrl}
      alt={imageAlt}
      width={0}
      height={0}
      priority={priority}
      sizes="(max-width: 100%) 100vw, 50vw"
      style={{ width: widthFx, height: heightFx }}
      className={`${roundedFX} ${cssStyle ? cssStyle : null}`}
    />
  );
}
