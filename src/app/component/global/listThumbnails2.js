import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuNotepadText } from "react-icons/lu";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineProduct } from "react-icons/ai";
import { GiStarFormation } from "react-icons/gi";
import { FaAd } from "react-icons/fa";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

export default function ListThumbnails2({ listItem, border, iconStyle }) {
  const borderFx = border ? "border border-1" : "";
  const iconFx = iconStyle === "good" ? "✅" : "❌";
  return (
    <div className="grid md:grid-cols-3 gap-3 mt-20">
      {listItem.map((item, index) => (
        <div
          key={index}
          className="rounded-bl-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${item.img ? item.img : ""})`,
            backgroundPosition: "center center", // Menempatkan gambar di tengah
            backgroundSize: "cover",
          }}
          data-aos="fade-up"
        >
          <div className={`w-full ${borderFx}`}>
            <div className="h-80 h-9/10">
              <div className="hero-overlay bg-opacity-80 p-5">
                <p className="mb-5 text-3xl text-green-400">
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
                <p className="text-xs mb-3 text-gray-200 flex gap-2" data-aos="fade-up">
                  {item.title}
                  <span className=" mt-1 flex">
                    <TfiLayoutLineSolid />
                    <TfiLayoutLineSolid />
                  </span>
                </p>
                <p className=" font-bold text-gray-50 md:w-2/3 sm:w-full w-3/5" data-aos="fade-up">
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
