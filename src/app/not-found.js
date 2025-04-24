"use client";
import { useRouter } from "next/navigation";
import { GiGroundbreaker } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa6";
import axios from "axios";
import { useEffect, useState } from "react";
import WhatsappBtn from "./component/global/whatsappBtn";
import Head from "next/head";
import CanvasCursor from "./component/canvasCursor/CanvasCursor";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function NotFound() {
  const router = useRouter();
  const [siteData, setSiteData] = useState(null);
  const [error, setError] = useState(null);

  const back = () => {
    router.back();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/siteidentity`);
        setSiteData(res.data);
      } catch (err) {
        console.error("Failed to fetch site identity:", err);
        setError("Gagal memuat data.");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

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
              <button
                className="px-5 text-sm font-semibold shadow-xs btn bg-amber-300 hover:bg-amber-500 border-0 text-slate-900 rounded-full"
                onClick={back}
              >
                <FaArrowLeft /> Back
              </button>
              <WhatsappBtn waBtnText="" waNumber={siteData?.phone || "Loading..."} waText="" forWa={true} />
            </div>
          </div>
        </div>
      </main>
      <CanvasCursor />
    </>
  );
}
