import ModalThemes from "@/app/component/global/ModalThemes";
import ThemeChanger from "@/app/component/global/ThemeChanger";
import React from "react";
import { FaPalette } from "react-icons/fa6";

export default function HeaderFooterLandingPageOnly({ siteName, children }) {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-base-content">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary backdrop-blur-sm transition-all duration-300">
        <div className="container mx-auto px-4">
          <nav className="navbar py-4">
            <div className="flex-1">
              <div className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent text-base-100 bg-clip-text">{siteName}</div>
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
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="w-full text-center py-5 bg-base-200">
        <span className=" opacity-50">footer {siteName}</span>
      </footer>
    </div>
  );
}
