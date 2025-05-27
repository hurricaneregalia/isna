// src/app/not-found.js
import { GiGroundbreaker } from "react-icons/gi";
import Head from "next/head";
import WhatsappBtn from "./component/global/whatsappBtn";
import CanvasCursor from "./component/canvasCursor/CanvasCursor";
import BackButton from "./component/global/backButton";
import myPrisma from "./lib/prisma";

async function getSiteData() {
  try {
    const siteData = await myPrisma.siteIdentity.findFirst();

    // Jika tidak ada data siteIdentity ditemukan, lempar error
    if (!siteData) {
      throw new Error("Data siteIdentity tidak ditemukan");
    }

    return siteData;
  } catch (error) {
    // Menangani kesalahan dan menampilkan pesan error di konsol
    console.error("❌ Prisma error:", error.message);
    return null; // Mengembalikan null jika terjadi kesalahan
  }
}

export default async function NotFoundPage() {
  const siteData = await getSiteData(); // Mendapatkan data dari getSiteData

  // Jika siteData tidak ditemukan atau ada error, tampilkan halaman fallback
  if (!siteData) {
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
                <WhatsappBtn waBtnText="" waNumber="Nomor tidak tersedia" waText="" forWa={true} />
              </div>
            </div>
          </div>
        </main>
        <CanvasCursor />
      </>
    );
  }

  // Jika siteData ada, lanjutkan dengan konten halaman
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
