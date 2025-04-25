"use client";
import { useState } from "react";
import { LuCopy } from "react-icons/lu";

export default function CopyLink({ link, cssStyle, copyLinkTxt }) {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Toast hilang otomatis
    } catch (err) {
      console.error("Copy gagal:", err);
    }
  };
  const textFx = copyLinkTxt ? copyLinkTxt : link;

  return (
    <div className="space-y-2">
      <div className="tooltip tooltip-bottom cursor-pointer w-full" data-tip="Klik untuk menyalin" onClick={handleCopy}>
        <p className="text-md">
          <span className={cssStyle}>
            {textFx} <LuCopy />
          </span>
        </p>
      </div>

      {showToast && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success">
            <span>Link berhasil disalin!</span>
          </div>
        </div>
      )}
    </div>
  );
}
