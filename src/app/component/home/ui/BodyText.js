import React from "react";

export default function Bodytext({ text, css }) {
  return <p className={`text-lg opacity-75 ${css}`}>{text}</p>;
}
