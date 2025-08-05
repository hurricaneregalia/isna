// components/Wrapper.js
import React from "react";

export default function Wrapper({ children }) {
  return <section className="px-6 md:px-20 py-16 bg-base-100 space-y-16">{children}</section>;
}
