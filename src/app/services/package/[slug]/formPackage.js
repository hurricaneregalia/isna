import TextHeadingTitle from "@/app/component/global/textHeadingTitle";
import React from "react";

export default function FormPackage() {
  return (
    <form className="md:mt-0 mt-10">
      <TextHeadingTitle title="Isi data bisnis Anda" iconTitle={null} titleCase={2} h={3} />
      <div className=" w-full grid lg:grid-cols-2 grid-cols-1 gap-3 mt-4 border border-base-300 lg:p-10 p-5 rounded-bl-3xl ">
        <div className="form-control relative">
          <input id="id" type="text" placeholder="Placeholder" className="input input-bordered w-full peer" />
          <label
            htmlFor="id"
            className="absolute left-3 top-3 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.6rem] peer-focus:text-sm peer-focus:text-gray-600 bg-base-100 px-1"
          >
            Placeholder
          </label>
        </div>
        <div className="form-control relative">
          <input id="id2" type="text" placeholder="Placeholder" className="input input-bordered w-full peer" />
          <label
            htmlFor="id2"
            className="absolute left-3 top-3 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.6rem] peer-focus:text-sm peer-focus:text-gray-600 bg-base-100 px-1"
          >
            Placeholder
          </label>
        </div>
      </div>
    </form>
  );
}
