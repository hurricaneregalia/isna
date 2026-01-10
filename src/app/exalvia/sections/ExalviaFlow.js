"use client";

import React from "react";
import ExalviaSectionHeader from "../ui-components/ExalviaSectionHeader";
import ExalviaCard from "../ui-components/ExalviaCard";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";
import ExalviaImage from "../ui-components/ExalviaImage";

export default function ExalviaFlow({ data, secId = "flow" }) {
  if (!data) return null;

  return (
    <section id={secId} className="py-20 md:py-32 bg-base-100">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24">
        <div className="mb-12 md:mb-16">
          <ExalviaSectionHeader badge={data.label} title={data.title} subtitle={data.subtitle} align="center" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.items?.map((item, idx) => {
            const number = String(idx + 1).padStart(2, "0");
            return (
              <ExalviaCard key={idx} className="h-full flex flex-col relative overflow-hidden bg-transparent">
                <span className="absolute top-4 left-4 text-3xl font-bold text-primary/15">{number}</span>
                <div className="relative overflow-hidden rounded-bl-4xl  ">
                  <ExalviaImage src={item.image} alt={item.title} containerClassName="rounded-none" className="object-cover" />
                </div>
                <div className=" p-8 grid grid-cols-1 gap-4">
                  <h3 className="font-montserrat font-semibold text-xl text-base-content">{item.title}</h3>
                  <ExalviaBodyText text={item.description} className="mb-0" />
                </div>
              </ExalviaCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
