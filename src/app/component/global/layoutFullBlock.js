import React from "react";
import ImageComponent from "./imageComponent";
import BtnLinkPrimary from "./btnLinkPrimary";
import TextHeadingTitle from "./textHeadingTitle";
import TextBody from "./textBody";

export default function LayoutFullBlock({
  children,
  id,
  idColor,
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
}) {
  const reverseFx = reverse ? "flex-col-reverse sm:flex-row-reverse" : "flex-col-reverse sm:flex-row";
  const bgFx = bg ? bg : "bg-base-200";
  const textFx = bg === "" || bg === "bg-transparent" ? "" : "text-neutral-content";
  const btnFx = btnTxt ? (
    <div className="mt-20">
      <BtnLinkPrimary btnTxt={btnTxt} btnUrl={btnUrl} iconRight={iconRight} />
    </div>
  ) : (
    ""
  );
  const descriptionFx = description ? description : "";
  const listFx = list ? <div className="mt-6">{list}</div> : null;
  const textBodyFx = textBody ? <TextBody description={textBody} /> : null;
  const footerFx = footer ? <div className="">{footer}</div> : null;
  const textIdFx = idColor ? "text-slate-500" : "text-amber-300";

  return (
    <section className={`py-20 ${bgFx} rounded-bl-3xl`} id={id}>
      <div className="container lg:w-8/12 px-8 mx-auto">
        <div className={`flex gap-20 ${reverseFx} items-center`}>
          <div className="w-full" data-aos="fade-up">
            <p className={`font-semibold capitalize ${textIdFx}`}>{id.replace(/-/g, " ")}</p>
            <div className={`${textFx} grid grid-1 gap-5`}>
              <TextHeadingTitle title={title} iconTitle={null} titleCase={2} h={2} />
              {textBodyFx}
              {listFx}
              {btnFx}
            </div>
            <div>{children}</div>
          </div>
          <div className="w-full" data-aos="flip-left">
            <ImageComponent imageUrl={imageUrl} imageAlt={imageAlt} width="100%" priority={false} />
          </div>
        </div>
        {footerFx}
      </div>
    </section>
  );
}
