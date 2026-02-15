import Link from "next/link";
import Image from "next/image";

const YANDEX_MAPS_URL = "https://yandex.ru/maps/-/CHEzfL~r";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="ZR AUTO"
                width={40}
                height={30}
                className="h-8 w-auto brightness-0 invert"
              />
              <div>
                <div className="text-white font-bold tracking-wider">ZR AUTO</div>
                <div className="text-white/40 text-xs">Центр установки ГБО</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Профессиональная установка газобаллонного оборудования в Махачкале. Более 10 лет опыта.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Навигация</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-white/40 hover:text-primary text-sm transition-colors duration-200">Услуги</Link></li>
              <li><Link href="/about" className="text-white/40 hover:text-primary text-sm transition-colors duration-200">О компании</Link></li>
              <li><Link href="/calculator" className="text-white/40 hover:text-primary text-sm transition-colors duration-200">Калькулятор</Link></li>
              <li><Link href="/installations" className="text-white/40 hover:text-primary text-sm transition-colors duration-200">Работы</Link></li>
              <li><Link href="/contacts" className="text-white/40 hover:text-primary text-sm transition-colors duration-200">Контакты</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+79884444485" className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full shrink-0" />
                  +7 988 444-44-85
                </a>
              </li>
              <li>
                <a href="https://wa.me/79884444485" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={YANDEX_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-start gap-2"
                >
                  <span className="w-1 h-1 bg-primary rounded-full shrink-0 mt-1.5" />
                  <span>Махачкала, ул. Хаджи Булача 71<br /><span className="text-primary text-xs">Яндекс Карты &rarr;</span></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Режим работы</h3>
            <ul className="space-y-2 text-sm text-white/40">
              <li className="flex justify-between"><span>Пн — Чт</span><span className="text-white/60">9:00 — 19:00</span></li>
              <li className="flex justify-between"><span>Пт</span><span className="text-white/60">14:00 — 19:00</span></li>
              <li className="flex justify-between"><span>Сб — Вс</span><span className="text-white/60">9:00 — 19:00</span></li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a href="https://t.me/zrauto" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 transition-all duration-200" aria-label="Telegram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="https://vk.com/zr.auto" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 transition-all duration-200" aria-label="VK">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.57 4 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.15-3.574 2.15-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/></svg>
              </a>
              <a href="https://youtube.com/@05auto" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 transition-all duration-200" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
          &copy; {new Date().getFullYear()} ZR AUTO. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
