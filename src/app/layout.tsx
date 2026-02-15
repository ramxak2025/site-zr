import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://zrauto.ru"),
  title: {
    default: "ZR AUTO — Установка ГБО в Махачкале | Газобаллонное оборудование",
    template: "%s | ZR AUTO",
  },
  description:
    "Профессиональная установка ГБО в Махачкале. Итальянское оборудование OMVL, Lovato, BRC. Гарантия 2 года. Более 10 лет опыта. Экономия до 50% на топливе. Звоните: +7 988 444-44-85",
  keywords: [
    "установка ГБО",
    "ГБО Махачкала",
    "газобаллонное оборудование",
    "установка газа на авто",
    "ГБО 4 поколения",
    "OMVL",
    "Lovato",
    "BRC",
    "экономия на топливе",
    "ZR AUTO",
  ],
  authors: [{ name: "ZR AUTO" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://zrauto.ru",
    siteName: "ZR AUTO",
    title: "ZR AUTO — Установка ГБО в Махачкале",
    description:
      "Профессиональная установка ГБО. Итальянское оборудование. Гарантия 2 года. Экономия до 50%.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZR AUTO — Установка ГБО в Махачкале",
    description:
      "Профессиональная установка ГБО. Итальянское оборудование. Гарантия 2 года.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zrauto.ru",
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#111827" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-white antialiased font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "ZR AUTO",
              description: "Центр по установке и ремонту ГБО в Махачкале",
              url: "https://zrauto.ru",
              telephone: "+79884444485",
              address: {
                "@type": "PostalAddress",
                streetAddress: "ул. Хаджи Булача 71",
                addressLocality: "Махачкала",
                addressRegion: "Дагестан",
                addressCountry: "RU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 42.9849,
                longitude: 47.5047,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
                  opens: "09:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "14:00",
                  closes: "19:00",
                },
              ],
              priceRange: "от 23000₽",
              image: "https://zrauto.ru/og-image.jpg",
              sameAs: [
                "https://t.me/zrauto",
                "https://vk.com/zr.auto",
                "https://youtube.com/@05auto",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
