import React from "react";

export default function ExalviaHeadlineH1({ children, text, className = "" }) {
  return <h1 className={`uppercase leading-tight text-base-content ${className}`}>{children || text}</h1>;
}
