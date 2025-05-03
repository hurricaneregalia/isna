import React from "react";

export default function LogoMeterCard({ children, mb }) {
  const mbFx = mb ? mb : "mb-5";
  return <div className={`bg-base-100 rounded-bl-3xl p-6 shadow-lg w-full max-w-4xl ${mbFx}`}>{children}</div>;
}
