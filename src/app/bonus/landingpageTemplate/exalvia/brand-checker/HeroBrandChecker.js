import Image from "next/image";
import React from "react";
import ExalviaHeadlineH1 from "../ui-components/ExalviaHeadlineH1";
import ExalviaLinkButton from "../ui-components/ExalviaLinkButton";
import { FaArrowRight } from "react-icons/fa6";

export default function HeroBrandChecker({
  headline = "lorem",
  secId,
  linkTarget = "",
  children,
  backgroundImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
}) {
  return (
    <section id={secId} className="w-full bg-base-100 flex flex-col items-center p-5">
      <div className="relative w-full overflow-hidden rounded-bl-4xl sm:py-30 py-30 h-fullitems-center flex bg-neutral">
        <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto">
          <div className="absolute inset-0">
            <Image src={backgroundImage} alt="Exalvia Hero Brand Visual" fill priority className="object-cover" sizes="(max-width: 1536px) 100vw, 85vw" />
            <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/60 to-transparent"></div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="relative w-full flex items-center justify-center px-6 md:px-16 lg:px-24 ">
            <div className="max-w-3xl flex items-start justify-center space-y-8 md:space-y-10">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
