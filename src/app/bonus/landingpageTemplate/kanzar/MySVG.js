import React from "react";

const MySVG = ({ className = "text-yellow-500" }) => (
  <svg
    viewBox="0 0 51 49.4"
    className={className} // Kelas Tailwind akan diteruskan di sini
  >
    <g>
      <path
        d="M25.7,0.1L25.5,0l-0.2,0.1C9.9,6.6,0,21.6,0,38.3v7.5h4v2.6H0v1h5v0h41v0h5v-1h-4v-2.6h4v-7.5
        C51,21.6,41.1,6.6,25.7,0.1z"
        style={{ fill: "currentColor" }} // Menggunakan currentColor
      />
      <path
        d="M48.5,14.9c1,1.5,1.8,3.2,2.5,4.8v-7.4C50.3,13.3,49.4,14.2,48.5,14.9z"
        style={{ fill: "currentColor" }} // Menggunakan currentColor
      />
      <path
        d="M0,12.3v7.4c0.8-1.7,1.6-3.3,2.5-4.8C1.6,14.2,0.7,13.3,0,12.3z"
        style={{ fill: "currentColor" }} // Menggunakan currentColor
      />
      <rect
        x="11.4"
        y="35.4"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -22.4457 20.3179)"
        className="st0"
        width="3.8"
        height="3.8"
        style={{ fill: "currentColor" }} // Menggunakan currentColor
      />
      <rect
        x="35.8"
        y="35.4"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -15.3009 37.5664)"
        className="st0"
        width="3.8"
        height="3.8"
        style={{ fill: "currentColor" }} // Menggunakan currentColor
      />
    </g>
  </svg>
);

export default MySVG;
