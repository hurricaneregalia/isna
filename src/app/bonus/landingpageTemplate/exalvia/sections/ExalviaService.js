import React from "react";

export default function ExalviaService({ data, secId }) {
  return (
    <section id={secId} className="sm:p-10 p-5">
      <div className="container lg:w-10/12 w-full mx-auto">
        {/* Konten diambil dari props {data} */}
        {/* Implementasi layout Tailwind & DaisyUI di sini */}
        <h2 className="font-instrument-serif text-4xl">{data?.title || "ExalviaService"}</h2>
      </div>
    </section>
  );
}
