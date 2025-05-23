import React from "react";

export default function TextDescription({ title, description, iconTitle }) {
  const descriptionFx = description ? <p className="mt-6 text-lg opacity-75">{description}</p> : null;
  const iconTitleFX = iconTitle ? (
    <div className="flex justify-center">
      <div className="relative flex justify-center items-center h-10 w-fit">
        <span className="absolute inline-flex animate-ping opacity-75 text-4xl mx-2">{iconTitle}</span>
        <span className="relative text-4xl mx-2">{iconTitle}</span>
      </div>
      <div className="relative flex justify-center items-center h-10 w-fit">
        <span className="absolute inline-flex animate-ping opacity-75 text-4xl mx-2">{iconTitle}</span>
        <span className="relative text-4xl mx-2">{iconTitle}</span>
      </div>
      <div className="relative flex justify-center items-center h-10 w-fit">
        <span className="absolute inline-flex animate-ping opacity-75 text-4xl mx-2">{iconTitle}</span>
        <span className="relative text-4xl mx-2">{iconTitle}</span>
      </div>
    </div>
  ) : null;
  return (
    <div className="">
      {iconTitleFX}
      <h2 className="mt-2 font-bold tracking-tight text-3xl">{title}</h2>
      {descriptionFx}
    </div>
  );
}
