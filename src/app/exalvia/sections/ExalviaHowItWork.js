import React from "react";
import ExalviaSectionHeader from "../ui-components/ExalviaSectionHeader";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";
import ExalviaImage from "../ui-components/ExalviaImage";

export default function ExalviaHowItWork({ data, secId = "how-it-works" }) {
  if (!data) return null;

  const steps = data.steps || [];

  return (
    <section id={secId} className="py-20 md:py-32 bg-base-100">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-12 md:mb-16 lg:w-7/12 w-full">
          <ExalviaSectionHeader badge={data.label} title={data.title} subtitle={data.subtitle} align="left" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <ExalviaImage src={data.image} aspectRatio="aspect-4/3" alt={data.title} width={800} height={600} className="w-full h-auto object-contain" />
          </div>
          <div className="flex flex-col gap-4">
            {data.steps?.map((step, idx) => {
              const number = String(idx + 1).padStart(2, "0");
              return (
                <ExalviaCard key={idx} className="flex items-start gap-4 p-4">
                  <div className="w-12 h-12 bg-base-content rounded-bl-2xl text-base-100 flex items-center justify-center font-semibold tracking-wide">{number}</div>
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
        </div>
      </div>
    </section>
  );
}
