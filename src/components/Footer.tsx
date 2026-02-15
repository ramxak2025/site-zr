import Link from "next/link";
import Image from "next/image";

const YANDEX_MAPS_URL = "https://yandex.ru/maps/-/CHEzfL~r";

export default function Footer() {
  return (
    <footer id="contacts" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-black" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/3 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="ZR AUTO"
                width={40}
                height={30}
                className="h-8 w-auto"
              />
              <div>
                <div className="text-white font-bold text-lg">ZR AUTO</div>
                <div className="text-white/20 text-xs">Центр установки ГБО</div>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed">
              Профессиональная установка газобаллонного оборудования в Махачкале. Более 10 лет опыта. Гарантия на все работы.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link href="/#services" className="text-white/30 hover:text-primary text-sm transition-colors duration-300">Услуги</Link></li>
              <li><Link href="/#advantages" className="text-white/30 hover:text-primary text-sm transition-colors duration-300">Преимущества</Link></li>
              <li><Link href="/calculator" className="text-white/30 hover:text-primary text-sm transition-colors duration-300">Калькулятор окупаемости</Link></li>
              <li><Link href="/installations" className="text-white/30 hover:text-primary text-sm transition-colors duration-300">Примеры установок</Link></li>
              <li><Link href="/#reviews" className="text-white/30 hover:text-primary text-sm transition-colors duration-300">Отзывы</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+79884444485" className="text-white/30 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +7 988 444-44-85
                </a>
              </li>
              <li>
                <a href="https://wa.me/79884444485" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={YANDEX_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white text-sm transition-colors duration-300 flex items-start gap-2"
                >
                  <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>Махачкала, ул. Хаджи Булача 71<br /><span className="text-primary text-xs">Открыть в Яндекс Картах &rarr;</span></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="text-white font-semibold mb-4">Режим работы</h3>
            <ul className="space-y-2 text-sm text-white/30">
              <li className="flex justify-between"><span>Пн — Чт</span><span className="text-white/60">9:00 — 19:00</span></li>
              <li className="flex justify-between"><span>Пт</span><span className="text-white/60">14:00 — 19:00</span></li>
              <li className="flex justify-between"><span>Сб — Вс</span><span className="text-white/60">9:00 — 19:00</span></li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="https://t.me/zrauto" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl glass hover:glass-red flex items-center justify-center text-white/30 hover:text-primary transition-all duration-300" aria-label="Telegram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="https://vk.com/zr.auto" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl glass hover:glass-red flex items-center justify-center text-white/30 hover:text-primary transition-all duration-300" aria-label="VK">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.57 4 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.15-3.574 2.15-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/></svg>
              </a>
              <a href="https://youtube.com/@05auto" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl glass hover:glass-red flex items-center justify-center text-white/30 hover:text-primary transition-all duration-300" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-white/20 text-sm">
          &copy; {new Date().getFullYear()} ZR AUTO. Все права защищены. Махачкала.
        </div>
      </div>
    </footer>
  );
}
