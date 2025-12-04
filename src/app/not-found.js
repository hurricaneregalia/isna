// src/app/not-found.js
import { GiGroundbreaker } from "react-icons/gi";
import Head from "next/head";
import WhatsappBtn from "./component/global/whatsappBtn";
import CanvasCursor from "./component/canvasCursor/CanvasCursor";
import BackButton from "./component/global/backButton";
import fs from "fs/promises";
import path from "path";

// Fungsi untuk membaca siteIdentity.json secara dinamis
async function getSiteData() {
  try {
    const filePath = path.join(process.cwd(), "src/app/api/datajs/siteidentity/data.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);

    if (!data || !data.length) {
      throw new Error("Data siteIdentity kosong atau tidak ditemukan");
    }

    return data[0]; // Ambil elemen pertama
  } catch (error) {
    console.error("❌ File read error:", error.message);
    return null;
  }
}

export default async function NotFoundPage() {
  const siteData = await getSiteData();

  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="min-h-full h-screen notFoundBg">
        <div className="w-full h-full grid place-items-center bg-slate-900/80 px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center flex flex-col items-center justify-center">
            <GiGroundbreaker className="text-9xl text-base-300 text-center" />
            <p className="text-base font-semibold text-amber-300">- 404 -</p>
            <h1 className="mt-4 text-neutral-content text-balance text-5xl font-semibold tracking-tight sm:text-7xl">Page not found</h1>
            <p className="mt-6 text-neutral-content text-pretty text-lg font-medium sm:text-xl/8">
              Maaf, kami tidak menemukan halaman yang anda cari.
            </p>
            <div className="mt-10 flex items-center justify-center gap-3">
              <BackButton />
              <WhatsappBtn waBtnText="" waNumber={siteData?.phone || "Nomor tidak tersedia"} waText="" forWa={true} />
            </div>
          </div>
        </div>
      </main>
      <CanvasCursor />
    </>
  );
}
