"use client";

import React, { useState, useEffect } from "react";

const KanzarCountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target to end of current day (Midnight)
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date();
      target.setHours(24, 0, 0, 0); // Midnight tonight

      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // If passed midnight, reset (looping logic for demo)
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, []);

  // Helper component for digit box
  const DigitBox = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-900 border border-warning/30 card flex items-center justify-center shadow-lg shadow-gold-500/10 mb-2">
        <span className="text-2xl md:text-4xl font-serif font-bold text-warning">{value.toString().padStart(2, "0")}</span>
      </div>
      <span className="text-xs text-slate-500 uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center justify-center">
      <DigitBox value={timeLeft.hours} label="Jam" />
      <span className="text-2xl md:text-4xl font-bold text-warning mb-6">:</span>
      <DigitBox value={timeLeft.minutes} label="Menit" />
      <span className="text-2xl md:text-4xl font-bold text-warning mb-6">:</span>
      <DigitBox value={timeLeft.seconds} label="Detik" />
    </div>
  );
};

export default KanzarCountDown;
