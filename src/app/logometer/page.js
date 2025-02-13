"use client";
import React, { useState } from "react";
import RatingForm from "../component/ratingForm";

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
