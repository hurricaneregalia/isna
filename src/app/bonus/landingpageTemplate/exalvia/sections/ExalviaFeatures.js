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

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items?.map((item, index) => (
            <div key={index} className="group relative aspect-4/5 overflow-hidden rounded-bl-4xl cursor-pointer transition-transform duration-300 hover:scale-105">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Gradient Overlay untuk keterbacaan label */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Label Area */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-base-100/90 rounded-lg p-4 flex items-center justify-between gap-3 transition-all duration-300 group-hover:bg-base-100">
                  <h3 className="font-instrument-serif text-xl md:text-2xl font-semibold text-base-content flex-1">{item.title}</h3>
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FaArrowRight className="text-sm" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
