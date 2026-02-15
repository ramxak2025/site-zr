"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const BOTTOM_NAV = [
  {
    href: "/",
    label: "Главная",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
  },
  {
    href: "/calculator",
    label: "Калькулятор",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" /></svg>,
  },
  {
    href: "/installations",
    label: "Работы",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" /></svg>,
  },
  {
    href: "tel:+79884444485",
    label: "Звонок",
    isExternal: true,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  },
  {
    href: "https://wa.me/79884444485",
    label: "WhatsApp",
    isExternal: true,
    isNewTab: true,
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  },
];

const DESKTOP_LINKS = [
  { href: "/services", label: "Услуги" },
  { href: "/about", label: "О компании" },
  { href: "/calculator", label: "Калькулятор" },
  { href: "/installations", label: "Работы" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop header — dark transparent */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden lg:block">
        <div className="bg-dark/80 backdrop-blur-xl border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-3 group">
                <Image src="/images/logo.png" alt="ZR AUTO" width={40} height={30} className="h-7 w-auto brightness-0 invert" priority />
                <div className="text-white font-bold text-sm tracking-wider">ZR AUTO</div>
              </Link>

              <nav className="flex items-center gap-1">
                {DESKTOP_LINKS.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3.5 py-1.5 text-sm rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-white bg-white/10"
                          : "text-white/50 hover:text-white hover:bg-white/[0.06]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-4">
                <a href="tel:+79884444485" className="text-sm text-white/40 hover:text-white transition-colors">
                  +7 988 444-44-85
                </a>
                <a
                  href="https://wa.me/79884444485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-light text-white text-sm font-bold px-5 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  Записаться
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile top bar — dark */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-dark/90 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="flex items-center justify-between h-14 px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="ZR AUTO" width={32} height={24} className="h-6 w-auto brightness-0 invert" priority />
            <span className="text-white font-bold text-sm tracking-wider">ZR AUTO</span>
          </Link>
          <a
            href="https://wa.me/79884444485"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg"
          >
            Записаться
          </a>
        </div>
      </header>

      {/* Mobile bottom nav — dark */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bottom-nav-safe bg-dark/95 backdrop-blur-xl border-t border-white/[0.06]">
        <div className="flex items-center justify-around h-14 max-w-lg mx-auto">
          {BOTTOM_NAV.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            if (link.isExternal) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.isNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex flex-col items-center gap-0.5 px-3 py-1 text-white/30 active:text-primary transition-colors"
                >
                  {link.icon}
                  <span className="text-[10px] font-medium">{link.label}</span>
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center gap-0.5 px-3 py-1 transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-white/30"
                }`}
              >
                {link.icon}
                <span className="text-[10px] font-medium">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
