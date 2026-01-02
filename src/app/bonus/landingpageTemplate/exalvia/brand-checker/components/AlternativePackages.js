import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { BsFillPatchCheckFill } from "react-icons/bs";
import ExalviaButton from "../../ui-components/ExalviaButton";
import { formatCurrency, getAlternativePackages } from "./ResultUtils";

export default function AlternativePackages({ result, accordionOpen, setAccordionOpen, setSelectedPackage }) {
  const alternativePackages = getAlternativePackages(result.normalizedScore);

  return (
    <div className="join join-vertical bg-base-200 rounded-bl-4xl overflow-hidden p-0 m-0">
      <div className={`collapse join-item sm:p-8 p-5 bg-base-200 rounded-bl-4xl ${accordionOpen === "packages" ? "collapse-open" : ""}`} style={{ "--tw-collapse-content-max-height": "none" }}>
        <input type="checkbox" name="my-accordion" checked={accordionOpen === "packages"} onChange={() => setAccordionOpen(accordionOpen === "packages" ? "" : "packages")} />
        <div className="collapse-title font-semibold flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <span>Paket Lainnya</span>
          </div>
          <FaChevronDown className={`text-xl transition-all duration-500 ease-in-out ${accordionOpen === "packages" ? "rotate-180" : "rotate-0"}`} />
        </div>
        <div className="collapse-content text-sm p-0">
          <div className="grid grid-cols-1 gap-2 mt-4 p-0">
            {alternativePackages.map((pkg, index) => (
              <div key={index} className="sm:p-8 p-5 bg-base-100 rounded-bl-4xl flex items-start w-full">
                <div className="w-6/12 grid grid-cols-1 gap-4">
                  <div>
                    <h6 className="font-semibold">{pkg.name}</h6>
                    <div className="flex flex-col gap-2 mt-2">
                      <p className="text-sm opacity-70 flex gap-2 items-start shrink">
                        <BsFillPatchCheckFill className="text-sm shrink-0" /> {"Cocok untuk "} {pkg.description}
                      </p>
                      <p className="text-sm opacity-70 flex gap-2 items-start shrink">
                        <BsFillPatchCheckFill className="text-sm shrink-0" /> {"Output "} {pkg.output}
                      </p>
                    </div>
                  </div>
                  <div className="text-warning font-bold">Rp {formatCurrency(pkg.price)}</div>
                </div>
                <div className="w-6/12 flex items-center justify-end">
                  <ExalviaButton
                    text="Detail"
                    onClick={() => {
                      setSelectedPackage(pkg);
                      document.getElementById("package_modal").showModal();
                    }}
                    variant="no"
                    className="w-fit btn-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
