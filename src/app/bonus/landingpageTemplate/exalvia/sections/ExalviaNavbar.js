"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import ExalviaLinkButton from "../ui-components/ExalviaLinkButton";
import ModalThemes from "@/app/component/global/ModalThemes";
import { FaPalette } from "react-icons/fa6";
import ThemeChanger from "@/app/component/global/ThemeChanger";

export default function ExalviaNavbar({ data, bgCustom = "bg-transparent" }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Background scroll logic
      setScrolled(window.scrollY > 50);

      // Section tracking logic
      const sectionIds = ["hero", ...data?.menu.map((item) => item.link)];
      let currentSection = "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 150) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data?.menu]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full">
      <nav
        className={`fixed left-0 w-full z-10 transition-all duration-300 rounded-bl-4xl border-b ${
          scrolled ? "bg-primary py-5 px-0 shadow-lg border-base-100/20" : bgCustom + " py-8 px-5 border-transparent"
        }`}
      >
        <div className={`lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16  transition-all duration-300 lg:px-24 ${scrolled ? "mt-0" : "mt-5"} `}>
          <div className="flex items-center justify-between">
            {/* 1. Left: Brand */}
            <div className="flex-1 flex items-center">
              <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection("hero")}>
                <div className="relative w-8 h-8">
                  <Image src={data?.logo} alt={data?.brandName} fill className="object-contain" />
                </div>
                <span className="font-instrument-serif text-2xl font-bold tracking-tight transition-colors text-white group-hover:text-warning">{data?.brandName}</span>
              </div>
            </div>

            {/* 2. Middle: Navigation (Desktop) */}
            <div className="hidden lg:flex items-center gap-8 flex-none">
              {data?.menu.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.link)}
                  className={`font-montserrat text-sm font-semibold transition-all uppercase tracking-wider ${
                    activeSection === item.link ? "text-warning opacity-100" : "text-white opacity-80 hover:opacity-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* 3. Right: Utils */}
            <div className="flex-1 flex items-center justify-end gap-4">
              {/* Theme Toggle */}
              <label className="swap swap-rotate">
                <ModalThemes title="Pilih Tema" btnTxt={<FaPalette />} modalId="theme-modal" textColor=" text-white" borderColor="border-white/40">
                  <ThemeChanger />
                </ModalThemes>
              </label>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden text-3xl text-white relative w-10 h-10 flex items-center justify-center overflow-hidden focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <IoClose className={`absolute transition-all duration-500 ease-in-out transform ${isOpen ? "rotate-0 opacity-100 scale-100" : "rotate-180 opacity-0 scale-0"}`} />
                  <HiMenuAlt3 className={`absolute transition-all duration-500 ease-in-out transform ${!isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-180 opacity-0 scale-0"}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Drawer-like) */}
        <div className={`fixed inset-0 bg-base-100 z-10 lg:hidden transition-transform duration-500 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col h-full p-10 space-y-12 items-center justify-center text-center relative">
            <button className="absolute top-8 right-6 text-3xl hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              <IoClose />
            </button>

            {/* Brand Profile in Mobile Menu */}
            <div
              className="flex flex-col items-center gap-3 cursor-pointer mb-4"
              onClick={() => {
                scrollToSection("hero");
                setIsOpen(false);
              }}
            >
              <div className="flex items-center gap-2 cursor-pointer group mb-20">
                <div className="relative w-8 aspect-square">
                  <Image src={data?.logo} alt={data?.brandName} fill className="object-contain" />
                </div>
                <span className="font-instrument-serif text-4xl font-bold tracking-tight text-primary">{data?.brandName}</span>
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              {data?.menu.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.link)}
                  className={`font-instrument-serif text-3xl font-bold transition-colors ${activeSection === item.link ? "text-warning opacity-100" : "text-base-content/80 hover:text-warning"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <ExalviaLinkButton text="Konsultasi" href="#contact" className="mt-4 btn-warning" onClick={() => setIsOpen(false)} />
          </div>
        </div>
      </nav>
    </div>
  );
}
