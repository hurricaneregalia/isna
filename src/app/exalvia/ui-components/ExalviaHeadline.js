import React from "react";

export default function ExalviaHeadline({ children, text, className = "" }) {
  return <h2 className={`sm:text-5xl leading-tight ${className}`}>{children || text}</h2>;
}
