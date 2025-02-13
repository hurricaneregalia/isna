import Link from "next/link";
import React from "react";

export default function BtnLinkPrimary({ btnTxt, btnUrl, iconLeft, iconRight, animate, btnFull, btnStyle }) {
  const iconLeftFx = iconLeft ? iconLeft : "";
  const animateFx = animate ? "motion-preset-wobble" : "";
  const iconRightFx = iconRight ? <span className={animateFx}>{iconRight}</span> : "";
  const btnFullFx = btnFull ? "w-full" : "";
  return (
    <Link href={btnUrl} className={`btn btn-primary rounded-full ${btnFullFx} ${btnStyle}`}>
      {iconLeftFx}
      {btnTxt}
      {iconRightFx}
    </Link>
  );
}
