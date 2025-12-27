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
  "mirka",
  "mirka-dark",
  "halvora",
  "halvora-dark",
  "savheera",
  "exalvia",
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
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto">
      {themes.map((theme, index) => {
        const isActive = theme === activeTheme;
        return (
          <button
            key={theme}
            data-theme={theme}
            className={`btn btn-sm justify-start px-2 text-left w-full  capitalize ${isActive ? "btn-primary " : "btn-outline"}`}
            onClick={() => handleClick(theme)}
          >
            <div className="grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm bg-base-100">
              <div className="size-1 rounded-full bg-base-content"></div>
              <div className="size-1 rounded-full bg-primary"></div>
              <div className="size-1 rounded-full bg-secondary"></div>
              <div className="size-1 rounded-full bg-accent"></div>
            </div>
            {index + 1}. {theme.replace(/-/g, " ")}
          </button>
        );
      })}
    </div>
  );
}
