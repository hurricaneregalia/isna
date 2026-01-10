"use client";
import ExalviaDatabase from "@/app/exalvia/database/ExalviaDatabase";
import ExalviaBenefits from "@/app/exalvia/sections/ExalviaBenefits";
import ExalviaCTA1 from "@/app/exalvia/sections/ExalviaCTA1";
import ExalviaFact from "@/app/exalvia/sections/ExalviaFact";
import ExalviaFenomenon from "@/app/exalvia/sections/ExalviaFenomenon";
import ExalviaFooter from "@/app/exalvia/sections/ExalviaFooter";
import ExalviaHero from "@/app/exalvia/sections/ExalviaHero";
import ExalviaNavbar from "@/app/exalvia/sections/ExalviaNavbar";
import React from "react";
import HeaderFooterClient from "../global/HeaderFooterClient";

// Import all sections

const layoutLandingPage = () => {
  const data = ExalviaDatabase;
  const ctaLink = "exalvia/brand-checker";

  return (
    <div className="min-h-screen bg-base-100 text-base-content font-montserrat">
      <ExalviaNavbar data={data.navbar} />
      <ExalviaHero data={data.hero} secId="hero" linkTarget="masalah" />
      <ExalviaFact data={data.fact} secId="masalah" />
      <ExalviaFenomenon data={data.fenomenon} secId="solusi" reverse={true} />
      <ExalviaCTA1 data={data.cta1} secId="scan" targetLink={ctaLink} />
      <ExalviaBenefits data={data.benefits} secId="keuntungan" targetLink={ctaLink} />
      <ExalviaFooter data={data.footer} secId="footer" />
      <HeaderFooterClient />
    </div>
  );
};

export default layoutLandingPage;
