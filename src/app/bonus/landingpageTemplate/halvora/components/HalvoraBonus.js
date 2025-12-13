import React from "react";
import HalvoraSubHeadline from "./ui/HalvoraSubHeadline";
import HalvoraHeadline from "./ui/HalvoraHeadline";
import HalvoraCountdown from "./ui/HalvoraCountdown";
import HalvoraPrimaryButton from "./ui/HalvoraPrimaryButton";

export default function HalvoraBonus({ data }) {
  const { title, offerTitle, description, icon, image, buttonText, targetDate } = data.bonus;

  return (
    <section className="py-16 bg-gradient-to-r from-secondary to-accent relative overflow-hidden">
       {/* Decorative circles */}
       <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
       <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

       <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl">
                
                {/* Left Side: Content & Countdown */}
                <div className="w-full lg:w-3/5 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white text-secondary rounded-full shadow-lg">
                            {icon}
                        </div>
                         <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white inline-block">
                            {title}
                        </span>
                    </div>

                    <div>
                        <HalvoraHeadline text={offerTitle} className="text-white text-3xl md:text-4xl leading-tight" />
                        <p className="text-white/90 text-lg mt-2 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="pt-4 border-t border-white/20">
                         <p className="text-white text-sm mb-3 font-semibold uppercase tracking-wider">Penawaran Berakhir Dalam:</p>
                         <HalvoraCountdown targetDate={targetDate} />
                    </div>

                     <div className="pt-4">
                        <HalvoraPrimaryButton className="btn-lg w-full md:w-auto bg-white text-secondary hover:bg-gray-100 border-none">
                            {buttonText}
                        </HalvoraPrimaryButton>
                    </div>
                </div>

                {/* Right Side: Bonus Image */}
                <div className="w-full lg:w-2/5 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-secondary/30 rounded-2xl transform rotate-6"></div>
                         <img 
                            src={image} 
                            alt="Bonus Gift" 
                            className="relative rounded-2xl shadow-xl border-4 border-white/50 w-full max-w-sm object-cover aspect-square hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>

            </div>
       </div>
    </section>
  );
}
