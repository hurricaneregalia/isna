import Link from "next/link";
import React from "react";

export default function BtnLinkPrimary({ btnTxt, btnUrl, iconLeft, shadow, iconRight, animate, btnFull, btnStyle }) {
  const iconLeftFx = iconLeft ? iconLeft : "";
  const animateFx = animate ? "motion-preset-wobble" : "";
  const iconRightFx = iconRight ? <span className={animateFx}>{iconRight}</span> : "";
  const btnFullFx = btnFull ? "w-full" : "";
  const shadowFx = shadow ? shadow : "shadow-none";
  return (
    <Link href={btnUrl} className={`btn bg-amber-300 ${shadowFx} hover:bg-amber-500 border-0 text-slate-900 rounded-full ${btnFullFx} ${btnStyle}`}>
      {iconLeftFx}
      {btnTxt}
      {iconRightFx}
    </Link>
  );
}
