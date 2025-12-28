"use client";
import React from "react";
import ExalviaDatabase from "./database/ExalviaDatabase";

// Import all sections
import ExalviaNavbar from "./sections/ExalviaNavbar";
import ExalviaHero from "./sections/ExalviaHero";
import ExalviaClientLogo from "./sections/ExalviaClientLogo";
import ExalviaFact from "./sections/ExalviaFact";
import ExalviaFenomenon from "./sections/ExalviaFenomenon";
import ExalviaSolution from "./sections/ExalviaSolution";
import ExalviaHadist from "./sections/ExalviaHadist";
import ExalviaFeatures from "./sections/ExalviaFeatures";
import ExalviaHowItWork from "./sections/ExalviaHowItWork";
import ExalviaBenefits from "./sections/ExalviaBenefits";
import ExalviaService from "./sections/ExalviaService";
import ExalviaFlow from "./sections/ExalviaFlow";
import ExalviaCTA1 from "./sections/ExalviaCTA1";
import ExalviaBonus from "./sections/ExalviaBonus";
import ExalviaTestimonials from "./sections/ExalviaTestimonials";
import ExalviaFAQ from "./sections/ExalviaFAQ";
import ExalviaFooter from "./sections/ExalviaFooter";

const Exalvia = () => {
  const data = ExalviaDatabase;

  return (
    <main className="min-h-screen bg-base-100 text-base-content font-montserrat">
      <ExalviaNavbar data={data.navbar} />
      <ExalviaHero data={data.hero} secId="hero" linkTarget="fact" />
      <ExalviaFact data={data.fact} secId="fact" />
      <ExalviaFenomenon data={data.fenomenon} secId="fenomenon" />
      <ExalviaCTA1 data={data.cta1} secId="cta1" targetLink="/bonus/landingpageTemplate/exalvia/brand-checker" />
      {/* 
      <ExalviaService data={data.service} secId="service" />
      <ExalviaSolution data={data.solution} secId="solution" />
      <ExalviaClientLogo data={data.clientLogo} secId="clients" />
      <ExalviaHadist data={data.hadist} secId="hadist" />
      <ExalviaFeatures data={data.features} secId="features" />
      <ExalviaHowItWork data={data.howItWork} secId="how-it-works" />
      <ExalviaBenefits data={data.benefits} secId="benefits" />
      <ExalviaFlow data={data.flow} secId="flow" />
      <ExalviaBonus data={data.bonus} secId="bonus" />
      <ExalviaTestimonials data={data.testimonials} secId="testimonials" />
      <ExalviaFAQ data={data.faq} secId="faq" />
       */}
      <ExalviaFooter data={data.footer} secId="footer" />
    </main>
  );
};

export default Exalvia;
