"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Home, Info, ShoppingBag, MessageSquareQuote, Gift } from "lucide-react";
import KanzarCountDown from "./KanzarCountdown";
import ModalThemes from "@/app/component/global/ModalThemes";
import ThemeChanger from "@/app/component/global/ThemeChanger";
import { FaPalette } from "react-icons/fa6";

const Navbar = ({ data, siteName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Background Change
      setIsScrolled(window.scrollY > 50);

      // 2. Handle Active Scroll Spy
      const scrollPosition = window.scrollY + 100; // Offset for fixed header

      data.navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to determine active class for Desktop
  const getNavLinkClass = (href) => {
    const isActive = activeSection === href;
    const baseClass = "text-sm font-medium uppercase tracking-wider transition-all duration-300 relative group";

    let colorClass = "";
    if (isActive) {
      colorClass = "text-warning font-bold";
    } else {
      colorClass = isScrolled ? "text-slate-300 hover:text-warning" : "text-slate-300 hover:text-white";
    }

    return `${baseClass} ${colorClass}`;
  };

  // Helper to get Icon for Mobile Menu based on Label
  const getMenuIcon = (label) => {
    switch (label) {
      case "Beranda":
        return <Home size={32} />;
      case "Tentang":
        return <Info size={32} />;
      case "Produk":
        return <ShoppingBag size={32} />;
      case "Testimoni":
        return <MessageSquareQuote size={32} />;
      case "Promo":
        return <Gift size={32} />;
      default:
        return <Home size={32} />;
    }
  };
  const textColorFx = "text-base-content";

  return (
    <div className="relative w-full">
      <nav className={`fixed w-full bg-primary z-50 transition-all duration-300 ease-in-out ${isScrolled ? "bg-primary/95 shadow-lg py-3" : "bg-transparent py-6"}`}>
        {/* Wrapper Full Width untuk Border */}
        <div className="w-full border-y border-warning px-5">
          <div className="container mx-auto w-full py-3 flex justify-between items-center">
            {/* Logo */}
            <div>
              <span className="text-xl md:text-2xl font-serif font-bold uppercase tracking-widest text-white">{siteName}</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {data.navItems.map((item, index) => (
                <a key={index} href={item.href} className={getNavLinkClass(item.href)}>
                  {item.label}
                  {/* Active Indicator Underline */}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-warning transform transition-transform duration-300 origin-left ${
                      activeSection === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                    }`}
                  ></span>
                </a>
              ))}

              {/* Theme Toggle Swap */}
              <label className="cursor-pointer">
                <ModalThemes title="Pilih Tema" btnTxt={<FaPalette />} modalId="theme-modal" textColor="text-white" borderColor="border-white/40">
                  <ThemeChanger />
                </ModalThemes>
              </label>
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="md:hidden flex items-center gap-4">
              {/* Mobile Theme Toggle */}
              <label className="swap swap-rotate">
                <ModalThemes title="Pilih Tema" btnTxt={<FaPalette />} modalId="theme-modal" textColor="text-white" borderColor="border-white/40">
                  <ThemeChanger />
                </ModalThemes>
              </label>

              <button className="md:hidden text-white focus:outline-none transition-colors" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay (Full Screen / Large Dropdown) */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-base-100/95 shadow-xl transition-all duration-300 overflow-hidden border-t border-base-300 ${
            isOpen ? "min-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* App-like Grid Menu */}
          <div className="p-6 space-y-10 relative h-full min-h-[90vh]">
            <div className="bg-slate-950/90 p-6 rounded-2xl border border-yellow-500/30 text-center w-full mx-auto">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-4">Promo Berakhir Dalam</p>
              <KanzarCountDown />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {data.navItems.map((item, index) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl aspect-square transition-all duration-200 active:scale-95 ${
                      isActive ? "bg-yellow-600 text-white" : "bg-base-200 border-base-content border text-base-content hover:bg-yellow-100 hover:border-yellow-500 hover:text-yellow-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="mb-2">{getMenuIcon(item.label)}</div>
                    <span className="text-[10px] font-bold tracking-wide text-center uppercase">{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Copyright / Info Small - Fixed at Bottom Center */}
            <div className="absolute bottom-0 left-0 w-full text-center">
              <p className="text-[10px] text-base-content/40 uppercase tracking-widest">© {data.brand.name}</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
