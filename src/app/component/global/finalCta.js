import React from "react";
import BtnLinkPrimary from "./btnLinkPrimary";
import { FaArrowRight } from "react-icons/fa6";
import BtnLinkSecondary from "./btnLinkSecondary";
import { SiWhatsapp } from "react-icons/si";
import TextDescription from "./textDescription";

export default function FinalCta({ id, title, description, headAlign, bg, btn, ctaTxt1, ctaTxt2, btnUrl1, btnUrl2 }) {
  const textFx = bg === "" || bg === "bg-transparent" ? "" : "text-neutral-content";
  const btnFX =
    btn === 1 ? (
      <BtnLinkPrimary btnUrl={btnUrl1} btnTxt={ctaTxt1} btnFull={false} iconRight={<FaArrowRight />} btnStyle="" />
    ) : (
      <span className="flex flex-col sm:flex-row gap-3 justify-center ">
        <BtnLinkSecondary btnUrl={btnUrl2} btnTxt={ctaTxt2} btnFull={false} iconRight={<SiWhatsapp />} btnStyle="" />
        <BtnLinkPrimary btnUrl={btnUrl1} btnTxt={ctaTxt1} btnFull={false} iconRight={<FaArrowRight />} btnStyle="" />
      </span>
    );
  return (
    <section id={id}>
      <div className={`container  w-full mt-4 rounded-bl-3xl ${bg} px-10`}>
        <div className={`sm:w-2/3 w-full ${headAlign ? "" : "mx-auto  text-center"}`}>
          <p className="text-base font-semibold text-primary capitalize" data-aos="fade-up">
            {id.replace(/-/g, " ")}
          </p>
          <div className={textFx} data-aos="fade-up">
            <TextDescription title={title} description={description} />
          </div>
        </div>
        <div className="pt-10 text-center mx-auto">{btnFX}</div>
      </div>
    </section>
  );
}
