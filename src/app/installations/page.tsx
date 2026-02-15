import type { Metadata } from "next";
import { getPublishedInstallations } from "@/lib/storage";
import { CAR_BRANDS } from "@/lib/data";
import InstallationCard from "@/components/InstallationCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Примеры установки ГБО — Портфолио работ",
  description:
    "Примеры установки ГБО на различные марки автомобилей: Kia, Hyundai, Toyota, Volkswagen и другие. Фото работ, описание и цены. ZR AUTO, Махачкала.",
  alternates: {
    canonical: "https://zrauto.ru/installations",
  },
};

export const dynamic = "force-dynamic";

export default async function InstallationsPage({
  searchParams,
}: {
  searchParams: Promise<{ brand?: string }>;
}) {
  const params = await searchParams;
  const installations = await getPublishedInstallations();
  const brandFilter = params.brand;

  const filtered = brandFilter
    ? installations.filter(
        (i) => i.carBrand.toLowerCase() === brandFilter.toLowerCase()
      )
    : installations;

  const activeBrand = CAR_BRANDS.find((b) => b.slug === brandFilter);

  return (
    <div className="pt-20 md:pt-24 pb-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-gray-500">
          <a href="/" className="hover:text-primary transition-colors">Главная</a>
          <span className="mx-2">/</span>
          <span className="text-gray-300">
            {activeBrand ? `Установка ГБО ${activeBrand.name}` : "Примеры установок"}
          </span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {activeBrand
              ? `Установка ГБО на ${activeBrand.name}`
              : "Примеры установок ГБО"}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            {activeBrand
              ? `Примеры установки газобаллонного оборудования на автомобили ${activeBrand.name} в ZR AUTO`
              : "Наши работы по установке газобаллонного оборудования на различные марки автомобилей"}
          </p>
        </div>

        {/* Brand filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <Link
            href="/installations"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              !brandFilter
                ? "bg-primary text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            Все
          </Link>
          {CAR_BRANDS.map((brand) => (
            <Link
              key={brand.slug}
              href={`/installations?brand=${brand.slug}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                brandFilter === brand.slug
                  ? "bg-primary text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {brand.name}
            </Link>
          ))}
        </div>

        {/* Installations grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((inst) => (
              <InstallationCard key={inst.id} installation={inst} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-500 text-lg mb-4">
              {brandFilter
                ? `Пока нет примеров установки на ${activeBrand?.name || brandFilter}`
                : "Пока нет примеров установок"}
            </div>
            <a
              href="https://wa.me/79884444485"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full transition-all hover:bg-primary-light"
            >
              Узнать о наличии
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
