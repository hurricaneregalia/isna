import React from "react";
import { FaFire, FaRegFaceGrinStars } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { AiOutlineProduct } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";

export default function Grid2List({ listItem, border }) {
  const borderFx = border ? "border border-1" : "";
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
      {listItem.map((item, index) => (
        <div className="col-span-1 flex justify-stretch" key={index} data-aos="flip-right">
          <div className={`bg-base-100 p-8 rounded-bl-3xl w-full ${borderFx}`}>
            {item.icon === "FaRegFaceGrinStars" ? (
              <FaRegFaceGrinStars className="text-4xl mb-10 mt-4" />
            ) : item.icon === "IoStatsChart" ? (
              <IoStatsChart className="text-4xl mb-10 mt-4" />
            ) : item.icon === "AiOutlineProduct" ? (
              <AiOutlineProduct className="text-4xl mb-10 mt-4" />
            ) : item.icon === "TbTargetArrow" ? (
              <TbTargetArrow className="text-4xl mb-10 mt-4" />
            ) : item.icon === "HiOutlineSpeakerphone" ? (
              <HiOutlineSpeakerphone className="text-4xl mb-10 mt-4" />
            ) : item.icon === "CgWebsite" ? (
              <CgWebsite className="text-4xl mb-10 mt-4" />
            ) : item.icon === "LiaMoneyBillWaveSolid" ? (
              <LiaMoneyBillWaveSolid className="text-4xl mb-10 mt-4" />
            ) : (
              <FaFire className="text-4xl mb-10 mt-4" />
            )}
            <p className="font-bold mb-3 my-2 text-xl h3">{item.title}</p>
            <p>{item.desc ? item.desc : item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
