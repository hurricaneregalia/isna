"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LayoutSecondary from "../global/layoutSecondary";
import LayoutFullBlock from "../global/layoutFullBlock";
import Content from "../global/content";
import Loading from "../global/loading";
import { FaArrowRight } from "react-icons/fa6";
import landingPageStyle from "./landingPage.module.css";
import ImageComponent from "../global/imageComponent";
import FinalCta from "../global/finalCta";
import Countdown from "./countdown";
import BtnLinkPrimary from "../global/btnLinkPrimary";
import Hero from "./hero";
import LayoutPrimary from "../global/layoutPrimary";
import ServicesSqlite from "./servicesSqlite";
import Grid2List from "./grid2List";
import CanvasCursor from "../canvasCursor/CanvasCursor";
import ListRows from "../global/listRows";
import Hadist from "../global/hadist";
import ListRowsDidapatkan from "../global/listRowsDidapatkan";
import Alur from "./alur";
import LayoutFullBlock2 from "../global/layoutFullBlock2";
import ListThumbnails from "../global/listThumbnails";
import ListThumbnails2 from "../global/listThumbnails2";

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
        bg=""
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
      <Hadist listItem={data.hadistList} bg={landingPageStyle.pattern1} />
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
        footer={<ListThumbnails2 listItem={data.benefitList} />}
      />

      <LayoutFullBlock
        id="manfaat"
        bg=""
        title={data.landingPage.manfaatTitle}
        textBody={data.landingPage.manfaatDesc}
        btnTxt={null}
        btnUrl="#solusi"
        imageUrl={data.landingPage.cta1Img}
        imageAlt={data.landingPage.cta1Title}
        iconRight={<FaArrowRight />}
      />
      <LayoutFullBlock
        id="dapatkan"
        bg=""
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
      <LayoutPrimary id="layanan services" bg={landingPageStyle.bg1} title={data.landingPage.servicesTitle}>
        <ServicesSqlite listItem={data.servicesList} subListItem={data.featureServicesListItems} />
      </LayoutPrimary>

      <LayoutPrimary id="alur" bg="bg-transparent" title="Proses Persuasive Copywriting Mendapatkan Penjualan.">
        <Alur listItem={data.alurList} imageUrl={data.landingPage.cta1Img} bg={landingPageStyle.pattern1} />
        <FinalCta
          id="keinginan"
          ctaTxt="Order Copywriting"
          title={data.landingPage.cta1Title}
          headAlign={false}
          bg={null}
          description={data.landingPage.cta1Desc}
        />
      </LayoutPrimary>

      <LayoutPrimary id="bonuss" bg="bg-transparent" title={data.landingPage.bonusTitle} iconTitle="🔥">
        <Grid2List listItem={data.bonusListItems} />
        <div className="mt-10 text-lg mx-auto text-center">
          <p className="font-bold">✅ Pengelolaan landing page jadi lebih mudah!</p>
          <p>{data.landingPage.bonusDesc}</p>
        </div>
        <div className="w-full text-center py-8 sm:w-8/12 mx-auto">
          <Countdown targetDate={new Date(data.landingPage.bonusCounter)} bonusPeriode={data.landingPage.bonusCounter} />
        </div>
        <div className="w-full text-center py-8">
          <BtnLinkPrimary btnUrl="#layanan" btnTxt="Dapatkan bonus" btnFull={false} iconRight={<FaArrowRight />} btnStyle="" />
        </div>
      </LayoutPrimary>

      <CanvasCursor />
    </Content>
  );
}
