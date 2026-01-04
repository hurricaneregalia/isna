"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import ExalviaSectionHeader from "../ui-components/ExalviaSectionHeader";

export default function ExalviaFeatures({ data, secId = "features" }) {
  if (!data) return null;

  return (
    <section id={secId} className="py-20 md:py-32 bg-base-200">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <ExalviaSectionHeader badge={data.label} title={data.title} subtitle={data.subtitle} align="center" />
        </div>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.items?.map((item, index) => {
            // Bento rules for 3-column grid:
            // 0: Vertical (row-span-2)
            // 1: Horizontal Large (col-span-2)
            // 2: Small Square
            // 3: Small Square
            // 4: Horizontal Medium (col-span-2)

            let gridClasses = "";
            if (index === 0) gridClasses = "md:col-span-1 md:row-span-2 h-[400px] md:h-auto";
            else if (index === 1) gridClasses = "md:col-span-2 md:row-span-1 h-[250px]";
            else if (index === 2) gridClasses = "md:col-span-1 md:row-span-1 h-[250px]";
            else if (index === 3) gridClasses = "md:col-span-1 md:row-span-1 h-[250px]";
            else if (index === 4) gridClasses = "md:col-span-2 md:row-span-1 h-[250px]";
            else gridClasses = "md:col-span-1 h-[250px]";

            return (
              <div key={index} className={`group relative overflow-hidden rounded-bl-4xl  cursor-pointer transition-colors duration-300 ${gridClasses}`}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Solid Overlay for Text Contrast (No Blur/Shadow) */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                </div>
                {/* Content Area */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-instrument-serif text-xl md:text-2xl text-white font-semibold leading-tight transform group-hover:-translate-y-1 transition-transform duration-500">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
