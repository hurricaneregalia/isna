"use client";
import React, { useState } from "react";
import HalvoraSecondaryButton from "./ui/HalvoraSecondaryButton";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function HalvoraNavbar({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { brand, navItems } = data;

  React.useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Background Change
      setIsScrolled(window.scrollY > 50);

      // 2. Handle Active Scroll Spy
      const scrollPosition = window.scrollY + 100; // Offset for header height

      navItems.forEach((item) => {
        if (item.href.startsWith("#")) {
          const element = document.querySelector(item.href);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(item.href);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <div className="relative w-full">
      <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? "bg-[#FFF5EA]/95 shadow-sm py-3" : "bg-transparent py-6"}`}>
        {/* Wrapper styling matching Kanzar structure */}
        <div className={`w-full px-5 transition-all duration-300 `}>
          <div className="container mx-auto lg:w-10/12 w-full py-3 flex justify-between items-center">
            {/* Logo */}
            <div className={`text-2xl font-bold  font-serif tracking-in-expand ${isScrolled ? "text-[#6B4423]" : "text-white"}`}>{brand.name}</div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8 items-center">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`transition-colors font-medium text-sm tracking-wide ${
                    activeSection === item.href ? "text-[#D48F8F] font-bold" : isScrolled ? "text-[#8B5E3C] hover:text-[#D48F8F]" : "text-white hover:text-[#D48F8F]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <HalvoraSecondaryButton className="btn-sm border-[#D48F8F] text-[#6B4423] hover:bg-[#FFF0F0]">Contact Us</HalvoraSecondaryButton>
            </div>

            {/* Mobile Toggle */}
            <button className={`lg:hidden text-2xl ${isScrolled ? "text-[#6B4423]" : "text-white"}`} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full h-screen bg-[#FFF5EA]/95 flex flex-col p-6 border-t border-[#D48F8F]/20 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
          }`}
        >
          <div className="flex flex-col gap-1 w-full justify-start pt-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`py-4 text-center text-xl border-b border-[#D48F8F]/10 transition-all duration-300 ${
                  activeSection === item.href ? "text-[#D48F8F] font-bold scale-105" : "text-[#8B5E3C] hover:text-[#D48F8F] hover:scale-105"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <HalvoraSecondaryButton className="w-fit mx-auto mt-8 py-4 text-lg">Contact Us</HalvoraSecondaryButton>
          </div>
        </div>
      </nav>
    </div>
  );
}
