import Image from "next/image";
import React from "react";

export default function WrapperImage({ children, src, alt, roundedBrand = "rounded-bl-3xl", secId }) {
  return (
    <section className={`relative w-full overflow-hidden ${roundedBrand}`} {...(secId ? { id: secId } : {})}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 66.66vw, 100vw" className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="relative lg:w-8/12 w-full mx-auto sm:p-15 p-5 py-15">{children}</div>
    </section>
  );
}
