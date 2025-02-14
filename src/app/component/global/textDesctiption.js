import React from "react";

export default function TextDesctiption({ title, description }) {
  const descriptionFx = description ? <p className="mt-6 ">{description}</p> : null;
  return (
    <div className="relative isolate">
      <p className="mt-2 text-5xl font-bold tracking-tight">{title}</p>
      {descriptionFx}
    </div>
  );
}
