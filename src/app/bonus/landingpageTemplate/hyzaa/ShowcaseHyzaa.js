"use client";
import { useState } from "react";
import Image from "next/image";
import HeadlineText from "./ui/HeadlineText";
import Bodytext from "./ui/Bodytext";
import Wrapper from "./ui/Wrapper";
import formatRupiah from "@/app/utils/FormatRupiah";
import HeaderSection from "./ui/HeaderSection";
import FormulirPemesananHyzaa from "./FormulirPemesananHyzaa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ShowcaseHyzaa({ secId, paddingX, waNumber, data }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModalWithProduct = (product) => {
    setSelectedProduct(product);
    document.getElementById("modal-pesan").showModal();
  };

  return (
    <section className={paddingX} id={secId}>
      <Wrapper>
        <HeaderSection label={data.label} headline={data.headline} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {data.item.map((p, i) => (
            <div
              key={i}
              className="group card cursor-pointer shadow-lg shadow-primary/10 hover:shadow-xl active:shadow-primary/30 hover:shadow-primary/30 active:shadow-xl transition-all duration-300 relative overflow-hidden bg-base-100"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="w-full relative aspect-square">
                <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, 700px" className="object-cover transition-opacity duration-500 group-hover:opacity-0 group-active:opacity-0" />
                <Image
                  src={p.altImage}
                  alt={`${p.name} alternative`}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="absolute object-cover top-0 left-0 w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-active:opacity-100"
                />
              </div>
              <div className="p-4 text-base-content text-start flex flex-col h-50">
                <HeadlineText h="h5" text={p.name} />
                <Bodytext text={p.desc} />
                <div id="aligntToBottom" className="mt-auto">
                  <p className="text-primary font-semibold">{formatRupiah(p.price)}</p>
                  <button onClick={() => openModalWithProduct(p)} className="btn btn-primary flex gap-1 mt-4 w-full">
                    Pilih <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>

      {/* Modal Pemesanan */}
      <FormulirPemesananHyzaa selectedProduct={selectedProduct} variants={data.item} waNumber={waNumber} />
    </section>
  );
}
