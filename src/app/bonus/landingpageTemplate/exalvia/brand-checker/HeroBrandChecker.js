import Image from "next/image";
import React from "react";

export default function HeroBrandChecker({ secId, children, backgroundImage }) {
  return (
    <section id={secId} className="w-full bg-base-100 flex flex-col items-center p-4">
      <div className="relative w-full overflow-hidden rounded-4xl rounded-tr-none  sm:py-30 pt-30 pb-4 h-fullitems-center flex bg-neutral">
        <div className=" w-full mx-auto">
          <div className="absolute inset-0">
            <Image src={backgroundImage} alt="Exalvia Hero Brand Visual" fill priority className="object-cover" sizes="(max-width: 1536px) 100vw, 85vw" />
            {/* <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/60 to-transparent"></div> */}
            <div className="absolute inset-0 bg-primary/90"></div>
          </div>

          <div className="relative w-full flex items-center justify-center">
            <div className="lg:w-7/12 w-full flex items-start justify-center space-y-8 md:space-y-10">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
