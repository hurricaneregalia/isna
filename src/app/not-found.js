"use client";
import { useRouter } from "next/navigation";
import { GiGroundbreaker } from "react-icons/gi";
import CanvasCursor from "./component/canvasCursor/CanvasCursor";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import WhatsappBtn from "./component/global/whatsappBtn";

export default function NotFound() {
  const router = useRouter();
  const back = () => {
    router.back();
  };

  const [data, setData] = useState({
    siteIdentities: null,
    loading: true,
    error: null,
  });

  // Fungsi untuk mengambil data
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/lokal");
      setData({
        siteIdentities: response.data.siteIdentities[0] || null,
        loading: false,
        error: null,
      });
    } catch (err) {
      setData({
        ...data,
        loading: false,
        error: err.message || "Terjadi kesalahan",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-full h-screen notFoundBg">
      <div className="w-full h-full grid  place-items-center  bg-slate-900 bg-opacity-80 px-6 py-24 sm:py-32 lg:px-8 ">
        <CanvasCursor />
        <div className="text-center flex flex-col items-center justify-center ">
          <GiGroundbreaker className="text-9xl text-base-300 text-center" />
          <p className="text-base font-semibold text-amber-300">- 404 -</p>
          <h1 className="mt-4 text-neutral-content text-balance text-5xl font-semibold tracking-tight sm:text-7xl">Page not found</h1>
          <p className="mt-6 text-neutral-content text-pretty text-lg font-medium sm:text-xl/8">Sorry, we couldnt find the page youre looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              className="px-5 text-sm font-semibold shadow-sm btn bg-amber-300 hover:bg-amber-500 border-0 text-slate-900 rounded-full"
              onClick={back}
            >
              <FaArrowLeft /> Back
            </button>
            <WhatsappBtn
              waBtnText={data.siteIdentities?.contactPhone || "Loading..."}
              waNumber={data.siteIdentities?.contactPhone || "Loading..."}
              waText=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
