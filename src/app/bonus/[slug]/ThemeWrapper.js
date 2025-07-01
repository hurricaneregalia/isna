"use client";

import { useEffect, useState } from "react";

export default function ThemeWrapper({ defaultTheme, children }) {
  const [theme, setTheme] = useState(defaultTheme || "light");

  useEffect(() => {
    // Ambil dari localStorage kalau ada
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Simpan perubahan tema ke localStorage & atur ke data-theme
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Fungsi yang bisa dipakai anak-anak komponen untuk ganti tema
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return <>{children}</>;
}
