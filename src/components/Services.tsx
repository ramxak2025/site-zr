"use client";

import ScrollReveal from "./ScrollReveal";
import type { ServiceItem } from "@/lib/content";

const GRADIENTS = [
  "from-primary to-primary-dark",
  "from-accent to-amber-600",
  "from-emerald-500 to-emerald-700",
  "from-violet-500 to-violet-700",
  "from-sky-500 to-sky-700",
  "from-rose-500 to-rose-700",
];

const DEFAULT_SERVICES: ServiceItem[] = [
  { title: "Установка ГБО", description: "Ваш автомобиль на газе уже завтра. Итальянское и европейское оборудование 4-го поколения. Установка за 1 рабочий день.", price: "от 23 000 ₽", features: ["4, 6, 8 цилиндров", "Итальянские системы", "Гарантия 2 года"] },
  { title: "Диагностика ГБО", description: "Компьютерная диагностика с подробным отчётом. Точно определим проблему и предложим решение.", price: "500 ₽", features: ["Компьютерная проверка", "Настройка системы", "Проверка утечек"] },
  { title: "Ремонт ГБО", description: "Восстановим работу газовой системы любой сложности. Оригинальные запчасти всегда в наличии.", price: "от 1 000 ₽", features: ["Любая сложность", "Оригинальные запчасти", "Быстрый ремонт"] },
  { title: "Техобслуживание", description: "Регулярное ТО — залог долгой и безопасной работы ГБО. Продлите гарантию и ресурс системы.", price: "от 1 500 ₽", features: ["Замена фильтров", "Проверка системы", "Продление гарантии"] },
];

export default function Services({ items }: { items?: ServiceItem[] }) {
  const services = items ?? DEFAULT_SERVICES;

  return (
    <section id="services" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <ScrollReveal animation="fade-left">
            <span className="section-label">Услуги</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text mt-3 leading-[0.92] tracking-tight">
              Полный спектр<br /><span className="text-text-muted">работ по ГБО</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" className="flex items-end lg:justify-end">
            <p className="text-text-secondary text-lg max-w-md leading-relaxed">
              От установки «под ключ» до планового обслуживания — всё в одном месте с гарантией качества
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
              <div className="card group p-7 md:p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="badge badge-red">{service.price}</span>
                </div>
                <h3 className="text-text font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2.5 mt-auto">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-text-secondary">
                      <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
