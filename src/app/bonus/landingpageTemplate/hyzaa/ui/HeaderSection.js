import React from "react";
import HeadlineText from "./HeadlineText";

export default function HeaderSection({ label, labelColor, headline, headlineColor, mxAuto, aos = "" }) {
  const labelColorFx = labelColor ? labelColor : "text-primary";
  const headlineColorFx = headlineColor ? headlineColor : "";
  const mxAutoFx = mxAuto ? mxAuto : "mx-auto";

  return (
    <>
      <p className={`uppercase text-sm tracking-wider ${labelColorFx} mb-2`}>{label}</p>
      <div className="border-t border-base-content/20 w-16 mx-auto mb-4" />
      <div className={`mb-12 sm:w-8/12 w-full ${mxAutoFx} ${headlineColorFx} capitalize`} {...(aos ? { "data-aos": aos } : {})}>
        <HeadlineText h="h2" text={headline} />
      </div>
    </>
  );
}
