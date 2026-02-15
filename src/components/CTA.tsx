export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-dark grain">
      {/* Gradient mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="mesh-blob absolute w-[500px] h-[500px] -bottom-40 -left-40 rounded-full bg-primary/15" />
        <div className="mesh-blob mesh-blob-2 absolute w-[400px] h-[400px] top-0 right-0 rounded-full bg-accent/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="badge badge-dark mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-primary anim-pulse" />
            Не откладывайте
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[0.92] tracking-tight mb-6">
            Каждый день без газа —
            <br />
            <span className="text-gradient">деньги на ветер</span>
          </h2>

          <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            При пробеге 1 500 км/мес вы переплачиваете за бензин{" "}
            <span className="text-white font-medium">~4 000 ₽ каждый месяц</span>.
            Запишитесь сегодня — начните экономить уже на этой неделе.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/79884444485?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B8%20%D0%93%D0%91%D0%9E"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-light text-white font-bold px-8 py-5 text-lg rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Записаться бесплатно
            </a>
            <a
              href="tel:+79884444485"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-semibold px-8 py-5 text-lg rounded-xl transition-all duration-300"
            >
              +7 988 444-44-85
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
