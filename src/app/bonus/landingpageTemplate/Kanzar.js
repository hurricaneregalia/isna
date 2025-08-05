import React from "react";
import HeroKanzar from "./kanzar/HeroKanzar";
import HeaderLandingGlobal from "../[slug]/HeaderLandingGlobal";
import KebutuhanKanzar from "./kanzar/KebutuhanKanzar";
import ManfaatKanzar from "./kanzar/ManfaatKanzar";
import RevelynKanzar from "./kanzar/RevelynKanzar";
import ProdukKanzar from "./kanzar/ProdukKanzar";
import TestimoniKanzar from "./kanzar/TestimoniKanzar";
import CTAKanzar from "./kanzar/CTAKanzar";
import PenawaranKanzar from "./kanzar/PenawaranKanzar";
import FAQKanzar from "./kanzar/FAQKanzar";
export default function Kanzar({ siteData, siteName }) {
  return (
    <>
      <HeaderLandingGlobal siteName={siteName} bgColor="bg-primary" widthNavbar="max-w-7xl" />
      <HeroKanzar />
      <KebutuhanKanzar />
      <ManfaatKanzar />
      <RevelynKanzar />
      <ProdukKanzar />
      <TestimoniKanzar />
      <CTAKanzar />
      <PenawaranKanzar />
      <FAQKanzar />
    </>
  );
}
