import React from "react";

export default function Alur({ listItem, border }) {
  const borderFx = border ? "border border-1" : "";
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
      {listItem.map((item, index) => (
        <div className="col-span-1 flex justify-stretch bg-red-500" key={index} data-aos="fade-up">
          <div className={`bg-base-100 p-8 rounded-bl-3xl w-full ${borderFx}`}>
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
      ))}
    </div>
  );
}
