"use client";

import React from "react";
import ExalviaSectionHeader from "../ui-components/ExalviaSectionHeader";
import ExalviaCard from "../ui-components/ExalviaCard";
import ExalviaIconBox from "../ui-components/ExalviaIconBox";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";

export default function ExalviaBenefits({ data, secId = "benefits" }) {
  if (!data) return null;

  return (
    <section id={secId} className="py-20 md:py-32 bg-base-100">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24">
        <div className="mb-12 md:mb-16">
          <ExalviaSectionHeader badge={data.label} title={data.title} subtitle={data.subtitle} align="center" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.items?.map((item, idx) => {
            const number = String(idx + 1).padStart(2, "0");
            return (
              <ExalviaCard key={idx} className="h-full flex flex-col p-4 gap-4 bg-base-100 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-base-content/50 tracking-wide">{number}</span>
                  {item.icon && <ExalviaIconBox icon={item.icon} />}
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-base-content">{item.title}</h3>
                <ExalviaBodyText text={item.description} className="text-sm md:text-base mb-0" />
              </ExalviaCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
