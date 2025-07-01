import React from "react";
import Image from "next/image";
import { HiClock, HiLightBulb, HiCurrencyDollar, HiUserGroup } from "react-icons/hi";

export default function ProblemSectionZemira({ secId, data }) {
  const content = {
    header: {
      tag: "Tantangan Profesional",
      title: "Hambatan Dalam Mewujudkan Rumah Ideal",
      highlight: "Untuk Profesional Modern",
      description: "Sebagai individu sukses, Anda layak mendapatkan tempat tinggal yang indah, nyaman dan berkelas. Namun beberapa kendala sering muncul:",
    },
    items: [
      {
        icon: <HiClock className="h-6 w-6" />,
        title: "Waktu Terbatas",
        description: "Kesibukan harian menyulitkan penyusunan konsep desain tempat tinggal yang matang",
      },
      {
        icon: <HiLightBulb className="h-6 w-6" />,
        title: "Desain Tidak Menarik",
        description: "Tidak bisa membuat desain yang bagus, karena tidak ada keahlian di bidang tersebut",
      },
      {
        icon: <HiCurrencyDollar className="h-6 w-6" />,
        title: "Biaya Tak Terduga",
        description: "Tidak memiliki pengetahuan anggaran pembuatan tempat tinggal yang berkualitas",
      },
      {
        icon: <HiUserGroup className="h-6 w-6" />,
        title: "Tidak Memiliki Informasi",
        description: "Sulit menemukan informasi tentang hal apa saja yang perlu dibuat dan dipersiapkan",
      },
    ],
    image: {
      url: "/images/templateLandingPageBonus/Zemira/images/photo-1522708323590-d24dbb6b0267.jpg",
      alt: "Profesional menghadapi tantangan desain interior",
    },
  };

  return (
    <section id={secId} className="py-20 bg-base-100">
      <div className="container mx-auto max-w-6xl px-4">
        {/* IMAGE on top (mobile), side (desktop) */}
        <div className=" mb-10 flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-16 items-center overflow-hidden">
          {/* Image Section */}
          <div className="relative" id="image">
            <div className="relative card overflow-hidden shadow-xl aspect-[16/9] lg:mt-0 mt-10" data-aos="flip-left">
              <Image
                src={data.image.url}
                alt={data.image.alt}
                width={1000}
                height={1000}
                className="object-cover rounded-[calc(var(--radius-box)-.5rem)]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Header Text */}
          <div className="text-center lg:text-left" id="header">
            <span className="w-fit px-4 py-2 bg-primary/10 text-primary text-xs card mb-3 capitalize mx-auto lg:mx-0" data-aos="fade-up">
              {secId.replace(/-/g, " ")}
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-6" data-aos="fade-left">
              {data.header.title} <span className="text-primary block md:inline">{data.header.highlight}</span>
            </h2>
            <p className="text-lg opacity-75 max-w-xl mx-auto lg:mx-0" data-aos="fade-left">
              {data.header.description}
            </p>
          </div>
        </div>

        {/* Problems Grid */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((problem, index) => (
            <div key={index} className="bg-base-100 card p-6 border border-base-300/50 shadow-lg transition-all duration-300 hover:shadow-xl" data-aos="fade-up">
              <div className="flex flex-col h-full">
                <div className="bg-primary/10 w-12 h-12 card flex items-center justify-center mb-4 text-primary">{problem.icon}</div>
                <h3 className="text-lg font-semibold text-base-content mb-2">{problem.title}</h3>
                <p className="text-base-content/70 flex-grow text-sm">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
