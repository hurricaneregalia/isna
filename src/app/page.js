"use client";
import { useEffect, useState } from "react";
import HeaderFooter from "./component/global/headerFooter";
import { useSiteIdentity } from "./component/global/siteIdentityContext";
import LayoutLandingPage from "./component/landingPage/layoutLandingPage";
import Loading from "./component/global/loading"; // Pastikan Anda mengimpor komponen Loading
import Head from "next/head"; // Impor Head untuk mengatur metadata

export default function Home() {
  const { siteIdentity } = useSiteIdentity();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // Gunakan useEffect untuk menunggu data siteIdentity
  useEffect(() => {
    if (siteIdentity) {
      console.log("Data siteIdentity sudah tersedia:", siteIdentity);
      setIsDataLoaded(true); // Tandai bahwa data sudah terisi
    } else {
      console.log("siteIdentity belum tersedia, menunggu...");
    }
  }, [siteIdentity]);

  // Jika data belum ada, tampilkan Loading
  if (!isDataLoaded) {
    console.log("Menunggu siteIdentity untuk memuat...");
    return <Loading />; // Menampilkan loading sementara
  }

  // Pastikan HeaderFooter menerima props yang aman
  console.log("Rendering HeaderFooter dengan siteIdentity:", siteIdentity);

  return (
    <>
      <head>
        <title>{siteIdentity.siteName}</title>
        <meta name="description" content={siteIdentity.description} />
      </head>

      <HeaderFooter siteName={siteIdentity?.siteName} copyright={siteIdentity?.footer?.copyright}>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <LayoutLandingPage />
        </main>
      </HeaderFooter>
    </>
  );
}
