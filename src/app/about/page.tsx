import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О компании ZR AUTO — Центр установки ГБО в Махачкале",
  description:
    "ZR AUTO — профессиональный центр по установке газобаллонного оборудования в Махачкале. Более 10 лет опыта, 2000+ установок, итальянское оборудование, гарантия 2 года.",
  alternates: { canonical: "https://zrauto.ru/about" },
};

const stats = [
  { value: "10+", label: "лет опыта" },
  { value: "2000+", label: "установок" },
  { value: "2 года", label: "гарантия" },
  { value: "50%", label: "экономия" },
];

const steps = [
  { num: 1, title: "Консультация", description: "Узнаем марку авто, подбираем оборудование и называем точную цену" },
  { num: 2, title: "Установка", description: "Профессиональный монтаж за 1 рабочий день с проверкой всех узлов" },
  { num: 3, title: "Настройка", description: "Компьютерная калибровка системы под ваш двигатель для максимальной эффективности" },
  { num: 4, title: "Гарантия", description: "2 года гарантии на оборудование и работу. Бесплатное гарантийное обслуживание" },
];

const brands = [
  { name: "OMVL", country: "Италия", description: "Премиальная система с высокой точностью впрыска и надёжностью" },
  { name: "Lovato", country: "Италия", description: "Надёжная система с мировым именем и проверенным качеством" },
  { name: "BRC", country: "Италия", description: "Лидер мирового рынка ГБО с передовыми технологиями" },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-banner pt-28 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="breadcrumb mb-6">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">Главная</Link>
            <span className="sep text-white/20">/</span>
            <span className="current text-white/40">О компании</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">О компании</h1>
          <p className="mt-4 text-lg text-white/50 max-w-2xl">
            ZR AUTO — профессиональный центр по установке, ремонту и обслуживанию газобаллонного оборудования в Махачкале.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* History */}
          <div className="mb-24">
            <span className="section-label mb-4">Наша история</span>
            <div className="grid lg:grid-cols-2 gap-12 mt-6">
              <div>
                <h2 className="text-3xl font-bold text-text mb-6">Более 10 лет мы помогаем водителям экономить</h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>ZR AUTO начался с увлечения автомобилями и стремления сделать эксплуатацию автомобиля доступнее для каждого. Мы начинали как небольшая мастерская, а сегодня выросли в ведущий центр по установке ГБО в Дагестане.</p>
                  <p>За годы работы мы выполнили более 2000 установок газобаллонного оборудования на автомобили самых разных марок — от популярных Kia и Hyundai до премиальных BMW и Mercedes.</p>
                  <p>Мы принципиально работаем только с сертифицированным европейским оборудованием итальянского производства: OMVL, Lovato, BRC.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="card p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl sm:text-4xl font-black text-gradient">{stat.value}</span>
                    <span className="mt-2 text-sm text-text-muted font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-24">
            <span className="section-label mb-4">Процесс</span>
            <h2 className="text-3xl font-bold text-text mt-6 mb-10">Как мы работаем</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step) => (
                <div key={step.num} className="card p-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-lg font-bold mb-5 shadow-lg">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment */}
          <div className="mb-24">
            <span className="section-label mb-4">Оборудование</span>
            <h2 className="text-3xl font-bold text-text mt-6 mb-4">Наше оборудование</h2>
            <p className="text-text-secondary leading-relaxed max-w-3xl mb-10">
              Мы используем исключительно сертифицированное европейское оборудование итальянского производства.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {brands.map((brand) => (
                <div key={brand.name} className="card p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl border-2 border-primary flex items-center justify-center mb-5">
                    <span className="text-2xl font-black text-primary">{brand.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text">{brand.name}</h3>
                  <span className="text-sm text-text-muted">{brand.country}</span>
                  <p className="mt-3 text-text-secondary text-sm leading-relaxed">{brand.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="mb-24">
            <span className="section-label mb-4">Гарантия качества</span>
            <h2 className="text-3xl font-bold text-text mt-6 mb-4">Наши сертификаты и лицензии</h2>
            <div className="max-w-3xl">
              <p className="text-text-secondary leading-relaxed mb-4">ZR AUTO является сертифицированным центром по установке газобаллонного оборудования. Мы работаем в полном соответствии с правилами ЕЭК ООН и российскими стандартами безопасности.</p>
              <p className="text-text-secondary leading-relaxed">Всё используемое оборудование имеет сертификаты соответствия. После установки вы получаете полный пакет документов для регистрации изменений.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="card p-10 text-center">
            <h3 className="text-2xl font-bold text-text mb-2">Остались вопросы?</h3>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">Свяжитесь с нами — ответим на все вопросы и рассчитаем стоимость для вашего автомобиля</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/79884444485" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-primary-light transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Написать в WhatsApp
              </a>
              <a href="tel:+79884444485" className="inline-flex items-center gap-2 text-text font-semibold hover:text-primary transition-colors">+7 988 444-44-85</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
