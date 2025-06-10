import React from "react";
import { FaCheck, FaStar, FaXmark } from "react-icons/fa6";
import { PiSealCheckFill } from "react-icons/pi";
import { MdAccessTime } from "react-icons/md";
import ListTagsDetail from "./ListTagsDetail";

export default function HeaderPackage({ title, quality, price, categoryTitle, description, bestFor, proccessTime, listTags, children, listItem }) {
  const sortedList = [...listItem].sort((a, b) => a.order - b.order);
  return (
    <div className="rounded-bl-3xl w-full mx-auto sm:mt-30 mt-10">
      <div className=" ">
        <div className="text-neutral-content lg:w-11/12 w-full mx-auto">
          <div className="flex w-full">
            <div className="w-1/2 overflow-hidden">
              <h1 className="text-xl font-bold">{title}</h1>
            </div>
            <div className="w-1/2 ">
              <p className="flex justify-end text-lg sm:text-2xl gap-1 text-amber-300">
                {Array.from({ length: quality }, (_, index) => (
                  <FaStar key={index} />
                ))}
              </p>
            </div>
          </div>
          <div className="my-5">
            <p className=" opacity-75 flex gap-1">
              <PiSealCheckFill className="text-success mt-1" /> {bestFor}
            </p>
            <p className=" opacity-75 flex gap-1">
              <PiSealCheckFill className="text-success mt-1" /> {categoryTitle}
            </p>
            <p className=" opacity-75 flex gap-1">
              <MdAccessTime className=" text-success mt-1" /> Proses {proccessTime} hari kerja.
            </p>
          </div>
          <div className=" flex flex-col sm:w-1/2 w-full gap-2">
            <div className="flex flex-col gap-2">
              <p className=" opacity-75 flex gap-1 bg-slate-800 rounded-lg p-3 py-2">
                {title} adalah {description}
              </p>
              <ListTagsDetail listTags={listTags} />
            </div>
          </div>
          <div className=" mt-10">
            <ul className="space-y-2">
              {sortedList.map((item, index) => (
                <li key={index} className="flex items-center gap-1">
                  {item.isActive ? <FaCheck className="text-green-500" /> : <FaXmark className="text-red-500" />}
                  <span className={item.isActive ? "" : "opacity-50 line-through"}>{item.benefit.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 sm:text-end text-start">
            <h2 className=" text-xl font-bold">Rp. {price.toLocaleString("id-ID")}</h2>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
