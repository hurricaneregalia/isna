"use client";

import React from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import ExalviaLinkButton from "../ui-components/ExalviaLinkButton";

export default function ExalviaCTA1({ data, secId = "cta1" }) {
  if (!data) return null;

  return (
    <section id={secId} className="py-20 md:py-32 bg-neutral text-neutral-content rounded-bl-4xl">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-center text-center gap-6">
        <span className="uppercase tracking-[0.2em] text-warning text-xs md:text-sm font-bold">{data.label}</span>
        <h2 className="font-instrument-serif text-4xl md:text-5xl font-semibold leading-tight text-white">{data.title}</h2>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto justify-center">
          <ExalviaLinkButton text={data.primaryLabel} href={data.primaryHref} icon={FaArrowRight} variant="primary" className="w-full sm:w-auto btn-lg" />
          <ExalviaLinkButton
            text={data.whatsappLabel}
            href={data.whatsappHref}
            icon={FaWhatsapp}
            variant="outline"
            className="w-full sm:w-auto btn-lg border-warning text-warning hover:bg-warning hover:text-neutral"
          />
        </div>
      </div>
    </section>
  );
}
