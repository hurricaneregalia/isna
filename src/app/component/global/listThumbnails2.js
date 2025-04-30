import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuNotepadText } from "react-icons/lu";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineProduct } from "react-icons/ai";
import { GiStarFormation } from "react-icons/gi";
import { FaAd } from "react-icons/fa";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

export default function ListThumbnails2({ listItem, border, iconStyle, bg }) {
  const borderFx = border ? "border border-1" : "";
  const iconFx = iconStyle === "good" ? "✅" : "❌";
  return (
    <div className="grid md:grid-cols-3 gap-3 mt-20">
      {listItem.map((item, index) => (
        <div
          key={index}
          className="rounded-bl-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${item.image ? item.image : ""})`,
            backgroundPosition: "center center", // Menempatkan gambar di tengah
            backgroundSize: "cover",
          }}
          data-aos="fade-up"
        >
          <div className={`w-full ${borderFx}`}>
            <div className="sm:h-80 h-auto ">
              <div className={`hero-overlay bg-opacity-80 p-5 pb-10 ${bg} `}>
                <p className="mb-5 text-3xl text-gray-50">
                  {item.icon === "LuNotepadText" ? (
                    <LuNotepadText />
                  ) : item.icon === "BiTargetLock" ? (
                    <BiTargetLock />
                  ) : item.icon === "AiOutlineProduct" ? (
                    <AiOutlineProduct />
                  ) : item.icon === "GiStarFormation" ? (
                    <GiStarFormation />
                  ) : item.icon === "FaAd" ? (
                    <FaAd />
                  ) : item.icon === "LiaMoneyBillWaveSolid" ? (
                    <LiaMoneyBillWaveSolid />
                  ) : null}
                </p>
                <p className="text-xs mb-3 text-amber-300 flex gap-2">
                  {item.title}
                  <span className=" mt-1 flex">
                    <TfiLayoutLineSolid />
                    <TfiLayoutLineSolid />
                  </span>
                </p>
                <p className=" font-bold text-gray-50 md:w-2/3 w-full">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
