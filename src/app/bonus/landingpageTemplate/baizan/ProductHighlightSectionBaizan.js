"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import formatRupiah from "@/app/utils/FormatRupiah";

export default function ProductHighlightSectionBaizan({ widthSection, secId, data }) {
  const widthSectionFx = widthSection ? widthSection : "max-w-6xl";
  return (
    <section id={secId} className="bg-base-200 text-base-content">
      <div className={`${widthSectionFx} mx-auto px-5 py-20 `}>
        <h2 id="lorem" className="text-3xl md:text-4xl font-semibold text-center">
          {data.title}
        </h2>
        <p className="lorem text-center text-base-content/80 mt-4 mb-10 max-w-xl mx-auto">{data.shortDescription}</p>

        <div id="productHighlight" className="grid sm:gap-3 lg:gap-6 gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {data.products.map((product, index) => (
            <div key={index} className="group relative card shadow-lg bg-base-100 p-2 overflow-hidden transition-transform duration-300 hover:scale-[1.03] cursor-pointer" data-aos="flip-left">
              {/* Label Diskon */}
              <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-semibold px-2 py-1 rounded transition-colors duration-300 group-hover:bg-accent">
                DISC {product.discountValue}%
              </div>

              {/* Image Product & Hover Image */}
              <figure className="relative overflow-hidden h-72 rounded">
                <Image src={product.image} alt={product.title} width={400} height={500} className="object-cover w-full h-full transition-opacity duration-500" />
                <Image
                  src={product.imageUse}
                  alt={`${product.title} usage`}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </figure>

              {/* Card Content */}
              <div className="card-body mt-2 p-2 bg-base-200 overflow-hidden">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-lg w-9/12">{product.title}</h3>
                  <div className="flex items-center text-warning mt-1">
                    <FaStar className="mr-1" />
                    <span className="text-sm font-bold">{product.rating}</span>
                  </div>
                </div>
                <p className="text-primary font-bold" data-aos="fade-up">
                  {formatRupiah(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
