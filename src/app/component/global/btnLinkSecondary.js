import Link from "next/link";
import React from "react";

export default function BtnLinkSecondary({ btnTxt, btnUrl, iconLeft, iconRight, animate, btnFull, btnStyle }) {
  const iconLeftFx = iconLeft ? iconLeft : "";
  const animateFx = animate ? "motion-preset-wobble" : "";
  const iconRightFx = iconRight ? <span className={animateFx}>{iconRight}</span> : "";
  const btnFullFx = btnFull ? "w-full" : "";
  return (
    <Link
      href={btnUrl}
      className={`btn border-amber-300 text-amber-300 transition duration-300 shadow-none bg-transparent hover:bg-green-500 hover:border-green-500 hover:text-green-50 rounded-full ${btnFullFx} ${btnStyle}`}
    >
      {iconLeftFx}
      {btnTxt}
      {iconRightFx}
    </Link>
  );
}
