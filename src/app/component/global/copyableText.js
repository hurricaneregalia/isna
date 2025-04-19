"use client";
import { useState } from "react";
import { LuCopy } from "react-icons/lu";

export default function CopyableText({ orderId, cssStyle }) {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(orderId);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Toast hilang otomatis
    } catch (err) {
      console.error("Copy gagal:", err);
    }
  };

  return (
    <div className="space-y-2">
      <div className="tooltip tooltip-bottom cursor-pointer w-fit" data-tip="Klik untuk menyalin" onClick={handleCopy}>
        <p className="text-xs">
          <span className={`p-2 py-1 rounded-sm flex gap-1 ${cssStyle}`}>
            {orderId} <LuCopy />
          </span>
        </p>
      </div>

      {showToast && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success">
            <span>Order ID berhasil disalin!</span>
          </div>
        </div>
      )}
    </div>
  );
}
