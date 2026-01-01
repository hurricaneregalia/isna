import React from "react";
import { TbHelpSquareRoundedFilled } from "react-icons/tb";

export default function ExalviaScan() {
  return (
    <>
      <div className="bg-base-200 mx-auto text-base-content/50 rounded-3xl overflow-hidden lg:w-6/12 sm:w-8/12 w-full p-8 flex flex-col gap-5 relative">
        {/* Scanning Animation */}
        <div className="absolute inset-0 overflow-hidden z-2">
          <div
            className="absolute w-full h-1 bg-linear-to-r from-transparent via-success to-transparent animate-pulse shadow-lg shadow-success/80"
            style={{
              animation: "slideUpDown 5s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Corner Brackets */}
        <div className="w-10 aspect-square absolute top-4 left-4 rounded-tl-2xl border-t-3 border-l-3 border-base-content/30" />
        <div className="w-10 aspect-square absolute top-4 right-4 rounded-tr-2xl border-t-3 border-r-3 border-base-content/30" />
        <div className="w-10 aspect-square absolute bottom-4 left-4 rounded-bl-2xl border-b-3 border-l-3 border-base-content/30" />
        <div className="w-10 aspect-square absolute bottom-4 right-4  rounded-br-2xl border-b-3 border-r-3 border-base-content/30" />

        {/* Brand Header */}
        <div className="bg-base-100 sm:py-8 py-5 px-5 font-bold text-3xl rounded-lg">
          <span className=" flex gap-1 animate-pulse items-center ">
            <TbHelpSquareRoundedFilled /> BRAND
          </span>
        </div>

        {/* Content Placeholder */}
        <div className="bg-base-100 p-5 flex rounded-lg gap-2">
          <div className="h-10 rounded-lg aspect-square bg-base-200 animate-pulse"></div>
          <div className="w-full flex flex-col gap-2">
            <div className="bg-base-200 h-4 rounded-full w-6/12 animate-pulse" />
            <div className="bg-base-200 h-4 rounded-full w-12/12 animate-pulse" />
          </div>
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
      `}</style>
    </>
  );
}
