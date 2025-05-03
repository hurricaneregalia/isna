import Link from "next/link";
import React from "react";

export default function BtnLinkPrimary({ btnTxt, btnUrl, iconLeft, shadow, iconRight, animate, btnFull, btnStyle, btnCustom }) {
  const iconLeftFx = iconLeft ? iconLeft : "";
  const animateFx = animate ? "motion-preset-wobble" : "";
  const iconRightFx = iconRight ? <span className={animateFx}>{iconRight}</span> : "";
  const btnFullFx = btnFull ? "w-full" : "";
  const shadowFx = shadow ? shadow : "shadow-none";
  const btnCustomFx = btnCustom ? btnCustom : "bg-amber-300 text-slate-900";
  return (
    <Link
      href={btnUrl}
      className={`btn ${btnCustomFx} ${shadowFx}  hover:bg-amber-500 border-0  transition duration-300 hover:text-slate-900 rounded-full ${btnFullFx} ${btnStyle}`}
    >
      {iconLeftFx}
      {btnTxt}
      {iconRightFx}
    </Link>
  );
}
