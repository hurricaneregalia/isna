import React from "react";
import IdSection from "./ui/IdSection";
import Title from "./ui/Title";
import ImageStyle from "./ui/ImageStyle";
import Wrapper from "./ui/Wrapper";
import ListItem2 from "./ui/ListItem2";
import Bodytext from "./ui/BodyText";

export default function PentingKalamana({ secId, data }) {
  return (
    <Wrapper secId={secId}>
      {/* TOP SECTION */}
      <div className="flex flex-col-reverse sm:flex-row items-center  gap-10 sm:gap-16">
        {/* IMAGE */}
        <div id="image" className="sm:w-6/12 w-full flex justify-center sm:justify-start">
          <div className="w-full">
            <ImageStyle src={data.image} alt={data.title} objcetPos="object-left" />
          </div>
        </div>

        {/* TEXT */}
        <div id="text" className="sm:w-6/12 w-full space-y-6 sm:space-y-8">
          <IdSection secId={secId || "id-belum-di-set"} />
          <Title text={data.title} h={2} css="text-3xl sm:text-4xl" />
          <Bodytext text={data.description} css="text-base-content" />
        </div>
      </div>

      {/* LIST SECTION */}
      <div className="mt-10 sm:mt-14">
        <ListItem2 data={data.item} />
      </div>
    </Wrapper>
  );
}
