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
    seoDescription: "Профессиональная установка ГБО 4 поколения на Kia Rio в Махачкале. Итальянское оборудование OMVL. Гарантия 2 года. Опыт более 10 лет. Запись по телефону +7 988 444 44 85.",
    images: [],
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
    seoDescription: "Установка ГБО 4 поколения Lovato на Hyundai Solaris. Термопластиковые магистрали. Расход газа 8.2 л/100 км. Гарантия 2 года. ZR AUTO — 10 лет опыта.",
    images: [],
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
    seoDescription: "Установка ГБО BRC на Toyota Camry 2.5 в Махачкале. Баллон 54л. Экономия до 50% на топливе. Профессиональный монтаж с гарантией 2 года. ZR AUTO.",
    images: [],
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
    seoDescription: "Установка ГБО на Lada Vesta в Махачкале по доступной цене от 25 000 ₽. Оборудование Digitronic. Гарантия 2 года. Запись: +7 988 444 44 85.",
    images: [],
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
    seoDescription: "Установка ГБО Stag на Volkswagen Polo в Махачкале. Баллон 42л. Гарантия 2 года. Профессиональный монтаж. ZR AUTO — более 10 лет опыта.",
    images: [],
    createdAt: "2024-05-20",
    published: true,
  },
];

export const FUEL_PRICES = {
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
