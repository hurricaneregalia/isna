"use client";
import React, { useEffect, useState } from "react";
import Content from "../global/content";
import Hero from "./hero";
import Services from "./services";
import ImageComponent from "../global/imageComponent";
import Grid1colums from "../global/grid1colums";
import { fetchSPages } from "@/app/firebase/readData";
import Loading from "../global/loading";
import Grid2List from "./grid2List";
import landingPage from "./landingPage.module.css";
import LayoutPrimary from "../global/layoutPrimary";
import LayoutSecondary from "../global/layoutSecondary";
import LayoutFullBlock from "../global/layoutFullBlock";
import Countdown from "./countdown";
import FinalCta from "../global/finalCta";
import BtnLinkPrimary from "../global/btnLinkPrimary";
import { FaArrowRight } from "react-icons/fa6";

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
      <Hero bg={landingPage.heroImage} title={pages.landingPage.hero.title} description={pages.landingPage.hero.description} btnTxt={pages.landingPage.hero.btnTxt} />

      <Grid1colums col1={<ImageComponent imageUrl={pages.landingPage.interest.image} imageAlt="keinginan-pebisnis" width={1000} height={1000} />} />
      <LayoutPrimary id="keinginan-pebisnis" bg="bg-transparent" title={pages.landingPage.interest.title} description={pages.landingPage.interest.description} footer="" headAlign="">
        <Grid2List listItem={pages.landingPage.interest.listItem} />
      </LayoutPrimary>

      <LayoutFullBlock
        id="call-to-action"
        bg={landingPage.bg1}
        title={pages.landingPage.cta1.title}
        btnTxt={pages.landingPage.cta1.btnTxt}
        btnUrl="#solusi"
        imageUrl={pages.landingPage.cta1.image}
        imageAlt={pages.landingPage.cta1.title}
      ></LayoutFullBlock>

      <LayoutSecondary
        id="solusi"
        title={pages.landingPage.solution.title}
        description={pages.landingPage.solution.description}
        footer=""
        headAlign="left"
        imageUrl={pages.landingPage.solution.image}
        imageAlt={pages.landingPage.solution.title}
      >
        <Grid2List listItem={pages.landingPage.solution.listItem} />
      </LayoutSecondary>
      <LayoutFullBlock
        id="good-news"
        bg=""
        reverse={true}
        title={pages.landingPage.cta2.title}
        description={pages.landingPage.cta2.description}
        btnTxt={pages.landingPage.cta2.btnTxt}
        btnUrl="#kalamanacopy"
        imageUrl={pages.landingPage.cta2.image}
        imageAlt={pages.landingPage.cta2.title}
      ></LayoutFullBlock>

      <LayoutSecondary
        id="kalamanacopy"
        title={pages.landingPage.kemampuan.title}
        description={pages.landingPage.kemampuan.description}
        footer=""
        headAlign="left"
        imageUrl={pages.landingPage.kemampuan.image}
        imageAlt={pages.landingPage.kemampuan.title}
      >
        <Grid2List listItem={pages.landingPage.kemampuan.listItem} />
      </LayoutSecondary>

      <LayoutPrimary id="manfaat" bg="bg-transparent" title={pages.landingPage.kemampuan.title} description={pages.landingPage.kemampuan.description} footer="" headAlign="">
        <Grid2List listItem={pages.landingPage.kemampuan.listItem} />
      </LayoutPrimary>
      <LayoutPrimary id="layanan" bg={landingPage.bg1} title={pages.landingPage.callToServices.title} description={pages.landingPage.callToServices.description} footer="" headAlign="">
        <Services />
      </LayoutPrimary>

      <LayoutPrimary id="bonus" bg="bg-transparent" title={pages.landingPage.bonus.title + " seharga Rp. 700.000"} description={pages.landingPage.bonus.description} footer="" headAlign="">
        <Grid2List listItem={pages.landingPage.bonus.listItem} />
        <div className="w-full text-center py-8 sm:w-8/12 mx-auto">
          <Countdown targetDate={new Date("2025-03-31T23:59:59")} />
        </div>
        <div className="w-full text-center py-8">
          <BtnLinkPrimary btnUrl="#layanan" btnTxt="Dapatkan bonus" btnFull={false} iconRight={<FaArrowRight />} btnStyle="" />
        </div>
      </LayoutPrimary>
      <LayoutPrimary id="score" bg="bg-transparent" title={pages.landingPage.score.title} description={pages.landingPage.score.description} footer="" headAlign="">
        <ImageComponent imageUrl={pages.landingPage.score.image} imageAlt={pages.landingPage.score.title} width={1000} height={1000} />
      </LayoutPrimary>
      <FinalCta id="dapat-bonus" title="Ayo tingkatkan penjualan bisnis anda dan dapatkan bonusnya." headAlign={false} bg={landingPage.bg1} />
    </Content>
  );
}
