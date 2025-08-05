import React from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";

export default function ListItem({ data, listFor }) {
  return (
    <ul className="flex flex-col gap-3">
      {data.map((item, index) => {
        const isBad = listFor === "bad";
        const Icon = isBad ? FaXmark : FaCheck;
        const iconBg = isBad ? "bg-red-500/75" : "bg-green-500/75";
        const titleBg = isBad ? "bg-red-500/75" : "bg-green-500/75";
        const iconWrapperClass = "aspect-square h-6 w-6 flex items-center justify-center rounded-full";
        const iconSize = 14;

        return (
          <li key={index} data-aos="fade-up" className="list-none">
            <div className="flex items-start gap-1">
              <div id={`icon${index}`} className={`${iconWrapperClass} ${iconBg} text-base-100`}>
                <Icon size={iconSize} />
              </div>
              <div className="flex flex-col justify-center text-lg">
                <p id={`title${index}`} className={`h-6 flex items-center px-2 text-sm ${titleBg} w-fit rounded-full text-base-100`}>
                  {item.title}
                </p>
                <p className="opacity-75">{item.description}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
