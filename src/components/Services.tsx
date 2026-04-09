"use client";

import ScrollReveal from "./ScrollReveal";
import type { ServiceItem } from "@/lib/content";

const DEFAULT_SERVICES: ServiceItem[] = [
  { title: "Установка ГБО", description: "Ваш автомобиль на газе уже завтра. Итальянское и европейское оборудование 4-го поколения. Установка за 1 рабочий день.", price: "от 23 000 ₽", features: ["4, 6, 8 цилиндров", "Итальянские системы", "Гарантия 2 года"] },
  { title: "Диагностика ГБО", description: "Компьютерная диагностика с подробным отчётом. Точно определим проблему и предложим решение.", price: "500 ₽", features: ["Компьютерная проверка", "Настройка системы", "Проверка утечек"] },
  { title: "Ремонт ГБО", description: "Восстановим работу газовой системы любой сложности. Оригинальные запчасти всегда в наличии.", price: "от 1 000 ₽", features: ["Любая сложность", "Оригинальные запчасти", "Быстрый ремонт"] },
  { title: "Техобслуживание", description: "Регулярное ТО — залог долгой и безопасной работы ГБО. Продлите гарантию и ресурс системы.", price: "от 1 500 ₽", features: ["Замена фильтров", "Проверка системы", "Продление гарантии"] },
];

const SERVICE_ICONS = [
  // Wrench + bolt — installation
  <svg key="install" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" /></svg>,
  // CPU chip — diagnostics
  <svg key="diag" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>,
  // Cog — repair
  <svg key="repair" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  // Shield check — maintenance
  <svg key="maint" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
];

const ICON_COLORS = [
  "text-primary bg-primary/10 border-primary/20",
  "text-blue-500 bg-blue-500/10 border-blue-500/20",
  "text-amber-500 bg-amber-500/10 border-amber-500/20",
  "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
];

export default function Services({ items }: { items?: ServiceItem[] }) {
  const services = items ?? DEFAULT_SERVICES;

  return (
    <section id="services" className="py-20 md:py-28 bg-surface relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 left-0 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            <span className="section-label justify-center">Услуги</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text mt-3 leading-[0.92] tracking-tight">
              Полный спектр <span className="text-text-muted">работ по ГБО</span>
            </h2>
            <p className="text-text-secondary text-lg mt-5 max-w-xl mx-auto leading-relaxed">
              От установки «под ключ» до планового обслуживания — всё в одном месте с гарантией качества
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-5">
          {/* Main service — large card, spans 2 rows */}
          <ScrollReveal animation="scale" className="md:col-span-6 lg:col-span-7 lg:row-span-2">
            <div className="card group p-8 md:p-10 h-full relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/[0.04] rounded-full blur-2xl group-hover:bg-primary/[0.08] transition-all duration-500" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${ICON_COLORS[0]}`}>
                    {SERVICE_ICONS[0]}
                  </div>
                  <span className="badge badge-red text-sm">{services[0].price}</span>
                </div>
                <h3 className="text-text font-black text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors duration-300">
                  {services[0].title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-8 max-w-lg text-base">
                  {services[0].description}
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {services[0].features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 bg-surface rounded-xl px-4 py-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      <span className="text-sm text-text font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Remaining 3 services — stacked on right */}
          {services.slice(1).map((service, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={(i + 1) * 100} className="md:col-span-3 lg:col-span-5">
              <div className="card group p-6 md:p-7 h-full hover:border-primary/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${ICON_COLORS[i + 1]}`}>
                    {SERVICE_ICONS[i + 1]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3 className="text-text font-bold text-lg group-hover:text-primary transition-colors duration-300 truncate">
                        {service.title}
                      </h3>
                      <span className="badge badge-red text-xs shrink-0">{service.price}</span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span key={f} className="inline-flex items-center gap-1.5 text-xs text-text-secondary">
                          <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          {f}
                        </span>
                      ))}
                    </div>
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
