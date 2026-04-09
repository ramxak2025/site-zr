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
    <section id="reviews" className="py-20 md:py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-amber-500/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            <span className="section-label justify-center">Отзывы</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text mt-3 leading-[0.92] tracking-tight">
              Нам <span className="text-text-muted">доверяют</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento Grid — 12 cols asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-5">

          {/* Platforms rating bar — full width */}
          <ScrollReveal animation="fade-up" className="md:col-span-6 lg:col-span-12">
            <div className="card p-5 md:p-6">
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                {plats.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-surface hover:bg-white border border-border hover:border-primary/20 transition-all group"
                  >
                    <div>
                      <div className="text-text-secondary text-xs font-medium group-hover:text-text transition-colors">{p.name}</div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <span className="text-text font-black text-lg text-display">{p.rating}</span>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-text-muted/30 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Featured review — large card */}
          <ScrollReveal animation="scale" className="md:col-span-6 lg:col-span-7">
            <div className="card p-7 md:p-8 h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/[0.03] rounded-full blur-3xl group-hover:bg-amber-400/[0.06] transition-all" />
              <div className="relative">
                <Stars count={reviews[0].rating} />
                <blockquote className="text-text text-lg md:text-xl leading-relaxed mt-5 mb-6 font-medium">
                  &ldquo;{reviews[0].text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {reviews[0].name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-text font-semibold">{reviews[0].name}</div>
                    <div className="text-text-muted text-xs">{reviews[0].car}</div>
                  </div>
                  <span className="badge badge-light text-[10px] tracking-wider uppercase ml-auto">{reviews[0].platform}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Second review — stacked */}
          <ScrollReveal animation="fade-up" delay={100} className="md:col-span-3 lg:col-span-5">
            <div className="card p-6 md:p-7 h-full">
              <Stars count={reviews[1].rating} />
              <p className="text-text-secondary text-sm leading-relaxed mt-4 mb-5">&ldquo;{reviews[1].text}&rdquo;</p>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <div className="text-text font-semibold text-sm">{reviews[1].name}</div>
                  <div className="text-text-muted text-xs">{reviews[1].car}</div>
                </div>
                <span className="badge badge-light text-[10px] tracking-wider uppercase">{reviews[1].platform}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Remaining reviews — smaller cards */}
          {reviews.slice(2).map((review, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={(i + 2) * 80} className="md:col-span-3 lg:col-span-4">
              <div className="card p-6 h-full flex flex-col">
                <Stars count={review.rating} />
                <p className="text-text-secondary text-sm leading-relaxed mt-3 mb-4 flex-1">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between border-t border-border pt-3">
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
