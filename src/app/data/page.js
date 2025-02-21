"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../component/landingPage/hero";
import LayoutPrimary from "../component/global/layoutPrimary";
import LayoutSecondary from "../component/global/layoutSecondary";
import LayoutFullBlock from "../component/global/layoutFullBlock";
import Content from "../component/global/content";
import Loading from "../component/global/loading";
import ServicesSqlite from "../component/landingPage/servicesSqlite";
import { FaArrowRight } from "react-icons/fa6";
import Grid2List from "../component/landingPage/grid2List";
import landingPageStyle from "../component/landingPage/landingPage.module.css";
import HeaderFooterSqlite from "../component/global/headerFooterSqlite";
import ImageComponent from "../component/global/imageComponent";
import FinalCta from "../component/global/finalCta";
import Countdown from "../component/landingPage/countdown";
import BtnLinkPrimary from "../component/global/btnLinkPrimary";
import Head from "next/head";
import CanvasCursor from "../component/canvasCursor/CanvasCursor";

export default function LayoutLandingPage() {
  const [data, setData] = useState({
    landingPage: null,
    interestList: [],
    solutionList: [],
    skillList: [],
    servicesList: [],
    featureServicesListItems: [],
    siteIdentities: null,
    bonusListItems: [],
    loading: true,
    error: null,
  });

  // Fungsi untuk mengambil data
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/lokal");
      setData({
        landingPage: response.data.landingPage[0] || null,
        interestList: response.data.interestListItems || [],
        skillList: response.data.skillListItems || [],
        solutionList: response.data.solutionListItems || [],
        servicesList: response.data.servicesListItems || [],
        featureServicesListItems: response.data.featureServicesListItems || [],
        siteIdentities: response.data.siteIdentities[0] || null,
        bonusListItems: response.data.bonusListItems || [],
        loading: false,
        error: null,
      });
    } catch (err) {
      setData({
        ...data,
        loading: false,
        error: err.message || "Terjadi kesalahan",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Menangani kondisi loading dan error
  if (data.loading) return <Loading />;
  if (data.error) return <p>Terjadi kesalahan: {data.error}</p>;
  if (!data.landingPage) return <p>Data belum tersedia</p>;

  return (
    <>
      <CanvasCursor />
      <Head>
        <link rel="preload" href="/images/landingPage/hero/bgHero2.webp" as="image" />
        <link rel="preload" href="/images/landingPage/bgShine.webp" as="image" />
      </Head>
      <HeaderFooterSqlite siteName={data.siteIdentities.siteName} copyright={data.siteIdentities.copyright}>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Content>
            <Hero bg={landingPageStyle.heroImage} title={data.landingPage.heroTitle} description={data.landingPage.heroDesc} btnTxt={data.landingPage.heroBtnTxt} />
            <LayoutPrimary id="keinginan-pebisnis" bg="bg-transparent" title={data.landingPage.interestTitle}>
              <Grid2List listItem={data.interestList} />
            </LayoutPrimary>
            <LayoutFullBlock
              id="call-to-action"
              bg={landingPageStyle.bg1}
              title={data.landingPage.cta1Title}
              btnTxt={data.landingPage.cta1BtnTxt}
              btnUrl="#solusi"
              imageUrl={data.landingPage.cta1Img}
              imageAlt={data.landingPage.cta1Title}
              iconRight={<FaArrowRight />}
            />
            <LayoutSecondary
              id="solusi"
              title={data.landingPage.solutionTitle}
              description={data.landingPage.solutionDesc}
              imageUrl={data.landingPage.solutionImg}
              imageAlt={data.landingPage.solutionTitle}
            >
              <Grid2List listItem={data.solutionList} />
            </LayoutSecondary>
            <LayoutFullBlock
              id="good-news"
              bg=""
              reverse={true}
              title={data.landingPage.cta2Title}
              description={data.landingPage.cta2Desc}
              btnTxt={data.landingPage.cta2Txt}
              btnUrl="#kalamanacopy"
              imageUrl={data.landingPage.cta2Img}
              imageAlt={data.landingPage.cta2Title}
            />
            <LayoutSecondary id="kalamanacopy" title={data.landingPage.skillTitle} description={data.landingPage.skillDesc} imageUrl={data.landingPage.skillImg} imageAlt={data.landingPage.skillTitle}>
              <Grid2List listItem={data.skillList} />
            </LayoutSecondary>
            <LayoutPrimary id="layanan" bg={landingPageStyle.bg1} title={data.landingPage.servicesTitle}>
              <ServicesSqlite listItem={data.servicesList} subListItem={data.featureServicesListItems} />
            </LayoutPrimary>
            <LayoutPrimary
              id="bonus"
              bg="bg-transparent"
              title={data.landingPage.bonusTitle + " seharga Rp. " + data.landingPage.bonusPrice.toLocaleString("id-ID")}
              description={data.landingPage.bonusDesc}
              footer=""
              headAlign=""
            >
              <Grid2List listItem={data.bonusListItems} />
              <div className="w-full text-center py-8 sm:w-8/12 mx-auto">
                <Countdown targetDate={new Date(data.landingPage.bonusCounter)} bonusPeriode={data.landingPage.bonusCounter} />
              </div>
              <div className="w-full text-center py-8">
                <BtnLinkPrimary btnUrl="#layanan" btnTxt="Dapatkan bonus" btnFull={false} iconRight={<FaArrowRight />} btnStyle="" />
              </div>
            </LayoutPrimary>
            <LayoutPrimary id="score" bg="bg-transparent" title={data.landingPage.scoreTitle} description={data.landingPage.scoreDesc} footer="" headAlign="">
              <ImageComponent imageUrl={data.landingPage.scoreImg} imageAlt={data.landingPage.scoreTitle} width={1000} height={1000} />
            </LayoutPrimary>
            <FinalCta id="dapat-bonus" title="Ayo tingkatkan penjualan bisnis anda dan dapatkan bonusnya." headAlign={false} bg={landingPageStyle.bg1} />
          </Content>
        </main>
      </HeaderFooterSqlite>
    </>
  );
}
