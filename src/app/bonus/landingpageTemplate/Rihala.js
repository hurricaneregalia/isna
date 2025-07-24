import React from "react";
import HeroSectionRihala from "./rihala/HeroSectionRihala";
import ProblemSectionRihala from "./rihala/ProblemSectionRihala";
import ProductSectionRihala from "./rihala/ProductSectionRihala";
import BenefitSectionRihala from "./rihala/BenefitSectionRihala";
import CTAsectionOneRihala from "./rihala/CTAsectionOneRihala";
import HeaderLandingGlobal from "../[slug]/HeaderLandingGlobal";
import TestimoniSectionRihala from "./rihala/TestimoniSectionRihala";
import FooterLandingPageOnly from "../[slug]/FooterLandingPageOnly";
import TripSectionRihala from "./rihala/TripSectionRihala";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import DocumentationSectionRihala from "./rihala/DocumentationSectionRihala";
import FAQSectionRihala from "./rihala/FAQSectionRihala";

const dataRihala = {
  hero: {
    title: "Lorem ipsum dolor sit amet consectetur",
    subtitle: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aboveTitle: "Ut enim ad minim veniam quis nostrud exercitation ullamco.",
    backgroundImageUrl: "/images/templateLandingPageBonus/Rihala/images/photo-1464822759023-fed622ff2c3b.webp",
  },
  problem: {
    title: "Lorem ipsum dolor sit amet consectetur?",
    subtitle: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Problema yang umum ditemukan:",
    image: "/images/templateLandingPageBonus/Rihala/images/photo-1495558685573-aba7573d9c01.jpg",
    painPoints: [
      {
        icon: <FaExclamationTriangle className="text-error text-2xl" />,
        title: "Lorem ipsum dolor.",
        text: "Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
      },
      {
        icon: <FaExclamationTriangle className="text-error text-2xl" />,
        title: "Consectetur adipiscing elit.",
        text: "Eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
      },
      {
        icon: <FaExclamationTriangle className="text-error text-2xl" />,
        title: "Sed do eiusmod tempor.",
        text: "Incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco.",
      },
    ],
  },
  benefit: {
    title: "Lorem ipsum dolor sit amet.",
    subtitle: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    image: "/images/templateLandingPageBonus/Rihala/images/pexels-photo-708392.jpg",
    benefits: [
      {
        icon: <IoMdCheckmarkCircleOutline className="text-primary text-2xl" />,
        title: "Lorem ipsum dolor sit",
        text: "Amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        icon: <IoMdCheckmarkCircleOutline className="text-primary text-2xl" />,
        title: "Adipiscing elit sed do",
        text: "Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis.",
      },
      {
        icon: <IoMdCheckmarkCircleOutline className="text-primary text-2xl" />,
        title: "Eiusmod tempor incididunt",
        text: "Labore et dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      },
    ],
  },
  product: {
    sectionTitle: "Lorem ipsum dolor sit amet",
    sectionSubtitle: "Consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    sectionDescription: "Dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.",
    products: [
      {
        name: "Basic",
        id: "tier-basic",
        href: "#",
        price: "Rp 500.000",
        quota: "Hingga 5 orang",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
        features: ["Lorem ipsum dolor sit", "Consectetur adipiscing elit", "Sed do eiusmod tempor", "Incididunt ut labore"],
        featured: false,
      },
      {
        name: "Standard",
        id: "tier-standard",
        href: "#",
        price: "Rp 1.200.000",
        quota: "Hingga 10 orang",
        description: "Dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco.",
        features: ["Lorem ipsum dolor sit amet", "Consectetur adipiscing elit sed", "Eiusmod tempor incididunt ut", "Labore et dolore magna", "Ut enim ad minim"],
        featured: false,
      },
      {
        name: "Premium",
        id: "tier-premium",
        href: "#",
        price: "Rp 2.500.000",
        quota: "Hingga 20 orang",
        description: "Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis.",
        features: [
          "Lorem ipsum dolor sit amet",
          "Consectetur adipiscing elit sed do",
          "Eiusmod tempor incididunt ut labore",
          "Dolore magna aliqua ut enim",
          "Minim veniam quis nostrud exercitation",
          "Ullamco laboris nisi ut aliquip",
        ],
        featured: true,
      },
    ],
  },
  documentation: {
    title: "Lorem ipsum dolor sit amet",
    photos: [
      {
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1506744038136-46273834b3fb.jpg",
        alt: "Lorem ipsum dolor sit amet",
        caption: "Lorem ipsum dolor",
        className: "row-span-2",
      },
      {
        src: "/images/templateLandingPageBonus/Rihala/images/pexels-photo-2309266.jpg",
        alt: "Consectetur adipiscing elit",
        caption: "Dolor sit amet",
        className: "",
      },
      {
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1504384308090-c894fdcc538d.jpg",
        alt: "Sed do eiusmod tempor",
        caption: "Incididunt ut labore",
        className: "col-span-2",
      },
      {
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1500534623283-312aade485b7.jpg",
        alt: "Dolore magna aliqua",
        caption: "Ut enim ad",
        className: "",
      },
      {
        src: "/images/templateLandingPageBonus/Rihala/images/premium_photo-1661883853185-165f5869e6d3.jpg",
        alt: "Minim veniam quis",
        caption: "Nostrud exercitation",
        className: "",
      },
      {
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1469474968028-56623f02e42e.jpg",
        alt: "Ullamco laboris nisi",
        caption: "Ut aliquip ex ea",
        className: "",
      },
    ],
  },
  trip: {
    title: "Lorem ipsum dolor sit amet",
    description: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.",
    photos: [
      {
        title: "Rinjani",
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1506744038136-46273834b3fb.jpg",
        alt: "Lorem ipsum dolor sit amet consectetur",
        jarakRute: "26 km",
        waktuTempuh: "3 Hari",
        className: "row-span-2",
      },
      {
        title: "Batur",
        src: "/images/templateLandingPageBonus/Rihala/images/pexels-photo-2082949.jpg",
        alt: "Consectetur adipiscing elit sed",
        jarakRute: "4 km",
        waktuTempuh: "1/2 Hari",
        className: "",
      },
      {
        title: "Prau",
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1435732960391-11053ee5e6b6.jpg",
        alt: "Dolore magna aliqua ut enim",
        jarakRute: "6 km",
        waktuTempuh: "1 Hari",
        className: "col-span-2",
      },
      {
        title: "Pangrango",
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1500534623283-312aade485b7.jpg",
        alt: "Minim veniam quis nostrud",
        jarakRute: "18 km",
        waktuTempuh: "2 Hari",
        className: "",
      },
      {
        title: "Ijen",
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1615729947596-a598e5de0ab3.jpg",
        alt: "Exercitation ullamco laboris nisi",
        jarakRute: "6 km",
        waktuTempuh: "1 Hari",
        className: "",
      },
      {
        title: "Dieng",
        src: "/images/templateLandingPageBonus/Rihala/images/photo-1490682143684-14369e18dce8.jpg",
        alt: "Ut aliquip ex ea commodo",
        jarakRute: "2 km",
        waktuTempuh: "1/2 Hari",
        className: "",
      },
    ],
  },
  testimoni: {
    title: "Lorem ipsum dolor sit amet",
    description: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.",
    testimoniItems: [
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur!",
        date: "20 Juni 2025",
        datetime: "2025-06-20",
        category: { title: "Semeru", href: "#" },
        image: "/images/templateLandingPageBonus/Rihala/testimoni/testimoni.png",
        author: {
          name: "Ayu Lestari",
          role: "Pendaki Pemula",
          href: "#",
          imageUrl: "/images/templateLandingPageBonus/Rihala/testimoni/45.jpg",
        },
      },
      {
        id: 2,
        title: "Dolore magna aliqua ut enim!",
        date: "12 Mei 2025",
        datetime: "2025-05-12",
        category: { title: "Rinjani", href: "#" },
        image: "/images/templateLandingPageBonus/Rihala/testimoni/testimoni.png",
        author: {
          name: "Rizky Aditya",
          role: "Traveler Enthusiast",
          href: "#",
          imageUrl: "/images/templateLandingPageBonus/Rihala/testimoni/32.jpg",
        },
      },
      {
        id: 3,
        title: "Tempor incididunt ut labore",
        date: "8 April 2025",
        datetime: "2025-04-08",
        category: { title: "Merbabu", href: "#" },
        image: "/images/templateLandingPageBonus/Rihala/testimoni/testimoni.png",
        author: {
          name: "Dewi Wulandari",
          role: "Solo Hiker",
          href: "#",
          imageUrl: "/images/templateLandingPageBonus/Rihala/testimoni/33.jpg",
        },
      },
    ],
  },
  cta1: {
    title: "Lorem ipsum dolor sit amet?",
    description: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    backgroundImageUrl: "/images/templateLandingPageBonus/Rihala/images/premium_photo-1672115680958-54438df0ab82.jpg",
    whatsappText: "Lorem ipsum dolor sit amet.",
    whatsappTextKonsultasi: "Consectetur adipiscing elit.",
    ctaNumber: 1,
  },
  cta2: {
    title: "Dolore magna aliqua ut enim",
    description: "Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
    backgroundImageUrl: "/images/templateLandingPageBonus/Rihala/images/premium_photo-1672115680958-54438df0ab82.jpg",
    whatsappText: "Lorem ipsum dolor sit amet.",
    whatsappTextKonsultasi: "Consectetur adipiscing elit.",
    ctaNumber: 2,
  },
  faq: {
    title: "Lorem ipsum dolor sit amet",
    description: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    faqItems: [
      {
        question: "Lorem ipsum dolor sit amet?",
        answer: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "Dolore magna aliqua ut enim?",
        answer: "Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.",
      },
      {
        question: "Sed do eiusmod tempor incididunt?",
        answer: "Labore et dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      },
      {
        question: "Ut enim ad minim veniam?",
        answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
      },
      {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
      },
    ],
  },
};

export default function Rihala({ siteData, siteName }) {
  return (
    <>
      <HeaderLandingGlobal siteName={siteName} />
      <HeroSectionRihala data={dataRihala.hero} />
      <ProblemSectionRihala secId="problem" data={dataRihala.problem} />
      <DocumentationSectionRihala secId="Petualangan" data={dataRihala.documentation} />
      <ProductSectionRihala secId="layanan" data={dataRihala.product} />
      <BenefitSectionRihala secId="keuntungan" data={dataRihala.benefit} />
      <TripSectionRihala secId="trip" data={dataRihala.trip} />
      <CTAsectionOneRihala secId="cta" whatsappNumber={siteData.phone} data={dataRihala.cta1} />
      <TestimoniSectionRihala secId="testimoni" data={dataRihala.testimoni} />
      <CTAsectionOneRihala secId="bonus" data={dataRihala.cta2} whatsappNumber={siteData.phone} />
      <FAQSectionRihala secId="hadiah" data={dataRihala.faq} />
      {/*
       */}
      <FooterLandingPageOnly siteName={siteName} textColor="text-base-100" />
    </>
  );
}
