import React from "react";
import Quotes from "./quotes";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import ImageComponent from "./imageComponent";

export default function Hadist({ title, desc, sanad, quotes, listItem, bg }) {
  return (
    <section className={` ${bg} lg:p-20 sm:p-10`}>
      <div className="p-10 container lg:w-1/2 px-8 mx-auto">
        {listItem.map((item, index) => (
          <div className="w-full " key={index} data-aos="fade-up">
            <div className=" bg-base-100 px-5 py-10 w-full relative text-center">
              <BiSolidQuoteLeft className="absolute top-0 left-3 text-5xl -mt-6 text-slate-300" />
              <Quotes title={item.title} description={item.desc} sanad={item.sanad} hadistNo={item.noHadist} />
              <p className=" font-bold mt-5 "></p>
              <BiSolidQuoteRight className="absolute bottom-0 right-3 text-5xl -mb-6  text-slate-300" />
            </div>
            <div className="mt-10 text-lg mx-auto flex gap-5 items-center  bg-base-100 rounded-bl-3xl p-4" data-aos="fade-up">
              <div className=" bg-base-200 p-1 rounded-full">
                <ImageComponent
                  imageUrl="/images/landingPage/muslim-businesman.webp"
                  imageAlt="easy way"
                  width="100%"
                  priority={false}
                  rounded=" none"
                  cssStyle="rounded-full"
                />
              </div>
              <div className="">
                <p>{item.quotes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
