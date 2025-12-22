import React from "react";

export default function ExalviaIconBox({ icon, className = "" }) {
  const content = React.isValidElement(icon) ? icon : icon ? React.createElement(icon) : null;
  return <div className={`w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg text-2xl ${className}`}>{content}</div>;
}
