import HeaderFooter from "./component/global/headerFooter";
import HeaderFooterSqlite from "./component/global/headerFooterSqlite";
import LayoutLandingPage from "./component/landingPage/layoutLandingPage";

export default function Home({ siteName, copyright }) {
  return (
    <HeaderFooterSqlite siteName={siteName} copyright={copyright}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <LayoutLandingPage />
      </main>
    </HeaderFooterSqlite>
  );
}
