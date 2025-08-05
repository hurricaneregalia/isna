import React from "react";
import WrapperImage from "./ui/WrapperImage";
import Title from "./ui/Title";
import IdSection from "./ui/IdSection";
import ServicesJson from "./ui/ServicesJson";

export default function LayananKalamana({ secId, data }) {
  return (
    <WrapperImage src={data.background} alt={data.title} secId={secId}>
      <div className="relative w-full overflow-visible space-y-10">
        <div className="flex flex-col gap-10 items-center text-base-100">
          <div className="text-center w-full space-y-5">
            <span className=" text-white">
              <IdSection secId={secId} />
            </span>
            <Title text={data.title} h={2} css="text-3xl text-white" />
          </div>
          <ServicesJson />
        </div>
      </div>
    </WrapperImage>
  );
}
