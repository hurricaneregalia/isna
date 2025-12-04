import React from "react";

export default function Wrapper({ children, secId }) {
  return (
    <section {...(secId ? { id: secId } : {})}>
      <div className="lg:w-8/12 w-full mx-auto sm:px-15 px-5">{children}</div>
    </section>
  );
}
