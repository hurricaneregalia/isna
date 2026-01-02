import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { HiOutlineTrophy } from "react-icons/hi2";
import { getCategoryProgressColor } from "./ResultUtils";

export default function ResultDetails({ result, accordionOpen, setAccordionOpen }) {
  return (
    <div className="join join-vertical bg-base-200 rounded-bl-4xl overflow-hidden p-0 m-0">
      <div className={`collapse join-item border-b bg-base-200 rounded-bl-4xl sm:p-8 p-5 ${accordionOpen === "details" ? "collapse-open" : ""}`} style={{ "--tw-collapse-content-max-height": "none" }}>
        <input type="checkbox" name="my-accordion" checked={accordionOpen === "details"} onChange={() => setAccordionOpen(accordionOpen === "details" ? "" : "details")} />
        <div className="collapse-title font-semibold flex items-center justify-between">
          <span>Detail penilaian</span>
          <FaChevronDown className={`text-xl transition-all duration-500 ease-in-out ${accordionOpen === "details" ? "rotate-180" : "rotate-0"}`} />
        </div>
        <div className="collapse-content text-sm">
          <div className="text-sm">
            <div className="space-y-3 grid sm:grid-cols-2 grid-cols-1 gap-4 gap-x-15">
              {Object.entries(result.categoryScores).map(([category, score]) => {
                const safeScore = Number.isFinite(Number(score)) ? Math.max(0, Math.min(100, Number(score))) : 0;
                return (
                  <div key={category}>
                    <span className="text-sm font-medium text-gray-700">{category}</span>
                    <div className="flex items-center justify-end">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div className={`h-2 rounded-full transition-all duration-500 ${getCategoryProgressColor(safeScore)}`} style={{ width: `${safeScore}%` }} />
                      </div>
                      <span className="text-sm font-medium text-gray-600 text-right">{safeScore}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className={`collapse join-item border-t bg-base-200 rounded-bl-4xl sm:p-8 p-5 ${accordionOpen === "notes" ? "collapse-open" : ""}`} style={{ "--tw-collapse-content-max-height": "none" }}>
        <input type="checkbox" name="my-accordion" checked={accordionOpen === "notes"} onChange={() => setAccordionOpen(accordionOpen === "notes" ? "" : "notes")} />
        <div className="collapse-title font-semibold flex items-center justify-between">
          <span>Catatan</span>
          <FaChevronDown className={`text-xl transition-all duration-500 ease-in-out ${accordionOpen === "notes" ? "rotate-180" : "rotate-0"}`} />
        </div>
        <div className="collapse-content text-sm">
          <div>
            {result.normalizedScore === 100 ? (
              <div className="flex items-center p-4 bg-base-100 rounded-bl-2xl">
                <HiOutlineTrophy className="text-4xl mr-4 text-warning" />
                <div>
                  <p className="font-semibold text-success">Brand Sempurna!</p>
                  <p className="text-sm opacity-80">Semua aspek brand berada di level tertinggi. Pertahankan konsistensi ini!</p>
                </div>
              </div>
            ) : result.redFlags.length > 0 ? (
              <div>
                <div className="space-y-2">
                  {result.redFlags.map((flag, index) => (
                    <div key={index} className="flex items-start p-3 bg-yellow-50 rounded-bl-2xl">
                      <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
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
    </div>
  );
}
