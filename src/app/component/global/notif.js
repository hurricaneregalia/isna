import React from "react";
import { FaRegBell } from "react-icons/fa6";

export default function Notif({ textColor }) {
  return (
    <button
      type="button"
      className={`relative rounded-full p-1 ${textColor} focus:outline-hidden focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      <FaRegBell aria-hidden="true" className="size-6" />
    </button>
  );
}
