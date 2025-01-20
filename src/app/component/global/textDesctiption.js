import React from "react";

export default function TextDesctiption({ title, description, id }) {
  return (
    <div className="relative isolate text-base-content mt-5 mb-20 text-center">
      <h3 className="text-base/7 font-semibold text-primary capitalize">{id}</h3>
      <p className="mt-2 text-balance text-5xl font-bold tracking-tight text-base-content">{title}</p>
      <p className="mx-auto mt-6 max-w-2xl text-center text-base-content">{description}</p>
    </div>
  );
}
