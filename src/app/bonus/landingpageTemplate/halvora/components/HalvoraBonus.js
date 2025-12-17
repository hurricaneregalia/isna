import React from "react";
import HalvoraHeadline from "./ui/HalvoraHeadline";
import HalvoraCountdown from "./ui/HalvoraCountdown";
import HalvoraAccentButton from "./ui/HalvoraAccentButton";
import HalvoraImage from "./ui/HalvoraImage";
import Image from "next/image";
import HalvoraAccentLinkButton from "./ui/HalvoraAccentLinkButton";

export default function HalvoraBonus({ data, secId, target }) {
  const { title, offerTitle, description, icon, image, ornament, targetDate, pattern } = data.bonus;

  return (
    <section id={secId} className="bg-linear-to-r from-primary to-primary/80 relative overflow-hidden">
      <div
        className="absolute w-full  h-full z-2 bg-size-[auto_50px] opacity-10 bg-center "
        style={{
          backgroundImage: `url(${pattern})`,
        }}
      />
      <div className="absolute top-0 right-10 origin-top swing z-4">
        <Image src={ornament} alt="ornament" width={0} height={0} sizes="100vw" className="w-[25px] lg:w-[50px] h-auto" style={{ height: "auto" }} />
      </div>
      <div className="absolute top-0 left-10 origin-top swing z-4">
        <Image src={ornament} alt="ornament" width={0} height={0} sizes="100vw" className="w-[25px] lg:w-[50px] h-auto" style={{ height: "auto" }} />
      </div>
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-20 w-80 h-80 bg-base-100/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-base-100/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative lg:w-8/12 w-full z-3 my-24">
        <div className="flex flex-col sm:flex-row sm:py-25 py-10 items-center bg-linear-to-r from-primary to-primary/80 justify-between gap-12 bg-base-content/5 p-10 card border border-base-100/30 shadow-2xl ring-1 ring-base-100/20">
          {/* Left Side: Content & Countdown */}
          <div className="w-full space-y-8">
            <div className=" grid sm:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-base-100 text-primary rounded-full shadow-lg">{icon}</div>
                  <span className="bg-base-content/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary-content inline-block border border-base-100/20">{title}</span>
                </div>

                <div>
                  <HalvoraHeadline text={offerTitle} className="text-primary-content text-4xl md:text-5xl leading-tight font-serif drop-shadow-sm" />
                  <p className="text-primary-content/90 text-xl mt-4 leading-relaxed font-light">{description}</p>
                </div>
              </div>
              {/* Right Side: Bonus Image */}
              <div className="w-full flex justify-center">
                <div className="relative group mt-10 sm:mt-0">
                  <div className="absolute inset-0 bg-base-100/20 card transform rotate-6 transition-transform group-hover:rotate-12 duration-500"></div>
                  <HalvoraImage
                    src={image}
                    alt="Bonus Gift"
                    className="relative card shadow-2xl border-4 border-base-100/30 w-full max-w-sm object-cover aspect-square hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="pt-6 grid lg:grid-cols-2 grid-cols-1 justify-between items-end">
              <div className=" lg:w-6/12 w-full">
                <p className="text-primary-content/80 text-sm mb-4 lg:text-start text-center  font-semibold uppercase tracking-widest">Promo Berakhir Dalam:</p>
                <HalvoraCountdown targetDate={targetDate} className="text-base-content lg:justify-start justify-center" />
              </div>
              <div className="w-full items-center flex justify-center lg:mt-0 mt-10">
                <HalvoraAccentLinkButton href={target} className="btn-lg px-10">
                  Klaim Bonus
                </HalvoraAccentLinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
