import React from "react";
import { FaStar } from "react-icons/fa";

export default function ExalviaRating({ count = 5, className = "", spin = "" }) {
  return (
    <div className={`flex gap-1 text-warning ${className}`}>
      {[...Array(count)].map((_, i) => (
        <FaStar className={`${spin} [animation-duration:3s]`} key={i} />
      ))}
    </div>
  );
}
