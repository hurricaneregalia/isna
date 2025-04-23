import React from "react";
import TextDescription from "../global/textDescription";
import ImageComponent from "../global/imageComponent";

export default function Banner({ bg, title, description, image }) {
  return (
    <div className={`mt-4 text-lg mx-auto bg-base-300 overflow-hidden w-full rounded-bl-3xl ${bg}`}>
      <div className="containerSec flex flex-col md:flex-row gap-3 overflow-hidden bg-amber-300/80 text-slate-900 ">
        <div className="sec1 w-full lg:w-1/2 p-10">
          <TextDescription title={title} description={description} />
        </div>
        <div className="sec2 w-full lg:w-1/2 sm:pt-10 p-0 flex justify-center" data-aos="fade-up">
          <ImageComponent imageUrl={image} imageAlt="easy way" width="100px" priority={false} rounded=" none" />
        </div>
      </div>
    </div>
  );
}
