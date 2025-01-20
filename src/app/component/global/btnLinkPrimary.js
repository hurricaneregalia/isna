import Link from "next/link";
import React from "react";

export default function BtnLinkPrimary({ btnTxt, href, iconLeft, iconRight, animate, btnFull }) {
  const iconLeftFx = iconLeft ? iconLeft : "";
  const animateFx = animate ? "motion-preset-wobble" : "";
  const iconRightFx = iconRight ? <span className={animateFx}>{iconRight}</span> : "";
  const btnFullFx = btnFull ? "w-full" : "";
  return (
    <Link href={href} className={`btn btn-primary rounded-full ${btnFullFx}`}>
      {iconLeftFx}
      {btnTxt}
      {iconRightFx}
    </Link>
  );
}
