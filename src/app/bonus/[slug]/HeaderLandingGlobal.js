import ModalThemes from "@/app/component/global/ModalThemes";
import ThemeChanger from "@/app/component/global/ThemeChanger";
import React from "react";
import { FaPalette } from "react-icons/fa6";

export default function HeaderLandingGlobal({ siteName, bgColor, textColor, widthNavbar }) {
  const bgColorFx = bgColor || "bg-primary";
  const textColorFx = textColor || "text-base-100";

  return (
    <header className={`sticky top-0 z-50 lg:px-30 sm:px-15 px-5 ${bgColorFx} shadow-xl `}>
      <div className={` mx-auto text-center py-5 ${widthNavbar}`}>
        <nav className=" w-full mx-auto flex justify-between">
          <div className={`text-xl font-bold capitalize ${textColorFx}`}>{siteName}</div>
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
