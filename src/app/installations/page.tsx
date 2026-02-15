import type { Metadata } from "next";
import { getPublishedInstallations } from "@/lib/storage";
import { CAR_BRANDS } from "@/lib/data";
import InstallationCard from "@/components/InstallationCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Примеры установки ГБО — Портфолио работ",
  description: "Примеры установки ГБО на различные марки автомобилей: Kia, Hyundai, Toyota, Volkswagen и другие. Фото работ, описание и цены. ZR AUTO, Махачкала.",
  alternates: { canonical: "https://zrauto.ru/installations" },
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
    ? installations.filter((i) => i.carBrand.toLowerCase() === brandFilter.toLowerCase())
    : installations;
  const activeBrand = CAR_BRANDS.find((b) => b.slug === brandFilter);

  return (
    <div className="inner-page">
      <div className="page-banner pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="breadcrumb mb-6">
            <Link href="/" className="text-text-secondary hover:text-primary transition-colors">Главная</Link>
            <span className="sep text-border">/</span>
            <span className="text-text-muted">
              {activeBrand ? `Установка ГБО ${activeBrand.name}` : "Примеры установок"}
            </span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-black text-text mb-4">
            {activeBrand ? `Установка ГБО на ${activeBrand.name}` : "Примеры установок ГБО"}
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl">
            {activeBrand
              ? `Примеры установки газобаллонного оборудования на автомобили ${activeBrand.name} в ZR AUTO`
              : "Наши работы по установке газобаллонного оборудования на различные марки автомобилей"}
          </p>
        </div>
      </div>

      {/* Main content - light */}
      <div className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Brand filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <Link
              href="/installations"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                !brandFilter
                  ? "bg-primary text-white"
                  : "bg-surface-alt text-text-secondary border border-border hover:border-primary/30 hover:text-primary"
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
                    : "bg-surface-alt text-text-secondary border border-border hover:border-primary/30 hover:text-primary"
                }`}
              >
                {brand.name}
              </Link>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((inst) => (
                <InstallationCard key={inst.id} installation={inst} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-text-secondary text-lg mb-4">
                {brandFilter
                  ? `Пока нет примеров установки на ${activeBrand?.name || brandFilter}`
                  : "Пока нет примеров установок"}
              </div>
              <a
                href="https://wa.me/79884444485"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg transition-all hover:bg-primary-light"
              >
                Узнать о наличии
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
