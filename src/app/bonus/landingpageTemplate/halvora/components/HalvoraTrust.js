import React from "react";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";

export default function HalvoraTrust({ data }) {
  const { items } = data.trust;

  return (
    <section className="py-20 bg-stone-100/50 border-y border-stone-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-stone-200">
            {items.map((item) => (
                <div key={item.id} className="p-6 flex flex-col items-center space-y-4">
                    <div className="p-4 bg-white text-emerald-800 rounded-full mb-2 ring-1 ring-emerald-100 shadow-sm">
                        {item.icon}
                    </div>
                    <HalvoraSubHeadline text={item.title} className="text-lg text-emerald-950 font-bold" />
                    <HalvoraBodyText text={item.description} className="text-sm px-8 text-stone-600 leading-relaxed" />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
