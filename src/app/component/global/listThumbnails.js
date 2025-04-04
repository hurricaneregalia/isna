import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function ListThumbnails({ listItem, border, iconStyle }) {
  const borderFx = border ? "border border-1" : "";
  const iconFx = iconStyle === "good" ? "✅" : "❌";
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-3">
      {listItem.map((item, index) => (
        <div
          key={index}
          className="rounded-bl-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundPosition: "center center", // Menempatkan gambar di tengah
          }}
          data-aos="fade-up"
        >
          <div className={`w-full ${borderFx}`}>
            <div className="h-96">
              <div className="hero-overlay bg-opacity-90 p-5">
                <p className="mb-5 text-3xl text-red-600">
                  <IoMdCloseCircleOutline />
                </p>
                <p className="text-xs mb-3 text-gray-200 flex gap-2" data-aos="fade-up">
                  {item.title}
                  <span className=" mt-1 flex">
                    <TfiLayoutLineSolid />
                    <TfiLayoutLineSolid />
                  </span>
                </p>
                <p className=" font-bold text-gray-50 sm:w-full w-3/5" data-aos="fade-up">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
