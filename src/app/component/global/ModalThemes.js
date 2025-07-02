"use client";
import React, { useRef } from "react";

export default function ModalThemes({ title, children, btnTxt, secId, borderColor = "border-base-content/40", textColor = "text-base-content" }) {
  const dialogRef = useRef(null);

  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  return (
    <>
      <button onClick={openModal} className={`bg-transparent border ${borderColor} btn flex justify-center shadow-none items-center ${textColor} cursor-pointer w-10 h-10 p-0 text-xl`}>
        {btnTxt}
      </button>

      <dialog id={secId} ref={dialogRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="py-4">{children}</div>
          <div className="modal-action">
            <button className="btn btn-error" onClick={() => dialogRef.current.close()}>
              Tutup
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
