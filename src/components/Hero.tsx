"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          poster="/images/hero-poster.jpg"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-mechanic-working-under-a-car-1920/1080p.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay with red tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-surface" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="animate-fade-in-up">
            {/* Logo badge */}
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/images/logo.png"
                alt="ZR AUTO"
                width={64}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </div>

            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-red" />
              <span className="text-primary text-sm font-medium">Более 10 лет опыта</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Установка{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                ГБО
              </span>
              <br />
              в Махачкале
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              Экономьте до <span className="text-white font-semibold">50% на топливе</span> с профессиональной установкой газобаллонного оборудования. Итальянские и европейские системы.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mb-10">
              <div>
                <div className="text-3xl font-black text-white">2000+</div>
                <div className="text-gray-500 text-sm">установок</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">10+</div>
                <div className="text-gray-500 text-sm">лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">2 года</div>
                <div className="text-gray-500 text-sm">гарантия</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/79884444485?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D1%83%20%D0%93%D0%91%D0%9E"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Записаться в WhatsApp
              </a>
              <a
                href="tel:+79884444485"
                className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-primary/50 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:bg-primary/10"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Позвонить
              </a>
            </div>
          </div>

          {/* Right column - price card */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="bg-surface-light/80 backdrop-blur-sm rounded-3xl p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-gray-400 text-sm">Стоимость установки</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "4 цилиндра", price: "от 23 000 ₽", popular: false },
                    { label: "6 цилиндров", price: "от 30 000 ₽", popular: true },
                    { label: "8 цилиндров", price: "от 38 000 ₽", popular: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between p-4 rounded-xl ${
                        item.popular ? "bg-primary/10 border border-primary/20" : "bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-white">{item.label}</span>
                      </div>
                      <span className="text-white font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20">
                  <div className="flex items-center gap-2 text-accent text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Окупаемость за 3-6 месяцев
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
