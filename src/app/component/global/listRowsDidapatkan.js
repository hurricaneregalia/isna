import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function ListRowsDidapatkan({ listItem, border, icon }) {
  const borderFx = border ? "border border-1" : "";
  const iconFx = icon ? icon : <FaCircleCheck className="text-2xl" />;
  const bgText = icon ? "bg-red-500 text-base-100" : "bg-amber-300 text-slate-900 ";
  const iconColorFx = icon ? "text-red-500" : "";
  return (
    <ul>
      {listItem.map((item, index) => (
        <li key={index} data-aos="fade-up">
          <div className={`w-full ${borderFx}`}>
            <div className=" flex  items-top gap-2 ">
              <p className={iconColorFx}>{iconFx}</p>
              <div className="mb-3">
                <p className={`${bgText} text-lg h3  px-2 inline rounded-md `}>{item.title}</p>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
