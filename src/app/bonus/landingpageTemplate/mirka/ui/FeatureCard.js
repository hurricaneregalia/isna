import React from "react";

export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-base-200 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-base-content mb-2">{title}</h3>
      <p className="text-base text-base-content">{description}</p>
    </div>
  );
}
