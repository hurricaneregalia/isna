import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { BsFillPatchCheckFill } from "react-icons/bs";
import ExalviaButton from "../../ui-components/ExalviaButton";
import ExalviaLinkButton from "../../ui-components/ExalviaLinkButton";
import { getStarRating, formatCurrency, getTurnaroundProgress } from "./ResultUtils";

export default function PackageModal({ selectedPackage }) {
  if (!selectedPackage) return null;

  return (
    <dialog id="package_modal" className="modal rounded-none">
      <div className="modal-box max-w-2xl p-0 rounded-none rounded-bl-4xl">
        <div className="grid grid-cols-1 gap-8">
          <div className="sm:p-8 p-5 bg-base-200 py-8 rounded-bl-4xl">
            <div className="flex gap-1">{getStarRating(selectedPackage.rating * 20)} // Convert rating to score</div>
            <h3 className="font-bold text-xl">{selectedPackage.name}</h3>
            <div className="flex flex-col gap-3 sm:my-8 my-5">
              <p className="opacity-70 flex gap-2 items-start shrink">
                <BsFillPatchCheckFill className="text-lg shrink-0" /> {"Cocok untuk "} {selectedPackage.description}
              </p>
              <p className="opacity-70 flex gap-2 items-start shrink">
                <BsFillPatchCheckFill className="text-lg shrink-0" /> {"Output "} {selectedPackage.output}
              </p>
            </div>
            <div className="text-2xl font-bold text-warning mt-4">Rp {formatCurrency(selectedPackage.price)}</div>
          </div>

          <div className="sm:px-8 px-5">
            <div>
              <h4 className="font-semibold mb-3">Yang Anda Dapatkan:</h4>
              <div className="space-y-3">
                {selectedPackage.included?.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm flex gap-2">
                      0{index + 1}. {item.title}
                    </span>
                    {item.status ? <div className="text-success">✓</div> : <div className="text-error">✗</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sm:px-8 px-5">
            <div className="text-sm text-base-content/60 mb-2">Waktu pengerjaan: {selectedPackage.turnaround}</div>
            <div className="w-full">
              <div className="h-2 w-full rounded-full bg-base-300 overflow-hidden">
                <div className="h-full rounded-full bg-primary/50 transition-all duration-500" style={{ width: getTurnaroundProgress(selectedPackage.turnaround) }} />
              </div>
            </div>
            <div className="flex justify-end gap-3 my-8">
              <div className="join mx-auto w-full items-center justify-center">
                <ExalviaButton text="Tutup" onClick={() => document.getElementById("package_modal").close()} className="join-item w-6/12 btn-soft" />
                <ExalviaLinkButton text="Pilih Paket" href="#contact" className="join-item w-6/12 btn-warning" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
