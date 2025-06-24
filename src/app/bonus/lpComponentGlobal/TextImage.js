import ImageComponent from "@/app/component/global/imageComponent";
import TextBody from "@/app/component/global/textBody";
import TextHeadingTitle from "@/app/component/global/textHeadingTitle";
import React from "react";

export default function TextImage({ id, idColor, title, description, imageUrl, imageAlt, bg, reverse }) {
  const reverseFx = reverse ? "flex-col-reverse sm:flex-row-reverse" : "flex-col-reverse sm:flex-row";
  const bgFx = bg ? bg : "bg-base-200";
  const textBodyFx = description ? <TextBody description={description} /> : null;
  const textIdFx = idColor ? "text-slate-500" : "text-amber-300";

  return (
    <section className={`py-20 ${bgFx}`} id={id}>
      <div className="container lg:w-8/12 px-8 mx-auto">
        <div className={`flex gap-20 ${reverseFx} items-center`}>
          <div className="w-full" data-aos="fade-up">
            <p className={`font-semibold capitalize ${textIdFx}`}>{id.replace(/-/g, " ")}</p>
            <div className="grid grid-1 gap-5">
              <TextHeadingTitle title={title} iconTitle={null} titleCase={2} h={2} />
              {textBodyFx}
            </div>
          </div>
          <div className="w-full" data-aos="flip-left">
            <ImageComponent imageUrl={imageUrl} imageAlt={imageAlt} width="100%" priority={false} rounded="non" />
          </div>
        </div>
      </div>
    </section>
  );
}
