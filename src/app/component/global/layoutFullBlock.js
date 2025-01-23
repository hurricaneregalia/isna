import React from "react";
import ImageComponent from "./imageComponent";
import Link from "next/link";
import BtnLinkPrimary from "./btnLinkPrimary";
import TextDesctiption from "./textDesctiption";

export default function LayoutFullBlock({ children, id, title, description, footer, headAlign, imageUrl, imageAlt, bg, reverse }) {
  const reverseFx = reverse ? "flex-col-reverse sm:flex-row-reverse" : "flex-col-reverse sm:flex-row";
  const bgFx = bg ? bg : "bg-base-100";
  const textFx = bg === "" ? "" : "text-neutral-content";

  const descriptionFx = description ? description : "";
  const footerFx = footer ? <div className="">{footer}</div> : null;
  return (
    <section className={`py-20 ${bgFx} rounded-bl-3xl`} id={id}>
      <div className="container lg:w-8/12 px-8 mx-auto">
        <div className={`flex gap-20 ${reverseFx}`}>
          <div className="w-full">
            <p className="font-semibold text-primary capitalize">{id.replace(/-/g, " ")}</p>
            <div className={`mt-6 ${textFx}`}>
              <TextDesctiption title={title} description={descriptionFx} />
            </div>
            <div className="pt-10">{children}</div>
          </div>
          <div className="w-full">
            <ImageComponent imageUrl={imageUrl} imageAlt={imageAlt} width={300} height={300} priority={false} />
          </div>
        </div>
        {footerFx}
      </div>
    </section>
  );
}
