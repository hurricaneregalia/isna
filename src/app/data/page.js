"use client";
import React, { useEffect, useState } from "react";
import ImageComponent from "../component/global/imageComponent";
import Grid1colums from "../component/global/grid1colums";
import { fetchSPages } from "@/app/firebase/readData";
import Loading from "../component/global/loading";
import landingPage from "../component/landingPage/landingPage.module.css";
import LayoutPrimary from "../component/global/layoutPrimary";
import LayoutSecondary from "../component/global/layoutSecondary";
import LayoutFullBlock from "../component/global/layoutFullBlock";
import FinalCta from "../component/global/finalCta";
import BtnLinkPrimary from "../component/global/btnLinkPrimary";
import { FaArrowRight } from "react-icons/fa6";
import Content from "../component/global/content";
import Hero from "../component/landingPage/hero";
import Services from "../component/landingPage/services";
import Grid2List from "../component/landingPage/grid2List";
import Countdown from "../component/landingPage/countdown";
import HeaderFooter from "../component/global/headerFooter";
import axios from "axios";

export default function LayoutLandingPage({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/lokal")
      .then((response) => {
        // Ambil objek pertama dari array dan simpan sebagai objek
        const obj = response.data[0];
        setData(obj); // Menyimpan objek tersebut ke dalam state
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;

  return (
    <HeaderFooter siteName="sitename lorem" copyright="copyrihgth lorem">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Content>
          <Hero bg={landingPage.heroImage} title={data.heroTitle} description={data.heroDesc} btnTxt={data.heroBtnTxt} />
          <Grid1colums col1={<ImageComponent imageUrl={data.interestImg} imageAlt={data.interestTitle} width={1000} height={1000} />} />
          <LayoutPrimary id="keinginan-pebisnis" bg="bg-transparent" title={data.interestTitle} description={data.interestDesc} footer="" headAlign="">
            <Grid2List listItem={data.interestListItems} />
          </LayoutPrimary>
        </Content>
      </main>
    </HeaderFooter>
  );
}
