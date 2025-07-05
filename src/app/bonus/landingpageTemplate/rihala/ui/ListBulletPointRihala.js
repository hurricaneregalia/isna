import React from "react";
import { HiCheckCircle } from "react-icons/hi";

export default function ListBulletPointRihala({ points = [], aos }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  return (
    <ul className="space-y-3" {...aosFX}>
      {points.map((point, idx) => (
        <li key={idx} className="flex items-start space-x-2">
          <HiCheckCircle className="flex-shrink-0 text-primary mt-1" size={20} />
          <span className="text-base text-base-content">{point}</span>
        </li>
      ))}
    </ul>
  );
}
