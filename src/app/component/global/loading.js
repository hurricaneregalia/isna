import React from "react";
import { FaCoins } from "react-icons/fa6";

export default function Loading() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-gray-100">
      <div className="mb-4 text-center">
        <p className="font-bold m-0 text-2xl flex flex-row">
          <span className="mr-1">
            <FaCoins />
          </span>
          <span>Isna</span>
        </p>
        <p className=" m-0 text-gray-500"> tagline lorem ipsum</p>
      </div>
      <div className="flex space-x-2 ">
        <span className="loading loading-dots bg-gray-500 loading-lg"></span>
      </div>
    </div>
  );
}
