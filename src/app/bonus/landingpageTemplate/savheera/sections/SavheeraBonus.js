"use client";
import React, { useState, useEffect } from "react";

const SavheeraBonus = ({ data, secId }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const deadline = new Date(data.countdown.targetDate).getTime();
      const distance = deadline - now;

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [data.countdown.targetDate]);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <section id={secId} className="py-20 bg-base-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Urgency Banner with Countdown */}
        {data.countdown && (
          <div className="bg-linear-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 mb-16" data-aos="fade-down">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">{data.countdown.badge}</h3>
              <p className="text-sm text-base-content/70 mb-4">{data.countdown.message}</p>
              <div className="flex justify-center space-x-8 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{formatNumber(timeLeft.hours)}</div>
                  <div className="text-sm text-base-content/60">Jam</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{formatNumber(timeLeft.minutes)}</div>
                  <div className="text-sm text-base-content/60">Menit</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{formatNumber(timeLeft.seconds)}</div>
                  <div className="text-sm text-base-content/60">Detik</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          {data.badge && (
            <span className="badge badge-outline badge-lg text-primary border-primary/20 inline-block mb-6" data-aos="fade-down">
              {data.badge}
            </span>
          )}

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-base-content max-w-3xl mx-auto leading-tight mb-8" data-aos="fade-up">
            {data.headline}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-base-content/80 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up">
            {data.subtitle}
          </p>
        </div>

        {/* Bonus Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {data.items.map((item, index) => (
            <div key={item.id} className="card bg-base-200 border border-base-300 p-6 hover:shadow-lg transition-all duration-300" data-aos="fade-up" >
              <div className="space-y-4">
                {/* Bonus Image */}
                <div className="w-full h-48 bg-base-300 rounded-lg overflow-hidden">
                  <img src={item.image.src} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                </div>

                {/* Bonus Name */}
                <h3 className="text-lg font-semibold text-base-content">{item.name}</h3>

                {/* Bonus Description */}
                <p className="text-sm text-base-content/70 leading-relaxed">{item.description}</p>

                {/* Value Proposition */}
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-xs text-base-content/60 text-center line-through">{item.value.normal}</p>
                  <p className="text-sm font-bold text-primary text-center">{item.value.bonus}</p>
                </div>

                {/* Stock Indicator */}
                {item.stock && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-base-content/60">Status:</span>
                    <span className="font-medium text-success">{item.stock}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="text-center mb-8" data-aos="fade-up" >
          <a href={data.cta.href} className="btn btn-primary btn-lg text-primary-content hover:scale-105 transition-transform duration-300">
            {data.cta.text}
          </a>
        </div>

        {/* Terms */}
        {data.terms && (
          <div className="text-center" data-aos="fade-up" >
            <p className="text-xs text-base-content/60">{data.terms}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SavheeraBonus;
