import React from "react";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";

export default function HalvoraTrust({ data }) {
  const { items } = data.trust;

  return (
    <section className="py-16 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-primary/20">
            {items.map((item) => (
                <div key={item.id} className="p-4 flex flex-col items-center space-y-3">
                    <div className="p-4 bg-primary/10 rounded-full text-primary mb-2">
                        {item.icon}
                    </div>
                    <HalvoraSubHeadline text={item.title} className="text-xl" />
                    <HalvoraBodyText text={item.description} className="text-sm px-4" />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
