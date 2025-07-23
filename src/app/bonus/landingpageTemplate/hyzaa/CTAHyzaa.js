import React from "react";
import Wrapper from "./ui/Wrapper";
import HeaderSection from "./ui/HeaderSection";
import Link from "next/link";
import { FaPersonBiking } from "react-icons/fa6";
import Divider from "./ui/Divider";

export default function CtaHyzaa({ targetId, data }) {
  return (
    <Wrapper>
      <div
        className=" mx-auto card overflow-hidden"
        style={{
          backgroundImage: `url(${data.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" bg-slate-900/90 text-white sm:py-32 py-10">
          <div className="w-full mx-auto">
            <HeaderSection aos="fade-up" label={data.label} headline={data.headline} headlineColor="text-lime-300 lg:w-4/12 sm:w-6/12 sm:px-0 px-5" labelColor="text-white/75" />
            <div className="relative bg-red-500 mb-12 flex justify-between">
              <div className={`absolute aspect-square w-10 -left-5 bg-base-100 card rotate-45 top-1/2 -translate-y-1/2`}>
                <div className="custom-radial text-primary/10 bg-[length:1em_1em] absolute inset-0 -rotate-45 " />
              </div>
              <div className={`absolute aspect-square w-10 -right-5 bg-base-100 card rotate-45 top-1/2 -translate-y-1/2`}>
                <div className="custom-radial text-primary/10 bg-[length:1em_1em] absolute inset-0 -rotate-45 " />
              </div>
            </div>

            <div className="space-y-5 text-center items-center lg:w-4/12 sm:w-6/12 w-full mx-auto  sm:px-0 px-5">
              <p className="text-lg opacity-75">{data.description}</p>
              <Divider my={8} />
              <Link href={targetId} className="btn btn-lg btn-primary border-success border  ">
                <FaPersonBiking aria-hidden="true" />
                Pilih Sepeda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
