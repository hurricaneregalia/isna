"use client";
import React, { useEffect, useState } from "react";
import { LuMoon, LuSunMedium } from "react-icons/lu";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <label className="swap swap-rotate" htmlFor="theme-switch">
      {/* Hidden but accessible label */}
      <span className="sr-only">Toggle theme</span>

      <input type="checkbox" id="theme-switch" className="theme-controller" checked={theme === "dark"} onChange={toggleTheme} aria-label="Toggle between light and dark theme" />

      {/* Sun icon */}
      <LuSunMedium className="swap-on h-7 w-7 text-base-content" />

      {/* Moon icon */}
      <LuMoon className="swap-off h-7 w-7 text-base-content" />
    </label>
  );
}
