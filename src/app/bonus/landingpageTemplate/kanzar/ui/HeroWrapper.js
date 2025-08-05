import Image from "next/image";
import React from "react";

export function HeroWrapper({ children, src }) {
  return (
    <section className="relative min-h-screen flex items-end lg:pb-10 pb-5">
      <div className="bg-slate-900/90 absolute top-0 bottom-0 z-10 object-contain w-full h-full" />
      <Image src={src} alt="hero image" fill className="object-cover absolute" />
      {children}
    </section>
  );
}
