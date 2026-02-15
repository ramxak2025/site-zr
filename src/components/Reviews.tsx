const REVIEWS = [
  { name: "Алексей М.", car: "Kia Rio 2023", rating: 5, text: "Установил OMVL — разницы с бензином не чувствую. Расход 8.5 литров, а заправка в 2 раза дешевле. За 4 месяца всё окупилось!", platform: "Яндекс Карты" },
  { name: "Магомед А.", car: "Toyota Camry 2022", rating: 5, text: "Сделали за один день. Баллон в нишу запаски — багажник полностью свободен. Качество на уровне дилера, а цена в разы ниже.", platform: "2ГИС" },
  { name: "Расул К.", car: "Hyundai Solaris 2021", rating: 5, text: "Второй раз обращаюсь — на первую машину ставили, теперь на новую. Гарантия реально работает, ни одной проблемы.", platform: "Google" },
  { name: "Шамиль Г.", car: "VW Polo 2023", rating: 5, text: "Поставил Stag — переключение газ/бензин плавное, никаких рывков. При моём пробеге 2000 км/мес окупилось за 3 месяца.", platform: "Яндекс Карты" },
  { name: "Ибрагим Д.", car: "Lada Vesta 2024", rating: 5, text: "Digitronic работает отлично. Экономлю 4000+ рублей каждый месяц. Жалею, что не поставил раньше!", platform: "2ГИС" },
  { name: "Арсен Б.", car: "Skoda Rapid 2022", rating: 5, text: "Пришёл по рекомендации — не пожалел. Честные цены, профессиональный подход. Газ тянет как бензин, расход адекватный.", platform: "Google" },
];

const PLATFORMS = [
  { name: "Яндекс Карты", url: "https://yandex.ru/maps/org/zr_auto/", rating: "4.9" },
  { name: "2ГИС", url: "https://2gis.ru/makhachkala/firm/zr_auto", rating: "5.0" },
  { name: "Google", url: "https://g.page/zrauto/review", rating: "4.8" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < count ? "text-amber-400" : "text-white/10"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-surface-light" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">Отзывы</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">Нам доверяют</h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Более 2 000 довольных клиентов — читайте реальные отзывы
          </p>
        </div>

        {/* Platforms */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {PLATFORMS.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="glass hover:glass-strong rounded-2xl px-6 py-4 transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-white font-semibold text-sm">{p.name}</div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-white/60 text-sm font-medium">{p.rating}</span>
                  </div>
                </div>
                <svg className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
              </div>
            </a>
          ))}
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((review, i) => (
            <div key={i} className={`glass hover:glass-strong rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 opacity-0 animate-slide-up delay-${(i % 3) + 1}`}>
              <Stars count={review.rating} />
              <p className="text-white/60 text-sm leading-relaxed mt-3 mb-5">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold text-sm">{review.name}</div>
                  <div className="text-white/30 text-xs">{review.car}</div>
                </div>
                <span className="text-[10px] text-white/20 glass rounded-lg px-2 py-1">{review.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
