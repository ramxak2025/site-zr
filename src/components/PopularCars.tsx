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
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <span className="section-label justify-center">По маркам</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text mt-3 leading-[0.92] tracking-tight">
            Установка ГБО <span className="text-text-muted">на ваш авто</span>
          </h2>
        </div>

        {/* Bento Grid — 12 cols */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-4 mb-6">
          {/* Featured cars — larger cards for top 4 */}
          {POPULAR_MODELS.slice(0, 4).map(({ brand, model }) => {
            const slug = `ustanovka-gbo-${brand.toLowerCase()}-${model.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <Link
                key={`${brand}-${model}`}
                href={`/installations/${slug}`}
                className="col-span-1 md:col-span-3 lg:col-span-3 card group p-6 flex flex-col justify-between min-h-[110px] hover:border-primary/20"
              >
                <span className="text-text font-bold text-lg group-hover:text-primary transition-colors duration-300">
                  {brand} {model}
                </span>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-text-muted text-xs">Установка ГБО</span>
                  <svg className="w-4 h-4 text-text-muted/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            );
          })}

          {/* Remaining models — compact cards */}
          {POPULAR_MODELS.slice(4).map(({ brand, model }) => {
            const slug = `ustanovka-gbo-${brand.toLowerCase()}-${model.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <Link
                key={`${brand}-${model}`}
                href={`/installations/${slug}`}
                className="col-span-1 md:col-span-2 lg:col-span-3 card group p-4 md:p-5 flex items-center justify-between"
              >
                <span className="text-text font-semibold text-sm group-hover:text-primary transition-colors duration-300">{brand} {model}</span>
                <svg className="w-4 h-4 text-text-muted/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            );
          })}
        </div>

        {/* All brands — wide bento card */}
        <div className="card p-6 md:p-8 relative overflow-hidden">
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/[0.03] rounded-full blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-primary to-accent" />
              <h3 className="text-text font-bold text-lg">Все марки</h3>
              <span className="badge badge-light text-xs">{CAR_BRANDS.length} марок</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {CAR_BRANDS.map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/installations?brand=${brand.slug}`}
                  className="px-4 py-2 border border-border rounded-xl text-text-secondary hover:text-primary hover:border-primary/30 hover:bg-primary/5 text-sm font-medium transition-all duration-200"
                >
                  {brand.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
