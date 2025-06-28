"use client";

import React, { useState, useEffect } from "react";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "agua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
  "caramellatte",
  "abyss",
  "silk",
];

export default function ThemeChanger() {
  const [activeTheme, setActiveTheme] = useState("");

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setActiveTheme(currentTheme);
  }, []);

  const handleClick = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    setActiveTheme(theme);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto p-2">
      {themes.map((theme, index) => {
        const isActive = theme === activeTheme;
        return (
          <button
            key={theme}
            data-theme={theme}
            className={`btn btn-sm justify-start text-left w-full capitalize ${isActive ? "btn-primary " : "btn-outline"}`}
            onClick={() => handleClick(theme)}
          >
            {index + 1}. {theme}
          </button>
        );
      })}
    </div>
  );
}
