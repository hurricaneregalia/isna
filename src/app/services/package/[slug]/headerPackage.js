import React from "react";
import { FaStar } from "react-icons/fa6";

export default function HeaderPackage({ title, quality, price, categoryTitle }) {
  return (
    <div className="sm:px-13 px-5 lg:w-2/3 w-full mx-auto mt-10">
      <div className="bg-slate-900 text-neutral-content lg:p-10 sm:p-5 p-5">
        <div className="flex w-full">
          <div className="w-1/2 overflow-hidden">
            <h1>{title}</h1>
          </div>
          <div className="w-1/2 ">
            <p className="flex justify-end text-lg sm:text-2xl gap-1 text-amber-300">
              {Array.from({ length: quality }, (_, index) => (
                <FaStar key={index} />
              ))}
            </p>
          </div>
        </div>
        <div className=" flex flex-col w-full gap-2">
          <h2 className=" text-3xl font-bold ">Rp. {price.toLocaleString("id-ID")}</h2>
          <div>
            <p className="bg-slate-700  px-2 py-1 inline-block capitalize text-sm rounded-md">{categoryTitle || "Tidak diketahui"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
