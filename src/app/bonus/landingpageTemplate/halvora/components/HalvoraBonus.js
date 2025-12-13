import React from "react";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import HalvoraHeadline from "./ui/HalvoraHeadline";
import HalvoraCountdown from "./ui/HalvoraCountdown";
import HalvoraPrimaryButton from "./ui/HalvoraPrimaryButton";

export default function HalvoraBonus({ data }) {
  const { title, offerTitle, description, icon, image, buttonText, targetDate } = data.bonus;

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-800 relative overflow-hidden">
       {/* Decorative circles */}
       <div className="absolute -top-40 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
       <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

       <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 shadow-2xl ring-1 ring-white/10">
                
                {/* Left Side: Content & Countdown */}
                <div className="w-full lg:w-3/5 space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-white text-emerald-800 rounded-full shadow-lg">
                            {icon}
                        </div>
                         <span className="bg-emerald-800/50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-100 inline-block border border-emerald-700">
                            {title}
                        </span>
                    </div>

                    <div>
                        <HalvoraHeadline text={offerTitle} className="text-white text-4xl md:text-5xl leading-tight font-serif drop-shadow-sm" />
                        <p className="text-emerald-50 text-xl mt-4 leading-relaxed font-light opacity-90">
                            {description}
                        </p>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                         <p className="text-emerald-200 text-sm mb-4 font-semibold uppercase tracking-widest">Penawaran Berakhir Dalam:</p>
                         <HalvoraCountdown targetDate={targetDate} className="text-emerald-900"/>
                    </div>

                     <div className="pt-2">
                        <HalvoraPrimaryButton className="btn-lg w-full md:w-auto bg-amber-400 text-emerald-950 hover:bg-amber-300 border-none px-12 font-bold shadow-lg">
                            {buttonText}
                        </HalvoraPrimaryButton>
                    </div>
                </div>

                {/* Right Side: Bonus Image */}
                <div className="w-full lg:w-2/5 flex justify-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-white/10 rounded-3xl transform rotate-6 transition-transform group-hover:rotate-12 duration-500"></div>
                         <img 
                            src={image} 
                            alt="Bonus Gift" 
                            className="relative rounded-3xl shadow-2xl border-4 border-white/20 w-full max-w-sm object-cover aspect-square hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

            </div>
       </div>
    </section>
  );
}
