"use client";
import { useEffect, useState } from "react";
import Head from "next/head";

const GenerateMetaDataClient = ({ api, id }) => {
  const [metaData, setMetaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        const meta = data.metaDatas.find((item) => item.id === id);
        setMetaData(meta);
      } catch (error) {
        console.error("Error fetching metadata:", error);
      }
    };

    fetchData();
  }, [api, id]);

  if (!metaData) return null;

  return (
    <Head>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.desc} />
      <meta name="keywords" content={metaData.keywords} />
      <meta name="author" content={metaData.author} />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.desc} />
      <meta property="og:image" content={metaData.ogImage} />
      <meta name="robots" content={metaData.index ? "index" : "noindex"} />
      <meta name="robots" content={metaData.follow ? "follow" : "nofollow"} />
    </Head>
  );
};

export default GenerateMetaDataClient;
