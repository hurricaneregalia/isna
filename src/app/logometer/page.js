"use client";
import React, { useState } from "react";
import RatingForm from "../component/ratingForm";
import HeaderFooter from "../component/global/headerFooter";

const Logometer = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div>
        <RatingForm />
      </div>
    </div>
  );
};

export default Logometer;
