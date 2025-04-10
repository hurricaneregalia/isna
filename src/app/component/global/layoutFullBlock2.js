import React from "react";
import ImageComponent from "./imageComponent";
import BtnLinkPrimary from "./btnLinkPrimary";
import TextDesctiption from "./textDescription";
import TextTitleH2 from "./textHeadingTitle";
import TextHeadingTitle from "./textHeadingTitle";
import TextBody from "./textBody";

export default function LayoutFullBlock2({
  children,
  id,
  title,
  description,
  footer,
  headAlign,
  list,
  imageUrl,
  imageAlt,
  bg,
  reverse,
  btnTxt,
  btnUrl,
  iconRight,
  textBody,
  roundedBrand,
}) {
  const reverseFx = reverse ? "flex-col-reverse sm:flex-row-reverse" : "flex-col-reverse sm:flex-row";
  const bgFx = bg ? bg : "bg-base-200";
  const textFx = bg === "" || bg === "bg-transparent" ? "" : "text-neutral-content";
  const footerFx = footer ? <div className="">{footer}</div> : null;
  const roundedFx = roundedBrand ? null : "rounded-bl-3xl";

  return (
    <section className={`py-20 ${bgFx} ${roundedFx}`} id={id}>
      <div className="container lg:w-8/12 px-8 mx-auto">
        <div className={`flex gap-20 ${reverseFx}`}>
          <div className="w-full" data-aos="fade-up">
            <p className="font-semibold text-amber-300 capitalize">{id.replace(/-/g, " ")}</p>
            <div className={`${textFx} grid grid-1 gap-5`}>
              <div className="sm:w-1/2 w-full">
                <TextHeadingTitle title={title} iconTitle={null} titleCase={2} h={2} />
              </div>
              <div className="mt-6">{list}</div>
            </div>
            <div>{children}</div>
          </div>
        </div>
        {footerFx}
      </div>
    </section>
  );
}
