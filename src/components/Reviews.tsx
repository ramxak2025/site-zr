const REVIEWS = [
  {
    name: "Алексей М.",
    car: "Kia Rio 2023",
    rating: 5,
    text: "Установил ГБО OMVL. Всё отлично, ребята профессионалы. Расход газа 8.5 литров, экономия ощутимая. Рекомендую!",
    platform: "Яндекс Карты",
  },
  {
    name: "Магомед А.",
    car: "Toyota Camry 2022",
    rating: 5,
    text: "Давно хотел поставить газ. В ZR AUTO сделали всё за один день, качественно и аккуратно. Баллон в нишу запаски — багажник свободен.",
    platform: "2ГИС",
  },
  {
    name: "Расул К.",
    car: "Hyundai Solaris 2021",
    rating: 5,
    text: "Уже второй раз обращаюсь — на первую машину ставили, теперь на новую. Гарантия работает, сервис на высоте.",
    platform: "Google",
  },
  {
    name: "Шамиль Г.",
    car: "Volkswagen Polo 2023",
    rating: 5,
    text: "Поставил Stag, доволен. Переключение бензин-газ плавное, никаких рывков. Окупилось за 4 месяца при моём пробеге.",
    platform: "Яндекс Карты",
  },
  {
    name: "Ибрагим Д.",
    car: "Lada Vesta 2024",
    rating: 5,
    text: "Бюджетно и качественно. Digitronic работает отлично. Экономлю около 4000 рублей в месяц. Спасибо команде ZR AUTO!",
    platform: "2ГИС",
  },
  {
    name: "Арсен Б.",
    car: "Skoda Rapid 2022",
    rating: 5,
    text: "Обратился по рекомендации друга. Не пожалел — профессиональный подход, честные цены, работают быстро. Газ тянет как бензин.",
    platform: "Google",
  },
];

const REVIEW_PLATFORMS = [
  {
    name: "Яндекс Карты",
    url: "https://yandex.ru/maps/org/zr_auto/",
    rating: "4.9",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    name: "2ГИС",
    url: "https://2gis.ru/makhachkala/firm/zr_auto",
    rating: "5.0",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    name: "Google",
    url: "https://g.page/zrauto/review",
    rating: "4.8",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
      </svg>
    ),
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Отзывы клиентов</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Нам доверяют тысячи автовладельцев Махачкалы
          </p>
        </div>

        {/* Review platforms */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {REVIEW_PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-surface-light hover:bg-surface-lighter rounded-xl px-5 py-3 border border-white/5 hover:border-primary/20 transition-all group"
            >
              <span className="text-gray-400 group-hover:text-primary transition-colors">{platform.icon}</span>
              <div>
                <div className="text-white font-semibold text-sm">{platform.name}</div>
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-300 text-sm font-medium">{platform.rating}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-surface-light rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all"
            >
              <Stars count={review.rating} />
              <p className="text-gray-300 text-sm leading-relaxed mt-3 mb-4">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold text-sm">{review.name}</div>
                  <div className="text-gray-500 text-xs">{review.car}</div>
                </div>
                <span className="text-xs text-gray-600 bg-white/5 px-2 py-1 rounded">{review.platform}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to leave review */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-3">Оставьте отзыв о нашей работе</p>
          <div className="flex flex-wrap justify-center gap-3">
            {REVIEW_PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light text-sm font-medium transition-colors"
              >
                {platform.name} &rarr;
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
