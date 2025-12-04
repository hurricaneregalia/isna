import React from "react";

export default function ListItemThumbnail({ data, listFor }) {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      {data.map((item, index) => (
        <div key={index} className="rounded-bl-3xl overflow-hidden border border-slate-500" data-aos="fade-up">
          <div className="w-full">
            <div>
              <div className="p-5 ">
                <div className="flex justify-between mb-5 text-3xl text-gray-50">
                  {item.icon}
                  <p className=" opacity-10">0{index + 1}</p>
                </div>
                <p className="text-xl mb-3 font-bold text-amber-300 flex gap-2">{item.title}</p>
                <p className=" text-white/75 w-full">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
