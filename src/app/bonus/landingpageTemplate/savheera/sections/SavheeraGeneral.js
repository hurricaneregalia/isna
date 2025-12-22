import React from "react";
import { savheeraData } from "../database/SavheeraDatabase.js";
import SavheeraHeroSection from "./SavheeraHeroSection";
import SavheeraProblemSection from "./SavheeraProblemSection";
import SavheeraSolutionSection from "./SavheeraSolutionSection";
import SavheeraFeature from "./SavheeraFeature";
import SavheeraProof from "./SavheeraProof";
import SavheeraPricing from "./SavheeraPricing";
import SavheeraBonus from "./SavheeraBonus";
import SavheeraCTA from "./SavheeraCTA";
import SavheeraFAQ from "./SavheeraFAQ";
import SavheeraFooter from "./SavheeraFooter";
import SavheeraProductListSection from "./SavheeraProductListSection.js";

export default function SavheeraGeneral() {
  return (
    <>
      <SavheeraHeroSection data={savheeraData.hero} secId="hero" />
      <SavheeraProblemSection data={savheeraData.problem} secId="problem" />
      <SavheeraSolutionSection data={savheeraData.solution} secId="solution" />
      <SavheeraFeature data={savheeraData.features} secId="features" />
      <SavheeraProof data={savheeraData.proof} secId="proof" />
      <SavheeraPricing data={savheeraData.pricing} secId="pricing" />
      <SavheeraProductListSection data={savheeraData.productList} secId="product" />
      <SavheeraBonus data={savheeraData.bonus} secId="bonus" />
      <SavheeraCTA data={savheeraData.cta} secId="cta" />
      <SavheeraFAQ data={savheeraData.faq} secId="faq" />
      <SavheeraFooter data={savheeraData.footer} secId="footer" />
    </>
  );
}
