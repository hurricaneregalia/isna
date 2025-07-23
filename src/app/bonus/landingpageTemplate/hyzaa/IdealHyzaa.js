import React from "react";
import Wrapper from "./ui/Wrapper";
import HeaderSection from "./ui/HeaderSection";
import Bodytext from "./ui/Bodytext";
import Title from "./ui/Title";
import Image from "next/image";

export default function IdealHyzaa({ paddingX, data }) {
  return (
    <Wrapper>
      <HeaderSection label={data.label} headline={data.headline} />
      <div className="mb-6 sm:w-7/12 w-full mx-auto " data-aos="fade-up">
        <Bodytext text={data.description} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 items-center">
        <div className="card relative w-full sm:h-full h-64 overflow-hidden shadow-lg">
          <Image src={data.imageUrl} alt="Ilustrasi pengalaman bersepeda ideal" fill sizes="(max-width: 768px) 100vw, 700px" className="object-cover object-center" />
        </div>
        <div className="space-y-5">
          {data.item.map((item, idx) => (
            <div key={idx} className="bg-base-100 card overflow-hidden shadow-lg shadow-primary/10 px-5 py-3" data-aos="fade-up">
              <div className="flex gap-5 items-center">
                <div className="text-4xl">{item.icon}</div>
                <div className="text-start">
                  <Title text={item.title} />
                  <Bodytext text={item.description} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
