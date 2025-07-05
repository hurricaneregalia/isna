"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavbarRihala({ links = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-primary">
          Campala Nature Trip
        </Link>

        <div className="hidden md:flex space-x-8">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="text-base-content hover:text-primary font-medium transition-colors">
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-base-content focus:outline-none focus:ring-2 focus:ring-primary rounded-md" aria-label="Toggle menu">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-base-100 px-2 pt-2 pb-3 space-y-1 shadow-md">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="block px-3 py-2 rounded-md text-base-content hover:text-primary font-medium" onClick={() => setIsOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
