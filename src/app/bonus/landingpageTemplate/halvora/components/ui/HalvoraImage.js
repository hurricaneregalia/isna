import React from "react";

export default function HalvoraImage({ src, alt, className = "", width, height, ...props }) {
  return (
    <div className={`overflow-hidden shadow-lg ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto object-cover" style={{ width: width ? width : "100%", height: height ? height : "auto" }} {...props} />
    </div>
  );
}
