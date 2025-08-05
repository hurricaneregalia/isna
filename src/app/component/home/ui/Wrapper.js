import React from "react";

export default function Wrapper({ children }) {
  return (
    <section>
      <div className="lg:w-8/12 w-full mx-auto sm:p-15 p-5 ">{children}</div>
    </section>
  );
}
