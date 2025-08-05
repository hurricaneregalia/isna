// components/Headline.js
import React from "react";

export default function Headline({ text }) {
  return <h2 className="text-3xl md:text-4xl font-bold text-primary">{text}</h2>;
}
