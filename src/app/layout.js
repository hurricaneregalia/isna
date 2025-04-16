import localFont from "next/font/local";
import "./globals.css";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-base-200 text-base-content patternKalmaanaLight">
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
