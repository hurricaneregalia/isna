import React from "react";

export default function PricingCard({ title, price, features }) {
  return (
    <div className="bg-base-100 border border-base-300 rounded-xl shadow-lg p-6 text-center">
      <h3 className="text-2xl font-bold text-base-content mb-2">{title}</h3>
      <p className="text-3xl font-extrabold text-primary mb-4">{price}</p>
      <ul className="text-base text-base-content mb-6 space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center justify-center gap-2">
            ✅ {feature}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary w-full">Daftar Sekarang</button>
    </div>
  );
}
