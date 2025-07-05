import React from "react";

export default function PackageCardRihala({ title, price, features = [], aos }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  return (
    <div className="bg-base-200 rounded-lg shadow-md p-6 flex flex-col" {...aosFX}>
      <h4 className="text-xl font-semibold mb-2 text-base-content">{title}</h4>
      <p className="text-primary font-bold text-2xl mb-4">Rp {price.toLocaleString("id-ID")}</p>
      <ul className="flex-1 mb-4 space-y-2 text-base text-base-content/90">
        {features.map((feature, idx) => (
          <li key={idx} className="before:content-['•'] before:text-primary before:mr-2">
            {feature}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-auto self-center">Pesan Sekarang</button>
    </div>
  );
}
