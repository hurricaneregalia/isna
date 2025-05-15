import React from "react";
import TextDescription from "./textDescription"; // Perbaikan nama import
import BtnLinkPrimary from "./btnLinkPrimary";
import { FaArrowRight } from "react-icons/fa";
import BtnLinkSecondary from "./btnLinkSecondary";
import { SiWhatsapp } from "react-icons/si";

export default function FinalCta({
  id,
  title,
  description,
  headAlign,
  bg,
  btn,
  ctaTxt1,
  ctaTxt2,
  children,
  btnUrl1,
  btnUrl2,
  mtTop,
  rounded,
  btnStyle,
}) {
  const textFx = bg === "" || bg === "bg-transparent" ? "" : "text-neutral-content";
  const btnFX =
    btn === 1 ? (
      <BtnLinkPrimary btnUrl={btnUrl1} btnTxt={ctaTxt1} btnFull={false} iconRight={<FaArrowRight />} btnStyle={btnStyle} />
    ) : (
      <span className="flex flex-col sm:flex-row gap-3 justify-center">
        <BtnLinkSecondary btnUrl={btnUrl2} btnTxt={ctaTxt2} btnFull={false} iconRight={<SiWhatsapp />} btnStyle={btnStyle} />
        <BtnLinkPrimary btnUrl={btnUrl1} btnTxt={ctaTxt1} btnFull={false} iconRight={<FaArrowRight />} btnStyle={btnStyle} />
      </span>
    );
  const roundedFX = rounded ? rounded : "rounded-bl-3xl";

  const marginTop = mtTop ? mtTop : "mt-4";

  return (
    <section id={id} className="w-full">
      <div className={`w-full ${marginTop} ${roundedFX} ${bg || "bg-default"} px-10`}>
        <div className={`sm:w-2/3 w-full ${headAlign ? "" : "mx-auto text-center"}`}>
          <p className="text-base font-semibold text-amber-300 capitalize" data-aos="fade-up">
            {id.replace(/-/g, " ")}
          </p>
          <div className={textFx} data-aos="fade-up">
            <TextDescription title={title} description={description} />
          </div>
        </div>
        {children}
        <div className="pt-10 text-center mx-auto">{btnFX}</div>
      </div>
    </section>
  );
}
