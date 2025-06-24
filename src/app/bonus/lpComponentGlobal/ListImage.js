import ImageComponent from "@/app/component/global/imageComponent";
import TextHeadingTitle from "@/app/component/global/textHeadingTitle";
import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function ListImage({ id, idColor, title, imageUrl, imageAlt, bg, reverse, list }) {
  const reverseFx = reverse ? "flex-col-reverse sm:flex-row-reverse" : "flex-col-reverse sm:flex-row";
  const bgFx = bg ? bg : "bg-base-200";
  const textIdFx = idColor ? "text-slate-500" : "text-amber-300";

  return (
    <section className={`py-20 ${bgFx}`} id={id}>
      <div className="container lg:w-8/12 px-8 mx-auto">
        <div className={`flex gap-20 ${reverseFx} items-center`}>
          <div className="w-full" data-aos="fade-up">
            <p className={`font-semibold capitalize ${textIdFx}`}>{id.replace(/-/g, " ")}</p>
            <div className="grid grid-1 gap-5">
              <TextHeadingTitle title={title} iconTitle={null} titleCase={2} h={2} />
              <ul className="space-y-2">
                {list.map((item) => (
                  <li key={item.id} className="flex items-start gap-1">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" /> {item.title}
                  </li>
                ))}
              </ul>
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
