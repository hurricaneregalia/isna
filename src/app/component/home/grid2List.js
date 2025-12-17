import React from "react";
import ImageComponent from "../global/imageComponent";

export default function Grid2List({ listItem, border }) {
  const borderFx = border ? "border border" : "";
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
      {listItem.map((item, index) => (
        <div className="col-span-1 flex justify-stretch" key={index} data-aos="fade-up">
          <div className={`bg-base-100 overflow-hidden rounded-bl-3xl shadow-lg w-full ${borderFx} flex lg:flex-row flex-col`}>
            <div className="h-full lg:w-1/3 w-full ">
              <ImageComponent
                imageUrl={item.image}
                imageAlt={item.title}
                width="100%"
                priority={false}
                rounded="none"
                cssStyle="object-cover lg:h-full lg:w-auto w-full h-auto"
              />
            </div>
            <div className="p-5 lg:w-2/3 w-full">
              <div className="flex justify-between">
                <p className="text-4xl">🎁 </p>
                <div>
                  <p className=" bg-red-100 text-sm text-red-500 px-2 rounded-full inline">
                    Rp. <span className=" line-through">{Number(item.price).toLocaleString("id-ID")}</span>
                  </p>
                </div>
              </div>
              <p className="font-bold mb-3 my-2 text-xl h3">{item.title}</p>
              <p>{item.desc ? item.desc : item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
