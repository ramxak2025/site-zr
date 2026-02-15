import type { Metadata } from "next";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Калькулятор окупаемости ГБО — Рассчитайте экономию на топливе",
  description:
    "Онлайн-калькулятор окупаемости установки ГБО. Узнайте, сколько вы сэкономите на топливе после перехода на газ. Расчёт за 30 секунд.",
  alternates: {
    canonical: "https://zrauto.ru/calculator",
  },
};

export default function CalculatorPage() {
  return (
    <div className="pt-20 md:pt-24 pb-16 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-gray-500">
          <a href="/" className="hover:text-primary transition-colors">Главная</a>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Калькулятор окупаемости</span>
        </nav>

        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Калькулятор окупаемости ГБО</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Рассчитайте, за сколько месяцев окупится установка газобаллонного оборудования на ваш автомобиль
          </p>
        </div>

        <Calculator compact />

        {/* FAQ section for SEO */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              {
                q: "Сколько стоит установка ГБО?",
                a: "Стоимость установки ГБО зависит от количества цилиндров и типа оборудования. Для 4-цилиндровых двигателей — от 23 000 ₽, для 6-цилиндровых — от 30 000 ₽, для 8-цилиндровых — от 38 000 ₽.",
              },
              {
                q: "За сколько окупается ГБО?",
                a: "При среднем пробеге 1500 км/мес и расходе 10 л/100 км, установка ГБО окупается за 3-6 месяцев. Чем больше пробег — тем быстрее окупаемость.",
              },
              {
                q: "Увеличивается ли расход газа по сравнению с бензином?",
                a: "Да, расход газа примерно на 10-15% выше, чем бензина. Однако газ стоит почти в 2 раза дешевле, поэтому итоговая экономия составляет 40-50%.",
              },
              {
                q: "Безопасно ли ГБО?",
                a: "Современное ГБО 4 поколения абсолютно безопасно при профессиональной установке. Мы используем сертифицированное оборудование и термопластиковые магистрали.",
              },
            ].map((faq, i) => (
              <details key={i} className="bg-surface-light rounded-xl border border-white/5 group">
                <summary className="p-5 cursor-pointer text-white font-medium flex items-center justify-between">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Сколько стоит установка ГБО?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Стоимость от 23 000 ₽ для 4-цилиндровых, от 30 000 ₽ для 6-цилиндровых, от 38 000 ₽ для 8-цилиндровых двигателей.",
                },
              },
              {
                "@type": "Question",
                name: "За сколько окупается ГБО?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "При среднем пробеге 1500 км/мес установка ГБО окупается за 3-6 месяцев.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
