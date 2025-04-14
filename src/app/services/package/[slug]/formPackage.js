import TextHeadingTitle from "@/app/component/global/textHeadingTitle";
import React from "react";

export default function FormPackage({ listItem }) {
  return (
    <form className="md:mt-0 mt-10">
      <TextHeadingTitle title="Isi data bisnis Anda" iconTitle={null} titleCase={2} h={3} />

      <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-3 gap-5 mt-4 border border-base-300 lg:p-10 p-5 rounded-bl-3xl">
        {listItem.length > 0 ? (
          listItem.map((item) => (
            <div className="form-control relative" key={item.id}>
              <input
                id={`${item.name}-${item.id}`.replace(/\s+/g, "-")}
                type={item.type}
                placeholder={item.placeholder ? item.placeholder : ""}
                className="input input-bordered w-full peer"
              />
              <label
                htmlFor={`${item.name}-${item.id}`.replace(/\s+/g, "-")}
                className="absolute capitalize left-3 top-3 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.6rem] peer-focus:text-sm peer-focus:text-gray-600 bg-base-100 px-1"
              >
                {item.name}
              </label>
            </div>
          ))
        ) : (
          <p>No item</p>
        )}
      </div>
    </form>
  );
}
