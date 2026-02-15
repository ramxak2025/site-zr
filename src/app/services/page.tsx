import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Услуги — Установка, ремонт и обслуживание ГБО",
  description:
    "Полный спектр услуг по газобаллонному оборудованию: установка ГБО от 23 000 руб, диагностика, ремонт и техобслуживание. Итальянское оборудование, гарантия 2 года. ZR AUTO, Махачкала.",
  alternates: {
    canonical: "https://zrauto.ru/services",
  },
};

const services = [
  {
    title: "Установка ГБО",
    price: "от 23 000 \u20BD",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    description:
      "Профессиональная установка газобаллонного оборудования 4-го поколения на автомобили с 4, 6 и 8 цилиндрами. Используем только сертифицированное итальянское оборудование. Монтаж за 1 рабочий день с полной проверкой и компьютерной настройкой. Гарантия 2 года на оборудование и работу.",
    features: [
      "Оборудование OMVL / Lovato / BRC / Stag",
      'Баллоны "тороидальные" + цилиндрические',
      "Термопластиковые магистрали",
      "Настройка и калибровка ЭБУ",
    ],
  },
  {
    title: "Диагностика ГБО",
    price: "500 \u20BD",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    description:
      "Комплексная компьютерная диагностика газобаллонного оборудования с подробным отчётом. Проверка герметичности системы, состояния компонентов, анализ параметров работы и калибровка. Выявляем проблемы на ранней стадии.",
    features: [
      "OBD-диагностика двигателя",
      "Проверка газовой системы",
      "Обнаружение утечек газа",
      "Калибровка и корректировка",
    ],
  },
  {
    title: "Ремонт ГБО",
    price: "от 1 000 \u20BD",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    description:
      "Ремонт газобаллонного оборудования любой сложности. Используем оригинальные запчасти и комплектующие. Устраняем неисправности быстро и качественно с гарантией на выполненные работы.",
    features: [
      "Чистка и замена форсунок",
      "Ремонт и замена редуктора",
      "Восстановление электропроводки",
      "Замена ЭБУ газовой системы",
    ],
  },
  {
    title: "Техобслуживание ГБО",
    price: "от 1 500 \u20BD",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.15-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m-2.091 17.076-.26-1.477m-2.605-14.772-.26-1.477M3.423 8.923l1.41.513m14.095 5.13 1.41.513M5.106 6.215l1.15.964m11.49 9.642 1.15.964M7.501 4.205l.75 1.3m7.5 12.99.75 1.3" />
      </svg>
    ),
    description:
      "Регулярное техническое обслуживание газобаллонного оборудования для поддержания оптимальной работы. Своевременное ТО продлевает срок службы системы и сохраняет экономию топлива на максимальном уровне.",
    features: [
      "Замена газовых фильтров",
      "Полная проверка системы",
      "Калибровка и настройка",
      "Продление гарантии",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Banner ── */}
      <section className="page-banner pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="breadcrumb mb-6">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              Главная
            </Link>
            <span className="sep text-white/20">/</span>
            <span className="current text-white/40">Услуги</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Наши услуги
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            Полный спектр услуг по газобаллонному оборудованию — от установки до регулярного
            обслуживания. Работаем с итальянским оборудованием, даём гарантию 2 года.
          </p>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <article key={service.title} className="card-light p-8">
                {/* Icon + heading row */}
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text">{service.title}</h2>
                    <span className="inline-block mt-2 bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-lg">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature bullets */}
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <div className="card-light p-10 mt-16 text-center">
            <h3 className="text-2xl font-bold text-text mb-2">
              Не знаете какая услуга нужна?
            </h3>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              Позвоним, проконсультируем и подберём решение именно для вашего автомобиля
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/79884444485"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-primary-light transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Написать в WhatsApp
              </a>
              <a
                href="tel:+79884444485"
                className="inline-flex items-center gap-2 text-text font-semibold hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                +7 988 444-44-85
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
