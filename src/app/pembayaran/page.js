"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ExalviaNavbar from "../exalvia/sections/ExalviaNavbar";
import ExalviaFooter from "../exalvia/sections/ExalviaFooter";
import data from "../exalvia/database/ExalviaDatabase";
import {
  IoCheckmarkCircle,
  IoTime,
  IoCloseCircle,
  IoReceiptOutline,
  IoCalendarOutline,
  IoCardOutline,
  IoWalletOutline,
  IoCopyOutline,
  IoPricetagOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import ExalviaLinkButton from "../exalvia/ui-components/ExalviaLinkButton";
import HeaderFooterClient from "../component/global/HeaderFooterClient";
import HeroBrandChecker from "../exalvia/brand-checker/HeroBrandChecker";

function PembayaranContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  const urlStatus = searchParams.get("status");
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopyOrderId = () => {
    const idToCopy = orderId?.split("-")[1] || orderId;
    navigator.clipboard.writeText(idToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    async function fetchTransactionDetails() {
      if (!orderId) {
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`/api/transaction?order_id=${orderId}`);
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error("Error fetching transaction details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTransactionDetails();
  }, [orderId]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    try {
      // dateString format: "2026-01-10 11:25:14"
      const [datePart, timePart] = dateString.split(" ");
      const [year, month, day] = datePart.split("-");
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
      const monthIndex = parseInt(month, 10) - 1;
      const shortYear = year.slice(-2);
      return `${day} ${monthNames[monthIndex]} ${shortYear}  ${timePart}`;
    } catch (e) {
      return dateString;
    }
  };

  const getStatusDisplay = () => {
    const status = details?.transaction_status || urlStatus;
    switch (status) {
      case "settlement":
      case "capture":
      case "success":
        return {
          icon: <IoCheckmarkCircle className="text-success text-6xl mx-auto" />,
          title: "Pembayaran Berhasil!",
          message: `Terima kasih! Pembayaran untuk pesanan ${orderId} telah kami terima.`,
          color: "text-success",
          statusLabel: "Terverifikasi",
        };
      case "pending":
        return {
          icon: <IoTime className="text-warning text-6xl mx-auto" />,
          title: "Menunggu Pembayaran",
          message: `Pesanan ${orderId} sedang menunggu pembayaran. Mohon selesaikan pembayaran Anda sesuai instruksi.`,
          color: "text-warning",
          statusLabel: "Tertunda",
        };
      case "expire":
      case "cancel":
      case "deny":
      case "error":
        return {
          icon: <IoCloseCircle className="text-error text-6xl mx-auto" />,
          title: "Pembayaran Gagal",
          message: `Maaf, pembayaran untuk pesanan ${orderId} gagal atau kedaluwarsa.`,
          color: "text-error",
          statusLabel: "Gagal / Batal",
        };
      default:
        return {
          icon: <IoTime className="text-primary text-6xl mx-auto" />,
          title: "Status Transaksi",
          message: orderId ? `Memeriksa status untuk pesanan ${orderId}...` : "Informasi pesanan tidak ditemukan.",
          color: "text-primary",
          statusLabel: "Memproses",
        };
    }
  };

  const statusInfo = getStatusDisplay();

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-warning"></div>
      </div>
    );
  }

  return (
    <>
      <HeroBrandChecker headline="Cek Brand Selesai!" secId="brand-checker-result" backgroundImage={data.pagesResult.heroImage}>
        <div className="w-full mx-4 relative overflow-hidden flex flex-col items-start gap-12 text-left">
          <div className="flex flex-col items-center text-center w-full py-8">
            <div className="relative mb-8 border-3 border-success rounded-full p-2">{statusInfo.icon}</div>

            <div className="flex-1 relative flex flex-col items-center max-w-2xl px-4">
              {/* Order ID Badge */}
              <div
                onClick={handleCopyOrderId}
                className={`group badge badge-lg py-5 px-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6 font-bold uppercase tracking-[0.2em] text-[10px] cursor-pointer transition-all active:scale-95 hover:bg-white/10 hover:border-white/40 flex items-center gap-2.5 ${
                  copied ? "bg-accent text-accent-content border-accent" : "text-white/70"
                }`}
                title="Click to copy"
              >
                {copied ? (
                  <span className="animate-in fade-in zoom-in duration-300 text-success">Copied to Clipboard!</span>
                ) : (
                  <>
                    <span className="opacity-60 italic normal-case font-medium tracking-normal mr-1">Order ID</span>
                    {orderId}
                    <IoCopyOutline className="text-xs group-hover:scale-110 transition-transform" />
                  </>
                )}
              </div>

              {/* Status Title */}
              <h1 className={`text-4xl md:text-6xl uppercase mb-4 ${statusInfo.color} tracking-tight leading-tight drop-shadow-sm`}>{statusInfo.title}</h1>

              {/* Transaction Date */}
              <div className="text-white/50 flex items-center gap-2 mb-10 font-medium text-sm md:text-base bg-white/5 py-2 px-4 rounded-full border border-white/5">
                <IoCalendarOutline />
                <span>{formatDate(details?.transaction_time)}</span>
              </div>

              {/* Total Amount Section */}
              <div className="flex flex-col items-center gap-1 group">
                <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white/30 group-hover:text-white/50 transition-colors">Pembayaran</span>
                <p className="text-2xl md:text-4xl  text-white tracking-tighter drop-shadow-md">{details ? formatCurrency(details.gross_amount) : "-"}</p>
              </div>
            </div>
          </div>
          {/* Decorative Gradient Accent */}
          <div className={`absolute top-0 right-0 w-64 h-64 blur-3xl opacity-10 pointer-events-none -mr-32 -mt-32 rounded-full ${statusInfo.color.replace("text-", "bg-")}`} />
          <div className="flex-1 flex flex-col items-start w-full mt-10">
            <div className="w-full flex flex-col gap-8">
              {/* Header Section */}

              {/* Details & Actions Grid */}
              <div className="grid grid-cols-1 gap-2 mb-4">
                {/* Detailed Invoice Card */}
                <div className="bg-base-100 rounded-4xl rounded-tr-none border border-base-300 p-8 shadow-none">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-base-content ">
                    <h3 className="text-xl font-bold flex items-center gap-3">Rincian Transaksi</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-x-12 gap-y-8 mt-10">
                    <div className="border-b border-base-content/20 pb-2 border-dashed">
                      <span className="opacity-40 flex items-center gap-1.5">
                        <IoWalletOutline className="text-xs" /> Layanan
                      </span>
                      <span className="text-base-content">{data.brandCheckerPackages.recommended.find((p) => p.price === Number(details?.gross_amount))?.name || "Service Pack"}</span>
                    </div>

                    <div className="border-b border-base-content/20 pb-2 border-dashed">
                      <span className="opacity-40 flex items-center gap-1.5">
                        <IoCardOutline className="text-xs" /> Pembayaran
                      </span>
                      <span className="uppercase">{details?.payment_type?.replace(/_/g, " ") || "-"}</span>
                    </div>

                    <div className="border-b border-base-content/20 pb-2 border-dashed">
                      <span className="opacity-40 flex items-center gap-1.5">
                        <IoPricetagOutline className="text-xs" /> Diskon
                      </span>
                      <span className="text-success flex items-center gap-2">
                        - {formatCurrency(0)}
                        <div className="badge badge-success badge-outline badge-sm text-sm font-bold uppercase tracking-tighter">No Promo</div>
                      </span>
                    </div>

                    <div>
                      <span className="opacity-40 flex items-center gap-1.5">
                        <IoCalendarOutline className="text-xs" /> Waktu pembayaran
                      </span>
                      <span>{formatDate(details?.transaction_time)}</span>
                    </div>
                    <div className="border-t border-base-content ">
                      <div className="mt-5">
                        <p className="opacity-40 mb-1">Total</p>
                        <p className="text-xl font-bold tracking-tighter">{details ? formatCurrency(details.gross_amount) : "-"}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-2 p-8 bg-base-200 rounded-4xl rounded-tr-none border border-base-300 text-start ">
                  <p className="text-sm font-bold uppercase tracking-widest opacity-50 flex items-center mb-2 gap-2">
                    <IoShieldCheckmarkOutline /> Secure Payment
                  </p>
                  <p className="text-sm opacity-40">Transaksi dienkripsi dan diproses secara aman.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-primary text-center p-8 rounded-4xl rounded-tr-none flex flex-col items-center gap-6 text-white shadow-none">
                    <h4 className="text-xl font-bold leading-tight">Isi Formulir</h4>
                    <p className="text-sm opacity-80 font-medium">Klik tombol "Isi Formulir" untuk membuat rumusan pesan penjualan online yang tepat.</p>
                    <ExalviaLinkButton text="Isi Formulir" href="/form-data-brand" className="btn-warning btn-lg w-fit mx-auto animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroBrandChecker>
    </>
  );
}

export default function PembayaranPage() {
  return (
    <div className="bg-base-100 min-h-screen flex flex-col font-montserrat overflow-hidden">
      <ExalviaNavbar data={data.navbar} bgCustom="bg-trensparent" />
      <Suspense
        fallback={
          <div className="flex-1 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-warning"></div>
          </div>
        }
      >
        <PembayaranContent />
      </Suspense>
      <ExalviaFooter data={data.footer} secId="footer" />
      <HeaderFooterClient />
    </div>
  );
}
