import React from "react";
import ImageComponent from "./imageComponent";
import Link from "next/link";
import BtnLinkPrimary from "./btnLinkPrimary";

export default function FullBlock({ bg, title, description, btnTxt, ctaImage }) {
  return (
    <section className={`${bg} my-20 bg-base-100 rounded-bl-3xl py-10`}>
      <div className="container mx-auto lg:w-8/12 p-4 my-10 px-8">
        <div className="flex flex-col-reverse sm:flex-row gap-20">
          <div className="sm:w-1/2 w-100 flex flex-col justify-center items-start">
            <h3 className="text-3xl font-bold mb-10 text-neutral-content">{title}</h3>
            <BtnLinkPrimary btnTxt={btnTxt} href="#" animate={false} />
          </div>
          <div className="sm:w-1/2 w-100 p-0 sm:pl-0">
            <ImageComponent src={ctaImage} alt="ctaImage" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
}
