import React from "react";
import { FaCircleUser } from "react-icons/fa6";

export default function Quotes({ title, description, sanad, hadistNo }) {
  return (
    <div className="relative isolate">
      <h2 className="mt-2 font-bold tracking-tight text-3xl">{title}</h2>
      <div className="rounded-2xl mt-6 text-lg border border-dashed border-gray-300 p-5 relative ">
        <div className=" text-2xl mb-4"> 👍 🕌 🕌 👍</div>
        <blockquote className=" italic">{description}</blockquote>
        <span className=" flex items-center my-5 gap-1 text-center justify-center">
          <FaCircleUser />
          <p className=" font-bold text-lg">HR. {sanad}</p>
        </span>
        <div className="absolute bottom-0 left-0 right-0 -mb-3">
          <span className=" bg-slate-200 px-3 py-1 rounded-lg  text-sm">No. {hadistNo}</span>
        </div>
      </div>
    </div>
  );
}
