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
          icon: <IoCheckmarkCircle className="text-success text-9xl mb-6 mx-auto" />,
          title: "Pembayaran Berhasil!",
          message: `Terima kasih! Pembayaran untuk pesanan ${orderId} telah kami terima.`,
          color: "text-success",
          statusLabel: "Terverifikasi",
        };
      case "pending":
        return {
          icon: <IoTime className="text-warning text-9xl mb-6 mx-auto" />,
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
          icon: <IoCloseCircle className="text-error text-9xl mb-6 mx-auto" />,
          title: "Pembayaran Gagal",
          message: `Maaf, pembayaran untuk pesanan ${orderId} gagal atau kedaluwarsa.`,
          color: "text-error",
          statusLabel: "Gagal / Batal",
        };
      default:
        return {
          icon: <IoTime className="text-primary text-9xl mb-6 mx-auto" />,
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
        <div className="border-2 border-white/50 rounded-3xl rounded-tr-none p-8 md:p-12 mx-4 relative overflow-hidden flex flex-col items-center gap-8 shadow-none text-center">
          <div className="relative">{statusInfo.icon}</div>
          <div className="flex-1 relative">
            <div
              onClick={handleCopyOrderId}
              className={`badge badge-lg badge-accent rounded-full badge-outline mb-4 mx-auto font-bold uppercase tracking-widest text-xs px-4 cursor-pointer hover:bg-accent hover:text-accent-content transition-all active:scale-95 flex items-center gap-2 ${
                copied ? "bg-accent text-accent-content" : ""
              }`}
              title="Click to copy"
            >
              {copied ? (
                "Copied!"
              ) : (
                <>
                  Order id: {orderId?.split("-")[1] || orderId}
                  <IoCopyOutline className="text-sm" />
                </>
              )}
            </div>
            <h1 className={`text-2xl md:text-4xl uppercase mb-4 ${statusInfo.color} tracking-tight`}>{statusInfo.title}</h1>
            <p className="text-white/80 mx-auto flex items-center gap-2 text-center justify-center">
              <IoCalendarOutline />
              {formatDate(details?.transaction_time)}
            </p>
            <p className="text-4xl  text-white tracking-tighter">{details ? formatCurrency(details.gross_amount) : "-"}</p>
          </div>
          {/* Decorative Gradient Accent */}
          <div className={`absolute top-0 right-0 w-64 h-64 blur-3xl opacity-10 pointer-events-none -mr-32 -mt-32 rounded-full ${statusInfo.color.replace("text-", "bg-")}`} />
        </div>
      </HeroBrandChecker>
      <div className="flex-1  px-5 flex flex-col items-center">
        <div className="lg:w-4/12 sm:w-8/12 w-full flex flex-col gap-8">
          {/* Header Section */}

          {/* Details & Actions Grid */}
          <div className="grid grid-cols-1 gap-2 mb-4">
            {/* Detailed Invoice Card */}
            <div className="bg-base-100 rounded-4xl rounded-tr-none border border-base-300 p-8 md:p-10 shadow-none">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-base-300 border-dashed">
                <h3 className="text-xl font-bold flex items-center gap-3">Rincian Transaksi</h3>
              </div>

              <div className="grid grid-cols-1 gap-x-12 gap-y-8 mt-10">
                <div className="flex flex-col gap-1">
                  <span className="text-sm uppercase font-black tracking-widest opacity-40 flex items-center gap-1.5">
                    <IoWalletOutline className="text-sm" /> Layanan
                  </span>
                  <span className="text-lg font-bold text-base-content">{data.brandCheckerPackages.recommended.find((p) => p.price === Number(details?.gross_amount))?.name || "Service Pack"}</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-sm uppercase font-black tracking-widest opacity-40 flex items-center gap-1.5">
                    <IoCardOutline className="text-sm" /> Metode Pembayaran
                  </span>
                  <span className="text-lg font-bold uppercase">{details?.payment_type?.replace(/_/g, " ") || "-"}</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-sm uppercase font-black tracking-widest opacity-40 flex items-center gap-1.5">
                    <IoPricetagOutline className="text-sm" /> Potongan Diskon
                  </span>
                  <span className="text-lg font-bold text-success flex items-center gap-2">
                    - {formatCurrency(0)}
                    <div className="badge badge-success badge-outline badge-sm text-sm font-bold uppercase tracking-tighter">No Promo</div>
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-sm uppercase font-black tracking-widest opacity-40 flex items-center gap-1.5">
                    <IoCalendarOutline className="text-sm" /> Waktu pembayaran
                  </span>
                  <span className="text-lg font-bold">{formatDate(details?.transaction_time)}</span>
                </div>
                <div className="border-t border-dashed">
                  <div className="mt-5">
                    <p className="text-sm uppercase font-black tracking-widest opacity-40 mb-1">Total yang Dibayarkan</p>
                    <p className="text-4xl font-black text-warning tracking-tighter">{details ? formatCurrency(details.gross_amount) : "-"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2 p-6 bg-base-200 rounded-4xl rounded-tr-none border border-base-300 ">
              <p className="text-sm font-bold uppercase tracking-widest opacity-50 flex items-center gap-2">
                <IoShieldCheckmarkOutline /> Secure Payment
              </p>
              <p className="text-sm opacity-40">Semua transaksi dienkripsi dan diproses secara aman.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-primary text-center p-8 rounded-4xl rounded-tr-none flex flex-col gap-6 text-white shadow-none">
                <h4 className="text-xl font-bold leading-tight">Isi Formulir</h4>
                <p className="text-sm opacity-80 font-medium">Klik tombol "Isi Formulir" untuk membuat rumusan pesan penjualan online yang tepat.</p>
                <ExalviaLinkButton
                  text="Isi Formulir"
                  href={`https://wa.me/${data.siteidentity.phone}?text=Halo%20Admin,%20saya%20ingin%20konfirmasi%20pembayaran%20untuk%20order%20${orderId}.%0A%0APaket:%20${
                    data.brandCheckerPackages.recommended.find((p) => p.price === Number(details?.gross_amount))?.name || "Service Pack"
                  }%0AStatus:%20${statusInfo.statusLabel}%0AAmount:%20${details ? formatCurrency(details.gross_amount) : ""}`}
                  className="btn-warning btn-lg w-fit mx-auto animate-pulse text-primary-content"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
