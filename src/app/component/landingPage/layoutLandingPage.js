"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LayoutFullBlock from "../global/layoutFullBlock";
import Content from "../global/content";
import Loading from "../global/loadingProcess";
import { FaArrowRight } from "react-icons/fa6";
import landingPageStyle from "./landingPage.module.css";
import FinalCta from "../global/finalCta";
import Hero from "./hero";
import LayoutPrimary from "../global/layoutPrimary";
import ServicesSqlite from "./servicesSqlite";
import Grid2List from "./grid2List";
import CanvasCursor from "../canvasCursor/CanvasCursor";
import Hadist from "../global/hadist";
import ListRowsDidapatkan from "../global/listRowsDidapatkan";
import Alur from "./alur";
import LayoutFullBlock2 from "../global/layoutFullBlock2";
import ListThumbnails from "../global/listThumbnails";
import ListThumbnails2 from "../global/listThumbnails2";
import CountdownMini from "./countdownMini";
import TextDescription from "../global/textDescription";
import ImageComponent from "../global/imageComponent";

export default function LayoutLandingPage({ children }) {
  const [data, setData] = useState({
    landingPage: null,
    interestList: [],
    solutionList: [],
    skillList: [],
    servicesList: [],
    hadistList: [],
    featureServicesListItems: [],
    bonusListItems: [],
    didapatkanListItems: [],
    benefitList: [],
    alurList: [],
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
        hadistList: response.data.hadistListItem || [],
        featureServicesListItems: response.data.featureServicesListItems || [],
        bonusListItems: response.data.bonusListItems || [],
        didapatkanList: response.data.didapatkanListItems || [],
        benefitList: response.data.benefitListItem || [],
        alurList: response.data.alurListItems || [],
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
    <Content>
      <Hero
        bg={landingPageStyle.heroImage}
        title={data.landingPage.heroTitle}
        description={data.landingPage.heroDesc}
        btnTxt={data.landingPage.heroBtnTxt}
      />

      <LayoutFullBlock
        id="fakta"
        bg="bg-transparent"
        title={data.landingPage.interestTitle}
        textBody={data.landingPage.interestDesc}
        btnTxt=""
        btnUrl="#solusi"
        imageUrl={data.landingPage.cta1Img}
        imageAlt={data.landingPage.cta1Title}
        iconRight={<FaArrowRight />}
      />

      <LayoutFullBlock2
        id="fenomena"
        bg=""
        title={data.landingPage.interestListTitle}
        description=""
        list={<ListThumbnails listItem={data.interestList} />}
        btnTxt={null}
        btnUrl="#solusi"
        imageUrl={data.landingPage.cta1Img}
        imageAlt={data.landingPage.cta1Title}
        iconRight={<FaArrowRight />}
        reverse={true}
        roundedBrand={false}
      />

      <LayoutFullBlock
        id="solusi"
        bg={landingPageStyle.bg1}
        title={data.landingPage.solutionTitle}
        textBody={data.landingPage.solutionDesc}
        btnTxt={null}
        btnUrl="#solusi"
        imageUrl={data.landingPage.cta1Img}
        imageAlt={data.landingPage.cta1Title}
        iconRight={<FaArrowRight />}
      />
      <Hadist listItem={data.hadistList} bg="bg-transparent" />
      <LayoutFullBlock
        id="sungguh-sungguh "
        bg={landingPageStyle.bg1}
        title={data.landingPage.benefitListTitle}
        description=""
        list={null}
        btnTxt={null}
        btnUrl="#sungguh"
        imageUrl={data.landingPage.cta1Img}
        imageAlt={data.landingPage.cta1Title}
        iconRight={<FaArrowRight />}
        reverse={true}
        footer={<ListThumbnails2 listItem={data.benefitList} bg={landingPageStyle.patternKalmaanaDark} />}
      />

      <LayoutFullBlock
        id="manfaat"
        bg="bg-transparent"
        title={data.landingPage.manfaatTitle}
        textBody={data.landingPage.manfaatDesc}
        btnTxt={null}
        btnUrl="#solusi"
        imageUrl={data.landingPage.cta1Img}
        imageAlt={data.landingPage.cta1Title}
        iconRight={<FaArrowRight />}
      />
      <LayoutFullBlock
        id="penting"
        bg="bg-transparent"
        title={data.landingPage.didapatkanTitle}
        description=""
        list={<ListRowsDidapatkan listItem={data.didapatkanList} iconStyle="good" />}
        btnTxt={null}
        btnUrl="#sungguh"
        imageUrl={data.landingPage.cta1Img}
        imageAlt={data.landingPage.cta1Title}
        iconRight={<FaArrowRight />}
        reverse={true}
      />
      <LayoutPrimary id="layanan" bg={landingPageStyle.bg1} title={data.landingPage.servicesTitle}>
        <ServicesSqlite listItem={data.servicesList} subListItem={data.featureServicesListItems} />
      </LayoutPrimary>

      <LayoutPrimary id="alur" bg="bg-transparent" title="Proses Persuasive Copywriting Mendapatkan Penjualan.">
        <Alur listItem={data.alurList} imageUrl={data.landingPage.cta1Img} bg={landingPageStyle.pattern1} />
        <FinalCta
          id="keinginan"
          ctaTxt="Order Copywriting"
          title={data.landingPage.cta1Title}
          headAlign={false}
          bg={`py-20 ${landingPageStyle.bg1}`}
          description={data.landingPage.cta1Desc}
          btn={2}
          ctaTxt1="Order"
          ctaTxt2="Konsultasi"
          btnUrl1="#layanan"
          btnUrl2="#ok"
        >
          <CountdownMini targetDate={new Date(data.landingPage.bonusCounter)} bonusPeriode={data.landingPage.bonusCounter} />
        </FinalCta>
      </LayoutPrimary>
      <LayoutPrimary id="bonus" bg="bg-transparent" title={data.landingPage.bonusTitle} iconTitle="🔥">
        <Grid2List listItem={data.bonusListItems} />
        <div className={`mt-4 text-lg mx-auto bg-base-300 overflow-hidden w-full rounded-bl-3xl ${landingPageStyle.bg2}`}>
          <div className="containerSec flex flex-col md:flex-row gap-3 overflow-hidden bg-amber-300/80 text-slate-900 ">
            <div className="sec1 w-full lg:w-1/2 p-10">
              <TextDescription title="Pengelolaan lebih mudah!" description={data.landingPage.bonusDesc} />
            </div>
            <div className="sec2 w-full lg:w-1/2 sm:pt-10 p-0 flex justify-center" data-aos="fade-up">
              <ImageComponent
                imageUrl="/images/landingPage/infinity-gauntlet.webp"
                imageAlt="easy way"
                width="100px"
                priority={false}
                rounded=" none"
              />
            </div>
          </div>
        </div>

        <FinalCta
          id="claim-bonus"
          ctaTxt="Order Copywriting"
          title={data.landingPage.cta2Title}
          headAlign={false}
          bg={`py-20 ${landingPageStyle.bg1}`}
          description={data.landingPage.cta2Desc}
          btn={1}
          ctaTxt1="Dapatkan Bonus"
          ctaTxt2="Konsultasi"
          btnUrl1="#layanan"
          btnUrl2="#ok"
        >
          <CountdownMini targetDate={new Date(data.landingPage.bonusCounter)} bonusPeriode={data.landingPage.bonusCounter} />
        </FinalCta>
      </LayoutPrimary>
      <CanvasCursor />
    </Content>
  );
}
