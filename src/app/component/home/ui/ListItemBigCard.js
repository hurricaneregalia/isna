import React from "react";
import ImageStyleBigCard from "./ImageStyleBigCard";

export default function ListItemBigCard({ data }) {
  return (
    <ul className="grid sm:grid-cols-2 grid-cols-1 gap-3">
      {data.map((item, index) => (
        <li key={index} className="list-none bg-base-100 lg:p-20 lg:pb-0 sm:p-10 sm:pb-0 p-8 pb-0 rounded-bl-3xl overflow-hidden w-full h-full flex flex-col" data-aos="fade-up">
          {/* Konten bagian atas */}
          <div className="flex flex-col items-start gap-1 flex-grow">
            <div className="flex flex-col justify-center text-lg gap-3 ">
              <span className="text-base-content/10 text-6xl">0{index + 1}.</span>
              <p className="text-xl flex items-center font-bold w-fit rounded-full">{item.title}</p>
              <p className="opacity-75">{item.description}</p>
            </div>
          </div>

          {/* Gambar rata bawah */}
          <ImageStyleBigCard src={item.image} alt={item.title} css="mt-20 rounded-t-2xl" />
        </li>
      ))}
    </ul>
  );
}
