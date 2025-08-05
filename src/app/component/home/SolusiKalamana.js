import React from "react";
import IdSection from "./ui/IdSection";
import Title from "./ui/Title";
import ImageStyle from "./ui/ImageStyle";
import WrapperImage from "./ui/WrapperImage";
import Bodytext from "./ui/BodyText";

export default function SolusiKalamana({ secId, data }) {
  return (
    <WrapperImage src={data.background} alt={data.title}>
      <div className="flex sm:flex-row flex-col gap-10 items-center text-base-100">
        <div className=" sm:w-6/12 w-full space-y-5 text-white ">
          <IdSection secId={secId} />
          <Title text={data.title} h={2} css="text-3xl" />
          <Bodytext text={data.description} />
        </div>
        <div className=" sm:w-6/12 w-full ">
          <ImageStyle src={data.image} alt={data.title} />
        </div>
      </div>
    </WrapperImage>
  );
}
