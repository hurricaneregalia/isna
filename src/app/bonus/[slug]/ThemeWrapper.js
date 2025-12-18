"use client";

import { useEffect, useState } from "react";

export default function ThemeWrapper({ defaultTheme, children }) {
  // Hanya gunakan state untuk re-render internal jika perlu, tapi fokus utamanya
  // adalah memanipulasi atribut data-theme tanpa menyentuh localStorage global.
  const [theme, setTheme] = useState(defaultTheme || "light");

  useEffect(() => {
    // 1. Simpan tema global sebelumnya (opsional, untuk safety)
    const previousTheme = document.documentElement.getAttribute("data-theme");

    // 2. Terapkan tema KHUSUS halaman ini
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }

    // 3. Cleanup: Saat keluar dari halaman ini, kembalikan ke tema awal (atau biarkan localStorage menghandle di halaman berikutnya)
    return () => {
      // Kita kembalikan ke tema yang tersimpan di localStorage (jika ada)
      // atau ke tema sebelumnya. Ini menjamin saat balik ke Home, tema user kembali.
      const userGlobalTheme = localStorage.getItem("theme") || previousTheme || "light";
      document.documentElement.setAttribute("data-theme", userGlobalTheme);
    };
  }, [theme]);

  // Fungsi yang bisa dipakai anak-anak komponen untuk ganti tema (hanya sementara di page ini)
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return <>{children}</>;
}
