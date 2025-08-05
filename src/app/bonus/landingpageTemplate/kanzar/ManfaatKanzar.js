import React from "react";
import Wrapper from "./ui/Wrapper";
import Headline from "./ui/Headline";
import Subheadline from "./ui/Subheadline";
import CustomImage from "./ui/CustomImage";
import { FaCheck, FaShieldAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

export default function ManfaatKanzar() {
  const dataManfaatKanzar = {
    headline: "Revelyn — Helm yang Didesain Sesuai Gaya Hidupmu",
    intro: "Helm Revelyn bukan cuma aman, tapi juga stylish, ringan, dan benar-benar dibuat untuk wanita aktif, fashionable, dan berjiwa bebas.",
    benefits: [
      "Desain feminin & clean — cocok untuk semua gaya",
      "Ringan & compact, muat di bagasi skuter",
      "Sertifikasi SNI untuk keamanan ekstra",
      "Busa empuk, hijab-friendly, dan nyaman dipakai lama",
      "Dibuat untuk kamu yang peduli tampilan dan keselamatan",
    ],
    imageUrl: "https://images.pexels.com/photos/2100064/pexels-photo-2100064.jpeg",
    imageAlt: "Wanita bergaya mengenakan helm Revelyn",
  };

  return (
    <Wrapper className="bg-base-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Headline text={dataManfaatKanzar.headline} className="text-4xl md:text-6xl font-bold text-base-content mb-4" />
          <Subheadline text={dataManfaatKanzar.intro} className="text-xl text-base-content/80 max-w-3xl mx-auto" />
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Benefits - Left Side */}
          <div className="lg:w-2/5 lg:sticky lg:top-28">
            <div className="bg-base-200 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-accent mb-6">Keunggulan Revelyn</h3>
              <ul className="space-y-5">
                {dataManfaatKanzar.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="bg-accent/10 p-2 rounded-full">
                      <span className="text-accent font-bold">{index + 1}</span>
                    </div>
                    <span className="text-base-content">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="lg:w-3/5">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <CustomImage src={dataManfaatKanzar.imageUrl} alt={dataManfaatKanzar.imageAlt} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-base-100 px-6 py-3 rounded-box shadow-lg">
                <div className="flex items-center gap-2">
                  <FaShieldAlt />
                  <span>SNI Certified</span>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button className="btn btn-secondary btn-lg">
                Pelajari Lebih Lanjut
                <FaChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
