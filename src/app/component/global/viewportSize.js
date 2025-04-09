"use client";
import React, { useState, useEffect } from "react";

const ViewportSize = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Fungsi untuk memperbarui ukuran viewport
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    // Menambahkan event listener untuk mendeteksi perubahan ukuran jendela
    window.addEventListener("resize", handleResize);

    // Membersihkan event listener saat komponen dibersihkan
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Ukuran Viewport</h1>
      <p>Luas Viewport:</p>
      <p>Lebar: {viewportWidth}px</p>
      <p>Tinggi: {viewportHeight}px</p>
    </div>
  );
};

export default ViewportSize;
