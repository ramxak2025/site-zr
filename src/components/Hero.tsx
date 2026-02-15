"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-mechanic-working-under-a-car-1920/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/8 to-transparent" />

      {/* Animated blobs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-float delay-3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <div className="opacity-0 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse-red" />
                <span className="text-white/80 text-sm font-medium">Запись открыта &mdash; свободные даты на этой неделе</span>
              </div>
            </div>

            <h1 className="opacity-0 animate-blur-in delay-1 text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.1] mb-6 tracking-tight">
              Сократите расходы
              <br />
              на топливо{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-primary-dark animate-gradient">
                вдвое
              </span>
            </h1>

            <p className="opacity-0 animate-fade-in-up delay-2 text-white/60 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              Переведите авто на газ за <span className="text-white font-semibold">1 день</span> —
              и каждый километр будет стоить в 2 раза дешевле. Итальянское оборудование,
              гарантия 2 года, более 2 000 установок.
            </p>

            {/* Glass stats */}
            <div className="opacity-0 animate-slide-up delay-3 flex flex-wrap gap-3 sm:gap-4 mb-10">
              {[
                { value: "2 000+", label: "установок" },
                { value: "50%", label: "экономия" },
                { value: "2 года", label: "гарантия" },
                { value: "1 день", label: "установка" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-2xl px-4 py-3 sm:px-5 sm:py-4 text-center min-w-[80px]">
                  <div className="text-xl sm:text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-white/40 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="opacity-0 animate-fade-in-up delay-4 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/79884444485?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D1%83%20%D0%93%D0%91%D0%9E"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 glow-sm"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Узнать стоимость
              </a>
              <a
                href="tel:+79884444485"
                className="inline-flex items-center justify-center gap-2 glass hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +7 988 444-44-85
              </a>
            </div>
          </div>

          {/* Right column — glass price card */}
          <div className="hidden lg:block opacity-0 animate-slide-up delay-4">
            <div className="glass-strong rounded-3xl p-8 glow-red">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse-red" />
                <span className="text-white/50 text-sm tracking-wide uppercase">Стоимость установки</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "4 цилиндра", price: "от 23 000 ₽", desc: "Kia, Hyundai, VW, Skoda" },
                  { label: "6 цилиндров", price: "от 30 000 ₽", desc: "Toyota, Nissan, Ford", popular: true },
                  { label: "8 цилиндров", price: "от 38 000 ₽", desc: "BMW, Mercedes, Land Cruiser" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                      item.popular ? "glass-red glow-sm" : "glass-light hover:bg-white/6"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-semibold">{item.label}</span>
                        {item.popular && (
                          <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">ХИТ</span>
                        )}
                      </div>
                      <span className="text-white/30 text-xs">{item.desc}</span>
                    </div>
                    <span className="text-white font-bold text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-4 glass rounded-2xl">
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Окупается за 3–6 месяцев при пробеге от 1 000 км/мес
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="glass rounded-full p-2">
          <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
