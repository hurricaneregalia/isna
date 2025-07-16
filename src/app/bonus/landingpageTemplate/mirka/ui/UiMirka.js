import React from "react";
import HeroSectionMirka from "../HeroSectionMirka";
import ProblemSectionMirka from "../ProblemSectionMirka";
import SolutionSectionMirka from "../SolutionSectionMirka";
import BenefitSectionMirka from "../BenefitSectionMirka";
import PortfolioSectionMirka from "../PortfolioSectionMirka";
import PricingSectionMirka from "../PricingSectionMirka";
import TestimonialSectionImageMirka from "../TestimonialSectionImageMirka";
import FAQSectionMirka from "../FAQSectionMirka";
import CallToActionSectionMirka from "../CallToActionSectionMirka";

export default function UiMirka() {
  return (
    <div>
      <HeroSectionMirka />
      <ProblemSectionMirka />
      <BenefitSectionMirka />
      <PortfolioSectionMirka />
      <PricingSectionMirka secId="daftar" />
      <TestimonialSectionImageMirka />
      <FAQSectionMirka />
      <CallToActionSectionMirka />
    </div>
  );
}
