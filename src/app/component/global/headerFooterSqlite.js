"use client";
import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import Loading from "./loading";

export default function HeaderFooterSqlite({ children, copyright }) {
  const [data, setData] = useState({
    siteIdentities: null,
  });

  // Fungsi untuk mengambil data
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/lokal");
      setData({
        siteIdentities: response.data.siteIdentities[0] || null,
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
  if (!data.siteIdentities) return <Loading />;
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header siteName={data.siteIdentities.siteName} />
        {children}
        <Footer footerText={data.siteIdentities.siteCopyright} siteName={data.siteIdentities.siteName} />
      </div>
    </>
  );
}
