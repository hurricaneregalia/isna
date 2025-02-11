import React from "react";

export default function LogoMeterCard({ children, mb }) {
  const mbFx = mb ? mb : "mb-5";
  return <div className={`bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl ${mbFx}`}>{children}</div>;
}
