import React from "react";
import { HalvoraData } from "./halvora/database/HalvoraDB";

// Components
import HalvoraNavbar from "./halvora/components/HalvoraNavbar";
import HalvoraHero from "./halvora/components/HalvoraHero";
import HalvoraTrust from "./halvora/components/HalvoraTrust";
import HalvoraAbout from "./halvora/components/HalvoraAbout";
import HalvoraProduct from "./halvora/components/HalvoraProduct";
import HalvoraBestFor from "./halvora/components/HalvoraBestFor";
import HalvoraBonus from "./halvora/components/HalvoraBonus";
import HalvoraTestimonials from "./halvora/components/HalvoraTestimonials";
import HalvoraCTA from "./halvora/components/HalvoraCTA";
import HalvoraFooter from "./halvora/components/HalvoraFooter";

export default function Halvora() {
  return (
    <div className="min-h-screen font-sans bg-white text-stone-700 overflow-x-hidden selection:bg-rose-200">
      <HalvoraNavbar data={HalvoraData} />
      
      <main>
        <HalvoraHero data={HalvoraData} secId="home" />
        <HalvoraAbout data={HalvoraData} secId="about" />
        <HalvoraBestFor data={HalvoraData} secId="best-for" />
        <HalvoraProduct data={HalvoraData} secId="product" />
        <HalvoraTrust data={HalvoraData}  secId="keunggulan" />
        <HalvoraBonus data={HalvoraData} secId="bonus" />
        <HalvoraTestimonials data={HalvoraData} secId="testimonials" />
        <HalvoraCTA data={HalvoraData} />
      </main>

      <HalvoraFooter data={HalvoraData} />
    </div>
  );
}
