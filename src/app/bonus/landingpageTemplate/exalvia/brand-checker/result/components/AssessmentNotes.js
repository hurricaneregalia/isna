import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { HiOutlineExclamation } from "react-icons/hi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { getAllFlags } from "./flagUtils";

export default function AssessmentNotes({ result, isOpen, onToggle, title }) {
  const allFlags = getAllFlags(result);

  return (
    <div className={`collapse join-item ${isOpen ? "collapse-open" : ""}`}>
      <input type="checkbox" name="my-accordion" checked={isOpen} onChange={onToggle} />
      <div className="collapse-title font-semibold flex items-center justify-between">
        <span>{title}</span>
        <FaChevronDown className={`text-xl transition-all duration-500 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </div>
      <div className="collapse-content text-sm">
        <div>
          {result.normalizedScore === 100 ? (
            <div className="flex items-start p-4 bg-base-100 rounded-bl-2xl">
              <HiOutlineTrophy className="text-4xl mr-4 text-warning shrink-0" />
              <div>
                <p className="font-semibold text-success">Brand Sempurna!</p>
                <p className="text-sm opacity-80">Semua aspek brand berada di level tertinggi. Pertahankan konsistensi ini!</p>
              </div>
            </div>
          ) : allFlags.length > 0 ? (
            <div>
              <div className="space-y-2">
                {allFlags.map((flag, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-yellow-50 rounded-bl-2xl">
                    <HiOutlineExclamation className="text-xl text-warning shrink-0" />
                    <p className="text-sm text-gray-700">{flag}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center p-4 bg-green-50 rounded-bl-2xl">
              <div className="text-2xl mr-3">✅</div>
              <p className="text-sm text-green-700">Tidak ada catatan khusus. Brand Anda sudah baik!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
