import React from "react";
import ExalviaBadge from "./ExalviaBadge";
import ExalviaHeadline from "./ExalviaHeadline";
import ExalviaSubHeadline from "./ExalviaSubHeadline";

export default function ExalviaSectionHeader({ badge, title, subtitle, align = "left", className = "" }) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col space-y-2 ${alignClass} ${className}`}>
      {badge && <ExalviaBadge>{badge}</ExalviaBadge>}
      <ExalviaHeadline>{title}</ExalviaHeadline>
      {subtitle && <ExalviaSubHeadline>{subtitle}</ExalviaSubHeadline>}
    </div>
  );
}
