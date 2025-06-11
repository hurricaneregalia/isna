import React from "react";

export default function HeroBonus({ children }) {
  return (
    <div className="sm:p-15 p-5 bg-slate-900 sm:rounded-bl-4xl rounded-bl-3xl patternKalmaanaDark">
      <div className="lg:rounded-bl-3xl rounded-bl-xl grid grid-cols-1 lg:w-8/12 mx-auto w-full overflow-hidden">
        <div>{children}</div>
      </div>
    </div>
  );
}
