import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function ListThumbnails({ listItem, border, iconStyle }) {
  const borderFx = border ? "border border-1" : "";
  const iconFx = iconStyle === "good" ? "✅" : "❌";
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-3">
      {listItem.length > 0 &&
        listItem.map((list, index) => (
          <div key={list.id || index} className="rounded-bl-3xl border bg-base-100 overflow-hidden" data-aos="fade-up">
            <div className={`w-full ${borderFx}`}>
              <div className="h-96">
                <div className=" p-5">
                  <p className="mb-5 text-3xl text-red-600">
                    <IoMdCloseCircleOutline />
                  </p>
                  <p className="font-bold mb-3 flex gap-2">{list.title}</p>
                  <p className="sm:w-full w-3/5">{list.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
