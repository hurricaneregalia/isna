import React from "react";
import HalvoraTitle from "./ui/HalvoraTitle";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import HalvoraImage from "./ui/HalvoraImage";
import HalvoraPrimaryButton from "./ui/HalvoraPrimaryButton";
import { FaArrowRight } from "react-icons/fa6";

export default function HalvoraProduct({ data, secId }) {
  const { title, subtitle, items, ornament } = data.products;

  return (
    <section id={secId} className="py-24 bg-white relative">
      <div className="absolute aspect-[9:16] rounded-full z-1">
        <div className="absolute inset-0 bg-[#FFF5EA] rounded-full blur-xl"></div>
        <HalvoraImage src={ornament} alt="Decorative Flower" className="relative w-full h-full object-cover opacity-20" />
      </div>
      <div className="absolute aspect-[9:16] rounded-full right-0 z-1">
        <div className="absolute inset-0 bg-[#FFF5EA] rounded-full blur-xl"></div>
        <HalvoraImage src={ornament} alt="Decorative Flower" className="relative w-full h-full object-cover opacity-20 transform scale-x-[-1]" />
      </div>
      <div className="container mx-auto px-6 lg:w-8/12 w-full z-2 relative">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <HalvoraTitle text={title} />
          <HalvoraSubHeadline text={subtitle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((product) => (
            <div
              key={product.id}
              className="card bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-[#F0E0D0] ring-1 ring-[#6B4423]/5 hover:ring-[#D48F8F]/30"
            >
              <figure className="relative aspect-[4/5] overflow-hidden">
                <HalvoraImage src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {product.tag && <div className="absolute top-4 right-4 bg-[#6B4423] text-white/95 p-1 px-2 rounded-full text-sm leading-relaxed">{product.tag}</div>}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#D48F8F]/10 transition-colors duration-500"></div>
              </figure>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-serif text-[#6B4423] group-hover:text-[#D48F8F] transition-colors">{product.name}</h3>
                <p className="text-sm text-[#A07050] line-clamp-2 min-h-[2.5rem] leading-relaxed">{product.description}</p>

                <div className="w-full h-px border-b border-dashed border-[#F0E0D0] my-4" />

                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-sm text-[#A07050] line-through block mb-1">{product.originalPrice}</span>
                    <span className="text-2xl font-bold text-[#D48F8F]">{product.price}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <HalvoraPrimaryButton className="w-full flex items-center gap-2 btn btn-lg bg-[#D48F8F] border border-[#D48F8F] text-[#D48F8F] hover:bg-[#D48F8F]/80 hover:text-white rounded-xl py-3 text-sm tracking-wide">
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
