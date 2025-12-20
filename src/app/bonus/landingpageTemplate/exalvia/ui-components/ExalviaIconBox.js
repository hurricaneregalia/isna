import React from "react";

export default function ExalviaIconBox({ icon: Icon, className = "" }) {
  return <div className={`w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg text-2xl ${className}`}>{Icon && <Icon />}</div>;
}
