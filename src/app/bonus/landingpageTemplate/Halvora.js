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
import ModalThemes from "@/app/component/global/ModalThemes";
import ThemeChanger from "@/app/component/global/ThemeChanger";
import { FaPalette } from "react-icons/fa6";

export default function Halvora({ siteData, siteName }) {
  return (
    <div className="min-h-screen font-sans bg-white text-stone-700 overflow-x-hidden selection:bg-rose-200">
      <HalvoraNavbar data={HalvoraData}>
        <label className="swap swap-rotate">
          <ModalThemes title="Pilih Tema" btnTxt={<FaPalette />} modalId="theme-modal" textColor="text-white" borderColor="border-white/40">
            <ThemeChanger />
          </ModalThemes>
        </label>
      </HalvoraNavbar>

      <main>
        <HalvoraHero data={HalvoraData} secId="home" target="product" />
        <HalvoraAbout data={HalvoraData} secId="about" />
        <HalvoraBestFor data={HalvoraData} secId="best-for" />
        <HalvoraProduct data={HalvoraData} secId="product" phoneNumber={siteData.phone} />
        <HalvoraTrust data={HalvoraData} secId="keunggulan" />
        <HalvoraBonus data={HalvoraData} secId="bonus" target="product" />
        <HalvoraTestimonials data={HalvoraData} secId="testimonials" />
        <HalvoraCTA data={HalvoraData} target="product" />
      </main>

      <HalvoraFooter data={HalvoraData} phoneNumber={siteData.phone} />
    </div>
  );
}
