import React from "react";

export default function IconBullet({ icon, children }) {
  return (
    <div className="flex items-start space-x-2 text-base-content mb-2">
      <span className="text-xl">{icon}</span>
      <p className="text-base leading-relaxed">{children}</p>
    </div>
  );
}
