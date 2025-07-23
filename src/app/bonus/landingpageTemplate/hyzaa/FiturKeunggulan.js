import React from "react";
import Wrapper from "./ui/Wrapper";
import HeaderSection from "./ui/HeaderSection";
import Bodytext from "./ui/Bodytext";
import Title from "./ui/Title";
import Image from "next/image";

export default function FiturKeunggulan({ paddingX, data }) {
  return (
    <Wrapper>
      <HeaderSection label={data.label} headline={data.headline} headlineColor="sm:p-0 px-5" />
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-0 gap-5 mt-8 items-center">
        <div className="relative w-full sm:h-full h-64">
          <Image src={data.imageUrl} alt="Fitur Sepeda" fill sizes="(max-width: 768px) 100vw, 700px" className="object-contain" data-aos="fade-right" />
        </div>
        <div className="space-y-5 lg:pr-32 sm:pr-16 px-5">
          {data.item && data.item.length > 0 ? (
            data.item.map((item, idx) => (
              <div key={item.title} className="bg-base-100 card px-5 py-3 shadow-lg shadow-primary/10" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="flex gap-5 items-center">
                  <div className="text-4xl text-primary flex-shrink-0" aria-hidden="true">
                    {item.icon}
                  </div>
                  <div className="text-start">
                    <Title text={item.title} />
                    <Bodytext text={item.description} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-base-content/70">Belum ada fitur yang ditambahkan.</p>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
