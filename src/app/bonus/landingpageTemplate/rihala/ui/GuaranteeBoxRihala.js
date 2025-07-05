import React from "react";
import { HiShieldCheck } from "react-icons/hi";

export default function GuaranteeBoxRihala({ title, description, aos }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  return (
    <div className="flex items-start space-x-4 bg-base-200 p-5 rounded-lg shadow-md" {...aosFX}>
      <HiShieldCheck className="text-primary w-8 h-8 flex-shrink-0" />
      <div>
        <h5 className="text-lg font-semibold text-base-content mb-1">{title}</h5>
        <p className="text-base text-base-content/90">{description}</p>
      </div>
    </div>
  );
}
