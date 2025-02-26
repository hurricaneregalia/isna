"use client";
import React, { Children, useEffect, useRef, useState } from "react";

export default function ScrollAnimation({ children }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ketika elemen masuk viewport
            setIsVisible(true);
          } else {
            // Ketika elemen keluar viewport
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 } // Menggunakan threshold lebih kecil untuk deteksi lebih cepat
    );

    if (elementRef.current) {
      observer.observe(elementRef.current); // Mulai mengamati elemen
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // Hapus pengamatan saat komponen dibersihkan
      }
    };
  }, []);

  return (
    <div ref={elementRef} className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} transition-all duration-1000 ease-in-out transform`}>
      {children}
    </div>
  );
}
