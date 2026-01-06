import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ExalviaLinkButton from "../ui-components/ExalviaLinkButton";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";
import ExalviaScan from "./ExalviaScan";

export default function ExalviaCTA1({ data, secId = "cta1", targetLink = "#" }) {
  if (!data) return null;

  return (
    <section id={secId} className="p-5 bg-base-200">
      <div className="py-20 md:py-32 bg-neutral text-neutral-content rounded-bl-4xl relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="lg:w-7/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-center text-center gap-6">
          <span className="uppercase tracking-[0.2em] text-warning text-xs md:text-sm font-bold" data-aos="fade-up">
            {data.label}
          </span>
          <h2 className="font-instrument-serif text-3xl md:text-5xl font-semibold leading-tight text-white" data-aos="fade-up">
            {data.title}
          </h2>
          <div data-aos="flip-left" className=" w-full">
            {" "}
            <ExalviaScan width="sm:w-8/12 my-10" />
          </div>
          <ExalviaBodyText text={data.description} className="mb-4 text-white/80" />
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto justify-center">
            <ExalviaLinkButton text="SCAN BRAND" href={targetLink} icon={FaArrowRight} className="w-fit mx-auto sm:w-auto btn-lg btn-warning animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
