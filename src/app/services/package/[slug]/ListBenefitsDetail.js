// src/app/services/package/[slug]/ListBenefitsDetail.js
import React from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";

export default function ListBenefitsDetail({ listItem }) {
  const sortedList = [...listItem].sort((a, b) => a.order - b.order);
  return (
    <div className="">
      <div className="w-full rounded-bl-3xl mb-10 grid grid-cols-1 gap-5 lg:p-30 sm:p-15 p-5">
        <ul className="space-y-2">
          {sortedList.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {item.isActive ? <FaCheck className="text-green-500" /> : <FaXmark className="text-red-500" />}
              <span className={item.isActive ? "" : "opacity-50 line-through"}>{item.benefit.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
