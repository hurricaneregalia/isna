import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ExalviaLinkButton from "../ui-components/ExalviaLinkButton";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";
import ExalviaScan from "./ExalviaScan";

export default function ExalviaCTA1({ data, secId = "cta1", targetLink = "#" }) {
  if (!data) return null;

  return (
    <section id={secId} className="p-5 bg-base-200">
      <div className="py-20 md:py-32 bg-neutral text-neutral-content rounded-bl-4xl">
        <div className="lg:w-7/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-center text-center gap-6">
          <span className="uppercase tracking-[0.2em] text-warning text-xs md:text-sm font-bold">{data.label}</span>
          <ExalviaScan />
          <h2 className="font-instrument-serif text-4xl md:text-5xl font-semibold leading-tight text-white">{data.title}</h2>
          <ExalviaBodyText text={data.description} className="mb-4 text-white/80" />
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto justify-center">
            <ExalviaLinkButton text="SCAN BRAND" href={targetLink} icon={FaArrowRight} className="w-fit mx-auto sm:w-auto btn-lg btn-warning" />
          </div>
        </div>
      </div>
    </section>
  );
}
