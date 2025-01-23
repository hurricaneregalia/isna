import React from "react";

export default function TextDesctiption({ title, description }) {
  return (
    <div className="relative isolate">
      <p className="mt-2 text-balance text-5xl font-bold tracking-tight">{title}</p>
      <p className="mt-6 ">{description}</p>
    </div>
  );
}
