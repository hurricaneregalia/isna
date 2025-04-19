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
    const siteIdentity = res.data.siteIdentities[0];
    return siteIdentity;
  } catch (err) {
    console.error("Failed to fetch site identity:", err);
    return null;
  }
}

export default function PaymentSuccessPage() {
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
    query.delete("siteName");
    query.delete("siteLogo");
    query.delete("siteLogoAlt");

    const finalUrl = `${window.location.origin}${window.location.pathname}?${query.toString()}`;
    setUrlWithoutLongTime(finalUrl);
  }, []);

  const [title, setTitle] = useState("INVOICE Pembelian Paket"); // Contoh judul
  useEffect(() => {
    const generateOgImage = (title) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Tentukan ukuran gambar
      canvas.width = 1200;
      canvas.height = 630; // Ukuran standar untuk OG image

      // Tentukan warna latar belakang dan teks
      ctx.fillStyle = "#555555"; // Warna latar belakang
      ctx.fillRect(0, 0, canvas.width, canvas.height); // Gambar latar belakang

      // Tentukan gaya teks
      ctx.fillStyle = "#FFFFFF"; // Warna teks
      ctx.font = "bold 48px Arial"; // Ukuran font
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Gambar teks (judul) di tengah gambar
      ctx.fillText(title, canvas.width / 2, canvas.height / 2);

      // Mengonversi canvas ke Data URL (gambar)
      return canvas.toDataURL("image/png");
    };

    // Dapatkan gambar OG sebagai Data URL
    const ogImageUrl = generateOgImage(title);

    // Pastikan siteIdentity sudah terisi sebelum mengubah metadata
    if (siteIdentity) {
      const metadata = {
        title: `${longTime ? "Proses pembayaran " : "INVOICE Pembayaran "} ${orderBy}`,
        desc: `Invoice pembelian paket ${service} oleh ${orderBy}`,
        keywords: [service],
        author: siteIdentity.siteName || "Default Author", // Fallback ke default jika null
        siteUrl: siteIdentity.siteUrl || "",
        metadataBase: new URL(siteIdentity.siteUrl || "https://contohsitus.com"),
        siteName: siteIdentity.siteName || "Default Site Name",
        ogImage: ogImageUrl,
        category: "copywriting",
        index: "index", // atau 'noindex'
        follow: "follow", // atau 'nofollow'
      };

      // Ubah <title>
      document.title = metadata.title;

      // Helper: fungsi bikin atau update tag
      const upsertMetaTag = (name, content, attr = "name") => {
        let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
        if (!tag) {
          tag = document.createElement("meta");
          tag.setAttribute(attr, name);
          document.head.appendChild(tag);
        }
        tag.setAttribute("content", content);
      };

      // Set metadata biasa
      upsertMetaTag("description", metadata.desc);
      upsertMetaTag("keywords", metadata.keywords.join(", "));
      upsertMetaTag("author", metadata.author);
      upsertMetaTag("robots", `${metadata.index}, ${metadata.follow}`);

      // Set Open Graph tags
      upsertMetaTag("og:title", metadata.title, "property");
      upsertMetaTag("og:description", metadata.desc, "property");
      upsertMetaTag("og:image", metadata.ogImage, "property");
      upsertMetaTag("og:url", metadata.siteUrl, "property");
      upsertMetaTag("og:site_name", metadata.siteName, "property");
      upsertMetaTag("og:type", "website", "property");

      // (Optional) Set kategori kalau kamu pakai custom meta
      upsertMetaTag("category", metadata.category);
    }
  }, [siteIdentity, orderBy, service, desc]);

  // ✅ Tambahkan pengecekan ini
  if (!siteIdentity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-full">
      <div className="w-full h-full grid place-items-center p-6 sm:py-32 lg:px-8">
        <CanvasCursor />
        <div className="bg-base-100 sm:rounded-bl-4xl rounded-bl-3xl lg:w-10/12 sm:w-8/12 w-full lg:pb-0 sm:pb-10 pb-5 lg:grid-cols-2 grid-cols-1 grid overflow-hidden">
          <InvoiceHead
            longTime={longTime}
            siteLogo={siteIdentity.siteLogoUrl}
            siteName={siteIdentity.siteName}
            price={price}
            orderId={orderId}
            date={date}
          />

          <InvoiceBody
            orderId={orderId}
            longTime={longTime}
            orderBy={orderBy}
            service={service}
            price={price}
            desc={desc}
            urlWithoutLongTime={urlWithoutLongTime}
            waNumber={siteIdentity.contactPhone}
            date={date}
          />
        </div>
      </div>
    </div>
  );
}
