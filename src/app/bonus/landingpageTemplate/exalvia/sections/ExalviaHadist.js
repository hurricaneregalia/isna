import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import ExalviaBadge from "../ui-components/ExalviaBadge";
import ExalviaHeadline from "../ui-components/ExalviaHeadline";
import ExalviaCard from "../ui-components/ExalviaCard";
import ExalviaImage from "../ui-components/ExalviaImage";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";

export default function ExalviaHadist({ data, secId = "hadist" }) {
  if (!data) return null;

  return (
    <>
      <section id={secId} className="py-20 md:py-32 relative overflow-hidden bg-base-100">
        <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Kolom Visual: Posisi Kiri di Desktop */}
            <div className="order-1 relative">
              {/* Main Visual Container */}
              <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                <ExalviaImage src={data.image} alt={data.source} width={800} height={600} className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Kolom Narasi: Posisi Kanan di Desktop */}
            <div className="order-2 flex flex-col gap-6">
              <ExalviaBadge text="PESAN HIKMAH" />
              <ExalviaHeadline text={data.arabic} className="mb-2" />
              <ExalviaBodyText text={data.translation} className="mb-4" />

              {/* Signature Accent */}
              <div className="mt-4 pt-8 border-t border-base-300">
                <div className="flex flex-col">
                  <span className="font-instrument-serif text-2xl italic text-base-content/80">{data.source}</span>
                  <span className="text-xs md:text-sm font-montserrat uppercase tracking-widest text-primary font-bold mt-1">{data.context}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
