import React from "react";
import Image from "next/image";
import ExalviaHeadline from "../ui-components/ExalviaHeadline";
import ExalviaSubHeadline from "../ui-components/ExalviaSubHeadline";
import ExalviaLinkButton from "../ui-components/ExalviaLinkButton";
import { FaArrowRight } from "react-icons/fa";
import ExalviaHeadlineH1 from "../ui-components/ExalviaHeadlineH1";
import ExalviaImage from "../ui-components/ExalviaImage";

export default function ExalviaHero({ data, secId, linkTarget = "" }) {
  return (
    <section id={secId} className="w-full bg-base-100 flex min-h-screen flex-col items-center sm:p-4 p-2">
      <div className="relative w-full overflow-hidden rounded-bl-4xl min-h-screen items-center flex bg-neutral">
        <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto">
          <div className="absolute inset-0">
            <Image src={data?.backgroundImage} alt="Exalvia Hero Brand Visual" fill priority className="object-cover" sizes="(max-width: 1536px) 100vw, 85vw" />
            <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/60 to-transparent"></div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          <div className="relative w-full flex items-center px-6 md:px-16 lg:px-24 py-32 lg:flex-row flex-col gap-15">
            <div className="lg:w-6/12 w-full flex flex-col items-start space-y-8 md:space-y-10">
              <ExalviaHeadlineH1 className="text-white text-4xl md:text-5xl lg:text-6xl lg:text-start text-center ">{data?.headline}</ExalviaHeadlineH1>
              <p className="text-white/70 text-xl lg:text-start text-center w-full"># {data?.subheadline}</p>
              <div className="flex flex-col sm:flex-row gap-5 pt-4 sm:justify-start justify-center w-full ">
                <ExalviaLinkButton text="Lihat Detail" href={`#${linkTarget}`} icon={FaArrowRight} className="hover:scale-105 lg:mx-0 mx-auto w-fit transition-transform btn-warning btn-lg" />
              </div>
            </div>
            <div className="relative lg:w-6/12 w-full">
              <ExalviaImage priority={true} src={data.image} alt={data.headline} width={800} height={600} className="w-full h-auto object-contain" aspectRatio="aspect-4/3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
