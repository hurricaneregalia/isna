import React from "react";
import ExalviaBadge from "../ui-components/ExalviaBadge";
import ExalviaHeadline from "../ui-components/ExalviaHeadline";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";
import ExalviaImage from "../ui-components/ExalviaImage";
import ExalviaCard from "../ui-components/ExalviaCard";
import ExalviaIconBox from "../ui-components/ExalviaIconBox";

export default function ExalviaFenomenon({ data, secId = "fenomenon" }) {
  if (!data) return null;

  return (
    <section id={secId} className="py-20 md:py-32 relative overflow-hidden bg-base-200">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Kolom Visual: Posisi Kiri di Desktop */}
          <div className="order-1 relative">
            {/* Main Visual Container */}
            <div className="relative">
              <ExalviaImage src={data.image} alt={data.title} width={800} height={600} className="w-full h-auto object-contain" />
            </div>

            {/* Floating Info Card */}
            <div className="absolute top-1/2 -right-6 md:-right-10 transform -translate-y-1/2">
              <div className="bg-primary/90 p-5 md:p-6 rounded-bl-4xl  max-w-[200px] md:max-w-[240px]">
                <div className="flex items-center gap-2 mb-2 text-warning">
                  <span className="text-2xl font-bold">78%</span>
                </div>
                <p className="text-xs md:text-sm font-montserrat text-white/70 leading-relaxed">Calon pembeli ragu karena pesan promosi tidak profesional.</p>
              </div>
            </div>
          </div>

          {/* Kolom Narasi: Posisi Kanan di Desktop */}
          <div className="order-2 flex flex-col gap-6">
            <ExalviaBadge text={data.label} />
            <ExalviaHeadline text={data.title} className="mb-2 text-2xl" />
            <ExalviaBodyText text={data.description} className="mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.items?.map((item, index) => {
                return (
                  <ExalviaCard key={index} className="flex items-center gap-2 p-4">
                    {item.icon && <ExalviaIconBox icon={item.icon} className="shrink-0" />}
                    <span className="font-montserrat text-sm md:text-base text-base-content">{item.title}</span>
                  </ExalviaCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
