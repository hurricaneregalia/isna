"use client";
import React from "react";
import Image from "next/image";

const KanzarProduct = ({ onOrder, secId = "product", data }) => {
  const { title, subtitle, products } = data.product;

  return (
    <section id={secId} className="py-24 bg-base-200 transition-colors duration-300 relative">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 mb-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-base-content">{title}</h2>
          </div>

          <p className="text-base-content/70 max-w-2xl mx-auto text-lg">{subtitle}</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full flex justify-center items-center gap-1">
            <div className="w-1 h-1 bg-base-100 rounded-full"></div>
            <div className="w-1 h-1 bg-base-100 rounded-full"></div>
            <div className="w-1 h-1 bg-base-100 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, idx) => {
            // Find variant with lowest sale price to display "Starting from"
            const lowestVariant = product.variants.reduce((prev, curr) => (prev.priceSale < curr.priceSale ? prev : curr));

            const formatter = new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            });

            const formattedPrice = formatter.format(lowestVariant.priceSale);
            const formattedRegularPrice = formatter.format(lowestVariant.priceRegular);

            return (
              <div
                key={product.id}
                className="group bg-base-100 card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-base-300 hover:border-primary relative"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Image Area */}
                <div className="relative overflow-hidden w-full aspect-square shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {product.tag && (
                    <div className="absolute top-8 left-8 bg-warning text-white text-xs font-bold px-3 py-1 rounded-tr-lg rounded-bl-lg uppercase tracking-wider shadow-lg border border-warning-40">
                      {product.tag}
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col grow relative gap-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-2xl font-bold text-base-content group-hover:text-primary transition-colors">{product.name}</h3>
                  </div>

                  <div className="border-b border-base-200">
                    <span className="text-xs text-base-content/60 uppercase tracking-widest block mb-1">Mulai dari</span>
                    <div>
                      <p className="text-sm text-slate-400 line-through decoration-slate-400/50">{formattedRegularPrice}</p>
                      <p className="text-warning font-bold text-xl font-sans">{formattedPrice}</p>
                    </div>
                  </div>

                  <p className="text-base-content/70 leading-relaxed grow text-lg">{product.description}</p>
                  {/* Product Card Button */}
                  <button
                    onClick={() => onOrder(product.name)}
                    className="card btn btn-lg btn-primary font-bold shadow-md hover:shadow-lg transition-all duration-300 mt-auto border border-primary/50"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KanzarProduct;
