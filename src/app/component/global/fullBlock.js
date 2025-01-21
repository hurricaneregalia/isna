import React from "react";
import ImageComponent from "./imageComponent";
import Link from "next/link";
import BtnLinkPrimary from "./btnLinkPrimary";

export default function FullBlock({ bg, title, description, btnTxt, ctaImage, id, themes, children }) {
  const descriptionFx = description ? <p className="my-6 max-w-2xl text-base-content">{description}</p> : "";
  const btnFx = btnTxt ? <BtnLinkPrimary btnTxt={btnTxt} href="#" animate={false} /> : "";
  const textThemesFx = themes ? "text-base-content" : "text-neutral-content";
  const idFx = id ? <p className="text-base/7 font-semibold text-primary capitalize">{id}</p> : "";
  return (
    <section className={`${bg} my-20 rounded-bl-3xl py-10`} id={id}>
      <div className="container mx-auto lg:w-8/12 p-4 my-10 px-8">
        <div className="flex flex-col-reverse sm:flex-row gap-20">
          <div className="sm:w-1/2 w-100 flex flex-col justify-center items-start gap-10">
            {idFx}
            <h3 className={`text-3xl font-bold ${textThemesFx}`}>{title}</h3>
            {descriptionFx}
            {btnFx}
          </div>
          <div className="sm:w-1/2 w-100 p-0 sm:pl-0">
            <ImageComponent src={ctaImage} alt="ctaImage" width={300} height={300} />
          </div>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
