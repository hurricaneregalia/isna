"use client";

import React from "react";
import ExalviaSectionHeader from "../ui-components/ExalviaSectionHeader";
import ExalviaCard from "../ui-components/ExalviaCard";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";
import ExalviaImage from "../ui-components/ExalviaImage";

export default function ExalviaHowItWork({ data, secId = "how-it-works" }) {
  if (!data) return null;

  return (
    <section id={secId} className="py-20 md:py-32 bg-base-100">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24 rounded-bl-4xl">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <ExalviaSectionHeader badge={data.label} title={data.title} subtitle={data.subtitle} align="left" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Steps */}
          <div className="flex flex-col gap-5">
            {data.steps?.map((step, idx) => {
              const number = String(idx + 1).padStart(2, "0");
              return (
                <ExalviaCard key={idx} className="flex items-start gap-4 bg-base-100/80 p-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-semibold tracking-wide">{number}</div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-montserrat font-semibold text-lg md:text-xl text-base-content">{step.title}</h3>
                    </div>
                    <ExalviaBodyText text={step.description} className="mb-0" />
                  </div>
                </ExalviaCard>
              );
            })}
          </div>

          {/* Right: Image with subtle pattern */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-48 h-48 opacity-10 pointer-events-none" style={{ backgroundImage: `url('${data.patternImage}')`, backgroundSize: "160px" }}></div>
            <ExalviaImage src={data.image} alt={data.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" containerClassName="aspect-[4/3] rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
