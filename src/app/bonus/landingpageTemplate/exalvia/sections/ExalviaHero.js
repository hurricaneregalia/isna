import React from "react";
import Image from "next/image";
import ExalviaHeadline from "../ui-components/ExalviaHeadline";
import ExalviaSubHeadline from "../ui-components/ExalviaSubHeadline";
import ExalviaLinkButton from "../ui-components/ExalviaLinkButton";
import { FaArrowRight } from "react-icons/fa";
import ExalviaHeadlineH1 from "../ui-components/ExalviaHeadlineH1";

export default function ExalviaHero({ data, secId, linkTarget = "" }) {
  return (
    <section id={secId} className="w-full bg-base-100 flex min-h-screen flex-col items-center p-5">
      {/* 
         Main Container based on Spec:
         - Width: sm:w-10/12 w-full
      */}
      <div className="relative w-full overflow-hidden rounded-bl-4xl min-h-screen items-center flex bg-neutral">
        <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto">
          {/* 1. Background Layer (NO BLUR) */}
          <div className="absolute inset-0">
            <Image src={data?.backgroundImage} alt="Exalvia Hero Brand Visual" fill priority className="object-cover" sizes="(max-width: 1536px) 100vw, 85vw" />
            {/* 
              Deep Graduate Overlay: 
              - Darker on the left for text readability
              - Transparent on the right to show the background subject
          */}
            <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/60 to-transparent"></div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* 2. Content Layer (Left Aligned Spec) */}
          <div className="relative w-full flex items-center px-6 md:px-16 lg:px-24 py-32">
            <div className="max-w-3xl flex flex-col items-start space-y-8 md:space-y-10">
              {/* Headline (Instrument Serif) */}
              <ExalviaHeadlineH1 className="text-white text-4xl md:text-5xl lg:text-6xl">{data?.headline}</ExalviaHeadlineH1>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <ExalviaLinkButton text="Lihat Lebih Lanjut" href={`#${linkTarget}`} icon={FaArrowRight} className="hover:scale-105 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
