"use client";
import React, { useEffect, useState } from "react";

export default function CountdownSectionBaizan({ durationHours, textColor, bgColor }) {
  const bgColorFx = bgColor ? bgColor : "bg-white/50";
  const textColorFx = textColor ? textColor : "text-base-content";
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdownEnd = new Date().getTime() + durationHours * 60 * 60 * 1000;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = countdownEnd - now;

      if (difference <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [durationHours]);

  return (
    <div className={`flex justify-center items-center gap-4 mb-8 text-lg font-bold ${textColorFx} relative`}>
      <div className={`${bgColorFx} px-4 py-2 rounded-md`}>
        {String(timeLeft.hours).padStart(2, "0")}
        <span className="block text-xs font-normal">Jam</span>
      </div>
      <div className={`${bgColorFx} px-4 py-2 rounded-md`}>
        {String(timeLeft.minutes).padStart(2, "0")}
        <span className="block text-xs font-normal">Menit</span>
      </div>
      <div className={`${bgColorFx} px-4 py-2 rounded-md`}>
        {String(timeLeft.seconds).padStart(2, "0")}
        <span className="block text-xs font-normal">Detik</span>
      </div>
    </div>
  );
}
