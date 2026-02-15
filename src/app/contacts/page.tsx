import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакты — ZR AUTO, Махачкала",
  description:
    "Контакты автосервиса ZR AUTO в Махачкале. Адрес: ул. Хаджи Булача 71. Телефон: +7 988 444-44-85. Установка ГБО, обслуживание и ремонт газобаллонного оборудования.",
  alternates: { canonical: "https://zrauto.ru/contacts" },
};

export default function ContactsPage() {
  return (
    <>
      <section className="page-banner">
        <div className="relative pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="breadcrumb mb-6">
            <Link href="/" className="hover:text-white transition-colors text-white/60">Главная</Link>
            <span className="sep">/</span>
            <span className="current text-white/40">Контакты</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">Контакты</h1>
          <p className="mt-4 text-lg text-white/50 max-w-2xl">Приезжайте, звоните или пишите — мы всегда на связи</p>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Map + Address */}
            <div className="lg:col-span-2 space-y-4">
              <a href="https://yandex.ru/maps/-/CHEzfL~r" target="_blank" rel="noopener noreferrer" className="card overflow-hidden block">
                <div className="aspect-[16/9] bg-surface-alt rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-4">
                  <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span className="text-primary font-semibold text-lg">Открыть в Яндекс Картах</span>
                  <span className="text-text-muted text-sm">Нажмите, чтобы посмотреть маршрут</span>
                </div>
              </a>
              <div className="px-2 py-2">
                <p className="text-text font-semibold text-lg">г. Махачкала, ул. Хаджи Булача 71</p>
                <p className="text-text-secondary mt-1">Ориентир: район Новой автостанции, напротив шиномонтажа</p>
              </div>
            </div>

            {/* Info cards */}
            <div className="space-y-4">
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                  </div>
                  <h3 className="text-text font-bold">Телефон</h3>
                </div>
                <a href="tel:+79884444485" className="text-text text-xl font-bold hover:text-primary transition-colors">+7 988 444-44-85</a>
                <p className="text-text-muted text-sm mt-1">Звоните в рабочее время</p>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                  </div>
                  <h3 className="text-text font-bold">WhatsApp</h3>
                </div>
                <a href="https://wa.me/79884444485" target="_blank" rel="noopener noreferrer" className="text-text font-bold hover:text-primary transition-colors">Написать в WhatsApp</a>
                <p className="text-text-muted text-sm mt-1">Ответим в течение 15 минут</p>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                  </div>
                  <h3 className="text-text font-bold">Email</h3>
                </div>
                <span className="text-text">info@zrauto.ru</span>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                  </div>
                  <h3 className="text-text font-bold">Режим работы</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between"><span className="text-text-secondary">Пн-Чт</span><span className="text-text font-medium">9:00 - 19:00</span></div>
                  <div className="flex justify-between"><span className="text-text-secondary">Пт</span><span className="text-text font-medium">14:00 - 19:00</span></div>
                  <div className="flex justify-between"><span className="text-text-secondary">Сб-Вс</span><span className="text-text font-medium">9:00 - 19:00</span></div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" /></svg>
                  </div>
                  <h3 className="text-text font-bold">Мы в соцсетях</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a href="https://t.me/zrauto" target="_blank" rel="noopener noreferrer" className="border border-border rounded-lg px-4 py-2 flex items-center gap-2 hover:border-primary/30 hover:text-primary transition-colors text-text text-sm font-medium">Telegram</a>
                  <a href="https://vk.com/zr.auto" target="_blank" rel="noopener noreferrer" className="border border-border rounded-lg px-4 py-2 flex items-center gap-2 hover:border-primary/30 hover:text-primary transition-colors text-text text-sm font-medium">VK</a>
                  <a href="https://youtube.com/@05auto" target="_blank" rel="noopener noreferrer" className="border border-border rounded-lg px-4 py-2 flex items-center gap-2 hover:border-primary/30 hover:text-primary transition-colors text-text text-sm font-medium">YouTube</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="card p-8 md:p-10 text-center">
              <h2 className="text-text text-2xl font-black">Записаться на установку</h2>
              <p className="text-text-secondary mt-3 max-w-md mx-auto">Оставьте заявку и мы перезвоним в течение 15 минут</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
                <a href="https://wa.me/79884444485" target="_blank" rel="noopener noreferrer" className="bg-primary text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary-light transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                  WhatsApp
                </a>
                <a href="tel:+79884444485" className="border border-border text-text font-semibold px-8 py-3 rounded-xl hover:border-primary/30 hover:text-primary transition-colors inline-flex items-center gap-2">Позвонить</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
