import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { FormatTanggal } from "@/app/component/global/formatTanggal";
import CanvasCursor from "@/app/component/canvasCursor/CanvasCursor";
import CopyableText from "@/app/component/global/copyableText";
import Loading from "./loading";
import LinkAuto from "@/app/component/global/linkAuto";
import fs from "fs/promises";
import path from "path";

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

export async function generateMetadata(props) {
  const searchParams = await props.searchParams;
  const { service, longTime, orderby, order_id } = searchParams;

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const ogImageUrl = `${BASE_URL}/images/payment/ogImage-invoice-success.webp`;
  const url = `${BASE_URL}/payment/success?order_id=${order_id}`;

  const siteData = await getSiteData();
  if (!siteData) return {};

  const title = `${siteData.siteName} | INVOICE  ${service ? service : ""}`;

  return {
    title,
    description: `INVOICE pembayaran ${service}`,
    keywords: ["invoice", "copywriting", "pembayaran", "transaksi"],
    authors: [{ name: siteData.siteName || "Admin" }],
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title,
      description: "Terima kasih, proses pembayaran layanan Anda telah selesai.",
      url,
      siteName: siteData.siteName,
      images: [ogImageUrl],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "Terima kasih, proses pembayaran layanan Anda telah selesai.",
      images: [ogImageUrl],
    },
    icons: {
      icon: siteData.faviconUrl || "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      category: "Product",
      referrer: "no-referrer",
    },
  };
}

export default async function PaymentSuccessPage(props) {
  const searchParams = await props.searchParams;
  const { order_id, transaction_id, payment_type, bank, va_number, service, desc, waNumber, longTime, price, date, orderby, sapaan } = searchParams;

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const siteData = await getSiteData();

  if (!siteData) {
    return <Loading />;
  }

  const query = new URLSearchParams({
    order_id,
    date,
    service,
    price,
    sapaan,
    orderby,
  }).toString();

  const waText = `KIRIM PESAN INI\n${desc}\n\nINVOICE\n${BASE_URL}/payment/success?${query}`;

  return (
    <>
      <div className="min-h-full">
        <div className="w-full h-full grid place-items-center p-6 sm:py-32 lg:px-8">
          <div className="bg-base-100 sm:rounded-bl-4xl rounded-bl-3xl lg:w-10/12 sm:w-8/12 w-full lg:pb-0 sm:pb-10 pb-5 lg:grid-cols-2 grid-cols-1 grid overflow-hidden">
            {/* LEFT SIDE */}
            <div className="lg:p-20 sm:p-10 p-5 bg-slate-900 sm:rounded-bl-4xl rounded-bl-3xl overflow-hidden">
              <div className="relative text-nowrap">
                <p className="rotate-90 text-slate-800/70 origin-left text-9xl absolute uppercase lg:-ms-8 lg:-mt-38 sm:ms-2 sm:-mt-28 -mt-23 ms-5">
                  {longTime ? "PROSES PROSES" : "LUNAS LUNAS"}
                </p>
              </div>

              <div className="flex justify-between">
                <div className="relative z-10">
                  <Link href="/" className="flex items-center gap-1">
                    <Image src={siteData.logoUrl} alt={`${siteData.siteName} logo`} width={20} height={20} className="w-5 h-5" />
                    <span className="font-bold capitalize text-neutral-content hover:text-amber-300">{siteData.siteName}</span>
                  </Link>
                </div>
                <p>
                  <span
                    className={`p-2 py-1 rounded-sm inline font-bold ${longTime ? "bg-amber-200 text-amber-600" : "bg-green-100 text-green-500"}`}
                  >
                    {longTime ? "Proses" : "LUNAS"}
                  </span>
                </p>
              </div>

              <div
                className={`text-8xl text-center flex justify-center items-center mx-auto rounded-full border-5 w-30 h-30 my-10 ${
                  longTime ? "text-slate-400 border-slate-400" : "text-green-500 border-green-500"
                }`}
              >
                {longTime ? (
                  <div className="ini-okeh-paling-tepat tanpa-metadata">
                    <LinkAuto longTime={longTime} waNo={siteData.phone} linkTarget={waText} />
                  </div>
                ) : (
                  <IoMdCheckmark />
                )}
              </div>

              <div className="p-4 max-w-xl mx-auto rounded-md pb-0">
                <div className="text-center mb-10 border rounded-xl py-5 border-dashed border-slate-400 z-2 relative">
                  <h1 className={`text-4xl font-bold ${longTime ? "text-slate-400" : "text-green-500"} mb-4`}>Rp. {price}</h1>
                  <div className="text-slate-400">
                    <CopyableText orderId={order_id} cssStyle="bg-slate-700" />
                    <p className="text-xs">Waktu pembayaran: {longTime ? "Loading..." : FormatTanggal(date)}</p>
                    <p className="mt-3">{longTime ? "INVOICE Anda sedang diproses" : "✅ Pembayaran Berhasil!"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:px-20 sm:px-10 px-5 mt-5 flex flex-col">
              <div className="p-4 mx-auto w-full">
                <div className="grid grid-cols-1 w-full">
                  <div className="flex justify-between py-4">
                    <p>Order ID</p>
                    <CopyableText orderId={order_id} cssStyle="bg-base-300" />
                  </div>
                  <div className="flex justify-between border-dashed border-slate-400 border-t py-4">
                    <p>Waktu pembayaran</p>
                    <p className="font-bold capitalize text-end">{longTime ? "Loading..." : FormatTanggal(date)}</p>
                  </div>
                  <div className="flex justify-between border-dashed border-slate-400 border-t py-4">
                    <p>Klien</p>
                    <p className="font-bold capitalize text-end">
                      {sapaan} {orderby}
                    </p>
                  </div>
                  <div className="flex justify-between border-dashed border-slate-400 border-t py-4">
                    <p>Layanan</p>
                    <p className="font-bold text-end">{service}</p>
                  </div>
                  <div className="flex justify-between border-dashed border-slate-400 border-t py-4">
                    <p>Harga</p>
                    <p className="font-bold text-end">{price}</p>
                  </div>
                </div>
              </div>

              <div className="w-full mt-auto lg:mb-20">
                <p className="bg-base-200/70 p-4 rounded-xl">
                  {longTime ? (
                    "INVOICE Anda sedang diproses. Jangan menutup aplikasi!"
                  ) : (
                    <>
                      Terima kasih, pembayaran Anda telah selesai. Semoga Allah melimpahkan banyak berkah untuk bisnis{" "}
                      <span className="capitalize">
                        {sapaan} {orderby}
                      </span>
                      , aamiiin 🤲.
                    </>
                  )}
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
