import React from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";

export default function ListItem2({ data, listFor }) {
  return (
    <ul className="grid sm:grid-cols-2 grid-cols-1 gap-8">
      {data.map((item, index) => {
        const isBad = listFor === "bad";
        const Icon = isBad ? FaXmark : FaCheck;
        const iconBg = isBad ? "bg-red-500/75" : "bg-amber-300";
        const titleBg = isBad ? "bg-red-500/75" : "bg-amber-300";
        const iconWrapperClass = "aspect-square h-6 w-6 flex items-center justify-center rounded-full";
        const iconSize = 14;

        return (
          <li key={index} data-aos="fade-up" className="list-none w-full">
            <div className="flex items-start gap-1 ">
              <div id={`icon${index}`} className={`${iconWrapperClass} ${iconBg} text-slate-800 `}>
                <Icon size={iconSize} />
              </div>
              <div className="flex flex-col justify-center text-lg text-slate-800">
                <p id={`title${index}`} className={`h-6 flex items-center px-2 text-sm mb-2 ${titleBg} w-fit rounded-full font-bold `}>
                  {item.title}
                </p>
                <p className="opacity-75 text-base-content">{item.description}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
