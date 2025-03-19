import React from "react";

export default function ListRows({ listItem, border, iconStyle }) {
  const borderFx = border ? "border border-1" : "";
  const iconFx = iconStyle === "good" ? "✅" : "❌";
  return (
    <ul>
      {listItem.map((item, index) => (
        <li key={index} data-aos="fade-up">
          <div className={`w-full ${borderFx}`}>
            <div className=" flex  items-top gap-2 ">
              <p>{iconFx}</p>
              <p className="mb-2 text-lg h3">{item.title}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
