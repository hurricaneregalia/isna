import { FaFileShield } from "react-icons/fa6";
import HeroImage from "../lpComponentGlobal/HeroImage";
import HeroText from "../lpComponentGlobal/HeroText";
import Navbar from "../lpComponentGlobal/Navbar";
import TextImage from "../lpComponentGlobal/TextImage";
import ListImage from "../lpComponentGlobal/ListImage";
import CTASection from "../lpComponentGlobal/CTASection";
import BenefitsSection from "../lpComponentGlobal/BenefitsSection";

export default function Halvora({ landingPage }) {
  const title = "title lorem ipsum ";
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  const bgPrim = "bg-green-100";
  const listFeatures = [
    { id: 1, title: "Layanan konsultasi bisnis profesional" },
    { id: 2, title: "Desain landing page menarik dan responsif" },
    { id: 3, title: "Integrasi mudah dengan WhatsApp dan payment gateway" },
    { id: 4, title: "Optimasi SEO untuk peningkatan trafik" },
    { id: 5, title: "Support pelanggan 24/7 siap membantu" },
  ];

  return (
    <>
      <Navbar brandName={landingPage.name} navBarBg="" />
      <HeroImage />

      <TextImage
        id="section-1-interest-about"
        idColor="text-red-500"
        title={title + 1}
        description={text}
        imageUrl="/images/uploads/products/qolilan-copy/main.jpg"
        imageAlt={title + 1}
        reverse={false}
      />
      <ListImage
        id="section-2-interest-features"
        idColor="text-red-500"
        title={title + 2}
        imageUrl="/images/uploads/products/qolilan-copy/main.jpg"
        imageAlt={title + 2}
        reverse={false}
        list={listFeatures}
      />

      <BenefitsSection
        id="section-3-desire-benefit"
        idColor="text-red-500"
        title={title + 3}
        columns={3}
        variant="card"
        features={[
          {
            icon: <FaFileShield />,
            title: "Keamanan Terjamin",
            description: "Sistem kami menggunakan enkripsi tingkat tinggi untuk melindungi data Anda",
            link: "/security",
          },
          {
            icon: <FaFileShield />,
            title: "Keamanan Terjamin",
            description: "Sistem kami menggunakan enkripsi tingkat tinggi untuk melindungi data Anda",
            link: "/security",
          },
          {
            icon: <FaFileShield />,
            title: "Keamanan Terjamin",
            description: "Sistem kami menggunakan enkripsi tingkat tinggi untuk melindungi data Anda",
            link: "/security",
          },
        ]}
      />
      <CTASection
        title="Ayo Mulai Bangun Bisnismu Hari Ini"
        subtitle="Landing page siap pakai, cepat online, dan bisa kamu kelola sendiri."
        cta={{ text: "Chat WhatsApp", href: "https://wa.me/6281234567890" }}
        backgroundColor="bg-gradient-to-r from-purple-600 to-pink-500"
        textColor="text-white"
      />
      <div className="p-10">
        <h1 className="text-3xl font-bold">{landingPage.name}</h1>
        <p>{landingPage.description}</p>
      </div>
    </>
  );
}
