import React from "react";
import ThemeSwitch from "./themeSwitch";
import Link from "next/link";
import logo2 from "../../../../public/images/siteIdentity/logo2.svg";
import userPhoto from "../../../../public/images/user/default/userphoto.jpg";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import Profile from "./profile";
import Notif from "./notif";

export default function Navigation2({ siteName, bg }) {
  const navMenu = [
    { name: "Home", href: "/", key: "home" },
    { name: "Fakta", href: "/#fakta", key: "fakta" },
    { name: "Solusi", href: "/#solusi", key: "solusi" },
    { name: "Layanan", href: "/#layanan", key: "layanan" },
    { name: "Bonus", href: "/#bonus", key: "bonus" },
    { name: "My Api", href: "/myapi", key: "myapi" },
    { name: "Login", href: "/login", key: "login" },
  ];

  return (
    <div className={`${bg} sticky top-0 z-10`}>
      <Disclosure as="nav" className="bg-slate-900 text-slate-400 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center sm:block px-4 sm:px-0">
              <div className="flex shrink-0 items-center">
                <Link href="/" className="flex items-center gap-1">
                  <Image src={logo2} alt="logo" width={20} height={20} className="w-5 h-5" />
                  <span className="font-bold capitalize hover:text-amber-300">{siteName}</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start" id="desktopNav">
              <div className="hidden sm:ml-6 sm:block w-full">
                <div className="flex flex-row-reverse">
                  <div className="space-x-4">
                    {navMenu.map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className="text-slate-400 hover:text-amber-300"
                      >
                        <DisclosureButton as="span">{item.name}</DisclosureButton>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Notif textColor="text-slate-400 hover:text-amber-300" />
              <ThemeSwitch textColor="text-slate-400 hover:text-amber-300" />
              <Profile userPhoto={userPhoto} />
              <DisclosureButton
                className="group relative inline-flex items-center justify-center rounded-md p-2 text-slate-400 sm:hidden"
                aria-expanded="false" // Menambahkan aria-expanded untuk tombol menu
                aria-controls="mobile-menu" // Menambahkan aria-controls yang mengarah ke panel menu
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <HiMenuAlt3 aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <FaXmark aria-hidden="true" className="hidden size-6 group-data-open:block" />
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
          <DisclosurePanel id="mobile-menu" className="sm:hidden">
            <div className="relative">
              <div className="absolute space-y-1 p-2  bg-slate-900 rounded-bl-3xl w-full">
                <div className="px-4">
                  {navMenu.map((item) => (
                    <Link key={item.key} href={item.href} className="">
                      <DisclosureButton
                        as="span"
                        className="block rounded-md px-3 py-2 text-slate-400 font-medium hover:bg-base-200 transition-all duration-300 ease-in-out active:bg-base-200 mb-1"
                      >
                        {item.name}
                      </DisclosureButton>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </DisclosurePanel>
        </Transition>
      </Disclosure>
    </div>
  );
}
