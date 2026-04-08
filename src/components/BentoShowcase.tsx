import Link from "next/link";
import { formatPrice } from "@/lib/data";
import type { InstallationPricing, FuelPricesContent } from "@/lib/content";

const WA_URL = "https://wa.me/79884444485";

const SaveSvg = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

interface Props {
  pricing: InstallationPricing;
  fuelPrices: FuelPricesContent;
}

/**
 * BENTO — центральный продающий блок, bento-style.
 * Цель: в одном экране дать покупателю все ключевые аргументы и CTA.
 */
export default function BentoShowcase({ pricing, fuelPrices }: Props) {
  const econ95 = Math.round((1 - fuelPrices.lpg / fuelPrices.gasoline95) * 100);

  return (
    <section className="relative py-20 md:py-28 bg-dark overflow-hidden">
      {/* BG mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/[0.07] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <span className="badge badge-dark mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Почему ZR AUTO
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tight">
            Всё что нужно знать
            <br />
            <span className="text-gradient">перед установкой</span>
          </h2>
        </div>

        {/* BENTO GRID — 12 cols, asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-auto gap-4 md:gap-5">
          {/* 1. Экономия % — большая карточка */}
          <div className="md:col-span-3 lg:col-span-5 lg:row-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 p-8 md:p-10 min-h-[280px] flex flex-col justify-between group">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/30 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative">
              <div className="text-white/40 text-xs tracking-widest uppercase font-semibold mb-3">Ваша экономия</div>
              <div className="text-[8rem] md:text-[10rem] font-black text-white leading-none tabular-nums">
                {econ95}<span className="text-primary">%</span>
              </div>
              <div className="text-white/60 text-sm md:text-base mt-2">
                на каждом литре топлива
              </div>
            </div>
            <div className="relative mt-6 flex items-center gap-4">
              <div className="flex-1">
                <div className="text-white/40 text-xs mb-1">Газ vs АИ-95</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-emerald-400 font-bold text-lg">{fuelPrices.lpg} ₽</span>
                  <span className="text-white/30 text-sm line-through">{fuelPrices.gasoline95} ₽</span>
                </div>
              </div>
              <Link
                href="/calculator"
                className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all backdrop-blur flex items-center gap-2"
              >
                Калькулятор {SaveSvg}
              </Link>
            </div>
          </div>

          {/* 2. Гарантия 2 года */}
          <div className="md:col-span-3 lg:col-span-4 relative overflow-hidden rounded-3xl bg-white/[0.04] border border-white/10 p-6 md:p-8 min-h-[140px] hover:bg-white/[0.06] transition-all">
            <svg className="w-8 h-8 text-emerald-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <div className="text-4xl md:text-5xl font-black text-white mb-1">2 года</div>
            <div className="text-white/50 text-sm">Гарантия на оборудование и работу</div>
          </div>

          {/* 3. 1 день */}
          <div className="md:col-span-3 lg:col-span-3 relative overflow-hidden rounded-3xl bg-white/[0.04] border border-white/10 p-6 md:p-8 min-h-[140px] hover:bg-white/[0.06] transition-all">
            <svg className="w-8 h-8 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-4xl md:text-5xl font-black text-white mb-1">1 день</div>
            <div className="text-white/50 text-sm">Быстрый монтаж</div>
          </div>

          {/* 4. 4 цилиндра */}
          <div className="lg:col-span-3 relative overflow-hidden rounded-3xl bg-white/[0.04] border border-white/10 p-6 hover:border-primary/30 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-white/40 text-xs tracking-widest uppercase font-semibold">4 цилиндра</div>
                <div className="text-xs text-white/30 mt-1">{pricing.cyl4.note}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black group-hover:bg-primary/20 transition-all">
                4
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-black text-white tabular-nums">
              от {formatPrice(pricing.cyl4.price)} ₽
            </div>
          </div>

          {/* 5. 6 цилиндров */}
          <div className="lg:col-span-3 relative overflow-hidden rounded-3xl bg-primary/10 border border-primary/30 p-6 hover:bg-primary/15 transition-all group">
            <div className="absolute top-4 right-4 text-[10px] bg-primary text-white px-2 py-0.5 rounded font-bold tracking-wider uppercase">
              ХИТ
            </div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-white/50 text-xs tracking-widest uppercase font-semibold">6 цилиндров</div>
                <div className="text-xs text-white/40 mt-1">{pricing.cyl6.note}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/30 flex items-center justify-center text-white font-black">
                6
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-black text-white tabular-nums">
              от {formatPrice(pricing.cyl6.price)} ₽
            </div>
          </div>

          {/* 6. 8 цилиндров */}
          <div className="lg:col-span-3 relative overflow-hidden rounded-3xl bg-white/[0.04] border border-white/10 p-6 hover:border-primary/30 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-white/40 text-xs tracking-widest uppercase font-semibold">8 цилиндров</div>
                <div className="text-xs text-white/30 mt-1">{pricing.cyl8.note}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black group-hover:bg-primary/20 transition-all">
                8
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-black text-white tabular-nums">
              от {formatPrice(pricing.cyl8.price)} ₽
            </div>
          </div>

          {/* 7. Direct Injection */}
          <div className="lg:col-span-3 relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 p-6 hover:border-orange-500/40 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-orange-400/80 text-xs tracking-widest uppercase font-semibold">Прямой впрыск</div>
                <div className="text-xs text-white/30 mt-1">{pricing.directInjection.note}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-black text-sm">
                DI
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-black text-white tabular-nums">
              от {formatPrice(pricing.directInjection.price)} ₽
            </div>
          </div>

          {/* 8. CTA запись */}
          <div className="md:col-span-6 lg:col-span-8 relative overflow-hidden rounded-3xl bg-primary p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-white/80 text-xs tracking-widest uppercase font-semibold mb-2">Запишитесь сегодня</div>
              <div className="text-2xl md:text-3xl font-black text-white leading-tight">
                Бесплатная консультация
                <br />и точный расчёт за 5 минут
              </div>
            </div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-white hover:bg-gray-100 text-primary font-black px-6 py-4 rounded-xl transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
            >
              В WhatsApp
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
            </a>
          </div>

          {/* 9. Итальянское оборудование */}
          <div className="md:col-span-6 lg:col-span-4 relative overflow-hidden rounded-3xl bg-white/[0.04] border border-white/10 p-6 md:p-8">
            <div className="text-white/40 text-xs tracking-widest uppercase font-semibold mb-3">Оборудование</div>
            <div className="flex flex-wrap gap-2 mb-3">
              {["OMVL", "Lovato", "BRC", "Stag", "Digitronic"].map((brand) => (
                <span key={brand} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm font-semibold">
                  {brand}
                </span>
              ))}
            </div>
            <div className="text-white/50 text-sm">
              Только сертифицированное итальянское и европейское ГБО 4 поколения
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
