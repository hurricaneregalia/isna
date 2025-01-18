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
    <label className="swap swap-rotate">
      <input type="checkbox" className="theme-controller" id="theme-switch" onChange={toggleTheme} checked={theme === "dark"} />

      <LuSunMedium className="swap-on h-7 w-7" />
      <LuMoon className="swap-off h-7 w-7" />
    </label>
  );
}
