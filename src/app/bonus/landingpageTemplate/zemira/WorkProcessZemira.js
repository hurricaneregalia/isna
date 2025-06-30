import { CheckCircle } from "lucide-react";
import React from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";

export default function WorkProcessZemira({ secId, data }) {
  return (
    <section id={secId} className="py-16 md:py-24 bg-base-100">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Judul Utama */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="w-fit px-4 py-2 bg-primary/10 text-primary text-xs card mx-auto mb-3 capitalize" data-aos="fade-up">
            {secId.replace(/-/g, " ")}
          </span>

          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-6" data-aos="fade-up">
            {data.section.title}
            <span className="text-primary"> {data.section.highlight}</span>
          </h2>
          <p className="text-lg opacity-75" data-aos="fade-up">
            {data.section.description}
          </p>
        </div>

        {/* Timeline Proses */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8 relative z-10">
            {data.steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center md:items-start text-center md:text-left ${index % 2 === 0 ? "sm:pt-0" : "lg:pt-10"}`}>
                {/* Icon */}
                <div className="relative">
                  <div className={`w-16 h-16 btn btn-square border-none shadow-none flex items-center justify-center mb-4 ${step.bgColor}`} data-aos="flip-left">
                    <div className={step.color}>{step.icon}</div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-base-100 border-2 border-primary btn btn-square shadow-none w-8 h-8 flex items-center justify-center" data-aos="flip-right">
                    <span className="font-bold text-primary">{index + 1}</span>
                  </div>
                </div>

                {/* Detail Step */}
                <div className="md:ml-6 flex-1" data-aos="fade-up">
                  <h3 className="text-xl font-semibold text-base-content mb-2">{step.title}</h3>
                  <p className="opacity-75 mb-3">{step.description}</p>
                  <div className="flex items-center justify-center md:justify-start">
                    <HiOutlineCheckCircle className={`${step.color} mr-2`} />
                    <span className="text-sm font-medium text-base-content/70">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Garansi */}
        <div className="mt-20 border border-primary card p-8 md:p-10 text-center" data-aos="fade-up">
          <div className="max-w-3xl mx-auto">
            <span className="w-fit px-4 py-2 bg-primary/10 text-primary text-xs card mx-auto mb-3 capitalize" data-aos="fade-up">
              {data.guarantee.badge}
            </span>
            <h3 className="text-3xl md:text-3xl font-playfair font-bold mb-4">
              {data.guarantee.title} <span className="text-primary">{data.guarantee.highlight}</span>
            </h3>
            <p className="text-lg mb-6 opacity-75">{data.guarantee.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.guarantee.items.map((item, i) => (
                <div key={i} className="bg-primary/20 py-3 px-4 card flex items-center justify-center gap-2 sm:text-left text-center">
                  <span className="text-primary">
                    <CheckCircle />
                  </span>
                  <span className="font-bold text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
