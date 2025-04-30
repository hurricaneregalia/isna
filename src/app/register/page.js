"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
    name: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const res = await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      setError(data.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 to-base-300 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-extrabold text-center mb-6 text-primary">Create an Account</h2>

          {error && (
            <div className="alert alert-error mb-4">
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="alert alert-success mb-4">
              <span>{success}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="form-control w-full floating-label">
              <span className="label-text">First Name</span>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input input-bordered input-md w-full"
                value={form.firstName}
                onChange={handleChange}
              />
            </label>

            <label className="form-control w-full floating-label">
              <span className="label-text">Last Name</span>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input input-bordered input-md w-full"
                value={form.lastName}
                onChange={handleChange}
              />
            </label>

            <label className="form-control w-full floating-label">
              <span className="label-text">Username</span>
              <input
                type="text"
                name="userName"
                placeholder="Username"
                className="input input-bordered input-md w-full"
                value={form.userName}
                onChange={handleChange}
              />
            </label>

            <label className="form-control w-full floating-label">
              <span className="label-text">Full Name</span>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered input-md w-full"
                value={form.name}
                onChange={handleChange}
              />
            </label>

            <label className="form-control w-full floating-label">
              <span className="label-text">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered input-md w-full"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="form-control w-full floating-label">
              <span className="label-text">Password</span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered input-md w-full"
                value={form.password}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="btn btn-primary w-full mt-2">
              Register
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            <span className="text-gray-500">Sudah punya akun?</span>{" "}
            <a href="/login" className="link link-primary font-medium">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
