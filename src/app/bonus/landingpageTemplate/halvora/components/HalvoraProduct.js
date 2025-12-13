import React from "react";
import HalvoraTitle from "./ui/HalvoraTitle";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import HalvoraImage from "./ui/HalvoraImage";
import HalvoraPrimaryButton from "./ui/HalvoraPrimaryButton";

export default function HalvoraProduct({ data }) {
  const { title, subtitle, items } = data.products;

  return (
    <section id="product" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <HalvoraTitle text={title} />
          <HalvoraSubHeadline text={subtitle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((product) => (
            <div key={product.id} className="card bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-stone-100 ring-1 ring-stone-900/5 hover:ring-emerald-800/10">
              <figure className="relative aspect-[4/5] overflow-hidden">
                <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {product.tag && (
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur text-emerald-800 px-4 py-2 rounded-full text-xs font-bold shadow-sm tracking-widest uppercase">
                        {product.tag}
                    </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-emerald-900/10 transition-colors duration-500"></div>
              </figure>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-serif text-emerald-950 group-hover:text-emerald-700 transition-colors">{product.name}</h3>
                <p className="text-sm text-stone-500 line-clamp-2 min-h-[2.5rem] leading-relaxed">
                    {product.description}
                </p>
                
                <div className="w-full h-px bg-stone-100 my-4"></div>
                
                <div className="flex items-end justify-between">
                    <div>
                        <span className="text-sm text-stone-400 line-through block mb-1">{product.originalPrice}</span>
                        <span className="text-2xl font-bold text-emerald-800">{product.price}</span>
                    </div>
                </div>
                <div className="mt-6">
                    <HalvoraPrimaryButton className="w-full bg-white border border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white rounded-xl py-3 text-sm tracking-wide">
                        Detail Produk
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
