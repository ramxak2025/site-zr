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
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-light to-surface" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-primary/3 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">По маркам</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">Установка ГБО на ваш автомобиль</h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Работаем со всеми популярными марками — найдите свою
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {POPULAR_MODELS.map(({ brand, model }) => {
            const slug = `ustanovka-gbo-${brand.toLowerCase()}-${model.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <Link key={`${brand}-${model}`} href={`/installations/${slug}`} className="group glass hover:glass-red rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5">
                <div className="text-white font-semibold group-hover:text-primary transition-colors duration-300">{brand} {model}</div>
                <div className="text-white/25 text-sm">Установка ГБО</div>
              </Link>
            );
          })}
        </div>

        <div className="glass rounded-3xl p-6 md:p-8">
          <h3 className="text-white font-bold text-lg mb-4">Все марки</h3>
          <div className="flex flex-wrap gap-2">
            {CAR_BRANDS.map((brand) => (
              <Link key={brand.slug} href={`/installations?brand=${brand.slug}`} className="px-4 py-2 glass hover:glass-red text-white/50 hover:text-primary rounded-xl text-sm transition-all duration-200">
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
