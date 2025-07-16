import React from "react";

export default function OverlayCard({ title, description }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer bg-base-200 p-6">
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-white">{description}</p>
      </div>
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-base-content">{title}</h3>
        <p className="text-sm text-base-content/70">{description}</p>
      </div>
    </div>
  );
}
