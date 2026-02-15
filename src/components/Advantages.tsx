export default function Advantages() {
  return (
    <section id="advantages" className="py-24 md:py-32 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="section-num">02 / ПРЕИМУЩЕСТВА</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 leading-[0.95]">
            Почему <span className="text-white/20">именно мы</span>
          </h2>
        </div>

        {/* Bento grid — varied sizes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {/* Large — Economy */}
          <div className="col-span-2 card p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-[8rem] md:text-[12rem] font-black text-white/[0.03] text-display leading-none select-none">50%</div>
            <div className="relative">
              <div className="w-8 h-0.5 bg-primary mb-6" />
              <h3 className="text-white font-black text-2xl md:text-3xl mb-3">Экономия до 50%</h3>
              <p className="text-white/30 text-sm leading-relaxed max-w-sm">
                Газ — 28 ₽/л против 59 ₽/л за АИ-95. Установка окупается за 3-6 месяцев при среднем пробеге.
              </p>
            </div>
          </div>

          {/* Tall — Experience */}
          <div className="row-span-2 card p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute bottom-4 right-4 text-[7rem] font-black text-white/[0.03] text-display leading-none select-none">2K+</div>
            <div>
              <div className="w-8 h-0.5 bg-primary mb-6" />
              <h3 className="text-white font-black text-xl mb-3">2 000+ установок</h3>
              <p className="text-white/30 text-sm leading-relaxed">
                Более 10 лет делаем одно дело. Знаем особенности каждой марки и модели.
              </p>
            </div>
            <div className="text-5xl font-black text-primary/10 text-display mt-8">10+</div>
          </div>

          {/* Warranty */}
          <div className="row-span-2 card p-8 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-8 h-0.5 bg-primary mb-6" />
              <h3 className="text-white font-black text-xl mb-3">Гарантия 2 года</h3>
              <p className="text-white/30 text-sm leading-relaxed">
                Расширенная гарантия на оборудование и работу. Гарантийный ремонт — бесплатно.
              </p>
            </div>
            <div className="text-5xl font-black text-primary/10 text-display mt-8">24м</div>
          </div>

          {/* Safety */}
          <div className="card p-8 group">
            <div className="w-8 h-0.5 bg-primary mb-6" />
            <h3 className="text-white font-bold text-lg mb-2">100% безопасно</h3>
            <p className="text-white/30 text-sm leading-relaxed">
              Сертифицированное оборудование по стандартам ЕЭК ООН.
            </p>
          </div>

          {/* Speed */}
          <div className="card p-8 group">
            <div className="w-8 h-0.5 bg-primary mb-6" />
            <h3 className="text-white font-bold text-lg mb-2">Готово за 1 день</h3>
            <p className="text-white/30 text-sm leading-relaxed">
              Привозите утром — забираете вечером. Без простоев.
            </p>
          </div>
        </div>

        {/* Bottom — European quality (full width accent card) */}
        <div className="mt-2 card-accent p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-white font-black text-2xl mb-3">Европейское качество</h3>
            <p className="text-white/30 text-sm leading-relaxed">
              OMVL, Lovato, BRC, Digitronic, Stag — только проверенные бренды из Италии и Европы.
              Никаких «ноунеймов» и китайских аналогов.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["OMVL", "Lovato", "BRC", "Digitronic", "Stag", "Alpha"].map((brand) => (
              <span key={brand} className="px-4 py-2 border border-white/5 text-white/40 text-sm font-medium hover:border-primary/30 hover:text-white transition-all duration-300">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
