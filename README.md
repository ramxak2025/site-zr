# ZR AUTO — Сайт установки ГБО в Махачкале

[![Next.js](https://img.shields.io/badge/Next.js-16.1-000)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-61dafb)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)](https://www.typescriptlang.org)

Продающий одностраничный сайт + каталог работ + админ-панель для центра установки газобаллонного оборудования (ГБО) ZR AUTO. Построен в **bento-стиле** с фокусом на SEO, скорость и удобство управления контентом.

---

## Содержание

- [Архитектура](#архитектура)
- [Скрипты](#скрипты)
- [Структура проекта](#структура-проекта)
- [Админ-панель](#админ-панель)
- [Роли и доступы](#роли-и-доступы)
- [SEO](#seo-руководство)
- [Безопасность](#безопасность)
- [Переменные окружения](#переменные-окружения)

---

## Архитектура

| Слой | Технология |
| --- | --- |
| Фреймворк | Next.js 16 (App Router) |
| UI | React 19 + TypeScript 5 |
| Стили | Tailwind CSS 4 (`@theme`) |
| Хранилище | JSON-файлы в `/data/` (без БД) |
| Рендеринг | ISR (`revalidate = 60`) |
| Авторизация | Роль-based, токен в localStorage |
| Изображения | `next/image` + `remotePatterns` |

### Почему без БД

Для небольшого бизнес-сайта с редкими обновлениями JSON-хранилище проще и дешевле. Все данные лежат в `/data/content.json` (контент, цены, отзывы) и `/data/installations.json` (портфолио работ). Миграция на Postgres/Prisma возможна без переписывания UI — достаточно переписать `src/lib/storage.ts` и `src/lib/content-storage.ts`.

---

## Скрипты

```bash
npm run dev      # Разработка на http://localhost:3000
npm run build    # Production-сборка
npm run start    # Запуск production-сервера
npm run lint     # ESLint
```

---

## Структура проекта

```
site-zr/
├── data/                         # JSON-хранилище
│   ├── content.json              # контент сайта (hero, services, цены, топливо)
│   └── installations.json        # портфолио работ
├── public/
│   └── images/                   # статические изображения
└── src/
    ├── app/
    │   ├── (public routes)       # главная, услуги, контакты, калькулятор...
    │   ├── admin/                # админ-панель (клиентская)
    │   │   ├── layout.tsx        # auth + sidebar, role-aware
    │   │   ├── page.tsx          # дашборд
    │   │   ├── content/          # редактор контента (только admin)
    │   │   ├── pricing/          # цены установки (admin + moderator)
    │   │   ├── fuel/             # цены топлива (admin + moderator)
    │   │   └── installations/    # CRUD работ
    │   ├── api/
    │   │   ├── auth/             # POST /api/auth — логин по паролю
    │   │   ├── content/          # GET/PUT /api/content — роль-проверка
    │   │   └── installations/    # GET/POST/PUT/DELETE
    │   ├── sitemap.ts            # автогенерация sitemap.xml
    │   ├── robots.ts             # robots.txt
    │   └── layout.tsx            # root layout + metadata + JSON-LD
    ├── components/
    │   ├── Hero.tsx              # hero-блок с анимацией логотипа
    │   ├── BentoShowcase.tsx     # bento-grid преимуществ + цены
    │   ├── Calculator.tsx        # калькулятор экономии (динамические цены)
    │   └── ...                   # остальные UI-компоненты
    └── lib/
        ├── auth.ts               # server-side: проверка паролей и токенов
        ├── admin-client.ts       # client-side: adminFetch() с x-auth-token
        ├── content.ts            # типы + DEFAULT_CONTENT
        ├── content-storage.ts    # чтение/запись data/content.json
        ├── data.ts               # типы Installation + CAR_BRANDS + FUEL_PRICES_FALLBACK
        └── storage.ts            # CRUD для installations.json
```

---

## Админ-панель

Доступна по адресу `/admin`.

### Разделы

| Раздел | Путь | Админ | Модератор |
| --- | --- | :---: | :---: |
| Дашборд | `/admin` | ✓ | ✓ |
| Контент сайта | `/admin/content` | ✓ | ✗ |
| Цены установки | `/admin/pricing` | ✓ | ✓ |
| Цены топлива | `/admin/fuel` | ✓ | ✓ |
| Работы (CRUD) | `/admin/installations` | ✓ | ✓ |

### Цены установки

Редактируются в `/admin/pricing`. Содержат 4 позиции:

- **4 цилиндра** — Kia, Hyundai, VW, Skoda, Lada и т.п.
- **6 цилиндров** — Toyota, Nissan, Ford, Hyundai
- **8 цилиндров** — BMW, Mercedes, Land Cruiser
- **Непосредственный впрыск** — FSI, TSI, GDI, SkyActiv

Цены отображаются в **Hero**, **BentoShowcase** и **Calculator** (как начальная стоимость установки).

### Цены топлива

Редактируются в `/admin/fuel`. Используются в **Calculator** для расчёта экономии и в **BentoShowcase** для блока «Ваша экономия». Четыре значения:

- АИ-92, АИ-95, АИ-98 — цены бензина
- Газ (LPG) — цена сжиженного газа

---

## Роли и доступы

Система имеет **две роли**:

### Администратор

- Полный доступ ко всем разделам
- Редактирование контента сайта (hero, услуги, отзывы, контакты, о компании)
- Управление работами (установками)
- Управление ценами установки и топлива

Пароль по умолчанию: `zrauto2024` (меняется через `ADMIN_PASSWORD` env).

### Модератор

- Ограниченный доступ
- Может добавлять/редактировать/удалять работы в «Наши работы»
- Может менять цены установки (4/6/8 цил + прямой впрыск)
- Может менять цены на топливо
- **Не может** менять основной контент сайта (hero, услуги, отзывы, контакты)

Пароль по умолчанию: `moder2024` (меняется через `MODERATOR_PASSWORD` env).

### Как работает авторизация

1. Пользователь вводит пароль на `/admin`
2. POST `/api/auth` проверяет пароль через `verifyPassword()` в `src/lib/auth.ts`
3. В ответ приходит токен (`zrauto_admin_2024` или `zrauto_moder_2024`) + роль + разрешения
4. Токен сохраняется в `localStorage` под ключом `zrauto_admin_session`
5. Каждый запрос админ-UI отправляется через `adminFetch()`, который добавляет заголовок `x-auth-token`
6. API-роуты вызывают `verifyToken()` и проверяют роль

> **Важно:** Это простая система для MVP. Для production рекомендуется переход на JWT с HttpOnly cookies или NextAuth.js.

---

## SEO-руководство

### 1. Метатеги

Глобальные метатеги заданы в `src/app/layout.tsx` (Metadata API):

- `title.template: "%s | ZR AUTO"` — все страницы получают префикс
- `description` — главное описание на 160 символов
- `keywords` — релевантные ключевые запросы
- `openGraph` + `twitter` — для соцсетей
- `alternates.canonical` — для каждой страницы
- `robots: { index: true, follow: true }`

Каждая дочерняя страница экспортирует свои `metadata` через `export const metadata` (или `generateMetadata` для динамических).

### 2. Структурированные данные (Schema.org)

В `layout.tsx` установлена JSON-LD разметка `AutoRepair` с:

- Название, описание, URL
- Адрес, координаты (`geo`)
- Часы работы (`openingHoursSpecification`)
- Телефон, ссылки на соцсети
- Ценовой диапазон

На страницах работ (`/installations/[slug]`) добавляется `Product` и `Service` разметка.
На `/calculator` — `FAQPage`.

### 3. sitemap.xml и robots.txt

- `src/app/sitemap.ts` автоматически генерирует `sitemap.xml` со всеми статическими страницами + динамическими страницами установок
- `src/app/robots.ts` создаёт `robots.txt` с разрешением всего кроме `/admin/` и `/api/`

### 4. Производительность (Core Web Vitals)

- **ISR** (`revalidate = 60`) вместо `force-dynamic` — страницы отдаются из кеша
- **`next/image`** везде, где показываются фото — автоматическая оптимизация + lazy loading
- **Preconnect** к `fonts.googleapis.com` + `fonts.gstatic.com` в layout
- **`compress: true`** + `poweredByHeader: false` в `next.config.ts`

### 5. Семантика

- Один `<h1>` на страницу, затем `<h2>`, `<h3>` по иерархии
- Осмысленный `alt` у всех содержательных `<img>` (декоративные получают пустой `alt=""`)
- Нативная навигация: `<nav>`, `<main>`, `<header>`, `<footer>`

### 6. Ключевые запросы (русскоязычное SEO)

Проект оптимизирован под следующие запросы:

- «Установка ГБО Махачкала», «ГБО Махачкала цена»
- «Газ на авто Махачкала», «газобаллонное оборудование»
- «ГБО 4 поколения», «OMVL Lovato BRC»
- «Установка ГБО на [Марка] [Модель]»
- «Калькулятор окупаемости ГБО»

### 7. Локальное SEO

- Адрес + город в `PostalAddress` JSON-LD
- Координаты в `GeoCoordinates`
- Ссылки на карты (Яндекс, 2ГИС) из карточки контактов
- Отзывы с платформ (Яндекс Карты, 2ГИС, Google)

### 8. Что ещё улучшить (TODO)

- [ ] Подключить Яндекс Метрику и Google Analytics
- [ ] Настроить верификацию Яндекс Вебмастер и Google Search Console
- [ ] Добавить hreflang (если будет версия на других языках)
- [ ] Интеграция с картами (`IFrame` Яндекс.Карт)
- [ ] Оптимизировать изображения в `public/` через `next/image` статично

---

## Безопасность

### Текущие меры

- **Проверка ролей** на API-роутах через `verifyToken()` для PUT/POST/DELETE
- **Content-Type** валидация в `JSON.parse` с try/catch
- **robots.txt** запрещает индексировать `/admin/` и `/api/`
- **`poweredByHeader: false`** скрывает версию Next.js
- **HTTPS** обязателен в production (настраивается на уровне хостинга)
- **CSP и другие заголовки** рекомендуется настроить в `next.config.ts` или на уровне CDN/nginx

### Что важно сделать в production

1. **Поменять пароли** через env-переменные (`ADMIN_PASSWORD`, `MODERATOR_PASSWORD`)
2. **Rate limiting** на `/api/auth` (fail2ban, Vercel Rate Limiting, Upstash Redis)
3. **HttpOnly cookies** вместо localStorage (защита от XSS)
4. **Rotation токенов** — сейчас токены статические
5. **HTTPS** и HSTS-заголовок
6. **CSP** (Content Security Policy) — запретить inline-скрипты, указать allowlist доменов для изображений
7. **Мониторинг** (Sentry, LogRocket)

---

## Переменные окружения

Создайте `.env.local` в корне проекта:

```bash
# Пароль администратора (полный доступ)
ADMIN_PASSWORD=вашНадёжныйПароль

# Пароль модератора (ограниченный доступ)
MODERATOR_PASSWORD=вашНадёжныйПароль2

# Базовый URL сайта (используется в sitemap и metadata)
NEXT_PUBLIC_SITE_URL=https://zrauto.ru
```

Без этих переменных используются fallback-значения из `src/lib/auth.ts` (`zrauto2024` и `moder2024`), **что небезопасно для production**.

---

## Deploy

Рекомендуется **Vercel**:

```bash
vercel deploy --prod
```

Для self-hosting используйте:

```bash
npm run build
npm run start
```

Убедитесь, что папка `data/` сохраняется между деплоями (volume mount в Docker / VPS).

---

## Лицензия

Проект создан для ZR AUTO (Махачкала). Все права защищены.
