"use client";

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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Item 1 - Step 1 (Large) */}
          {steps[0] && (
            <div className="md:col-span-2 md:row-span-1 bg-base-200 p-8 rounded-bl-4xl border-3 border-base-content flex flex-col justify-between group hover:bg-base-content hover:text-base-100 transition-colors duration-500">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-base-content text-base-100 rounded-bl-2xl flex items-center justify-center font-bold text-xl group-hover:bg-base-100 group-hover:text-base-content transition-colors duration-500">
                  01
                </div>
                <div className="text-3xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">{steps[0].icon}</div>
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-3">{steps[0].title}</h3>
                <ExalviaBodyText text={steps[0].description} className="mb-0 group-hover:text-base-100/80 transition-colors duration-500" />
              </div>
            </div>
          )}

          {/* Item 2 - Step 2 (Small) */}
          {steps[1] && (
            <div className="md:col-span-1 bg-base-100 p-8 rounded-bl-4xl border-3 border-base-content flex flex-col gap-4 group hover:bg-warning transition-colors duration-500">
              <div className="w-12 h-12 bg-base-content text-base-100 rounded-bl-xl flex items-center justify-center font-bold text-lg group-hover:bg-base-content transition-colors duration-500">
                02
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-base-content transition-colors duration-500">{steps[1].title}</h3>
                <ExalviaBodyText text={steps[1].description} className="text-sm mb-0 group-hover:text-base-content/80 transition-colors duration-500" />
              </div>
              <div className="mt-auto text-2xl opacity-20 text-right group-hover:opacity-100 transition-opacity duration-500">{steps[1].icon}</div>
            </div>
          )}

          {/* Item 3 - Step 3 (Small) */}
          {steps[2] && (
            <div className="md:col-span-1 bg-base-200 p-8 rounded-bl-4xl border-3 border-base-content flex flex-col gap-4 group hover:bg-primary hover:text-white transition-colors duration-500">
              <div className="w-12 h-12 bg-base-content text-base-100 rounded-bl-xl flex items-center justify-center font-bold text-lg group-hover:bg-white group-hover:text-primary transition-colors duration-500">
                03
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{steps[2].title}</h3>
                <ExalviaBodyText text={steps[2].description} className="text-sm mb-0 group-hover:text-white/80 transition-colors duration-500" />
              </div>
              <div className="mt-auto text-2xl opacity-20 text-right group-hover:opacity-100 transition-opacity duration-500">{steps[2].icon}</div>
            </div>
          )}

          {/* Item 4 - Image (Large) */}
          <div className="md:col-span-2 bg-neutral p-4 rounded-bl-4xl border-3 border-base-content flex items-center justify-center overflow-hidden relative group">
            <div className="absolute inset-0 bg-pattern opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative z-10 w-full transform group-hover:scale-105 transition-transform duration-700 h-64 md:h-auto">
              <ExalviaImage src={data.image} alt={data.title} className="w-full h-full object-contain" aspectRatio="aspect-video" />
            </div>
            {/* Overlay Info */}
            <div className="absolute bottom-6 right-6 bg-base-content text-base-100 p-4 rounded-bl-2xl text-xs font-bold uppercase tracking-widest hidden md:block">Exalvia Process</div>
          </div>
        </div>
      </div>
    </section>
  );
}
