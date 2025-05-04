"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

export default function BackButton({ className = "" }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className={`px-5 text-sm font-semibold shadow-none btn bg-amber-300 hover:bg-amber-500 border-0 text-slate-900 rounded-full ${className}`}
    >
      <FaArrowLeft /> Back
    </button>
  );
}
