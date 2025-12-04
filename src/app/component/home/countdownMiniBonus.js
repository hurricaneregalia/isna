// src/app/component/home/countdownMiniBonus.js
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function CountdownMiniBonus({ cssStyle }) {
  const [promo, setPromo] = useState(null);
  const [targetDate, setTargetDate] = useState(null);
  const [countdown, setCountdown] = useState({
    timeLeft: {},
    isFinished: false,
  });

  // Fetch promo data from API
  useEffect(() => {
    async function fetchPromo() {
      try {
        const res = await axios.get("/api/datajs/promo");
        setPromo(res.data);
        setTargetDate(res.data?.endDate);
      } catch (error) {
        console.error("Gagal fetch promo:", error.message);
      }
    }

    fetchPromo();
  }, []);

  // Countdown logic
  useEffect(() => {
    if (!targetDate) return;

    const convertToWIB = (date) => {
      const utcDate = new Date(date);
      utcDate.setHours(utcDate.getHours() - 7);
      return utcDate;
    };

    const calculateTimeLeft = () => {
      const target = convertToWIB(targetDate);
      const now = new Date();
      const difference = target - now;
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      }

      return {
        timeLeft,
        isFinished: difference <= 0,
      };
    };

    const timer = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!promo) return null;

  const { timeLeft, isFinished } = countdown;

  return (
    <>
      {!isFinished && (
        <div className={`text-center space-y-5 ${cssStyle || "mt-10"}`}>        
          {/* Countdown display */}
          <div className="flex justify-center">
            <div className="inline-block text-white mx-auto p-3 py-2 rounded-md">
              <span className="flex items-center justify-center gap-3">
                {["days", "hours", "minutes", "seconds"].map((key) => (
                  <p key={key} className="flex flex-col bg-red-700 rounded-sm h-15 w-10 items-center justify-center">
                    {timeLeft[key] ?? 0}
                    <span className="text-xs opacity-75">
                      {key === "days" ? "Hari" : key === "hours" ? "Jam" : key === "minutes" ? "Menit" : "Detik"}
                    </span>
                  </p>
                ))}
              </span>
            </div>
          </div>
            <Link
            href="/bonus"
            className="animate-bounce btn btn-lg border-0 items-center rounded-full bg-amber-300 shadow-none hover:bg-amber-500 text-slate-900 capitalize mb-4"
          >
            Claim Bonus
          </Link>

        </div>
      )}
    </>
  );
}
