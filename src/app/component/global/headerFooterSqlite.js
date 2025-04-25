"use client";
import React, { useEffect } from "react";
import Footer from "./footer";
import Navigation2 from "./navigation2";
import Aos from "aos";
import "../../../../node_modules/aos/dist/aos.css";
import landingPageStyle from "../landingPage/landingPage.module.css";
import Loading from "@/app/loading";
import Modal from "./modal";
import { TbLocationShare } from "react-icons/tb";
import ShareLink from "./shareLink";
import CanvasCursor from "../canvasCursor/CanvasCursor";

export default function HeaderFooterSqlite({ children, siteName, footerText }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-back",
      duration: 1000,
    });

    // Menunda AOS refresh
    setTimeout(() => {
      Aos.refresh();
    }, 5000);
  }, []);

  if (!siteName) return <Loading />;

  return (
    <>
      <div className="relative min-h-screen flex flex-col">
        <Navigation2 siteName={siteName} bg={landingPageStyle.bg1} />
        {children}
        <Footer footerText={footerText} siteName={siteName} />
        <div className="fixed bottom-4 right-4">
          <Modal
            modalId="shareBtn"
            header="Bagikan halaman ini."
            btnTxt={<TbLocationShare />}
            icon={<TbLocationShare />}
            btnStyle="rounded-full h-10 w-10 p-0 shadow-lg bg-base-50 hover:bg-amber-300 text-base-content hover:text-slate-900 text-xl "
          >
            <ShareLink />
          </Modal>
        </div>
        <CanvasCursor />
      </div>
    </>
  );
}
