import React from "react";
import IdSection from "./ui/IdSection";
import Title from "./ui/Title";
import WrapperImage from "./ui/WrapperImage";
import LinkBtnPrimary from "./ui/LinkBtnPrimary";
import CountdownMini from "@/app/component/home/countdownMini";
import Bodytext from "./ui/BodyText";
import { FaArrowRight } from "react-icons/fa6";

export default function ClaimBonusKalamana({ secId, linkTarget1, data }) {
  return (
    <WrapperImage src={data.background} alt={data.title} roundedBrand="no">
      <div className="relative w-full overflow-visible space-y-10">
        <div className="flex flex-col gap-10 items-center text-base-100">
          <div className="text-center w-full space-y-5">
            <span className=" text-white">
              <IdSection secId={secId} />
            </span>
            <Title text={data.title} h={2} css="text-3xl text-white" />
            <Bodytext text={data.description} css="text-white" />
          </div>
          <div>
            <CountdownMini cssStyle="no" />
          </div>
          <div className=" flex sm:flex-row flex-col gap-5 animate-bounce">
            <LinkBtnPrimary href={linkTarget1} linkText="dapatkan bonus" icon={<FaArrowRight />} />
          </div>
        </div>
      </div>
    </WrapperImage>
  );
}
