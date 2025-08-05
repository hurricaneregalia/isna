// components/RevelynKanzar.js
import React from "react";
import Wrapper from "./ui/Wrapper";
import Headline from "./ui/Headline";
import Subheadline from "./ui/Subheadline";
import CustomImage from "./ui/CustomImage";

import { FaFeatherAlt, FaHeadphones, FaShieldAlt, FaSuitcase } from "react-icons/fa";

export default function RevelynKanzar() {
  const dataRevelynKanzar = {
    title: "Kenalan Sama Revelyn — Helm Stylish, Ringan, dan Serbaguna",
    description: "Kami tahu kamu nggak cuma butuh helm yang aman, tapi juga yang bisa menyesuaikan dengan gaya hidupmu yang aktif dan stylish. Revelyn adalah jawabannya.",
    points: [
      {
        icon: <FaFeatherAlt />,
        text: "Ringan & Compact – nggak bikin pegal, muat di bagasi skuter",
      },
      {
        icon: <FaShieldAlt />,
        text: "Sertifikasi SNI – standar keamanan nasional, bikin kamu tenang",
      },
      {
        icon: <FaHeadphones />,
        text: "Hijab-Friendly Padding – nyaman dipakai seharian tanpa sesak",
      },
      {
        icon: <FaSuitcase />,
        text: "Stylish & Feminim – cocok buat OOTD, konten, sampai staycation",
      },
    ],
    imageUrl: "https://images.pexels.com/photos/2116469/pexels-photo-2116469.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Helm Revelyn stylish dipakai wanita",
  };

  return (
    <Wrapper className="bg-base-100">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Text */}
        <div className="md:w-1/2 space-y-5">
          <Headline text={dataRevelynKanzar.title} />
          <Subheadline text={dataRevelynKanzar.description} />
          <ul className="space-y-4 text-base-content">
            {dataRevelynKanzar.points.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-pink-600 text-2xl mt-1">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="md:w-1/2 w-full">
          <CustomImage src={dataRevelynKanzar.imageUrl} alt={dataRevelynKanzar.imageAlt} />
        </div>
      </div>
    </Wrapper>
  );
}
