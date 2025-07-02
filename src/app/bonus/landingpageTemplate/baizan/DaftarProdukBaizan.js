import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import formatRupiah from "@/app/utils/FormatRupiah";

export default function DaftarProdukBaizan({ widthSection, secId, data }) {
  const widthSectionFx = widthSection ? widthSection : "max-w-6xl";

  // Fungsi untuk menampilkan label diskon jika ada
  const renderDiscountLabel = (discountValue) => {
    if (!discountValue || discountValue === "") return null;

    return (
      <div className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-semibold px-2 py-1 rounded transition-colors duration-300 group-hover:bg-secondary">DISC {discountValue}%</div>
    );
  };

  return (
    <section id={secId} className="bg-base-200 text-base-content">
      <div className={`${widthSectionFx} mx-auto px-5 py-20`}>
        <h2 className="text-3xl md:text-4xl font-semibold text-center">{data.title}</h2>
        <p className="text-center text-base-content/80 mt-4 mb-10 max-w-xl mx-auto">{data.shortDescription}</p>

        <div className="grid sm:gap-3 lg:gap-6 sm:grid-cols-4 grid-cols-2 gap-1">
          {data.products.map((product, index) => (
            <div key={index} className="group relative card shadow-md bg-base-100 p-2 overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer" data-aos="flip-left">
              {/* Render hanya jika ada diskon */}
              {renderDiscountLabel(product.discountValue)}

              <figure className="relative overflow-hidden h-48 rounded">
                <Image src={product.image} alt={product.title} width={300} height={350} className="object-cover w-full h-full transition-opacity duration-500" />
                <Image
                  src={product.imageUse}
                  alt={`${product.title} use`}
                  width={300}
                  height={350}
                  className="object-cover w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </figure>

              <div className="card-body mt-2 p-2 bg-base-200">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-sm">{product.title}</h3>
                  <div className="flex items-center text-warning text-xs mt-1">
                    <FaStar className="mr-1" />
                    <span className="font-bold">{product.rating}</span>
                  </div>
                </div>
                <p className="text-primary font-bold text-sm">{formatRupiah(product.price)}</p>
                <button className="mt-2 w-full btn btn-sm btn-primary transition-colors duration-300 hover:bg-secondary hover:text-white">Beli Sekarang</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
