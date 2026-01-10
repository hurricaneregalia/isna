import "./globals.css";
import { WebVitals } from "./component/global/WebVitals";
import { Roboto } from "next/font/google";

import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth" data-theme="exalvia">
      <body className={`min-h-screen bg-base-200 text-base-content ${roboto.className}`}>
        <Script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY} strategy="afterInteractive" />
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
