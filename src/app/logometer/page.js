"use client";
import React, { useState } from "react";
import RatingForm from "../component/ratingForm";
import HeaderFooter from "../component/global/headerFooter";

const Logometer = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center">Kalamanacopy</h1>
        <p className="text-center mb-4">Logo review</p>
        <RatingForm />
      </div>
    </div>
  );
};

export default Logometer;
