"use client";

import AnimatedBg from "./AnimatedBg";
import AnimatedCounter from "./AnimatedCounter";
import FuelGauge from "./FuelGauge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-surface to-surface-alt">
      {/* Animated decorative background */}
      <AnimatedBg />

      {/* Video background — very low opacity for light theme */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-mechanic-working-under-a-car-1920/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-surface-alt/95" />

      {/* Animated gradient mesh overlay — subtle red glow */}
      <div
        className="absolute inset-0 opacity-[0.06] animate-gradient pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, #e11d24 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #ff3b3b 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, #e11d24 0%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Road lines — vertical dashed decorative */}
      <div className="absolute left-12 top-0 bottom-0 w-px overflow-hidden hidden lg:block opacity-10">
        <div className="animate-road-dash h-full"
          style={{
            background: "repeating-linear-gradient(to bottom, #e11d24 0px, #e11d24 20px, transparent 20px, transparent 40px)",
          }}
        />
      </div>
      <div className="absolute right-12 top-0 bottom-0 w-px overflow-hidden hidden lg:block opacity-10">
        <div className="animate-road-dash h-full"
          style={{
            animationDelay: "0.7s",
            background: "repeating-linear-gradient(to bottom, #e11d24 0px, #e11d24 20px, transparent 20px, transparent 40px)",
          }}
        />
      </div>

      {/* Giant watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 select-none pointer-events-none hidden lg:block">
        <div className="text-[20rem] font-black text-text/[0.03] text-display leading-none">
          —50%
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-8 md:pt-32">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left — 3 cols */}
            <div className="lg:col-span-3">
              <div className="opacity-0 animate-fade delay-1">
                <div className="flex items-center gap-3 mb-10">
                  <span className="w-2 h-2 bg-primary animate-pulse-dot" />
                  <span className="text-text-secondary text-sm tracking-wider uppercase">Запись открыта</span>
                </div>
              </div>

              <div className="opacity-0 animate-reveal delay-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-text leading-[0.95] tracking-tight mb-6">
                  СОКРАТИТЕ
                  <br />
                  РАСХОДЫ
                  <br />
                  <span className="text-primary">НА ТОПЛИВО</span>
                </h1>
              </div>

              {/* Red accent line */}
              <div className="opacity-0 animate-line delay-3 w-24 h-0.5 bg-primary mb-8" />

              <div className="opacity-0 animate-reveal delay-4">
                <p className="text-text-secondary text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                  Переведите авто на газ за{" "}
                  <span className="text-text font-semibold">1&nbsp;день</span> — и каждый километр
                  будет стоить в 2 раза дешевле. Итальянское оборудование,
                  гарантия 2 года.
                </p>
              </div>

              <div className="opacity-0 animate-reveal delay-5 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/79884444485?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D1%83%20%D0%93%D0%91%D0%9E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-pulse-glow group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Узнать стоимость
                </a>
                <a
                  href="tel:+79884444485"
                  className="inline-flex items-center justify-center gap-2 border border-border hover:border-text/30 text-text font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  +7 988 444-44-85
                </a>
              </div>
            </div>

            {/* Right — 2 cols — Fuel Gauge + Price card */}
            <div className="hidden lg:flex lg:col-span-2 flex-col gap-6 opacity-0 animate-reveal delay-6">
              {/* Animated fuel gauge */}
              <FuelGauge />

              {/* Price card */}
              <div className="bg-white border border-border rounded-2xl p-6 shadow-lg shadow-black/5 card-tilt">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-8 bg-primary rounded-full" />
                  <span className="text-text-muted text-sm tracking-widest uppercase">Стоимость</span>
                </div>
                <div className="space-y-1">
                  {[
                    { label: "4 цилиндра", price: "от 23 000 ₽", desc: "Kia, Hyundai, VW, Skoda" },
                    { label: "6 цилиндров", price: "от 30 000 ₽", desc: "Toyota, Nissan, Ford", popular: true },
                    { label: "8 цилиндров", price: "от 38 000 ₽", desc: "BMW, Mercedes, LC" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between p-4 rounded-xl border-l-2 transition-all duration-300 hover:bg-surface-alt ${
                        item.popular ? "border-l-primary bg-primary/5" : "border-l-transparent"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-text font-semibold text-sm">{item.label}</span>
                          {item.popular && (
                            <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded font-bold tracking-wider uppercase">ХИТ</span>
                          )}
                        </div>
                        <span className="text-text-muted text-xs">{item.desc}</span>
                      </div>
                      <span className="text-text font-bold text-display">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats strip with animated counters */}
      <div className="relative z-10 border-t border-border bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { end: 2000, suffix: "+", label: "установок" },
              { end: 50, prefix: "—", suffix: "%", label: "на топливо" },
              { end: 2, suffix: " года", label: "гарантия" },
              { end: 1, suffix: " день", label: "установка" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`px-6 py-6 opacity-0 animate-reveal delay-${i + 5} ${
                  i < 3 ? "border-r border-border" : ""
                } ${i < 2 ? "border-b lg:border-b-0 border-border" : ""}`}
              >
                <div className="text-2xl sm:text-3xl font-black text-text text-display">
                  <AnimatedCounter
                    end={stat.end}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2000}
                    separator={stat.end > 100}
                  />
                </div>
                <div className="text-text-muted text-xs tracking-wider uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
