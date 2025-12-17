"use client";
import React, { useState } from "react";
import HalvoraTitle from "./ui/HalvoraTitle";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import HalvoraPrimaryButton from "./ui/HalvoraPrimaryButton";
import HalvoraImage from "./ui/HalvoraImage";
import HalvoraOrderForm from "./ui/HalvoraOrderForm";
import { FaArrowRight } from "react-icons/fa6";

export default function HalvoraProduct({ data, secId, phoneNumber }) {
  const { title, subtitle, items, ornament } = data.products;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuy = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id={secId} className="py-24 bg-base-100 relative">
      <HalvoraOrderForm phoneNumber={phoneNumber} isOpen={isModalOpen} onClose={handleCloseModal} product={selectedProduct} />

      <div className="absolute aspect-[9:16] rounded-full z-1">
        <div className="absolute inset-0 bg-base-200 rounded-full blur-xl"></div>
        <HalvoraImage src={ornament} alt="Decorative Flower" className="relative w-full h-full object-cover opacity-20" />
      </div>
      <div className="absolute aspect-[9:16] rounded-full right-0 z-1">
        <div className="absolute inset-0 bg-base-200 rounded-full blur-xl"></div>
        <HalvoraImage src={ornament} alt="Decorative Flower" className="relative w-full h-full object-cover opacity-20 transform scale-x-[-1]" />
      </div>
      <div className="container mx-auto px-6 lg:w-8/12 w-full z-2 relative">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <HalvoraTitle text={title} />
          <HalvoraSubHeadline className=" text-base-content" text={subtitle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((product) => (
            <div
              key={product.id}
              className="card bg-base-100  overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-base-300 ring-1 ring-base-content/5 hover:ring-primary/30"
            >
              <figure className="relative aspect-4/5 overflow-hidden">
                <HalvoraImage src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {product.tag && <div className="absolute top-4 right-4 bg-accent text-accent-content/95 p-1 px-2 rounded-full text-sm leading-relaxed">{product.tag}</div>}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
              </figure>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-serif font-bold text-base-content group-hover:text-primary transition-colors">{product.name}</h3>
                </div>
                <p className="text-sm text-base-content/70 line-clamp-2 min-h-10 leading-relaxed">{product.description}</p>

                <div className="w-full h-px border-b border-dashed border-base-300 my-4" />

                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-sm text-base-content/60 line-through block mb-1">{product.originalPrice}</span>
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <HalvoraPrimaryButton onClick={() => handleBuy(product)} className="w-full flex items-center gap-2 btn btn-lg btn-primary py-3 text-sm tracking-wide">
                    Beli <FaArrowRight />
                  </HalvoraPrimaryButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
