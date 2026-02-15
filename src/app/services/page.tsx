import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Услуги — Установка, ремонт и обслуживание ГБО",
  description:
    "Полный спектр услуг по газобаллонному оборудованию: установка ГБО от 23 000 руб, диагностика, ремонт и техобслуживание. Итальянское оборудование, гарантия 2 года. ZR AUTO, Махачкала.",
  alternates: { canonical: "https://zrauto.ru/services" },
};

const services = [
  {
    title: "Установка ГБО",
    price: "от 23 000 \u20BD",
    gradient: "from-primary to-primary-dark",
    description:
      "Профессиональная установка газобаллонного оборудования 4-го поколения на автомобили с 4, 6 и 8 цилиндрами. Используем только сертифицированное итальянское оборудование. Монтаж за 1 рабочий день с полной проверкой и компьютерной настройкой. Гарантия 2 года на оборудование и работу.",
    features: ["Оборудование OMVL / Lovato / BRC / Stag", 'Баллоны "тороидальные" + цилиндрические', "Термопластиковые магистрали", "Настройка и калибровка ЭБУ"],
  },
  {
    title: "Диагностика ГБО",
    price: "500 \u20BD",
    gradient: "from-accent to-amber-600",
    description:
      "Комплексная компьютерная диагностика газобаллонного оборудования с подробным отчётом. Проверка герметичности системы, состояния компонентов, анализ параметров работы и калибровка.",
    features: ["OBD-диагностика двигателя", "Проверка газовой системы", "Обнаружение утечек газа", "Калибровка и корректировка"],
  },
  {
    title: "Ремонт ГБО",
    price: "от 1 000 \u20BD",
    gradient: "from-emerald-500 to-emerald-700",
    description:
      "Ремонт газобаллонного оборудования любой сложности. Используем оригинальные запчасти и комплектующие. Устраняем неисправности быстро и качественно с гарантией на выполненные работы.",
    features: ["Чистка и замена форсунок", "Ремонт и замена редуктора", "Восстановление электропроводки", "Замена ЭБУ газовой системы"],
  },
  {
    title: "Техобслуживание ГБО",
    price: "от 1 500 \u20BD",
    gradient: "from-violet-500 to-violet-700",
    description:
      "Регулярное техническое обслуживание газобаллонного оборудования для поддержания оптимальной работы. Своевременное ТО продлевает срок службы системы и сохраняет экономию топлива.",
    features: ["Замена газовых фильтров", "Полная проверка системы", "Калибровка и настройка", "Продление гарантии"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-banner pt-28 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="breadcrumb mb-6">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">Главная</Link>
            <span className="sep text-white/20">/</span>
            <span className="current text-white/40">Услуги</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">Наши услуги</h1>
          <p className="mt-4 text-lg text-white/50 max-w-2xl">
            Полный спектр услуг по газобаллонному оборудованию — от установки до регулярного обслуживания.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <article key={service.title} className="card p-8">
                <div className="flex items-start gap-5 mb-5">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shrink-0 shadow-lg`}>
                    <span className="text-white font-bold text-lg">{service.title.charAt(0)}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text">{service.title}</h2>
                    <span className="badge badge-red mt-2">{service.price}</span>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-text-secondary text-sm">
                      <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="card p-10 mt-16 text-center">
            <h3 className="text-2xl font-bold text-text mb-2">Не знаете какая услуга нужна?</h3>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              Позвоним, проконсультируем и подберём решение именно для вашего автомобиля
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/79884444485" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-primary-light transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Написать в WhatsApp
              </a>
              <a href="tel:+79884444485" className="inline-flex items-center gap-2 text-text font-semibold hover:text-primary transition-colors">
                +7 988 444-44-85
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
