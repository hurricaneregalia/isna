import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import ExalviaSectionHeader from "../ui-components/ExalviaSectionHeader";
import ExalviaCard from "../ui-components/ExalviaCard";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";
import ExalviaImage from "../ui-components/ExalviaImage";
import ExalviaLinkButton from "../ui-components/ExalviaLinkButton";
import ExalviaCountDown from "../ui-components/ExalviaCountDown";

export default function ExalviaBonus({ data, secId = "bonus" }) {
  if (!data) return null;

  return (
    <section id={secId} className="py-20 md:py-32 bg-base-100">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24 flex flex-col gap-12">
        <ExalviaSectionHeader badge={data.label} title={data.title} align="center" />

        {/* Bonus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {data.items?.map((item, idx) => (
            <ExalviaCard key={idx} className="flex flex-col md:flex-row items-stretch overflow-hidden">
              <div className="w-full md:w-1/2 shrink-0 aspect-video md:aspect-auto md:h-full">
                <ExalviaImage src={item.image} alt={item.title} followWrapper containerClassName="w-full h-full rounded-none" className="object-cover" />
              </div>
              <div className="w-full md:w-1/2 space-y-2 p-8">
                <div className="flex items-center justify-between">
                  <h3 className="font-montserrat font-semibold text-lg text-base-content">{item.title}</h3>
                  <span className="text-sm text-error line-through">{item.value}</span>
                </div>
                <ExalviaBodyText text={item.description} className="mb-2" />
                <div className="flex items-center gap-2 text-success text-sm font-semibold">
                  <FaCheckCircle /> Bonus aktif
                </div>
              </div>
            </ExalviaCard>
          ))}
        </div>

        {/* Urgency Banner */}
        <div className="bg-neutral text-neutral-content p-8 rounded-bl-4xl lg:p-12 flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
            <div className="space-y-4 lg:w-6/12 w-full lg:text-start text-center">
              <p className="uppercase tracking-[0.2em] text-warning text-xs md:text-sm font-bold">{data.label}</p>
              <h3 className="font-instrument-serif text-3xl md:text-4xl text-white">Dapatkan bonus sebelum habis</h3>
              <div className=" my-10 lg:my-0">
                <ExalviaCountDown target={data.countdownTarget} />
              </div>
            </div>
            <div className="flex justify-center lg:w-6/12 w-full">
              <ExalviaLinkButton text={data.ctaLabel} href={data.ctaLink} icon={FaArrowRight} variant="primary" className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
