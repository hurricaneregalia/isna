"use client";
import { useState, useEffect } from "react";
import { WiTime4 } from "react-icons/wi";

export default function CountdownMini({ targetDate, bonusPeriode }) {
  // Fungsi untuk mengkonversi targetDate ke waktu WIB
  const convertToWIB = (date) => {
    const utcDate = new Date(date);
    // Menambahkan 7 jam untuk mengkonversi UTC ke WIB
    utcDate.setHours(utcDate.getHours() - 7);
    return utcDate;
  };

  // Menghitung sisa waktu
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
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mt-10 text-center">
      <div className="flex justify-center">
        <div className=" inline-block text-white mx-auto bg-red-700 p-3 py-2 rounded-md">
          <span className=" flex items-center gap-4">
            <p className="flex flex-col">
              {timeLeft.days ? timeLeft.days : 0}
              <span className="text-xs">Hari</span>
            </p>
            <p className="flex flex-col">
              {timeLeft.hours ? timeLeft.hours : 0}
              <span className="text-xs">Jam</span>
            </p>
            <p className="flex flex-col">
              {timeLeft.minutes ? timeLeft.minutes : 0}
              <span className="text-xs">Menit</span>
            </p>
            <p className="flex flex-col">
              {timeLeft.seconds ? timeLeft.seconds : 0}
              <span className="text-xs">Detik</span>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
