import React from "react";
import { FaChevronDown } from "react-icons/fa6";

export default function AssessmentDetails({ result, isOpen, onToggle, title }) {
  return (
    <div className={`collapse join-item border-b bg-base-200 rounded-bl-4xl sm:p-8 p-5 ${isOpen ? "collapse-open" : ""}`} style={{ "--tw-collapse-content-max-height": "none" }}>
      <input type="checkbox" name="my-accordion" checked={isOpen} onChange={onToggle} />
      <div className="collapse-title font-semibold flex items-center justify-between">
        <span>{title}</span>
        <FaChevronDown className={`text-xl transition-all duration-500 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`} />
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
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          safeScore <= 25 ? "bg-red-500" : safeScore <= 50 ? "bg-orange-500" : safeScore <= 75 ? "bg-yellow-500" : "bg-green-500"
                        }`}
                        style={{ width: `${safeScore}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600  text-right ">{safeScore}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
