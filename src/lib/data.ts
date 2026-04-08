export interface Installation {
  id: string;
  slug: string;
  carBrand: string;
  carModel: string;
  year: string;
  engineType: string;
  engineVolume: string;
  gboSystem: string;
  gboGeneration: string;
  cylinderVolume: string;
  price: number;
  description: string;
  seoTitle: string;
  seoDescription: string;
  images: string[];
  createdAt: string;
  published: boolean;
}

export interface CarBrand {
  name: string;
  slug: string;
  models: string[];
}

export const CAR_BRANDS: CarBrand[] = [
  { name: "Kia", slug: "kia", models: ["Rio", "Ceed", "Sportage", "Cerato", "Optima", "Sorento", "Soul", "K5"] },
  { name: "Hyundai", slug: "hyundai", models: ["Solaris", "Creta", "Tucson", "Elantra", "Sonata", "Santa Fe", "i30", "Accent"] },
  { name: "Toyota", slug: "toyota", models: ["Camry", "Corolla", "RAV4", "Land Cruiser", "Prado", "Highlander", "Fortuner"] },
  { name: "Volkswagen", slug: "volkswagen", models: ["Polo", "Golf", "Tiguan", "Passat", "Jetta", "Touareg"] },
  { name: "Skoda", slug: "skoda", models: ["Rapid", "Octavia", "Kodiaq", "Superb", "Karoq"] },
  { name: "Nissan", slug: "nissan", models: ["Qashqai", "X-Trail", "Almera", "Juke", "Terrano", "Pathfinder"] },
  { name: "Chevrolet", slug: "chevrolet", models: ["Cruze", "Aveo", "Lacetti", "Niva", "Orlando"] },
  { name: "Lada", slug: "lada", models: ["Vesta", "Granta", "XRAY", "Largus", "Niva", "Priora"] },
  { name: "Renault", slug: "renault", models: ["Logan", "Sandero", "Duster", "Kaptur", "Arkana", "Megane"] },
  { name: "Ford", slug: "ford", models: ["Focus", "Mondeo", "Kuga", "Explorer", "EcoSport", "Fiesta"] },
  { name: "Mazda", slug: "mazda", models: ["3", "6", "CX-5", "CX-9", "CX-30"] },
  { name: "Mitsubishi", slug: "mitsubishi", models: ["Outlander", "ASX", "Lancer", "Pajero", "L200"] },
  { name: "BMW", slug: "bmw", models: ["3 Series", "5 Series", "X1", "X3", "X5"] },
  { name: "Mercedes-Benz", slug: "mercedes-benz", models: ["C-Class", "E-Class", "GLC", "GLE", "A-Class"] },
];

export const GBO_SYSTEMS = [
  { name: "OMVL", country: "Италия", description: "Премиальная система с высокой точностью дозирования" },
  { name: "Lovato", country: "Италия", description: "Надёжная итальянская система с мировым именем" },
  { name: "BRC", country: "Италия", description: "Лидер рынка ГБО с передовыми технологиями" },
  { name: "Digitronic", country: "Польша", description: "Оптимальное соотношение цены и качества" },
  { name: "Stag", country: "Польша", description: "Популярная система с отличной поддержкой" },
  { name: "Alpha", country: "Польша", description: "Бюджетная система с хорошими характеристиками" },
];

export const SAMPLE_INSTALLATIONS: Installation[] = [
  {
    id: "1",
    slug: "ustanovka-gbo-kia-rio-2023",
    carBrand: "Kia",
    carModel: "Rio",
    year: "2023",
    engineType: "Бензин",
    engineVolume: "1.6",
    gboSystem: "OMVL",
    gboGeneration: "4",
    cylinderVolume: "42л",
    price: 35000,
    description: "Установка ГБО 4 поколения OMVL на Kia Rio 1.6. Баллон 42 литра тороидальный в нишу запасного колеса. Расход газа — 8.5 л/100 км. Гарантия 2 года.",
    seoTitle: "Установка ГБО на Kia Rio в Махачкале — Цена от 35 000 ₽ | ZR AUTO",
    seoDescription: "Профессиональная установка ГБО 4 поколения на Kia Rio в Махачкале. Итальянское оборудование OMVL. Гарантия 2 года.",
    images: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&h=600&fit=crop",
    ],
    createdAt: "2024-01-15",
    published: true,
  },
  {
    id: "2",
    slug: "ustanovka-gbo-hyundai-solaris-2022",
    carBrand: "Hyundai",
    carModel: "Solaris",
    year: "2022",
    engineType: "Бензин",
    engineVolume: "1.6",
    gboSystem: "Lovato",
    gboGeneration: "4",
    cylinderVolume: "42л",
    price: 33000,
    description: "Установка ГБО Lovato на Hyundai Solaris. Тороидальный баллон 42л в нишу запасного колеса. Термопластиковые магистрали. Расход газа — 8.2 л/100 км.",
    seoTitle: "Установка ГБО на Hyundai Solaris в Махачкале | ZR AUTO",
    seoDescription: "Установка ГБО 4 поколения Lovato на Hyundai Solaris. Расход газа 8.2 л/100 км. Гарантия 2 года.",
    images: [
      "https://images.unsplash.com/photo-1629897048514-3dd7414fe72a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop",
    ],
    createdAt: "2024-02-10",
    published: true,
  },
  {
    id: "3",
    slug: "ustanovka-gbo-toyota-camry-2023",
    carBrand: "Toyota",
    carModel: "Camry",
    year: "2023",
    engineType: "Бензин",
    engineVolume: "2.5",
    gboSystem: "BRC",
    gboGeneration: "4",
    cylinderVolume: "54л",
    price: 45000,
    description: "Установка ГБО BRC на Toyota Camry 2.5. Баллон 54 литра цилиндрический. Мощность на газе практически не отличается от бензина. Экономия до 50%.",
    seoTitle: "Установка ГБО на Toyota Camry в Махачкале — Цена от 45 000 ₽ | ZR AUTO",
    seoDescription: "Установка ГБО BRC на Toyota Camry 2.5 в Махачкале. Экономия до 50% на топливе. Гарантия 2 года.",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&h=600&fit=crop",
    ],
    createdAt: "2024-03-05",
    published: true,
  },
  {
    id: "4",
    slug: "ustanovka-gbo-lada-vesta-2024",
    carBrand: "Lada",
    carModel: "Vesta",
    year: "2024",
    engineType: "Бензин",
    engineVolume: "1.6",
    gboSystem: "Digitronic",
    gboGeneration: "4",
    cylinderVolume: "42л",
    price: 25000,
    description: "Установка ГБО Digitronic на Lada Vesta 1.6. Доступная цена, отличное качество. Баллон тороидальный 42 литра. Расход газа — 9 л/100 км.",
    seoTitle: "Установка ГБО на Lada Vesta в Махачкале — от 25 000 ₽ | ZR AUTO",
    seoDescription: "Установка ГБО на Lada Vesta по доступной цене. Оборудование Digitronic. Гарантия 2 года.",
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0afe?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop",
    ],
    createdAt: "2024-04-12",
    published: true,
  },
  {
    id: "5",
    slug: "ustanovka-gbo-volkswagen-polo-2023",
    carBrand: "Volkswagen",
    carModel: "Polo",
    year: "2023",
    engineType: "Бензин",
    engineVolume: "1.6",
    gboSystem: "Stag",
    gboGeneration: "4",
    cylinderVolume: "42л",
    price: 30000,
    description: "Установка ГБО Stag на Volkswagen Polo. Баллон 42 литра тороидальный. Стабильная работа двигателя на газе. Гарантия 2 года на оборудование и работу.",
    seoTitle: "Установка ГБО на Volkswagen Polo в Махачкале | ZR AUTO",
    seoDescription: "Установка ГБО Stag на Volkswagen Polo. Гарантия 2 года. Профессиональный монтаж.",
    images: [
      "https://images.unsplash.com/photo-1606611013016-969c19ba10bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    ],
    createdAt: "2024-05-20",
    published: true,
  },
  {
    id: "6",
    slug: "ustanovka-gbo-skoda-rapid-2023",
    carBrand: "Skoda",
    carModel: "Rapid",
    year: "2023",
    engineType: "Бензин",
    engineVolume: "1.6",
    gboSystem: "Stag",
    gboGeneration: "4",
    cylinderVolume: "42л",
    price: 32000,
    description: "Установка ГБО Stag на Skoda Rapid 1.6. Баллон тороидальный 42 литра в нишу запасного колеса. Расход газа — 8.8 л/100 км. Гарантия 2 года.",
    seoTitle: "Установка ГБО на Skoda Rapid в Махачкале — Цена от 32 000 ₽ | ZR AUTO",
    seoDescription: "Установка ГБО Stag на Skoda Rapid. Расход газа 8.8 л/100 км. Гарантия 2 года.",
    images: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop",
    ],
    createdAt: "2024-06-15",
    published: true,
  },
  {
    id: "7",
    slug: "ustanovka-gbo-toyota-corolla-2024",
    carBrand: "Toyota",
    carModel: "Corolla",
    year: "2024",
    engineType: "Бензин",
    engineVolume: "1.6",
    gboSystem: "OMVL",
    gboGeneration: "4",
    cylinderVolume: "42л",
    price: 38000,
    description: "Установка ГБО OMVL Dream XXI на Toyota Corolla. Тороидальный баллон 42 литра. Отличная работа на газе, плавный переход. Мощность сохранена на 98%.",
    seoTitle: "Установка ГБО на Toyota Corolla в Махачкале | ZR AUTO",
    seoDescription: "Установка ГБО OMVL на Toyota Corolla в Махачкале. Итальянское оборудование. Гарантия 2 года.",
    images: [
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
    ],
    createdAt: "2024-07-08",
    published: true,
  },
  {
    id: "8",
    slug: "ustanovka-gbo-hyundai-creta-2023",
    carBrand: "Hyundai",
    carModel: "Creta",
    year: "2023",
    engineType: "Бензин",
    engineVolume: "2.0",
    gboSystem: "Lovato",
    gboGeneration: "4",
    cylinderVolume: "54л",
    price: 40000,
    description: "Установка ГБО Lovato Easy Fast на Hyundai Creta 2.0. Цилиндрический баллон 54л под днищем. Полный объём багажника сохранён. Расход газа — 10.5 л/100 км.",
    seoTitle: "Установка ГБО на Hyundai Creta в Махачкале | ZR AUTO",
    seoDescription: "Установка ГБО Lovato на Hyundai Creta 2.0. Баллон 54л. Гарантия 2 года.",
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    ],
    createdAt: "2024-08-14",
    published: true,
  },
  {
    id: "9",
    slug: "ustanovka-gbo-nissan-qashqai-2022",
    carBrand: "Nissan",
    carModel: "Qashqai",
    year: "2022",
    engineType: "Бензин",
    engineVolume: "2.0",
    gboSystem: "BRC",
    gboGeneration: "4",
    cylinderVolume: "54л",
    price: 42000,
    description: "Установка ГБО BRC на Nissan Qashqai 2.0. Тороидальный баллон 54л. Автоматическое переключение газ/бензин. Расход газа — 11 л/100 км.",
    seoTitle: "Установка ГБО на Nissan Qashqai в Махачкале | ZR AUTO",
    seoDescription: "Установка ГБО BRC на Nissan Qashqai 2.0. Гарантия 2 года. Экономия до 50%.",
    images: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    ],
    createdAt: "2024-09-02",
    published: true,
  },
  {
    id: "10",
    slug: "ustanovka-gbo-renault-duster-2023",
    carBrand: "Renault",
    carModel: "Duster",
    year: "2023",
    engineType: "Бензин",
    engineVolume: "2.0",
    gboSystem: "Digitronic",
    gboGeneration: "4",
    cylinderVolume: "54л",
    price: 35000,
    description: "Установка ГБО Digitronic на Renault Duster 2.0. Тороидальный баллон 54л. Отличный вариант для тех, кто много ездит. Экономия до 45% на топливе.",
    seoTitle: "Установка ГБО на Renault Duster в Махачкале | ZR AUTO",
    seoDescription: "Установка ГБО Digitronic на Renault Duster 2.0. Экономия до 45%. Гарантия 2 года.",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
    ],
    createdAt: "2024-10-18",
    published: true,
  },
  {
    id: "11",
    slug: "ustanovka-gbo-kia-sportage-2024",
    carBrand: "Kia",
    carModel: "Sportage",
    year: "2024",
    engineType: "Бензин",
    engineVolume: "2.0",
    gboSystem: "OMVL",
    gboGeneration: "4",
    cylinderVolume: "54л",
    price: 43000,
    description: "Установка ГБО OMVL на Kia Sportage 2.0. Баллон тороидальный 54л в нишу запасного колеса. Электронный блок управления нового поколения.",
    seoTitle: "Установка ГБО на Kia Sportage в Махачкале | ZR AUTO",
    seoDescription: "Установка ГБО OMVL на Kia Sportage 2.0. Баллон 54л. Гарантия 2 года.",
    images: [
      "https://images.unsplash.com/photo-1568844293986-8d0400f4e5b1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop",
    ],
    createdAt: "2024-11-05",
    published: true,
  },
  {
    id: "12",
    slug: "ustanovka-gbo-lada-granta-2024",
    carBrand: "Lada",
    carModel: "Granta",
    year: "2024",
    engineType: "Бензин",
    engineVolume: "1.6",
    gboSystem: "Alpha",
    gboGeneration: "4",
    cylinderVolume: "42л",
    price: 23000,
    description: "Установка ГБО Alpha на Lada Granta 1.6. Самый бюджетный вариант установки с отличным качеством. Баллон 42л. Расход газа — 9.5 л/100 км. Окупаемость 2–3 месяца.",
    seoTitle: "Установка ГБО на Lada Granta в Махачкале — от 23 000 ₽ | ZR AUTO",
    seoDescription: "Установка ГБО Alpha на Lada Granta. Самая доступная цена. Гарантия 2 года.",
    images: [
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
    ],
    createdAt: "2024-12-01",
    published: true,
  },
];

/** Fallback fuel prices. Actual prices are stored in content.fuelPrices and
 * managed via admin panel. These values are only used if the content store is
 * not yet initialized. */
export const FUEL_PRICES_FALLBACK = {
  gasoline92: 54.5,
  gasoline95: 59.0,
  gasoline98: 66.0,
  lpg: 28.0,
};

export function generateSlug(brand: string, model: string, year: string): string {
  return `ustanovka-gbo-${brand.toLowerCase().replace(/[\s-]+/g, "-")}-${model.toLowerCase().replace(/[\s-]+/g, "-")}-${year}`;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ru-RU").format(price);
}
