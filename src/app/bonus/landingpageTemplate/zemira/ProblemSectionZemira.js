import React from "react";
import Image from "next/image";
import { HiClock, HiLightBulb, HiCurrencyDollar, HiUserGroup } from "react-icons/hi";

export default function ProblemSectionZemira() {
  const content = {
    header: {
      tag: "Tantangan Profesional",
      title: "Hambatan Dalam Mewujudkan Rumah Ideal",
      highlight: "Untuk Profesional Modern",
      description:
        "Sebagai individu sukses, rumah Anda seharusnya menjadi cerminan pencapaian dan sumber kenyamanan. Namun beberapa kendala sering muncul:",
    },
    problems: [
      {
        icon: <HiClock className="h-6 w-6" />,
        title: "Waktu Terbatas",
        description: "Kesibukan harian menyulitkan penyusunan konsep desain yang matang",
      },
      {
        icon: <HiLightBulb className="h-6 w-6" />,
        title: "Gaya Tidak Personal",
        description: "Desain kurang mencerminkan karakter dan preferensi pribadi Anda",
      },
      {
        icon: <HiCurrencyDollar className="h-6 w-6" />,
        title: "Biaya Tak Terduga",
        description: "Pengeluaran sering melebihi perkiraan awal tanpa penjelasan jelas",
      },
      {
        icon: <HiUserGroup className="h-6 w-6" />,
        title: "Komunikasi Desainer",
        description: "Sulit menemukan profesional yang memahami visi dan kebutuhan Anda",
      },
    ],
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Profesional menghadapi tantangan desain interior",
    },
  };

  return (
    <section id="masalah" className="py-20 bg-base-100">
      <div className="container mx-auto max-w-6xl px-4">
        {/* IMAGE on top (mobile), side (desktop) */}
        <div className="mb-16 lg:mb-0 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative mb-10 lg:mb-0">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/9]">
              <Image src={content.image.url} alt={content.image.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Header Text */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">{content.header.tag}</span>
            <h2 className="text-4xl font-bold text-base-content mb-4 leading-snug">
              {content.header.title} <span className="text-primary block md:inline">{content.header.highlight}</span>
            </h2>
            <p className="text-base text-base-content/80 max-w-xl mx-auto lg:mx-0">{content.header.description}</p>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.problems.map((problem, index) => (
            <div key={index} className="bg-base-100 rounded-2xl p-6 border border-base-300/50 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">{problem.icon}</div>
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
