import ImageComponent from "@/app/component/global/imageComponent";
import React from "react";

export default function HeroPackage({ img, imageAlt }) {
  return (
    <div className="lg:p-20 sm:p-10 p-5 bg-gray-900 rounded-bl-3xl ">
      <div className="rounded-bl-3xl overflow-hidden grid md:grid-cols-2 grid-cols-1 md:gap-3 gap-1 lg:w-2/3 mx-auto w-full">
        <div className="">
          <ImageComponent imageUrl={img} imageAlt={imageAlt} width="100%" priority={true} rounded="noround" cssStyle="object-cover h-full w-auto" />
        </div>
        <div className="galler grid md:grid-cols-2 grid-cols-4 md:gap-3 gap-1">
          <div className=" bg-green-500">
            <ImageComponent imageUrl={img} imageAlt={imageAlt} width="100%" priority={true} rounded="noround" cssStyle="object-cover h-full w-auto" />
          </div>
          <div className=" bg-blue-500">
            <ImageComponent imageUrl={img} imageAlt={imageAlt} width="100%" priority={true} rounded="noround" cssStyle="object-cover h-full w-auto" />
          </div>
          <div className=" bg-amber-500">
            <ImageComponent imageUrl={img} imageAlt={imageAlt} width="100%" priority={true} rounded="noround" cssStyle="object-cover h-full w-auto" />
          </div>
          <div className=" bg-pink-500">
            <ImageComponent imageUrl={img} imageAlt={imageAlt} width="100%" priority={true} rounded="noround" cssStyle="object-cover h-full w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
