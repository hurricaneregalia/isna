import React from "react";
import Image from "next/image";

export default function ProductCardRihala({ name, description, price, imageSrc, alt, aos }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  return (
    <div className="bg-base-200 rounded-lg shadow-md p-5 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105" {...aosFX}>
      <div className="w-full h-48 relative mb-4 overflow-hidden rounded-md">
        <Image src={imageSrc} alt={alt || name} fill sizes="100%" className="object-cover transition-transform duration-500 hover:scale-105" priority={false} />
      </div>
      <h3 className="text-xl font-semibold text-base-content mb-2">{name}</h3>
      <p className="text-base text-base-content/80 mb-3">{description}</p>
      <p className="text-lg font-bold text-primary">Rp {price.toLocaleString("id-ID")}</p>
    </div>
  );
}
