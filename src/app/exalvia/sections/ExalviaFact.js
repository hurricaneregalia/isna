import React from "react";
import ExalviaBadge from "../ui-components/ExalviaBadge";
import ExalviaHeadline from "../ui-components/ExalviaHeadline";
import ExalviaBodyText from "../ui-components/ExalviaBodyText";
import ExalviaImage from "../ui-components/ExalviaImage";
import ExalviaCard from "../ui-components/ExalviaCard";
import ExalviaIconBox from "../ui-components/ExalviaIconBox";

export default function ExalviaFact({ data, secId = "fact", reverse = false }) {
  if (!data) return null;

  return (
    <section id={secId} className="py-20 md:py-32 relative overflow-hidden bg-base-100 sm:p-4 p-2">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24">
        <div className={`flex lg:flex-row${reverse === true ? "-reverse" : ""} flex-col gap-12 lg:gap-20 items-center`}>
          <div className="lg:w-6/12 w-full relative">
            <div className="relative w-full" data-aos="flip-left">
              <ExalviaImage src={data.image} alt={data.title} width={800} height={600} className="object-contain" aspectRatio="aspect-4/3" />
            </div>
          </div>
          <div className="lg:w-6/12 w-full order-2 flex flex-col gap-6">
            <div data-aos="fade-up">
              <ExalviaBadge text={data.label} />
            </div>
            <div data-aos="fade-up">
              <ExalviaHeadline text={data.title} className="mb-2 text-3xl md:text-5xl leading-tight" data-aos="fade-up" />
            </div>
            <div data-aos="fade-up">
              <ExalviaBodyText text={data.description} className="mb-4" data-aos="fade-up" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.items?.map((item, index) => {
                return (
                  <div key={index} data-aos="fade-left" data-aos-delay={index * 100}>
                    <ExalviaCard key={index} className="flex items-start gap-2 p-4">
                      {item.icon && <ExalviaIconBox icon={item.icon} className="shrink-0" />}
                      <span className="font-montserrat text-base-content">{item.title}</span>
                    </ExalviaCard>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
