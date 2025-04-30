"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { signIn } from "next-auth/react"; // PENTING: Tambahkan ini

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [siteData, setSiteData] = useState(null); // Menyimpan data site identity
  const [loading, setLoading] = useState(false); // Optional: buat UX lebih bagus
  const [errorMessage, setErrorMessage] = useState("");

  // Ambil data site identity saat komponen mount
  useEffect(() => {
    const fetchSiteIdentity = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/siteidentity`);
        setSiteData(res.data);
      } catch (error) {
        console.error("Gagal mengambil data site identity:", error);
      }
    };

    fetchSiteIdentity();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result.ok) {
        window.location.href = "/dashboard"; // Redirect setelah login berhasil
      } else {
        setErrorMessage("Email atau password salah.");
      }
    } catch (err) {
      console.error("Error saat login:", err);
      setErrorMessage("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <Image src="/images/landingPage/hero/bgHero2.webp" alt="login-bg" fill priority={true} sizes="100vw" className="object-cover z-0" />
      <div className="absolute inset-0 bg-slate-900/80"></div>
      <div className="relative flex items-center justify-center text-center min-h-screen">
        <div className="lg:w-5/12 sm:w-8/12 w-12/12 mx-auto flex justify-center px-4">
          <div className="w-full max-w-md p-8 space-y-6 bg-base-100 pt-20 mx-auto rounded-bl-3xl shadow-lg">
            <div className="headerLogin flex gap-2 justify-center items-center">
              {siteData?.logoUrl && <Image src={siteData.logoUrl} alt="logo" width={24} height={24} className="w-6 h-6" />}
              <h1 className="text-3xl font-bold text-center text-base-content">Login</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="py-10 space-y-5">
                <label className="form-control w-full floating-label">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="input input-lg input-bordered w-full peer"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <span className="label-text text-base-content">Email</span>
                </label>

                <label className="form-control w-full floating-label">
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    className="input input-lg input-bordered w-full peer"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <span className="label-text text-base-content">Password</span>
                </label>

                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
              </div>

              <button
                type="submit"
                className="btn btn-lg px-10 rounded-full capitalize bg-amber-300 hover:bg-amber-500 border-0 text-slate-900"
                disabled={loading}
              >
                {loading ? "Memproses..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
