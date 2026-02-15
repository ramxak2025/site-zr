"use client";

import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  {
    num: "01",
    title: "Установка ГБО",
    price: "от 23 000 ₽",
    description: "Ваш автомобиль на газе уже завтра. Итальянское и европейское оборудование 4-го поколения. Установка за 1 рабочий день.",
    features: ["4, 6, 8 цилиндров", "Итальянские системы", "Гарантия 2 года"],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.048.58.024 1.194-.14 1.743" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Диагностика ГБО",
    price: "500 ₽",
    description: "Компьютерная диагностика с подробным отчётом. Точно определим проблему и предложим решение.",
    features: ["Компьютерная проверка", "Настройка системы", "Проверка утечек"],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Ремонт ГБО",
    price: "от 1 000 ₽",
    description: "Восстановим работу газовой системы любой сложности. Оригинальные запчасти всегда в наличии.",
    features: ["Любая сложность", "Оригинальные запчасти", "Быстрый ремонт"],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Техобслуживание",
    price: "от 1 500 ₽",
    description: "Регулярное ТО — залог долгой и безопасной работы ГБО. Продлите гарантию и ресурс системы.",
    features: ["Замена фильтров", "Проверка системы", "Продление гарантии"],
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <ScrollReveal animation="fade-left">
            <span className="section-label">Услуги</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text mt-3 leading-[0.95]">
              Полный спектр
              <br />
              <span className="text-text/20">работ по ГБО</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" className="flex items-end lg:justify-end">
            <p className="text-text-secondary text-lg max-w-md">
              От установки «под ключ» до планового обслуживания — всё в одном месте с гарантией качества
            </p>
          </ScrollReveal>
        </div>

        {/* Services grid — card-light with scroll reveal */}
        <div className="grid sm:grid-cols-2 gap-4">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.num} animation="fade-up" delay={i * 120}>
              <div className="card-light card-tilt p-6 md:p-8 group h-full">
                {/* Icon circle + number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-text-muted/30 text-sm font-bold text-display">{service.num}</span>
                </div>

                {/* Title */}
                <h3 className="text-text font-bold text-xl mb-1 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Price */}
                <span className="text-primary font-bold text-lg text-display">{service.price}</span>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mt-4 mb-5">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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
