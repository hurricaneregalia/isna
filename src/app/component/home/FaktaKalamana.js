import React from "react";
import IdSection from "./ui/IdSection";
import Title from "./ui/Title";
import Bodytext from "./ui/BodyText";
import ImageStyle from "./ui/ImageStyle";
import Wrapper from "./ui/Wrapper";

export default function FaktaKalamana({ secId, data }) {
  return (
    <Wrapper>
      <div className="flex sm:flex-row flex-col gap-10 items-center">
        <div className=" sm:w-6/12 w-full space-y-5 ">
          <IdSection secId={secId} />
          <Title text={data.title} h={2} css="text-3xl" />
          <Bodytext text={data.description} />
        </div>
        <div className=" sm:w-6/12 w-full ">
          <ImageStyle src={data.image} alt={data.title} />
        </div>
      </div>
    </Wrapper>
  );
}
