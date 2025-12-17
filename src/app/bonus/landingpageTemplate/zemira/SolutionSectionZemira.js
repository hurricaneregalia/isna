"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiSparkles, HiLightningBolt, HiShieldCheck, HiUserCircle, HiPlus, HiMinus } from "react-icons/hi";

export default function SolutionSectionZemira({ children, secId, data, secIdTarget }) {
  const [expandedBenefit, setExpandedBenefit] = useState(null);
  const toggleBenefit = (index) => {
    setExpandedBenefit(expandedBenefit === index ? null : index);
  };

  return (
    <section id={secId} className="py-16 md:py-24 bg-linear-to-b from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="w-fit px-4 py-2 bg-primary/10 text-primary text-xs card mx-auto mb-3 capitalize" data-aos="fade-up">
            {secId.replace(/-/g, " ")}
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-6" data-aos="fade-up">
            <span className="text-primary">{data.sectionTitle}</span> {data.sectionSubtitle}
          </h2>
          <p className="text-lg opacity-75" data-aos="fade-up">
            {data.sectionIntro}
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {data.benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-base-100 overflow-hidden card p-6 border border-base-300/50 shadow-lg transition-all duration-300 ${
                  expandedBenefit === index ? "border-primary/50 shadow-xl" : "hover:shadow-xl"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="bg-primary/10 p-2 btn btn-square border-none shadow-none text-primary mb-4">{benefit.icon}</div>
                  <button
                    onClick={() => toggleBenefit(index)}
                    className="text-primary bg-base-200 btn btn-square btn-xs flex items-center justify-center text-sm hover:bg-primary/10 transition-all"
                    aria-label="Toggle detail"
                  >
                    {expandedBenefit === index ? <HiMinus /> : <HiPlus />}
                  </button>
                </div>

                <h3 className="text-xl font-semibold text-base-content mb-3">{benefit.title}</h3>

                {expandedBenefit === index ? (
                  <div className="mt-4 transition-all duration-300">
                    <p className="opacity-75 mb-4">{benefit.description}</p>
                    <ul className="space-y-2 opacity-75">
                      {benefit.details.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="opacity-75 line-clamp-2">{benefit.description}</p>
                )}
              </div>
            ))}
          </div>
          {/* Portfolio Showcase */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="w-fit px-4 py-2 bg-primary/10 text-primary text-xs card mx-auto mb-3 capitalize" data-aos="fade-up">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-6" data-aos="fade-up">
              {data.portfolioSectionTitle.split(" ").slice(0, -1).join(" ")} <span className="text-primary">{data.portfolioSectionTitle.split(" ").slice(-1)}</span>
            </h2>
            <p className="text-lg opacity-75 max-w-2xl mx-auto" data-aos="fade-up">
              {data.portfolioSectionDesc}
            </p>
          </div>

          {children}

          {/* CTA Section */}
          <div className="relative mt-16 text-center overflow-hidden rounded-lg" data-aos="fade-up">
            {/* Background Gambar */}
            <Image src={data.ctaBackground} alt="CTA Background" fill style={{ objectFit: "cover" }} className=" mx-auto z-0" priority={false} />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary opacity-90 z-10"></div>

            {/* Konten CTA */}
            <div className="relative z-20 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-base-100 mb-4 lg:w-7/12 sm:w-8/12 w-full mx-auto">{data.ctaTitle}</h3>
              <p className="text-lg mb-8 text-base-100/75 lg:w-7/12 sm:w-8/12 w-full mx-auto">{data.ctaDesc}</p>
              <Link href={secIdTarget} className="w-fit btn btn-neutral text-white btn-lg px-10 mx-auto font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                {data.ctaButton}
                <HiSparkles className="ml-2 animate-pulse" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
