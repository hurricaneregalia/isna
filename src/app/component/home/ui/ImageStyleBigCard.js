import Image from "next/image";
import React from "react";

export default function ImageStyleBigCard({ src, alt, css }) {
  return <Image src={src} alt={alt} width={500} height={300} className={` ${css ? css : ""}`} />;
}
