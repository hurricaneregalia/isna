import React from "react";
import { TbHelpSquareRoundedFilled } from "react-icons/tb";

export default function ExalviaScan({ brand = "YOUR BRAND", width = "" }) {
  return (
    <div className={`${width} bg-base-200 mx-auto text-base-content/50 rounded-3xl w-full p-8 flex flex-col gap-5 relative overflow-hidden`}>
      <div className="absolute w-200 aspect-square top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animation: "slowPulse 3s ease-in-out infinite" }}>
        <div
          className="absolute w-200 aspect-square top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full"
          style={{
            animation: "spin 10s linear infinite",
            background:
              "linear-gradient(180deg, #FB923C, #FB923C, #EC4899,#EC4899, #3B82F6, #3B82F6, transparent, #FB923C, #FB923C, #EC4899,#EC4899, #3B82F6, #3B82F6, transparent, transparent, #3B82F6, #3B82F6)",
          }}
        />
      </div>
      <div className="bg-base-200 blur-xs absolute rounded-2xl top-1.5 left-1.5 right-1.5 bottom-1.5" />

      {/* Corner Brackets */}
      <div className="w-10 aspect-square absolute top-4 left-4 rounded-tl-2xl border-t-2 border-l-2 border-base-content/30" />
      <div className="w-10 aspect-square absolute top-4 right-4 rounded-tr-2xl border-t-2 border-r-2 border-base-content/30" />
      <div className="w-10 aspect-square absolute bottom-4 left-4 rounded-bl-2xl border-b-2 border-l-2 border-base-content/30" />
      <div className="w-10 aspect-square absolute bottom-4 right-4 rounded-br-2xl border-b-2 border-r-2 border-base-content/30" />
      {/* Brand Header */}
      <div className=" relative w-full flex flex-col gap-3">
        <div className="bg-base-100 sm:py-8 py-5 px-5 font-bold text-3xl rounded-lg text-start">
          <span className="animate-pulse capitalize">{brand === "YOUR BRAND" ? brand : "scanning " + brand}</span>
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
        <div
          className="absolute w-full h-1"
          style={{
            backgroundSize: "200% 100%",
            animation: "slideUpDown 10s ease-in-out infinite, movingGradient 2s linear infinite",
          }}
        >
          {/* Sharp Line */}
          <div className="absolute inset-0 h-0.5 bg-linear-to-r from-orange-400 via-pink-500 to-blue-500" style={{ backgroundSize: "inherit", backgroundPosition: "inherit" }} />
          {/* Glow/Blur Line */}
          <div className="absolute inset-0 h-1 bg-linear-to-r from-orange-400 via-pink-500 to-blue-500 blur-xs" style={{ backgroundSize: "inherit", backgroundPosition: "inherit" }} />
        </div>
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

        @keyframes movingGradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
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
