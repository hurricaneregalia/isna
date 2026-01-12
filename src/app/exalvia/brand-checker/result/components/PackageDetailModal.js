import React from "react";
import { FaStar, FaRegStar, FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { BsFillPatchCheckFill, BsHourglassSplit } from "react-icons/bs";
import ExalviaButton from "../../../ui-components/ExalviaButton";
import ExalviaLinkButton from "../../../ui-components/ExalviaLinkButton";

export default function PackageDetailModal({ selectedPackage, formatCurrency, onClose }) {
  return (
    <dialog id="package_modal" className="modal rounded-none">
      {selectedPackage && (
        <div className="modal-box max-w-2xl p-0 rounded-4xl rounded-tr-none">
          <div className=" grid grid-cols-1 gap-8">
            <div className="sm:p-8 p-5 bg-secondary py-8 ">
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, index) => (index < selectedPackage.rating ? <FaStar key={index} className="text-warning" /> : <FaRegStar key={index} className="text-warning" />))}
              </div>
              <h3 className="font-bold text-4xl text-secondary-content mt-2">{selectedPackage.name}</h3>
              <h3 className="font-bold text-4xl text-secondary-content capitalize">service pack</h3>
              <div className="flex flex-col gap-2 text-secondary-content/80 sm:my-8 my-5">
                <p className="flex gap-2 items-start shrink">
                  <BsFillPatchCheckFill className="text-lg shrink-0 text-success mt-0.5" /> Cocok untuk {selectedPackage.description}
                </p>
                <p className="flex gap-2 items-start shrink">
                  <BsFillPatchCheckFill className="text-lg shrink-0 text-success mt-0.5" /> Output {selectedPackage.output}
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
                      {item.status ? <FaCircleCheck className="text-success" /> : <FaCircleXmark className="text-error" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sm:px-8 px-5">
              <div className="text-sm text-base-content/60 text-left flex gap-2 items-center mb-2">
                <BsHourglassSplit /> Pengerjaan: {selectedPackage.turnaround}
              </div>
              <div className="w-full">
                <div className="h-2 w-full rounded-full bg-base-300 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary/50 transition-all duration-500"
                    style={{
                      width: selectedPackage.turnaround.includes("6-7") ? "100%" : selectedPackage.turnaround.includes("2-4") ? "70%" : selectedPackage.turnaround.includes("1-2") ? "40%" : "20%",
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 my-8">
                <div className="join mx-auto w-full items-center justify-center">
                  <ExalviaButton text="Tutup" onClick={onClose} className="join-item w-6/12 btn-soft" variant=" " />
                  <ExalviaLinkButton text="Pilih Paket" href="#contact" className="join-item w-6/12 btn-warning" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
}
