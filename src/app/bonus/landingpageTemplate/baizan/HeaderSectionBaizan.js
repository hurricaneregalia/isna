import ModalThemes from "@/app/component/global/ModalThemes";
import ThemeChanger from "@/app/component/global/ThemeChanger";
import React from "react";
import { FaPalette } from "react-icons/fa6";

export default function HeaderSectionBaizan({ siteName, bgColor, textColor, widthNavbar }) {
  const bgColorFx = bgColor ? bgColor : "bg-primary";
  const textColorFx = textColor ? textColor : "text-base-content";
  return (
    <div className={`flex flex-col ${bgColorFx} `}>
      {/* Header */}
      <header className="sticky top-0">
        <div className={`container mx-auto ${widthNavbar} px-4`}>
          <nav className="navbar py-4">
            <div className="flex-1">
              <div className={`text-xl font-bold capitalize ${textColorFx}`}>{siteName}</div>
            </div>
            <div className="flex-none ">
              <ModalThemes title="Pilih Tema" btnTxt={<FaPalette />} modalId="theme-modal">
                <ThemeChanger />
              </ModalThemes>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
