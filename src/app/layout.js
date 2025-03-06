import localFont from "next/font/local";
import "./globals.css";
import HeadMetaData from "./component/global/headMetaData";
import { WebVitals } from "./component/global/WebVitals";

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
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-base-100 text-base-content">
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
