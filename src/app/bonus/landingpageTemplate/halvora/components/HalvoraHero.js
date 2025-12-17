import React from "react";
import HalvoraHeadline from "./ui/HalvoraHeadline";
import HalvoraBodyText from "./ui/HalvoraBodyText";
import HalvoraPrimaryLinkButton from "./ui/HalvoraPrimaryLinkButton";

export default function HalvoraHero({ data, secId, target }) {
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
      <div className="absolute inset-0 bg-accent/60"></div>
      <div
        className="absolute top-0 bg-content w-full min-h-screen lg:right-50 right-0 sm:bg-right-bottom bg-bottom bottom-0  bg-no-repeat lg:bg-[length:auto_800px] sm:bg-[length:auto_650px] bg-[length:auto_450px]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="mx-auto lg:w-10/12 w-full min-h-screen gap-10 relative">
        <div className="relative  flex sm:items-center items-start sm:mt-0 mt-50 min-h-screen lg:w-5/12 sm:w-7/12">
          <div className="relative  space-y-8 px-6  animate-in fade-in zoom-in duration-1000 w-full sm:text-start text-center">
            <HalvoraHeadline text={title} className="text-accent-content drop-shadow-lg leading-tight font-serif italic sm:text-xl text-2xl" />
            <HalvoraBodyText text={subtitle} className="text-accent-content/70 font-light tracking-wide mx-auto" />

            <div>
              <HalvoraPrimaryLinkButton href={target} className="btn-lg">
                {ctaText}
              </HalvoraPrimaryLinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
