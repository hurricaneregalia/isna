export async function GenerateMetadata({ title, desc, keywords, author, siteUrl, siteName, ogImage, category, index, follow }) {
  return {
    title,
    description: desc,
    keywords,
    authors: [{ name: author }],
    creator: author,
    applicationName: siteName,
    generator: "Next.js",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      title,
      description: desc,
      url: siteUrl,
      siteName,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      creator: author,
      images: [ogImage],
    },
    robots: {
      index: index,
      follow: follow,
      nocache: false,
    },
    themeColor: "#ffffff",
    colorScheme: "light",
    category: category,
  };
}
