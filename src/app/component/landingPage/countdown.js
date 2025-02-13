"use client";
import { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
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
    <div className="">
      <div className="text-center">
        <div className="text-2xl font-bold py-8">
          <p>Bonus berakhir dalam</p>
        </div>
        <div className="grid grid-cols-4 mx-auto gap-4 w-full">
          <div className="bg-base-100 w-full py-4 rounded-bl-3xl">
            <p className=" text-3xl font-bold">{timeLeft.days}</p>
            <p>Hari</p>
          </div>
          <div className="bg-base-100 w-full py-4 rounded-bl-3xl">
            <p className=" text-3xl font-bold">{timeLeft.hours}</p>
            <p>Jam</p>
          </div>
          <div className="bg-base-100 w-full py-4 rounded-bl-3xl">
            <p className=" text-3xl font-bold">{timeLeft.minutes}</p>
            <p>Menit</p>
          </div>
          <div className="bg-base-100 w-full py-4 rounded-bl-3xl">
            <p className=" text-3xl font-bold">{timeLeft.seconds}</p>
            <p>Detik</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
