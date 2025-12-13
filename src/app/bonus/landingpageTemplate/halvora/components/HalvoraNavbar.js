'use client'
import React, { useState } from "react";
import HalvoraSecondaryButton from "./ui/HalvoraSecondaryButton";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function HalvoraNavbar({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const { brand, navItems } = data;

  return (
    <div className="fixed top-0 w-full z-50 bg-base-100/90 backdrop-blur-md border-b border-base-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary font-serif tracking-wider">
          {brand.name}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-base-content hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <HalvoraSecondaryButton className="btn-sm">
            Contact Us
          </HalvoraSecondaryButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-base-content"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-base-100 border-b border-base-200 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-base-content hover:text-primary py-2 border-b border-base-200/50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
           <HalvoraSecondaryButton className="w-full mt-2">
            Contact Us
          </HalvoraSecondaryButton>
        </div>
      )}
    </div>
  );
}
