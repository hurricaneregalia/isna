"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Fungsi parsing longTime
const parseTime = (timeStr) => {
  if (!timeStr) return 5; // default 5 detik

  const match = timeStr.match(/^(\d+)(s|m|h)?$/i);
  if (!match) return 5;

  const value = parseInt(match[1], 10);
  const unit = match[2]?.toLowerCase() || "s";

  switch (unit) {
    case "h":
      return value * 3600;
    case "m":
      return value * 60;
    case "s":
    default:
      return value;
  }
};

const LinkAuto = ({ longTime, waNo, linkTarget }) => {
  const encodedMessage = encodeURIComponent(linkTarget);
  const whatsappUrl = `https://wa.me/${waNo}?text=${encodedMessage}`;
  const router = useRouter();
  const initialTime = parseTime(longTime);
  const [secondsLeft, setSecondsLeft] = useState(initialTime);

  useEffect(() => {
    if (!whatsappUrl) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push(whatsappUrl);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [whatsappUrl]);

  if (!waNo) return null;

  return <>{secondsLeft}</>;
};

export default LinkAuto;
