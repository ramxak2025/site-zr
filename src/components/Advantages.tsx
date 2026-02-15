"use client";

import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import Parallax from "./Parallax";

export default function Advantages() {
  return (
    <section id="advantages" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <Parallax speed={-0.08} className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[80px]" />
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="mb-16 text-center">
            <span className="badge badge-red mb-4">Преимущества</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text mt-4 leading-[0.92] tracking-tight">
              Почему <span className="text-gradient">именно мы</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large — Economy (col-span-2) */}
          <ScrollReveal animation="scale" className="col-span-2">
            <div className="card p-8 md:p-10 relative overflow-hidden group h-full shadow-lg shadow-black/[0.03]">
              <div className="absolute top-4 right-4 text-[8rem] md:text-[10rem] font-black text-text/[0.03] text-display leading-none select-none pointer-events-none">
                50%
              </div>
              <div className="relative">
                <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary to-accent mb-6" />
                <h3 className="text-text font-black text-2xl md:text-3xl mb-3">
                  Экономия до <span className="text-gradient"><AnimatedCounter end={50} suffix="%" separator={false} /></span>
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
                  Газ — 28 ₽/л против 59 ₽/л за АИ-95. Установка окупается за 3-6 месяцев при среднем пробеге.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Tall — Experience (row-span-2) */}
          <ScrollReveal animation="fade-up" delay={150} className="row-span-2">
            <div className="card p-8 flex flex-col justify-between relative overflow-hidden h-full border-t-2 border-t-primary shadow-lg shadow-black/[0.03]">
              <div className="relative">
                <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary to-accent mb-6" />
                <h3 className="text-text font-black text-xl mb-3">
                  <AnimatedCounter end={2000} suffix="+" /> установок
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Более 10 лет делаем одно дело. Знаем особенности каждой марки и модели.
                </p>
              </div>
              <div className="text-5xl font-black text-text/[0.04] text-display mt-8">10+</div>
            </div>
          </ScrollReveal>

          {/* Tall — Warranty (row-span-2) */}
          <ScrollReveal animation="fade-up" delay={300} className="row-span-2">
            <div className="card p-8 flex flex-col justify-between relative overflow-hidden h-full border-l-2 border-l-accent shadow-lg shadow-black/[0.03]">
              <div className="relative">
                <div className="w-10 h-1 rounded-full bg-gradient-to-r from-accent to-amber-500 mb-6" />
                <h3 className="text-text font-black text-xl mb-3">Гарантия 2 года</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Расширенная гарантия на оборудование и работу. Гарантийный ремонт — бесплатно.
                </p>
              </div>
              <div className="text-5xl font-black text-text/[0.04] text-display mt-8">24м</div>
            </div>
          </ScrollReveal>

          {/* Safety */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="card p-7 group h-full shadow-lg shadow-black/[0.03]">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              </div>
              <h3 className="text-text font-bold text-lg mb-2">100% безопасно</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Сертифицированное оборудование по стандартам ЕЭК ООН.
              </p>
            </div>
          </ScrollReveal>

          {/* Speed */}
          <ScrollReveal animation="fade-up" delay={350}>
            <div className="card p-7 group h-full shadow-lg shadow-black/[0.03]">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3 className="text-text font-bold text-lg mb-2">Готово за 1 день</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Привозите утром — забираете вечером. Без простоев.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom — European quality */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="mt-4 card p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center border-l-2 border-l-primary shadow-lg shadow-black/[0.03]">
            <div>
              <h3 className="text-text font-black text-2xl mb-3">Европейское качество</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                OMVL, Lovato, BRC, Digitronic, Stag — только проверенные бренды из Италии и Европы.
                Никаких «ноунеймов» и китайских аналогов.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["OMVL", "Lovato", "BRC", "Digitronic", "Stag", "Alpha"].map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 border border-border rounded-lg text-text-secondary text-sm font-medium hover:border-primary/40 hover:text-primary hover:bg-primary/[0.03] transition-all duration-300 cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
