"use client";
import React, { useState } from "react";
import KanzarNavigation from "./kanzar/KanzarNavigation";
import KanzarHero from "./kanzar/KanzarHero";
import KanzarAbout from "./kanzar/KanzarAbout";
import KanzarProduct from "./kanzar/KanzarProduct";
import KanzarProof from "./kanzar/KanzarProof";
import KanzarTestimonials from "./kanzar/KanzarTestimonials";
import KanzarCTA from "./kanzar/KanzarCTA";
import KanzarBonus from "./kanzar/KanzarBonus";
import KanzarFooter from "./kanzar/KanzarFooter";
import { db } from "./kanzar/database/KanzarData";
import KanzarOrderForm from "./kanzar/KanzarOrderForm";

export default function Kanzar({ siteData, siteName }) {
  const [isOrderOpen, setOrderOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to open the order modal with a pre-selected product
  const openOrder = (productName) => {
    setSelectedProduct(productName || null);
    setOrderOpen(true);
  };

  return (
    <>
      {/* <HeaderLandingGlobal siteName={siteName} bgColor="bg-primary" widthNavbar="max-w-7xl" /> */}
      <KanzarNavigation siteName={siteName} data={db} />
      <KanzarHero data={db} />
      <KanzarAbout data={db} secId="about" />
      <KanzarProduct data={db} secId="product" onOrder={(productName) => openOrder(productName)} />
      <KanzarProof data={db} secId="proof" />
      <KanzarTestimonials data={db} secId="testimonials" />
      <KanzarCTA data={db} secId="cta" onOrder={() => openOrder()} />
      <KanzarBonus data={db} secId="bonus" onOrder={() => openOrder()} />
      <KanzarFooter data={db} secId="footer" />
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ${
          isOrderOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none delay-200"
        }`}
      >
        <div className="absolute inset-0 bg-black/80 transition-opacity duration-500 ease-in-out" onClick={() => setOrderOpen(false)} />
        <div
          className={`w-full max-w-3xl relative z-10 transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${
            isOrderOpen ? "scale-100 translate-y-0 opacity-100" : "scale-90 translate-y-12 opacity-0"
          }`}
        >
          <KanzarOrderForm data={db} initialProduct={selectedProduct} onCancel={() => setOrderOpen(false)} />
        </div>
      </div>
    </>
  );
}
