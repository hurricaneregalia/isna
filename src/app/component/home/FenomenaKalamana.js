import React from "react";
import IdSection from "./ui/IdSection";
import Title from "./ui/Title";
import Bodytext from "./ui/BodyText";
import ImageStyle from "./ui/ImageStyle";
import ListItem from "./ui/ListItem";
import Wrapper from "./ui/Wrapper";

export default function FenomenaKalamana({ secId, data }) {
  return (
    <Wrapper secId={secId}>
      <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start gap-10">
        {/* IMAGE */}
        <div id="image" className="sm:w-6/12 w-full flex justify-center sm:justify-start">
          <div className="w-full ">
            <ImageStyle src={data.image} alt={data.title} objcetPos="object-left" />
          </div>
        </div>

        {/* TEXT */}
        <div id="text" className="sm:w-6/12 w-full space-y-6 sm:space-y-8">
          <IdSection secId={secId || "id-belum-di-set"} />
          <Title text={data.title} h={2} css="text-3xl sm:text-4xl" />
          <Bodytext text={data.description} css="text-base-content" />
          <ListItem data={data.item} listFor="bad" gridCol="grid-cols-2" />
        </div>
      </div>
    </Wrapper>
  );
}
