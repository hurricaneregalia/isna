import React from "react";

export default function BodyText({ children }) {
  return (
    <span data-aos="fade-up">
      <p className="md:text-lg opacity-75 ">{children}</p>
    </span>
  );
}
