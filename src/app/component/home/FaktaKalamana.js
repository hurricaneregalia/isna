import React from "react";
import IdSection from "./ui/IdSection";
import Title from "./ui/Title";
import Bodytext from "./ui/BodyText";
import ImageStyle from "./ui/ImageStyle";
import Wrapper from "./ui/Wrapper";
import ListItem from "./ui/ListItem";

export default function FaktaKalamana({ secId, data }) {
  return (
    <Wrapper secId={secId}>
      <div className="flex sm:flex-row flex-col items-center gap-10 sm:gap-16 ">
        {/* LEFT SECTION */}
        <div className="sm:w-6/12 w-full space-y-6 sm:space-y-8">
          <IdSection secId={secId} />
          <Title text={data.title} h={2} css="text-3xl sm:text-4xl" />
          <Bodytext text={data.description} css="text-base-content" />
          <ListItem data={data.item} listFor="bad" gridCol=" grid-cols-2" />
        </div>

        {/* RIGHT SECTION */}
        <div className="sm:w-6/12 w-full flex justify-center sm:justify-end">
          <div className="w-full">
            <ImageStyle src={data.image} alt={data.title} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
