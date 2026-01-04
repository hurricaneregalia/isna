"use client";

import React from "react";
import ExalviaSectionHeader from "../ui-components/ExalviaSectionHeader";
import ExalviaCard from "../ui-components/ExalviaCard";
import ExalviaIconBox from "../ui-components/ExalviaIconBox";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";
import ExalviaLinkButton from "../ui-components/ExalviaLinkButton";
import { FaArrowRight } from "react-icons/fa6";

export default function ExalviaBenefits({ data, secId = "benefits", targetLink = "#" }) {
  if (!data) return null;

  return (
    <section id={secId} className="py-20 md:py-32 bg-base-100">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24">
        <div className="mb-12 md:mb-16 lg:w-8/12 sm:w-11/12 w-full mx-auto">
          <ExalviaSectionHeader className="font-instrument-serif text-3xl md:text-5xl font-semibold leading-tight" badge={data.label} title={data.title} subtitle={data.subtitle} align="center" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.items?.map((item, idx) => {
            const number = String(idx + 1).padStart(2, "0");
            return (
              <ExalviaCard key={idx} className="h-full flex flex-col p-4 gap-4 bg-base-100 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <span className="text-5xl font-semibold text-base-content/20 tracking-wide">{number}</span>
                  {item.icon && <ExalviaIconBox icon={item.icon} />}
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-base-content">{item.title}</h3>
                <ExalviaBodyText text={item.description} className="text-sm md:text-base mb-0" />
              </ExalviaCard>
            );
          })}
        </div>
        <div className=" w-full bg-neutral  sm:p-8 p-5 flex sm:flex-row flex-col items-center justify-between mt-4 rounded-bl-4xl gap-5">
          <ExalviaBodyText text={data.callToAction} textColor="text-base-100/70" className="text-sm sm:text-start text-center lg:min-w-9/12 lg:max-w-11/12 sm:w-7/12 w-full" />
          <div className="flex flex-col sm:flex-row gap-4  justify-center sm:w-5/12 w-full lg:w-auto  ">
            <ExalviaLinkButton text="SCAN BRAND" href={targetLink} icon={FaArrowRight} className="lg:w-fit w-full mx-auto btn-lg btn-warning" />
          </div>
        </div>
      </div>
    </section>
  );
}
