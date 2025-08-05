import Image from "next/image";
import React from "react";

export default function ImageStyle({ src, alt, css, objcetPos, aos }) {
  const objectPositionFx = objcetPos ? objcetPos : "object-right";

  const dataAosAttr = aos ? {} : { "data-aos": "flip-left" };

  return <Image src={src} alt={alt} width={800} height={300} className={`object-contain w-full sm:${objectPositionFx} object-center ${css ? css : ""}`} {...dataAosAttr} />;
}
