const SERVICES = [
  {
    num: "01",
    title: "Установка ГБО",
    price: "от 23 000 ₽",
    description: "Ваш автомобиль на газе уже завтра. Итальянское и европейское оборудование 4-го поколения. Установка за 1 рабочий день.",
    features: ["4, 6, 8 цилиндров", "Итальянские системы", "Гарантия 2 года"],
  },
  {
    num: "02",
    title: "Диагностика ГБО",
    price: "500 ₽",
    description: "Компьютерная диагностика с подробным отчётом. Точно определим проблему и предложим решение.",
    features: ["Компьютерная проверка", "Настройка системы", "Проверка утечек"],
  },
  {
    num: "03",
    title: "Ремонт ГБО",
    price: "от 1 000 ₽",
    description: "Восстановим работу газовой системы любой сложности. Оригинальные запчасти всегда в наличии.",
    features: ["Любая сложность", "Оригинальные запчасти", "Быстрый ремонт"],
  },
  {
    num: "04",
    title: "Техобслуживание",
    price: "от 1 500 ₽",
    description: "Регулярное ТО — залог долгой и безопасной работы ГБО. Продлите гарантию и ресурс системы.",
    features: ["Замена фильтров", "Проверка системы", "Продление гарантии"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header — asymmetric */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <div>
            <span className="section-num">01 / УСЛУГИ</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 leading-[0.95]">
              Полный спектр
              <br />
              <span className="text-white/20">работ по ГБО</span>
            </h2>
          </div>
          <div className="flex items-end lg:justify-end">
            <p className="text-white/30 text-lg max-w-md">
              От установки «под ключ» до планового обслуживания — всё в одном месте с гарантией качества
            </p>
          </div>
        </div>

        {/* Services list — numbered with left accent */}
        <div className="space-y-2">
          {SERVICES.map((service) => (
            <div
              key={service.num}
              className="card-accent group grid md:grid-cols-12 gap-4 md:gap-8 p-6 md:p-8 cursor-default"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="text-primary/30 text-sm font-bold text-display">{service.num}</span>
              </div>

              {/* Title + Price */}
              <div className="md:col-span-3">
                <h3 className="text-white font-bold text-xl mb-1 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <span className="text-primary font-bold text-display">{service.price}</span>
              </div>

              {/* Description */}
              <div className="md:col-span-4">
                <p className="text-white/30 text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Features */}
              <div className="md:col-span-4">
                <ul className="space-y-1.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                      <span className="w-1 h-1 bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
