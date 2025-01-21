"use client";
import React, { useEffect, useState } from "react";
import Content from "../global/content";
import Hero from "./hero";
import Services from "./services";
import Grid2colums from "../global/grid2colums";
import ImageComponent from "../global/imageComponent";
import TextDesctiption from "../global/textDesctiption";
import Grid1colums from "../global/grid1colums";
import { fetchSPages } from "@/app/firebase/readData";
import Loading from "../global/loading";
import Grid2List from "./grid2List";
import FullBlock from "../global/fullBlock";
import landingPage from "./landingPage.module.css";
import LayoutPrimary from "../global/layoutPrimary";
import LayoutSecondary from "../global/layoutSecondary";

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
      <Hero bg={landingPage.heroImage} title={pages.landingPage.heroTitle} description={pages.landingPage.heroDescription} btnTxt={pages.landingPage.heroBtnTxt} />

      <Grid1colums col1={<ImageComponent src={pages.landingPage.interest.interestImage} alt="keinginan-pebisnis" width={1000} height={1000} />} />
      <LayoutPrimary id="keinginan-pebisnis" title={pages.landingPage.interest.interestTitle} description={pages.landingPage.interest.interestDescription} footer="" headAlign="">
        <Grid2List listItem={pages.landingPage.interest.interestItems} />
      </LayoutPrimary>
      <LayoutSecondary id="hunutu" title={pages.landingPage.interest.interestTitle} description={pages.landingPage.interest.interestDescription} footer="" headAlign="">
        <Grid2List listItem={pages.landingPage.interest.interestItems} />
      </LayoutSecondary>
      <FullBlock bg={landingPage.bg1} title={pages.landingPage.cta1.title} btnTxt={pages.landingPage.cta1.btnTxt} ctaImage={pages.landingPage.cta1.ctaImage} />
      <FullBlock
        bg=""
        title={pages.landingPage.solution.title}
        btnTxt={pages.landingPage.solution.btnTxt}
        ctaImage={pages.landingPage.solution.ctaImage}
        id="solusi"
        description={pages.landingPage.solution.description}
        themes="dark"
      >
        <Grid2List listItem={pages.landingPage.interest.interestItems} />
      </FullBlock>

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
