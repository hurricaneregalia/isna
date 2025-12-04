import React from "react";
import IdSection from "./ui/IdSection";
import Title from "./ui/Title";
import ImageStyle from "./ui/ImageStyle";
import WrapperImage from "./ui/WrapperImage";
import Bodytext from "./ui/BodyText";

export default function SolusiKalamana({ secId, data }) {
  return (
    <WrapperImage src={data.background} alt={data.title}>
      <div className="flex sm:flex-row flex-col items-center gap-10 sm:gap-16 text-base-100 sm:py-30 py-15">
        {/* LEFT SECTION */}
        <div className="sm:w-6/12 w-full space-y-6 sm:space-y-8 text-white">
          <IdSection secId={secId} />
          <Title text={data.title} h={2} css="text-3xl sm:text-4xl" />
          <Bodytext text={data.description} css="text-white" />
        </div>

        {/* RIGHT SECTION */}
        <div className="sm:w-6/12 w-full flex justify-center sm:justify-end">
          <div className="w-full">
            <ImageStyle src={data.image} alt={data.title} />
          </div>
        </div>
      </div>
    </WrapperImage>
  );
}
