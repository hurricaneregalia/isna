// src/app/component/landingPage/layoutLandingPage.js
"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Content from "../global/content";
import Hero from "./hero";
import Loading from "@/app/loading";
import LayoutFullBlock from "../global/layoutFullBlock";
import { FaArrowRight } from "react-icons/fa6";
import landingPageStyle from "./landingPage.module.css";
import Hadist from "../global/hadist";
import ListRowsDidapatkan from "../global/listRowsDidapatkan";
import ListThumbnails2 from "../global/listThumbnails2";
import LayoutPrimary from "../global/layoutPrimary";
import Services from "./services";
import Alur from "./alur";
import FinalCta from "../global/finalCta";
import CountdownMini from "./countdownMini";
import Grid2List from "./grid2List";
import { RiCloseCircleFill } from "react-icons/ri";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function LayoutLandingPage({ children, waNo }) {
  const [pageData, setPageData] = useState(null);
  const [productData, setProductData] = useState(null); // untuk product
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPage = axios.get(`${BASE_URL}/api/page`);
    const fetchProduct = axios.get(`${BASE_URL}/api/product`);

    Promise.all([fetchPage, fetchProduct])
      .then(([pageRes, productRes]) => {
        setPageData(pageRes.data[0]); // asumsinya tetap satu elemen
        setProductData(productRes.data.data); // ambil langsung array dari "data"
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Gagal mengambil data");
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  // Bentuk ulang data agar sesuai dengan props Services
  const listItem = productData.map((product) => ({
    id: product.id,
    slug: product.slug,
    title: product.name,
    price: product.price,
    isBest: product.isBest,
    proccessTime: product.proccessTime,
    bestFor: product.bestFor,
    quality: product.quality || 0,
  }));

  const subListItem = productData.flatMap((product) =>
    product.benefits.map((benefit) => ({
      id: benefit.id,
      servicesListItemId: product.id,
      title: benefit.benefit.title,
      isActive: benefit.isActive,
    }))
  );

  const counter = "2025-05-29T23:59:59Z";

  return (
    <Content>
      <Hero bg="/images/landingPage/hero/bgHero2.webp" title={pageData.title} description={pageData.description} btnTxt="Solusi" />
      {pageData.sections
        .filter((section) => section.id === "2")
        .map((section) => (
          <LayoutFullBlock
            key={section.id}
            id="fakta"
            bg="bg-transparent"
            title={section.title}
            textBody={section.description}
            btnTxt=""
            btnUrl="#solusi"
            imageUrl={section.image}
            imageAlt={section.title}
            iconRight={<FaArrowRight />}
            idColor="yes"
          />
        ))}

      {pageData.sections
        .filter((section) => section.id === "3")
        .map((section) => (
          <LayoutFullBlock
            key={section.id}
            id="fenomena"
            bg="bg-transparent"
            title={section.title}
            textBody={section.description}
            list={section.listItems.map((listItem) => (
              <ListRowsDidapatkan key={listItem.id} listItem={listItem.entries} icon={<RiCloseCircleFill className=" text-2xl" />} />
            ))}
            btnTxt=""
            btnUrl="#solusi"
            imageUrl={section.image}
            imageAlt={section.title}
            iconRight={<FaArrowRight />}
            reverse={true}
            idColor="yes"
          />
        ))}
      {pageData.sections
        .filter((section) => section.id === "4")
        .map((section) => (
          <LayoutFullBlock
            key={section.id}
            id="solusi"
            bg={landingPageStyle.bg1}
            title={section.title}
            textBody={section.description}
            btnTxt=""
            btnUrl="#solusi"
            imageUrl={section.image}
            imageAlt={section.title}
            iconRight={<FaArrowRight />}
          />
        ))}
      {pageData?.sections &&
        pageData.sections
          .filter((section) => section.id === "5")
          .map((section) => (
            <Hadist
              key={section.id}
              image={section.image}
              listItem={[
                {
                  title: section.title,
                  description: section.description,
                  subTitle: section.subTitle,
                  additionalText: section.additionalText,
                },
              ]}
              bg="bg-transparent"
            />
          ))}
      {pageData.sections
        .filter((section) => section.id === "6")
        .map((section) => (
          <LayoutFullBlock
            key={section.id}
            id="serius"
            bg={landingPageStyle.bg1}
            title={section.title}
            textBody={section.description}
            btnTxt={null}
            btnUrl="#solusi"
            imageUrl={section.image}
            imageAlt={section.title}
            iconRight={<FaArrowRight />}
            reverse={true}
            roundedBrand={false}
            footer={section.listItems.map((listItem) => (
              <ListThumbnails2 key={listItem.id} listItem={listItem.entries} />
            ))}
          />
        ))}
      {pageData.sections
        .filter((section) => section.id === "7")
        .map((section) => (
          <LayoutFullBlock
            key={section.id}
            id="manfaat"
            bg="bg-transparent"
            title={section.title}
            textBody={section.description}
            btnTxt=""
            btnUrl="#solusi"
            imageUrl={section.image}
            imageAlt={section.title}
            iconRight={<FaArrowRight />}
            idColor="yes"
          />
        ))}
      {pageData.sections
        .filter((section) => section.id === "8")
        .map((section) => (
          <LayoutFullBlock
            key={section.id}
            id="penting"
            bg="bg-transparent"
            title={section.title}
            textBody={section.description}
            list={section.listItems.map((listItem) => (
              <ListRowsDidapatkan key={listItem.id} listItem={listItem.entries} />
            ))}
            btnTxt=""
            btnUrl="#solusi"
            imageUrl={section.image}
            imageAlt={section.title}
            iconRight={<FaArrowRight />}
            reverse={true}
            idColor="yes"
          />
        ))}
      {pageData.sections
        .filter((section) => section.id === "9")
        .map((section) => (
          <LayoutPrimary
            key={section.id}
            id="layanan"
            bg={landingPageStyle.bg1}
            title={section.title}
            textBody={section.description}
            btnTxt=""
            btnUrl="#solusi"
            imageUrl={section.image}
            imageAlt={section.title}
          >
            <Services listItem={listItem} subListItem={subListItem} />
          </LayoutPrimary>
        ))}
      {pageData.sections
        .filter((section) => section.id === "10")
        .map((section) => (
          <LayoutPrimary
            key={section.id}
            id="alur"
            bg="bg-transparent"
            title={section.title}
            textBody={section.description}
            btnTxt=""
            btnUrl="#solusi"
            imageUrl={section.image}
            imageAlt={section.title}
            idColor="yes"
          >
            {section.listItems.map((listItem) => (
              <div key={listItem.id}>
                <Alur listItem={listItem.entries} bg={landingPageStyle.pattern1} />
                {pageData.sections
                  .filter((section) => section.id === "11")
                  .map((section) => (
                    <FinalCta
                      key={section.id}
                      id="keinginan"
                      ctaTxt="Order Copywriting"
                      title={section.title}
                      description={section.description}
                      headAlign={false}
                      bg={`py-20 ${landingPageStyle.bg1}`}
                      btn={2}
                      ctaTxt1="Buat Copywriting"
                      ctaTxt2="Konsultasi"
                      btnUrl1="#layanan"
                      btnUrl2={`https://wa.me/${waNo}?text=saya%20mau%20konsultasi`}
                    >
                      <CountdownMini targetDate={counter} />
                    </FinalCta>
                  ))}
              </div>
            ))}
          </LayoutPrimary>
        ))}
      {pageData.sections
        .filter((section) => section.id === "12")
        .map((section) => (
          <LayoutPrimary
            key={section.id}
            id="bonus"
            bg="bg-transparent"
            iconTitle="🔥"
            title={section.title}
            textBody={section.description}
            btnTxt=""
            btnUrl="#solusi"
            imageUrl={section.image}
            imageAlt={section.title}
            idColor="yes"
          >
            {section.listItems.map((listItem) => (
              <Grid2List key={listItem.id} listItem={listItem.entries} />
            ))}
          </LayoutPrimary>
        ))}
      {pageData.sections
        .filter((section) => section.id === "14")
        .map((section) => (
          <FinalCta
            key={section.id}
            id="claim-bonusku"
            ctaTxt="Order Copywriting"
            title={section.title}
            headAlign={false}
            bg={`py-20 bg-slate-900 ${landingPageStyle.bg1}`}
            description={section.description}
            btn={1}
            ctaTxt1="Dapatkan Bonus"
            ctaTxt2="Konsultasi"
            btnUrl1="#layanan"
            btnUrl2="#ok"
            mtTop="mt-20"
            rounded="none"
            btnStyle="animate-bounce"
          >
            <CountdownMini targetDate={counter} />
          </FinalCta>
        ))}
    </Content>
  );
}

// i change the token
