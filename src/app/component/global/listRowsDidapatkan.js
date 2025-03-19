import React from "react";

export default function ListRowsDidapatkan({ listItem, border, iconStyle }) {
  const borderFx = border ? "border border-1" : "";
  const iconFx = iconStyle === "good" ? "✅" : "❌";
  return (
    <ul>
      {listItem.map((item, index) => (
        <li key={index} data-aos="fade-up">
          <div className={`w-full ${borderFx}`}>
            <div className=" flex  items-top gap-2 ">
              <p>{iconFx}</p>
              <div className="mb-3">
                <p className="text-lg h3 font-bold bg-success px-2 inline rounded-md text-slate-200">{item.title}</p>
                <p className="text-lg">{item.desc}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
