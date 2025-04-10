"use client";
import React, { useEffect, useState } from "react";
import { FaCoins } from "react-icons/fa6";

export default function Loading() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Mengambil tema dari localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    // Menerapkan tema ke document
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Mendengarkan perubahan tema
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

  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-base-200 w-screen h-screen" data-theme={theme}>
      <div className="mb-4 text-center">
        <p className="font-bold m-0 text-2xl flex flex-row items-center justify-center text-base-content">
          <span className="mr-1 text-slate-900">
            <FaCoins />
          </span>
          Isna Project
        </p>
        <p className="m-0 text-base-content/70">tagline lorem ipsum</p>
      </div>
      <div className="flex space-x-2">
        <span className="loading loading-dots loading-lg text-slate-500"></span>
      </div>
    </div>
  );
}
