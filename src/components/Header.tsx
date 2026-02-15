"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/#services", label: "Услуги" },
  { href: "/#advantages", label: "Преимущества" },
  { href: "/calculator", label: "Калькулятор" },
  { href: "/installations", label: "Примеры работ" },
  { href: "/#contacts", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-black text-lg md:text-xl transition-transform group-hover:scale-105">
              ZR
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg leading-tight">ZR AUTO</div>
              <div className="text-gray-400 text-xs leading-tight">Центр установки ГБО</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+79884444485" className="text-sm text-gray-300 hover:text-white transition-colors">
              +7 988 444-44-85
            </a>
            <a
              href="https://wa.me/79884444485"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Записаться
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Меню"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-surface-light border-t border-white/5 animate-fade-in">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-3">
              <a href="tel:+79884444485" className="text-center text-gray-300 py-2">
                +7 988 444-44-85
              </a>
              <a
                href="https://wa.me/79884444485"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white text-center font-semibold py-3 rounded-full"
              >
                Записаться на установку
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
