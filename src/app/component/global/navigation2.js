import React from "react";
import ThemeSwitch from "./themeSwitch";
import Link from "next/link";
import logo from "../../../../public/images/siteIdentity/logo.svg";
import logo2 from "../../../../public/images/siteIdentity/logo2.svg";
import userPhoto from "../../../../public/images/user/default/userphoto.jpg";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";

import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import Profile from "./profile";
import Notif from "./notif";

export default function Navigation2({ siteName }) {
  const navMenu = [
    {
      name: "Home",
      href: "#",
      key: "home", // Gunakan string unik sebagai key
    },
    {
      name: "Bisnis",
      href: "#keinginan-pebisnis",
      key: "bisnis",
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
          <div className="flex items-center sm:block px-4 sm:px-0">
            <div className="flex shrink-0 items-center">
              <Link href="/" className="flex items-center">
                <Image src={logo2} alt="logo" width={20} height={20} className="w-5 h-5 me-1" />
                <span className="font-bold capitalize">{siteName}</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
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
            <Notif />
            <ThemeSwitch />
            <Profile userPhoto={userPhoto} />
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-base-content sm:hidden">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <HiMenuAlt3 aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <FaXmark aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>
      <Transition
        enter="transition duration-300 ease-out"
        enterFrom="transform -translate-y-2 opacity-0"
        enterTo="transform translate-y-0 opacity-100"
        leave="transition duration-200 ease-in"
        leaveFrom="transform translate-y-0 opacity-100"
        leaveTo="transform -translate-y-2 opacity-0"
      >
        <DisclosurePanel className="sm:hidden">
          <div className="relative">
            <div className="absolute space-y-1 px-2 pb-3 pt-2 bg-base-300 w-full">
              <div className="px-4">
                {navMenu.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base-content font-medium hover:bg-base-200 transition-all duration-300 ease-in-out active:bg-base-200 mb-1"
                  >
                    <DisclosureButton as="span">{item.name}</DisclosureButton>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  );
}
