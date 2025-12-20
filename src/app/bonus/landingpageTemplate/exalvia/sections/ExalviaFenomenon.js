import React from "react";
import ExalviaBadge from "../ui-components/ExalviaBadge";
import ExalviaHeadline from "../ui-components/ExalviaHeadline";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";
import ExalviaImage from "../ui-components/ExalviaImage";

export default function ExalviaFenomenon({ data }) {
  if (!data) return null;

  return (
    <section id="fenomenon" className="py-20 md:py-32 relative overflow-hidden bg-base-200">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Kolom Visual: Posisi Kiri di Desktop */}
          <div className="order-1 relative">
            {/* Decorative Geometric Accent - Circles pattern */}
            <div
              className="absolute -top-12 -left-12 w-48 h-48 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `url('${data.patternImage}')`,
                backgroundSize: "150px",
              }}
            ></div>

            {/* Main Visual Container */}
            <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
              <ExalviaImage src={data.image} alt={data.title} width={800} height={600} className="w-full h-auto object-cover" />
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -right-6 md:-right-10">
              <div className="bg-base-100 p-5 md:p-6 rounded-xl shadow-xl border border-base-300 max-w-[200px] md:max-w-[240px]">
                <div className="flex items-center gap-2 mb-2 text-warning">
                  <span className="text-2xl font-bold">78%</span>
                </div>
                <p className="text-xs md:text-sm font-montserrat opacity-70 leading-relaxed">Calon pembeli ragu karena narasi yang tidak profesional.</p>
              </div>
            </div>
          </div>

          {/* Kolom Narasi: Posisi Kanan di Desktop */}
          <div className="order-2 flex flex-col gap-6">
            <ExalviaBadge text={data.label} />
            <ExalviaHeadline text={data.title} className="mb-2" />
            <ExalviaBodyText text={data.description} className="mb-4" />

            {/* Signature Accent */}
            <div className="mt-4 pt-8 border-t border-base-300">
              <div className="flex flex-col">
                <span className="font-instrument-serif text-2xl italic text-base-content/80">{data.signature}</span>
                <span className="text-xs md:text-sm font-montserrat uppercase tracking-widest text-primary font-bold mt-1">{data.designerRole}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
