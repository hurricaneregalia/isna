// src/app/component/global/modal.js
"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Modal({ children, modalId, header, btnTxt, btnStyle, icon }) {
  const openModal = () => {
    document.getElementById(modalId).showModal();
  };

  return (
    <div>
      <button className={`btn ${btnStyle}`} onClick={openModal} aria-label="share-label">
        {btnTxt}
      </button>

      <dialog id={modalId} className="modal ">
        <div className="modal-box overflow-visible rounded-4xl rounded-tr-none text-center bg-secondary  relative">
          <div className="patternKalmaanaDark absolute inset-0 opacity-30"></div>
          <form method="dialog" className="relative top-0">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-error btn-outline absolute right-2 top-2">
              <FaTimes />
            </button>
          </form>
          <div className="relative">
            <div className="text-white my-8">
              <div id="shareIcon" className="mx-auto mb-4 text-7xl text-center rounded-full border-5 border-white w-30  aspect-square flex justify-center items-center">
                {icon}
              </div>
              <h3 className="font-bold text-3xl">{header}</h3>
            </div>
            <hr className="my-3 opacity-0" />
            <div className="p-8 rounded-3xl rounded-tr-none bg-base-100">{children}</div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
