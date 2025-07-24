import React from "react";
import HeroHyzaa from "./hyzaa/HeroHyzaa";
import AudiencePainHyzaa from "./hyzaa/AudiencePainHyzaa";
import ShowcaseHyzaa from "./hyzaa/ShowcaseHyzaa";
import FiturHyzaa from "./hyzaa/FiturHyzaa";
import TestimoniHyzaa from "./hyzaa/TestimoniHyzaa";
import FiturKeunggulan from "./hyzaa/FiturKeunggulan";
import CtaHyzaa from "./hyzaa/CTAHyzaa";
import FAQHyzaa from "./hyzaa/FAQHyzaa";
import FooterHyzaa from "./hyzaa/FooterHyzaa";
import HeaderLandingGlobal from "../[slug]/HeaderLandingGlobal";
import { BsExclamationCircle, BsCurrencyDollar } from "react-icons/bs";
import { GiWeight } from "react-icons/gi";
import { MdSpeed, MdBuild, MdSecurity, MdLocalShipping, MdSettings, MdFlightTakeoff, MdAttachMoney, MdThumbUp } from "react-icons/md";
import { ShieldCheckIcon, BoltIcon, SparklesIcon } from "@heroicons/react/24/solid";
import IdealHyzaa from "./hyzaa/IdealHyzaa";

const dataHyzaa = {
  heroData: {
    headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    subheadline: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/images/templateLandingPageBonus/Hyzaa/images/pexels-photo-1659437.webp",
  },
  painData: {
    label: "dolor sit amet",
    headline: "consectetur adipiscing elit sed do eiusmod tempor",
    pegunungan: {
      title: "Praesent viverra, magna quis luctus luctus",
      description: "Curabitur dignissim lacus at urna dapibus, in condimentum nisi pulvinar, luctus ligula.",
      imageUrl: "https://images.pexels.com/photos/28144483/pexels-photo-28144483.jpeg",
    },
    rider: {
      title: "Fusce non velit",
      imageUrl: "/images/templateLandingPageBonus/Hyzaa/images/pain-1.png",
    },
    pains: [
      {
        icon: <BsExclamationCircle />,
        title: "Vestibulum hendrerit eros",
        description: "Nunc vehicula felis at ligula vehicula, ac tincidunt sapien pulvinar.",
      },
      {
        icon: <GiWeight />,
        title: "Mauris aliquam erat",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
      },
      {
        icon: <BsCurrencyDollar />,
        title: "Integer pharetra odio",
        description: "Donec rhoncus sem a erat placerat, in varius purus dapibus.",
      },
    ],
  },
  idealData: {
    label: "lorem ipsum",
    headline: "Nam viverra purus a nibh fringilla, at convallis lacus hendrerit",
    description: "Phasellus mollis orci id lacus aliquam, vitae dictum tortor luctus.",
    imageUrl: "/images/templateLandingPageBonus/Hyzaa/images/photo-1606087492572-424ebe0f2f61.jpg",
    item: [
      {
        icon: <MdSettings className="text-primary" />,
        title: "Suspendisse potenti fusce",
        description: "Praesent a augue id ligula tincidunt posuere et non elit.",
      },
      {
        icon: <MdFlightTakeoff className="text-primary" />,
        title: "Aliquam erat volutpat",
        description: "Donec vel magna eu nulla sodales luctus nec at nunc.",
      },
      {
        icon: <MdAttachMoney className="text-primary" />,
        title: "Curabitur laoreet quam",
        description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
      },
      {
        icon: <MdThumbUp className="text-primary" />,
        title: "Proin ac elit sed",
        description: "Nunc cursus felis at massa suscipit, sed lobortis neque pulvinar.",
      },
    ],
  },

  productsData: {
    label: "dolor sit amet",
    headline: "Pellentesque habitant morbi tristique senectus et netus",
    item: [
      {
        name: "Lorem X1",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        price: 45000000,
        image: "/images/templateLandingPageBonus/Hyzaa/images/mtb-1.jpeg",
        altImage: "/images/templateLandingPageBonus/Hyzaa/images/alt-img-1.jpeg",
      },
      {
        name: "Ipsum XTR",
        desc: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
        price: 42000000,
        image: "/images/templateLandingPageBonus/Hyzaa/images/mtb-2.jpeg",
        altImage: "/images/templateLandingPageBonus/Hyzaa/images/alt-img-2.jpeg",
      },
      {
        name: "Dolor 5C",
        desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque.",
        price: 48000000,
        image: "/images/templateLandingPageBonus/Hyzaa/images/mtb-3.jpeg",
        altImage: "/images/templateLandingPageBonus/Hyzaa/images/alt-img-3.jpeg",
      },
      {
        name: "Sit Elite",
        desc: "Temporibus autem quibusdam et aut officiis debitis aut rerum.",
        price: 50000000,
        image: "/images/templateLandingPageBonus/Hyzaa/images/mtb-4.jpeg",
        altImage: "/images/templateLandingPageBonus/Hyzaa/images/alt-img-4.jpeg",
      },
      {
        name: "Amet Pro",
        desc: "Itaque earum rerum hic tenetur a sapiente delectus ut aut.",
        price: 55000000,
        image: "/images/templateLandingPageBonus/Hyzaa/images/mtb-5.jpeg",
        altImage: "/images/templateLandingPageBonus/Hyzaa/images/alt-img-5.jpeg",
      },
      {
        name: "Consectetur V9",
        desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
        price: 53000000,
        image: "/images/templateLandingPageBonus/Hyzaa/images/mtb-6.jpeg",
        altImage: "/images/templateLandingPageBonus/Hyzaa/images/alt-img-6.jpeg",
      },
    ],
  },

  fiturData: {
    label: "lorem ipsum",
    headline: "Maecenas vulputate sem in neque tristique vehicula",
    features: [
      {
        icon: <ShieldCheckIcon />,
        title: "Curabitur condimentum lacus",
        desc: "Ut eu metus a eros semper convallis ut in dui.",
      },
      {
        icon: <BoltIcon />,
        title: "Sed quis nisl convallis",
        desc: "Praesent pulvinar felis a tellus feugiat, sed efficitur massa vehicula.",
      },
      {
        icon: <SparklesIcon />,
        title: "Integer sit amet diam",
        desc: "Proin rhoncus ligula sed massa luctus, eu cursus augue cursus.",
      },
    ],
  },

  fiturKeunggulan: {
    label: "keunggulan",
    headline: "Praesent id nisl vel eros condimentum convallis",
    imageUrl: "/images/templateLandingPageBonus/Hyzaa/images/keunggulan.png",
    item: [
      {
        icon: <MdSpeed />,
        title: "Velit ut suscipit",
        description: "Suspendisse potenti, sed euismod enim in, dapibus nulla.",
      },
      {
        icon: <MdBuild />,
        title: "Phasellus et libero",
        description: "Aliquam erat volutpat, sed dignissim quam nec erat.",
      },
      {
        icon: <MdSecurity />,
        title: "Etiam ut tortor",
        description: "Nunc in nulla sed sapien dapibus convallis.",
      },
      {
        icon: <MdLocalShipping />,
        title: "Donec at purus",
        description: "Fusce nec lacus nec leo suscipit pretium eu id nulla.",
      },
    ],
  },

  ctaData: {
    label: "lorem ipsum",
    headline: "Vivamus sit amet odio ut arcu aliquet",
    description: "Aliquam erat volutpat. Curabitur pulvinar neque nec magna aliquet, ac gravida.",
    imageUrl: "/images/templateLandingPageBonus/Hyzaa/images/pexels-photo-19131131.jpg",
  },

  testimoniData: {
    label: "lorem ipsum",
    headline: "Maecenas sed risus in justo vestibulum",
    items: [
      {
        quote: "Pellentesque habitant morbi tristique senectus et netus et malesuada.",
        name: "Lorem Ipsum",
        role: "Sed posuere elit",
        variant: "Lorem X1",
        image: "/images/templateLandingPageBonus/Hyzaa/images/testimoni/pexels-photo-91227.jpg",
      },
      {
        quote: "Suspendisse potenti. Etiam eu lacus a massa luctus accumsan.",
        name: "Dolor Sit",
        role: "Nunc faucibus diam",
        variant: "Ipsum XTR",
        image: "/images/templateLandingPageBonus/Hyzaa/images/testimoni/pexels-photo-220453.jpg",
      },
      {
        quote: "Fusce dapibus quam at ex consectetur, at faucibus urna gravida.",
        name: "Amet Consectetur",
        role: "Phasellus fermentum",
        variant: "Dolor 5C",
        image: "/images/templateLandingPageBonus/Hyzaa/images/testimoni/pexels-photo-415829.jpg",
      },
      {
        quote: "Praesent in magna nec nulla rhoncus fringilla a non purus.",
        name: "Elit Sed",
        role: "Mauris vel risus",
        variant: "Consectetur V9",
        image: "/images/templateLandingPageBonus/Hyzaa/images/testimoni/pexels-photo-614810.jpg",
      },
    ],
  },

  faqData: {
    label: "faq",
    headline: "Quisque vitae magna vel leo faucibus suscipit",
    items: [
      {
        question: "Lorem ipsum dolor sit amet?",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        question: "Consectetur adipiscing elit?",
        answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        question: "Duis aute irure dolor in reprehenderit?",
        answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
      },
      {
        question: "Velit esse cillum dolore eu fugiat nulla?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      },
    ],
  },

  footerData: {
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    credit: "Made with ❤️ in Indonesia.",
  },
};

export default function Hyzaa({ siteData, siteName }) {
  const paddingX = "lg:px-32 sm:px-16 px-5";
  return (
    <>
      <HeaderLandingGlobal siteName={siteName} bgColor="bg-primary" widthNavbar="max-w-7xl" />
      <HeroHyzaa targetId="#product" data={dataHyzaa.heroData} />
      <AudiencePainHyzaa paddingX={paddingX} data={dataHyzaa.painData} />
      <IdealHyzaa paddingX={paddingX} data={dataHyzaa.idealData} />
      <ShowcaseHyzaa paddingX={paddingX} secId="product" waNumber={siteData.phone} data={dataHyzaa.productsData} />
      <FiturHyzaa paddingX={paddingX} data={dataHyzaa.fiturData} />
      <FiturKeunggulan paddingX={paddingX} data={dataHyzaa.fiturKeunggulan} />
      <TestimoniHyzaa paddingX={paddingX} data={dataHyzaa.testimoniData} />
      <CtaHyzaa paddingX={paddingX} targetId="#product" data={dataHyzaa.ctaData} />
      <FAQHyzaa paddingX={paddingX} data={dataHyzaa.faqData} />
      <FooterHyzaa siteName={siteName} data={dataHyzaa.footerData} />
    </>
  );
}
