// src/app/component/global/HeaderFooterClient.jsx
"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "./modal";
import { TbLocationShare } from "react-icons/tb";
import ShareLink from "./shareLink";
import CanvasCursor from "../canvasCursor/CanvasCursor";

export default function HeaderFooterClient() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-back",
      duration: 1000,
    });

    const refreshTimeout = setTimeout(() => {
      Aos.refresh();
    }, 5000);

    return () => clearTimeout(refreshTimeout);
  }, []);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Modal
          modalId="shareBtn"
          header="Bagikan halaman ini."
          btnTxt={<TbLocationShare aria-label="share label icon" />}
          icon={<TbLocationShare />}
          btnStyle="rounded-full border border-base-content h-10 w-10 p-0 shadow-lg bg-base-50 hover:bg-amber-300 text-base-content hover:text-slate-900 text-xl "
        >
          <ShareLink />
        </Modal>
      </div>
      <CanvasCursor />
    </>
  );
}
