import React from "react";
import IdSection from "./ui/IdSection";
import Title from "./ui/Title";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa6";
import WrapperImage from "./ui/WrapperImage";
import Wrapper from "./ui/Wrapper";
import LinkBtnPrimary from "./ui/LinkBtnPrimary";
import LinkBtnOutlineWhatsapp from "./ui/LinkBtnOutlineWhatsapp";

export default function KeinginanKalamana({ secId, linkTarget1, waNumber, data }) {
  return (
    <Wrapper>
      <WrapperImage src={data.background} alt={data.title}>
        <div className="relative w-full overflow-visible space-y-10">
          <div className="flex flex-col gap-10 items-center text-base-100">
            <div className="text-center w-full space-y-5">
              <span className=" text-white">
                <IdSection secId={secId} />
              </span>
              <Title text={data.title} h={2} css="text-3xl text-white" />
            </div>
            <div className=" flex sm:flex-row flex-col gap-5">
              <LinkBtnOutlineWhatsapp phoneNumber={waNumber} message={data.pesanWa} linkText="Konsultasi" icon={<FaWhatsapp />} />
              <LinkBtnPrimary href={linkTarget1} linkText="naikan omzet" icon={<FaArrowRight />} />
            </div>
          </div>
        </div>
      </WrapperImage>
    </Wrapper>
  );
}
