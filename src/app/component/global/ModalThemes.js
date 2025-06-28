"use client";
import React, { useRef } from "react";

export default function ModalThemes({ title, children, btnTxt, id }) {
  const dialogRef = useRef(null);

  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  return (
    <>
      <button
        className="bg-transparent border border-base-100/40 btn flex justify-center items-center text-base-100 cursor-pointer w-10 h-10 p-0 text-xl"
        onClick={openModal}
      >
        {btnTxt}
      </button>

      <dialog id={id} ref={dialogRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="py-4">{children}</div>
          <div className="modal-action">
            {/* tombol close di dalam modal */}
            <button className="btn btn-error" onClick={() => dialogRef.current.close()}>
              Tutup
            </button>
          </div>
        </div>
        {/* backdrop, wajib berada di dalam <dialog> agar bisa close saat klik luar */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
