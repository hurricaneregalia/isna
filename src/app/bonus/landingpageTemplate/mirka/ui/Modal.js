"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";

export default function Modal({ title, btnCss, waNumber }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
        setErrors({ name: false, email: false, phone: false });
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // mulai loading

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const course = "Kursus Fotografi Online";

    const newErrors = {
      name: !name,
      email: !email || !/\S+@\S+\.\S+/.test(email),
      phone: !/^628[0-9]{8,}$/.test(phone),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) {
      setIsLoading(false); // stop loading jika ada error
      return;
    }

    const message = `Halo! Saya ingin mendaftar *${course}*.\n\nNama: ${name}\nEmail: ${email}\nWhatsApp: ${phone}`;
    const encodedMessage = encodeURIComponent(message);

    // Redirect (tanpa tab baru)
    window.location.href = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    // Optional: jika kamu ingin modal tertutup lebih cepat
    setIsOpen(false);
  };

  const inputBaseClass = "input input-bordered w-full";
  const getInputClass = (hasError) => (hasError ? `${inputBaseClass} border-red-500` : inputBaseClass);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-70 text-white">
          <div className="flex flex-col items-center space-y-4">
            <FaSpinner className="text-5xl animate-spin text-warning" />
            <div className="text-center animate-pulse text-lg font-medium">Pendaftaran sedang diproses...</div>
          </div>
        </div>
      )}
      <button className={`btn ${btnCss} font-semibold tracking-wide mt-auto`} onClick={() => setIsOpen(true)}>
        {title}
      </button>

      {isOpen && (
        <div className="text-black fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity animate-fadeIn">
          <div ref={modalRef} className="bg-white dark:bg-base-100 p-6 rounded-lg shadow-xl w-full max-w-lg mx-3 relative animate-slideUp">
            <button className="absolute top-4 right-4 text-xl btn btn-square rounded-full font-bold text-gray-500 hover:text-red-500" onClick={() => setIsOpen(false)} aria-label="Close modal">
              <FaTimes />
            </button>

            <h2 className="text-2xl font-bold mb-4">{title}</h2>

            <form onSubmit={handleSubmit}>
              <div className=" my-10 space-y-4">
                <div>
                  <label className="label">Nama Lengkap</label>
                  <input name="name" type="text" className={getInputClass(errors.name)} placeholder="Nama Anda" required />
                  {errors.name && <p className="text-red-500 text-sm mt-1">Nama wajib diisi.</p>}
                </div>

                <div>
                  <label className="label">Email</label>
                  <input name="email" type="email" className={getInputClass(errors.email)} placeholder="email@domain.com" required />
                  {errors.email && <p className="text-red-500 text-sm mt-1">Email tidak valid.</p>}
                </div>

                <div>
                  <label className="label">
                    No WhatsApp <strong>(628)</strong>
                  </label>
                  <input name="phone" type="tel" className={getInputClass(errors.phone)} placeholder="628xxxxxxxxxx" required />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">Nomor harus diawali dengan 628 dan minimal 9 digit.</p>}
                </div>
              </div>

              <div className=" text-center">
                <button type="submit" className="btn btn-warning w-full">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Animasi */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
