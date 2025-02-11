"use client";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

const ExportToPDFButton = ({ children }) => {
  const contentRef = useRef < HTMLDivElement > null;

  const handleExportPDF = () => {
    const element = contentRef.current;
    if (element) {
      html2pdf().from(element).save("logo_meter_report.pdf");
    }
  };

  return (
    <div>
      {/* Tombol untuk mengekspor */}
      <button onClick={handleExportPDF} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Ekspor ke PDF
      </button>

      {/* Konten yang ingin diekspor */}
      <div ref={contentRef} className="mt-5">
        {children}
      </div>
    </div>
  );
};

export default ExportToPDFButton;
