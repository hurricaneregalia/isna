import localFont from "next/font/local";
import "./globals.css";
import HeadMetaData from "./component/global/headMetaData";
import { WebVitals } from "./component/global/WebVitals";
import Head from "next/head"; // Import Head dari next/head

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

export const metadata = {
  title: "Isna Project",
  description: "Get high-quality copywriting services for your website. Improve your content with experts.",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Kalamanacopy", url: "https://kalamanacopy.vercel.app" }],
  creator: "Kalamanacopy",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "copywriting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-base-200 text-base-content">
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
