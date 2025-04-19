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

export default function Navigation3({ siteName, bg }) {
  return (
    <div className={`${bg} sticky top-0 z-10`}>
      <Disclosure as="nav" className="bg-slate-900 text-slate-400 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center sm:block px-4 sm:px-0">
              <div className="flex shrink-0 items-center">
                <Link href="/" className="flex items-center">
                  <Image src={logo2} alt="logo" width={20} height={20} className="w-5 h-5 me-1" />
                  <span className="font-bold capitalize hover:text-amber-300">{siteName}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
