import React from "react";
import HalvoraTitle from "./ui/HalvoraTitle";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";

export default function HalvoraBestFor({ data, secId }) {
  const { title, subtitle, items, border } = data.bestFor;

  return (
    <section id={secId} className="bg-base-200">
      <div className="w-full h-[50px] mb-24 opacity-20" style={{ backgroundImage: `url(${border})`, transform: "rotate(180deg)", backgroundPosition: "center" }} />
      <div className="container mx-auto px-6 lg:w-8/12 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <HalvoraTitle text="Best For Moments" />
          <HalvoraSubHeadline text={title} className="text-base-content" />
          <HalvoraBodyText className=" text-base-content/80" text={subtitle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="group relative overflow-hidden card bg-base-100 shadow-sm hover:shadow-xl transition-all duration-500 border border-primary/20">
              <div className="aspect-3/4 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-base-content/90 via-base-content/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-base-100 text-xl font-serif font-bold mb-2">{item.title}</h3>
                <p className="text-base-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[50px] mt-24 opacity-20" style={{ backgroundImage: `url(${border})`, backgroundPosition: "center" }} />
    </section>
  );
}
