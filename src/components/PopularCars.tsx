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
    <section className="py-24 md:py-32 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="section-num">06 / ПО МАРКАМ</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 leading-[0.95]">
            Установка ГБО <span className="text-white/20">на ваш авто</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-8">
          {POPULAR_MODELS.map(({ brand, model }) => {
            const slug = `ustanovka-gbo-${brand.toLowerCase()}-${model.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <Link
                key={`${brand}-${model}`}
                href={`/installations/${slug}`}
                className="card group p-5 flex items-center justify-between"
              >
                <div>
                  <div className="text-white font-semibold group-hover:text-primary transition-colors duration-300">{brand} {model}</div>
                  <div className="text-white/15 text-xs tracking-wider uppercase mt-0.5">ГБО</div>
                </div>
                <svg className="w-4 h-4 text-white/10 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            );
          })}
        </div>

        {/* All brands */}
        <div className="border border-white/5 bg-surface p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1.5 h-6 bg-primary" />
            <h3 className="text-white font-bold">Все марки</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {CAR_BRANDS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/installations?brand=${brand.slug}`}
                className="px-4 py-2 border border-white/5 text-white/30 hover:text-primary hover:border-primary/30 text-sm transition-all duration-200"
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
