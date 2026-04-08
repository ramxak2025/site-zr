/* ── Site Content Types & Defaults ─────────────────── */

export interface HeroPrice {
  label: string;
  price: string;
  desc: string;
  popular: boolean;
}

export interface HeroStat {
  end: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export interface HeroContent {
  badge: string;
  headlineLines: string[];
  headlineAccent: string;
  description: string;
  ctaText: string;
  phone: string;
  whatsappUrl: string;
  prices: HeroPrice[];
  stats: HeroStat[];
}

export interface ServiceItem {
  title: string;
  description: string;
  price: string;
  features: string[];
}

export interface ReviewItem {
  name: string;
  car: string;
  text: string;
  rating: number;
  platform: string;
}

export interface ReviewPlatform {
  name: string;
  url: string;
  rating: string;
}

export interface WorkHours {
  days: string;
  hours: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface ContactsContent {
  phone: string;
  phoneRaw: string;
  whatsappUrl: string;
  address: string;
  addressDetail: string;
  mapUrl: string;
  email: string;
  workHours: WorkHours[];
  socials: SocialLink[];
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutStep {
  title: string;
  description: string;
}

export interface AboutContent {
  intro: string;
  history: string[];
  stats: AboutStat[];
  steps: AboutStep[];
}

export interface BackgroundSettings {
  enabled: boolean;
  smokeIntensity: number;   // 0-100
  accentMix: number;        // 0-100 (how much brand color in smoke)
  speed: number;            // 0-100
  particleDensity: number;  // 0-100
}

/* ── Installation Pricing (admin-editable) ─────────────── */
export interface InstallationPriceItem {
  price: number;
  note: string;
}

export interface InstallationPricing {
  cyl4: InstallationPriceItem;          // 4 цилиндра
  cyl6: InstallationPriceItem;          // 6 цилиндров
  cyl8: InstallationPriceItem;          // 8 цилиндров
  directInjection: InstallationPriceItem; // непосредственный впрыск
}

/* ── Fuel Prices (admin-editable, for calculator) ───────── */
export interface FuelPricesContent {
  gasoline92: number;
  gasoline95: number;
  gasoline98: number;
  lpg: number;
  updatedAt: string;
}

export interface SiteContent {
  hero: HeroContent;
  services: ServiceItem[];
  reviews: ReviewItem[];
  reviewPlatforms: ReviewPlatform[];
  contacts: ContactsContent;
  about: AboutContent;
  background: BackgroundSettings;
  pricing: InstallationPricing;
  fuelPrices: FuelPricesContent;
}

export const DEFAULT_CONTENT: SiteContent = {
  hero: {
    badge: "Запись открыта",
    headlineLines: ["Сократите", "расходы"],
    headlineAccent: "на топливо",
    description:
      "Переведите авто на газ за 1 день — каждый километр будет стоить в 2 раза дешевле. Итальянское оборудование, гарантия 2 года.",
    ctaText: "Узнать стоимость",
    phone: "+7 988 444-44-85",
    whatsappUrl:
      "https://wa.me/79884444485?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D1%83%20%D0%93%D0%91%D0%9E",
    prices: [
      { label: "4 цилиндра", price: "от 23 000 ₽", desc: "Kia, Hyundai, VW, Skoda", popular: false },
      { label: "6 цилиндров", price: "от 30 000 ₽", desc: "Toyota, Nissan, Ford", popular: true },
      { label: "8 цилиндров", price: "от 38 000 ₽", desc: "BMW, Mercedes, LC", popular: false },
    ],
    stats: [
      { end: 2000, suffix: "+", label: "установок" },
      { end: 50, prefix: "—", suffix: "%", label: "на топливо" },
      { end: 2, suffix: " года", label: "гарантия" },
      { end: 1, suffix: " день", label: "установка" },
    ],
  },
  services: [
    {
      title: "Установка ГБО",
      description: "Ваш автомобиль на газе уже завтра. Итальянское и европейское оборудование 4-го поколения. Установка за 1 рабочий день.",
      price: "от 23 000 ₽",
      features: ["4, 6, 8 цилиндров", "Итальянские системы", "Гарантия 2 года"],
    },
    {
      title: "Диагностика ГБО",
      description: "Компьютерная диагностика с подробным отчётом. Точно определим проблему и предложим решение.",
      price: "500 ₽",
      features: ["Компьютерная проверка", "Настройка системы", "Проверка утечек"],
    },
    {
      title: "Ремонт ГБО",
      description: "Восстановим работу газовой системы любой сложности. Оригинальные запчасти всегда в наличии.",
      price: "от 1 000 ₽",
      features: ["Любая сложность", "Оригинальные запчасти", "Быстрый ремонт"],
    },
    {
      title: "Техобслуживание",
      description: "Регулярное ТО — залог долгой и безопасной работы ГБО. Продлите гарантию и ресурс системы.",
      price: "от 1 500 ₽",
      features: ["Замена фильтров", "Проверка системы", "Продление гарантии"],
    },
  ],
  reviews: [
    { name: "Алексей М.", car: "Kia Rio 2023", rating: 5, text: "Установил OMVL — разницы с бензином не чувствую. Расход 8.5 литров, а заправка в 2 раза дешевле. За 4 месяца всё окупилось!", platform: "Яндекс Карты" },
    { name: "Магомед А.", car: "Toyota Camry 2022", rating: 5, text: "Сделали за один день. Баллон в нишу запаски — багажник полностью свободен. Качество на уровне дилера, а цена в разы ниже.", platform: "2ГИС" },
    { name: "Расул К.", car: "Hyundai Solaris 2021", rating: 5, text: "Второй раз обращаюсь — на первую машину ставили, теперь на новую. Гарантия реально работает, ни одной проблемы.", platform: "Google" },
    { name: "Шамиль Г.", car: "VW Polo 2023", rating: 5, text: "Поставил Stag — переключение газ/бензин плавное, никаких рывков. При моём пробеге 2000 км/мес окупилось за 3 месяца.", platform: "Яндекс Карты" },
    { name: "Ибрагим Д.", car: "Lada Vesta 2024", rating: 5, text: "Digitronic работает отлично. Экономлю 4000+ рублей каждый месяц. Жалею, что не поставил раньше!", platform: "2ГИС" },
    { name: "Арсен Б.", car: "Skoda Rapid 2022", rating: 5, text: "Пришёл по рекомендации — не пожалел. Честные цены, профессиональный подход. Газ тянет как бензин, расход адекватный.", platform: "Google" },
  ],
  reviewPlatforms: [
    { name: "Яндекс Карты", url: "https://yandex.ru/maps/org/zr_auto/", rating: "4.9" },
    { name: "2ГИС", url: "https://2gis.ru/makhachkala/firm/zr_auto", rating: "5.0" },
    { name: "Google", url: "https://g.page/zrauto/review", rating: "4.8" },
  ],
  contacts: {
    phone: "+7 988 444-44-85",
    phoneRaw: "+79884444485",
    whatsappUrl: "https://wa.me/79884444485",
    address: "г. Махачкала, ул. Хаджи Булача 71",
    addressDetail: "Ориентир: район Новой автостанции, напротив шиномонтажа",
    mapUrl: "https://yandex.ru/maps/-/CHEzfL~r",
    email: "info@zrauto.ru",
    workHours: [
      { days: "Пн — Чт", hours: "9:00 — 19:00" },
      { days: "Пт", hours: "14:00 — 19:00" },
      { days: "Сб — Вс", hours: "9:00 — 19:00" },
    ],
    socials: [
      { name: "Telegram", url: "https://t.me/zrauto" },
      { name: "VK", url: "https://vk.com/zr.auto" },
      { name: "YouTube", url: "https://youtube.com/@05auto" },
    ],
  },
  about: {
    intro:
      "ZR AUTO — профессиональный центр по установке, ремонту и обслуживанию газобаллонного оборудования в Махачкале.",
    history: [
      "ZR AUTO начался с увлечения автомобилями и стремления сделать эксплуатацию автомобиля доступнее для каждого. Мы начинали как небольшая мастерская, а сегодня выросли в ведущий центр по установке ГБО в Дагестане.",
      "За годы работы мы выполнили более 2000 установок газобаллонного оборудования на автомобили самых разных марок — от популярных Kia и Hyundai до премиальных BMW и Mercedes.",
      "Мы принципиально работаем только с сертифицированным европейским оборудованием итальянского производства: OMVL, Lovato, BRC.",
    ],
    stats: [
      { value: "10+", label: "лет опыта" },
      { value: "2000+", label: "установок" },
      { value: "2 года", label: "гарантия" },
      { value: "50%", label: "экономия" },
    ],
    steps: [
      { title: "Консультация", description: "Узнаем марку авто, подбираем оборудование и называем точную цену" },
      { title: "Установка", description: "Профессиональный монтаж за 1 рабочий день с проверкой всех узлов" },
      { title: "Настройка", description: "Компьютерная калибровка системы под ваш двигатель для максимальной эффективности" },
      { title: "Гарантия", description: "2 года гарантии на оборудование и работу. Бесплатное гарантийное обслуживание" },
    ],
  },
  background: {
    enabled: true,
    smokeIntensity: 70,
    accentMix: 15,
    speed: 50,
    particleDensity: 60,
  },
  pricing: {
    cyl4: { price: 23000, note: "Kia, Hyundai, VW, Skoda, Lada" },
    cyl6: { price: 30000, note: "Toyota, Nissan, Ford, Hyundai" },
    cyl8: { price: 38000, note: "BMW, Mercedes, Land Cruiser" },
    directInjection: { price: 45000, note: "Двигатели FSI, TSI, GDI, SkyActiv" },
  },
  fuelPrices: {
    gasoline92: 54.5,
    gasoline95: 59.0,
    gasoline98: 66.0,
    lpg: 28.0,
    updatedAt: new Date().toISOString().split("T")[0],
  },
};
