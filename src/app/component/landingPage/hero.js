"use client";
import React, { useEffect, useState } from "react";
import hero from "./hero.module.css";
import { fetchSPages } from "@/app/firebase/readData";
import Loading from "../global/loading";
import Link from "next/link";

export default function Hero() {
  const [pages, setPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPages = async () => {
      try {
        setIsLoading(true);
        const data = await fetchSPages();
        console.log("Data Pages:", data);

        if (!data) {
          throw new Error("No data received");
        }

        setPages(data);
      } catch (error) {
        console.error("Error fetching pages:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getPages();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!pages) {
    return <div>No data available</div>;
  }

  return (
    <div className={`hero min-h-screen ${hero.magicpattern}`}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{pages.landingPage.heroTitle}</h1>
          <p className="mb-20">{pages.landingPage.heroDescription}</p>
          <Link href="#layanan" className="btn btn-primary">
            {pages.landingPage.heroBtnTxt}
          </Link>
        </div>
      </div>
    </div>
  );
}
