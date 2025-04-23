import axios from "axios";
import HeaderFooterSqlite from "./component/global/headerFooterSqlite";
import Loading from "./loading";
import LayoutLandingPage from "./component/landingPage/layoutLandingPage";

const BASE_URL = process.env.NODE_ENV === "production" ? process.env.BASE_URL_PROD : process.env.NEXT_PUBLIC_BASE_URL;

export default async function HomePage() {
  let siteData = null;

  try {
    const res = await axios.get(`${BASE_URL}/api/siteidentity`);
    siteData = res.data;
  } catch (error) {
    console.error("Failed to fetch site identity:", error);
    return <div>Gagal memuat data.</div>;
  }

  return (
    <HeaderFooterSqlite siteName={siteData.siteName} footerText={siteData.phone}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <LayoutLandingPage />
      </main>
    </HeaderFooterSqlite>
  );
}
