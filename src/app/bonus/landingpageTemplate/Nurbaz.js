import { Montserrat, Playfair_Display_SC } from "next/font/google";
import React from "react";
import { FiClock, FiDroplet, FiAward, FiShoppingCart, FiTruck, FiMessageCircle, FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import HeaderLandingGlobal from "../[slug]/HeaderLandingGlobal";
import FooterLandingPageOnly from "../[slug]/FooterLandingPageOnly";
import HeroNurbaz from "./nurbaz/HeroNurbaz";
import ProblemNurbaz from "./nurbaz/ProblemNurbaz";
import SolutionNurbaz from "./nurbaz/SolutionNurbaz";
import PenawaranNurbaz from "./nurbaz/PenawaranNurbaz";
import TestimoniNurbaz from "./nurbaz/TestimoniNurbaz";
import HowtoNurbaz from "./nurbaz/HowtoNurbaz";
import BigCtaNurbaz from "./nurbaz/BigCtaNurbaz";

const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Data constant for content management
const dataNurbaz = {
  metadata: {
    siteName: "Xylos",
    description: "Orci vitae aliquam eget. Tempor nunc accumsan.",
    keywords: ["felis eget nunc", "vitae nunc velit", "dictum non porta", "quam consectetur", "eleifend tortor"],
    ogImage: "/images/templateLandingPageBonus/Nurbaz/images/paul-cuoco-CO2vOhPqlrM-unsplash.jpg",
    socialLinks: [
      {
        platform: "instagram",
        url: "https://instagram.com/horizontime",
        platformUsername: "@horizontime",
      },
      {
        platform: "facebook",
        url: "https://facebook.com/horizontime",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/horizontime",
        platformUsername: "@horizontime",
      },
    ],
  },
  hero: {
    title: "Vestibulum ante ipsum primis",
    subtitle: "Maecenas at lorem at nunc. Eget felis at ipsum.",
    cta: "Curabitur vitae felis",
    imageUrl: "/images/templateLandingPageBonus/Nurbaz/images/paul-cuoco-CO2vOhPqlrM-unsplash.jpg",
    overlayText: "Proin vel velit nisl",
  },
  problem: {
    title: "Nulla facilisi diam in odio",
    points: ["Nunc at mauris eget nulla.", "Morbi ac neque sit amet.", "Vitae nunc velit dictum."],
    imageUrl: "/images/templateLandingPageBonus/Nurbaz/images/photo-1622434641406-a158123450f9.jpg",
  },
  solution: {
    title: "Quisque in arcu non",
    features: [
      {
        title: "Suspendisse potenti",
        description: "Nulla in elit eget. Ipsum nunc velit.",
        icon: <FiAward size={24} />,
      },
      {
        title: "Curabitur blandit",
        description: "Felis eu turpis. In hac habitasse.",
        icon: <FiDroplet size={24} />,
      },
      {
        title: "Mauris id feugiat",
        description: "Proin vel velit nisl. Curabitur vitae.",
        icon: <FiClock size={24} />,
      },
    ],
    gallery: [
      "/images/templateLandingPageBonus/Nurbaz/images/domino-studio-p2WUEFGrAdA-unsplash.jpg",
      "/images/templateLandingPageBonus/Nurbaz/images/bence-balla-schottner-Rm7Qbb1FyQM-unsplash.jpg",
      "/images/templateLandingPageBonus/Nurbaz/images/pat-taylor-12V36G17IbQ-unsplash.jpg",
    ],
  },
  offer: {
    title: "Aliquam vel sem volutpat",
    discount: "25%",
    badge: "Donec nec mauris in",
    features: ["Pellentesque habitant morbi", "Tristique senectus et netus", "Et malesuada fames ac"],
    countdownTarget: new Date().getTime() + 48 * 60 * 60 * 1000, // 48 hours from now
    cta: "Fusce eget",
  },
  process: {
    title: "Phasellus et ipsum nunc",
    steps: [
      {
        title: "Vitae nunc velit",
        description: "Dictum non porta quam",
        icon: <FiShoppingCart size={32} />,
      },
      {
        title: "Etiam in magna",
        description: "Consectetur eleifend tortor",
        icon: <FiMessageCircle size={32} />,
      },
      {
        title: "Quisque in arcu",
        description: "Non velit donec id",
        icon: <FiTruck size={32} />,
      },
    ],
  },
  cta: {
    title: "Nunc at mauris eget nulla",
    subtitle: "Morbi ac neque sit amet. Vitae nunc velit:",
    mainButton: "Dictum non",
    secondaryButton: "Porta",
    whatsappNumber: "6282127902505",
    whatsappText: "Saya mau beli landing page ini",
    imageUrl: "/images/templateLandingPageBonus/Nurbaz/images/alvaro-bernal-RgIKRYhmG2k-unsplash.jpg",
  },
  faq: {
    title: "Felis at ipsum",
    items: [
      {
        question: "Maecenas at lorem at nunc?",
        answer: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi diam in odio.",
      },
      {
        question: "Duis ut velit quisque?",
        answer: "Quisque in arcu non velit. Donec id turpis. Maecenas at lorem. Eget felis at ipsum. Suscipit non eget risus. Nunc at mauris eget nulla.",
      },
      {
        question: "Proin vel velit nisl?",
        answer: "Curabitur vitae felis eu turpis. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
      },
      {
        question: "Phasellus et ipsum nunc?",
        answer: "Aliquam vel sem volutpat. Sed non risus. Nulla facilisi. Diam in odio. Fusce eget lacus laoreet.",
      },
    ],
  },
  footer: {
    logo: "XylosTime",
    description: "Orci vitae aliquam eget. Tempor nunc accumsan.",
    contact: [
      { icon: <FiPhone />, text: "+62 21 9876 5432" },
      { icon: <FiMail />, text: "lorem@ipsum.com" },
      { icon: <FiMapPin />, text: "Dolor Sit Amet 123, Jakarta" },
    ],
    social: [
      { icon: <FiInstagram />, url: "#" },
      { icon: <FiFacebook />, url: "#" },
      { icon: <FiTwitter />, url: "#" },
    ],
    links: [
      { title: "Integer", items: ["Eget", "Felis", "Diam", "Non"] },
      { title: "Porta", items: ["Quisque", "In", "Arcu", "Non"] },
    ],
    copyright: "© 2025 XylosTime. Lorem Ipsum Dolor.",
  },
  testimoni: {
    title: "Erat in velit",
    reviews: [
      {
        name: "Ipsum Dolor",
        location: "Lorem",
        quote: "Sit amet consectetur. Adipiscing elit sed. Proin vel velit. Erat in velit. Nulla facilisi!",
        image: "/images/templateLandingPageBonus/Zaffra/images/photo-1535713875002-d1d0cf377fde.jpg",
        rating: 5,
        badge: "Quisque",
      },
      {
        name: "Sit Amet",
        location: "Consectetur",
        quote: "Adipiscing elit sed. Proin vel velit. Erat in velit. Nulla facilisi. Diam in odio.",
        image: "/images/templateLandingPageBonus/Zaffra/images/photo-1607746882042-944635dfe10e.jpg",
        rating: 5,
      },
      {
        name: "Adipiscing Elit",
        location: "Sed diam",
        quote: "Proin vel velit. Erat in velit. Nulla facilisi. Diam in odio. Nunc at mauris eget!",
        image: "/images/templateLandingPageBonus/Zaffra/images/photo-1560250097-0b93528c311a.jpg",
        rating: 4,
      },
    ],
  },
};

export default async function Nurbaz({ siteData, siteName }) {
  const widthSection = "max-w-6xl";
  return (
    <>
      <HeaderLandingGlobal siteName={siteName} widthNavbar={widthSection} />
      <div className={`${montserrat.className} text-gray-800 overflow-hidden`}>
        <HeroNurbaz data={dataNurbaz.hero} fontTitle={playfair.className} />
        <ProblemNurbaz widthSection={widthSection} data={dataNurbaz} fontTitle={playfair.className} />
        <SolutionNurbaz widthSection={widthSection} data={dataNurbaz.solution} fontTitle={playfair.className} />
        <PenawaranNurbaz widthSection={widthSection} data={dataNurbaz} fontTitle={playfair.className} waNumber={siteData.phone} />
        <TestimoniNurbaz widthSection={widthSection} data={dataNurbaz.testimoni} fontTitle={playfair.className} />
        <HowtoNurbaz widthSection={widthSection} data={dataNurbaz.process} fontTitle={playfair.className} />
        <BigCtaNurbaz widthSection={widthSection} data={dataNurbaz} fontTitle={playfair.className} waNumber={siteData.phone} />
      </div>
      <FooterLandingPageOnly siteName={siteName} />
    </>
  );
}
