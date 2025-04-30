import React from "react";
import Quotes from "./quotes";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import ImageComponent from "./imageComponent";

export default function Hadist({ listItem, bg, image }) {
  return (
    <section className={` ${bg} lg:p-20 sm:p-10`}>
      <div className="p-10 container lg:w-1/2 px-8 mx-auto">
        {listItem.map((item, index) => (
          <div className="w-full " key={index} data-aos="fade-up">
            <div className=" rounded-bl-3xl  bg-base-100 px-5 py-10 w-full relative text-center">
              <BiSolidQuoteLeft className="absolute top-0 left-3 text-5xl -mt-6 text-slate-300" />
              <Quotes title={item.title} description={item.description} sanad={item.subTitle} />
              <p className=" font-bold mt-5 "></p>
              <BiSolidQuoteRight className="absolute bottom-0 right-3 text-5xl -mb-6  text-slate-300 z-10" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
