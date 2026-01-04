import React from "react";
import ExalviaBadge from "../ui-components/ExalviaBadge";
import ExalviaHeadline from "../ui-components/ExalviaHeadline";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";
import ExalviaImage from "../ui-components/ExalviaImage";
import ExalviaCard from "../ui-components/ExalviaCard";
import ExalviaIconBox from "../ui-components/ExalviaIconBox";

export default function ExalviaFact({ data, secId }) {
  if (!data) return null;

  return (
    <section id={secId} className="py-20 md:py-32 relative overflow-hidden bg-base-100">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-12 gap-0 lg:gap-20 items-center">
          {/* Kolom Kiri: Narasi & Bukti */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            <ExalviaBadge text={data.label} />
            <ExalviaHeadline text={data.title} className="mb-2 font-instrument-serif text-3xl md:text-5xl font-semibold leading-tight" />
            <ExalviaBodyText text={data.description} className="mb-4" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.items?.map((item, index) => {
                return (
                  <ExalviaCard key={index} className="flex items-start gap-2 p-4">
                    {item.icon && <ExalviaIconBox icon={item.icon} className="shrink-0" />}
                    <span className="font-montserrat  text-base-content">{item.title}</span>
                  </ExalviaCard>
                );
              })}
            </div>
          </div>

          {/* Kolom Kanan: Visual Komposisi */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative Geometric Accent */}
            <div className="absolute  -top-10 -right-10 w-32 h-32 bg-base-200/50 rounded-full hidden md:block" />
            {/* Decorative Geometric Accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-base-200 rounded-full hidden md:block" />

            <div className="relative">
              <ExalviaImage src={data.image} alt={data.title} width={800} height={600} className="w-full h-auto object-contain" aspectRatio="aspect-4/3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
