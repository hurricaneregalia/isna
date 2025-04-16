import HeaderFooterSqlite from "./component/global/headerFooterSqlite";
import LayoutLandingPage from "./component/landingPage/layoutLandingPage";

const BASE_URL = process.env.NODE_ENV === "production" ? process.env.BASE_URL_PROD : process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata() {
  const res = await fetch(`${BASE_URL}/api/metadata`, { cache: "no-store" });
  const data = await res.json();

  const meta = data.metaDatas.find((item) => item.id === 4); // ID metadata

  if (!meta) return {};

  return {
    title: `Home | ${meta.title}`,
    description: meta.desc,
    keywords: meta.keywords,
    authors: [{ name: meta.author }],
    applicationName: "identity.siteName",
    generator: "Next.js",
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: meta.slug,
    },
    openGraph: {
      title: meta.title,
      description: meta.desc,
      url: "identity.siteUrl",
      siteName: "identity.siteName",
      images: meta.ogImage
        ? [
            {
              url: meta.ogImage,
              width: 1200,
              height: 630,
              alt: meta.title,
            },
          ]
        : [],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.desc,
      creator: meta.author,
      images: [meta.ogImage],
    },
    robots: {
      index: meta.index,
      follow: meta.follow,
      nocache: false,
    },
    category: meta.category,
  };
}

export default async function Home() {
  const res = await fetch(`${BASE_URL}/api/siteidentity`, { cache: "no-store" });
  const data = await res.json();

  const identity = data.siteIdentities?.[0];

  if (!identity) {
    return <p>Data site identity tidak ditemukan.</p>;
  }

  return (
    <HeaderFooterSqlite siteName={identity.siteName} footerText={identity.siteCopyright}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <LayoutLandingPage />
      </main>
    </HeaderFooterSqlite>
  );
}
