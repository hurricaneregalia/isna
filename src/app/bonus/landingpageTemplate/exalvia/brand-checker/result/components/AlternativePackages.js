import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { BsFillPatchCheckFill } from "react-icons/bs";
import ExalviaButton from "../../../ui-components/ExalviaButton";

export default function AlternativePackages({ packages, isOpen, onToggle, formatCurrency, onDetailClick }) {
  return (
    <div className="join join-vertical border-4 border-primary rounded-bl-4xl overflow-hidden p-0 m-0">
      <div className={`collapse join-item rounded-bl-4xl ${isOpen ? "collapse-open" : ""}`} style={{ "--tw-collapse-content-max-height": "none" }}>
        <input type="checkbox" name="my-accordion" checked={isOpen} onChange={onToggle} />
        <div className="collapse-title font-semibold flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <span>Paket Lainnya</span>
          </div>
          <FaChevronDown className={`text-xl transition-all duration-500 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`} />
        </div>
        <div className="collapse-content text-sm p-0">
          <div className="grid grid-cols-1 gap-2 p-4 pt-0">
            {packages.map((pkg, index) => (
              <div key={index} className="sm:p-8 p-5  bg-base-200  rounded-bl-4xl flex sm:flex-row flex-col items-start w-full">
                <div className="sm:w-6/12 w-full grid grid-cols-1 gap-4">
                  <div>
                    <h6 className="font-semibold">{pkg.name}</h6>
                    <div className="flex flex-col gap-2 mt-2">
                      <p className="text-sm opacity-70 flex gap-2 items-start shrink">
                        <BsFillPatchCheckFill className="text-sm shrink-0" /> Cocok untuk {pkg.description}
                      </p>
                      <p className="text-sm opacity-70 flex gap-2 items-start shrink">
                        <BsFillPatchCheckFill className="text-sm shrink-0" /> Output {pkg.output}
                      </p>
                    </div>
                  </div>
                  <div className="text-warning font-bold">Rp {formatCurrency(pkg.price)}</div>
                </div>
                <div className="sm:w-6/12 w-full flex items-center justify-end">
                  <ExalviaButton text="Detail" onClick={() => onDetailClick(pkg)} variant="no" className="w-fit btn-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
