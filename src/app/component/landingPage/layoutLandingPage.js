"use client";
import React, { useEffect, useState } from "react";
import Content from "../global/content";
import Hero from "./hero";
import Services from "./services";
import Grid2colums from "../global/grid2colums";
import ImageComponent from "../global/imageComponent";
import hero from "../../../../public/images/landingPage/hero/bgHero2.webp";
import TextDesctiption from "../global/textDesctiption";
import Grid1colums from "../global/grid1colums";
import { fetchSPages } from "@/app/firebase/readData";
import Loading from "../global/loading";
import { Fa42Group, FaUser } from "react-icons/fa6";

export default function LayoutLandingPage({ children }) {
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
    <Content>
      <Hero title={pages.landingPage.heroTitle} description={pages.landingPage.heroDescription} btnTxt={pages.landingPage.heroBtnTxt} />
      <Grid1colums
        id="keinginan-pebisnis"
        col1={<TextDesctiption title={pages.landingPage.interest.interestTitle} description={pages.landingPage.interest.interestDescription} />}
        col2={
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            {pages.landingPage.interest.interestItems.map((item, index) => (
              <div key={index} className="col-span-1 flex justify-stretch">
                <div className="bg-base-200 p-8 rounded-bl-3xl">
                  <FaUser />
                  <h3 className=" font-bold mb-3 mt-2">{item.itemTitle}</h3>
                  <p>{item.itemDescription}</p>
                </div>
              </div>
            ))}
          </div>
        }
      />
      <Grid1colums
        id="layanan"
        col1={
          <TextDesctiption
            title="Choose the right plan for you"
            description="Choose an affordable plan thats packed with the best features for engaging your audience, creating customer loyalty, and driving sales."
          />
        }
        col2={
          <div className="grid grid-cols-1 gap-4">
            <Services />
          </div>
        }
      />
    </Content>
  );
}
