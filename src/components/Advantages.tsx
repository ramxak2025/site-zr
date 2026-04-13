"use client";

import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

export default function Advantages() {
  return (
    <section id="advantages" className="py-16 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/[0.02] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="mb-10 md:mb-16 text-center max-w-3xl mx-auto">
            <span className="section-label justify-center">Преимущества</span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-text leading-[0.95] tracking-tight">
              Почему <span className="text-gradient">именно мы</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-5">

          {/* 1. 2000+ — big card */}
          <ScrollReveal animation="scale" className="col-span-2 md:col-span-3 lg:col-span-4 lg:row-span-2">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-accent/10 via-accent/3 to-transparent border border-accent/15 p-5 md:p-10 min-h-[180px] md:min-h-[280px] flex flex-col justify-between group h-full">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 blur-3xl rounded-full opacity-30 group-hover:opacity-60 transition-opacity" />
              <div className="relative">
                <div className="text-text-muted text-[10px] md:text-xs tracking-widest uppercase font-semibold mb-2 md:mb-4">Наш опыт</div>
                <div className="text-5xl md:text-[7rem] font-black text-text leading-none tabular-nums">
                  <AnimatedCounter end={2000} suffix="" separator={true} />
                  <span className="text-accent">+</span>
                </div>
                <div className="text-text-secondary text-sm md:text-base mt-1 md:mt-2">установок за 10 лет</div>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. Безопасность */}
          <ScrollReveal animation="fade-up" delay={100} className="col-span-1 md:col-span-3 lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-white border border-border p-4 md:p-8 hover:shadow-lg hover:shadow-emerald-500/5 hover:border-accent/20 transition-all h-full">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              </div>
              <div className="text-text font-bold text-sm md:text-lg mb-0.5 md:mb-1">100% безопасно</div>
              <div className="text-text-muted text-[11px] md:text-sm leading-relaxed">Сертификация ЕЭК ООН</div>
            </div>
          </ScrollReveal>

          {/* 3. 1 день */}
          <ScrollReveal animation="fade-up" delay={200} className="col-span-1 md:col-span-3 lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-white border border-border p-4 md:p-8 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all h-full">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-primary mb-2 md:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <div className="text-2xl md:text-5xl font-black text-text mb-0.5">1 день</div>
              <div className="text-text-muted text-[11px] md:text-sm">Утром привезли — вечером забрали</div>
            </div>
          </ScrollReveal>

          {/* 4. Гарантия */}
          <ScrollReveal animation="fade-up" delay={150} className="col-span-1 md:col-span-3 lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-500/8 to-transparent border border-blue-500/15 p-4 md:p-8 hover:border-blue-500/25 transition-all h-full">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mb-2 md:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <div className="text-2xl md:text-5xl font-black text-text mb-0.5">2 года</div>
              <div className="text-text-muted text-[11px] md:text-sm">Гарантия + бесплатный ремонт</div>
            </div>
          </ScrollReveal>

          {/* 5. Бренды — full width */}
          <ScrollReveal animation="fade-up" delay={250} className="col-span-2 md:col-span-6 lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-surface border border-border p-4 md:p-8 hover:shadow-lg transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
                <div className="flex-1">
                  <div className="text-text font-bold text-base md:text-2xl mb-1">Европейское качество</div>
                  <div className="text-text-muted text-xs md:text-sm leading-relaxed">Никаких «ноунеймов» — только сертифицированное ГБО</div>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2 shrink-0">
                  {["OMVL", "Lovato", "BRC", "Digitronic", "Stag"].map((brand) => (
                    <span key={brand} className="px-2.5 py-1.5 md:px-3.5 md:py-2 bg-white border border-border rounded-lg md:rounded-xl text-text text-xs md:text-sm font-semibold">{brand}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
