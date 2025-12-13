import React from "react";
import HalvoraTitle from "./ui/HalvoraTitle";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import HalvoraImage from "./ui/HalvoraImage";
import HalvoraPrimaryButton from "./ui/HalvoraPrimaryButton";

export default function HalvoraProduct({ data }) {
  const { title, subtitle, items } = data.products;

  return (
    <section id="product" className="py-20 bg-base-200/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <HalvoraTitle text={title} />
          <HalvoraSubHeadline text={subtitle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((product) => (
            <div key={product.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-base-200">
              <figure className="relative overflow-hidden aspect-[4/5]">
                <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                {product.tag && (
                    <div className="absolute top-4 right-4 badge badge-primary p-3 font-bold shadow-lg">
                        {product.tag}
                    </div>
                )}
              </figure>
              <div className="card-body p-6">
                <h3 className="card-title text-xl font-serif">{product.name}</h3>
                <p className="text-sm text-base-content/70 line-clamp-2 min-h-[2.5rem]">
                    {product.description}
                </p>
                
                <div className="divider my-2"></div>
                
                <div className="flex items-end justify-between">
                    <div>
                        <span className="text-xs text-gray-400 line-through block">{product.originalPrice}</span>
                        <span className="text-xl font-bold text-primary">{product.price}</span>
                    </div>
                </div>
                <div className="card-actions mt-4">
                    <HalvoraPrimaryButton className="w-full btn-outline hover:!text-white">
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
