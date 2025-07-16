import React from "react";

export default function TestimonialCard({ name, role, testimony }) {
  return (
    <div className="bg-base-100 border border-base-300 rounded-lg p-6 shadow-md">
      <p className="text-base italic text-base-content mb-4">“{testimony}”</p>
      <div className="text-sm text-base-content font-semibold">
        {name} <span className="text-base-content/70 font-normal">– {role}</span>
      </div>
    </div>
  );
}
