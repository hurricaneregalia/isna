import React from "react";

export default function HalvoraImage({ src, alt, className = "", width, height, ...props }) {
  return (
    <div className={`overflow-hidden rounded-lg shadow-lg ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        style={{ width: width ? width : '100%', height: height ? height : 'auto' }}
        {...props}
      />
    </div>
  );
}
