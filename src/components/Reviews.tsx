"use client";

import ScrollReveal from "./ScrollReveal";
import type { ReviewItem, ReviewPlatform } from "@/lib/content";

const DEFAULT_REVIEWS: ReviewItem[] = [
  { name: "Алексей М.", car: "Kia Rio 2023", rating: 5, text: "Установил OMVL — разницы с бензином не чувствую. Расход 8.5 литров, а заправка в 2 раза дешевле. За 4 месяца всё окупилось!", platform: "Яндекс Карты" },
  { name: "Магомед А.", car: "Toyota Camry 2022", rating: 5, text: "Сделали за один день. Баллон в нишу запаски — багажник полностью свободен. Качество на уровне дилера, а цена в разы ниже.", platform: "2ГИС" },
  { name: "Расул К.", car: "Hyundai Solaris 2021", rating: 5, text: "Второй раз обращаюсь — на первую машину ставили, теперь на новую. Гарантия реально работает, ни одной проблемы.", platform: "Google" },
  { name: "Шамиль Г.", car: "VW Polo 2023", rating: 5, text: "Поставил Stag — переключение газ/бензин плавное, никаких рывков. При моём пробеге 2000 км/мес окупилось за 3 месяца.", platform: "Яндекс Карты" },
  { name: "Ибрагим Д.", car: "Lada Vesta 2024", rating: 5, text: "Digitronic работает отлично. Экономлю 4000+ рублей каждый месяц. Жалею, что не поставил раньше!", platform: "2ГИС" },
  { name: "Арсен Б.", car: "Skoda Rapid 2022", rating: 5, text: "Пришёл по рекомендации — не пожалел. Честные цены, профессиональный подход. Газ тянет как бензин, расход адекватный.", platform: "Google" },
];

const DEFAULT_PLATFORMS: ReviewPlatform[] = [
  { name: "Яндекс Карты", url: "https://yandex.ru/maps/org/zr_auto/", rating: "4.9" },
  { name: "2ГИС", url: "https://2gis.ru/makhachkala/firm/zr_auto", rating: "5.0" },
  { name: "Google", url: "https://g.page/zrauto/review", rating: "4.8" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < count ? "text-amber-400" : "text-zinc-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews({
  items,
  platforms,
}: {
  items?: ReviewItem[];
  platforms?: ReviewPlatform[];
}) {
  const reviews = items ?? DEFAULT_REVIEWS;
  const plats = platforms ?? DEFAULT_PLATFORMS;

  return (
    <section id="reviews" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <ScrollReveal animation="fade-left">
            <span className="section-label">Отзывы</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text mt-3 leading-[0.92] tracking-tight">
              Нам <span className="text-text-muted">доверяют</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" className="flex items-end lg:justify-end">
            <div className="flex gap-3">
              {plats.map((p) => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="card px-5 py-3 group">
                  <div className="text-text-secondary text-xs font-medium group-hover:text-text transition-colors">{p.name}</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-text font-bold text-sm text-display">{p.rating}</span>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
              <div className="card p-7 h-full flex flex-col">
                <Stars count={review.rating} />
                <p className="text-text-secondary text-sm leading-relaxed mt-4 mb-6 flex-1">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <div className="text-text font-semibold text-sm">{review.name}</div>
                    <div className="text-text-muted text-xs">{review.car}</div>
                  </div>
                  <span className="badge badge-light text-[10px] tracking-wider uppercase">{review.platform}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
