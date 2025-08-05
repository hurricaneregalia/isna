import React from "react";

export default function BonusIcon({ icon }) {
  return (
    <div className="flex justify-center">
      <div className="relative flex justify-center items-center h-10 w-fit">
        <span className="absolute inline-flex animate-ping opacity-75 text-4xl mx-2">{icon}</span>
        <span className="relative text-4xl mx-2">{icon}</span>
      </div>
      <div className="relative flex justify-center items-center h-10 w-fit">
        <span className="absolute inline-flex animate-ping opacity-75 text-4xl mx-2">{icon}</span>
        <span className="relative text-4xl mx-2">{icon}</span>
      </div>
      <div className="relative flex justify-center items-center h-10 w-fit">
        <span className="absolute inline-flex animate-ping opacity-75 text-4xl mx-2">{icon}</span>
        <span className="relative text-4xl mx-2">{icon}</span>
      </div>
    </div>
  );
}
