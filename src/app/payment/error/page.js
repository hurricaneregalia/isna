// src/app/payment/error/page.js
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { FormatTanggal } from "@/app/component/global/formatTanggal";
import CanvasCursor from "@/app/component/canvasCursor/CanvasCursor";
import fs from "fs/promises";
import path from "path";
import Loading from "@/app/loading";

// Fungsi untuk membaca site identity dari file JSON
async function getSiteData() {
  try {
    const filePath = path.join(process.cwd(), "src/app/api/datajs/siteidentity/data.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    return data?.[0] || null;
  } catch (e) {
    console.error("❌ Gagal membaca site identity dari file:", e.message);
    return null;
  }
}

export async function generateMetadata() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const ogImageUrl = `${BASE_URL}/images/payment/ogImage-invoice-error.webp`;
  const siteData = await getSiteData();
  if (!siteData) return {};

  const title = `${siteData.siteName} | Pembayaran Gagal`;

  return {
    title,
    description: "Transaksi Anda gagal. Silakan coba lagi atau hubungi admin.",
    openGraph: {
      title,
      description: "Transaksi Anda gagal. Silakan coba lagi atau hubungi admin.",
      url: `${BASE_URL}/payment/error`,
      siteName: siteData.siteName,
      images: [ogImageUrl],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "Transaksi Anda gagal. Silakan coba lagi atau hubungi admin.",
      images: [ogImageUrl],
    },
    icons: {
      icon: siteData.faviconUrl || "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PaymentErrorPage() {
  const siteData = await getSiteData();

  if (!siteData) {
    return <Loading />;
  }

  return (
    <>
      <div className="min-h-full">
        <div className="w-full h-full grid place-items-center p-6 sm:py-32 lg:px-8">
          <div className="bg-base-100 sm:rounded-bl-4xl rounded-bl-3xl lg:w-10/12 sm:w-8/12 w-full lg:pb-0 sm:pb-10 pb-5 grid overflow-hidden">
            {/* LEFT SIDE */}
            <div className="lg:p-20 sm:p-10 p-5 bg-red-900 sm:rounded-bl-4xl rounded-bl-3xl overflow-hidden">
              <div className="relative text-nowrap">
                <p className="rotate-90 text-red-800/70 origin-left text-9xl absolute uppercase lg:-ms-8 lg:-mt-38 sm:ms-2 sm:-mt-28 -mt-23 ms-5">
                  GAGAL GAGAL
                </p>
              </div>

              <div className="flex justify-between">
                <Link href="/" className="flex items-center gap-1">
                  <Image src={siteData.logoUrl} alt={`${siteData.siteName} logo`} width={20} height={20} className="w-5 h-5" />
                  <span className="font-bold capitalize text-neutral-content hover:text-amber-300">{siteData.siteName}</span>
                </Link>
                <span className="p-2 py-1 rounded-sm inline font-bold bg-red-200 text-red-600">Gagal</span>
              </div>

              <div className="text-8xl text-center flex justify-center items-center mx-auto rounded-full border-5 w-30 h-30 my-10 text-red-500 border-red-500">
                <IoMdClose />
              </div>

              <div className="p-4 max-w-xl mx-auto rounded-md pb-0 text-center">
                <div className="border rounded-xl py-5 border-dashed border-red-400 relative z-2">
                  <h1 className="text-4xl font-bold text-red-500 mb-4">Pembayaran Gagal</h1>
                  <p className="text-sm text-red-200">Kami tidak dapat memproses transaksi Anda.</p>
                  <p className="text-sm mt-2 text-slate-200">Silakan coba lagi atau hubungi admin.</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:px-20 sm:px-10 px-5 mt-5 flex flex-col">
              <div className="p-4 mx-auto w-full">
                <div className="grid grid-cols-1 w-full">
                  <div className="flex justify-between py-4">
                    <p>Status</p>
                    <p className="font-bold text-red-500">Transaksi Gagal</p>
                  </div>
                  <div className="flex justify-between border-dashed border-red-400 border-t py-4">
                    <p>Tanggal</p>
                    <p className="font-bold text-end">{FormatTanggal(new Date().toISOString())}</p>
                  </div>
                </div>
              </div>

              <div className="w-full mt-auto lg:mb-20">
                <p className="bg-red-100/70 text-red-700 p-4 rounded-xl text-sm">
                  Mohon maaf, transaksi tidak berhasil. Jangan tutup aplikasi ini jika Anda ingin mencoba kembali atau hubungi kami melalui WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CanvasCursor />
    </>
  );
}
