"use client";

import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

export default function Advantages() {
  return (
    <section id="advantages" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="mb-16">
            <span className="section-label">Преимущества</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text mt-3 leading-[0.95]">
              Почему <span className="text-text/20">именно мы</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large — Economy (col-span-2) */}
          <ScrollReveal animation="scale" className="col-span-2">
            <div className="card-light p-8 md:p-10 relative overflow-hidden group h-full">
              <div className="absolute top-4 right-4 text-[8rem] md:text-[12rem] font-black text-text/[0.03] text-display leading-none select-none pointer-events-none">
                50%
              </div>
              <div className="relative">
                <div className="w-10 h-1 bg-primary rounded-full mb-6" />
                <h3 className="text-text font-black text-2xl md:text-3xl mb-3">
                  Экономия до <span className="text-primary"><AnimatedCounter end={50} suffix="%" separator={false} /></span>
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
                  Газ — 28 ₽/л против 59 ₽/л за АИ-95. Установка окупается за 3-6 месяцев при среднем пробеге.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Tall — Experience (row-span-2) */}
          <ScrollReveal animation="fade-up" delay={150} className="row-span-2">
            <div className="card-light p-8 flex flex-col justify-between relative overflow-hidden group border-t-4 border-t-primary h-full">
              <div className="absolute bottom-4 right-4 text-[7rem] font-black text-text/[0.03] text-display leading-none select-none pointer-events-none">
                2K+
              </div>
              <div className="relative">
                <div className="w-10 h-1 bg-primary rounded-full mb-6" />
                <h3 className="text-text font-black text-xl mb-3">
                  <AnimatedCounter end={2000} suffix="+" /> установок
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Более 10 лет делаем одно дело. Знаем особенности каждой марки и модели.
                </p>
              </div>
              <div className="text-5xl font-black text-primary/10 text-display mt-8">10+</div>
            </div>
          </ScrollReveal>

          {/* Tall — Warranty (row-span-2) */}
          <ScrollReveal animation="fade-up" delay={300} className="row-span-2">
            <div className="card-light p-8 flex flex-col justify-between relative overflow-hidden group border-l-4 border-l-primary h-full">
              <div className="relative">
                <div className="w-10 h-1 bg-primary rounded-full mb-6" />
                <h3 className="text-text font-black text-xl mb-3">Гарантия 2 года</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Расширенная гарантия на оборудование и работу. Гарантийный ремонт — бесплатно.
                </p>
              </div>
              <div className="text-5xl font-black text-primary/10 text-display mt-8">24м</div>
            </div>
          </ScrollReveal>

          {/* Safety */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="card-light card-tilt p-8 group border-t-2 border-t-primary/30 h-full">
              <div className="w-10 h-1 bg-primary rounded-full mb-6" />
              <h3 className="text-text font-bold text-lg mb-2">100% безопасно</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Сертифицированное оборудование по стандартам ЕЭК ООН.
              </p>
            </div>
          </ScrollReveal>

          {/* Speed */}
          <ScrollReveal animation="fade-up" delay={350}>
            <div className="card-light card-tilt p-8 group border-t-2 border-t-primary/30 h-full">
              <div className="w-10 h-1 bg-primary rounded-full mb-6" />
              <h3 className="text-text font-bold text-lg mb-2">Готово за 1 день</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Привозите утром — забираете вечером. Без простоев.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom — European quality */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="mt-4 card-light p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center border-l-4 border-l-primary">
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
                  className="px-4 py-2 border border-border rounded-lg text-text-secondary text-sm font-medium hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
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
