import HeaderFooterSqlite from "./component/global/headerFooterSqlite";
import LayoutLandingPage from "./component/landingPage/layoutLandingPage";

export const metadata = {
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function Home({ siteName, copyright }) {
  return (
    <HeaderFooterSqlite siteName={siteName} copyright={copyright}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <LayoutLandingPage />
      </main>
    </HeaderFooterSqlite>
  );
}
