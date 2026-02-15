"use client";

import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";
import LiveBg from "./LiveBg";
import Parallax from "./Parallax";
import type { HeroContent, BackgroundSettings } from "@/lib/content";

const WA_ICON = <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;

export default function Hero({ content, bgSettings }: { content?: HeroContent; bgSettings?: BackgroundSettings }) {
  const c = content;
  const bg = bgSettings;

  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden grain">
      {/* Subtle gradient mesh blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/[0.04] rounded-full mesh-blob" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-accent/[0.03] rounded-full mesh-blob-2" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-surface-alt rounded-full blur-[80px] mesh-blob-3" />
      </div>

      {bg?.enabled !== false && (
        <LiveBg
          smokeIntensity={bg?.smokeIntensity}
          accentMix={bg?.accentMix}
          speed={bg?.speed}
          particleDensity={bg?.particleDensity}
          light
        />
      )}

      {/* Animated logo watermark — parallax gas reveal */}
      <Parallax speed={0.1} className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]">
        <div className="anim-gas-reveal">
          <Image
            src="/images/logo.png"
            alt=""
            width={600}
            height={450}
            className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[500px] xl:w-[580px] h-auto opacity-100 select-none"
            priority
            aria-hidden="true"
          />
        </div>
      </Parallax>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-8 md:pt-36">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="opacity-0 anim-fade delay-1">
                <div className="badge badge-light mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 anim-pulse" />
                  {c?.badge ?? "Запись открыта"}
                </div>
              </div>

              <div className="opacity-0 anim-fade-up delay-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-text leading-[0.92] tracking-tight">
                  {(c?.headlineLines ?? ["Сократите", "расходы"]).map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                  <span className="text-gradient">{c?.headlineAccent ?? "на топливо"}</span>
                </h1>
              </div>

              <div className="opacity-0 anim-line delay-3 w-16 h-0.5 bg-gradient-to-r from-primary to-accent mt-8 mb-8" />

              <div className="opacity-0 anim-fade-up delay-4">
                <p className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-lg">
                  {c?.description ??
                    "Переведите авто на газ за 1\u00a0день — каждый километр будет стоить в 2 раза дешевле. Итальянское оборудование, гарантия 2 года."}
                </p>
              </div>

              <div className="opacity-0 anim-fade-up delay-5 flex flex-col sm:flex-row gap-3 mt-10">
                <a
                  href={c?.whatsappUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
                >
                  {WA_ICON}
                  {c?.ctaText ?? "Узнать стоимость"}
                </a>
                <a
                  href={`tel:${(c?.phone ?? "+7 988 444-44-85").replace(/[\s()-]/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary/30 text-text-secondary hover:text-primary font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300"
                >
                  {c?.phone ?? "+7 988 444-44-85"}
                </a>
              </div>
            </div>

            {/* Price card */}
            <div className="hidden lg:block lg:col-span-5 opacity-0 anim-fade-up delay-6">
              <div className="card p-8 relative overflow-hidden shadow-xl shadow-black/[0.04]">
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/[0.04] blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 rounded-full bg-gradient-to-b from-primary to-accent" />
                    <span className="text-text-muted text-sm tracking-widest uppercase font-medium">Стоимость установки</span>
                  </div>

                  <div className="space-y-2">
                    {(c?.prices ?? [
                      { label: "4 цилиндра", price: "от 23 000 ₽", desc: "Kia, Hyundai, VW, Skoda", popular: false },
                      { label: "6 цилиндров", price: "от 30 000 ₽", desc: "Toyota, Nissan, Ford", popular: true },
                      { label: "8 цилиндров", price: "от 38 000 ₽", desc: "BMW, Mercedes, LC", popular: false },
                    ]).map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                          item.popular
                            ? "bg-primary/[0.05] border border-primary/15"
                            : "hover:bg-surface-alt border border-transparent"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2.5">
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

                  <div className="mt-6 pt-5 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {["bg-primary", "bg-accent", "bg-emerald-500"].map((cl, i) => (
                          <div key={i} className={`w-8 h-8 rounded-full ${cl} border-2 border-white flex items-center justify-center shadow-sm`}>
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-text-secondary text-xs">OMVL / Lovato / BRC</div>
                        <div className="text-text-muted text-xs">Итальянское оборудование</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="relative z-10 border-t border-border/60">
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
                className={`px-6 py-6 opacity-0 anim-fade-up delay-${Math.min(i + 5, 8)} ${
                  i < 3 ? "border-r border-border/60" : ""
                } ${i < 2 ? "border-b lg:border-b-0 border-border/60" : ""}`}
              >
                <div className="text-2xl sm:text-3xl font-black text-text text-display">
                  <AnimatedCounter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} duration={2000} separator={stat.end > 100} />
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
