import type { Metadata } from "next";
import { getPublishedInstallations, getInstallationBySlug } from "@/lib/storage";
import { formatPrice, CAR_BRANDS, SAMPLE_INSTALLATIONS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Calculator from "@/components/Calculator";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const installation = await getInstallationBySlug(slug);

  // If no installation found, try to generate SEO page from slug pattern
  const brandModel = parseBrandModelFromSlug(slug);

  if (installation) {
    return {
      title: installation.seoTitle,
      description: installation.seoDescription,
      alternates: { canonical: `https://zrauto.ru/installations/${slug}` },
      openGraph: {
        title: installation.seoTitle,
        description: installation.seoDescription,
        type: "article",
        url: `https://zrauto.ru/installations/${slug}`,
      },
    };
  }

  if (brandModel) {
    const title = `Установка ГБО на ${brandModel.brand} ${brandModel.model} в Махачкале — Цены и примеры | ZR AUTO`;
    const description = `Профессиональная установка ГБО на ${brandModel.brand} ${brandModel.model} в Махачкале. Итальянское оборудование. Гарантия 2 года. Экономия до 50% на топливе. ZR AUTO: +7 988 444-44-85`;
    return {
      title,
      description,
      alternates: { canonical: `https://zrauto.ru/installations/${slug}` },
      openGraph: { title, description, type: "article" },
    };
  }

  return { title: "Установка ГБО | ZR AUTO" };
}

function parseBrandModelFromSlug(slug: string): { brand: string; model: string } | null {
  // Pattern: ustanovka-gbo-{brand}-{model}[-{year}]
  const match = slug.match(/^ustanovka-gbo-(.+?)(?:-(\d{4}))?$/);
  if (!match) return null;

  const parts = match[1];
  for (const brand of CAR_BRANDS) {
    const brandSlug = brand.slug;
    if (parts.startsWith(brandSlug + "-")) {
      const modelPart = parts.slice(brandSlug.length + 1);
      const model = brand.models.find(
        (m) => m.toLowerCase().replace(/[\s-]+/g, "-") === modelPart
      );
      if (model) return { brand: brand.name, model };
    } else if (parts === brandSlug) {
      return { brand: brand.name, model: "" };
    }
  }
  return null;
}

export const dynamic = "force-dynamic";

export default async function InstallationPage({ params }: PageProps) {
  const { slug } = await params;
  const installation = await getInstallationBySlug(slug);
  const brandModel = parseBrandModelFromSlug(slug);

  if (!installation && !brandModel) {
    notFound();
  }

  // If we have a real installation with data
  if (installation) {
    return <InstallationDetail installation={installation} />;
  }

  // Otherwise, generate a selling page for this brand/model
  if (brandModel) {
    const allInstallations = await getPublishedInstallations();
    const related = allInstallations.filter(
      (i) => i.carBrand.toLowerCase() === brandModel.brand.toLowerCase()
    );
    return <BrandModelPage brand={brandModel.brand} model={brandModel.model} related={related} />;
  }

  notFound();
}

function InstallationDetail({ installation }: { installation: NonNullable<Awaited<ReturnType<typeof getInstallationBySlug>>> }) {
  return (
    <div className="pt-20 md:pt-24 pb-16 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-gray-500">
          <a href="/" className="hover:text-primary transition-colors">Главная</a>
          <span className="mx-2">/</span>
          <a href="/installations" className="hover:text-primary transition-colors">Установки</a>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{installation.carBrand} {installation.carModel}</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-black text-white mb-6">
          Установка ГБО на {installation.carBrand} {installation.carModel} {installation.year}
        </h1>

        {/* Specs grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Система", value: installation.gboSystem },
            { label: "Поколение", value: `${installation.gboGeneration} пок.` },
            { label: "Двигатель", value: `${installation.engineVolume}л ${installation.engineType}` },
            { label: "Баллон", value: installation.cylinderVolume },
          ].map((spec) => (
            <div key={spec.label} className="bg-surface-light rounded-xl p-4 border border-white/5">
              <div className="text-gray-500 text-xs mb-1">{spec.label}</div>
              <div className="text-white font-bold">{spec.value}</div>
            </div>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-gray-400 text-sm">Стоимость установки</div>
              <div className="text-3xl font-black text-white">{formatPrice(installation.price)} ₽</div>
            </div>
            <a
              href={`https://wa.me/79884444485?text=Здравствуйте! Интересует установка ГБО на ${installation.carBrand} ${installation.carModel} ${installation.year}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-primary/25 whitespace-nowrap"
            >
              Записаться на установку
            </a>
          </div>
        </div>

        {/* Description */}
        <div className="bg-surface-light rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Описание работы</h2>
          <p className="text-gray-300 leading-relaxed">{installation.description}</p>
        </div>

        {/* Calculator */}
        <div className="bg-surface-light rounded-2xl p-6 md:p-8 border border-white/5">
          <h2 className="text-xl font-bold text-white mb-6">Рассчитайте экономию</h2>
          <Calculator compact />
        </div>

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: `Установка ГБО на ${installation.carBrand} ${installation.carModel}`,
              description: installation.description,
              brand: { "@type": "Brand", name: installation.gboSystem },
              offers: {
                "@type": "Offer",
                price: installation.price,
                priceCurrency: "RUB",
                availability: "https://schema.org/InStock",
                seller: { "@type": "Organization", name: "ZR AUTO" },
              },
            }),
          }}
        />
      </div>
    </div>
  );
}

function BrandModelPage({
  brand,
  model,
  related,
}: {
  brand: string;
  model: string;
  related: Awaited<ReturnType<typeof getPublishedInstallations>>;
}) {
  const fullName = model ? `${brand} ${model}` : brand;

  return (
    <div className="pt-20 md:pt-24 pb-16 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-gray-500">
          <a href="/" className="hover:text-primary transition-colors">Главная</a>
          <span className="mx-2">/</span>
          <a href="/installations" className="hover:text-primary transition-colors">Установки</a>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Установка ГБО на {fullName}</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
          Установка ГБО на {fullName} в Махачкале
        </h1>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl">
          Профессиональная установка газобаллонного оборудования на {fullName}. Итальянские системы OMVL, Lovato, BRC. Гарантия 2 года. Экономия до 50% на топливе.
        </p>

        {/* Key benefits */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: "shield", title: "Гарантия 2 года", desc: "На оборудование и монтаж" },
            { icon: "clock", title: "За 1 день", desc: "Стандартная установка" },
            { icon: "money", title: "Экономия 50%", desc: "На стоимости топлива" },
          ].map((b) => (
            <div key={b.title} className="bg-surface-light rounded-xl p-5 border border-white/5 text-center">
              <div className="text-primary font-bold text-lg mb-1">{b.title}</div>
              <div className="text-gray-400 text-sm">{b.desc}</div>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20 mb-10">
          <h2 className="text-xl font-bold text-white mb-4">Стоимость установки ГБО на {fullName}</h2>
          <div className="space-y-3">
            {[
              { label: "4 цилиндра (рядный)", price: "от 23 000 ₽" },
              { label: "6 цилиндров", price: "от 30 000 ₽" },
              { label: "8 цилиндров", price: "от 38 000 ₽" },
            ].map((p) => (
              <div key={p.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                <span className="text-gray-300">{p.label}</span>
                <span className="text-white font-bold">{p.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a
              href={`https://wa.me/79884444485?text=Здравствуйте! Хочу узнать стоимость установки ГБО на ${fullName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Узнать точную цену
            </a>
          </div>
        </div>

        {/* What's included */}
        <div className="bg-surface-light rounded-2xl p-6 md:p-8 border border-white/5 mb-10">
          <h2 className="text-xl font-bold text-white mb-6">Что входит в установку</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Газовый редуктор европейского производства",
              "Газовые форсунки (по кол-ву цилиндров)",
              "Мультиклапан с запорным клапаном",
              "Тороидальный или цилиндрический баллон",
              "Термопластиковые магистрали",
              "Электронный блок управления",
              "Кнопка переключения газ/бензин",
              "Фильтр грубой и тонкой очистки",
              "Заправочный клапан (ВЗУ)",
              "Все расходные материалы и крепёж",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related installations */}
        {related.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-white mb-6">Примеры установок на {brand}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((inst) => (
                <Link
                  key={inst.id}
                  href={`/installations/${inst.slug}`}
                  className="bg-surface-light hover:bg-surface-lighter rounded-xl p-5 border border-white/5 hover:border-primary/20 transition-all"
                >
                  <div className="text-white font-bold mb-1">{inst.carBrand} {inst.carModel} {inst.year}</div>
                  <div className="text-gray-400 text-sm mb-2">{inst.gboSystem} • {inst.gboGeneration} поколение</div>
                  <div className="text-primary font-bold">{formatPrice(inst.price)} ₽</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Calculator */}
        <div className="bg-surface-light rounded-2xl p-6 md:p-8 border border-white/5">
          <h2 className="text-xl font-bold text-white mb-6">Рассчитайте окупаемость для {fullName}</h2>
          <Calculator compact />
        </div>

        {/* Schema.org for service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: `Установка ГБО на ${fullName}`,
              description: `Профессиональная установка ГБО на ${fullName} в Махачкале. Гарантия 2 года.`,
              provider: {
                "@type": "AutoRepair",
                name: "ZR AUTO",
                telephone: "+79884444485",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "ул. Хаджи Булача 71",
                  addressLocality: "Махачкала",
                },
              },
              areaServed: { "@type": "City", name: "Махачкала" },
              offers: {
                "@type": "Offer",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  price: "23000",
                  priceCurrency: "RUB",
                  minPrice: "23000",
                },
              },
            }),
          }}
        />
      </div>
    </div>
  );
}
