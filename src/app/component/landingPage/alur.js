import React from "react";
import ImageComponent from "../global/imageComponent";

export default function Alur({ listItem, border, imageUrl }) {
  const borderFx = border ? "border border-1" : "";
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
      {listItem.map((item, index) => (
        <div className="col-span-1 flex justify-stretch" key={index} data-aos="fade-up">
          <div className={`bg-base-100 lg:p-20 lg:pb-0 sm:p-10 sm:pb-0 p-8 pb-0 rounded-bl-3xl overflow-hidden w-full ${borderFx}`}>
            <div className="grid grid-cols-1 content-between h-full">
              <div>
                <p className="font-bold mb-3 my-2 text-xl h1" data-aos="fade-up">
                  {String(index + 1).padStart(2, "0")}.
                </p>
                <p className="font-bold mb-3 my-2 text-xl h3" data-aos="fade-up">
                  {item.title}
                </p>
                <p className="mb-20" data-aos="fade-up">
                  {item.desc ? item.desc : item.description}
                </p>
              </div>
              <div className="">
                <ImageComponent imageUrl={item.img} imageAlt={item.title} width={1000} height={1000} priority={false} rounded=" mx-auto w-100" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
