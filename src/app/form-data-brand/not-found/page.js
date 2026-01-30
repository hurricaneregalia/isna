import React from "react";
import Link from "next/link";
import ExalviaNavbar from "../../exalvia/sections/ExalviaNavbar";
import ExalviaFooter from "../../exalvia/sections/ExalviaFooter";
import data from "../../exalvia/database/ExalviaDatabase";
import HeaderFooterClient from "../../component/global/HeaderFooterClient";
import HeroBrandChecker from "../../exalvia/brand-checker/HeroBrandChecker";

export default function FormDataBrandNotFound() {
  return (
    <div className="bg-base-100 min-h-screen flex flex-col font-montserrat overflow-hidden">
      <ExalviaNavbar data={data.navbar} bgCustom="bg-trensparent" />

      <HeroBrandChecker headline="Transaksi Tidak Ditemukan" secId="form-data-brand-not-found" backgroundImage={data.pagesResult.heroImage}>
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-2xl mx-auto w-full text-center">
            <div className="bg-base-200 rounded-3xl rounded-tr-none shadow-xl border border-base-300 p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-base-content mb-8">Transaksi Tidak Ditemukan</h1>
              <div className="space-y-4">
                <p className="text-base-content/80 text-lg">Klik tombol sudah bayar jika anda sudah melakukan pembayaran </p>
                <Link href="/pembayaran" className="btn btn-warning btn-lg">
                  Sudah Bayar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </HeroBrandChecker>

      <ExalviaFooter data={data.footer} secId="footer" />
      <HeaderFooterClient />
    </div>
  );
}
