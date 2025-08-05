import React from "react";
import IdSection from "./ui/IdSection";
import Title from "./ui/Title";
import ImageStyle from "./ui/ImageStyle";
import Wrapper from "./ui/Wrapper";
import ListItem2 from "./ui/ListItem2";
import Bodytext from "./ui/BodyText";

export default function PentingKalamana({ secId, data }) {
  return (
    <Wrapper>
      <div className="flex flex-col-reverse sm:flex-row gap-10 items-center mb-10">
        <div id="image" className=" sm:w-6/12 w-full">
          <ImageStyle src={data.image} alt={data.title} objcetPos="object-left" />
        </div>
        <div id="text" className=" sm:w-6/12 w-full space-y-5 ">
          <IdSection secId={secId ? secId : "id-belum-di-set"} />
          <Title text={data.title} h={2} css="text-3xl" />
          <Bodytext text={data.description} />
        </div>
      </div>
      <ListItem2 data={data.item} />
    </Wrapper>
  );
}
