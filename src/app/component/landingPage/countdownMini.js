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
        <p className=" inline-block text-red-50 mx-auto bg-red-500 px-2 rounded-full">
          <span className=" flex items-center ">
            <span>
              <WiTime4 />
            </span>
            <span>
              {" "}
              {timeLeft.days ? timeLeft.days : 0} Hari lagi : {timeLeft.hours ? timeLeft.hours : 0} : {timeLeft.minutes ? timeLeft.minutes : 0} :{" "}
              {timeLeft.seconds ? timeLeft.seconds : 0}
            </span>
          </span>
        </p>
      </div>
    </div>
  );
}
