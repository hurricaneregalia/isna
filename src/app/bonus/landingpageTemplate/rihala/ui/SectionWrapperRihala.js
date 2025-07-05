import React from "react";

export default function SectionWrapperRihala({ children, aos, secId }) {
  const aosFX = aos ? { "data-aos": aos } : {};

  return (
    <section id={secId || undefined} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" {...aosFX}>
      {children}
    </section>
  );
}
