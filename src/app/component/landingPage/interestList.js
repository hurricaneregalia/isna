import React from "react";
import { FaFire, FaRegFaceGrinStars } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

export default function InterestList({ listItem }) {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
      {listItem.map((item, index) => (
        <div key={index} className="col-span-1 flex justify-stretch">
          <div className="bg-base-100 p-8 rounded-bl-3xl">
            {item.itemIcon === "FaRegFaceGrinStars" ? (
              <FaRegFaceGrinStars className="text-4xl mb-10 mt-4" />
            ) : item.itemIcon === "IoStatsChart" ? (
              <IoStatsChart className="text-4xl mb-10 mt-4" />
            ) : item.itemIcon === "LiaMoneyBillWaveSolid" ? (
              <LiaMoneyBillWaveSolid className="text-4xl mb-10 mt-4" />
            ) : (
              <FaFire className="text-4xl mb-10 mt-4" />
            )}
            <h3 className=" font-bold mb-3 mt-2 text-xl">{item.itemTitle}</h3>
            <p>{item.itemDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
