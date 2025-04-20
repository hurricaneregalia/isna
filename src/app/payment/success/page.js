"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CanvasCursor from "@/app/component/canvasCursor/CanvasCursor";
import InvoiceBody from "./invoiceBody";
import axios from "axios";
import Loading from "@/app/loading";
import InvoiceHead from "./invoiceHead";

const BASE_URL = process.env.NODE_ENV === "production" ? process.env.BASE_URL_PROD : process.env.NEXT_PUBLIC_BASE_URL;

async function getSiteIdentity() {
  try {
    const res = await axios.get(`${BASE_URL}/api/siteidentity`);
    return res.data.siteIdentities[0];
  } catch (err) {
    console.error("Failed to fetch site identity:", err);
    return null;
  }
}

export default function PaymentSuccessClient() {
  const params = useSearchParams();
  const [urlWithoutLongTime, setUrlWithoutLongTime] = useState("");
  const [siteIdentity, setSiteIdentity] = useState(null);

  const orderId = params.get("order_id");
  const transactionId = params.get("transaction_id");
  const paymentType = params.get("payment_type");
  const bank = params.get("bank");
  const vaNumber = params.get("va_number");
  const service = params.get("service");
  const desc = params.get("desc");
  const waNumber = params.get("waNumber");
  const longTime = params.get("longTime");
  const price = params.get("price");
  const date = params.get("date");
  const orderBy = params.get("orderby");

  useEffect(() => {
    console.log("BASE_URL:", BASE_URL); // debug
    const fetchSiteIdentity = async () => {
      const identity = await getSiteIdentity();
      setSiteIdentity(identity);
    };

    fetchSiteIdentity();

    const query = new URLSearchParams(window.location.search);
    query.delete("transaction_id");
    query.delete("longTime");
    query.delete("desc");
    query.delete("waNumber");
    query.delete("payment_type");
    query.delete("bank");
    query.delete("va_number");

    setUrlWithoutLongTime(`${window.location.origin}${window.location.pathname}?${query.toString()}`);
  }, []);

  useEffect(() => {
    if (!siteIdentity) return;

    const metadata = [
      // SEO Metadata
      { name: "description", content: `INVOICE pembayaran ${service}` },
      { name: "keywords", content: "invoice, copywriting, pembayaran, transaksi" },
      { name: "author", content: siteIdentity.siteName || "Admin" },

      // Open Graph (OG) Metadata
      { property: "og:title", content: `${longTime ? "Proses pembayaran " : "INVOICE "} - ${orderBy}` },
      { property: "og:description", content: `Terima kasih ${orderBy}, proses pembayaran layanan ${service} telah selesai.` },
      { property: "og:image", content: `${BASE_URL}/images/payment/ogImage-invoice-success.webp` },
      { property: "og:type", content: "website" },
      { property: "og:url", content: urlWithoutLongTime },
      { property: "og:site_name", content: siteIdentity.siteName },

      // Twitter Card Metadata
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${longTime ? "Proses pembayaran " : "INVOICE "} - ${orderBy}` },
      { name: "twitter:description", content: `Terima kasih ${orderBy}, proses pembayaran layanan ${service} telah selesai.` },
      { name: "twitter:image", content: `${BASE_URL}/images/payment/ogImage-invoice-success.webp` },

      // Robots Meta Tag
      { name: "robots", content: "index, follow" },

      // Other Metadata
      { name: "category", content: "Product" },
      { name: "referrer", content: "no-referrer" }, // Untuk meningkatkan privasi dan keamanan
    ];

    metadata.forEach(({ name, property, content }) => {
      const metaTag = document.querySelector(`meta[${name ? `name='${name}'` : `property='${property}'`}]`) || document.createElement("meta");
      if (name) metaTag.setAttribute("name", name);
      if (property) metaTag.setAttribute("property", property);
      metaTag.setAttribute("content", content);
      document.head.appendChild(metaTag);
    });

    const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
    favicon.setAttribute("rel", "icon");
    favicon.setAttribute("href", siteIdentity.siteFaviconUrl || "/favicon.ico");
    document.head.appendChild(favicon);

    document.title = `${longTime ? "Proses pembayaran " : "INVOICE "} - ${orderBy}`;
  }, [siteIdentity]);

  if (!siteIdentity) return <Loading />;

  return (
    <div className="p-4 max-w-xl mx-auto bg-white shadow rounded-md">
      <h1 className={`text-xl font-bold ${longTime ? null : "text-green-600"} mb-4`}>
        {longTime ? "Pembayaran sedang diproses" : "✅ Pembayaran Berhasil!"}
      </h1>
      {longTime ? null : <SuccessInfo orderId={orderId} layanan={service} price={price.toLocaleString("id-ID")} date={date} orderBy={orderBy} />}
      {longTime ? (
        <WhatsappBtn
          waText={"KIRIM PESAN INI\n" + desc + "\n" + "INVOICE\n" + urlWithoutLongTime}
          waBtnText="kirim"
          waNumber={waNumber}
          btnCenter={true}
          isInternalLink={false}
        />
      ) : null}
      test
      {longTime ? <p>long time: {longTime}</p> : null}
    </div>
  );
}
