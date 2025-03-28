import React from "react";

export default function TextDesctiption({ title, description, iconTitle }) {
  const descriptionFx = description ? <p className="mt-6 text-lg">{description}</p> : null;
  const iconTitleFX = iconTitle ? <span className=" text-4xl fa-beat-fade-zoom mx-2"> {iconTitle} </span> : null;
  return (
    <div className="relative isolate">
      <h2 className="mt-2 font-bold tracking-tight text-3xl">
        {iconTitleFX}
        {title}
        {iconTitleFX}
      </h2>
      {descriptionFx}
    </div>
  );
}
