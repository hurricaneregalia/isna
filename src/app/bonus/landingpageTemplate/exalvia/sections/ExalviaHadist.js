"use client";

import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import ExalviaBadge from "../ui-components/ExalviaBadge";

export default function ExalviaHadist({ data, secId = "hadist" }) {
  if (!data) return null;

  return (
    <section id={secId} className="py-20 md:py-32 bg-base-100 relative overflow-hidden">
      {/* Background Pattern Arab */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/arabesque.png')`,
          backgroundSize: "300px",
        }}
      ></div>

      <div className="lg:w-10/12 w-full mx-auto px-6 md:px-16 lg:px-24 relative">
        {/* Portal Container */}
        <div className="bg-neutral text-neutral-content rounded-3xl md:rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative Pattern Inside Portal */}
          <div 
            className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url('https://www.transparenttextures.com/patterns/arabesque.png')`,
              backgroundSize: "200px",
            }}
          ></div>

          {/* Grid 2 Kolom */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
            {/* Kolom Kiri: Icon Double Quotes Besar */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="text-warning/20 lg:text-warning/30">
                <FaQuoteRight className="text-8xl md:text-9xl lg:text-[12rem] transform rotate-180" />
              </div>
            </div>

            {/* Kolom Kanan: Konten Hadist */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {/* Label */}
              <ExalviaBadge text="PESAN HIKMAH" className="text-warning mb-2" />

              {/* Arabic Text */}
              <div className="text-right" dir="rtl">
                <p className="text-4xl md:text-5xl lg:text-6xl leading-loose text-white font-medium" style={{ fontFamily: 'Amiri, "Noto Sans Arabic", "Arabic Typesetting", serif' }}>
                  {data.arabic}
                </p>
              </div>

              {/* Gold Divider */}
              <div className="w-24 h-1 bg-warning rounded-full my-2"></div>

              {/* Indonesian Translation */}
              <p className="font-instrument-serif text-xl md:text-2xl text-white/90 italic leading-relaxed">
                {data.translation}
              </p>

              {/* Footer Portal: Source & Context */}
              <div className="mt-4 pt-6 border-t border-white/10">
                <p className="font-montserrat text-sm md:text-base text-white/70 mb-2">
                  <span className="font-semibold">{data.source}</span>
                </p>
                <p className="font-montserrat text-sm md:text-base text-white/60 italic">
                  {data.context}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

