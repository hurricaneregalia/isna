import React from "react";
import { TbHelpSquareRoundedFilled } from "react-icons/tb";

export default function ExalviaScan({ brand = "BRAND", width = "" }) {
  return (
    <div className={`${width} bg-base-200 mx-auto text-base-content/50 rounded-3xl w-full p-8 flex flex-col gap-5 relative overflow-hidden`}>
      <div className="absolute w-200 aspect-square top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animation: "slowPulse 3s ease-in-out infinite" }}>
        <div
          className="bg-linear-to-r from-orange-400 via-pink-500 to-blue-500 absolute w-200 aspect-square top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full"
          style={{ animation: "spin 5s linear infinite" }}
        />
      </div>
      <div className="bg-base-200 blur-sm absolute top-1 left-1 rounded-2xl right-1 bottom-1" />

      {/* Corner Brackets */}
      <div className="w-10 aspect-square absolute top-4 left-4 rounded-tl-2xl border-t-2 border-l-2 border-base-content/30" />
      <div className="w-10 aspect-square absolute top-4 right-4 rounded-tr-2xl border-t-2 border-r-2 border-base-content/30" />
      <div className="w-10 aspect-square absolute bottom-4 left-4 rounded-bl-2xl border-b-2 border-l-2 border-base-content/30" />
      <div className="w-10 aspect-square absolute bottom-4 right-4 rounded-br-2xl border-b-2 border-r-2 border-base-content/30" />
      {/* Brand Header */}
      <div className=" relative w-full flex flex-col gap-3">
        <div className="bg-base-100 sm:py-8 py-5 px-5 font-bold text-3xl rounded-lg">
          <span className="flex gap-1 animate-pulse items-center">
            <TbHelpSquareRoundedFilled /> {brand}
          </span>
        </div>
        {/* Content Placeholder */}
        <div className="bg-base-100 p-5 flex rounded-lg gap-2">
          <div className="h-10 rounded-lg aspect-square bg-base-300 animate-pulse"></div>
          <div className="w-full flex flex-col gap-2">
            <div className="bg-base-300 h-4 rounded-full w-6/12 animate-pulse" />
            <div className="bg-base-300 h-4 rounded-full w-full animate-pulse" />
          </div>
        </div>
      </div>
      {/* Scanning Animation */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-1 bg-error animate-pulse shadow-md shadow-error" style={{ animation: "slideUpDown 5s ease-in-out infinite" }} />
      </div>
      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slideUpDown {
          0% {
            top: -10px;
          }
          50% {
            top: calc(100% + 10px);
          }
          100% {
            top: -10px;
          }
        }

        @keyframes slowPulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
