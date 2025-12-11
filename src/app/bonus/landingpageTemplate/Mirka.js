import React from "react";
import HeroSectionMirka from "./mirka/HeroSectionMirka";
import ProblemSectionMirka from "./mirka/ProblemSectionMirka";
import BenefitSectionMirka from "./mirka/BenefitSectionMirka";
import PortfolioSectionMirka from "./mirka/PortfolioSectionMirka";
import PricingSectionMirka from "./mirka/PricingSectionMirka";
import TestimonialSectionImageMirka from "./mirka/TestimonialSectionImageMirka";
import FAQSectionMirka from "./mirka/FAQSectionMirka";
import CallToActionSectionMirka from "./mirka/CallToActionSectionMirka";
import SolutionSectionMirka from "./mirka/SolutionSectionMirka";
import ProblemSectionMirka2 from "./mirka/ProblemSectionMirka2";

const dataMirka = {
  hero: {
    heading: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT",
    image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-11904557.jpg",
  },

  problem: {
    title: "Lorem Ipsum Dolor Sit Amet?",
    description: "Integer vitae justo eget magna fermentum iaculis. Nulla aliquet enim tortor at auctor.",
    image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-3601097.jpg",
    title2: "Dolor Sit Amet Consectetur?",
    item2: [
      { description: "Vitae turpis massa sed elementum tempus." },
      { description: "Ullamcorper velit sed ullamcorper morbi tincidunt." },
      { description: "Pulvinar etiam non quam lacus suspendisse." },
      { description: "Leo vel orci porta non pulvinar neque." },
    ],
    image2: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-4584411.jpg",
    image3: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-9063615.jpg",
  },

  solution: {
    title: "Vestibulum Mattis Ullamcorper Velit",
    description: "Adipiscing commodo elit at imperdiet dui accumsan. Est ultricies integer quis auctor elit sed.",
    image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-3762927.jpg",
  },

  benefit: {
    title: "Nulla Facilisi Etiam Dignissim",
    item: [
      {
        image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-1082663.jpg",
        title: "Cursus in hac habitasse platea dictumst.",
      },
      {
        image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-1264210.jpg",
        title: "Fringilla est ullamcorper eget nulla facilisi etiam.",
      },
      {
        image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-935743.jpg",
        title: "Enim nunc faucibus a pellentesque sit.",
      },
      {
        image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-3280130.jpg",
        title: "Sed felis eget velit aliquet sagittis id.",
      },
      {
        image: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-2846814.jpg",
        title: "Nibh praesent tristique magna sit amet purus.",
      },
    ],
  },

  portfolio: {
    title: "Donec Et Odio Pellentesque Diam",
    item: [
      {
        id: 1,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-2467287.jpg",
        artistName: "Mauris Gravida",
        className: "lg:col-span-1 sm:col-span-2 sm:row-span-2",
      },
      {
        id: 2,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-1132558.jpg",
        artistName: "Lacus Suspendisse",
        className: "lg:col-span-2 sm:col-span-1",
      },
      {
        id: 3,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-2187601.jpg",
        artistName: "Ultricies Mi",
        className: "md:col-span-1",
      },
      {
        id: 4,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-3679525.jpg",
        artistName: "Curabitur Vulputate",
        className: "md:col-span-1",
      },
      {
        id: 5,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-247599.jpg",
        artistName: "Pellentesque Nec",
        className: "lg:col-span-2 sm:col-span-1",
      },
      {
        id: 6,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-208745.jpg",
        artistName: "Velit Laoreet",
        className: "lg:col-span-2 sm:col-span-1",
      },
      {
        id: 7,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-774664.jpg",
        artistName: "Platea Dictumst",
        className: "md:col-span-1",
      },
      {
        id: 8,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-2787341.jpg",
        artistName: "Facilisi Cras",
        className: "lg:col-span-1 sm:col-span-2 sm:row-span-2",
      },
      {
        id: 9,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-10311435.jpg",
        artistName: "Risus Nec",
        className: "md:col-span-1",
      },
      {
        id: 10,
        imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-1519088.jpg",
        artistName: "Euismod In",
        className: "lg:col-span-2 sm:col-span-1",
      },
    ],
  },

  pricing: {
    title: "Integer Vitae Justo Eget Magna",
    background: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-3680219.webp",
    item: [
      {
        id: 1,
        name: "Vestibulum Cursus Ipsum",
        price: 299000,
        features: ["Bibendum arcu vitae elementum", "Vestibulum lorem sed risus", "Suspendisse interdum consectetur", "Quis imperdiet massa tincidunt", "Morbi tincidunt augue interdum"],
        buttonLabel: "Lorem Ipsum",
      },
    ],
    imageCards: [
      {
        id: "img-1",
        src: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-2850286.jpg",
        alt: "Kursus Fotografi",
      },
      {
        id: "img-2",
        src: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-3680219.jpg",
        alt: "Workshop Fotografi",
      },
    ],
  },

  testimonials: {
    title: "Suspendisse Interdum Consectetur",
    item: [
      {
        id: 1,
        name: "Leo Quisque",
        profession: "Cursus, Auctor Enim",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/44.jpg",
        quote: "Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.",
        rating: 5,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 2,
        name: "Id Nunc",
        profession: "Fringilla, Euismod",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/36.jpg",
        quote: "Faucibus pulvinar elementum integer enim neque volutpat ac.",
        rating: 4,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 3,
        name: "Dui Sapien",
        profession: "Mattis, Condimentum",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/68.jpg",
        quote: "Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.",
        rating: 5,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 4,
        name: "Porttitor Lectus",
        profession: "Gravida, Eleifend",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/21.jpg",
        quote: "Aliquam sem et tortor consequat id porta nibh venenatis cras.",
        rating: 4,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 5,
        name: "Ipsum Dolor",
        profession: "Fermentum, Malesuada",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/25.jpg",
        quote: "Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet.",
        rating: 5,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 6,
        name: "Tincidunt Arcu",
        profession: "Viverra, Feugiat",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/11.jpg",
        quote: "Habitant morbi tristique senectus et netus et malesuada fames.",
        rating: 4,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 7,
        name: "Diam Velit",
        profession: "Pharetra, Pulvinar",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/18.jpg",
        quote: "Eu volutpat odio facilisis mauris sit amet massa vitae.",
        rating: 5,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 8,
        name: "Amet Eget",
        profession: "Ultrices, Sagittis",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/42.jpg",
        quote: "Euismod elementum nisi quis eleifend quam adipiscing vitae.",
        rating: 5,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 9,
        name: "Rhoncus Mattis",
        profession: "Ullamcorper, Etiam",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/81.jpg",
        quote: "Odio ut enim blandit volutpat maecenas volutpat blandit aliquam.",
        rating: 4,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
      {
        id: 10,
        name: "Volutpat Sapien",
        profession: "Lectus, Consequat",
        photo: "/images/templateLandingPageBonus/Mirka/images/testimoni/52.jpg",
        quote: "Ultrices gravida dictum fusce ut placerat orci nulla pellentesque.",
        rating: 5,
        images: "/images/templateLandingPageBonus/screenshootWa/testimoni.png",
      },
    ],
  },

  faqSection: {
    title: "Mauris In Mollis Nunc",
    subtitle: "Donec ultrices tincidunt arcu non sodales neque sodales.",
    faqs: [
      {
        question: "Vestibulum rhoncus est pellentesque elit?",
        answer: "Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida.",
      },
      {
        question: "Amet cursus sit amet dictum?",
        answer: "Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae.",
      },
      {
        question: "Neque volutpat ac tincidunt vitae semper?",
        answer: "Aliquam ut porttitor leo a diam sollicitudin tempor id eu.",
      },
      {
        question: "Ut tristique et egestas quis?",
        answer: "Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam.",
      },
      {
        question: "Ac placerat vestibulum lectus mauris?",
        answer: "Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit.",
      },
    ],
  },

  callToAction: {
    title: "Duis Tristique Sollicitudin Nibh Sit",
    subtitle: "Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor.",
    buttonText: "Lorem Ipsum Dolor",
    badgeText: "⭐ Donec 5.200+ cursus aktif",
    imageUrl: "/images/templateLandingPageBonus/Mirka/images/pexels-photo-11904557.jpg",
    imageAlt: "Fotografer sedang mengambil gambar",
  },

  pattern: "/images/templateLandingPageBonus/Mirka/images/pattern/pattern-01.svg",
};

export default function Mirka({ siteData, siteName, activeTheme }) {
  return (
    <>
      <div className="card bg-slate-900 overflow-hidden space-y-32 sm:pb-20 pb-5 sm:border-16 border-8 border-white">
        <HeroSectionMirka data={dataMirka.hero} secId="hero" siteName={siteName} />
        <ProblemSectionMirka data={dataMirka.problem} secId="problem" />
        <ProblemSectionMirka2 data={dataMirka.problem} secId="problem2" />
      </div>
      <div
        className=" space-y-32 py-32"
        style={{
          backgroundImage: `url(${dataMirka.pattern})`,
          backgroundSize: "150px auto",
        }}
      >
        <SolutionSectionMirka data={dataMirka.solution} secId="solution" />
        <BenefitSectionMirka data={dataMirka.benefit} secId="benefit" />
        <PortfolioSectionMirka data={dataMirka.portfolio} secId="portfolio" />
      </div>
      <PricingSectionMirka data={dataMirka} secId="daftar" waNumber={siteData.phone} />
      <TestimonialSectionImageMirka data={dataMirka.testimonials} secId="testimoni" />
      <FAQSectionMirka data={dataMirka.faqSection} secId="faq" />
      <CallToActionSectionMirka data={dataMirka.callToAction} secId="cta" siteName={siteName} />
    </>
  );
}
