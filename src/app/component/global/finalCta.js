import React from "react";
import TextDesctiption from "./textDesctiption";
import BtnLinkPrimary from "./btnLinkPrimary";
import { FaArrowRight } from "react-icons/fa6";

export default function FinalCta({ id, title, description, headAlign, bg, ctaTxt }) {
  const textFx = bg === "" || bg === "bg-transparent" ? "" : "text-neutral-content";
  return (
    <section id={id}>
      <div className={`container lg:w-8/12 p-20 mx-auto rounded-bl-3xl ${bg} `}>
        <div className={`sm:w-2/3 w-full ${headAlign ? "" : "mx-auto  text-center"}`}>
          <p className="text-base font-semibold text-primary capitalize">{id.replace(/-/g, " ")}</p>
          <div className={textFx}>
            <TextDesctiption title={title} description={description} />
          </div>
        </div>
        <div className="pt-10 text-center">
          <BtnLinkPrimary btnUrl="#layanan" btnTxt={ctaTxt} btnFull={false} iconRight={<FaArrowRight />} btnStyle="" />
        </div>
      </div>
    </section>
  );
}
