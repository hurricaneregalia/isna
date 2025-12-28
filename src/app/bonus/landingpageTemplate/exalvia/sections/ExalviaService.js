"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import ExalviaSectionHeader from "../ui-components/ExalviaSectionHeader";
import ExalviaCard from "../ui-components/ExalviaCard";
import ExalviaRating from "../ui-components/ExalviaRating";
import ExalviaLinkButton from "../ui-components/ExalviaLinkButton";

export default function ExalviaService({ data, secId = "service" }) {
  const topAreaRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(null);

  const parseTurnaroundDays = (turnaround) => {
    if (!turnaround || typeof turnaround !== "string") return null;
    const nums = turnaround.match(/\d+(?:[\.,]\d+)?/g);
    if (!nums || nums.length === 0) return null;
    const values = nums.map((n) => Number(String(n).replace(",", "."))).filter((n) => Number.isFinite(n));
    if (values.length === 0) return null;
    const min = Math.min(...values);
    const max = Math.max(...values);
    return (min + max) / 2;
  };

  const maxTurnaroundDays = Math.max(1, ...(data?.plans || []).map((p) => parseTurnaroundDays(p?.turnaround)).filter((n) => typeof n === "number" && Number.isFinite(n)));

  useEffect(() => {
    const calculateMaxHeight = () => {
      if (topAreaRefs.current.length === 0) return;

      // Reset height dulu untuk mendapatkan tinggi natural
      topAreaRefs.current.forEach((ref) => {
        if (ref) ref.style.minHeight = "auto";
      });

      // Tunggu sebentar untuk render ulang
      setTimeout(() => {
        const heights = topAreaRefs.current.map((ref) => (ref ? ref.scrollHeight : 0));
        const max = Math.max(...heights);

        if (max > 0) {
          setMaxHeight(max);
        }
      }, 10);
    };

    calculateMaxHeight();
    window.addEventListener("resize", calculateMaxHeight);

    return () => {
      window.removeEventListener("resize", calculateMaxHeight);
    };
  }, [data]);

  if (!data) return null;

  return (
    <section id={secId} className="py-20 md:py-32 bg-base-100">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24">
        <div className="mb-12 md:mb-16">
          <ExalviaSectionHeader badge={data.label} title={data.title} subtitle={data.subtitle} align="center" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.plans?.map((plan, idx) => (
            <ExalviaCard key={idx} className={`h-full flex flex-col p-0 overflow-hidden bg-transparent ${plan.highlight ? "border-warning/60" : ""}`}>
              {/* Top area */}
              <div
                ref={(el) => {
                  if (el) topAreaRefs.current[idx] = el;
                }}
                className={`p-8 flex flex-col gap-3 rounded-bl-4xl ${plan.highlight ? "bg-neutral text-neutral-content" : "bg-neutral text-neutral-content/90"}`}
                style={maxHeight ? { minHeight: `${maxHeight}px` } : {}}
              >
                <div className="flex items-center justify-between mb-3 h-8 ">
                  <ExalviaRating count={plan.rating || 5} spin={plan.highlight && "animate-spin"} />
                  {plan.highlight && <span className="text-xs font-semibold tracking-wide text-warning bg-white/10 px-3 py-1 rounded-full">Popular</span>}
                </div>
                <h3 className="font-instrument-serif text-2xl md:text-3xl font-semibold">{plan.name}</h3>
                <p className="font-montserrat text-sm md:text-base opacity-80 mt-2">{plan.info}</p>
                <div className="mt-auto flex items-end gap-2 mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-warning">{plan.price}</span>
                  <span className="text-sm opacity-70">/ {plan.period}</span>
                </div>
                <ExalviaLinkButton text={plan.ctaLabel || "Pilih Paket"} href="#contact" className={`w-full btn-lg ${plan.highlight ? "btn-warning" : "btn-outline btn-warning"}`} />
              </div>

              {/* Bottom area */}
              <div className="flex flex-col gap-4 p-8 py-10 lex-1">
                <ol className="space-y-3">
                  {plan.features?.map((feat, i) => {
                    const Icon = feat.included ? FaCheckCircle : FaTimesCircle;
                    return (
                      <li key={i} className="flex items-start justify-between gap-3 text-sm md:text-base">
                        <div className="flex items-start gap-2 flex-1 min-w-0">
                          <span className="text-base-content/50 font-semibold tabular-nums">{String(i + 1).padStart(2, "0")}.</span>
                          <span className="text-base-content/80 text-left wrap-break-word">{feat.text}</span>
                        </div>
                        {Icon && (
                          <span className={`${feat.included ? "text-success" : "text-error"} mt-0.5 shrink-0`}>
                            <Icon />
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ol>
                <hr className="my-1" />
                <div className="mt-auto space-y-2">
                  <div className="text-sm text-base-content/60">Waktu pengerjaan: {plan.turnaround}</div>
                  {(() => {
                    const days = parseTurnaroundDays(plan.turnaround);
                    if (typeof days !== "number" || !Number.isFinite(days)) return null;
                    const pct = Math.max(0, Math.min(100, (days / maxTurnaroundDays) * 100));
                    return (
                      <div className="w-full">
                        <div className="h-2 w-full rounded-full bg-base-300 overflow-hidden">
                          <div className="h-full rounded-full bg-primary/50 transition-all duration-500" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </ExalviaCard>
          ))}
        </div>
      </div>
    </section>
  );
}
