"use client";

import React, { useEffect, useState } from "react";

const initialCountdown = { days: "00", hours: "00", minutes: "00", seconds: "00" };

export default function ExalviaCountDown({ target }) {
  const [timer, setTimer] = useState(initialCountdown);

  useEffect(() => {
    if (!target) return;
    const targetMs = new Date(target).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = targetMs - now;
      if (diff <= 0) {
        setTimer(initialCountdown);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimer({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="grid grid-cols-4 sm:gap-5 gap-1">
      {[
        { key: "days", label: "Hari" },
        { key: "hours", label: "Jam" },
        { key: "minutes", label: "Menit" },
        { key: "seconds", label: "Detik" },
      ].map(({ key, label }) => (
        <div key={key} className="bg-base-100/10 rounded-lg py-2 w-full text-center border border-white/10">
          <div className="text-2xl md:text-3xl font-bold text-warning">{timer[key]}</div>
          <div className="text-xs uppercase tracking-wide text-white/70">{label}</div>
        </div>
      ))}
    </div>
  );
}
