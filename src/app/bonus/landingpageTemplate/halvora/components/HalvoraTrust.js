import React from "react";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";

export default function HalvoraTrust({ data, secId }) {
  const { items, border } = data.trust;

  return (
    <section id={secId} className=" bg-base-200/60 border-y border-primary/10">
      <div className="w-full h-[50px] mb-24 opacity-20" style={{ backgroundImage: `url(${border})`, transform: "rotate(180deg)", backgroundPosition: "center" }} />
      <div className="container mx-auto px-6 lg:w-8/12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-primary/10">
          {items.map((item) => (
            <div key={item.id} className="p-6 flex flex-col items-center space-y-4">
              <div className="p-4 bg-base-100 text-primary rounded-full mb-2 ring-1 ring-primary/20 shadow-sm">{item.icon}</div>
              <HalvoraSubHeadline text={item.title} className="text-lg text-base-content font-bold" />
              <HalvoraBodyText text={item.description} className="text-sm px-8 text-base-content/70 leading-relaxed" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[50px] mt-24 opacity-20" style={{ backgroundImage: `url(${border})`, backgroundPosition: "center" }} />
    </section>
  );
}
