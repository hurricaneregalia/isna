"use client";
import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import Headline from "./ui/Headline";
import Subheadline from "./ui/Subheadline";
import Title from "./ui/Title";
import CustomImage from "./ui/CustomImage";
import { FaArrowRight } from "react-icons/fa6";

export default function KebutuhanKanzar() {
  const data = {
    title: "Kenapa Wanita Butuh Helm yang Lebih dari Sekadar Aman?",
    desc: "Karena riding adalah bagian dari hidup mereka. Helm bukan cuma pelindung kepala — tapi bagian dari identitas dan gaya.",
    needs: {
      title: "Ini yang kami inginkan dalam hidup yang indah",
      item: ["Ingin tampil modis dan matching dengan outfit", "Tidak percaya diri pakai helm biasa yang bulky dan kusam", "Butuh helm ringan karena dipakai harian"],
    },
    lifestyle: {
      title: "Apa yang Harus Dimiliki Helm Wanita Masa Kini?",
      item: ["Desain aesthetic untuk OOTD, selfie, dan konten riding", "Warna pastel atau netral yang cocok untuk feed IG & TikTok", "Nyaman dipakai seharian biar nggak cepat lelah"],
    },
    imgNeeds: "https://images.pexels.com/photos/9156414/pexels-photo-9156414.jpeg",
    imgLifestyle: "https://images.pexels.com/photos/10740492/pexels-photo-10740492.jpeg",
    imgNeedsAlt: "Wanita stylish duduk di skuter",
    imgLifestyleAlt: "Wanita mengenakan helm dengan pemandangan laut",
  };

  return (
    <>
      <Wrapper className="bg-base-100">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
          <Headline text={data.title} className="text-4xl md:text-5xl font-bold text-base-content mb-6" />
          <div className="divider divider-accent max-w-xs mx-auto"></div>
          <Subheadline text={data.desc} className="text-xl text-base-content/80 max-w-3xl mx-auto" />
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pb-20">
          {/* Needs Section */}
          <div className="flex flex-col gap-8">
            {/* Image Card */}
            <div className="card bg-base-200 shadow-xl image-full">
              <figure>
                <CustomImage src={data.imgNeeds} alt={data.imgNeedsAlt} className="w-full h-96 object-cover" />
              </figure>
              <div className="card-body justify-end">
                <Title text={data.needs.title} className="text-3xl font-bold text-base-100" />
              </div>
            </div>

            {/* Checklist */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <ul className="space-y-4">
                  {data.needs.item.map((need, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <FaCheckCircle className="text-accent text-xl" />
                      </div>
                      <span className="text-base-content">{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Lifestyle Section */}
          <div className="flex flex-col gap-8 mt-12 lg:mt-0">
            {/* Feature List */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <FaStar className="text-secondary text-xl" />
                  </div>
                  <Title text={data.lifestyle.title} className="text-2xl font-bold text-secondary" />
                </div>
                <ul className="space-y-4">
                  {data.lifestyle.item.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <span className="text-secondary font-bold">{index + 1}</span>
                      </div>
                      <span className="text-base-content">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image Card */}
            <div className="card bg-base-200 shadow-xl image-full">
              <figure>
                <CustomImage src={data.imgLifestyle} alt={data.imgLifestyleAlt} className="w-full h-96 object-cover" />
              </figure>
              <div className="card-body justify-center items-center text-center">
                <button className="btn btn-accent btn-lg">
                  Explore Collections
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <div className="divider text-base-content/40">✦</div>
        </div>
      </Wrapper>
    </>
  );
}
