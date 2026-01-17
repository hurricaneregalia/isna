"use client";
import React, { useRef, useEffect, useState } from "react";

/**
 * Age Picker Wheel Component
 * Komponen wheel picker untuk memilih rentang usia (min-max)
 * Menggunakan CSS Scroll Snap untuk smooth scrolling experience
 */
export default function AgePicker({ minAge = 18, maxAge = 18, onChange, required = false }) {
  const minScrollRef = useRef(null);
  const maxScrollRef = useRef(null);
  const [selectedMin, setSelectedMin] = useState(minAge);
  const [selectedMax, setSelectedMax] = useState(maxAge);

  const ITEM_HEIGHT = 35; // Jarak antar angka dibuat lebih rapat
  const MIN_AGE = 18;
  const MAX_AGE = 70;

  // Generate array angka usia
  const ageOptions = Array.from({ length: MAX_AGE - MIN_AGE + 1 }, (_, i) => MIN_AGE + i);

  // Scroll ke posisi yang dipilih saat mount
  useEffect(() => {
    if (minScrollRef.current) {
      const index = ageOptions.indexOf(selectedMin);
      minScrollRef.current.scrollTop = index * ITEM_HEIGHT;
    }
  }, []);

  useEffect(() => {
    if (maxScrollRef.current) {
      const index = ageOptions.indexOf(selectedMax);
      maxScrollRef.current.scrollTop = index * ITEM_HEIGHT;
    }
  }, []);

  // Handle scroll untuk min age
  const handleMinScroll = () => {
    if (!minScrollRef.current) return;
    const scrollTop = minScrollRef.current.scrollTop;
    const index = Math.round(scrollTop / ITEM_HEIGHT);
    const newMin = ageOptions[index];

    if (newMin !== selectedMin) {
      setSelectedMin(newMin);
      onChange?.(newMin, selectedMax);
    }
  };

  // Handle scroll untuk max age
  const handleMaxScroll = () => {
    if (!maxScrollRef.current) return;
    const scrollTop = maxScrollRef.current.scrollTop;
    const index = Math.round(scrollTop / ITEM_HEIGHT);
    const newMax = ageOptions[index];

    if (newMax !== selectedMax) {
      setSelectedMax(newMax);
      onChange?.(selectedMin, newMax);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold opacity-50 flex items-center gap-2">
        Rentang Usia Audiens
        {required && <span className="text-error">*</span>}
      </label>
      {/* Summary */}
      <div className="text-center p-3 bg-primary/5 rounded-xl border border-primary/20 mb-2">
        <p className="text-sm font-bold text-primary">
          {selectedMin} - {selectedMax} tahun
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* MIN AGE PICKER */}
        <div className="flex flex-col gap-2">
          <div className="relative h-[180px] bg-base-200 rounded-xl border border-base-300 overflow-hidden">
            {/* Highlight center & Active Number Display */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[80px] bg-base-100 flex items-center justify-center z-10 pointer-events-none border-y border-base-300/50">
              <span key={selectedMin} className="text-6xl text-primary animate-in zoom-in-50 fade-in duration-300">
                {selectedMin}
              </span>
            </div>

            {/* Scroll container */}
            <div
              ref={minScrollRef}
              onScroll={handleMinScroll}
              className="h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
              style={{
                scrollPaddingTop: "72.5px",
                scrollPaddingBottom: "72.5px",
              }}
            >
              {/* Padding top */}
              <div style={{ height: "72.5px" }} />

              {/* Age options */}
              {ageOptions.map((age) => (
                <div
                  key={age}
                  className={`h-[35px] flex items-center justify-center snap-center transition-all duration-300 ${age === selectedMin ? "opacity-0" : "text-base font-medium opacity-40"}`}
                >
                  {age}
                </div>
              ))}

              {/* Padding bottom */}
              <div style={{ height: "72.5px" }} />
            </div>
          </div>
        </div>

        {/* MAX AGE PICKER */}
        <div className="flex flex-col gap-2">
          <div className="relative h-[180px] bg-base-200 rounded-xl border border-base-300 overflow-hidden">
            {/* Highlight center & Active Number Display */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[80px] bg-base-100 flex items-center justify-center z-10 pointer-events-none border-y border-base-300/50">
              <span key={selectedMax} className="text-6xl text-primary animate-in zoom-in-50 fade-in duration-300">
                {selectedMax}
              </span>
            </div>

            {/* Scroll container */}
            <div
              ref={maxScrollRef}
              onScroll={handleMaxScroll}
              className="h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
              style={{
                scrollPaddingTop: "72.5px",
                scrollPaddingBottom: "72.5px",
              }}
            >
              {/* Padding top */}
              <div style={{ height: "72.5px" }} />

              {/* Age options */}
              {ageOptions.map((age) => (
                <div
                  key={age}
                  className={`h-[35px] flex items-center justify-center snap-center transition-all duration-300 ${age === selectedMax ? "opacity-0" : "text-base font-medium opacity-40"}`}
                >
                  {age}
                </div>
              ))}

              {/* Padding bottom */}
              <div style={{ height: "72.5px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
