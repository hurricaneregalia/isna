import React from "react";
import Image from "next/image";

export default function BenefitSectionBaizan({ widthSection, secId, data }) {
  const widthSectionFx = widthSection ? widthSection : "max-w-6xl";
  return (
    <section id={secId} className="bg-base-200 text-base-content">
      <div className={`${widthSectionFx} mx-auto px-5 py-20 flex flex-col-reverse md:flex-row items-center gap-10`}>
        <div className="w-full md:w-1/2">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
            className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
            data-aos="flip-left"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h2 id="lorem" className="text-3xl md:text-4xl font-semibold">
            {data.title}
          </h2>
          <p className="description text-base-content/80">{data.description}</p>

          <div id="benefit" className="mt-6">
            <ul className="space-y-4">
              {data.benefitList.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  {benefit.icon}
                  <p className="text-base">{benefit.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
