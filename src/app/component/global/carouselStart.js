import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import ImageComponent from "./imageComponent";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function CarouselStart({ listItem, border, iconStyle }) {
  const borderFx = border ? "border border-1" : "";
  const iconFx = iconStyle === "good" ? "✅" : "❌";
  return (
    <div className="carousel rounded-bl-3xl  space-x-3 relative">
      {listItem.length > 0 &&
        listItem.map((list, index) => (
          <div key={list.id || index} className="carousel-item" data-aos="fade-up">
            <ImageComponent imageUrl={list.image} imageAlt={list.title} rounded="none" cssStyle="rounded-bl-3xl object-cover z-0 w-100 h-auto" />
            <div className="rounded-bl-3xl absolute inset-0 bg-slate-900/80 p-10">
              <p className="text-xs mb-3 text-amber-300 flex gap-2">
                {list.title}
                <span className=" mt-1 flex">
                  <TfiLayoutLineSolid />
                  <TfiLayoutLineSolid />
                </span>
              </p>
              <p className=" font-bold text-gray-50 w-4/12">{list.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
