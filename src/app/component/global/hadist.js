import React from "react";
import Quotes from "./quotes";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

export default function Hadist({ title, desc, sanad, quotes, listItem, bg }) {
  return (
    <section className={` ${bg} lg:p-20 sm:p-10 p-0`}>
      <div className="p-10 container lg:w-8/12 px-8 mx-auto">
        {listItem.map((item, index) => (
          <div className="w-full text-center" key={index} data-aos="fade-up">
            <div className="rounded-bl-3xl bg-base-200 px-5 py-10 w-full relative">
              <BiSolidQuoteLeft className="absolute top-0 left-3 text-5xl -mt-6 text-slate-300" />
              <Quotes title={item.title} description={item.desc} sanad={item.sanad} hadistNo={item.noHadist} />
              <p className=" font-bold mt-5 "></p>
              <BiSolidQuoteRight className="absolute bottom-0 right-3 text-5xl -mb-6  text-slate-300" />
            </div>
            <div className="mt-10 text-lg">
              <p>{item.quotes}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
