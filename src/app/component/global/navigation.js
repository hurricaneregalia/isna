"use client";
import React, { useState } from "react";
import ThemeSwitch from "./themeSwitch";
import Link from "next/link";
import logo from "../../../../public/images/siteIdentity/logo.svg";
import logo2 from "../../../../public/images/siteIdentity/logo2.svg";
import Image from "next/image";
import NavModal from "./navModal";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navigation({ siteName }) {
  const navMenu = [
    {
      name: "Home",
      href: "#",
      key: "home", // Gunakan string unik sebagai key
    },
    {
      name: "Manfaat",
      href: "#manfaat",
      key: "manfaat",
    },
    {
      name: "Layanan",
      href: "#layanan",
      key: "layanan",
    },
    {
      name: "Login",
      href: "/login",
      key: "login",
    },
  ];
  return (
    <nav className="navbar bg-base-300 flex justify-between items-center">
      <Link href="/" className="btn btn-ghost text-xl">
        <Image src={logo2} alt="logo" width={100} height={100} className="w-5 h-5" />
        {siteName}
      </Link>
      <div>
        <div id="nav-menu" className="sm:block hidden">
          {navMenu.map((item) => (
            <Link href={item.href} key={item.key} className="btn btn-ghost">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="sm:hidden">
          <NavModal btnText={<HiMenuAlt3 className="w-8 h-8" />} btnStyle="p-1 bg-transparent border-none" modalId="navModal" modalTitle={siteName}>
            <ul>
              {navMenu.map((item) => (
                <li className="" key={item.key}>
                  <Link href={item.href} className="link no-underline block bg-base-200 hover:bg-base-300 rounded-lg p-2 my-1 decoration-none">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </NavModal>
        </div>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
