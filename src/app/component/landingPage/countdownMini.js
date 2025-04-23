"use client";
import { useState, useEffect } from "react";

export default function CountdownMini({ targetDate, bonusPeriode }) {
  const convertToWIB = (date) => {
    const utcDate = new Date(date);
    utcDate.setHours(utcDate.getHours() - 7);
    return utcDate;
  };

  const calculateTimeLeft = () => {
    const targetDateWIB = convertToWIB(targetDate);
    const difference = targetDateWIB - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return { timeLeft, isFinished: difference <= 0 };
  };

  const [{ timeLeft, isFinished }, setCountdown] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mt-10 text-center">
      <div className="flex justify-center">
        <div className="inline-block text-white mx-auto p-3 py-2 rounded-md">
          <span className=" flex items-center gap-3">
            <p className="flex flex-col  bg-red-700  rounded-sm h-15 w-10 items-center justify-center">
              {timeLeft.days ? timeLeft.days : 0}
              <span className="text-xs opacity-75">Hari</span>
            </p>
            <p className="flex flex-col  bg-red-700  rounded-sm h-15 w-10 items-center justify-center">
              {timeLeft.hours ? timeLeft.hours : 0}
              <span className="text-xs opacity-75">Jam</span>
            </p>
            <p className="flex flex-col  bg-red-700  rounded-sm h-15 w-10 items-center justify-center">
              {timeLeft.minutes ? timeLeft.minutes : 0}
              <span className="text-xs opacity-75">Menit</span>
            </p>
            <p className="flex flex-col  bg-red-700  rounded-sm h-15 w-10 items-center justify-center">
              {timeLeft.seconds ? timeLeft.seconds : 0}
              <span className="text-xs opacity-75">Detik</span>
            </p>
          </span>
          {isFinished ? <p className="mt-4 text-red-700 bg-red-200 p-1 rounded-sm">Periode promo sudah berakhir</p> : null}
        </div>
      </div>
    </div>
  );
}
