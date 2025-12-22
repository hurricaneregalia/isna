"use client";

import React from "react";
import { FaChevronDown } from "react-icons/fa";
import ExalviaSectionHeader from "../ui-components/ExalviaSectionHeader";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";

export default function ExalviaFAQ({ data, secId = "faq" }) {
  if (!data) return null;

  return (
    <section id={secId} className="py-20 md:py-32 bg-base-100">
      <div className="lg:w-8/12 sm:w-10/12 w-full mx-auto px-6 md:px-16 lg:px-24">
        <div className="mb-12 md:mb-16">
          <ExalviaSectionHeader badge={data.label} title={data.title} subtitle={data.subtitle} align="center" />
        </div>
        <div className="space-y-4">
          {data.items?.map((item, idx) => (
            <div key={idx} className="collapse bg-base-100 border border-base-300 rounded-bl-4xl rounded-none">
              <input type="radio" name={`${secId}-accordion`} defaultChecked={idx === 0} className="peer" />
              <div className="collapse-title font-montserrat font-semibold text-base md:text-lg text-base-content flex items-center justify-between gap-4">
                <span>{item.question}</span>
                <FaChevronDown className="shrink-0 text-base-content/70 transition-transform duration-300 peer-checked:rotate-180" />
              </div>
              <div className="collapse-content">
                <ExalviaBodyText text={item.answer} className="text-sm md:text-base mb-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
