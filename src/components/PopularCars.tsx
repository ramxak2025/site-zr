import Link from "next/link";
import { CAR_BRANDS } from "@/lib/data";

const POPULAR_MODELS = [
  { brand: "Kia", model: "Rio" }, { brand: "Hyundai", model: "Solaris" },
  { brand: "Toyota", model: "Camry" }, { brand: "Volkswagen", model: "Polo" },
  { brand: "Lada", model: "Vesta" }, { brand: "Skoda", model: "Rapid" },
  { brand: "Renault", model: "Logan" }, { brand: "Nissan", model: "Qashqai" },
  { brand: "Kia", model: "Ceed" }, { brand: "Hyundai", model: "Creta" },
  { brand: "Toyota", model: "Corolla" }, { brand: "Lada", model: "Granta" },
];

export default function PopularCars() {
  return (
    <section className="py-24 md:py-32 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-reveal">
          <span className="section-label">По маркам</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text mt-3 leading-[0.95]">
            Установка ГБО <span className="text-text-muted">на ваш авто</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {POPULAR_MODELS.map(({ brand, model }, i) => {
            const slug = `ustanovka-gbo-${brand.toLowerCase()}-${model.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <Link
                key={`${brand}-${model}`}
                href={`/installations/${slug}`}
                className={`card-light group p-5 flex items-center justify-between animate-reveal delay-${Math.min(i + 1, 8)}`}
              >
                <div>
                  <div className="text-text font-semibold group-hover:text-primary transition-colors duration-300">{brand} {model}</div>
                  <div className="text-text-muted text-xs tracking-wider uppercase mt-0.5">ГБО</div>
                </div>
                <svg className="w-4 h-4 text-text-muted/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            );
          })}
        </div>

        {/* All brands */}
        <div className="card-light p-6 md:p-8 animate-reveal delay-4">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1.5 h-6 bg-primary rounded-full" />
            <h3 className="text-text font-bold">Все марки</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {CAR_BRANDS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/installations?brand=${brand.slug}`}
                className="px-4 py-2 border border-border rounded-full text-text-secondary hover:text-primary hover:border-primary/30 hover:bg-primary/5 text-sm transition-all duration-200"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
