import React from "react";

export default function Grid1colums({ col1, col2, id }) {
  const idFx = id ? id?.replace(/-/g, " ") : "";

  return (
    <div className="container mx-auto lg:w-8/12 p-4 my-10 pt-20" id={id}>
      <h2 className="text-base/7 font-semibold text-primary text-center">{idFx}</h2>
      <div className="grid grid-cols-1 p-4">
        <div className="col-span-1">{col1}</div>
        <div className="col-span-1">{col2}</div>
      </div>
    </div>
  );
}
