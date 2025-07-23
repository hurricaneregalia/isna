import React from "react";

export default function Wrapper({ children, bg, secId, cardTop, cardBottom }) {
  const bgFx = bg ? bg : "bg-base-100 ";
  const cardTopFx = cardTop ? "card rounded-b-none" : "";
  const cardBottomFx = cardBottom ? "card rounded-t-none" : "";
  return (
    <section className="bg-primary lg:px-30 sm:px-15 px-5" {...(secId ? { id: secId } : {})}>
      <div className={`max-w-6xl mx-auto text-center py-15 px-5 ${cardBottomFx} ${cardTopFx} ${bgFx}`}>{children}</div>
    </section>
  );
}
