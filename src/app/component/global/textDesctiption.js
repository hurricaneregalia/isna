import React from "react";

export default function TextDesctiption({ title, description }) {
  const descriptionFx = description ? <p className="mt-6 text-lg">{description}</p> : null;
  return (
    <div className="relative isolate">
      <h2 className="mt-2 font-bold tracking-tight text-3xl">{title}</h2>
      {descriptionFx}
    </div>
  );
}
