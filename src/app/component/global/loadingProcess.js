"use client";
import ExalviaDatabase from "@/app/exalvia/database/ExalviaDatabase";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCoins } from "react-icons/fa6";

export default function LoadingProcess() {
  const [theme, setTheme] = useState("exalvia");

  useEffect(() => {
    if (typeof window === "undefined") return; // ⛑ amanin agar hanya jalan di client

    const savedTheme = localStorage.getItem("theme") || "exalvia";
    setTheme(savedTheme);

    document.documentElement.setAttribute("data-theme", savedTheme);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          const newTheme = document.documentElement.getAttribute("data-theme");
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);
  const data = ExalviaDatabase;

  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-base-200 w-screen h-screen" data-theme={theme}>
      <div className="mb-4 text-center">
        <div className="relative w-52 h-10">
          <Image src={data?.navbar?.logoFullDark} alt="logo" priority fill className="object-contain object-left" />
        </div>
        <p className="m-0 text-base-content/70">{data?.siteidentity.tagline}</p>
      </div>
      <div className="flex space-x-2">
        <span className="loading loading-dots loading-lg text-slate-500"></span>
      </div>
    </div>
  );
}
