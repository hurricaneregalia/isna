import Image from "next/image";
import React from "react";
import { FaMountainSun } from "react-icons/fa6";

const dataTestimoni = {
  title: "Testimoni Pendaki",
  description: "Cerita pengalaman nyata bersama pemandu pendakian kami.",
  testimoniItems: [
    {
      id: 1,
      title: "Pendakian tak terlupakan di Semeru!",
      date: "20 Juni 2025",
      datetime: "2025-06-20",
      category: { title: "Semeru", href: "#" },
      image: "/images/templateLandingPageBonus/Rihala/testimoni/testimoni.png",
      author: {
        name: "Ayu Lestari",
        role: "Pendaki Pemula",
        href: "#",
        imageUrl: "https://randomuser.me/api/portraits/women/45.jpg",
      },
    },
    {
      id: 2,
      title: "Ke Rinjani bareng tim terbaik!",
      date: "12 Mei 2025",
      datetime: "2025-05-12",
      category: { title: "Rinjani", href: "#" },
      image: "/images/templateLandingPageBonus/Rihala/testimoni/testimoni.png",
      author: {
        name: "Rizky Aditya",
        role: "Traveler Enthusiast",
        href: "#",
        imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    },
    {
      id: 3,
      title: "Merbabu: nyaman dan seru",
      date: "8 April 2025",
      datetime: "2025-04-08",
      category: { title: "Merbabu", href: "#" },
      image: "/images/templateLandingPageBonus/Rihala/testimoni/testimoni.png",
      author: {
        name: "Dewi Wulandari",
        role: "Solo Hiker",
        href: "#",
        imageUrl: "https://randomuser.me/api/portraits/women/33.jpg",
      },
    },
  ],
};

export default function TestimoniSectionRihala({ secId }) {
  return (
    <div className="bg-base-100 py-20" id={secId}>
      <div className="w-full sm:max-w-7xl mx-auto sm:px-6 pl-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary" data-aos="fade-up">
            {dataTestimoni.title}
          </h2>
          <p className="mt-2 text-base-content/70" data-aos="fade-up">
            {dataTestimoni.description}
          </p>
        </div>

        {/* Horizontal Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-1 sm:px-4 pb-10">
          {dataTestimoni.testimoniItems.map((item) => (
            <div key={item.id} className="min-w-[85%] sm:min-w-[300px] snap-start card bg-base-200 shadow-md hover:shadow-xl transition duration-300 border" data-aos="flip-left">
              <figure>
                <Image src={item.image} alt={item.category.title} width={400} height={200} className=" w-full" />
              </figure>
              <div className="card-body">
                <div className="flex items-center justify-between text-xs text-base-content/60 mb-2">
                  <span>{item.date}</span>
                  <div className="badge badge-outline badge-primary flex">
                    <FaMountainSun /> {item.category.title}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={item.author.imageUrl} alt={item.author.name} width={60} height={60} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-base-content">{item.author.name}</p>
                    <p className="text-xs text-base-content/60">{item.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
