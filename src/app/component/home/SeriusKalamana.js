import React from "react";
import IdSection from "./ui/IdSection";
import Title from "./ui/Title";
import ImageStyle from "./ui/ImageStyle";
import WrapperImage from "./ui/WrapperImage";
import ListItemThumbnail from "./ui/ListItemThumbnail";
import Bodytext from "./ui/BodyText";

export default function SeriusKalamana({ secId, data }) {
  return (
    <WrapperImage src={data.background} alt={data.title}>
      <div className="relative w-full overflow-visible space-y-10">
        <div className="flex sm:flex-row flex-col gap-10 items-center text-base-100">
          <div className="sm:w-6/12 w-full space-y-5 text-white">
            <IdSection secId={secId} />
            <Title text={data.title} h={2} css="text-3xl" />
            <Bodytext text={data.description} />
          </div>
          <div className="sm:w-6/12 w-full">
            <ImageStyle src={data.image} alt={data.title} />
          </div>
        </div>
        <ListItemThumbnail data={data.item} />
      </div>
    </WrapperImage>
  );
}
