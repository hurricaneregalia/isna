import ModalThemes from "@/app/component/global/ModalThemes";
import ThemeChanger from "@/app/component/global/ThemeChanger";
import React from "react";
import { FaPalette } from "react-icons/fa6";

export default function HeaderLandingGlobal({ siteName, bgColor, textColor, widthNavbar }) {
  const bgColorFx = bgColor || "bg-primary";
  const textColorFx = textColor || "text-base-100";

  return (
    <header className={`sticky top-0 z-50 ${bgColorFx}`}>
      <div className={`container mx-auto ${widthNavbar} lg:px-0 px-3`}>
        <nav className="navbar py-4">
          <div className="flex-1">
            <div className={`text-xl font-bold capitalize ${textColorFx}`}>{siteName}</div>
          </div>
          <div className="flex-none">
            <ModalThemes title="Pilih Tema" btnTxt={<FaPalette />} modalId="theme-modal" textColor={textColorFx} borderColor="border-base-100/40">
              <ThemeChanger />
            </ModalThemes>
          </div>
        </nav>
      </div>
    </header>
  );
}
