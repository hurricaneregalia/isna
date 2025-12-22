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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Kolom Kiri: Narasi & Bukti */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            <ExalviaBadge text={data.label} />
            <ExalviaHeadline text={data.title} className="mb-2" />
            <ExalviaBodyText text={data.description} className="mb-4" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.items?.map((item, index) => {
                return (
                  <ExalviaCard key={index} className="flex items-center gap-4 p-4 md:p-5">
                    {item.icon && <ExalviaIconBox icon={item.icon} className="shrink-0" />}
                    <span className="font-montserrat font-semibold text-sm md:text-base text-base-content">{item.title}</span>
                  </ExalviaCard>
                );
              })}
            </div>
          </div>

          {/* Kolom Kanan: Visual Komposisi */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative Base - Pattern behind image */}
            <div
              className="absolute -top-10 -right-10 w-64 h-64 opacity-10 pointer-events-none hidden md:block"
              style={{
                backgroundImage: `url('${data.patternImage}')`,
                backgroundSize: "200px",
              }}
            ></div>

            {/* Decorative Geometric Accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-none hidden md:block" />

            <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-xl">
              <ExalviaImage src={data.image} alt={data.title} width={800} height={600} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
