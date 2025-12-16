import React from "react";
import HalvoraHeadline from "./ui/HalvoraHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";
import HalvoraPrimaryButton from "./ui/HalvoraPrimaryButton";
import HalvoraImage from "./ui/HalvoraImage";

export default function HalvoraHero({ data, secId }) {
  const { title, subtitle, ctaText, backgroundImage, image } = data.hero;

  return (
    <div
      id={secId}
      className="relative min-h-screen flex bg-cover lg:bg-left bg-center w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay: Warm Brown, slightly stronger for legibility without card */}
      <div className="absolute inset-0 bg-[#6B4423]/60"></div>
      <div
        className="absolute top-0 bg-content w-full min-h-screen lg:right-50 right-0 sm:bg-bottom-right bg-bottom bottom-0  bg-no-repeat lg:bg-size-[auto_800px] sm:bg-size-[auto_650px] bg-size-[auto_450px]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="mx-auto lg:w-10/12 w-full min-h-screen gap-10 relative">
        <div className="relative  flex sm:items-center items-start sm:mt-0 mt-50 min-h-screen lg:w-5/12 sm:w-7/12">
          <div className="relative  space-y-8 px-6  animate-in fade-in zoom-in duration-1000 w-full sm:text-start text-center">
            <HalvoraHeadline text={title} className="text-white drop-shadow-lg leading-tight font-serif italic sm:text-xl text-2xl" />
            <HalvoraBodyText text={subtitle} className="text-[#FFF5EA] font-light tracking-wide mx-auto" />

            <div>
              <HalvoraPrimaryButton className="btn-lg px-12 bg-[#D48F8F] hover:bg-[#c07d7d] border-none text-white shadow-2xl hover:shadow-[#D48F8F]/50 hover:-translate-y-1 rounded-full text-lg">
                {ctaText}
              </HalvoraPrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
