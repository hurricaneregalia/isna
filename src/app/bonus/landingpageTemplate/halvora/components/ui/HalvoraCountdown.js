"use client";
import React, { useState, useEffect } from "react";

export default function HalvoraCountdown({ targetDate, className = "" }) {
 const calculateTimeLeft = () => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
   timeLeft = {
    hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
    jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
    menit: Math.floor((difference / 1000 / 60) % 60),
    detik: Math.floor((difference / 1000) % 60),
   };
  } else {
   timeLeft = { hari: 0, jam: 0, menit: 0, detik: 0 };
  }
  return timeLeft;
 };

 const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
 const [hasMounted, setHasMounted] = useState(false);

 useEffect(() => {
  setHasMounted(true);
  const timer = setTimeout(() => {
   setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearTimeout(timer);
 });

  if (!hasMounted) return null;

  return (
    <div className={`grid grid-cols-4 gap-2 md:flex md:gap-4 justify-center text-center ${className}`}>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content w-full md:w-auto min-w-[50px] md:min-w-[70px] items-center justify-center">
        <span className="countdown font-mono text-xl md:text-4xl">
          <span style={{ "--value": timeLeft.hari || 0 }}></span>
        </span>
        <span className="text-[10px] md:text-xs">Hari</span>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content w-full md:w-auto min-w-[50px] md:min-w-[70px] items-center justify-center">
        <span className="countdown font-mono text-xl md:text-4xl">
          <span style={{ "--value": timeLeft.jam || 0 }}></span>
        </span>
        <span className="text-[10px] md:text-xs">Jam</span>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content w-full md:w-auto min-w-[50px] md:min-w-[70px] items-center justify-center">
        <span className="countdown font-mono text-xl md:text-4xl">
          <span style={{ "--value": timeLeft.menit || 0 }}></span>
        </span>
        <span className="text-[10px] md:text-xs">Menit</span>
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content w-full md:w-auto min-w-[50px] md:min-w-[70px] items-center justify-center">
        <span className="countdown font-mono text-xl md:text-4xl">
          <span style={{ "--value": timeLeft.detik || 0 }}></span>
        </span>
        <span className="text-[10px] md:text-xs">Detik</span>
      </div>
    </div>
  );
}
