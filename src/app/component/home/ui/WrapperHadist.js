import React from "react";

export default function WrapperHadist({ children }) {
  return (
    <section>
      <div className="lg:w-5/12 sm:w-10/12 w-full mx-auto sm:px-0 px-5 sm:py-15 py-5">{children}</div>
    </section>
  );
}
