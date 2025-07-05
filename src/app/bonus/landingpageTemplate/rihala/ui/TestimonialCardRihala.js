import React from "react";
import Image from "next/image";
import TitleRihala from "./TitleRihala";
import BodyTextRihala from "./BodyTextRihala";

export default function TestimonialCardRihala({ name, role, photoSrc, testimonial, aos }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  return (
    <div className="bg-base-200 rounded-lg shadow-lg p-6 flex flex-col items-center text-center max-w-sm mx-auto transition-transform duration-300 hover:scale-105" {...aosFX}>
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 relative">
        <Image src={photoSrc} alt={`${name} photo`} fill sizes="80px" className="object-cover" priority={false} data-aos="zoom-in" />
      </div>
      <BodyTextRihala text={`“${testimonial}”`} />
      <h3 className="text-xl font-semibold text-base-content mb-2">{name}</h3>
      <p className="text-sm text-base-content/70 italic">{role}</p>
    </div>
  );
}
