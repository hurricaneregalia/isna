"use client";
import { useEffect } from "react";
import fluidCursor from "./useFluidCursor";

const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[1]">
      <canvas
        id="fluid"
        className="w-screen h-screen"
        style={{
          pointerEvents: "none", // Pastikan canvas tidak menangkap event pointer
          zIndex: 1, // Pastikan canvas memiliki z-index lebih rendah
        }}
      />
    </div>
  );
};

export default FluidCursor;
