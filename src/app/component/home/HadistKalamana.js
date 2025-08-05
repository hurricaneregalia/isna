import React from "react";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import { FaCircleUser } from "react-icons/fa6";
import WrapperHadist from "./ui/WrapperHadist";

export default function HadistKalamana({ secId, data }) {
  return (
    <WrapperHadist>
      <div className="w-full" data-aos="fade-up">
        <div className=" rounded-bl-3xl  bg-base-100  patternKalmaanaLight px-5 py-10 w-full relative text-center">
          <BiSolidQuoteLeft className="absolute top-0 left-3 text-5xl -mt-6 text-slate-300" />
          <div>
            <h2 className="mt-2 font-bold tracking-tight text-3xl lg:w-1/2 w-full mx-auto">{data.title}</h2>
            <div className="rounded-2xl mt-6 text-lg lg:w-2/3 w-full mx-auto border border-dashed border-gray-300 p-5 " data-aos="fade-up">
              <div className=" text-2xl mb-4"> 👍 🕌 🕌 👍</div>
              <blockquote className=" italic ">{data.description}</blockquote>
              <span className=" flex items-center my-5 gap-1 text-center justify-center">
                <FaCircleUser />
                <p className=" font-bold text-lg">{data.sanad}</p>
              </span>
            </div>
          </div>
          <p className=" font-bold mt-5 "></p>
          <BiSolidQuoteRight className="absolute bottom-0 right-3 text-5xl -mb-6  text-slate-300 z-10" />
        </div>
      </div>
    </WrapperHadist>
  );
}
