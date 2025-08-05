import React from "react";

export default function IdSection({ secId }) {
  return <p className="font-semibold capitalize opacity-50">{secId.replace(/-/g, " ")}</p>;
}
