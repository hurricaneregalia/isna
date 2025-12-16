import React from "react";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";

export default function HalvoraTrust({ data, secId }) {
  const { items } = data.trust;

  return (
    <section id={secId} className="py-20 bg-[#FFF5EA]/60 border-y border-[#D48F8F]/10">
      <div className="container mx-auto px-6 lg:w-8/12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-[#D48F8F]/10">
            {items.map((item) => (
                <div key={item.id} className="p-6 flex flex-col items-center space-y-4">
                    <div className="p-4 bg-white text-[#D48F8F] rounded-full mb-2 ring-1 ring-[#D48F8F]/20 shadow-sm">
                        {item.icon}
                    </div>
                    <HalvoraSubHeadline text={item.title} className="text-lg text-[#6B4423] font-bold" />
                    <HalvoraBodyText text={item.description} className="text-sm px-8 text-[#A07050] leading-relaxed" />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
