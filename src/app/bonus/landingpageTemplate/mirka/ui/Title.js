import React from "react";

export default function Title({ children }) {
  return (
    <h1 className="text-4xl md:text-5xl font-extrabold mb-4" data-aos="fade-up">
      {children}
    </h1>
  );
}
