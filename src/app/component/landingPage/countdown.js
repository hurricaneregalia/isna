"use client";
import { useState, useEffect } from "react";

const Countdown = ({ targetDate, bonusPeriode }) => {
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
    <div className="">
      <div className="text-center">
        <div className="text-2xl font-bold py-8">
          {timeLeft.seconds ? (
            <>
              Bonus berlaku sampai{" "}
              {new Date(bonusPeriode).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
              <hr className=" opacity-0" />
              Berakhir dalam
            </>
          ) : (
            "Periode promo sudah habis"
          )}
        </div>
        <div className="grid grid-cols-4 mx-auto gap-4 w-full">
          <div className="bg-base-100 w-full py-4 rounded-bl-3xl" data-aos="flip-left">
            <p className=" text-3xl font-bold text-primary">{timeLeft.days ? timeLeft.days : 0}</p>
            <p>Hari</p>
          </div>
          <div className="bg-base-100 w-full py-4 rounded-bl-3xl" data-aos="flip-left">
            <p className=" text-3xl font-bold text-primary">{timeLeft.hours ? timeLeft.hours : 0}</p>
            <p>Jam</p>
          </div>
          <div className="bg-base-100 w-full py-4 rounded-bl-3xl" data-aos="flip-left">
            <p className=" text-3xl font-bold text-primary">{timeLeft.minutes ? timeLeft.minutes : 0}</p>
            <p>Menit</p>
          </div>
          <div className="bg-base-100 w-full py-4 rounded-bl-3xl" data-aos="flip-left">
            <p className=" text-3xl font-bold text-primary">{timeLeft.seconds ? timeLeft.seconds : 0}</p>
            <p>Detik</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
