import React from "react";
import Image from "next/image";

export default function IconWithTextRihala({ iconSrc, alt, text, aos }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  return (
    <div className="flex items-center space-x-3" {...aosFX}>
      {iconSrc && (
        <div className="w-8 h-8 relative flex-shrink-0">
          <Image src={iconSrc} alt={alt || "icon"} fill sizes="32px" className="object-contain" priority={false} data-aos="zoom-in" />
        </div>
      )}
      <p className="text-base text-base-content">{text}</p>
    </div>
  );
}
