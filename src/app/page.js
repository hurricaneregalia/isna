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
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/siteidentity`, { cache: "no-store" });
  const data = await res.json();

  const identity = data.siteIdentities?.[0]; // ambil data pertama

  if (!identity) {
    return <p>Data site identity tidak ditemukan.</p>;
  }

  return (
    <HeaderFooterSqlite siteName={identity.siteName} copyright={identity.siteCopyright}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <LayoutLandingPage />
      </main>
    </HeaderFooterSqlite>
  );
}
