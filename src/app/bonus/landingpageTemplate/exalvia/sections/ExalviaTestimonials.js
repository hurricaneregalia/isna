import React from "react";
import Image from "next/image";
import ExalviaSectionHeader from "../ui-components/ExalviaSectionHeader";
import ExalviaCard from "../ui-components/ExalviaCard";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";
import { BiSolidQuoteRight } from "react-icons/bi";

export default function ExalviaTestimonials({ data, secId = "testimonials" }) {
  if (!data) return null;

  return (
    <section id={secId} className="py-20 md:py-32 bg-base-100">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24">
        <div className="mb-12 md:mb-16">
          <ExalviaSectionHeader badge={data.label} title={data.title} subtitle={data.subtitle} align="center" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.items?.map((item, idx) => {
            return (
              <ExalviaCard key={idx} className="h-full flex flex-col gap-5 p-8">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image src={item.avatar} alt={item.name} width={48} height={48} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-base text-base-content">{item.name}</p>
                      <p className="text-sm text-base-content/60">{item.role}</p>
                    </div>
                  </div>
                  <BiSolidQuoteRight className="text-4xl text-primary/50" />
                </div>
                <ExalviaBodyText text={item.text} className="text-base md:text-lg mb-0" />
              </ExalviaCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
