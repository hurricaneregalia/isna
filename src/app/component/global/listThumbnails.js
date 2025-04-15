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
            backgroundSize: "cover",
          }}
          data-aos="fade-up"
        >
          <div className={`w-full ${borderFx}`}>
            <div className="h-96">
              <div className="hero-overlay bg-slate-900/80 p-5">
                <p className="mb-5 text-3xl text-red-600">
                  <IoMdCloseCircleOutline />
                </p>
                <p className="text-xs mb-3 text-amber-300 flex gap-2">
                  {item.title}
                  <span className=" mt-1 flex">
                    <TfiLayoutLineSolid />
                    <TfiLayoutLineSolid />
                  </span>
                </p>
                <p className=" font-bold text-gray-50 sm:w-full w-3/5">{item.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
