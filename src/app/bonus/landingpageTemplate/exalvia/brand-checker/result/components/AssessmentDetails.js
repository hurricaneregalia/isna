import React from "react";
import { FaChevronDown } from "react-icons/fa6";

export default function AssessmentDetails({ result, isOpen, onToggle, title }) {
  return (
    <div className={`collapse join-item border-b-4 border-base-300 ${isOpen ? "collapse-open" : ""}`}>
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
                  <div className="flex items-center justify-between opacity-70 mb-1">
                    <span className="text-sm font-medium">{category}</span>
                    <span className="text-sm font-medium text-right ">{safeScore}</span>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="w-full bg-base-300 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${safeScore <= 50 ? "bg-error" : safeScore <= 75 ? "bg-warning" : "bg-success"}`}
                        style={{ width: `${safeScore}%` }}
                      />
                    </div>
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
