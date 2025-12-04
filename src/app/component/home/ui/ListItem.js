import React from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";

export default function ListItem({ data, listFor, gridCol = "grid-cols-1 " }) {
  return (
    <ul className={`grid ${gridCol} gap-3`}>
      {data.map((item, index) => {
        const isBad = listFor === "bad";
        const Icon = isBad ? FaXmark : FaCheck;
        const iconColor = isBad ? "text-red-500" : "text-green-500";
        const iconSize = 16;

        return (
          <li key={index} data-aos="fade-up" className="list-none w-full">
            <div className="relative border rounded-bl-2xl p-3 border-base-content/50">
              <div className="flex justify-between sm:items-center items-start">
                {/* TEXT CONTENT */}
                <div className="flex flex-col">
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </div>

                {/* ICON DI SEBELAH KANAN SETELAH TEKS */}
                <Icon className={`${iconColor}`} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
