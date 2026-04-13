"use client";

import ScrollReveal from "./ScrollReveal";
import type { ServiceItem } from "@/lib/content";

const DEFAULT_SERVICES: ServiceItem[] = [
  { title: "Установка ГБО", description: "Ваш автомобиль на газе уже завтра. Итальянское и европейское оборудование 4-го поколения. Установка за 1 рабочий день.", price: "от 23 000 ₽", features: ["4, 6, 8 цилиндров", "Итальянские системы", "Гарантия 2 года"] },
  { title: "Диагностика ГБО", description: "Компьютерная диагностика с подробным отчётом. Точно определим проблему и предложим решение.", price: "500 ₽", features: ["Компьютерная проверка", "Настройка системы", "Проверка утечек"] },
  { title: "Ремонт ГБО", description: "Восстановим работу газовой системы любой сложности. Оригинальные запчасти всегда в наличии.", price: "от 1 000 ₽", features: ["Любая сложность", "Оригинальные запчасти", "Быстрый ремонт"] },
  { title: "Техобслуживание", description: "Регулярное ТО — залог долгой и безопасной работы ГБО. Продлите гарантию и ресурс системы.", price: "от 1 500 ₽", features: ["Замена фильтров", "Проверка системы", "Продление гарантии"] },
];

const ICON_COLORS = [
  "text-primary bg-primary/10 border-primary/20",
  "text-blue-500 bg-blue-500/10 border-blue-500/20",
  "text-amber-500 bg-amber-500/10 border-amber-500/20",
  "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
];

const ICON_LABELS = ["01", "02", "03", "04"];

export default function Services({ items }: { items?: ServiceItem[] }) {
  const services = items ?? DEFAULT_SERVICES;

  return (
    <section id="services" className="py-16 md:py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 left-0 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="mb-10 md:mb-16 text-center max-w-3xl mx-auto">
            <span className="section-label justify-center">Услуги</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-text mt-3 leading-[0.92] tracking-tight">
              Полный спектр <span className="text-text-muted">работ по ГБО</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento Grid — 2 cols mobile */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-5">
          {services.map((service, i) => (
            <ScrollReveal
              key={i}
              animation={i === 0 ? "scale" : "fade-up"}
              delay={i * 80}
              className={i === 0 ? "col-span-2 md:col-span-6 lg:col-span-7 lg:row-span-2" : "col-span-1 md:col-span-3 lg:col-span-5"}
            >
              <div className={`card group h-full relative overflow-hidden ${i === 0 ? "p-6 md:p-10" : "p-4 md:p-7"}`}>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/[0.03] rounded-full blur-2xl group-hover:bg-primary/[0.06] transition-all duration-500" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3 md:mb-5">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border flex items-center justify-center font-bold text-xs md:text-sm ${ICON_COLORS[i]}`}>
                      {ICON_LABELS[i]}
                    </div>
                    <span className="badge badge-red text-[10px] md:text-xs">{service.price}</span>
                  </div>
                  <h3 className={`text-text font-bold group-hover:text-primary transition-colors duration-300 ${i === 0 ? "text-xl md:text-3xl mb-2 md:mb-4" : "text-base md:text-lg mb-1 md:mb-2"}`}>
                    {service.title}
                  </h3>
                  <p className={`text-text-secondary leading-relaxed ${i === 0 ? "text-sm md:text-base mb-5 md:mb-8" : "text-xs md:text-sm mb-3 md:mb-4 line-clamp-2"}`}>
                    {service.description}
                  </p>
                  <div className={i === 0 ? "flex flex-wrap gap-2 md:gap-3" : "flex flex-wrap gap-1.5"}>
                    {service.features.map((f) => (
                      <span key={f} className={`inline-flex items-center gap-1.5 text-text-secondary ${i === 0 ? "bg-surface rounded-xl px-3 py-2 text-xs md:text-sm font-medium" : "text-[10px] md:text-xs"}`}>
                        <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
