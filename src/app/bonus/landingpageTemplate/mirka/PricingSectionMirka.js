// src/app/bonus/landingpageTemplate/mirka/PricingSectionMirka.js
import React from "react";
import SectionWrapper from "./ui/SectionWrapper";
import Image from "next/image";
import formatRupiah from "@/app/utils/FormatRupiah";
import Modal from "./ui/Modal";
import Heading from "./ui/Heading";

export default function PricingSectionMirka({ secId, waNumber, data }) {
  return (
    <section
      id={secId}
      style={{
        backgroundImage: `url(${data.pricing.background})`,
        backgroundSize: "100% auto",
      }}
    >
      <div className="bg-gradient-to-t from-secondary to-secondary/50 lg:px-20 sm:py-32 py-15">
        <SectionWrapper css="sm:px-20 gap-20 space-y-10">
          {/* Grid of Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {/* Pricing Card */}
            {data.pricing.item.map((plan) => (
              <div key={plan.id} className=" text-base-100 flex flex-col text-left">
                <Heading textColor="no">{plan.name}</Heading>
                <p className="text-2xl font-bold text-primary">{formatRupiah(plan.price)}</p>

                {/* Feature List */}
                <ul className="space-y-2 my-10">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-success">✓</span>
                      <span className="opacity-90 ">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Modal title={plan.buttonLabel} waNumber={waNumber} btnCss="btn-primary " />
              </div>
            ))}

            {/* Image Cards */}
            {data.pricing.imageCards.map((img) => (
              <div key={img.id} className={`overflow-hidden card shadow-md ${img.id === "img-1" ? "hidden sm:block lg:block" : ""} ${img.id === "img-2" ? "hidden lg:block" : ""}`}>
                <Image src={img.src} alt={img.alt} width={600} height={400} className=" card object-cover w-full h-full border-8 border-slate-100" />
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
