import React from "react";
import { getAllFlags } from "./flagUtils";

export default function ResultMetrics({ result }) {
  const flagsCount = getAllFlags(result).length;

  return (
    <div className="grid grid-cols-3 text-center sumary text-white  border-4 divide-x-4 divide-white/50 border-white/50 rounded-bl-4xl">
      <div className="py-4">
        <div className="font-bold text-warning">24</div>
        <div className="text-sm opacity-70">Soal</div>
      </div>
      <div className="py-4" id="durasiPengerjaanSoal">
        <div className="font-bold text-warning">{result.duration}</div>
        <div className="text-sm opacity-70">Durasi</div>
      </div>
      <div className="py-4">
        <div className="font-bold text-warning">{flagsCount}</div>
        <div className="text-sm opacity-70">Catatan</div>
      </div>
    </div>
  );
}
