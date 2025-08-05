// components/Subheadline.js
import React from "react";

export default function Subheadline2({ text, css }) {
  return <p className={`text-base-100/75 text-lg ${css}`}>{text}</p>;
}
