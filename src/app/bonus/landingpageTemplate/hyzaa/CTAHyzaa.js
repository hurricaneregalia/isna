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
        <div className=" bg-slate-900/90 text-white sm:p-32 p-5 py-16">
          <div className="lg:w-9/12 w-full mx-auto">
            <HeaderSection aos="fade-up" label={data.label} headline={data.headline} headlineColor="text-lime-300" labelColor="text-white/75" />
            <div className="space-y-5 text-center items-center sm:w-10/12 w-full mx-auto">
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
