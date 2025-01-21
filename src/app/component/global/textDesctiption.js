import React from "react";

export default function TextDesctiption({ title, description }) {
  return (
    <div className="relative isolate text-base-content">
      <p className="mt-2 text-balance text-5xl font-bold tracking-tight text-base-content">{title}</p>
      <p className="mt-6 text-base-content">{description}</p>
    </div>
  );
}
