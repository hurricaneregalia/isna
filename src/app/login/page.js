"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/dashboard"); // Ganti ke halaman dashboard/home jika berhasil
    } else {
      setError(data.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 to-base-300 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-extrabold text-center mb-6 text-primary">Welcome Back</h2>

          {error && (
            <div className="alert alert-error mb-4">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Floating Label Email */}
            <label className="form-control w-full floating-label">
              <span className="label-text">Email</span>
              <input
                type="email"
                placeholder="mail@site.com"
                className="input input-bordered input-md w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            {/* Floating Label Password */}
            <label className="form-control w-full floating-label">
              <span className="label-text">Password</span>
              <input
                type="password"
                placeholder="******"
                className="input input-bordered input-md w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <div className="text-right text-xs mt-[-10px]">
              <a href="#" className="text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-2">
              Login
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            <span className="text-gray-500">Belum punya akun?</span>{" "}
            <a href="/register" className="link link-primary font-medium">
              Daftar sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
