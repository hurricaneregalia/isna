import React from "react";
import HeroSectionBaizan from "./baizan/HeroSectionBaizan";
import ProblemSolutionSectionBaizan from "./baizan/ProblemSolutionSectionBaizan";
import BenefitSectionBaizan from "./baizan/BenefitSectionBaizan";
import HowToUseSectionBaizan from "./baizan/HowToUseSectionBaizan";
import TestimonialSectionBaizan from "./baizan/TestimonialSectionBaizan";
import FooterLandingPageOnly from "../[slug]/FooterLandingPageOnly";
import HeaderSectionBaizan from "./baizan/HeaderSectionBaizan";
import ProductHighlightSectionBaizan from "./baizan/ProductHighlightSectionBaizan";
import DaftarProdukBaizan from "./baizan/DaftarProdukBaizan";
import BonusDanGaransiSection from "./baizan/BonusDanGaransiSection";
import CTASectionBaizan from "./baizan/CTASectionBaizan";
import CTASectionSecondaryBaizan from "./baizan/CTASectionSecondaryBaizan";
import FAQSectionBaizan from "./baizan/FAQSectionBaizan";
import { FaSadTear, FaClock, FaTimesCircle, FaLeaf, FaStar, FaCheckCircle } from "react-icons/fa";

export default function Baizan({ siteName, siteData }) {
  const widthSection = "max-w-6xl";

  const dataBaizan = {
    heroSection: {
      backgroundImageUrl: "/images/templateLandingPageBonus/Baizan/photo-1597143722151-6c041d7b2901.jpg",
      headline: "lorem ipsum dolor sit amet",
      subHeadline: "consectetur adipiscing elit sed do eiusmod tempor",
    },

    problemSection: {
      secId: "problem",
      title: "sed ut perspiciatis unde omnis",
      description: "nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
      painPoints: [
        {
          icon: <FaSadTear className="text-error text-2xl" />,
          title: "doloremque laudantium totam",
          description: "ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
        },
        {
          icon: <FaClock className="text-warning text-2xl" />,
          title: "temporibus autem quibusdam",
          description: "neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
        },
        {
          icon: <FaTimesCircle className="text-accent text-2xl" />,
          title: "ut enim ad minima veniam",
          description: "quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        },
      ],
      image: {
        src: "/images/templateLandingPageBonus/Baizan/pexels-photo-32387948.jpg",
        alt: "lorem ipsum dolor sit amet",
        width: 600,
        height: 800,
      },
    },

    benefitSection: {
      secId: "manfaat",
      title: "nisi ut aliquid ex ea commodi",
      description: "ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid.",
      benefitList: [
        {
          icon: <FaLeaf className="text-success text-2xl" />,
          text: "excepteur sint occaecat cupidatat non proident",
        },
        {
          icon: <FaStar className="text-warning text-2xl" />,
          text: "sed ut perspiciatis unde omnis iste natus",
        },
        {
          icon: <FaCheckCircle className="text-primary text-2xl" />,
          text: "ullamco laboris nisi ut aliquip ex ea commodo",
        },
      ],
      image: {
        src: "/images/templateLandingPageBonus/Baizan/pexels-photo-32807764.jpg",
        alt: "dolor sit amet consectetur",
        width: 600,
        height: 800,
      },
    },

    productHighlightSection: {
      secId: "produk-unggulan",
      title: "productus clarus est",
      shortDescription: "neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      products: [
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-6635813.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-1029896.jpg",
          title: "lorem serum 30ml",
          price: 189000,
          rating: 4.5,
          discountValue: 15,
        },
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-3735649.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-6156587.jpg",
          title: "dolor cream 50ml",
          price: 209000,
          rating: 4.7,
          discountValue: 10,
        },
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-4202325.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-7064230.jpg",
          title: "amet lotion 50ml",
          price: 175000,
          rating: 4.3,
          discountValue: 20,
        },
      ],
    },

    productSection: {
      secId: "daftar-produk-baizan",
      title: "productorum elenchus",
      shortDescription: "praesentium voluptatum deleniti atque corrupti quos dolores",
      products: [
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-6635813.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-1029896.jpg",
          title: "lorem serum 30ml",
          price: 189000,
          rating: 4.5,
          discountValue: 15,
        },
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-3735649.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-973405.jpg",
          title: "dolor cream 50ml",
          price: 209000,
          rating: 4.7,
          discountValue: "",
        },
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-4202325.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-7064230.jpg",
          title: "amet lotion 50ml",
          price: 175000,
          rating: 4.3,
          discountValue: 20,
        },
        {
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-4051915.jpg",
          imageUse: "/images/templateLandingPageBonus/Baizan/pexels-photo-4148860.jpg",
          title: "vitamin booster 20ml",
          price: 149000,
          rating: 4.6,
          discountValue: "",
        },
      ],
    },

    testimonialSection: {
      title: "testimonia clientium",
      description: "testimonia ficta a clientibus felicibus",
      items: [
        {
          name: "lucia valeria",
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-415829.jpg",
          rating: 5,
          testimonial: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          name: "marina julia",
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-733872.jpg",
          rating: 4,
          testimonial: "pellentesque habitant morbi tristique senectus et netus.",
        },
        {
          name: "nora faustina",
          image: "/images/templateLandingPageBonus/Baizan/pexels-photo-1130626.jpg",
          rating: 5,
          testimonial: "maecenas non laoreet odio. fusce lobortis porttitor purus.",
        },
      ],
    },

    howToUseSection: {
      title: "modus utendi",
      description: "sequere gradus simplices ad usum efficacem",
      image: "/images/templateLandingPageBonus/Baizan/pexels-photo-415829.jpg",
      steps: [
        {
          title: "faciem purga",
          description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "serum adhibe",
          description: "sed do eiusmod tempor incididunt ut labore et dolore.",
        },
        {
          title: "cremam nocturnam utere",
          description: "etiam mattis mauris sit amet massa sollicitudin varius.",
        },
      ],
    },

    bonusSection: [{ label: "e-book fictum" }, { label: "consilium gratuitum" }, { label: "expeditio libera" }, { label: "arca doni elegantis" }],

    CTASection: {
      title: "vestibulum ante ipsum primis",
      subtitle: "sed ut perspiciatis unde omnis iste natus error",
      backgroundImage: "/images/templateLandingPageBonus/Baizan/pexels-photo-948873.jpg",
    },

    CTASectionSeconday: {
      title: "vivamus suscipit tortor eget",
      subtitle: "in hac habitasse platea dictumst",
      backgroundImage: "/images/templateLandingPageBonus/Baizan/pexels-photo-948873.jpg",
    },

    faqSection: {
      headline: "quaestiones frequentes",
      subtitle: "responsa ad interrogationes communes",
      items: [
        {
          question: "estne serum hoc tutum pro pelle sensitiva?",
          answer: "ita vero. formulatio est naturalis et sine substantiis nocivis.",
        },
        {
          question: "quam cito effectus apparebit?",
          answer: "mutatio videri potest post usum cottidianum per 14 dies.",
        },
        {
          question: "quomodo serum condi debeo?",
          answer: "serva in loco frigido et sicco, longe a sole directo.",
        },
        {
          question: "possumne uti cum aliis productis?",
          answer: "certe. serum compatitur cum plerisque curis cutis.",
        },
        {
          question: "quae sunt optiones solutionis?",
          answer: "accipimus translationes, e-wallet, et mercedem ad traditionem.",
        },
      ],
      contactInfo: "habesne alias quaestiones? mitte nuntium ad WhatsApp: 0812-3456-7890",
    },
  };

  return (
    <>
      <HeroSectionBaizan secId="hero" data={dataBaizan.heroSection}>
        <HeaderSectionBaizan siteName={siteName} bgColor="bg-transparent" widthNavbar={widthSection} />
      </HeroSectionBaizan>
      <ProblemSolutionSectionBaizan secId="problem" data={dataBaizan.problemSection} />
      <BenefitSectionBaizan secId="benefit" data={dataBaizan.benefitSection} />
      <ProductHighlightSectionBaizan secId="highlightProduk" data={dataBaizan.productHighlightSection} />
      <DaftarProdukBaizan secId="produk" data={dataBaizan.productSection} />
      <TestimonialSectionBaizan secId="testimoni" data={dataBaizan.testimonialSection} />
      <HowToUseSectionBaizan secId="howTo" data={dataBaizan.howToUseSection} />
      <BonusDanGaransiSection secId="bonus" data={dataBaizan.bonusSection} />
      <CTASectionSecondaryBaizan secId="ctaStart" data={dataBaizan.CTASection} />
      <FAQSectionBaizan secId="faq" data={dataBaizan.faqSection} />
      <CTASectionBaizan secId="etaEnd" widthSection="w-full" data={dataBaizan.CTASectionSeconday} />
      <FooterLandingPageOnly siteName={siteName} />
    </>
  );
}
