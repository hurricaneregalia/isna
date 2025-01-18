import React from "react";

export default function NavModal({ btnText, btnStyle, modalId, modalTitle, modalBody, modalFooter, children }) {
  return (
    <div>
      <button className={btnStyle} onClick={() => document.getElementById("navModal").showModal()}>
        {btnText}
      </button>

      <dialog id={modalId} className="modal">
        <div className="modal-box bg-base-100 text-base-content">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">{modalTitle}</h3>
          <div className="py-4">{children}</div>

          {/* Footer Modal dengan Tombol */}
          <div className="modal-action">{modalFooter}</div>
        </div>

        {/* Backdrop dengan form untuk menutup modal saat klik di luar */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
