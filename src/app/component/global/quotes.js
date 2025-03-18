import React from "react";

export default function Quotes({ title, description, sanad }) {
  return (
    <div className="relative isolate">
      <h2 className="mt-2 font-bold tracking-tight text-3xl">{title}</h2>
      <div className="rounded-bl-3xl mt-6 text-lg border border-dashed p-5 ">
        <blockquote className="rounded-bl-3xl">{description}</blockquote>
        <p className=" font-bold mt-5 text-lg">{sanad}</p>
      </div>
    </div>
  );
}
