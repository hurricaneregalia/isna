"use client";
import React from "react";

export default function Modal({ children, modalId, header, btnTxt, btnStyle, icon }) {
  const openModal = () => {
    document.getElementById(modalId).showModal();
  };

  return (
    <div>
      <button className={`btn ${btnStyle}`} onClick={openModal} name="shareBtn">
        {btnTxt}
      </button>

      <dialog id={modalId} className="modal ">
        <div className="modal-box overflow-visible rounded-none rounded-bl-3xl text-center patternKalmaanaLight">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div
            id="shareIcon"
            className="mx-auto my-15 text-7xl text-center rounded-full border-5 border-base-content text-base-content w-30 h-30 flex justify-center items-center"
          >
            {icon}
          </div>
          <h3 className="font-bold text-lg">{header}</h3>
          <hr className="my-3 opacity-0" />
          {children}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
