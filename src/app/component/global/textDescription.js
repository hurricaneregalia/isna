import React from "react";

export default function TextDescription({ title, description, iconTitle }) {
  const descriptionFx = description ? <p className="mt-6 text-lg opacity-75">{description}</p> : null;
  const iconTitleFX = iconTitle ? <span className=" text-4xl fa-beat-fade-zoom mx-2"> {iconTitle} </span> : null;
  return (
    <div className="">
      {iconTitleFX}
      {iconTitleFX}
      {iconTitleFX}
      <h2 className="mt-2 font-bold tracking-tight text-3xl">{title}</h2>
      {descriptionFx}
    </div>
  );
}
