import Head from "next/head";
import CanvasCursor from "../component/canvasCursor/CanvasCursor";
import { FaBan } from "react-icons/fa6";

const reasonMessages = {
  expired: "Periode promo sudah berakhir.",
  inactive: "Promo saat ini tidak tersedia.",
  unauthorized: "Anda tidak memiliki akses ke halaman tersebut.",
  unknown: "Terjadi kesalahan. Silakan coba lagi nanti.",
};

export default async function RedirectedPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const reason = resolvedSearchParams?.reason || "unknown";

  return (
    <>
      <Head>
        <title>403 - Tidak Bisa Claim Bonus!</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="min-h-full h-screen notFoundBg">
        <div className="w-full h-full grid place-items-center bg-slate-900/80 px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center flex flex-col items-center justify-center">
            <FaBan className="text-9xl text-base-300 text-center animate-bounce" />
            <p className="text-base font-semibold text-amber-300 my-10">- 403 -</p>
            <h1 className="text-neutral-content text-balance text-5xl font-semibold tracking-tight sm:text-7xl">Tidak Bisa Claim Bonus!</h1>
            <p className="mt-6 text-neutral-content text-pretty text-lg font-medium sm:text-xl/8">
              {reasonMessages[reason] || reasonMessages.unknown}
            </p>
          </div>
        </div>
      </main>
      <CanvasCursor />
    </>
  );
}
