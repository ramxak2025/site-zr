"use client";

import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";
import LiveBg from "./LiveBg";
import { formatPrice } from "@/lib/data";
import type { HeroContent, BackgroundSettings, InstallationPricing } from "@/lib/content";

const WA_ICON = <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;

const PHONE_ICON = <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;

export default function Hero({ content, bgSettings, pricing }: { content?: HeroContent; bgSettings?: BackgroundSettings; pricing?: InstallationPricing }) {
  const c = content;
  const bg = bgSettings;

  // Compose price list: if pricing from admin is set, use it (overrides hero.prices)
  const priceItems = pricing
    ? [
        { label: "4 цилиндра", price: `от ${formatPrice(pricing.cyl4.price)} ₽`, desc: pricing.cyl4.note, popular: false },
        { label: "6 цилиндров", price: `от ${formatPrice(pricing.cyl6.price)} ₽`, desc: pricing.cyl6.note, popular: true },
        { label: "8 цилиндров", price: `от ${formatPrice(pricing.cyl8.price)} ₽`, desc: pricing.cyl8.note, popular: false },
        { label: "Прямой впрыск", price: `от ${formatPrice(pricing.directInjection.price)} ₽`, desc: pricing.directInjection.note, popular: false },
      ]
    : c?.prices ?? [];

  return (
    <section className="relative min-h-screen flex flex-col bg-dark overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[120px] mesh-blob" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[100px] mesh-blob-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gray-800/50 rounded-full blur-[120px] mesh-blob-3" />
      </div>

      {bg?.enabled !== false && (
        <LiveBg
          smokeIntensity={bg?.smokeIntensity}
          accentMix={bg?.accentMix}
          speed={bg?.speed}
          particleDensity={bg?.particleDensity}
        />
      )}

      {/* Logo watermark — right-top on mobile, center-right on desktop */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        <div className="absolute top-16 -right-8 sm:top-20 sm:-right-4 lg:top-1/2 lg:right-[8%] lg:-translate-y-1/2 anim-logo-drift">
          <div className="anim-logo-reveal">
            <Image
              src="/images/logo.png"
              alt=""
              width={600}
              height={450}
              className="w-[180px] sm:w-[220px] md:w-[300px] lg:w-[400px] xl:w-[480px] h-auto select-none"
              priority
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12 md:pt-36">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left — Text */}
            <div className="lg:col-span-7">
              <div className="opacity-0 anim-fade delay-1">
                <div className="badge badge-dark mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 anim-pulse" />
                  {c?.badge ?? "Запись открыта"}
                </div>
              </div>

              <div className="opacity-0 anim-fade-up delay-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-white leading-[0.92] tracking-tight">
                  {(c?.headlineLines ?? ["Сократите", "расходы"]).map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                  <span className="text-gradient">{c?.headlineAccent ?? "на топливо"}</span>
                </h1>
              </div>

              {/* Value props instead of boring paragraph */}
              <div className="opacity-0 anim-fade-up delay-3 mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {[
                  { icon: "💰", text: "Газ 28 ₽ vs Бензин 59 ₽" },
                  { icon: "⚡", text: "Установка за 1 день" },
                  { icon: "🛡", text: "Гарантия 2 года" },
                ].map((prop) => (
                  <span key={prop.text} className="flex items-center gap-2 text-white/50 text-sm">
                    <span className="text-base">{prop.icon}</span>
                    {prop.text}
                  </span>
                ))}
              </div>

              <div className="opacity-0 anim-fade-up delay-4 flex flex-wrap items-center gap-3 mt-8">
                <a
                  href={c?.whatsappUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
                >
                  {WA_ICON}
                  {c?.ctaText ?? "Узнать стоимость"}
                </a>
                <a
                  href={`tel:${(c?.phone ?? "+7 988 444-44-85").replace(/[\s()-]/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-white/50 hover:text-white font-medium px-5 py-3 rounded-xl transition-all duration-300"
                >
                  {PHONE_ICON}
                  {c?.phone ?? "+7 988 444-44-85"}
                </a>
              </div>
            </div>

            {/* Right — Price card (glass) */}
            <div className="hidden lg:block lg:col-span-5 opacity-0 anim-fade-up delay-6">
              <div className="glass p-8 relative overflow-hidden">
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 rounded-full bg-gradient-to-b from-primary to-orange-500" />
                    <span className="text-white/50 text-sm tracking-widest uppercase font-medium">Стоимость установки</span>
                  </div>

                  <div className="space-y-2">
                    {priceItems.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                          item.popular
                            ? "bg-white/[0.08] border border-white/10"
                            : "hover:bg-white/[0.04] border border-transparent"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2.5">
                            <span className="text-white font-semibold text-sm">{item.label}</span>
                            {item.popular && (
                              <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded font-bold tracking-wider uppercase">ХИТ</span>
                            )}
                          </div>
                          <span className="text-white/40 text-xs">{item.desc}</span>
                        </div>
                        <span className="text-white font-bold text-display">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {["bg-primary", "bg-orange-500", "bg-emerald-500"].map((cl, i) => (
                          <div key={i} className={`w-8 h-8 rounded-full ${cl} border-2 border-dark flex items-center justify-center`}>
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-white/60 text-xs">OMVL / Lovato / BRC</div>
                        <div className="text-white/30 text-xs">Итальянское оборудование</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {(c?.stats ?? [
              { end: 2000, suffix: "+", label: "установок" },
              { end: 50, prefix: "—", suffix: "%", label: "на топливо" },
              { end: 2, suffix: " года", label: "гарантия" },
              { end: 1, suffix: " день", label: "установка" },
            ]).map((stat, i) => (
              <div
                key={stat.label}
                className={`px-6 py-7 opacity-0 anim-fade-up delay-${Math.min(i + 5, 8)} ${
                  i < 3 ? "border-r border-white/[0.06]" : ""
                } ${i < 2 ? "border-b lg:border-b-0 border-white/[0.06]" : ""}`}
              >
                <div className="text-2xl sm:text-3xl font-black text-white text-display">
                  <AnimatedCounter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} duration={2000} separator={stat.end > 100} />
                </div>
                <div className="text-white/30 text-xs tracking-wider uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
