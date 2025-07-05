import React from "react";
import Image from "next/image";

export default function FeatureCardRihala({ title, description, iconSrc, alt, aos }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  return (
    <div className="bg-base-200 rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105" {...aosFX}>
      {iconSrc && (
        <div className="mb-4 w-16 h-16 relative">
          <Image src={iconSrc} alt={alt || title} fill sizes="64px" className="object-contain" priority={false} data-aos="zoom-in" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-base-content mb-2">{title}</h3>
      <p className="text-base-content/80">{description}</p>
    </div>
  );
}
