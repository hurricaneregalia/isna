import localFont from "next/font/local";
import "./globals.css";
import { fetchSiteIdentity } from "./firebase/readData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export async function generateMetadata() {
  try {
    const siteIdentity = await fetchSiteIdentity();

    return {
      title: `${siteIdentity.siteName} - ${siteIdentity.tagline || "Welcome"}`,
      description: siteIdentity.description,
      icons: {
        icon: [{ url: "/favicon.ico" }],
        apple: [{ url: "/favicon.ico" }],
      },
      manifest: "/site.webmanifest",
      openGraph: {
        title: siteIdentity.siteName,
        description: siteIdentity.description,
        siteName: siteIdentity.siteName,
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Website Title",
      description: "Website Description",
      icons: {
        icon: "/favicon.ico",
      },
    };
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-base-100 text-base-content">{children}</body>
    </html>
  );
}
