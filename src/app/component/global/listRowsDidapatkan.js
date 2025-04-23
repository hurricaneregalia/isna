import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function ListRowsDidapatkan({ listItem, border, iconStyle }) {
  const borderFx = border ? "border border-1" : "";
  const iconFx = iconStyle === "good" ? "✅" : "❌";
  return (
    <ul>
      {listItem.map((item, index) => (
        <li key={index} data-aos="fade-up">
          <div className={`w-full ${borderFx}`}>
            <div className=" flex  items-top gap-2 ">
              <p>
                <FaCircleCheck className="text-2xl" />
              </p>
              <div className="mb-3">
                <p className="text-lg h3 bg-amber-300 px-2 text-slate-900 inline rounded-md ">{item.title}</p>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
