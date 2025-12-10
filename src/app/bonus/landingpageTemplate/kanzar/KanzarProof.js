import React from "react";
import { ShieldCheck, Truck, Star, BadgeCheck } from "lucide-react";

export default function KanzarProof({ secId = "proof", data }) {
  const { items } = data.trust;

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck size={32} className="text-warning" />;
      case "Truck":
        return <Truck size={32} className="text-warning" />;
      case "Star":
        return <Star size={32} className="text-warning" />;
      case "BadgeCheck":
        return <BadgeCheck size={32} className="text-warning" />;
      default:
        return null;
    }
  };

  return (
    <section id={secId} className="relative bg-slate-900 overflow-hidden py-16">
      {/* Background Pattern - Custom Islamic Motif Zigzag */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Grid Layout with Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="group px-6 py-8 flex flex-col items-center text-center transition-all mx-auto lg:w-8/12 sm:w-10/12 w-9/12 duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Islamic Star Shape Icon Container */}
              <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                {/* Square 1 */}
                <div className="absolute inset-0 border border-warning rotate-45 card transition-transform duration-700 group-hover:rotate-90"></div>
                {/* Square 2 */}
                <div className="absolute inset-0 border border-warning/40 rotate-12 card transition-transform duration-700 group-hover:-rotate-12"></div>

                {/* Icon Wrapper */}
                <div className="flex items-center justify-center w-10 aspect-square text-warning">{item.icon}</div>
              </div>

              <h3 className="text-xl font-serif font-bold text-warning mb-3 tracking-wide group-hover:text-slate-100 transition-colors">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
