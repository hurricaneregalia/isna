import ModalThemes from "@/app/component/global/ModalThemes";
import ThemeChanger from "@/app/component/global/ThemeChanger";
import React from "react";
import { FaPalette } from "react-icons/fa6";

export default function HeaderFooterLandingPageOnly({ siteName, children, navBg }) {
  const bgColor = navBg ? navBg : "bg-primary";
  return (
    <div className={`flex flex-col min-h-screen ${bgColor} text-base-content`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${bgColor}`}>
        <div className="container mx-auto max-w-6xl px-4">
          <nav className="navbar py-4">
            <div className="flex-1">
              <div className="text-xl font-bold tracking-tight text-base-100 bg-clip-text capitalize">{siteName}</div>
            </div>

            <div className="flex-none">
              <ModalThemes title="Pilih Tema" btnTxt={<FaPalette />} modalId="theme-modal">
                <ThemeChanger />
              </ModalThemes>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="grow">{children}</main>

      {/* Footer */}
      <footer className="w-full text-center py-5 bg-base-200">
        <span className=" opacity-50">{siteName}</span>
      </footer>
    </div>
  );
}
