"use client";
import React from "react";
import CopyLink from "./copyLink";
import { usePathname } from "next/navigation";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa6";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function ShareLink() {
  const pathname = usePathname();
  const linkToShare = BASE_URL + pathname;
  return (
    <div className="space-y-2">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${linkToShare}`}
        target="_blank"
        rel="noopener noreferrer"
        className="shadow-lg btn btn-lg border-none bg-[#1877F2] hover:bg-[#1877F2]/80 w-full text-blue-100"
      >
        <FaFacebook /> Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${linkToShare}`}
        target="_blank"
        rel="noopener noreferrer"
        className="shadow-lg btn btn-lg border-none	bg-[#1DA1F2] hover:bg-[#1DA1F2]/80 w-full text-blue-100"
      >
        <FaTwitter /> Twitter
      </a>
      <a
        href={`https://wa.me/?text=${linkToShare}`}
        target="_blank"
        rel="noopener noreferrer"
        className="shadow-lg btn btn-lg border-none	bg-[#25D366] hover:bg-[#25D366]/80 w-full text-emerald-50"
      >
        <FaWhatsapp /> WhatsApp
      </a>
      <CopyLink
        copyLinkTxt="Copy link"
        link={linkToShare}
        cssStyle="shadow-lg btn btn-lg border-none bg-base-100 hover:bg-slate-400/80 flex flex-row-reverse w-full"
      />
    </div>
  );
}
