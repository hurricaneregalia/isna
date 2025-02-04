"use client";
import React, { useState } from "react";
import Image from "next/image";

const aspects = [
  { id: 1, name: "Simplicity" },
  { id: 2, name: "Relevance" },
  { id: 3, name: "Unique" },
  { id: 4, name: "Scalability" },
  { id: 5, name: "Timelessness" },
  { id: 6, name: "Balance" },
  { id: 7, name: "Color" },
  { id: 8, name: "Typography" },
  { id: 9, name: "Flexibility" },
  { id: 10, name: "Story" },
];

const RatingForm = () => {
  const [ratings, setRatings] = useState(aspects.reduce((acc, aspect) => ({ ...acc, [aspect.id]: 5 }), {}));
  const [brandName, setBrandName] = useState("");
  const [logo, setLogo] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleChange = (aspectId, value) => {
    const roundedValue = Math.round(parseFloat(value) * 2) / 2;
    setRatings((prevRatings) => ({ ...prevRatings, [aspectId]: roundedValue }));
  };

  const handleFileChange = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    handleFileChange(file);
  };

  const averageRating = (Object.values(ratings).reduce((sum, value) => sum + value, 0) / aspects.length).toFixed(1);

  const progress = Math.max(averageRating * 10);
  const imagePlaceholder = "/images/landingPage/LPlakiLakiBatik.webp";

  return (
    <div className="w-full">
      <div className="mb-4">
        <label className="block font-semibold" htmlFor="brandName">
          Brand Name
        </label>
        <input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} className="input input-bordered w-full" id="brandName" name="brandName" />
      </div>

      <label className="block font-semibold mb-2" htmlFor="fileInput">
        Upload Logo
      </label>
      <div
        className={`mb-4 p-6 border-2 border-dashed ${dragging ? "border-primary bg-gray-100" : "border-gray-300"} rounded-lg text-center cursor-pointer`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput").click()}
      >
        <p className="font-semibold">Drag & Drop your logo here or click to upload</p>
        <input id="fileInput" type="file" accept="image/*" onChange={(e) => handleFileChange(e.target.files[0])} className="hidden" />
      </div>

      {aspects.map((aspect) => (
        <div key={aspect.id} className="mb-10">
          <div className="flex justify-between">
            <label className="block font-bold" htmlFor={aspect.id}>
              {aspect.name}
            </label>
            <span className="ml-2 text-lg text-green-600 font-bold">{ratings[aspect.id]}</span>
          </div>
          <div className="p-0 m-0 relative">
            <div className=" absolute w-full inset-0 mt-1">
              <div className="flex w-full justify-between text-xs px-2">
                {[5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10].map((val) => (
                  <div key={val} className="border-l-2 border-gray-200" style={{ height: 10 }}></div>
                ))}
              </div>
            </div>
            <div className=" absolute w-full inset-0">
              <input
                type="range"
                id={aspect.id}
                min="5"
                max="10"
                step="0.5"
                value={ratings[aspect.id]}
                onChange={(e) => handleChange(aspect.id, e.target.value)}
                className="range range-xs range-primary"
              />{" "}
            </div>
          </div>
        </div>
      ))}

      <div className="mt-6 flex-none sm:flex">
        <div className="sm:w-1/2 w-full">
          <Image src={logo ? logo : imagePlaceholder} alt="Uploaded Logo" width={500} height={500} className="mt-4 mx-auto w-full object-contain" />
        </div>
        <div className="sm:w-1/2 w-full text-center p-4 flex items-center justify-center">
          <div id="score">
            <p className="font-bold">Logo Score</p>
            <div>{brandName ? brandName : "Nama brand"}</div>
            <div
              className={`radial-progress border-4 mt-4 ${
                progress < 65 ? "bg-red-500 text-red-200 border-red-500" : progress < 90 ? "bg-orange-500 text-orange-200 border-orange-500" : "bg-green-500 text-green-200 border-green-500"
              }`}
              style={{ "--value": progress, "--thickness": "5px" }}
              role="progressbar"
            >
              <span className="text-3xl">{averageRating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingForm;
