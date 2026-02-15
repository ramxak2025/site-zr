import Link from "next/link";
import { CAR_BRANDS } from "@/lib/data";

const POPULAR_MODELS = [
  { brand: "Kia", model: "Rio" },
  { brand: "Hyundai", model: "Solaris" },
  { brand: "Toyota", model: "Camry" },
  { brand: "Volkswagen", model: "Polo" },
  { brand: "Lada", model: "Vesta" },
  { brand: "Skoda", model: "Rapid" },
  { brand: "Renault", model: "Logan" },
  { brand: "Nissan", model: "Qashqai" },
  { brand: "Kia", model: "Ceed" },
  { brand: "Hyundai", model: "Creta" },
  { brand: "Toyota", model: "Corolla" },
  { brand: "Lada", model: "Granta" },
];

export default function PopularCars() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Установка ГБО по маркам</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Устанавливаем ГБО на все популярные марки автомобилей
          </p>
        </div>

        {/* Popular models grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {POPULAR_MODELS.map(({ brand, model }) => {
            const slug = `ustanovka-gbo-${brand.toLowerCase()}-${model.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <Link
                key={`${brand}-${model}`}
                href={`/installations/${slug}`}
                className="group bg-surface-light hover:bg-surface-lighter rounded-xl p-4 border border-white/5 hover:border-primary/20 transition-all"
              >
                <div className="text-white font-semibold group-hover:text-primary transition-colors">
                  {brand} {model}
                </div>
                <div className="text-gray-500 text-sm">Установка ГБО</div>
              </Link>
            );
          })}
        </div>

        {/* All brands */}
        <div className="bg-surface-light rounded-2xl p-6 md:p-8 border border-white/5">
          <h3 className="text-white font-bold text-lg mb-4">Все марки</h3>
          <div className="flex flex-wrap gap-2">
            {CAR_BRANDS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/installations?brand=${brand.slug}`}
                className="px-4 py-2 bg-white/5 hover:bg-primary/10 text-gray-300 hover:text-primary rounded-lg text-sm transition-all"
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
