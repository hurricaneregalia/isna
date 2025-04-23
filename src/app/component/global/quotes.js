import React from "react";
import { FaCircleUser } from "react-icons/fa6";

export default function Quotes({ title, description, sanad, hadistNo }) {
  return (
    <div className="">
      <h2 className="mt-2 font-bold tracking-tight text-3xl lg:w-1/2 w-full mx-auto">{title}</h2>
      <div className="rounded-2xl mt-6 text-lg lg:w-2/3 w-full mx-auto border border-dashed border-gray-300 p-5 ">
        <div className=" text-2xl mb-4"> 👍 🕌 🕌 👍</div>
        <blockquote className=" italic ">{description}</blockquote>
        <span className=" flex items-center my-5 gap-1 text-center justify-center">
          <FaCircleUser />
          <p className=" font-bold text-lg">{sanad}</p>
        </span>
      </div>
    </div>
  );
}
