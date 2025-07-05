import React from "react";
import ButtonPrimaryRihala from "./ButtonPrimaryRihala";
import ButtonSecondaryRihala from "./ButtonSecondaryRihala";
import TitleRihala from "./TitleRihala";
import BodyTextRihala from "./BodyTextRihala";

export default function HeroCtaRihala({ title, subtitle, primaryText, primaryLink, secondaryText, secondaryLink, aos }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  return (
    <div className="text-center max-w-3xl mx-auto" {...aosFX}>
      <TitleRihala text={title} />
      <BodyTextRihala text={subtitle} />
      <div className="mt-6 flex justify-center space-x-4">
        <ButtonPrimaryRihala text={primaryText} href={primaryLink} />
        {secondaryText && secondaryLink && <ButtonSecondaryRihala text={secondaryText} href={secondaryLink} />}
      </div>
    </div>
  );
}
