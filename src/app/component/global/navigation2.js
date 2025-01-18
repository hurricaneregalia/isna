"use client";
import React, { useState } from "react";
import ThemeSwitch from "./themeSwitch";
import Link from "next/link";
import logo from "../../../../public/images/siteIdentity/logo.svg";
import logo2 from "../../../../public/images/siteIdentity/logo2.svg";
import userPhoto from "../../../../public/images/user/default/userphoto.jpg";
import Image from "next/image";
import NavModal from "./navModal";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function Navigation2({ siteName }) {
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
    <Disclosure as="nav" className="bg-base-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-base-content ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <HiMenuAlt3 aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <FaXmark aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link href="/" className="flex items-center">
                <Image src={logo2} alt="logo" width={100} height={100} className="w-5 h-5 me-1" />
                <span className="font-bold capitalize">{siteName}</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block w-full">
              <div className="flex flex-row-reverse">
                <div className="space-x-4 ">
                  {navMenu.map((item) => (
                    <Link key={item.name} href={item.href} aria-current={item.current ? "page" : undefined} className="text-base-content">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <FaRegBell aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <Image src={userPhoto} alt="logo" width={100} height={100} className="size-8 rounded-full" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none">
                    Your Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none">
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none">
                    Sign out
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navMenu.map((item) => (
            <Link key={item.key} href={item.href} className="block rounded-md px-3 py-2 text-base-content font-medium">
              <DisclosureButton as="div">{item.name}</DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
