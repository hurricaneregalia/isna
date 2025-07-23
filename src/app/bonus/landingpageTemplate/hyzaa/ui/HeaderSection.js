import React from "react";
import HeadlineText from "./HeadlineText";

export default function HeaderSection({ label, labelColor, headline, headlineColor, mxAuto }) {
  const labelColorFx = labelColor ? labelColor : "tex-primary";
  const hedalineColorFx = headlineColor ? headlineColor : "";
  const mxAutoFx = mxAuto ? mxAuto : "mx-auto";
  return (
    <>
      <p className={`uppercase text-sm tracking-wider ${labelColorFx} mb-2`}>{label}</p>
      <div className="border-t border-base-content/20 w-16 mx-auto mb-4" />
      <div className={`mb-12 sm:w-8/12 w-full ${mxAutoFx} ${hedalineColorFx} capitalize`} data-aos="fade-up" data-aos-delay="100">
        <HeadlineText h="h2" text={headline} />
      </div>
    </>
  );
}
