import "./globals.css";
import { WebVitals } from "./component/global/WebVitals";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth" data-theme="light">
      <body className={`min-h-screen bg-base-200 text-base-content ${roboto.className}`}>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
