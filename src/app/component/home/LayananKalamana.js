import React from "react";
import WrapperImage from "./ui/WrapperImage";
import Title from "./ui/Title";
import IdSection from "./ui/IdSection";
import ServicesJson from "./ui/ServicesJson";

export default function LayananKalamana({ secId, data }) {
  return (
    <WrapperImage src={data.background} alt={data.title} secId={secId}>
      <div className="relative w-full overflow-visible sm:py-30 py-15">
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-base-100 gap-10 sm:gap-16">
          <div className="text-center w-full flex flex-col space-y-6 sm:space-y-8">
            <span className="text-white">
              <IdSection secId={secId} />
            </span>

            <Title text={data.title} h={2} css="text-3xl sm:text-4xl text-white" />
          </div>

          {/* SERVICES LIST */}
          <ServicesJson />
        </div>
      </div>
    </WrapperImage>
  );
}
