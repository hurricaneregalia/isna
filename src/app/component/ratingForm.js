"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaCheckCircle, FaExclamationTriangle, FaTachometerAlt } from "react-icons/fa";
import LogoMeterCard from "../logometer/logoMeterCard";
import * as constants from "../logometer/reviewList";
import { FaCircle } from "react-icons/fa6";
import logoMeterCss from "../logometer/logoMeter.module.css";

const aspects = [
  { id: 1, name: "simplicity" },
  { id: 2, name: "relevance" },
  { id: 3, name: "unique" },
  { id: 4, name: "scalability" },
  { id: 5, name: "timelessness" },
  { id: 6, name: "balance" },
  { id: 7, name: "color" },
  { id: 8, name: "typography" },
  { id: 9, name: "flexibility" },
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
    <>
      <LogoMeterCard>
        <div className="w-full">
          <div className="mb-4">
            <label className="block font-semibold" htmlFor="brandName">
              Nama Brand
            </label>
            <input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} className="input input-bordered w-full" id="brandName" name="brandName" />
          </div>

          <label className="block font-semibold mb-2" htmlFor="fileInput">
            Pilih Logo
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
            {/* <Image src={logo ? logo : imagePlaceholder} alt="Uploaded Logo" width={300} height={300} className="mt-4 mx-auto" /> */}
          </div>
        </div>
      </LogoMeterCard>
      <LogoMeterCard mb="mb-0">
        <div>
          {aspects.map((aspect) => (
            <div key={aspect.id} className="mb-10">
              <div className="flex justify-between">
                <label className="block font-bold capitalize" htmlFor={aspect.id}>
                  {aspect.name}
                </label>
                <span className={`ml-2 text-lg font-bold ${ratings[aspect.id] < 6.5 ? "text-red-500" : ratings[aspect.id] < 8.5 ? "text-orange-400" : "text-green-500"}`}>{ratings[aspect.id]}</span>
              </div>
              <div className="p-0 m-0 relative">
                <div className=" absolute w-full inset-0 mt-1">
                  <div className="flex w-full justify-between text-xs px-2">
                    {[5, 6, 7, 8, 9, 10].map((val) => (
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
                    step="1"
                    value={ratings[aspect.id]}
                    onChange={(e) => handleChange(aspect.id, e.target.value)}
                    className="range range-xs range-primary "
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 flex-none sm:flex bg-slate-100 rounded-xl p-4">
            <div className="sm:w-1/2 w-full">
              <Image src={logo ? logo : imagePlaceholder} alt="Uploaded Logo" width={500} height={500} className="mt-4 mx-auto w-full object-contain" />
            </div>
            <div className="sm:w-1/2 w-full text-center p-4 flex items-center justify-center">
              <div id="score">
                <div className=" flex items-center">
                  <p className="me-1">
                    <FaTachometerAlt />
                  </p>
                  <p>Logo Score</p>
                </div>
                <p className=" capitalize font-bold">{brandName ? brandName : "Nama brand"}</p>
                <div
                  className={`radial-progress border-4 mt-4 ${
                    progress < 65 ? "bg-red-500 text-red-200 border-red-500" : progress < 90 ? "bg-orange-400 text-orange-200 border-orange-400" : "bg-green-500 text-green-200 border-green-500"
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
        <div>
          {aspects.slice(0, 4).map((aspect) => (
            <div key={aspect.id} className="mb-10">
              <div className="flex">
                <p className={`mr-2 mt-1 ${ratings[aspect.id] < 6.5 ? "text-red-500" : ratings[aspect.id] < 8.5 ? "text-orange-400" : "text-green-500"}`}>
                  {ratings[aspect.id] < 6.5 ? <FaExclamationTriangle /> : ratings[aspect.id] < 8.5 ? <FaCircle /> : <FaCheckCircle />}
                </p>
                <div>
                  <p className="font-bold capitalize">
                    {aspect.name} {ratings[aspect.id]}
                  </p>
                  <p>{ratings[aspect.id] < 6.5 ? constants[aspect.name + "Bad"] : ratings[aspect.id] < 8.5 ? constants[aspect.name + "Std"] : constants[aspect.name + "Good"]}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="container mx-auto px-4">
            <p className="mb-4 font-bold">Ukuran media digital</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 rounded-xl overflow-hidden bg-red-500">
              <div className="flex flex-col items-center text-center py-5 bg-gray-100">
                <Image src={logo ? logo : imagePlaceholder} alt="Uploaded Logo" width={100} height={100} className="w-4 h-auto" />
                <p className="mt-auto">Lebar 16px</p>
              </div>
              <div className="flex flex-col items-center text-center py-5 bg-gray-200">
                <Image src={logo ? logo : imagePlaceholder} alt="Uploaded Logo" width={100} height={100} className="w-8 h-auto" />
                <p className="mt-auto">Lebar 32px</p>
              </div>
              <div className="flex flex-col items-center text-center py-5 bg-gray-300 w-full">
                <Image src={logo ? logo : imagePlaceholder} alt="Uploaded Logo" width={100} height={100} className="w-16 h-auto" />
                <p className="mt-auto">Lebar 64px</p>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <p className="mb-4 font-bold">Ukuran media cetak</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 rounded-xl overflow-hidden bg-red-500">
              <div className="flex flex-col items-center text-center py-5 bg-gray-100">
                <Image src={logo ? logo : imagePlaceholder} alt="Uploaded Logo" width={100} height={100} className={`${logoMeterCss.wMm5} h-auto`} />
                <p className="mt-auto">Lebar 5mm</p>
              </div>
              <div className="flex flex-col items-center text-center py-5 bg-gray-200">
                <Image src={logo ? logo : imagePlaceholder} alt="Uploaded Logo" width={100} height={100} className={`${logoMeterCss.wCm1} h-auto`} />
                <p className="mt-auto">Lebar 10mm</p>
              </div>
              <div className="flex flex-col items-center text-center py-5 bg-gray-300 w-full">
                <Image src={logo ? logo : imagePlaceholder} alt="Uploaded Logo" width={100} height={100} className={`${logoMeterCss.wCm2} h-auto`} />
                <p className="mt-auto">Lebar 20mm</p>
              </div>
            </div>
          </div>
        </div>
      </LogoMeterCard>
    </>
  );
};

export default RatingForm;
