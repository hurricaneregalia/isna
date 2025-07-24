import React from "react";
import HeroSectionZemira from "./zemira/HeroSectionZemira";
import ProblemSectionZemira from "./zemira/ProblemSectionZemira";
import SolutionSectionZemira from "./zemira/SolutionSectionZemira";
import WorkProcessZemira from "./zemira/WorkProcessZemira";
import TestimonialsZemira from "./zemira/TestimonialsZemira";
import SpecialOfferZemira from "./zemira/SpecialOfferZemira";
import FAQSectionZemira from "./zemira/FAQSectionZemira";
import GallerySectionZemira from "./zemira/GallerySectionZemira";
import { FaYoutube, FaAmazon, FaApple, FaFacebook, FaGoogle, FaSpotify, FaWindows, FaWordpress } from "react-icons/fa6";

import {
  HiOutlineChat,
  HiOutlineLightBulb,
  HiOutlineCube,
  HiOutlineHome,
  HiClock,
  HiLightBulb,
  HiCurrencyDollar,
  HiUserGroup,
  HiSparkles,
  HiLightningBolt,
  HiShieldCheck,
  HiUserCircle,
  HiOutlineGift,
  HiOutlineClock,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import HeaderLandingGlobal from "../[slug]/HeaderLandingGlobal";
import FooterLandingPageOnly from "../[slug]/FooterLandingPageOnly";

const dataZemira = {
  heroData: {
    headline: "LOREM IPSUM DOLOR SIT AMET. CONSECTETUR ADIPISCING ELIT QUISQUE.",
    subheadline: "Vitae nunc velit, dictum non porta quam. Etiam in magna consectetur, eleifend tortor.",
    image: "/images/templateLandingPageBonus/Zemira/images/photo-1606744888344-493238951221.webp",
    imageAlt: "Luxury Interior Design",
  },
  faq: {
    heading: "Fringilla semper felis quisque",
    subtitle: "Maecenas elit nulla",
    description: "Nullam eget felis sed neque. Suscipit non eget risus.",
    ctaTitle: "Diam vel aliquam?",
    ctaSubTile: "Tempor nunc accumsan ac. Ipsum sit amet nunc.",
    items: [
      {
        question: "Velit in arcu sem. Pellentesque habitant morbi?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        question: "Quisque in mauris odio. Fusce eget lacus laoreet?",
        answer:
          "Proin vel velit nisl. Curabitur vitae felis eu turpis. In hac habitasse platea dictumst.\n\n- Sed non risus: 3-7 dolor nunc\n- Nulla facilisi: 3-8 amet elit\n- Diam in odio: 8-12 tempor quisque\n\nNunc accumsan ante at velit. Vivamus suscipit metus.",
      },
      {
        question: "Aliquam vel sem volutpat. Vestibulum ante ipsum?",
        answer:
          "Maecenas at lorem at nunc. Eget felis at ipsum.\n1. Vitae velit justo\n2. Suscipit et mauris\n3. Porta in odio\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla vitae elit.",
      },
      {
        question: "Curabitur nec odio sit. Phasellus finibus justo?",
        answer: "Phasellus in tellus a nulla.\n\n1. 30% feugiat vel\n2. 40% aliquam eu\n3. 30% ultrices diam\n\nEtiam at turpis sit amet. Quisque non magna.",
      },
      {
        question: "Duis sed felis in. Suspendisse potenti nullam?",
        answer: "Vivamus in arcu non:\n- Commodo sit amet ante.\n- Erat in ipsum et.\n- Faucibus quam sed arcu.\n\nNunc sed velit sit amet. Praesent interdum.",
      },
      {
        question: "Donec nec mauris in. Class aptent taciti sociosqu?",
        answer: "Integer eget velit ac velit. Eros nam eu felis.\n- Tortor accumsan nulla quam.\n- Leo non eget erat.\n- Bibendum et ante.\n\nAdipiscing elit 0,5% nunc quisque. Dignissim nec ante.",
      },
    ],
  },
  portfolioImages: [
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1571460.jpg",
      title: "Ante velit nullam",
      subtitle: "Sed feugiat ipsum",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1457842.jpg",
      title: "Orci vitae aliquam",
      subtitle: "Tempus sem massa",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1643383.jpg",
      title: "Morbi ac neque",
      subtitle: "Eget viverra turpis",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-280232.jpg",
      title: "Duis ut dolor",
      subtitle: "In hac habitasse",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-1866149.jpg",
      title: "Quisque at nulla",
      subtitle: "Curabitur blandit",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-271743.jpg",
      title: "Phasellus et ipsum",
      subtitle: "Viverra magna",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-2082090.jpg",
      title: "Vestibulum nec odio",
      subtitle: "Donec id felis",
    },
    {
      src: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-374703.jpg",
      title: "Etiam elementum",
      subtitle: "Aenean auctor",
    },
  ],
  problem: {
    header: {
      tag: "Volutpat sit amet",
      title: "Nulla in aliquet dolor",
      highlight: "Proin sed ipsum",
      description: "Nunc sit amet velit. Velit eget quam. Suspendisse potenti nulla.",
    },
    items: [
      {
        icon: <HiClock className="h-6 w-6" />,
        title: "Integer nec felis",
        description: "Aliquam in velit non. Donec eget turpis.",
      },
      {
        icon: <HiLightBulb className="h-6 w-6" />,
        title: "Mauris in nunc",
        description: "Etiam consectetur elit sed. Non ipsum vitae.",
      },
      {
        icon: <HiCurrencyDollar className="h-6 w-6" />,
        title: "Sed sit amet",
        description: "Orci vitae velit. Fusce at magna.",
      },
      {
        icon: <HiUserGroup className="h-6 w-6" />,
        title: "Vestibulum ante ipsum",
        description: "Nam eu felis non. In hac habitasse.",
      },
    ],
    image: {
      url: "/images/templateLandingPageBonus/Zemira/images/photo-1522708323590-d24dbb6b0267.jpg",
      alt: "Profesional menghadapi tantangan desain interior",
    },
  },
  text: {
    sectionTitle: "Donec eu dolor nec",
    sectionSubtitle: "Maecenas at lorem",
    sectionIntro: "Suspendisse potenti. Nullam in elit. Eget ipsum nunc.",
    benefits: [
      {
        icon: <HiSparkles className="h-8 w-8" />,
        title: "Phasellus et nisl",
        description: "Vitae nunc velit. Ipsum sed velit.",
        details: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
      },
      {
        icon: <HiLightningBolt className="h-8 w-8" />,
        title: "Mauris id feugiat",
        description: "Proin vel velit. Erat in velit.",
        details: ["Vivamus accumsan nunc", "Nunc at mauris", "Aenean eget velit"],
      },
      {
        icon: <HiShieldCheck className="h-8 w-8" />,
        title: "Nulla ac turpis",
        description: "Pellentesque habitant morbi. Tristique senectus.",
        details: ["Integer eget felis", "Diam non porta", "Quisque in mauris"],
      },
      {
        icon: <HiUserCircle className="h-8 w-8" />,
        title: "Sed nec felis",
        description: "Donec id turpis. Vitae nunc velit.",
        details: ["Fusce at magna", "Eget quam sed", "Vitae dolor non"],
      },
    ],
    portfolioSectionTitle: "Aliquam vel sem",
    portfolioSectionDesc: "Curabitur vitae felis eu turpis. In hac habitasse platea dictumst.",
    ctaTitle: "Quisque in arcu non velit. Donec id turpis?",
    ctaDesc: "Nunc at mauris eget nulla. Morbi ac neque sit amet.",
    ctaButton: "Vitae nunc",
    ctaBackground: "/images/templateLandingPageBonus/Zemira/images/pexels-photo-271743.jpg",
  },
  howTo: {
    section: {
      badge: "In hac habitasse",
      title: "Mauris at lorem ",
      highlight: "Nullam eget",
      description: "Vitae nunc velit. Dictum non porta quam. Etiam in magna consectetur, eleifend tortor.",
    },
    steps: [
      {
        icon: <HiOutlineChat className="h-8 w-8" />,
        title: "Fusce at magna",
        description: "Proin vel velit nisl. Curabitur vitae felis eu turpis.",
        duration: "1-2 Lorem",
        color: "text-primary",
        bgColor: "bg-primary/10",
      },
      {
        icon: <HiOutlineLightBulb className="h-8 w-8" />,
        title: "Aliquam non sem",
        description: "Sed non risus. Nulla facilisi. Diam in odio.",
        duration: "3-5 Ipsum",
        color: "text-secondary",
        bgColor: "bg-secondary/10",
      },
      {
        icon: <HiOutlineCube className="h-8 w-8" />,
        title: "Integer eget velit",
        description: "Donec id turpis. Maecenas at lorem.",
        duration: "7-14 Dolor",
        color: "text-success",
        bgColor: "bg-success/10",
      },
      {
        icon: <HiOutlineHome className="h-8 w-8" />,
        title: "Phasellus et ipsum",
        description: "Nunc at mauris eget. Vestibulum ante ipsum.",
        duration: "3-7 Sit",
        color: "text-info",
        bgColor: "bg-info/10",
      },
    ],
    guarantee: {
      badge: "Suspendisse",
      title: "Vivamus accumsan",
      highlight: "Nulla in elit",
      description: "Nunc at mauris eget nulla. Morbi ac neque sit amet. Eget quam sed arcu.",
      items: ["Vitae", "Nunc", "Velit", "Dictum"],
    },
  },
  testimonyAndClient: {
    meta: {
      badgeLabel: "Semper",
      title: "Donec id turpis ",
      highlight: "In hac habitasse",
      subtitle: "Maecenas at lorem at nunc. Eget felis at ipsum.",
      trustTitle: "Quisque in arcu",
    },
    testimonials: [
      {
        name: "Luctus Nisi, Sp.KJ",
        profession: "Vitae nunc",
        company: "Dictum non porta",
        quote: "Eget quam sed arcu. Suspendisse potenti nulla. Morbi ac neque sit amet.",
        rating: 5,
        photo: "/images/templateLandingPageBonus/Zemira/images/testimoni/pexels-photo-774909.jpg",
      },
      {
        name: "Iaculis Ipsum, S.H., M.H.",
        profession: "Vestibulum ante",
        company: "Class aptent taciti",
        quote: "Nunc at mauris eget nulla. Morbi ac neque sit amet. Vitae nunc velit dictum.",
        rating: 5,
        photo: "/images/templateLandingPageBonus/Zemira/images/testimoni/pexels-photo-2379004.jpg",
      },
      {
        name: "Amet Vitae",
        profession: "Praesent",
        company: "Integer eget felis",
        quote: "Eget quam sed arcu. Suspendisse potenti nulla. Morbi ac neque sit amet.",
        rating: 5,
        photo: "/images/templateLandingPageBonus/Zemira/images/testimoni/pexels-photo-712521.jpg",
      },
      {
        name: "Consectetur Elit, M.Eng",
        profession: "Proin & Curabitur",
        company: "Nulla facilisi",
        quote: "Nunc at mauris eget nulla. Morbi ac neque sit amet. Vitae nunc velit dictum.",
        rating: 5,
        photo: "/images/templateLandingPageBonus/Zemira/images/testimoni/pexels-photo-2182970.jpg",
      },
    ],
    trustLogos: [
      { icon: <FaGoogle className="w-8 h-8" />, label: "Google" },
      { icon: <FaWindows className="w-8 h-8" />, label: "Microsoft" },
      { icon: <FaWordpress className="w-8 h-8" />, label: "WordPress" },
      { icon: <FaYoutube className="w-8 h-8" />, label: "YouTube" },
      { icon: <FaApple className="w-8 h-8" />, label: "Apple" },
      { icon: <FaAmazon className="w-8 h-8" />, label: "Amazon" },
      { icon: <FaFacebook className="w-8 h-8" />, label: "Facebook" },
      { icon: <FaSpotify className="w-8 h-8" />, label: "Spotify" },
    ],
  },
  offerContent: {
    badgeLabel: "Tempus nunc",
    titleStart: "Suspendisse potenti + ",
    highlight: "Non porta quam",
    titleEnd: " Eleifend tortor",
    description: "Donec id turpis. Maecenas at lorem. Eget felis at ipsum. Suscipit non eget risus.",

    // ✅ Ikon dan label fitur
    listFeatures: [
      {
        icon: <HiOutlineGift className="w-6 h-6 text-base-100" />,
        label: "Vitae nunc velit. Dictum non porta.",
      },
      {
        icon: <HiOutlineClock className="w-6 h-6 text-base-100" />,
        label: "Etiam in magna consectetur. Eleifend tortor.",
      },
      {
        icon: <HiOutlineShieldCheck className="w-6 h-6 text-base-100" />,
        label: "Lorem ipsum dolor. Sit amet consectetur.",
      },
    ],

    quotaLabel: "Quisque in arcu!",
    quotaInfo: "Vivamus accumsan nunc. Nunc at mauris eget.",
    privacyTitle: "Proin vel velit",
    privacySubtitle: "Nunc at mauris eget. Nulla morbi ac.",
    successTitle: "Aenean eget velit!",
    successMessage: "Proin vel velit nisl. Curabitur vitae felis.",
    submitButton: "Sed non risus",
    submitAnother: "Nulla facilisi",
    formTitle: "Dignissim nulla 15%",
    formDescription: "Etiam in magna consectetur. Eleifend tortor. Eget quam sed arcu.",
    legalNote: "Nunc at mauris eget nulla. Morbi ac neque.",
  },
};

export default function Zemira({ siteData, siteName }) {
  const widthSection = "max-w-6xl";
  return (
    <div className="relative">
      <HeaderLandingGlobal siteName={siteName} widthNavbar={widthSection} />
      <HeroSectionZemira secId="hero" data={dataZemira.heroData} secIdTarget="#tantangan-profesi" />
      <ProblemSectionZemira secId="tantangan-profesi" data={dataZemira.problem} />
      <SolutionSectionZemira secId="solusi-tepat" data={dataZemira.text} secIdTarget="#formPendaftaran">
        <GallerySectionZemira secId="portfolio" data={dataZemira.portfolioImages} />
      </SolutionSectionZemira>
      <WorkProcessZemira secId="praktis" data={dataZemira.howTo} />
      <TestimonialsZemira secId="testimoni" data={dataZemira.testimonyAndClient} />
      <SpecialOfferZemira secId="formPendaftaran" data={dataZemira.offerContent} waNumber={siteData.phone} />
      <FAQSectionZemira secId="informasi-penting" data={dataZemira.faq} secIdTarget="#formPendaftaran" />
      <FooterLandingPageOnly siteName={siteName} />
    </div>
  );
}
