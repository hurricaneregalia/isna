import React from "react";

export default function Grid2colums({ col1, col2 }) {
  return (
    <div className="container mx-auto lg:w-8/12 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <div className="col-span-1">{col1}</div>
        <div className="col-span-1">{col2}</div>
      </div>
    </div>
  );
}
