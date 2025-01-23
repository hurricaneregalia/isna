import localFont from "next/font/local";
import "./globals.css";
import { SiteIdentityProvider } from "./component/global/siteIdentityContext";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-base-100 text-base-content">
        <SiteIdentityProvider>{children}</SiteIdentityProvider>
      </body>
    </html>
  );
}
