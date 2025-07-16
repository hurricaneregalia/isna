import Image from "next/image";
import React from "react";
import { FaMountainSun } from "react-icons/fa6";

export default function TestimoniSectionRihala({ secId, data }) {
  return (
    <div className="bg-base-100 py-20" id={secId}>
      <div className="w-full sm:max-w-7xl mx-auto sm:px-6 pl-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary" data-aos="fade-up">
            {data.title}
          </h2>
          <p className="mt-2 text-base-content/70" data-aos="fade-up">
            {data.description}
          </p>
        </div>

        {/* Horizontal Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-1 sm:px-4 pb-10">
          {data.testimoniItems.map((item) => (
            <div
              key={item.id}
              className="min-w-[85%] sm:min-w-[300px] snap-start card bg-base-200/20 shadow-md hover:shadow-xl transition duration-300 border border-base-content/10"
              data-aos="flip-left"
            >
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
