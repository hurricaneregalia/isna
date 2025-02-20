import React from "react";

export default function TextDesctiption({ title, description }) {
  const descriptionFx = description ? <p className="mt-6 ">{description}</p> : null;
  return (
    <div className="relative isolate">
      <h2 className="mt-2 text-5xl font-bold tracking-tight">{title}</h2>
      {descriptionFx}
    </div>
  );
}
