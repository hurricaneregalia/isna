import React from "react";
import { HalvoraData } from "./halvora/database/HalvoraDB";

// Components
import HalvoraNavbar from "./halvora/components/HalvoraNavbar";
import HalvoraHero from "./halvora/components/HalvoraHero";
import HalvoraTrust from "./halvora/components/HalvoraTrust";
import HalvoraAbout from "./halvora/components/HalvoraAbout";
import HalvoraProduct from "./halvora/components/HalvoraProduct";
import HalvoraBonus from "./halvora/components/HalvoraBonus";
import HalvoraTestimonials from "./halvora/components/HalvoraTestimonials";
import HalvoraCTA from "./halvora/components/HalvoraCTA";
import HalvoraFooter from "./halvora/components/HalvoraFooter";

export default function Halvora() {
  return (
    <div className="min-h-screen font-sans bg-white text-stone-700 overflow-x-hidden selection:bg-emerald-200">
      <HalvoraNavbar data={HalvoraData} />
      
      <main>
        <HalvoraHero data={HalvoraData} />
        <HalvoraTrust data={HalvoraData} />
        <HalvoraAbout data={HalvoraData} />
        <HalvoraProduct data={HalvoraData} />
        <HalvoraBonus data={HalvoraData} />
        <HalvoraTestimonials data={HalvoraData} />
        <HalvoraCTA data={HalvoraData} />
      </main>

      <HalvoraFooter data={HalvoraData} />
    </div>
  );
}
