import React from "react";

export default function Wrapper({ children, bg, secId, cardTop, cardBottom }) {
  const bgFx = bg ? bg : "bg-base-100 ";
  const cardTopFx = cardTop ? "card rounded-b-none" : "";
  const cardBottomFx = cardBottom ? "card rounded-t-none" : "";
  return (
    <section className="bg-primary lg:px-30 sm:px-15 px-5 " {...(secId ? { id: secId } : {})}>
      <div className={`relative max-w-7xl mx-auto text-center py-15 lg:px-30 sm:px-15 px-5 ${cardBottomFx} ${cardTopFx} ${bgFx}`}>
        <div className="custom-radial text-primary/10 bg-size-[1em_1em] absolute inset-0" />
        {children}
      </div>
    </section>
  );
}
