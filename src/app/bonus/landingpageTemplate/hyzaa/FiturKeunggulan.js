import React from "react";
import Wrapper from "./ui/Wrapper"; // pastikan path sesuai
import HeaderSection from "./ui/HeaderSection";
import { MdSpeed, MdBuild, MdSecurity, MdLocalShipping } from "react-icons/md";
import Bodytext from "./ui/Bodytext";
import Title from "./ui/Title";
import Image from "next/image";

const fiturData = {
  label: "Fitur",
  headline: "Fitur & Keunggulan Sepeda Kami",
  imageUrl: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600", // contoh gambar dari Pexels
  item: [
    {
      icon: <MdSpeed />,
      title: "Performa Tinggi",
      description: "Dirancang untuk menaklukan segala medan pegunungan.",
    },
    {
      icon: <MdBuild />,
      title: "Material Berkualitas",
      description: "Menggunakan bahan terbaik yang tahan lama dan ringan.",
    },
    {
      icon: <MdSecurity />,
      title: "Garansi Resmi",
      description: "Dapatkan garansi resmi 1 tahun untuk setiap pembelian.",
    },
    {
      icon: <MdLocalShipping />,
      title: "Pengiriman Cepat",
      description: "Pesanan dikirim cepat dengan sistem logistik terpercaya.",
    },
  ],
};

export default function FiturKeunggulan({ paddingX, data }) {
  return (
    <section className="" id="fitur-keunggulan">
      <Wrapper>
        <HeaderSection label={data.label} headline={data.headline} headlineColor="sm:p-0 px-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-0 gap-5 mt-8 items-center">
          <div className="relative w-full sm:h-full h-64">
            <Image src={data.imageUrl} alt="Fitur Sepeda" fill sizes="(max-width: 768px) 100vw, 700px" className="object-contain" data-aos="fade-right" />
          </div>
          <div className="space-y-5 lg:pr-32 sm:pr-16 px-5">
            {data.item.map((item, idx) => (
              <div key={idx} className=" bg-base-100 card px-5 py-3 shadow-lg shadow-primary/10" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="flex gap-5 items-center">
                  <div className="text-4xl text-primary flex-shrink-0">{item.icon}</div>
                  <div className="text-start">
                    <Title text={item.title} />
                    <Bodytext text={item.description} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
